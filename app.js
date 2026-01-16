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

// Processing overlay
const scanOverlay = document.getElementById("scanOverlay");
if (scanOverlay) {
  scanOverlay.classList.add("hidden");
  scanOverlay.setAttribute("aria-hidden", "true");
}
const scanSub = document.getElementById("scanSub");
const scanBarFill = document.getElementById("scanBarFill");

// --- state ---
const QUESTIONS_DATA = window.QUESTIONS || QUESTIONS;
let current = 0;
let selections = Array(QUESTIONS_DATA.length).fill(null);

// --- helpers ---
function show(el) {
  [screenStart, screenQuiz, screenResult].forEach((s) => s.classList.add("hidden"));
  el.classList.remove("hidden");
}

function clearThemes() {
  document.body.className = document.body.className
    .split(" ")
    .filter(c => !c.startsWith("theme-") && c !== "classified")
    .join(" ")
    .trim();
}

function setThemeDefault() {
  clearThemes();
  document.body.classList.add("theme-default");
}

function setThemeResult(classKey, polKey) {
  clearThemes();
  document.body.classList.add(`theme-${classKey}-${polKey}`);
  document.body.classList.add("classified"); // enables watermark/unease styling
}

function render() {
  const q = QUESTIONS_DATA[current];
  if (!q) return;

  qText.textContent = q.text ?? "";

  answersDiv.innerHTML = "";
  (q.answers || []).forEach((a, idx) => {
    const btn = document.createElement("button");
    btn.className = "answerBtn";
    btn.type = "button";
    btn.textContent = a?.text ?? "(missing answer text)";

    if (selections[current] === idx) btn.classList.add("selected");

    btn.addEventListener("click", () => {
      selections[current] = idx;

      [...answersDiv.querySelectorAll(".answerBtn")].forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");

      nextBtn.disabled = false;
    });

    answersDiv.appendChild(btn);
  });

  progressText.textContent = `Question ${current + 1} of ${QUESTIONS_DATA.length}`;
  progressBar.style.width = `${Math.round(((current + 1) / QUESTIONS_DATA.length) * 100)}%`;

  backBtn.disabled = current === 0;
  nextBtn.disabled = selections[current] === null;
  nextBtn.textContent = current === QUESTIONS_DATA.length - 1 ? "See results" : "Next";
}

function collectResponses() {
  return selections.map((aIdx, qIdx) => ({ questionIndex: qIdx, answerIndex: aIdx }));
}

function showScanOverlay() {
  if (!scanOverlay) return { msgTimer: null, barTimer: null };

  scanOverlay.classList.remove("hidden");
  scanOverlay.setAttribute("aria-hidden", "false");
  if (scanBarFill) scanBarFill.style.width = "0%";

  const msgs = [
    "Evaluating response profile…",
    "Cross-referencing civic indicators…",
    "Computing class alignment…",
    "Assigning policy orientation…",
    "Stamping registry output…",
  ];
  let i = 0;
  if (scanSub) scanSub.textContent = msgs[i];

  const msgTimer = setInterval(() => {
    i = (i + 1) % msgs.length;
    if (scanSub) scanSub.textContent = msgs[i];
  }, 260);

  let p = 0;
  const barTimer = setInterval(() => {
    p += 9 + Math.random() * 10; // 9–19
    if (p > 100) p = 100;
    if (scanBarFill) scanBarFill.style.width = `${p}%`;
  }, 120);

  return { msgTimer, barTimer };
}

function hideScanOverlay(timers) {
  if (!scanOverlay) return;

  if (timers?.msgTimer) clearInterval(timers.msgTimer);
  if (timers?.barTimer) clearInterval(timers.barTimer);

  scanOverlay.classList.add("hidden");
  scanOverlay.setAttribute("aria-hidden", "true");
}

function finish() {
  const responses = collectResponses();
  const { classKey, polKey, classScores, polScores } = computeResult(responses);

  // Apply theme immediately (tone shifts before reveal)
  setThemeResult(classKey, polKey);

  classLabel.textContent = CLASS_LABELS[classKey] ?? classKey;
  polLabel.textContent = POL_LABELS[polKey] ?? polKey;

  resultCard.innerHTML = buildProfileHTML(classKey, polKey);

  debugPre.textContent = JSON.stringify(
    { class: classScores, policy: polScores, result: { classKey, polKey } },
    null,
    2
  );

  // show processing overlay briefly, then reveal results
  const timers = showScanOverlay();
  setTimeout(() => {
    hideScanOverlay(timers);
    show(screenResult);
  }, 1200);
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

  classLabel.textContent = "";
  polLabel.textContent = "";
  resultCard.innerHTML = "";
  debugPre.textContent = "";

  setThemeDefault();
  show(screenStart);
});

copyBtn.addEventListener("click", async () => {
  const text = `Sorting Society result: ${classLabel.textContent} + ${polLabel.textContent}`;
  try {
    await navigator.clipboard.writeText(text);
    copyBtn.textContent = "Copied!";
    setTimeout(() => (copyBtn.textContent = "Copy share text"), 1200);
  } catch (e) {
    alert(text);
  }
});

// Initial view
show(screenStart);
setThemeDefault();
