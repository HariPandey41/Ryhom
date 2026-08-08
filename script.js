/* ===========================================================
   Reyom's Hero Academy
   A learning game for Grade 1 (Nepal) — English/Nepali letters,
   numbers, road signs, math, science, and English grammar.
   =========================================================== */

/* -----------------------------------------------------------
   1. CONTENT DATA
   ----------------------------------------------------------- */

const AVATARS = ["🦸", "🦸‍♂️", "🦸‍♀️", "🦹", "🧑‍🚀", "🦁", "🐯", "🐉"];

const LEVELS = [
  { name: "Rookie Hero" },
  { name: "Junior Defender" },
  { name: "Sky Guardian" },
  { name: "Thunder Champion" },
  { name: "Shield Master" },
  { name: "Star Ranger" },
  { name: "Galaxy Protector" },
  { name: "Lightning Titan" },
  { name: "Cosmic Champion" },
  { name: "Ultimate Legend" }
];

const BADGES = [
  { name: "Star Catcher Badge", emoji: "🌟", desc: "You caught 10 stars like a true hero!" },
  { name: "Brainy Badge", emoji: "🧠", desc: "Your super brain solved 20 missions!" },
  { name: "Speedster Badge", emoji: "⚡", desc: "Zoom zoom! 30 stars collected!" },
  { name: "Shield Badge", emoji: "🛡️", desc: "You protected the city with 40 stars!" },
  { name: "Rocket Badge", emoji: "🚀", desc: "Blast off! 50 stars strong!" },
  { name: "Galaxy Badge", emoji: "🌌", desc: "You explored 60 stars of knowledge!" },
  { name: "Thunder Badge", emoji: "🌩️", desc: "70 stars of pure power!" },
  { name: "Champion Badge", emoji: "🏆", desc: "80 stars — a true champion!" },
  { name: "Diamond Badge", emoji: "💎", desc: "90 stars, shining bright!" },
  { name: "Legend Badge", emoji: "👑", desc: "100 stars — you are a LEGEND!" }
];

const PRAISE_MESSAGES = [
  "Shabash mero Reyom! You did it!",
  "Wow! You are a super hero brain!",
  "Correct! I love you mero babu!",
  "Amazing job, hero!",
  "Ramro Reyom! That's correct!",
  "You are so smart, keep going!",
  "Zoom! Another win for the hero!",
  "Fantastic! High five, champion!",
  "Great thinking, mero babu!",
  "You nailed it, superstar!"
];

const TRY_AGAIN_MESSAGES = [
  "Almost, hero! Try once more.",
  "Close one! Think again.",
  "Not quite — you can do it!",
  "Oops, try again champion!",
  "Keep trying, super brain!"
];

const REVEAL_MESSAGES = [
  "No worries! The answer was",
  "That's okay, hero! It was",
  "Good try! The answer is"
];

/* ---- sequence categories (existing, kept & improved) ---- */
const ENGLISH_LETTERS = "abcdefghijklmnopqrstuvwxyz".split("");
const NEPALI_LETTERS =
  "\u0915\u0916\u0917\u0918\u0919\u091a\u091b\u091c\u091d\u091e\u091f\u0920\u0921\u0922\u0923\u0924\u0925\u0926\u0927\u0928\u092a\u092b\u092c\u092d\u092e\u092f\u0930\u0932\u0935\u0936\u0937\u0938\u0939"
    .split("");
const NUMBERS_MAX = 100;

const ROAD_SIGNS = [
  { color: "Red", meaning: "Stop", hex: "#E63946" },
  { color: "Green", meaning: "Go", hex: "#2A9D8F" },
  { color: "Yellow", meaning: "Get Ready", hex: "#FFB703" }
];

/* ---- math ---- */
const COUNT_EMOJI = ["🍎", "⚽", "🚗", "🎈", "🐶", "🌟", "🐟", "🦋"];

