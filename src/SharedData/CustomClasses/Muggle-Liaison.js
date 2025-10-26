export const muggle_liaison = {
  id: "muggle_liaison",
  name: "Muggle Liaison",
  type: "Monk",
  description:
    "Embedded Bureau assets who live and work among nonmagicals. Liaisons blend in, de-escalate, extract, and keep the Secret—operating effectively without magic but carrying a small kit of subtle spells for when the quiet options run out.",

  hit_die: "d8",
  primary_abilities: ["Dexterity", "Wisdom"],
  saving_throws: ["Strength", "Dexterity"],
  armor_proficiencies: ["Light Armor"],
  weapon_proficiencies: [
    "Simple Weapons",
    "Shortswords",
    "Batons (club)",
    "Wands",
  ],
  tool_proficiencies: [
    "Disguise Kit",
    "Forgery Kit",
    "One: Healer's Kit or Thieves' Tools",
  ],

  skill_choices: {
    choose: 2,
    options: [
      "Persuasion",
      "Insight",
      "Perception",
      "Acrobatics",
      "Stealth",
      "Investigation",
      "Deception",
      "Medicine",
    ],
  },

  // ————— SPELLCASTING (subtle, quarter-caster) —————
  spellcasting: {
    progression_type: "quarter-caster",
    casting_ability_choice: ["Wisdom"],
    save_dc: "8 + proficiency_bonus + Wisdom_mod",
    attack_mod: "proficiency_bonus + Wisdom_mod",
    notes:
      "You know a few subtle spells for cover, movement, and calm. You can spend Protocol Points to cast them silently and without obvious light.",
    cantrips_known: { 1: 2, 5: 3 },
    spells_known: { 1: 2, 2: 3, 3: 4, 4: 5, 5: 6 },
    spell_slots: {
      1: { "1st": 1 },
      2: { "1st": 2 },
      3: { "1st": 2, "2nd": 1 },
      4: { "1st": 2, "2nd": 1 },
      5: { "1st": 2, "2nd": 2 },
    },
    spell_list: {
      cantrips: ["Thaumaturgy", "Minor Illusion", "Message", "Mage Hand"],
      level_1_to_3: [
        "Disguise Self",
        "Feather Fall",
        "Detect Magic",
        "Silent Image",
        "Comprehend Languages",
        "Sanctuary",
        "Calm Emotions",
        "Silence",
        "See Invisibility",
        "Nondetection",
      ],
    },
  },

  // ————— CLASS RESOURCE —————
  class_resources: [
    {
      name: "Protocol Points",
      formula: "proficiency_bonus + Wisdom_mod (minimum 2)",
      recharge: "Short Rest",
      effects_summary: [
        "Fuel de-escalation maneuvers, extra strikes, blinks, and covert casting.",
        "You can use only 1 Protocol option per turn unless a feature says otherwise.",
      ],
    },
  ],

  // ————— CORE LEVEL FEATURES —————
  level_features: [
    {
      level: 1,
      features: [
        {
          name: "Unarmored Poise",
          description:
            "While not wearing armor or wielding a shield, AC = 10 + DEX + WIS.",
        },
        {
          name: "Close-Quarters Training",
          description:
            "Unarmed strikes use a d4 and can use DEX for attack/damage. When you take Attack, make one unarmed strike as a bonus action.",
        },
        {
          name: "Masquerade Protocol",
          description:
            "You and allies within 10 ft gain advantage on checks to pass unnoticed in nonmagical spaces (hide magical tells, conceal wands, explain anomalies).",
        },
      ],
    },

    {
      level: 2,
      features: [
        {
          name: "Field Protocols",
          description:
            "Spend Protocol Points:\n• Rapid Takedown (1): After you Attack, make two unarmed strikes as a bonus action (nonlethal by default).\n• De-escalate (1): Until your next turn, attacks against you are at disadvantage; add +PB to Persuasion checks to calm this round.\n• Quick Extraction (1): Dash or Disengage as a bonus action; jump distance doubles; moving through a hostile creature's space doesn't provoke.\n• Flash Apparate (1): Bonus action blink up to 10 ft to a space you can see; subtle to onlookers (GM adjudication).",
        },
        {
          name: "Interpose",
          description:
            "Reaction when a ranged weapon attack would hit you: reduce damage by 1d10 + DEX + class level. If reduced to 0, you can catch/deflect and make a ranged attack (20/60) as part of the reaction.",
        },
      ],
    },

    {
      level: 3,
      features: [
        {
          name: "Covert Spellcasting",
          description:
            "When you cast a Liaison spell of 1st or 2nd level, spend 1 Protocol Point to remove verbal components and visible glow. Only creatures specifically watching for magic can notice (check vs your spell save DC).",
        },
        {
          name: "Cover Identity",
          description:
            "Choose Persuasion or Deception; gain proficiency (or expertise if already proficient). You maintain a documented cover. Casual scrutiny DC 15 to pierce (DC 20 if you spent 1 hour preparing).",
        },
        {
          name: "Liaison Path",
          description:
            "Choose a specialization. You gain its 3rd-level features now and more at levels 5, 9, 13, and 17.",
          branches: [
            "Community Diplomat",
            "Protective Detail",
            "Undercover Operative",
          ],
          branch_milestone: true,
        },
      ],
    },

    {
      level: 4,
      features: [
        {
          name: "Ability Score Improvement or Liaison Feat",
          description:
            "Increase an ability by +2 or two by +1, or choose a feat.",
          feat_examples: [
            {
              name: "Crisis Negotiator",
              effect:
                "When you start De-escalate, pick a creature within 30 ft; it has disadvantage on its next attack unless it targets you.",
            },
            {
              name: "Street Runner",
              effect: "+10 ft speed; climbing costs no extra movement.",
            },
            {
              name: "First Responder",
              effect:
                "When a creature within 5 ft drops to 0 HP, you can move your speed toward it as a reaction.",
            },
          ],
        },
      ],
    },

    {
      level: 5,
      features: [
        {
          name: "Extra Attack",
          description: "Attack twice when you take the Attack action.",
        },
        {
          name: "Staggering Command",
          description:
            "When you hit with an unarmed strike, spend 1 Protocol Point: target CON save (DC = 8 + PB + WIS). Fail: Staggered until end of your next turn (no reactions; disadvantage on DEX saves). Succeed: disadvantage on its next opportunity attack before your next turn.",
        },
        {
          name: "Parkour Roll",
          description:
            "Reduce falling damage you take by 5 × class level. During your movement this turn, you can run along walls or narrow ledges if you end on a surface that can support you.",
        },
        {
          name: "Path Progression (5th)",
          description: "Gain your Path’s 5th-level feature.",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },

    {
      level: 6,
      features: [
        {
          name: "Protocol Mastery",
          description:
            "Increase Protocol Point maximum by +PB. On initiative, if you have <2 PP, regain 2.",
        },
        {
          name: "Enhanced Unarmed Strike",
          description:
            "Unarmed strikes deal 1d6 (1d8 at 11th, 1d10 at 17th) and count as magical for overcoming resistances.",
        },
      ],
    },

    {
      level: 7,
      features: [
        {
          name: "Evasion",
          description:
            "On a Dex save for half, take none on success, half on failure.",
        },
        {
          name: "Stillness of Mind",
          description:
            "Action to end charm or fear on yourself. Advantage on saves vs charm/fear.",
        },
      ],
    },

    {
      level: 8,
      features: [
        {
          name: "Ability Score Improvement",
          description:
            "Increase one ability by +2, or two by +1, or choose a feat.",
        },
      ],
    },

    {
      level: 9,
      features: [
        {
          name: "Advanced Flash Apparate",
          description:
            "Blink distance becomes 20 ft. When you Flash Apparate, you may take the Hide action as part of the same bonus action if you end in light or heavy obscurity.",
        },
        {
          name: "Path Progression (9th)",
          description: "Gain your Path’s 9th-level feature.",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },

    {
      level: 10,
      features: [
        {
          name: "Purity of Body",
          description:
            "Immune to disease and poison. You don’t need sleep and can’t be magically slept; long rest still requires 8 hours of restful activity.",
        },
      ],
    },

    {
      level: 11,
      features: [
        {
          name: "Superior Unarmed Strike",
          description:
            "Unarmed strikes deal 1d8. On hit, spend 1 PP to add WIS to damage.",
        },
      ],
    },

    {
      level: 12,
      features: [
        {
          name: "Ability Score Improvement",
          description:
            "Increase one ability by +2, or two by +1, or choose a feat.",
        },
      ],
    },

    {
      level: 13,
      features: [
        {
          name: "Tongue of the Sun and Moon",
          description:
            "You understand all spoken languages; any creature that understands a language understands you. Covert Spellcasting becomes undetectable by mundane means (only magic like Detect Magic reveals it).",
        },
        {
          name: "Path Progression (13th)",
          description: "Gain your Path’s 13th-level feature.",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },

    {
      level: 14,
      features: [
        {
          name: "Diamond Soul",
          description:
            "Proficiency in all saving throws. On a failed save, spend 1 PP to reroll.",
        },
      ],
    },

    {
      level: 15,
      features: [
        {
          name: "Timeless Body",
          description:
            "You no longer age and can’t be aged magically. Advantage on Insight; can’t be surprised while conscious.",
        },
      ],
    },

    {
      level: 16,
      features: [
        {
          name: "Ability Score Improvement",
          description:
            "Increase one ability by +2, or two by +1, or choose a feat.",
        },
      ],
    },

    {
      level: 17,
      features: [
        {
          name: "Legendary Unarmed Strike",
          description:
            "Unarmed strikes deal 1d10. On a critical hit, spend 1 PP to attempt a stun (CON save, DC = 8 + PB + WIS) until the end of your next turn.",
        },
        {
          name: "Path Progression (17th)",
          description: "Gain your Path’s 17th-level feature.",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },

    {
      level: 18,
      features: [
        {
          name: "Empty Body",
          description:
            "Spend 4 PP to become ethereal (as Etherealness) for 1 minute; move through objects/creatures; resistance to all damage.",
        },
      ],
    },

    {
      level: 19,
      features: [
        {
          name: "Ability Score Improvement",
          description:
            "Increase one ability by +2, or two by +1, or choose a feat.",
        },
      ],
    },

    {
      level: 20,
      features: [
        {
          name: "Perfect Liaison",
          description:
            "• When you roll initiative, regain 4 Protocol Points.\n• Your unarmed strikes deal +1d6 force damage.\n• You can use two Protocol options per turn instead of one.\n• Perfect State (1/long rest, 1 minute): advantage on attacks/checks/saves; attacks against you have disadvantage; Protocol options are free; floor 10 on Stealth/Deception d20s; can cast Liaison spells of 2nd level or lower at will without slots or components.\n• You no longer age and cannot be aged magically.",
        },
      ],
    },
  ],

  // ————— PATHS (skill-tree progression) —————
  branches: {
    "Community Diplomat": {
      branchPath: "Community Diplomat",
      tagline: "De-escalate crowds, redirect violence, win cooperation.",
      progression: {
        3: [
          {
            name: "Read the Room",
            description:
              "Gain expertise in Insight or Persuasion. After 1 minute observing a crowd, learn one: whom they trust, whom they fear, or whether magic influenced them in the last hour.",
          },
          {
            name: "Calming Presence",
            description:
              "Bonus action, spend 1 PP to project a 10-ft aura for 1 minute. Hostiles of CR ≤ your level must WIS save (DC = 8 + PB + WIS) to make opportunity attacks against allies while in the aura.",
          },
        ],
        5: [
          {
            name: "Directive Word",
            description:
              "Bonus action: choose a creature within 30 ft that can hear you. WIS save or it can’t take the Attack action on its next turn and must move to clear civilians or remain in place if none are near. Uses/long rest = WIS mod (min 1).",
          },
        ],
        9: [
          {
            name: "Crowd Shield",
            description:
              "While 3+ nonhostile creatures are within 15 ft, you have half cover. Calming Presence aura radius increases to 20 ft and lasts 10 minutes.",
          },
        ],
        13: [
          {
            name: "Master Negotiator",
            description:
              "You can cast Charm Person at will (you may apply Covert Spellcasting). 1/long rest, cast Mass Suggestion without a slot.",
          },
        ],
        17: [
          {
            name: "Voice of Peace",
            description:
              "1/long rest, speak for 10 minutes to a hostile crowd (up to 100 creatures) that can hear you. WIS save (DC = 8 + PB + WIS + 2) or become friendly toward your party for 24 hours unless harmed.",
          },
        ],
      },
    },

    "Protective Detail": {
      branchPath: "Protective Detail",
      tagline: "Bodyguard instincts, extraction under fire, zero-fail defense.",
      progression: {
        3: [
          {
            name: "Guardian Step",
            description:
              "When a creature you can see within 10 ft is targeted by an attack, reaction to move up to 10 ft to an adjacent space. If the attack hits, reduce damage by PB + WIS.",
          },
          {
            name: "Shielding Palm",
            description:
              "When you use Interpose and the original target was an ally within 10 ft, you can redirect the projectile to yourself and apply your reduction. If reduced to 0, the attack misses entirely.",
          },
        ],
        5: [
          {
            name: "Extract Under Fire",
            description:
              "When you use Quick Extraction, choose an adjacent ally; they can move up to half their speed without provoking opportunity attacks.",
          },
        ],
        9: [
          {
            name: "Bodyguard's Instinct",
            description:
              "When you use Guardian Step, you can move up to your speed instead of 10 ft. Use Guardian Step a number of times equal to WIS mod per short rest without spending your reaction; further uses require your reaction.",
          },
        ],
        13: [
          {
            name: "Sacrifice Play",
            description:
              "When an ally within 30 ft would drop to 0 HP, reaction to teleport to them and take the damage instead. If this would drop you to 0 HP, drop to 1 HP instead. 1/long rest.",
          },
        ],
        17: [
          {
            name: "Perfect Defense",
            description:
              "Reaction: spend 5 PP to reduce damage to 0 for you or an ally within 30 ft. Allies within 10 ft of you gain +2 AC and advantage on DEX saves while you are conscious.",
          },
        ],
      },
    },

    "Undercover Operative": {
      branchPath: "Undercover Operative",
      tagline: "Deep cover, clean exits, vanishing acts.",
      progression: {
        3: [
          {
            name: "Urban Parkour",
            description:
              "Gain a climb speed equal to your speed and advantage on Acrobatics to navigate urban obstacles. Crowds/furniture don’t cause difficult terrain for you.",
          },
          {
            name: "False Papers",
            description:
              "During a short rest, craft convincing documents with a Forgery Kit. They pass casual inspection; to detect, an investigator must succeed on an Investigation check opposed by your Deception.",
          },
        ],
        5: [
          {
            name: "Slip the Net",
            description:
              "When you hit a creature with an attack, spend 1 PP to immediately Disengage and move up to 10 ft without provoking.",
          },
        ],
        9: [
          {
            name: "Deep Cover",
            description:
              "Perfectly mimic speech patterns, mannerisms, and habits of a person you’ve observed for 1 hour. Cast Alter Self 1/long rest without a slot.",
          },
        ],
        13: [
          {
            name: "Ghost Protocol",
            description:
              "Become invisible (as Greater Invisibility) for 1 minute by spending 3 PP. Ignore nonmagical difficult terrain and leave no tracks unless you choose to.",
          },
        ],
        17: [
          {
            name: "Identity Shift",
            description:
              "Spend 1 hour to assume a perfected identity (nonmagical Seeming+Alter Self analog) that withstands divinations of 5th level or lower (as Nondetection). Maintain up to two such covers and swap between them as an action.",
          },
        ],
      },
    },
  },

  // ————— DESIGN NOTES —————
  design_notes: {
    concept:
      "Monk remap to covert Ministry handler who can operate without magic but keeps a tiny toolbox of subtle spells.",
    tone: "Quiet, disciplined, and plausibly deniable.",
    rules_consistency:
      "All save DCs = 8 + PB + WIS. Protocol cadence mirrors Monk ki. Covert casting is utility/presentation—no counter-magic overlap.",
    balance_notes: [
      "Protocol economy: base = PB + WIS (min 2); +PB cap bump at 6th; short-rest refresh; per-turn limit of 1 (capstone lifts).",
      "Bodyguard line trades raw damage for guaranteed movement/control; Diplomat scales social auras; Undercover pushes mobility/stealth.",
      "Capstone grants free 2nd-level Liaison spells only during Perfect State; no unlimited higher-level magic.",
    ],
  },
};
