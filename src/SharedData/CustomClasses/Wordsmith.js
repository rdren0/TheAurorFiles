export const wordsmith = {
  id: "wordsmith",
  name: "Wordsmith",
  type: "Bard",
  description:
    "Reporters, authors, propagandists, and public narrators who weaponize language, truth, and spectacle. Wordsmiths bend crowds, rattle suspects, and steady allies with ink, voice, and glamours.",
  hit_die: "d8",
  primary_abilities: ["Charisma", "Intelligence"],
  saving_throws: ["Dexterity", "Charisma"],
  armor_proficiencies: ["Light Armor"],
  weapon_proficiencies: ["Simple Weapons", "Wands"],
  tool_proficiencies: [
    "Calligrapher's Supplies",
    "One: Disguise Kit or Forgery Kit",
  ],

  skill_choices: {
    choose: 3,
    options: [
      "Persuasion",
      "Deception",
      "Insight",
      "Intimidation",
      "Perception",
      "Investigation",
      "Performance",
      "History",
    ],
  },

  spellcasting: {
    progression_type: "full-caster",
    casting_ability_choice: ["Charisma", "Intelligence"],
    notes:
      "Wordsmith spells manifest as rhetoric, sigils, glamours, and mnemonic charms.",
    bonus_spells: {
      cantrips: ["Vicious Mockery", "Message"],
      level_1_to_3: [
        "Charm Person",
        "Disguise Self",
        "Detect Thoughts",
        "Silence",
        "Suggestion",
        "Calm Emotions",
        "Hypnotic Pattern",
      ],
    },
  },

  class_resources: [
    {
      name: "Inspiration Dice",
      die_by_level: { 1: "d6", 5: "d8" }, // upgrades again at 9 and 15 via features
      uses_formula: "max(1, casting_ability_mod)", // CHA or INT chosen for casting
      recharge: "Short Rest",
      effects_summary: [
        "Bonus action: grant a die to an ally who can hear or read you (lasts 10 minutes).",
        "The ally adds it to one attack, save, or ability check after rolling but before result.",
      ],
    },
  ],

  // ---------- Core Level Features (shared) ----------
  level_features: [
    {
      level: 1,
      features: [
        {
          name: "Byline",
          description:
            "Choose Persuasion or Deception. Gain proficiency; if already proficient, gain expertise. Also gain proficiency in one additional language.",
        },
        {
          name: "Inspiration",
          description:
            "You carry Inspiration Dice (see Class Resources). Bonus action to inspire; die = d6 at this tier.",
        },
      ],
    },
    {
      level: 2,
      features: [
        {
          name: "Freelancer's Versatility",
          description:
            "Add half your proficiency bonus (rounded down) to any ability check you make that doesn't already include your proficiency bonus.",
        },
        {
          name: "Counter-Narrative",
          description:
            "When a creature you can see within 60 ft makes an attack, ability check, or damage roll, you can use your reaction to expend an Inspiration die and subtract the roll from the creature's result if it can hear/understand you.",
        },
        {
          name: "Coffee Break (Song of Rest)",
          description:
            "During a short rest, if you or any friendly creatures who can hear you regain hit points, each regains an extra 1d6 HP.",
        },
      ],
    },
    {
      level: 3,
      features: [
        {
          name: "College (Beat) Selection",
          description:
            "Choose a Beat at 3rd level. Your Beat grants features at levels 3, 5, 7, 9, 13, and 17.",
          branches: [
            "Propaganda",
            "Investigation",
            "Satire",
            "Public Relations",
          ],
          branch_milestone: true,
        },
        {
          name: "Expertise",
          description:
            "Choose two skills you're proficient in. Your proficiency bonus is doubled for checks you make with them.",
        },
      ],
    },
    {
      level: 4,
      features: [
        {
          name: "Ability Score Improvement or Media Feat",
          description:
            "Increase an ability score by +2, two by +1, or choose a feat.",
          feat_examples: [
            {
              name: "Press Pass",
              effect:
                "Advantage on Charisma checks to gain access to restricted areas if you can plausibly justify media presence.",
            },
            {
              name: "Headline Grabbing",
              effect:
                "When you roll initiative, regain one expended Inspiration die.",
            },
            {
              name: "Clean Copy",
              effect:
                "Cast Comprehend Languages and Disguise Self once per long rest without expending a slot.",
            },
          ],
        },
      ],
    },
    {
      level: 5,
      features: [
        {
          name: "Font of Inspiration",
          description:
            "Regain all expended Inspiration dice when you finish a short or long rest. Your Inspiration die becomes a d8.",
        },
        {
          name: "Beat Progression (5th)",
          description:
            "Your chosen Beat grants an additional feature (see branches[branch].progression[5]).",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },
    {
      level: 6,
      features: [
        {
          name: "Additional Expertise",
          description:
            "Choose two more proficient skills; you gain expertise with them. Also learn two additional languages of your choice.",
        },
        {
          name: "Countercharm",
          description:
            "Action to perform for 1 minute (concentration): you and allies within 30 ft have advantage on saves vs frightened or charmed. Uses per long rest = your Charisma modifier.",
        },
      ],
    },
    {
      level: 7,
      features: [
        {
          name: "Beat Progression (7th)",
          description:
            "Your Beat grants enhanced abilities (see branches[branch].progression[7]).",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },
    {
      level: 8,
      features: [
        {
          name: "Ability Score Improvement",
          description:
            "Increase one ability by +2, or two by +1, or select a feat.",
        },
      ],
    },
    {
      level: 9,
      features: [
        {
          name: "Superior Inspiration",
          description:
            "Your Inspiration die becomes a d10. When a creature uses your die and rolls the maximum value, they regain the die.",
        },
        {
          name: "Beat Progression (9th)",
          description:
            "Your Beat reaches expert tier (see branches[branch].progression[9]).",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },
    {
      level: 10,
      features: [
        {
          name: "Magical Secrets",
          description:
            "Learn two spells from any class (of a level you can cast). They count as Wordsmith spells. Learn two more at 14 and 18.",
        },
      ],
    },
    {
      level: 11,
      features: [
        {
          name: "Greater Coffee Break",
          description:
            "Your Coffee Break die becomes a d8. During a short rest, you can spend one use of Inspiration to grant all allies who can hear you advantage on their next ability check, attack roll, or saving throw.",
        },
      ],
    },
    {
      level: 12,
      features: [
        {
          name: "Ability Score Improvement",
          description:
            "Increase one ability by +2, or two by +1, or select a feat.",
        },
      ],
    },
    {
      level: 13,
      features: [
        {
          name: "Master Wordsmith",
          description:
            "Increase your Inspiration max uses by your Charisma modifier. You can grant Inspiration as a reaction when an ally within 60 ft fails an ability check, attack roll, or saving throw (before the result is announced).",
        },
        {
          name: "Beat Progression (13th)",
          description:
            "Your Beat reaches master tier (see branches[branch].progression[13]).",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },
    {
      level: 14,
      features: [
        {
          name: "Additional Magical Secrets",
          description:
            "Learn two more spells from any class (of a level you can cast).",
        },
      ],
    },
    {
      level: 15,
      features: [
        {
          name: "Legendary Inspiration",
          description:
            "Your Inspiration die becomes a d12. When you grant Inspiration, you may grant it to up to three creatures at once (costs one use). Creatures with your Inspiration can add the die to death saving throws.",
        },
      ],
    },
    {
      level: 16,
      features: [
        {
          name: "Ability Score Improvement",
          description:
            "Increase one ability by +2, or two by +1, or select a feat.",
        },
      ],
    },
    {
      level: 17,
      features: [
        {
          name: "Beat Progression (17th)",
          description:
            "Your Beat achieves legendary power (see branches[branch].progression[17]).",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },
    {
      level: 18,
      features: [
        {
          name: "Additional Magical Secrets",
          description:
            "Learn two more spells from any class (of a level you can cast).",
        },
      ],
    },
    {
      level: 19,
      features: [
        {
          name: "Ability Score Improvement",
          description:
            "Increase one ability by +2, or two by +1, or select a feat.",
        },
      ],
    },
    {
      level: 20,
      features: [
        {
          name: "Master of Words",
          description:
            "• When you roll initiative, regain all expended Inspiration dice.\n• Your Inspiration dice grant extra effects: on attack rolls, the attack deals extra psychic damage equal to the die; on saves, the creature gains temp HP equal to the die; on checks, if they fail they may reroll once.\n• You can speak and be understood by any creature with a language; your words bypass magical silence and deafness.\n• Word of Power (1/long rest): choose one — cast any spell of 9th level or lower without components or slots; restore all HP to allies within 60 ft and end all conditions on them; deal 100 psychic damage to enemies within 60 ft (Cha save half); or rewrite the last hour for you and up to 10 creatures (DM adjudication as Time Stop + Wish hybrid).\n• You no longer age and cannot be aged magically.",
        },
      ],
    },
  ],

  // ---------- Branches (Colleges): explicit progression tree ----------
  branches: {
    Propaganda: {
      branchPath: "Propaganda",
      tagline: "The Spin School — shape the frame, win the room.",
      progression: {
        3: [
          {
            name: "Talking Points",
            description:
              "Bonus action: choose up to two allies who can hear you. Until the start of your next turn, they add +1 to AC or +1 to saving throws (your choice). Uses: PB/long rest.",
          },
          {
            name: "Crowd Spin",
            description:
              "Action: present a narrative to up to 6 creatures within 30 ft. Each must make a WIS save (DC = 8 + PB + casting_ability_mod) or be Charmed by you until the end of your next turn.",
          },
        ],
        5: [
          {
            name: "Narrative Lock",
            description:
              "When a creature fails the save against your Crowd Spin, it has disadvantage on its next saving throw against your spells before the end of your next turn.",
          },
        ],
        7: [
          {
            name: "Mass Suggestion",
            description:
              "1/long rest, cast Mass Suggestion without a slot. Crowd Spin radius becomes 15 ft and can affect up to 10 creatures.",
          },
        ],
        9: [
          {
            name: "Narrative Control",
            description:
              "1/short rest, rewrite recent events in witnesses’ minds. Choose up to 6 creatures within 60 ft. Each makes a WIS save or has their memory of the last 10 minutes altered plausibly (modified Modify Memory).",
          },
        ],
        13: [
          {
            name: "Truth is Malleable",
            description:
              "You can cast Modify Memory at will on creatures affected by your Crowd Spin or Narrative Control within the past hour. Creatures have disadvantage on saves vs your enchantments if they've heard you speak within 24 hours.",
          },
        ],
        17: [
          {
            name: "Rewrite Reality",
            description:
              "1/long rest, cast Wish, but only to replicate enchantment/illusion spells of 8th level or lower, or to change the memories/perceptions of up to 100 creatures who can hear you.",
          },
        ],
      },
    },

    Investigation: {
      branchPath: "Investigation",
      tagline: "The Watchdog — follow leads, expose rot.",
      progression: {
        3: [
          {
            name: "Press Credentials",
            description:
              "Gain proficiency in Investigation or Perception (or expertise if already proficient). You also learn Detect Magic if you didn't already know it.",
          },
          {
            name: "Expose",
            description:
              "Bonus action: mark a creature you can see. Until the end of your next turn, the first attack against it by you or an ally adds your Inspiration die to damage if it hits.",
          },
        ],
        5: [
          {
            name: "Follow the Money",
            description:
              "You can always tell if a visible creature within 30 ft is carrying a concealed magical item. 1/short rest, cast See Invisibility without a slot.",
          },
        ],
        7: [
          {
            name: "Investigative Report",
            description:
              "After 1 minute observing a creature, location, or object, make an Investigation check (DC by DM). On a success, learn up to three relevant facts. You have advantage on checks to recall information you've documented.",
          },
        ],
        9: [
          {
            name: "The Scoop",
            description:
              "1/long rest, spend 1 hour researching: receive information as if casting Legend Lore and Divination simultaneously. Also cast Scrying 1/long rest without a slot.",
          },
        ],
        13: [
          {
            name: "Uncover Corruption",
            description:
              "Automatically detect when a creature within 30 ft lies to you. 1/long rest, cast True Seeing on yourself (duration 1 hour).",
          },
        ],
        17: [
          {
            name: "The Whole Truth",
            description:
              "Gain permanent Truesight 120 ft. 1/long rest, enter a 1-minute trance (concentration) to perceive events that occurred at your current location within the past year as if present.",
          },
        ],
      },
    },

    Satire: {
      branchPath: "Satire",
      tagline: "The Razor Quill — hurt them with the truth.",
      progression: {
        3: [
          {
            name: "Barbed Wit",
            description:
              "When you deal psychic damage with a spell or cantrip, add your casting ability modifier to one damage roll (once per turn).",
          },
          {
            name: "Cut to Ribbons",
            description:
              "When Counter-Narrative reduces a roll by your die maximum (e.g., 6 on a d6), the target is also Silenced until the start of your next turn (no verbal components).",
          },
        ],
        5: [
          {
            name: "Public Humiliation",
            description:
              "When you drop a creature to 0 HP with psychic damage or it fails a save vs one of your enchantments, you and allies gain temp HP equal to your casting ability modifier.",
          },
        ],
        7: [
          {
            name: "Cutting Words Upgraded",
            description:
              "Use Counter-Narrative without expending an Inspiration die a number of times equal to your Charisma modifier per long rest. When you use Counter-Narrative to reduce a saving throw, the creature also has disadvantage on its next attack roll.",
          },
        ],
        9: [
          {
            name: "Viral Mockery",
            description:
              "When you deal psychic damage with a spell, force a CHA save. On a failure, the target is marked with humiliation for 1 minute: disadvantage on attacks and ability checks; others have advantage on Charisma checks against it.",
          },
        ],
        13: [
          {
            name: "Devastating Critique",
            description:
              "When you deal psychic damage, you may maximize the damage instead of rolling. Uses/long rest = your Charisma modifier. Creatures killed by your psychic damage cannot be resurrected by spells of 5th level or lower.",
          },
        ],
        17: [
          {
            name: "Death by Words",
            description:
              "1/long rest, deliver a 1-minute monologue to one creature within 60 ft that can hear/understand you. It makes a CHA save (DC = your spell save DC + 2). On a failure, it takes 20d10 psychic damage and is stunned for 1 minute (save at end of turns). On a success, it takes half damage and isn’t stunned.",
          },
        ],
      },
    },

    "Public Relations": {
      branchPath: "Public Relations",
      tagline: "The Silver Quill — polish the message, shield the team.",
      progression: {
        3: [
          {
            name: "Crisis Comms",
            description:
              "Reaction when an ally within 30 ft fails a saving throw: expend an Inspiration die; the ally adds the die and can immediately move up to 10 ft without provoking opportunity attacks.",
          },
          {
            name: "Polished Image",
            description:
              "You and allies within 10 ft gain +2 to Charisma (Deception) and (Persuasion) checks while not in combat.",
          },
        ],
        5: [
          {
            name: "Rally Point",
            description:
              "Bonus action: create a 10-ft aura for 1 minute. Allies starting their turn in the aura gain +1 to attack rolls and +1 to saves vs being frightened. Uses: 1/short rest.",
          },
        ],
        7: [
          {
            name: "Reputation Management",
            description:
              "Spend 10 minutes with a creature to shift its attitude one step (hostile→…→helpful) on a contested Persuasion vs Insight check. Lasts 24 hours unless contradicted by your actions.",
          },
        ],
        9: [
          {
            name: "Crisis Management",
            description:
              "When you or an ally within 30 ft fails a Charisma check or save, use your reaction to allow a reroll with advantage. You can also cast Glibness on yourself 1/long rest without a slot.",
          },
        ],
        13: [
          {
            name: "Spin Doctor",
            description:
              "Cast Suggestion at will without a slot. 1/long rest, cast Mass Suggestion affecting up to 20 creatures within a 60-ft radius.",
          },
        ],
        17: [
          {
            name: "Perfect Image",
            description:
              "Cast Glibness on yourself at will. 1/long rest, cast True Polymorph on yourself without concentration; lasts until you end it. You retain Wordsmith features and can still cast spells.",
          },
        ],
      },
    },
  },

  design_notes: {
    concept:
      "Bard remap centered on journalism, persuasion, and crowd control.",
    tone: "Ink-stained noir: truth, spin, and spectacle.",
    balance_notes: [
      "Tracks Bard cadence: Inspiration d6→d8 at 5, d10 at 9, d12 at 15; Jack-of-all-Trades analog; Song of Rest.",
      "Beats provide control/support/debuff lanes without overtaking hard controllers.",
      "Legendary/17th features are potent; tables wanting lower swing can gate Mass Suggestion/Wish-style effects to 1/week or require downtime scenes.",
    ],
  },
};