const SHAPE_QUESTIONS = [
  { q: "Which shape is round with no corners?", options: ["Circle", "Square", "Triangle", "Rectangle"], answer: "Circle" },
  { q: "Which shape has 3 sides and 3 corners?", options: ["Circle", "Square", "Triangle", "Rectangle"], answer: "Triangle" },
  { q: "Which shape has 4 equal sides?", options: ["Circle", "Square", "Triangle", "Rectangle"], answer: "Square" },
  { q: "Which shape is long with 4 sides, like a door?", options: ["Circle", "Rectangle", "Triangle", "Star"], answer: "Rectangle" },
  { q: "A ball is shaped like a...?", options: ["Circle", "Square", "Triangle", "Rectangle"], answer: "Circle" }
];

/* ---- science (Grade 1 Nepal) ---- */
const SCIENCE_QUESTIONS = [
  { q: "Which part of the body do we use to see?", options: ["Eyes", "Ears", "Nose", "Hands"], answer: "Eyes" },
  { q: "Which part of the body do we use to hear?", options: ["Ears", "Eyes", "Tongue", "Skin"], answer: "Ears" },
  { q: "Which part of the body do we use to smell?", options: ["Nose", "Ears", "Eyes", "Hands"], answer: "Nose" },
  { q: "Which part of the body do we use to taste food?", options: ["Tongue", "Nose", "Ears", "Hair"], answer: "Tongue" },
  { q: "Which part of the body do we use to touch and feel?", options: ["Skin", "Eyes", "Ears", "Tongue"], answer: "Skin" },
  { q: "How many eyes do we have?", options: ["2", "1", "3", "4"], answer: "2" },
  { q: "How many ears do we have?", options: ["2", "1", "3", "4"], answer: "2" },
  { q: "How many fingers are on one hand?", options: ["5", "4", "6", "10"], answer: "5" },
  { q: "Which animal gives us milk?", options: ["Cow", "Dog", "Cat", "Lion"], answer: "Cow" },
  { q: "Which animal says 'Meow'?", options: ["Cat", "Dog", "Cow", "Duck"], answer: "Cat" },
  { q: "Which animal barks?", options: ["Dog", "Cat", "Cow", "Bird"], answer: "Dog" },
  { q: "Which one is a wild animal?", options: ["Lion", "Cow", "Dog", "Goat"], answer: "Lion" },
  { q: "Which one is a domestic (pet/farm) animal?", options: ["Cow", "Tiger", "Lion", "Elephant"], answer: "Cow" },
  { q: "Which part of a plant is under the ground?", options: ["Root", "Leaf", "Flower", "Fruit"], answer: "Root" },
  { q: "Which part of a plant makes food using sunlight?", options: ["Leaves", "Root", "Stem", "Seed"], answer: "Leaves" },
  { q: "What do plants need to grow well?", options: ["Water and sunlight", "Only darkness", "Ice", "Sand"], answer: "Water and sunlight" },
  { q: "When do we see the Sun?", options: ["Day", "Night", "Never", "Only rain"], answer: "Day" },
  { q: "When do we see the Moon and stars?", options: ["Night", "Day", "Never", "Only rain"], answer: "Night" },
  { q: "Which one is a living thing?", options: ["Tree", "Stone", "Chair", "Table"], answer: "Tree" },
  { q: "Which one is a non-living thing?", options: ["Rock", "Bird", "Fish", "Boy"], answer: "Rock" },
  { q: "What do we wear when it is very cold?", options: ["Warm sweater", "Slippers only", "Sunglasses", "Nothing"], answer: "Warm sweater" },
  { q: "What falls from the sky when it rains?", options: ["Water drops", "Sand", "Leaves", "Snowballs only"], answer: "Water drops" }
];

