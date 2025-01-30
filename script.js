const letters = "abcdefghijklmnopqrstuvwxyz".split("");
const nepaliLetters = "\u0915\u0916\u0917\u0918\u0919\u091a\u091b\u091c\u091d\u091e\u091f\u0920\u0921\u0922\u0923\u0924\u0925\u0926\u0927\u0928\u092a\u092b\u092c\u092d\u092e\u092f\u0930\u0932\u0935\u0936\u0937\u0938\u0939\u0915\u094d\u0937\u091c\u094d\u091e\u0924\u094d\u0930".split("");
const numbers = Array.from({ length: 100 }, (_, i) => i + 1);
const roadSigns = [
    { color: "Red", meaning: "Stop", image: "https://via.placeholder.com/100/ff0000?text=STOP" },
    { color: "Green", meaning: "Go", image: "https://via.placeholder.com/100/00ff00?text=GO" },
    { color: "Yellow", meaning: "Hold", image: "https://via.placeholder.com/100/ffff00?text=HOLD" }
];

let currentQuestion;

function getRandomQuestion() {
    let category = Math.floor(Math.random() * 4); // 0, 1, 2, or 3

    if (category === 0) {
        let index = Math.floor(Math.random() * (letters.length - 1));
        currentQuestion = { type: 'letter', value: letters[index], next: letters[index + 1] };
        showTextQuestion(`Reyom, what comes after ${currentQuestion.value}?`);
    } else if (category === 1) {
        let index = Math.floor(Math.random() * (nepaliLetters.length - 1));
        currentQuestion = { type: 'nepali', value: nepaliLetters[index], next: nepaliLetters[index + 1] };
        showTextQuestion(`Reyom, what comes after ${currentQuestion.value}?`);
    } else if (category === 2) {
        let number = numbers[Math.floor(Math.random() * (numbers.length - 1))];
        currentQuestion = { type: 'number', value: number, next: number + 1 };
        showTextQuestion(`Reyom, what comes after ${currentQuestion.value}?`);
    } else {
        let sign = roadSigns[Math.floor(Math.random() * roadSigns.length)];
        currentQuestion = { type: 'roadSign', color: sign.color, meaning: sign.meaning };
        showSignQuestion(sign);
    }
}

function showTextQuestion(text) {
    document.getElementById("question").innerText = text;
    document.getElementById("text-answer").style.display = "block";
    document.getElementById("multiple-choice").style.display = "none";
}

function showSignQuestion(sign) {
    document.getElementById("question").innerText = "Which color is this?";
    document.getElementById("sign-image").src = sign.image;
    document.getElementById("multiple-choice").style.display = "block";
    document.getElementById("text-answer").style.display = "none";
    
    let options = ["Red", "Green", "Yellow"];
    shuffleArray(options);
    
    let optionButtons = options.map(option => 
        `<button class="option-button" onclick="checkSignAnswer('${option}')">${option}</button>`
    ).join("");
    
    document.getElementById("options").innerHTML = optionButtons;
}

function checkSignAnswer(selected) {
    if (selected === currentQuestion.color) {
        speakMessage("Congratulations mero Reyom xora. I love you mero babu.");
    }
    setTimeout(getRandomQuestion, 1500);
}

function checkAnswer() {
    let userAnswer = document.getElementById("answer").value.trim();
    if (userAnswer.toLowerCase() === String(currentQuestion.next)) {
        speakMessage("Congratulations mero Reyom xora. I love you mero babu.");
    }
    document.getElementById("answer").value = "";
    setTimeout(getRandomQuestion, 1500);
}

function speakMessage(message) {
    let speech = new SpeechSynthesisUtterance(message);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

document.addEventListener("DOMContentLoaded", getRandomQuestion);
