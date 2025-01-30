const gameBoard = document.getElementById('game-board');
const startButton = document.getElementById('start-game');
const scoreDisplay = document.getElementById('score');
const questionDisplay = document.getElementById('question');
const correctSound = document.getElementById('correct-sound');
let score = 0;
let currentQuestion = null;

const alphabets = ['क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ', 'ट', 'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह'];
const numbers = Array.from({ length: 100 }, (_, i) => i + 1);
const englishAlphabets = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));

let tiles = [...alphabets, ...numbers, ...englishAlphabets];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createGameBoard() {
    gameBoard.innerHTML = '';
    shuffle(tiles);
    tiles.forEach((tile, index) => {
        const tileElement = document.createElement('div');
        tileElement.classList.add('tile');
        tileElement.dataset.value = tile;
        tileElement.textContent = tile;
        tileElement.addEventListener('click', () => selectTile(tileElement));
        gameBoard.appendChild(tileElement);
    });
}

function selectTile(tile) {
    if (tile.classList.contains('selected')) {
        tile.classList.remove('selected');
        score -= 1;
    } else {
        tile.classList.add('selected');
        score += 1;
        if (tile.dataset.value === currentQuestion.correctAnswer) {
            playCorrectSound();
        }
    }
    scoreDisplay.textContent = `Score: ${score}`;
}

function playCorrectSound() {
    correctSound.play();
    speak("Congratulations, my dear son. I love you.");
}

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    utterance.pitch = 1;
    utterance.volume = 1;
    window.speechSynthesis.speak(utterance);
}

function generateQuestion() {
    const questionType = Math.floor(Math.random() * 3);
    let questionText = '';
    let correctAnswer = '';

    switch (questionType) {
        case 0: // English alphabets
            const randomIndexEng = Math.floor(Math.random() * englishAlphabets.length);
            questionText = `Reyom Son, what comes after ${englishAlphabets[randomIndexEng]}?`;
            correctAnswer = englishAlphabets[(randomIndexEng + 1) % englishAlphabets.length];
            break;
        case 1: // Hindi alphabets
            const randomIndexHindi = Math.floor(Math.random() * alphabets.length);
            questionText = `Reyom Son, what comes after ${alphabets[randomIndexHindi]}?`;
            correctAnswer = alphabets[(randomIndexHindi + 1) % alphabets.length];
            break;
        case 2: // Numbers
            const randomIndexNum = Math.floor(Math.random() * numbers.length);
            questionText = `Reyom Son, what comes after ${numbers[randomIndexNum]}?`;
            correctAnswer = numbers[(randomIndexNum + 1) % numbers.length];
            break;
    }

    currentQuestion = { question: questionText, correctAnswer: correctAnswer };
    questionDisplay.textContent = questionText;
}

startButton.addEventListener('click', () => {
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    generateQuestion();
    createGameBoard();
});

generateQuestion();
createGameBoard();
