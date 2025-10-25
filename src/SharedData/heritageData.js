export const innateHeritages = [
  "Pureblood",
  "Halfblood",
  "Muggleborn",
  "Metamorph Magic",
  "Parseltongue",
  "Hex-Scarred",
  "Seer-Blooded",
  "Half-Giant",
  "Werewolf (Lycan-Cursed)",
  "Vampire-Blooded",
];

export const heritageDescriptions = {
  Pureblood: {
    description:
      "Old wizarding families, steeped in tradition and etiquette. You grew up knowing the bylaws, backrooms, and bloodlines.",
    benefits: [
      "You gain proficiency in History of Magic checks. If you are already proficient you gain expertise.",
      "You gain tool proficiency with one of the following: Astronomer's Tools, Herbologist's Tools, Potioneer's Kit, Vehicle (Broomstick), or Diviner's Kit.",
      "You have advantage on checks made to recall Pureblood family histories, crests, and alliances.",
    ],
    modifiers: {
      abilityIncreases: [],
      skillProficiencies: ["History of Magic"],
      expertise: [],
      other: { purebloodFamilyKnowledge: true },
    },
    features: [
      {
        name: "Wizarding Tool Proficiency",
        description: "Choose a tool proficiency from your wizarding upbringing",
        isChoice: true,
        options: [
          {
            name: "Astronomer's Tools",
            description: "Gain proficiency with Astronomer's Tools",
            toolProficiencies: ["Astronomer's tools"],
          },
          {
            name: "Herbologist's Tools",
            description: "Gain proficiency with Herbologist's Tools",
            toolProficiencies: ["Herbologist's tools"],
          },
          {
            name: "Potioneer's Kit",
            description: "Gain proficiency with Potioneer's Kit",
            toolProficiencies: ["Potioneer's kit"],
          },
          {
            name: "Vehicle (Broomstick)",
            description: "Gain proficiency with Vehicle (Broomstick)",
            toolProficiencies: ["Broomstick"],
          },
          {
            name: "Diviner's Kit",
            description: "Gain proficiency with Diviner's Kit",
            toolProficiencies: ["Diviner's kit"],
          },
        ],
      },
    ],
  },

  Halfblood: {
    description:
      "Bridging two worlds makes you adaptable and hard to rattle—equally at home in a pub or a portrait hall.",
    benefits: [
      "Choose one focus: Magical Focus or Muggle Focus.",
      "Magical Focus: Gain proficiency in History of Magic (expertise if already proficient) + choose two: Acrobatics, Herbology, Magical Creatures, Potion-Making, Intimidation.",
      "Muggle Focus: Gain proficiency in Muggle Integration (expertise if already proficient) + choose two: Athletics, Investigation, Medicine, Survival, Persuasion.",
    ],
    modifiers: {
      abilityIncreases: [],
      skillProficiencies: [],
      expertise: [],
      other: {},
    },
    features: [
      {
        name: "Heritage Path",
        description: "Choose your halfblood heritage focus",
        isChoice: true,
        options: [
          {
            name: "Magical Focus",
            description:
              "History of Magic proficiency (or expertise) + two skills from the list.",
            skillProficiencies: ["History of Magic"],
            bonusSkillChoices: [
              "Acrobatics",
              "Herbology",
              "Magical Creatures",
              "Potion-Making",
              "Intimidation",
            ],
            bonusSkillCount: 2,
          },
          {
            name: "Muggle Focus",
            description:
              "Muggle Integration proficiency (or expertise) + two skills from the list.",
            skillProficiencies: ["Muggle Integration"],
            bonusSkillChoices: [
              "Athletics",
              "Investigation",
              "Medicine",
              "Survival",
              "Persuasion",
            ],
            bonusSkillCount: 2,
          },
        ],
      },
    ],
  },

  Muggleborn: {
    description:
      "First in the family to hold a wand. You read both the papers and the tabloids—and you know which one to believe.",
    benefits: [
      "You gain proficiency in Muggle Integration checks. If already proficient, gain expertise.",
      "Tool Proficiency: Choose one—Disguise Kit, Navigator's Tools, Poisoner's Kit, Thieves' Tools, Cook's Utensils, or one Musical Instrument.",
      "You have advantage on Muggle Integration checks to blend into Muggle society and explain Muggle culture/technology to wizards.",
    ],
    modifiers: {
      abilityIncreases: [],
      skillProficiencies: ["Muggle Integration"],
      expertise: [],
      other: { muggleCultureAdvantage: true },
    },
    features: [
      {
        name: "Tool Proficiency",
        description: "Choose a tool proficiency from your background",
        isChoice: true,
        options: [
          {
            name: "Disguise Kit",
            description: "Gain proficiency with Disguise Kit",
            toolProficiencies: ["Disguise Kit"],
          },
          {
            name: "Navigator's Tools",
            description: "Gain proficiency with Navigator's Tools",
            toolProficiencies: ["Navigator's Tools"],
          },
          {
            name: "Poisoner's Kit",
            description: "Gain proficiency with Poisoner's Kit",
            toolProficiencies: ["Poisoner's Kit"],
          },
          {
            name: "Thieves' Tools",
            description: "Gain proficiency with Thieves' Tools",
            toolProficiencies: ["Thieves' Tools"],
          },
          {
            name: "Cook's Utensils",
            description: "Gain proficiency with Cook's Utensils",
            toolProficiencies: ["Cook's Utensils"],
          },
          {
            name: "Musical Instrument",
            description: "Gain proficiency with one instrument",
            toolProficiencies: ["Musical Instrument (Choice)"],
          },
        ],
      },
    ],
  },

  "Metamorph Magic": {
    description:
      "A rare metamorphmagus gift—change your face, your voice, your hair. Handy when the truth wears a different mask.",
    benefits: [
      "Ability Score Increase: Increase your Charisma by 1 (max 20).",
      "Transform: At will, you can alter your appearance (height, weight, features, voice, hair, coloration). Your size category remains the same.",
    ],
    modifiers: {
      abilityIncreases: [{ type: "fixed", ability: "charisma", amount: 1 }],
      skillProficiencies: [],
      expertise: [],
      other: { metamorphTransform: true },
    },
    features: [],
  },

  Parseltongue: {
    description:
      "The hiss of secrets. You can commune with serpents—and they often have seen more than people think.",
    benefits: [
      "Ability Score Increase: Increase your Charisma by 1 (max 20).",
      "Parselmouth: You speak Parseltongue and have advantage on Charisma checks made to influence snakes.",
    ],
    modifiers: {
      abilityIncreases: [{ type: "fixed", ability: "charisma", amount: 1 }],
      skillProficiencies: [],
      expertise: [],
      other: { parseltongue: true, snakeCharismaAdvantage: true },
    },
    features: [],
  },

  "Hex-Scarred": {
    description:
      "A brush with wild magic left a mark—subtle, uncanny, and not always polite. People say lights flicker when you enter.",
    benefits: [
      "Choose one: gain proficiency in Survival or Stealth.",
      "Twist of Fate: Once per long rest, after seeing a roll but before the outcome is known, add or subtract 1d4 from a creature’s ability check, attack roll, or saving throw within 30 ft.",
    ],
    modifiers: {
      abilityIncreases: [],
      skillProficiencies: [],
      expertise: [],
      other: { twistOfFate: true },
    },
    features: [
      {
        name: "Skill Choice",
        description: "Choose your subtle edge",
        isChoice: true,
        options: [
          {
            name: "Survival",
            description: "Gain proficiency in Survival",
            skillProficiencies: ["Survival"],
          },
          {
            name: "Stealth",
            description: "Gain proficiency in Stealth",
            skillProficiencies: ["Stealth"],
          },
        ],
      },
    ],
  },

  "Seer-Blooded": {
    description:
      "Second sight runs thin in your line, but it’s enough to catch echoes—omens in tealeaves, footsteps before they fall.",
    benefits: [
      "Ability Score Increase: Increase your Wisdom or Intelligence by 1 (max 20).",
      "Premonition: Once per long rest, you can gain advantage on one Investigation, Insight, or Perception check.",
      "Augury Glimpse: Once per long rest, you can ask the DM a yes/no question about a course of action within the next 30 minutes; you receive a brief omen (favorable/neutral/unfavorable).",
    ],
    modifiers: {
      abilityIncreases: [],
      skillProficiencies: [],
      expertise: [],
      other: { premonition: true, auguryGlimpse: true },
    },
    features: [
      {
        name: "Ability Score Choice",
        description: "Choose which ability score to increase",
        isChoice: true,
        options: [
          {
            name: "Wisdom +1",
            description: "Increase your Wisdom by 1",
            abilityChoice: "wisdom",
            amount: 1,
          },
          {
            name: "Intelligence +1",
            description: "Increase your Intelligence by 1",
            abilityChoice: "intelligence",
            amount: 1,
          },
        ],
      },
    ],
  },

  "Half-Giant": {
    description:
      "Part-giant heritage lends you size and stubbornness. Doors feel smaller; rules, too.",
    benefits: [
      "Ability Score Increase: Increase your Strength by 1 (max 20).",
      "Hefty: You are considered one size larger when determining carrying capacity and the weight you can push, drag, or lift.",
      "Rock-Steady: When a spell or magical effect would impose a condition on you, you can use your reaction to gain advantage on the saving throw. Uses equal to your proficiency bonus per long rest.",
    ],
    modifiers: {
      abilityIncreases: [{ type: "fixed", ability: "strength", amount: 1 }],
      skillProficiencies: [],
      expertise: [],
      other: { heftyBuild: true, rockSteady: true },
    },
    features: [],
  },

  "Werewolf (Lycan-Cursed)": {
    description:
      "A controlled curse—most nights. The moon has a say. So do you.",
    benefits: [
      "Ability Score Increase: Increase your Constitution by 1 (max 20).",
      "Keen Senses: You have advantage on Wisdom (Perception) checks that rely on smell or hearing.",
      "Resilient Physiology: You have advantage on saving throws against disease.",
      "Moonbound: During the 3 nights around the full moon, you must make a DC 12 Wisdom saving throw at dusk; on a failure, you transform until dawn (DM-controlled if you have harmed a humanoid during a prior uncontrolled transformation).",
      "Lycan Form (Controlled): Once per long rest, as a bonus action you can partially transform for 1 minute: gain +10 ft speed, your unarmed strikes deal 1d6 slashing, and you have advantage on Intimidation checks. Ends early if you are knocked unconscious.",
      "Silver Aversion: You have vulnerability to damage from silvered weapons while in Lycan Form.",
    ],
    modifiers: {
      abilityIncreases: [{ type: "fixed", ability: "constitution", amount: 1 }],
      skillProficiencies: [],
      expertise: [],
      other: {
        keenSenses: true,
        diseaseResilience: true,
        moonboundCurse: true,
        lycanForm: true,
        silverAversion: true,
      },
    },
    features: [],
  },

  "Vampire-Blooded": {
    description:
      "Not undead—just close enough for comfort. Night favors you; daylight does not.",
    benefits: [
      "Ability Score Increase: Increase your Charisma or Dexterity by 1 (max 20).",
      "Darkvision: You can see in dim light within 60 ft as if it were bright light, and in darkness as if it were dim light.",
      "Predatory Grace: You have advantage on checks to track or identify a creature you have seen bleed in the last hour.",
      "Hemovital Bite: Once per long rest, as an action, make a melee spell attack against a grappled, restrained, incapacitated, or willing creature within 5 ft. On a hit, the target takes 1d6 necrotic damage and you gain temporary hit points equal to the damage dealt (no effect on constructs/undead).",
      "Sunlight Sensitivity: While in direct sunlight, you have disadvantage on Perception checks that rely on sight and on your first attack roll each turn.",
    ],
    modifiers: {
      abilityIncreases: [],
      skillProficiencies: [],
      expertise: [],
      other: {
        darkvision: 60,
        predatoryGrace: true,
        hemovitalBite: true,
        sunlightSensitivity: true,
      },
    },
    features: [
      {
        name: "Ability Score Choice",
        description: "Choose which ability score to increase",
        isChoice: true,
        options: [
          {
            name: "Charisma +1",
            description: "Increase your Charisma by 1",
            abilityChoice: "charisma",
            amount: 1,
          },
          {
            name: "Dexterity +1",
            description: "Increase your Dexterity by 1",
            abilityChoice: "dexterity",
            amount: 1,
          },
        ],
      },
    ],
  },
};