/* ---- English grammar (Grade 1 Nepal) ---- */
const GRAMMAR_QUESTIONS = [
  { q: "Which of these is a vowel letter?", options: ["A", "B", "C", "D"], answer: "A" },
  { q: "Which of these is a vowel letter?", options: ["E", "F", "G", "H"], answer: "E" },
  { q: "Which of these is a consonant letter?", options: ["B", "A", "E", "O"], answer: "B" },
  { q: "Which one is a CAPITAL letter?", options: ["A", "a", "b", "c"], answer: "A" },
  { q: "Which one is a small letter?", options: ["b", "B", "C", "D"], answer: "b" },
  { q: "What is the opposite of 'Big'?", options: ["Small", "Tall", "Wide", "Long"], answer: "Small" },
  { q: "What is the opposite of 'Hot'?", options: ["Cold", "Warm", "Wet", "Dry"], answer: "Cold" },
  { q: "What is the opposite of 'Up'?", options: ["Down", "Left", "Right", "Fast"], answer: "Down" },
  { q: "What is the opposite of 'Happy'?", options: ["Sad", "Fast", "Big", "Loud"], answer: "Sad" },
  { q: "What is the opposite of 'Day'?", options: ["Night", "Sun", "Sky", "Cloud"], answer: "Night" },
  { q: "What is the plural of 'Cat'?", options: ["Cats", "Cat's", "Caty", "Cates"], answer: "Cats" },
  { q: "What is the plural of 'Book'?", options: ["Books", "Bookes", "Bookies", "Book's"], answer: "Books" },
  { q: "Which one is a naming word (noun)?", options: ["Dog", "Run", "Jump", "Happy"], answer: "Dog" },
  { q: "Which one is a naming word (noun)?", options: ["School", "Eat", "Fast", "Sing"], answer: "School" },
  { q: "Which one is an action word (verb)?", options: ["Run", "Dog", "Chair", "Sky"], answer: "Run" },
  { q: "Which one is an action word (verb)?", options: ["Jump", "Book", "Cat", "Table"], answer: "Jump" }
];

/* -----------------------------------------------------------
   2. CATEGORY DEFINITIONS
   ----------------------------------------------------------- */

const CATEGORIES = {
  letter: { label: "English Letters", chip: "ABC" },
  nepali: { label: "Nepali Letters", chip: "\u0915\u0916\u0917" },
  number: { label: "Numbers", chip: "123" },
  roadSign: { label: "Road Signs", chip: "ROAD SIGNS" },
  math: { label: "Math", chip: "MATH" },
  science: { label: "Science", chip: "SCIENCE" },
  grammar: { label: "English Grammar", chip: "GRAMMAR" }
};

/* -----------------------------------------------------------
   3. STATE
   ----------------------------------------------------------- */

const STORAGE_KEY = "ryhomHeroState_v1";

function defaultState() {
  const enabledCategories = {};
  Object.keys(CATEGORIES).forEach((k) => (enabledCategories[k] = true));
  return {
    heroName: "Reyom",
    avatar: AVATARS[0],
    stars: 0,
    correctTotal: 0,
    streak: 0,
    bestStreak: 0,
    badgesEarned: [],
    lastLevelIndex: 0,
    enabledCategories,
    soundOn: true,
    ttsOn: true,
    hasProfile: false
  };
}

let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return Object.assign(defaultState(), parsed);
  } catch (e) {
    return defaultState();
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    /* storage unavailable — game still works, just won't persist */
  }
}

/* -----------------------------------------------------------
   4. DOM REFS
   ----------------------------------------------------------- */

const el = (id) => document.getElementById(id);

const startScreen = el("start-screen");
const gameScreen = el("game-screen");
const heroNameInput = el("hero-name");
const avatarPicker = el("avatar-picker");
const startBtn = el("start-btn");
const settingsOpenBtn = el("settings-open-btn");
const settingsOpenBtn2 = el("settings-open-btn-2");

const heroAvatarBadge = el("hero-avatar-badge");
const hudHeroName = el("hud-hero-name");
const hudLevelName = el("hud-level-name");
const hudStreak = el("hud-streak");
const hudStars = el("hud-stars");
const muteBtn = el("mute-btn");

const powerMeterFill = el("power-meter-fill");
const powerMeterLabel = el("power-meter-label");
const categoryChip = el("category-chip");

const questionEl = el("question");
const signBox = el("sign-box");
const visualBox = el("visual-box");
const textAnswerBlock = el("text-answer");
const answerInput = el("answer");
const submitBtn = el("submit-btn");
const mcqBlock = el("multiple-choice");
const optionsGrid = el("options");
const responseEl = el("response");
const skipBtn = el("skip-btn");
const micBtn = el("mic-btn");

const prizeModal = el("prize-modal");
const prizeLevelName = el("prize-level-name");
const prizeBadgeEmoji = el("prize-badge-emoji");
const prizeBadgeName = el("prize-badge-name");
const prizeBadgeDesc = el("prize-badge-desc");
const prizeContinueBtn = el("prize-continue-btn");

