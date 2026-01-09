alert("app.js loaded");

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

let current = 0;
let selections = Array(QUESTIONS.length).fill(null);

function show(el){
  [screenStart, screenQuiz, screenResult].forEach(s => s.classList.add("hidden"));
  el.classList.remove("hidden");
}

function render(){
  const q = QUESTIONS[current];
  qText.textContent = q.text;

  answersDiv.innerHTML = "";
  q.answers.forEach((a, idx) => {
    const btn = document.createElement("button");
    btn.className = "answerBtn";
    btn.type = "button";
    btn.textContent = a.text;

    if (selections[current] === idx) btn.classList.add("selected");

    btn.addEventListener("click", () => {
      selections[current] = idx;
      // re-render selection styles
      [...answersDiv.querySelectorAll(".answerBtn")].forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      nextBtn.disabled = false;
    });

    answersDiv.appendChild(btn);
  });

  progressText.textContent = `Question ${current + 1} of ${QUESTIONS.length}`;
  progressBar.style.width = `${Math.round((current) / (QUESTIONS.length) * 100)}%`;

  backBtn.disabled = current === 0;
  nextBtn.disabled = selections[current] === null;
  nextBtn.textContent = (current === QUESTIONS.length - 1) ? "See results" : "Next";
}

function collectResponses(){
  const responses = [];
  selections.forEach((aIdx, qIdx) => {
    responses.push({ questionIndex: qIdx, answerIndex: aIdx });
  });
  return responses;
}

function finish(){
  const responses = collectResponses();
  const { classKey, polKey, classScores, polScores } = computeResult(responses);

  classLabel.textContent = CLASS_LABELS[classKey];
  polLabel.textContent = POL_LABELS[polKey];
  resultCard.innerHTML = buildProfileHTML(classKey, polKey);

  const debugObj = {
    class: classScores,
    policy: polScores,
    result: { classKey, polKey }
  };
  debugPre.textContent = JSON.stringify(debugObj, null, 2);

  show(screenResult);
}

startBtn.addEventListener("click", () => {
   alert("Start button click works");
});

backBtn.addEventListener("click", () => {
  if (current > 0) current -= 1;
  render();
});

nextBtn.addEventListener("click", () => {
  if (selections[current] === null) return;

  if (current < QUESTIONS.length - 1){
    current += 1;
    render();
  } else {
    progressBar.style.width = `100%`;
    finish();
  }
});

restartBtn.addEventListener("click", () => {
  show(screenStart);
});

copyBtn.addEventListener("click", async () => {
  const text = `Sorting Society result: ${classLabel.textContent} + ${polLabel.textContent}`;
  try{
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
