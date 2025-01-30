const gameBoard = document.getElementById('game-board');
const startButton = document.getElementById('start-game');
const scoreDisplay = document.getElementById('score');
const correctSound = document.getElementById('correct-sound');
let score = 0;

const alphabets = ['क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ', 'ट', 'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह'];
const numbers = Array.from({ length: 100 }, (_, i) => i + 1);

let tiles = [...alphabets, ...numbers];

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
        playCorrectSound();
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

startButton.addEventListener('click', () => {
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    createGameBoard();
});

createGameBoard();