const settingsModal = el("settings-modal");
const categoryTogglesWrap = el("category-toggles");
const ttsToggle = el("tts-toggle");
const soundToggle = el("sound-toggle");
const resetProgressBtn = el("reset-progress-btn");
const settingsCloseBtn = el("settings-close-btn");

const confettiCanvas = el("confetti-canvas");

/* -----------------------------------------------------------
   5. AUDIO — Web Audio synth (no external files needed)
   ----------------------------------------------------------- */

let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (AC) audioCtx = new AC();
  }
  return audioCtx;
}

function playTone(freq, startTime, duration, type = "sine", gainPeak = 0.18) {
  if (!state.soundOn) return;
  const ctx = getAudioCtx();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  osc.connect(gain);
  gain.connect(ctx.destination);
  const t0 = ctx.currentTime + startTime;
  gain.gain.setValueAtTime(0, t0);
  gain.gain.linearRampToValueAtTime(gainPeak, t0 + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, t0 + duration);
  osc.start(t0);
  osc.stop(t0 + duration + 0.02);
}

function playSuccessChime() {
  playTone(523.25, 0, 0.15, "triangle"); // C5
  playTone(659.25, 0.12, 0.15, "triangle"); // E5
  playTone(783.99, 0.24, 0.25, "triangle"); // G5
}

function playTryAgainBuzz() {
  playTone(220, 0, 0.12, "sawtooth", 0.09);
  playTone(196, 0.1, 0.16, "sawtooth", 0.09);
}

function playLevelUpFanfare() {
  const notes = [523.25, 587.33, 659.25, 783.99, 1046.5];
  notes.forEach((f, i) => playTone(f, i * 0.13, 0.3, "square", 0.14));
}

function speak(message) {
  if (!state.ttsOn) return;
  if (!("speechSynthesis" in window)) return;
  try {
    window.speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance(message);
    speech.lang = "en-US";
    speech.rate = 0.95;
    speech.pitch = 1.05;
    window.speechSynthesis.speak(speech);
  } catch (e) {
    /* speech not available */
  }
}

/* -----------------------------------------------------------
   6. CONFETTI
   ----------------------------------------------------------- */

const confettiCtx = confettiCanvas.getContext("2d");
let confettiParticles = [];
let confettiAnimating = false;
const CONFETTI_COLORS = ["#E63946", "#1D3557", "#FFB703", "#2A9D8F", "#7B2CBF"];

function resizeConfettiCanvas() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeConfettiCanvas);
resizeConfettiCanvas();

function burstConfetti(count = 60) {
  for (let i = 0; i < count; i++) {
    confettiParticles.push({
      x: Math.random() * confettiCanvas.width,
      y: -20 - Math.random() * 100,
      vx: (Math.random() - 0.5) * 3,
      vy: 2 + Math.random() * 3,
      size: 5 + Math.random() * 6,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
      life: 0
    });
  }
  if (!confettiAnimating) {
    confettiAnimating = true;
    requestAnimationFrame(animateConfetti);
  }
}

function animateConfetti() {
  confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiParticles.forEach((p) => {
    p.x += p.vx;
    p.y += p.vy;
    p.rotation += p.rotationSpeed;
    p.life += 1;
    confettiCtx.save();
    confettiCtx.translate(p.x, p.y);
    confettiCtx.rotate((p.rotation * Math.PI) / 180);
    confettiCtx.fillStyle = p.color;
    confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
    confettiCtx.restore();
  });
  confettiParticles = confettiParticles.filter((p) => p.y < confettiCanvas.height + 30 && p.life < 400);
  if (confettiParticles.length > 0) {
    requestAnimationFrame(animateConfetti);
  } else {
    confettiAnimating = false;
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  }
}

/* -----------------------------------------------------------
   7. QUESTION GENERATION
   ----------------------------------------------------------- */

