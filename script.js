const letters = "abcdefghijklmnopqrstuvwxyz".split("");
const nepaliLetters = "\u0915\u0916\u0917\u0918\u0919\u091a\u091b\u091c\u091d\u091e\u091f\u0920\u0921\u0922\u0923\u0924\u0925\u0926\u0927\u0928\u092a\u092b\u092c\u092d\u092e\u092f\u0930\u0932\u0935\u0936\u0937\u0938\u0939\u0915\u094d\u0937\u091c\u094d\u091e\u0924\u094d\u0930".split("");
const numbers = Array.from({ length: 100 }, (_, i) => i + 1);
let currentQuestion;

function getRandomQuestion() {
    let category = Math.floor(Math.random() * 3);
    if (category === 0) {
        let index = Math.floor(Math.random() * (letters.length - 1));
        currentQuestion = { type: 'letter', value: letters[index], next: letters[index + 1] };
    } else if (category === 1) {
        let index = Math.floor(Math.random() * (nepaliLetters.length - 1));
        currentQuestion = { type: 'nepali', value: nepaliLetters[index], next: nepaliLetters[index + 1] };
    } else {
        let number = numbers[Math.floor(Math.random() * (numbers.length - 1))];
        currentQuestion = { type: 'number', value: number, next: number + 1 };
    }
    document.getElementById("question").innerText = `Reyom, what comes after ${currentQuestion.value}?`;
}

function checkAnswer() {
    let userAnswer = document.getElementById("answer").value.trim();
    if (userAnswer.toLowerCase() === String(currentQuestion.next)) {
        document.getElementById("response").innerText = "Correct! Let's try another.";
    } else {
        document.getElementById("response").innerText = "Sorry Reyom.";
    }
    document.getElementById("answer").value = "";
    getRandomQuestion();
}

getRandomQuestion();
