const QUESTIONS = [
  {
    "text": "Pick the statement that feels closest to your everyday reality.",
    "answers": [
      {
        "text": "I rarely worry about money; big expenses are manageable.",
        "class": {
          "upper": 3
        },
        "pol": {
          "mixed": 1
        }
      },
      {
        "text": "I’m comfortable, but I still plan/budget for major costs.",
        "class": {
          "uppermid": 3
        },
        "pol": {
          "institution": 1
        }
      },
      {
        "text": "I’m stable month-to-month, but big surprises would hurt.",
        "class": {
          "middle": 3
        },
        "pol": {
          "mixed": 1
        }
      },
      {
        "text": "I’m often budgeting tightly; one setback changes everything.",
        "class": {
          "working": 3
        },
        "pol": {
          "redistributive": 1
        }
      },
      {
        "text": "I’m regularly deciding between necessities.",
        "class": {
          "poverty": 3
        },
        "pol": {
          "redistributive": 2
        }
      }
    ]
  },
  {
    "text": "If your rent increased by 15% next month, what happens?",
    "answers": [
      {
        "text": "It’s annoying but doable.",
        "class": {
          "upper": 2
        },
        "pol": {
          "individual": 1
        }
      },
      {
        "text": "I’d adjust spending; it would sting.",
        "class": {
          "uppermid": 2
        },
        "pol": {
          "mixed": 1
        }
      },
      {
        "text": "I’d need to cut back significantly.",
        "class": {
          "middle": 2
        },
        "pol": {
          "mixed": 1
        }
      },
      {
        "text": "I’d struggle and might miss other bills.",
        "class": {
          "working": 2
        },
        "pol": {
          "redistributive": 1
        }
      },
      {
        "text": "I’d risk housing insecurity.",
        "class": {
          "poverty": 2
        },
        "pol": {
          "redistributive": 2
        }
      }
    ]
  },
  {
    "text": "Which best describes your safety net if you lost income for a month?",
    "answers": [
      {
        "text": "Savings/investments cover it.",
        "class": {
          "upper": 3
        },
        "pol": {
          "individual": 1
        }
      },
      {
        "text": "I have some savings; I’d be okay but stressed.",
        "class": {
          "uppermid": 3
        },
        "pol": {
          "mixed": 1
        }
      },
      {
        "text": "I could maybe manage with tight cuts/short-term help.",
        "class": {
          "middle": 3
        },
        "pol": {
          "institution": 1
        }
      },
      {
        "text": "I’d need immediate help from family/friends/credit.",
        "class": {
          "working": 3
        },
        "pol": {
          "redistributive": 1
        }
      },
      {
        "text": "I’d fall behind quickly.",
        "class": {
          "poverty": 3
        },
        "pol": {
          "redistributive": 2
        }
      }
    ]
  },
  {
    "text": "How do you feel about taxes used for social programs?",
    "answers": [
      {
        "text": "Strongly support—reduce inequality and risk.",
        "class": {
          "working": 1
        },
        "pol": {
          "redistributive": 3
        }
      },
      {
        "text": "Support if programs are evidence-based and well-run.",
        "class": {
          "middle": 1
        },
        "pol": {
          "institution": 3
        }
      },
      {
        "text": "Mixed—I support some, but worry about waste/efficiency.",
        "class": {
          "uppermid": 1
        },
        "pol": {
          "mixed": 3
        }
      },
      {
        "text": "Prefer lower taxes; people should keep what they earn.",
        "class": {
          "upper": 1
        },
        "pol": {
          "individual": 3
        }
      }
    ]
  },
  {
    "text": "When someone is poor, the main cause is usually…",
    "answers": [
      {
        "text": "Structural factors (wages, housing, discrimination).",
        "class": {
          "poverty": 1
        },
        "pol": {
          "redistributive": 3
        }
      },
      {
        "text": "A mix of structure and individual choices.",
        "class": {
          "middle": 1
        },
        "pol": {
          "mixed": 3
        }
      },
      {
        "text": "Individual choices/effort matter most.",
        "class": {
          "upper": 1
        },
        "pol": {
          "individual": 3
        }
      },
      {
        "text": "It depends, but institutions often fail people.",
        "class": {
          "working": 1
        },
        "pol": {
          "institution": 3
        }
      }
    ]
  },
  {
    "text": "What sounds most like your education experience?",
    "answers": [
      {
        "text": "Elite track: top schools, strong networks.",
        "class": {
          "upper": 3
        },
        "pol": {
          "individual": 1
        }
      },
      {
        "text": "Good schools, some support, but still competitive.",
        "class": {
          "uppermid": 3
        },
        "pol": {
          "mixed": 1
        }
      },
      {
        "text": "Decent schools; had to self-navigate a lot.",
        "class": {
          "middle": 3
        },
        "pol": {
          "mixed": 1
        }
      },
      {
        "text": "Uneven resources; barriers were noticeable.",
        "class": {
          "working": 3
        },
        "pol": {
          "redistributive": 1
        }
      },
      {
        "text": "Major barriers (cost, instability, access).",
        "class": {
          "poverty": 3
        },
        "pol": {
          "redistributive": 2
        }
      }
    ]
  },
  {
    "text": "If you needed a specialist doctor tomorrow, what’s most likely?",
    "answers": [
      {
        "text": "I can access quickly and pay without major worry.",
        "class": {
          "upper": 2
        },
        "pol": {
          "individual": 1
        }
      },
      {
        "text": "I can access, but cost/time still matters.",
        "class": {
          "uppermid": 2
        },
        "pol": {
          "mixed": 1
        }
      },
      {
        "text": "I can access, but it may take time and budgeting.",
        "class": {
          "middle": 2
        },
        "pol": {
          "institution": 1
        }
      },
      {
        "text": "It would be hard due to cost/time/availability.",
        "class": {
          "working": 2
        },
        "pol": {
          "redistributive": 1
        }
      },
      {
        "text": "It might be unrealistic without major help.",
        "class": {
          "poverty": 2
        },
        "pol": {
          "redistributive": 2
        }
      }
    ]
  },
  {
    "text": "How do you usually solve unexpected expenses?",
    "answers": [
      {
        "text": "Savings/investments.",
        "class": {
          "upper": 3
        },
        "pol": {
          "individual": 1
        }
      },
      {
        "text": "Savings + careful budgeting.",
        "class": {
          "uppermid": 3
        },
        "pol": {
          "mixed": 1
        }
      },
      {
        "text": "Credit + budgeting over time.",
        "class": {
          "middle": 3
        },
        "pol": {
          "mixed": 1
        }
      },
      {
        "text": "Borrow/credit; payback is stressful.",
        "class": {
          "working": 3
        },
        "pol": {
          "redistributive": 1
        }
      },
      {
        "text": "Often can’t solve fully; delays/compromises.",
        "class": {
          "poverty": 3
        },
        "pol": {
          "redistributive": 2
        }
      }
    ]
  },
  {
    "text": "Which statement fits your view of policing and social control most?",
    "answers": [
      {
        "text": "Policing often reinforces inequality; needs major reform.",
        "class": {
          "working": 1
        },
        "pol": {
          "redistributive": 3
        }
      },
      {
        "text": "Policing is necessary but needs accountability and oversight.",
        "class": {
          "middle": 1
        },
        "pol": {
          "institution": 3
        }
      },
      {
        "text": "Mixed—both safety needs and reform concerns matter.",
        "class": {
          "uppermid": 1
        },
        "pol": {
          "mixed": 3
        }
      },
      {
        "text": "Policing mostly works; focus should be on personal responsibility.",
        "class": {
          "upper": 1
        },
        "pol": {
          "individual": 3
        }
      }
    ]
  },
  {
    "text": "How comfortable do you feel in professional spaces (interviews, offices, etc.)?",
    "answers": [
      {
        "text": "Very comfortable; I know the rules and people.",
        "class": {
          "upper": 3
        },
        "pol": {
          "individual": 1
        }
      },
      {
        "text": "Mostly comfortable; I’ve learned the norms.",
        "class": {
          "uppermid": 3
        },
        "pol": {
          "mixed": 1
        }
      },
      {
        "text": "Somewhat; I adapt but it takes effort.",
        "class": {
          "middle": 3
        },
        "pol": {
          "mixed": 1
        }
      },
      {
        "text": "Often feels like I’m translating a different culture.",
        "class": {
          "working": 3
        },
        "pol": {
          "redistributive": 1
        }
      },
      {
        "text": "I’ve been excluded or blocked from these spaces.",
        "class": {
          "poverty": 3
        },
        "pol": {
          "redistributive": 2
        }
      }
    ]
  },
  {
    "text": "If a friend got arrested for a minor offense, what would you assume first?",
    "answers": [
      {
        "text": "The system can be biased; outcomes vary by race/class.",
        "class": {
          "working": 1
        },
        "pol": {
          "redistributive": 3
        }
      },
      {
        "text": "Rules matter, but enforcement isn’t always consistent.",
        "class": {
          "middle": 1
        },
        "pol": {
          "institution": 3
        }
      },
      {
        "text": "It depends; I’d need context.",
        "class": {
          "uppermid": 1
        },
        "pol": {
          "mixed": 3
        }
      },
      {
        "text": "Actions have consequences; they should follow the rules.",
        "class": {
          "upper": 1
        },
        "pol": {
          "individual": 3
        }
      }
    ]
  },
  {
    "text": "What do you think about harm reduction (like Narcan distribution)?",
    "answers": [
      {
        "text": "Strongly support—saves lives and reduces harm.",
        "class": {
          "working": 1
        },
        "pol": {
          "redistributive": 3
        }
      },
      {
        "text": "Support alongside treatment and public health funding.",
        "class": {
          "middle": 1
        },
        "pol": {
          "institution": 3
        }
      },
      {
        "text": "Mixed—I support it, but worry about incentives.",
        "class": {
          "uppermid": 1
        },
        "pol": {
          "mixed": 3
        }
      },
      {
        "text": "Prefer strict enforcement; harm reduction goes too far.",
        "class": {
          "upper": 1
        },
        "pol": {
          "individual": 3
        }
      }
    ]
  },
  {
    "text": "Gender and sexuality are best understood as…",
    "answers": [
      {
        "text": "Fluid and shaped by culture and interaction.",
        "class": {
          "middle": 1
        },
        "pol": {
          "redistributive": 2,
          "institution": 1
        }
      },
      {
        "text": "A mix of biology and social meaning.",
        "class": {
          "uppermid": 1
        },
        "pol": {
          "mixed": 3
        }
      },
      {
        "text": "Mostly fixed categories; society should keep clear norms.",
        "class": {
          "upper": 1
        },
        "pol": {
          "individual": 3
        }
      },
      {
        "text": "Historically changing categories shaped by power.",
        "class": {
          "working": 1
        },
        "pol": {
          "redistributive": 3
        }
      }
    ]
  },
  {
    "text": "When you hear 'deviance,' you think…",
    "answers": [
      {
        "text": "A label society assigns; varies by context.",
        "class": {
          "working": 1
        },
        "pol": {
          "redistributive": 2,
          "institution": 1
        }
      },
      {
        "text": "Behavior that breaks norms and harms others.",
        "class": {
          "uppermid": 1
        },
        "pol": {
          "mixed": 3
        }
      },
      {
        "text": "Rule-breaking that should be punished consistently.",
        "class": {
          "upper": 1
        },
        "pol": {
          "individual": 3
        }
      },
      {
        "text": "A mix: norms matter, but labeling is uneven.",
        "class": {
          "middle": 1
        },
        "pol": {
          "institution": 2,
          "mixed": 1
        }
      }
    ]
  },
  {
    "text": "How much do networks/connections shape opportunity in your view?",
    "answers": [
      {
        "text": "A lot—networks often matter more than merit.",
        "class": {
          "working": 1
        },
        "pol": {
          "redistributive": 2,
          "institution": 1
        }
      },
      {
        "text": "They matter, but skills still count.",
        "class": {
          "middle": 1
        },
        "pol": {
          "mixed": 3
        }
      },
      {
        "text": "Mostly merit; networks are secondary.",
        "class": {
          "upper": 1
        },
        "pol": {
          "individual": 3
        }
      },
      {
        "text": "They matter because institutions are uneven.",
        "class": {
          "poverty": 1
        },
        "pol": {
          "redistributive": 3
        }
      }
    ]
  },
  {
    "text": "Which describes your work situation best (or most recent)?",
    "answers": [
      {
        "text": "High autonomy; strong benefits; stability.",
        "class": {
          "upper": 3
        },
        "pol": {
          "individual": 1
        }
      },
      {
        "text": "Stable professional work; decent benefits.",
        "class": {
          "uppermid": 3
        },
        "pol": {
          "mixed": 1
        }
      },
      {
        "text": "Stable-ish; wages/benefits are okay but limited.",
        "class": {
          "middle": 3
        },
        "pol": {
          "mixed": 1
        }
      },
      {
        "text": "Hourly/contract; instability is common.",
        "class": {
          "working": 3
        },
        "pol": {
          "redistributive": 1
        }
      },
      {
        "text": "Underemployed/unemployed; work is unpredictable.",
        "class": {
          "poverty": 3
        },
        "pol": {
          "redistributive": 2
        }
      }
    ]
  },
  {
    "text": "If you had to move suddenly, what’s realistic?",
    "answers": [
      {
        "text": "I could relocate without major disruption.",
        "class": {
          "upper": 2
        },
        "pol": {
          "individual": 1
        }
      },
      {
        "text": "I could, but it would take planning and costs.",
        "class": {
          "uppermid": 2
        },
        "pol": {
          "mixed": 1
        }
      },
      {
        "text": "It would be difficult and stressful.",
        "class": {
          "middle": 2
        },
        "pol": {
          "mixed": 1
        }
      },
      {
        "text": "It might be impossible without help.",
        "class": {
          "working": 2
        },
        "pol": {
          "redistributive": 1
        }
      },
      {
        "text": "I’m already dealing with unstable housing.",
        "class": {
          "poverty": 2
        },
        "pol": {
          "redistributive": 2
        }
      }
    ]
  },
  {
    "text": "How do you view government institutions overall?",
    "answers": [
      {
        "text": "Mostly trustworthy if improved and properly funded.",
        "class": {
          "middle": 1
        },
        "pol": {
          "institution": 3
        }
      },
      {
        "text": "Mixed—some help, some fail people.",
        "class": {
          "uppermid": 1
        },
        "pol": {
          "mixed": 3
        }
      },
      {
        "text": "Often harmful or biased; needs deep change.",
        "class": {
          "working": 1
        },
        "pol": {
          "redistributive": 3
        }
      },
      {
        "text": "I don’t trust them; individuals/markets work better.",
        "class": {
          "upper": 1
        },
        "pol": {
          "individual": 3
        }
      }
    ]
  },
  {
    "text": "Which feels most true about 'opportunity' in society?",
    "answers": [
      {
        "text": "Unequal starting points shape outcomes.",
        "class": {
          "working": 1
        },
        "pol": {
          "redistributive": 3
        }
      },
      {
        "text": "Opportunity exists but depends on institutions working fairly.",
        "class": {
          "middle": 1
        },
        "pol": {
          "institution": 3
        }
      },
      {
        "text": "Opportunity is real but uneven; it's complicated.",
        "class": {
          "uppermid": 1
        },
        "pol": {
          "mixed": 3
        }
      },
      {
        "text": "Opportunity is mostly about effort and choices.",
        "class": {
          "upper": 1
        },
        "pol": {
          "individual": 3
        }
      }
    ]
  },
  {
    "text": "How do you feel about minimum wage increases?",
    "answers": [
      {
        "text": "Strongly support; wages must keep up with costs.",
        "class": {
          "working": 1
        },
        "pol": {
          "redistributive": 3
        }
      },
      {
        "text": "Support with careful policy design.",
        "class": {
          "middle": 1
        },
        "pol": {
          "institution": 3
        }
      },
      {
        "text": "Mixed—support some increase, worry about tradeoffs.",
        "class": {
          "uppermid": 1
        },
        "pol": {
          "mixed": 3
        }
      },
      {
        "text": "Oppose; markets should set wages.",
        "class": {
          "upper": 1
        },
        "pol": {
          "individual": 3
        }
      }
    ]
  },
  {
    "text": "How likely are you to describe your family background as 'financially secure' growing up?",
    "answers": [
      {
        "text": "Very secure; resources were abundant.",
        "class": {
          "upper": 3
        },
        "pol": {
          "individual": 1
        }
      },
      {
        "text": "Secure; not extravagant but comfortable.",
        "class": {
          "uppermid": 3
        },
        "pol": {
          "mixed": 1
        }
      },
      {
        "text": "Mostly stable with occasional stress.",
        "class": {
          "middle": 3
        },
        "pol": {
          "mixed": 1
        }
      },
      {
        "text": "Often stressful; money was tight.",
        "class": {
          "working": 3
        },
        "pol": {
          "redistributive": 1
        }
      },
      {
        "text": "Frequently insecure; basic needs were uncertain.",
        "class": {
          "poverty": 3
        },
        "pol": {
          "redistributive": 2
        }
      }
    ]
  },
  {
    "text": "When you think about 'fairness,' you prioritize…",
    "answers": [
      {
        "text": "Equal outcomes / reduced inequality.",
        "class": {
          "working": 1
        },
        "pol": {
          "redistributive": 3
        }
      },
      {
        "text": "Fair rules and strong institutions.",
        "class": {
          "middle": 1
        },
        "pol": {
          "institution": 3
        }
      },
      {
        "text": "Balance: safety nets + incentives.",
        "class": {
          "uppermid": 1
        },
        "pol": {
          "mixed": 3
        }
      },
      {
        "text": "Equal opportunity and personal responsibility.",
        "class": {
          "upper": 1
        },
        "pol": {
          "individual": 3
        }
      }
    ]
  },
  {
    "text": "If a policy worked but was expensive, you’d usually…",
    "answers": [
      {
        "text": "Support it; human well-being is worth it.",
        "class": {
          "working": 1
        },
        "pol": {
          "redistributive": 3
        }
      },
      {
        "text": "Support it if evidence is strong and implementation is solid.",
        "class": {
          "middle": 1
        },
        "pol": {
          "institution": 3
        }
      },
      {
        "text": "Weigh cost/benefit; depends on details.",
        "class": {
          "uppermid": 1
        },
        "pol": {
          "mixed": 3
        }
      },
      {
        "text": "Be skeptical; costs and taxes matter more.",
        "class": {
          "upper": 1
        },
        "pol": {
          "individual": 3
        }
      }
    ]
  },
  {
    "text": "How do you react to the idea that 'identity categories change over time'?",
    "answers": [
      {
        "text": "Agree; categories evolve with culture and power.",
        "class": {
          "working": 1
        },
        "pol": {
          "redistributive": 2,
          "institution": 1
        }
      },
      {
        "text": "Agree; institutions shape how categories are defined.",
        "class": {
          "middle": 1
        },
        "pol": {
          "institution": 3
        }
      },
      {
        "text": "Somewhat; change happens but slowly.",
        "class": {
          "uppermid": 1
        },
        "pol": {
          "mixed": 3
        }
      },
      {
        "text": "Disagree; categories are mostly stable and should stay clear.",
        "class": {
          "upper": 1
        },
        "pol": {
          "individual": 3
        }
      }
    ]
  },
  {
    "text": "Which statement best matches your view on social problems?",
    "answers": [
      {
        "text": "They’re mostly structural and need collective solutions.",
        "class": {
          "working": 1
        },
        "pol": {
          "redistributive": 3
        }
      },
      {
        "text": "They need strong institutions and evidence-based policy.",
        "class": {
          "middle": 1
        },
        "pol": {
          "institution": 3
        }
      },
      {
        "text": "They’re a mix of structure and individual action.",
        "class": {
          "uppermid": 1
        },
        "pol": {
          "mixed": 3
        }
      },
      {
        "text": "They’re mostly solved by individual choices and personal effort.",
        "class": {
          "upper": 1
        },
        "pol": {
          "individual": 3
        }
      }
    ]
  }
];