let currentQuestion = null;
let wrongAttempts = 0;

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function shuffle(array) {
  const a = array.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function enabledCategoryList() {
  return Object.keys(CATEGORIES).filter((k) => state.enabledCategories[k]);
}

function getRandomQuestion() {
  wrongAttempts = 0;
  const pool = enabledCategoryList();
  const category = pool.length ? pick(pool) : "math";
  categoryChip.textContent = CATEGORIES[category].chip;

  switch (category) {
    case "letter":
      currentQuestion = buildLetterQuestion();
      break;
    case "nepali":
      currentQuestion = buildNepaliQuestion();
      break;
    case "number":
      currentQuestion = buildNumberQuestion();
      break;
    case "roadSign":
      currentQuestion = buildRoadSignQuestion();
      break;
    case "math":
      currentQuestion = buildMathQuestion();
      break;
    case "science":
      currentQuestion = buildBankQuestion(SCIENCE_QUESTIONS);
      break;
    case "grammar":
      currentQuestion = buildBankQuestion(GRAMMAR_QUESTIONS);
      break;
    default:
      currentQuestion = buildMathQuestion();
  }

  renderQuestion();
}

function heroLabel() {
  return state.heroName || "Reyom";
}

function buildLetterQuestion() {
  const index = randInt(0, ENGLISH_LETTERS.length - 2);
  const value = ENGLISH_LETTERS[index];
  const next = ENGLISH_LETTERS[index + 1];
  return {
    mode: "text",
    text: `${heroLabel()}, what letter comes after "${value.toUpperCase()}"?`,
    answer: next
  };
}

function buildNepaliQuestion() {
  const index = randInt(0, NEPALI_LETTERS.length - 2);
  const value = NEPALI_LETTERS[index];
  const next = NEPALI_LETTERS[index + 1];
  return {
    mode: "text",
    text: `${heroLabel()}, what comes after "${value}"?`,
    answer: next,
    lang: "ne-NP"
  };
}

function buildNumberQuestion() {
  const number = randInt(1, NUMBERS_MAX - 1);
  return {
    mode: "text",
    text: `${heroLabel()}, what number comes after ${number}?`,
    answer: String(number + 1)
  };
}

function buildRoadSignQuestion() {
  const sign = pick(ROAD_SIGNS);
  const askMeaning = Math.random() < 0.5;
  if (askMeaning) {
    const options = shuffle(ROAD_SIGNS.map((s) => s.meaning));
    return {
      mode: "mcq",
      text: `This light is ${sign.color.toUpperCase()}. What should we do?`,
      options,
      answer: sign.meaning,
      signHex: sign.hex
    };
  }
  const options = shuffle(ROAD_SIGNS.map((s) => s.color));
  return {
    mode: "mcq",
    text: "Which color is this traffic light?",
    options,
    answer: sign.color,
    signHex: sign.hex
  };
}

function buildMathQuestion() {
  const subtype = pick(["add", "add", "sub", "sub", "count", "shape", "compare", "beforeAfter"]);

  if (subtype === "add") {
    const a = randInt(1, 10);
    const b = randInt(1, 10);
    return { mode: "text", text: `${a} + ${b} = ?`, answer: String(a + b) };
  }
  if (subtype === "sub") {
    const a = randInt(5, 20);
    const b = randInt(0, a);
    return { mode: "text", text: `${a} - ${b} = ?`, answer: String(a - b) };
  }
  if (subtype === "count") {
    const n = randInt(2, 9);
    const emoji = pick(COUNT_EMOJI);
    return {
      mode: "text",
      text: `${heroLabel()}, how many ${emoji} do you see?`,
      answer: String(n),
      visual: emoji.repeat(n)
    };
  }
  if (subtype === "shape") {
    const q = pick(SHAPE_QUESTIONS);
    return { mode: "mcq", text: q.q, options: shuffle(q.options), answer: q.answer };
  }
  if (subtype === "compare") {
    let a = randInt(1, 20);
    let b = randInt(1, 20);
    while (a === b) b = randInt(1, 20);
    const askBigger = Math.random() < 0.5;
    const answer = askBigger ? Math.max(a, b) : Math.min(a, b);
    return {
      mode: "mcq",
      text: `Which number is ${askBigger ? "BIGGER" : "SMALLER"}: ${a} or ${b}?`,
      options: shuffle([String(a), String(b)]),
      answer: String(answer)
    };
  }
  // beforeAfter
  const number = randInt(2, 98);
  const askAfter = Math.random() < 0.5;
  const answer = askAfter ? number + 1 : number - 1;
  return {
    mode: "text",
    text: `What number comes ${askAfter ? "AFTER" : "BEFORE"} ${number}?`,
    answer: String(answer)
  };
}

function buildBankQuestion(bank) {
  const q = pick(bank);
  return { mode: "mcq", text: q.q, options: shuffle(q.options), answer: q.answer };
}

/* -----------------------------------------------------------
   8. RENDERING
   ----------------------------------------------------------- */

function renderQuestion() {
  responseEl.textContent = "";
  responseEl.className = "response-text";
  questionEl.textContent = currentQuestion.text;

  signBox.style.display = "none";
  visualBox.textContent = "";

  if (currentQuestion.signHex) {
    signBox.style.backgroundColor = currentQuestion.signHex;
    signBox.style.display = "block";
  }
  if (currentQuestion.visual) {
    visualBox.textContent = currentQuestion.visual;
  }

  if (currentQuestion.mode === "text") {
    textAnswerBlock.classList.remove("hidden");
    mcqBlock.classList.add("hidden");
    answerInput.value = "";
    if (isListening && recognition) recognition.stop();
    stopListeningUi();
    setTimeout(() => answerInput.focus(), 50);
  } else {
    mcqBlock.classList.remove("hidden");
    textAnswerBlock.classList.add("hidden");
    optionsGrid.innerHTML = "";
    currentQuestion.options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "option-button";
      btn.type = "button";
      btn.textContent = opt;
      btn.addEventListener("click", () => handleMcqAnswer(opt, btn));
      optionsGrid.appendChild(btn);
    });
  }
}

