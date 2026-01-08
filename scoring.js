const CLASS_KEYS = ["upper","uppermid","middle","working","poverty"];
const POL_KEYS = ["redistributive","institution","mixed","individual"];

function emptyScores(keys){
  const out = {};
  keys.forEach(k => out[k] = 0);
  return out;
}

function addScores(target, delta){
  for (const k in delta){
    if (!(k in target)) target[k] = 0;
    target[k] += delta[k];
  }
}

function maxKey(scoreObj, fallback){
  let bestKey = fallback;
  let bestVal = -Infinity;
  for (const k in scoreObj){
    if (scoreObj[k] > bestVal){
      bestVal = scoreObj[k];
      bestKey = k;
    }
  }
  return bestKey;
}

/**
 * Tie-breaking:
 * - If political orientation ties, choose 'mixed' (pragmatic).
 * - If class ties, choose the more central category (middle).
 */
function tieAwareMax(scoreObj, preferredOrder){
  let bestVal = Math.max(...Object.values(scoreObj));
  const tied = Object.keys(scoreObj).filter(k => scoreObj[k] === bestVal);
  if (tied.length === 1) return tied[0];
  for (const k of preferredOrder){
    if (tied.includes(k)) return k;
  }
  return tied[0];
}

function computeResult(responses){
  const classScores = emptyScores(CLASS_KEYS);
  const polScores = emptyScores(POL_KEYS);

  responses.forEach(({questionIndex, answerIndex}) => {
    const q = QUESTIONS[questionIndex];
    const a = q.answers[answerIndex];
    addScores(classScores, a.class || {});
    addScores(polScores, a.pol || {});
  });

  const classKey = tieAwareMax(classScores, ["middle","uppermid","working","poverty","upper"]);
  const polKey = tieAwareMax(polScores, ["mixed","institution","redistributive","individual"]);

  return { classKey, polKey, classScores, polScores };
}
