const colors = [
    { color: "Red", hex: "red" },
    { color: "Green", hex: "green" },
    { color: "Yellow", hex: "yellow" }
];

function generateQuestion() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const selectedColor = colors[randomIndex];

    document.getElementById("color-box").style.backgroundColor = selectedColor.hex;
    document.getElementById("question").setAttribute("data-answer", selectedColor.color);
}

function checkAnswer(answer) {
    const correctAnswer = document.getElementById("question").getAttribute("data-answer");
    const response = document.getElementById("response");

    if (answer === correctAnswer) {
        response.innerHTML = "🎉 Congrachulation Mero Reyom xora! I love You Mero Babu. ❤️";
        response.style.color = "green";
    } else {
        response.innerHTML = "❌ Try Again!";
        response.style.color = "red";
    }

    setTimeout(generateQuestion, 2000);
}

// Load first question
generateQuestion();