function renderHud() {
  hudHeroName.textContent = heroLabel();
  heroAvatarBadge.textContent = state.avatar;
  hudStreak.textContent = state.streak;
  hudStars.textContent = state.stars;

  const levelIndex = Math.min(Math.floor(state.stars / 10), LEVELS.length - 1);
  const cycle = Math.floor(state.stars / 10 / LEVELS.length);
  const levelName = LEVELS[levelIndex].name;
  hudLevelName.textContent = cycle > 0 ? `${levelName} +${cycle}` : levelName;

  const progressInLevel = state.stars % 10;
  powerMeterFill.style.width = `${(progressInLevel / 10) * 100}%`;
  powerMeterLabel.textContent = `${progressInLevel} / 10 to next level`;

  muteBtn.textContent = state.soundOn ? "🔊" : "🔇";
}

/* -----------------------------------------------------------
   9. ANSWER HANDLING
   ----------------------------------------------------------- */

function normalize(str) {
  return String(str).trim().toLowerCase();
}

const NUMBER_WORDS = {
  zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9,
  ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16,
  seventeen: 17, eighteen: 18, nineteen: 19, twenty: 20, thirty: 30, forty: 40, fifty: 50,
  sixty: 60, seventy: 70, eighty: 80, ninety: 90, hundred: 100
};

// Best-effort fallback: turns a spoken phrase like "twenty three" into 23,
// in case the browser returns number words instead of digits.
function wordsToNumber(text) {
  const words = normalize(text).replace(/-/g, " ").split(/\s+/);
  let total = 0;
  let matchedAny = false;
  words.forEach((w) => {
    if (Object.prototype.hasOwnProperty.call(NUMBER_WORDS, w)) {
      matchedAny = true;
      const val = NUMBER_WORDS[w];
      if (val === 100) total = (total || 1) * 100;
      else total += val;
    }
  });
  return matchedAny ? total : null;
}

submitBtn.addEventListener("click", handleTextAnswer);
answerInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleTextAnswer();
});

function handleTextAnswer() {
  const userAnswer = answerInput.value;
  let isCorrect = normalize(userAnswer) === normalize(currentQuestion.answer);

  if (!isCorrect && /^\d+$/.test(String(currentQuestion.answer))) {
    const spokenNumber = wordsToNumber(userAnswer);
    if (spokenNumber !== null && String(spokenNumber) === String(currentQuestion.answer)) {
      isCorrect = true;
    }
  }

  processAnswer(isCorrect);
  answerInput.value = "";
}

/* ---- voice answer (Web Speech API) ---- */
const SpeechRecognitionCtor = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;
let isListening = false;

