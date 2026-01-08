const CLASS_LABELS = {
  upper: "Upper class",
  uppermid: "Upper-middle class",
  middle: "Middle class",
  working: "Lower-middle / Working class",
  poverty: "Poverty class"
};

const POL_LABELS = {
  redistributive: "Redistribution-oriented",
  institution: "Institution-trusting",
  mixed: "Mixed / pragmatic",
  individual: "Individual-responsibility-focused"
};

/**
 * Short sociology-forward blurbs. These are intentionally non-judgmental.
 */
const CLASS_BLURBS = {
  upper: {
    what: "High economic security, strong buffers, and access to elite networks.",
    patterns: ["High stability and choice", "Large safety nets (assets/savings)", "Institutional access and influence"],
    watch: "Class advantage can feel invisible—try noticing how access and networks smooth everyday risks."
  },
  uppermid: {
    what: "Strong stability with meaningful resources, but still attentive to costs and competition.",
    patterns: ["Professional stability", "Comfortable but still budgeting for big costs", "Access to institutions through credentials"],
    watch: "Upward mobility is real here, but it often depends on maintaining credentials and networks."
  },
  middle: {
    what: "Moderate stability with limited buffers—shocks matter, and planning is important.",
    patterns: ["Stable month-to-month", "Big expenses require planning", "Often reliant on institutions working fairly"],
    watch: "Middle-class security is sensitive to healthcare, housing, and job stability—key sociological pressure points."
  },
  working: {
    what: "Tighter budgeting and higher exposure to shocks; stability can be fragile.",
    patterns: ["Income/benefits can be uneven", "A single setback changes outcomes", "More dependence on affordable housing/health systems"],
    watch: "Sociologically, this is where structural constraints are easiest to see—wages, costs, and social control intersect."
  },
  poverty: {
    what: "High vulnerability and frequent trade-offs between necessities; shocks escalate quickly.",
    patterns: ["Unstable buffers", "Greater exposure to institutional barriers", "Reliance on support networks and/or services"],
    watch: "This is not an individual failure—structural conditions (costs, access, discrimination) strongly shape outcomes."
  }
};

const POL_BLURBS = {
  redistributive: {
    what: "You tend to explain social outcomes through structural inequality and support collective solutions.",
    patterns: ["Focus on wages, housing, discrimination, and unequal starting points", "Support robust safety nets and harm reduction", "More critical of how power shapes social control"],
    soc: "Often aligns with conflict theory and structural explanations of inequality."
  },
  institution: {
    what: "You emphasize fair rules, oversight, and evidence-based institutions as the path to social improvement.",
    patterns: ["Support accountability and governance", "Prefer well-designed programs over blanket answers", "See institutions as necessary (when they work)"],
    soc: "Often aligns with functionalist concerns for stability plus institutional reform."
  },
  mixed: {
    what: "You balance structure and agency—supporting some collective solutions while considering tradeoffs and incentives.",
    patterns: ["“It depends” with attention to context", "Support targeted programs with safeguards", "Blend institutional and individual responsibility"],
    soc: "Often aligns with pragmatic sociological reasoning and multi-causal explanations."
  },
  individual: {
    what: "You prioritize personal responsibility and market/individual solutions over large institutional interventions.",
    patterns: ["Emphasis on incentives and choice", "Skepticism about program waste or overreach", "Preference for smaller government roles"],
    soc: "Can align with agency-focused explanations; sociologically, it’s useful for debating structure vs. agency."
  }
};

function buildProfileHTML(classKey, polKey) {
  const c = CLASS_BLURBS[classKey];
  const p = POL_BLURBS[polKey];

  return `
    <h3>${CLASS_LABELS[classKey]} + ${POL_LABELS[polKey]}</h3>
    <p><strong>Class snapshot:</strong> ${c.what}</p>
    <ul>
      <li><strong>Common patterns:</strong> ${c.patterns.join("; ")}</li>
      <li><strong>Policy orientation:</strong> ${p.what}</li>
      <li><strong>Sociology lens:</strong> ${p.soc}</li>
    </ul>
    <p><strong>Try noticing:</strong> ${c.watch}</p>
    <p class="fine"><em>Reminder:</em> This is a learning game about sociological patterns—not a diagnostic label.</p>
  `;
}
