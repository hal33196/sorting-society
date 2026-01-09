// app.js

// --- DOM refs ---
const screenStart = document.getElementById("screenStart");
const screenQuiz = document.getElementById("screenQuiz");
const screenResult = document.getElementById("screenResult");

const startBtn = document.getElementById("startBtn");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const copyBtn = document.getElementById("copyBtn");

const qText = document.getElementById("qText");
const answersDiv = document.getElementById("answers");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");

const classLabel = document.getElementById("classLabel");
const polLabel = document.getElementById("polLabel");
const resultCard = document.getElementById("resultCard");
const debugPre = document.getElementById("debug");

// --- state ---
let current = 0;
let selections = Array.isArray(window.QUESTIONS || QUESTIONS)
  ? Array((window.QUESTIONS || QUESTIONS).length).fill(null)
  : [];

// Use global QUESTIONS from questions.js
const QUESTIONS_DATA = window.QUESTIONS || QUESTIONS;

// --- helpers ---
function show(el) {
  [screenStart, screenQuiz, screenResult].forEach((s) => s.classList.add("hidden"));
  el.classList.remove("hidden");
}

function render() {
  const q = QUESTIONS_DATA[current];
  if (!q) return;

  // Question text
  qText.textContent = q.text ?? "";

  // Answers
  answersDiv.innerHTML = "";
  (q.answers || []).forEach((a, idx) => {
    const btn = document.createElement("button");
    btn.className = "answerBtn";
    btn.type = "button";

    // Your data uses a.text
    btn.textContent = a?.text ?? "(missing answer text)";

    if (selections[current] === idx) btn.classList.add("selected");

    btn.addEventListener("click", () => {
      selections[current] = idx;

      // Update selection styles
      [...answersDiv.querySelectorAll(".answerBtn")].forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");

      nextBtn.disabled = false;
    });

    answersDiv.appendChild(btn);
  });

  // Progress
  progressText.textContent = `Question ${current + 1} of ${QUESTIONS_DATA.length}`;
  progressBar.style.width = `${Math.round(((current + 1) / QUESTIONS_DATA.length) * 100)}%`;

  // Nav buttons
  backBtn.disabled = current === 0;
  nextBtn.disabled = selections[current] === null;
  nextBtn.textContent = current === QUESTIONS_DATA.length - 1 ? "See results" : "Next";
}

function collectResponses() {
  return selections.map((aIdx, qIdx) => ({
    questionIndex: qIdx,
    answerIndex: aIdx,
  }));
}

function finish() {
  const responses = collectResponses();

  // computeResult must come from scoring.js
  const { classKey, polKey, classScores, polScores } = computeResult(responses);

  // These must come from profiles/scoring (depending on your files)
  classLabel.textContent = CLASS_LABELS[classKey] ?? classKey;
  polLabel.textContent = POL_LABELS[polKey] ?? polKey;

  // buildProfileHTML must come from profiles.js
  resultCard.innerHTML = buildProfileHTML(classKey, polKey);

  debugPre.textContent = JSON.stringify(
    {
      class: classScores,
      policy: polScores,
      result: { classKey, polKey },
    },
    null,
    2
  );

  show(screenResult);
}

// --- events ---
startBtn.addEventListener("click", () => {
  current = 0;
  selections = Array(QUESTIONS_DATA.length).fill(null);

  show(screenQuiz);
  render();
});

backBtn.addEventListener("click", () => {
  if (current > 0) current -= 1;
  render();
});

nextBtn.addEventListener("click", () => {
  if (selections[current] === null) return;

  if (current < QUESTIONS_DATA.length - 1) {
    current += 1;
    render();
  } else {
    progressBar.style.width = `100%`;
    finish();
  }
});

restartBtn.addEventListener("click", () => {
  current = 0;
  selections = Array(QUESTIONS_DATA.length).fill(null);

  // Reset result UI bits (optional but tidy)
  classLabel.textContent = "";
  polLabel.textContent = "";
  resultCard.innerHTML = "";
  debugPre.textContent = "";

  show(screenStart);
});

copyBtn.addEventListener("click", async () => {
  const text = `Sorting Society result: ${classLabel.textContent} + ${polLabel.textContent}`;
  try {
    await navigator.clipboard.writeText(text);
    copyBtn.textContent = "Copied!";
    setTimeout(() => {
      copyBtn.textContent = "Copy share text";
    }, 1200);
  } catch (e) {
    alert(text);
  }
});

// Initial view
show(screenStart);