function speechInputSupported() {
  return !!SpeechRecognitionCtor;
}

function stopListeningUi() {
  isListening = false;
  micBtn.classList.remove("listening");
  micBtn.textContent = "🎤 Speak";
}

function startListening() {
  if (!speechInputSupported() || isListening) return;
  recognition = new SpeechRecognitionCtor();
  recognition.lang = (currentQuestion && currentQuestion.lang) || "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  isListening = true;
  micBtn.classList.add("listening");
  micBtn.textContent = "🎙️ Listening...";
  responseEl.textContent = "I'm listening... say your answer!";
  responseEl.className = "response-text";

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.trim();
    answerInput.value = transcript;
    responseEl.textContent = `I heard: "${transcript}"`;
    stopListeningUi();
    setTimeout(() => handleTextAnswer(), 700);
  };
  recognition.onerror = () => {
    stopListeningUi();
    responseEl.textContent = "Didn't catch that — try again or type it in!";
    responseEl.className = "response-text retry";
  };
  recognition.onend = () => {
    stopListeningUi();
  };

  try {
    recognition.start();
  } catch (e) {
    stopListeningUi();
  }
}

micBtn.addEventListener("click", () => {
  if (isListening) {
    recognition.stop();
    return;
  }
  startListening();
});

function handleMcqAnswer(selected, btnEl) {
  const isCorrect = normalize(selected) === normalize(currentQuestion.answer);
  Array.from(optionsGrid.children).forEach((b) => (b.disabled = true));
  btnEl.classList.add(isCorrect ? "correct" : "wrong");
  if (!isCorrect) {
    Array.from(optionsGrid.children).forEach((b) => {
      if (normalize(b.textContent) === normalize(currentQuestion.answer)) {
        b.classList.add("correct");
      }
    });
  }
  processAnswer(isCorrect, true);
}

function processAnswer(isCorrect, isMcq = false) {
  if (isCorrect) {
    responseEl.textContent = pick(PRAISE_MESSAGES);
    responseEl.className = "response-text good";
    speak(pick(PRAISE_MESSAGES));
    playSuccessChime();
    burstConfetti(30);
    awardCorrect();
    setTimeout(getRandomQuestion, isMcq ? 1200 : 1400);
  } else {
    wrongAttempts += 1;
    playTryAgainBuzz();
    if (wrongAttempts >= 2) {
      responseEl.textContent = `${pick(REVEAL_MESSAGES)} "${currentQuestion.answer}". Let's try a new one!`;
      responseEl.className = "response-text retry";
      state.streak = 0;
      saveState();
      renderHud();
      setTimeout(getRandomQuestion, 2200);
    } else {
      responseEl.textContent = pick(TRY_AGAIN_MESSAGES);
      responseEl.className = "response-text retry";
      if (!isMcq) setTimeout(() => answerInput.focus(), 50);
    }
  }
}

function awardCorrect() {
  state.correctTotal += 1;
  state.streak += 1;
  state.bestStreak = Math.max(state.bestStreak, state.streak);

  const prevLevelIndexRaw = Math.floor(state.stars / 10);
  state.stars += 1;
  const newLevelIndexRaw = Math.floor(state.stars / 10);

  saveState();
  renderHud();

  if (newLevelIndexRaw > prevLevelIndexRaw) {
    setTimeout(() => showPrizeModal(newLevelIndexRaw), 600);
  }
}

/* -----------------------------------------------------------
   10. PRIZE MODAL
   ----------------------------------------------------------- */

function showPrizeModal(levelIndexRaw) {
  const levelIndex = Math.min(levelIndexRaw, LEVELS.length - 1);
  const cycle = Math.floor(levelIndexRaw / LEVELS.length);
  const levelName = LEVELS[levelIndex].name;
  const badgeSource = BADGES[levelIndex % BADGES.length];

  prizeLevelName.textContent = cycle > 0 ? `${levelName} +${cycle}` : levelName;
  prizeBadgeEmoji.textContent = badgeSource.emoji;
  prizeBadgeName.textContent = badgeSource.name;
  prizeBadgeDesc.textContent = badgeSource.desc;

  state.badgesEarned.push(badgeSource.name);
  saveState();

  playLevelUpFanfare();
  burstConfetti(120);
  speak(`Level up! ${heroLabel()} is now a ${levelName}!`);

  prizeModal.classList.remove("hidden");
}

prizeContinueBtn.addEventListener("click", () => {
  prizeModal.classList.add("hidden");
});

/* -----------------------------------------------------------
   11. START SCREEN SETUP
   ----------------------------------------------------------- */

function buildAvatarPicker() {
  avatarPicker.innerHTML = "";
  AVATARS.forEach((av) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "avatar-option" + (av === state.avatar ? " selected" : "");
    btn.textContent = av;
    btn.addEventListener("click", () => {
      state.avatar = av;
      Array.from(avatarPicker.children).forEach((c) => c.classList.remove("selected"));
      btn.classList.add("selected");
    });
    avatarPicker.appendChild(btn);
  });
}

function initStartScreen() {
  heroNameInput.value = state.heroName || "";
  buildAvatarPicker();
  startBtn.textContent = state.hasProfile ? "CONTINUE MISSION" : "START MISSION";
}

startBtn.addEventListener("click", () => {
  const typed = heroNameInput.value.trim();
  state.heroName = typed || "Reyom";
  state.hasProfile = true;
  saveState();
  getAudioCtx(); // unlock audio on user gesture
  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  renderHud();
  getRandomQuestion();
});

/* -----------------------------------------------------------
   12. SKIP / MUTE
   ----------------------------------------------------------- */

skipBtn.addEventListener("click", () => {
  state.streak = 0;
  saveState();
  renderHud();
  getRandomQuestion();
});

muteBtn.addEventListener("click", () => {
  state.soundOn = !state.soundOn;
  state.ttsOn = state.soundOn;
  saveState();
  renderHud();
  syncSettingsUi();
});

/* -----------------------------------------------------------
   13. SETTINGS MODAL
   ----------------------------------------------------------- */

function buildCategoryToggles() {
  categoryTogglesWrap.innerHTML = "";
  Object.keys(CATEGORIES).forEach((key) => {
    const row = document.createElement("div");
    row.className = "cat-toggle-row";

    const label = document.createElement("label");
    label.setAttribute("for", `cat-${key}`);
    label.textContent = CATEGORIES[key].label;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `cat-${key}`;
    checkbox.checked = state.enabledCategories[key];
    checkbox.addEventListener("change", () => {
      const enabledCount = Object.values(state.enabledCategories).filter(Boolean).length;
      if (!checkbox.checked && enabledCount <= 1) {
        // keep at least one category enabled
        checkbox.checked = true;
        return;
      }
      state.enabledCategories[key] = checkbox.checked;
      saveState();
    });

    row.appendChild(label);
    row.appendChild(checkbox);
    categoryTogglesWrap.appendChild(row);
  });
}

function syncSettingsUi() {
  ttsToggle.checked = state.ttsOn;
  soundToggle.checked = state.soundOn;
}

function openSettings() {
  buildCategoryToggles();
  syncSettingsUi();
  settingsModal.classList.remove("hidden");
}

settingsOpenBtn.addEventListener("click", openSettings);
settingsOpenBtn2.addEventListener("click", openSettings);
settingsCloseBtn.addEventListener("click", () => {
  settingsModal.classList.add("hidden");
  renderHud();
});

ttsToggle.addEventListener("change", () => {
  state.ttsOn = ttsToggle.checked;
  saveState();
});
soundToggle.addEventListener("change", () => {
  state.soundOn = soundToggle.checked;
  saveState();
  renderHud();
});

resetProgressBtn.addEventListener("click", () => {
  const confirmed = window.confirm(
    "This will erase all stars, levels and badges. Are you sure, grown-up?"
  );
  if (!confirmed) return;
  const keepName = state.heroName;
  const keepAvatar = state.avatar;
  state = defaultState();
  state.heroName = keepName;
  state.avatar = keepAvatar;
  saveState();
  settingsModal.classList.add("hidden");
  renderHud();
  buildCategoryToggles();
});

/* -----------------------------------------------------------
   14. INIT
   ----------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  initStartScreen();
  if (!speechInputSupported()) {
    micBtn.classList.add("hidden");
  }
});
