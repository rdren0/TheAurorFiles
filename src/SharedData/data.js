import { Brain, Heart, Shield, Zap } from "lucide-react";

export const SPELL_SLOT_PROGRESSION = {
  1: [2, 0, 0, 0, 0, 0, 0, 0, 0],
  2: [3, 0, 0, 0, 0, 0, 0, 0, 0],
  3: [4, 2, 0, 0, 0, 0, 0, 0, 0],
  4: [4, 3, 0, 0, 0, 0, 0, 0, 0],
  5: [4, 3, 2, 0, 0, 0, 0, 0, 0],
  6: [4, 3, 3, 0, 0, 0, 0, 0, 0],
  7: [4, 3, 3, 1, 0, 0, 0, 0, 0],
  8: [4, 3, 3, 2, 0, 0, 0, 0, 0],
  9: [4, 3, 3, 3, 1, 0, 0, 0, 0],
  10: [4, 3, 3, 3, 2, 0, 0, 0, 0],
  11: [4, 3, 3, 3, 2, 1, 0, 0, 0],
  12: [4, 3, 3, 3, 2, 1, 0, 0, 0],
  13: [4, 3, 3, 3, 2, 1, 1, 0, 0],
  14: [4, 3, 3, 3, 2, 1, 1, 0, 0],
  15: [4, 3, 3, 3, 2, 1, 1, 1, 0],
  16: [4, 3, 3, 3, 2, 1, 1, 1, 0],
  17: [4, 3, 3, 3, 2, 1, 1, 1, 1],
  18: [4, 3, 3, 3, 3, 1, 1, 1, 1],
  19: [4, 3, 3, 3, 3, 2, 1, 1, 1],
  20: [4, 3, 3, 3, 3, 2, 2, 1, 1],
};

export const SORCERY_POINT_PROGRESSION = {
  1: 0,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  11: 11,
  12: 12,
  13: 13,
  14: 14,
  15: 15,
  16: 16,
  17: 17,
  18: 18,
  19: 19,
  20: 20,
};

export const BLACK_MAGIC_PROGRESSION = {
  1: "1d6",
  2: "1d6",
  3: "2d6",
  4: "2d6",
  5: "3d6",
  6: "3d6",
  7: "4d6",
  8: "4d6",
  9: "5d6",
  10: "5d6",
  11: "6d6",
  12: "6d6",
  13: "7d6",
  14: "7d6",
  15: "8d6",
  16: "8d6",
  17: "9d6",
  18: "9d6",
  19: "10d6",
  20: "10d6",
};

export const housesBySchool = {
  "Hogwarts School of Witchcraft and Wizardry": [
    "Gryffindor",
    "Hufflepuff",
    "Ravenclaw",
    "Slytherin",
  ],
  "Ilvermorny School of Witchcraft and Wizardry": [
    "Horned Serpent",
    "Wampus Cat",
    "Thunderbird",
    "Pukwudgie",
  ],
  "Beauxbatons Academy of Magic": ["Beauxbatons"],
  "Durmstrang Institute": ["Durmstrang"],
  "Uagadou School of Magic": ["Uagadou"],
  "Mahoutokoro School of Magic": ["Mahoutokoro"],
  Castelobruxo: ["Castelobruxo"],
  Koldovstoretz: ["Koldovstoretz"],
};

export const castingStyles = [
  "Willpower Caster",
  "Technique Caster",
  "Intellect Caster",
  "Vigor Caster",
];

export const castingStyleData = {
  "Technique Caster": {
    icon: Zap,
    color: "#8B5CF6",
    hitDie: "1d6",
    hitPointsAtFirst: "6 + CON modifier",
    hitPointsPerLevel: "1d6 (or 4) + CON modifier",
    spellcastingAbility: "Wisdom",
    baseAC: "10 + DEX modifier",
    savingThrows: ["Dexterity", "Wisdom"],
    skills: [
      "Acrobatics",
      "Herbology",
      "Magical Theory",
      "Insight",
      "Perception",
      "Potion-Making",
      "Sleight of Hand",
      "Stealth",
    ],
    keyFeatures: [
      {
        name: "Exploit Weakness",
        level: 1,
        description:
          "Starting at 1st level, your technical prowess with spells and dueling has led you to notice others weaknesses. Once per turn, when you hit a creature with an attack, you can expend one spell slot to deal extra damage to the target, in addition to the spell's regular damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage is always the same type of damage that the triggering spell inflicted.",
      },
      {
        name: "Spell Deflection",
        level: 3,
        description:
          "At 3rd level, when you are the target of a spell or included in the area of a spell, you can deflect the spell as a reaction. The spell must be on your list of known spells and you spend a number of sorcery points equal to twice that spell's level. Upon deflection, you automatically succeed on your saving throw against the spell and you can direct the spell's effect to a creature within 10 feet of you, if desired. If the spell does not have a saving throw, it has no effect on you. If a creature was also targeted by the spell or included in the area of the spell, you cannot redirect the spell to that creature.",
      },
      {
        name: "Technical Metamagics",
        level: 3,
        description:
          "You may add the following Metamagic options to the list of Metamagics you can choose from as you level up as a technique caster. Bouncing Spell: When a creature succeeds at a saving throw against a single-target spell you cast, you can spend 2 Sorcery Points to have the spell bounce, targeting another creature of your choice within 30 ft. of the original target without spending another spell slot or taking an additional action. Maximized Spell: When you roll damage for a leveled spell, you can spend a number of Sorcery Points equal to twice the spell's level to deal maximum damage to one target of the spell. Maximized spell can not be applied to Exploit Weakness damage. Seeking Spell: If you make an attack roll for a spell and miss, you can spend 2 Sorcery Points to reroll the d20, and you must use the new roll. You can use Seeking Spell even if you have already used a different Metamagic option during the casting of the spell.",
      },
      {
        name: "Sorcerous Restoration",
        level: 20,
        description:
          "When you reach 20th level, you regain 4 expended sorcery points whenever you finish a short rest.",
      },
    ],
    description:
      "Masters of precision and technique, these casters excel at exploiting weaknesses and deflecting magical attacks.",
  },
  "Intellect Caster": {
    icon: Brain,
    color: "#3B82F6",
    hitDie: "1d8",
    hitPointsAtFirst: "8 + CON modifier",
    hitPointsPerLevel: "1d8 (or 5) + CON modifier",
    spellcastingAbility: "Intelligence",
    baseAC: "11 + DEX modifier",
    savingThrows: ["Wisdom", "Intelligence"],
    skills: [
      "Acrobatics",
      "Herbology",
      "Magical Theory",
      "Insight",
      "Investigation",
      "Magical Creatures",
      "History of Magic",
      "Medicine",
      "Muggle Studies",
      "Survival",
    ],
    keyFeatures: [
      {
        name: "Double Check Notes",
        level: 1,
        description:
          "Once per long rest, you may use a Bonus Action to check over your notes when you fail to cast a spell correctly. When you do so, you may gain an extra attempt to cast the spell you failed.",
      },
      {
        name: "Ritual Casting",
        level: 1,
        description:
          "Your ability to recall information allows you to freely cast spells, as long as you have enough time to stop and focus. At 1st level, you can cast a spell as a ritual if that spell has the ritual tag and you know the spell. A ritual version of a spell takes only 1 minute longer to cast than normal. It also doesn't expend a spell slot, which means the ritual version of a spell can't be cast at a higher level.",
      },
      {
        name: "Tactical Wit",
        level: 3,
        description:
          "Your keen ability to assess tactical situations allows you to act quickly in battle. When calculating your Initiative you may use your Intelligence modifier rather than Dexterity (Whichever is higher). Additionally, you have learned to weave your magic to fortify yourself against harm. When you are hit by an attack or you fail a saving throw, you can use your reaction to gain a +2 bonus to your AC against that attack or a +4 bonus to that saving throw. When you use this feature, you can't cast spells other than cantrips until the end of your next turn.",
      },
      {
        name: "Sharp Senses",
        level: 1,
        description:
          "Your ability to avoid incoming spells is superior to your peers. Your AC equals 11 + your Dexterity modifier",
      },
      {
        name: "Diverse Studies",
        level: 3,
        description:
          "At 3rd level, you gain two level 1 features of your chosen School of Magic.",
      },
      {
        name: "Arcane Recovery",
        level: 20,
        description:
          "When you reach 20th level, you have learned to regain some of your magical energy by studying in your free time. Whenever you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than 10, and none of the slots can be 6th level or higher.",
      },
    ],
    description:
      "Scholarly spellcasters who rely on knowledge and preparation, with superior tactical awareness and ritual casting.",
  },
  "Vigor Caster": {
    icon: Heart,
    color: "#EF4444",
    hitDie: "1d12",
    hitPointsAtFirst: "12 + CON modifier",
    hitPointsPerLevel: "1d12 (or 8) + CON modifier",
    spellcastingAbility: "Constitution",
    baseAC: "8 + DEX modifier",
    savingThrows: ["Constitution", "Strength"],
    skills: [
      "Athletics",
      "Acrobatics",
      "Deception",
      "Stealth",
      "Magical Creatures",
      "Medicine",
      "Survival",
      "Intimidation",
      "Performance",
    ],
    keyFeatures: [
      {
        name: "Easy Target",
        level: 1,
        description:
          "Your large, strong body makes you easy to see and easy to hit. Your AC equals 8 + your Dexterity Modifier",
      },
      {
        name: "Rated E for Everyone",
        level: 1,
        description:
          "Your unarmed strikes deal damage equal to 1d6 + your Strength mod. This damage increases by 1d6 when you reach certain levels: 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
      },
      {
        name: "Metamagic: Rage",
        level: 3,
        description:
          "At 3rd level, when in battle, you fight with primal ferocity. On your turn, you can spend 5 sorcery points to enter a rage as a bonus action. While raging, you gain the following benefits when you aren't wearing armor: You have advantage on Strength checks and Strength saving throws. You have resistance to bludgeoning, piercing, slashing and fire damage. You can't cast spells with an area of effect (cube, line, sphere, or cone) or concentrate or dedicate on spells while raging. When you make an unarmed strike, using strength, you gain a +2 bonus to the damage roll. This damage increases to +3 at 10th level, and +4 at 16th level. Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.",
      },
      {
        name: "Relentless Rage",
        level: 11,
        description:
          "Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you're raging and don't die outright, you can make a DC 15 Constitution saving throw. If you succeed, you drop to 1 hit point instead. Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 15.",
      },
      {
        name: "Vigorous Perfection",
        level: 20,
        description:
          "At 20th level, your Constitution score increases by 4. Your maximum for this score is now 24.",
      },
    ],
    description:
      "Physical powerhouses who channel magic through raw vitality, combining spellcasting with brutal melee combat.",
  },
  "Willpower Caster": {
    icon: Shield,
    color: "#F59E0B",
    hitDie: "1d10",
    hitPointsAtFirst: "10 + CON modifier",
    hitPointsPerLevel: "1d10 (or 6) + CON modifier",
    spellcastingAbility: "Charisma",
    baseAC: "15 + DEX modifier",
    savingThrows: ["Constitution", "Charisma"],
    skills: [
      "Athletics",
      "Acrobatics",
      "Deception",
      "Intimidation",
      "History of Magic",
      "Magical Creatures",
      "Persuasion",
      "Sleight of Hand",
      "Survival",
    ],
    keyFeatures: [
      {
        name: "Sorcerous Resilience",
        level: 1,
        description:
          "The accidental magic in your early childhood never stopped protecting you. Your AC equals 15 + your Dexterity modifier.",
      },
      {
        name: "Reckless Magic",
        level: 1,
        description:
          "You can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on spell attack rolls during this turn, but attack rolls against you have advantage until your next turn.",
      },
      {
        name: "Black Magic",
        level: 1,
        description:
          "Once per turn, you can deal an extra 1d6 damage to one creature you hit with a cantrip if you have advantage on the attack roll. You don't need advantage if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don't have disadvantage on the attack roll. Your Black Magic damage increases to 2d6 at 3rd level, 3d6 at 5th level, 4d6 at 7th, 5d6 at 9th, 6d6 at 11th, 7d6 at 13th, 8d6 at 15th, 9d6 at 17th, and 10d6 at 19th level.",
      },
      {
        name: "Metamagic: Fierce Spell",
        level: 3,
        description:
          "At 3rd level, when you cast a spell, you can spend 2 sorcery points to cast that spell as if it were cast using a spell slot one level higher than its original level, or 4 sorcery points to cast that spell two levels higher. The spell's higher level cannot exceed your highest available level of spell slots. This does not count against your number of Metamagic options.",
      },
      {
        name: "Metamagic: Resistant Spell",
        level: 3,
        description:
          "At 3rd level, when you cast a spell, you can spend 1 sorcery point per increased level to make your spell be treated by spell deflection, finite incantatem, reparifarge, or langlock as if your spell was cast using a spell slot higher than its original level, making your spell more resistant. The spell's higher level cannot exceed your highest available level of spell slots. This does not count against your number of Metamagic options.",
      },
      {
        name: "Black Magic Specialization",
        level: 5,
        description:
          "At 5th level, you may choose one of the following options to enhance your Black Magic: Ambush (advantage on attacks against creatures that haven't acted), Gambit (Black Magic works when within 5 feet with no other enemies nearby), Grudge (advantage against creatures that damaged you), Pique (advantage when at half hit points or less), or Hubris (advantage against creatures with fewer hit points than you).",
        isChoice: true,
        choices: [
          {
            name: "Ambush",
            description:
              "You have advantage on attack rolls against any creature that hasn't taken a turn in the combat yet. In addition, any hit you score against a creature that is surprised is a critical hit.",
          },
          {
            name: "Gambit",
            description:
              "You don't need advantage on the attack roll to use your Black Magic against a creature if you are within 5 feet of it, no other creatures are within 5 feet of you, and you don't have disadvantage on the attack roll.",
          },
          {
            name: "Grudge",
            description:
              "You gain advantage on attack rolls against a creature that has damaged you since the end of your last turn.",
          },
          {
            name: "Pique",
            description:
              "You have advantage on attack rolls when you have half of your hit points or less.",
          },
          {
            name: "Hubris",
            description:
              "You gain advantage on attack rolls against any creature that has fewer hit points than you.",
          },
        ],
      },
      {
        name: "Signature Spells",
        level: 20,
        description:
          "When you reach 20th level, you gain mastery over two powerful spells and can cast them with little effort. Choose two of your known 3rd-level spells as your signature spells. You can cast each of them once at 3rd level without expending a spell slot. When you do so, you can't do so again until you finish a short or long rest.",
      },
    ],
    description:
      "Charismatic casters who rely on force of personality and natural magical talent, with strong defensive capabilities.",
  },
};

export const SUBJECT_TO_MODIFIER_MAP = {
  combatOperations: {
    abilityScore: "strength",
    wandModifier: "combatOperations",
  },

  crimeSceneAnalysis: {
    abilityScore: "intelligence",
    wandModifier: "crimeSceneAnalysis",
  },

  surveillanceTracking: {
    abilityScore: "wisdom",
    wandModifier: "surveillanceTracking",
  },

  interrogationTechniques: {
    abilityScore: "charisma",
    wandModifier: "interrogationTechniques",
  },

  fieldMedicine: {
    abilityScore: "intelligence",
    wandModifier: "fieldMedicine",
  },

  specializedArsenal: {
    abilityScore: "constitution",
    wandModifier: "specializedArsenal",
  },

  unforgivableCurses: {
    abilityScore: "charisma",
    wandModifier: "unforgivableCurses",
  },

  charms: {
    abilityScore: "intelligence",
    wandModifier: "crimeSceneAnalysis",
  },
  jhc: {
    abilityScore: "strength",
    wandModifier: "combatOperations",
  },
  transfiguration: {
    abilityScore: "constitution",
    wandModifier: "specializedArsenal",
  },
  healing: {
    abilityScore: "intelligence",
    wandModifier: "fieldMedicine",
  },
  divinations: {
    abilityScore: "wisdom",
    wandModifier: "surveillanceTracking",
  },
};

export const hpData = {
  "Willpower Caster": {
    hitDie: 10,
    base: 10,
    avgPerLevel: 6,
  },
  "Technique Caster": {
    hitDie: 6,
    base: 6,
    avgPerLevel: 4,
  },
  "Intellect Caster": {
    hitDie: 8,
    base: 8,
    avgPerLevel: 5,
  },
  "Vigor Caster": {
    hitDie: 12,
    base: 12,
    avgPerLevel: 8,
  },
};

export const skillMap = {
  acrobatics: "Acrobatics",
  animalHandling: "Animal Handling",
  arcana: "Arcana",
  athletics: "Athletics",
  deception: "Deception",
  forensics: "Forensics",
  herbology: "Herbology",
  historyOfMagic: "History of Magic",
  insight: "Insight",
  intimidation: "Intimidation",
  investigation: "Investigation",
  magicalCreatures: "Magical Creatures",
  medicine: "Medicine",
  muggleIntegration: "Muggle Integration",
  perception: "Perception",
  persuasion: "Persuasion",
  potionMaking: "Potion Making",
  sleightOfHand: "Sleight of Hand",
  stealth: "Stealth",
  streetwise: "Streetwise",
  survival: "Survival",
  dimensionalTheory: "Dimensional Theory",
};

export const allSkills = [
  { name: "acrobatics", displayName: "Acrobatics", ability: "dexterity" },
  { name: "animalHandling", displayName: "Animal Handling", ability: "wisdom" },
  { name: "arcana", displayName: "Arcana", ability: "intelligence" },
  { name: "athletics", displayName: "Athletics", ability: "strength" },
  { name: "deception", displayName: "Deception", ability: "charisma" },
  { name: "forensics", displayName: "Forensics", ability: "intelligence" },
  { name: "herbology", displayName: "Herbology", ability: "intelligence" },
  {
    name: "historyOfMagic",
    displayName: "History of Magic",
    ability: "intelligence",
  },
  { name: "insight", displayName: "Insight", ability: "wisdom" },
  { name: "intimidation", displayName: "Intimidation", ability: "charisma" },
  {
    name: "investigation",
    displayName: "Investigation",
    ability: "intelligence",
  },
  {
    name: "magicalCreatures",
    displayName: "Magical Creatures",
    ability: "wisdom",
  },
  { name: "medicine", displayName: "Medicine", ability: "wisdom" },
  {
    name: "muggleIntegration",
    displayName: "Muggle Integration",
    ability: "charisma",
  },
  { name: "perception", displayName: "Perception", ability: "wisdom" },
  { name: "persuasion", displayName: "Persuasion", ability: "charisma" },
  {
    name: "potionMaking",
    displayName: "Potion Making",
    ability: "intelligence",
  },
  {
    name: "sleightOfHand",
    displayName: "Sleight of Hand",
    ability: "dexterity",
  },
  { name: "stealth", displayName: "Stealth", ability: "dexterity" },
  { name: "streetwise", displayName: "Streetwise", ability: "wisdom" },
  { name: "survival", displayName: "Survival", ability: "wisdom" },
  {
    name: "dimensionalTheory",
    displayName: "Dimensional Theory",
    ability: "intelligence",
  },
];

export const abilities = [
  { name: "strength", abbr: "STR", displayName: "Strength" },
  { name: "dexterity", abbr: "DEX", displayName: "Dexterity" },
  { name: "constitution", abbr: "CON", displayName: "Constitution" },
  { name: "intelligence", abbr: "INT", displayName: "Intelligence" },
  { name: "wisdom", abbr: "WIS", displayName: "Wisdom" },
  { name: "charisma", abbr: "CHA", displayName: "Charisma" },
];

export const getAbilityAbbr = (ability) => {
  const abilityObj = abilities.find((a) => a.name === ability);
  return abilityObj?.abbr || ability.slice(0, 3).toUpperCase();
};

export const skillDescriptions = {
  acrobatics:
    "Balance, tumble, perform stunts, escape grapples, or recover from falls gracefully.",
  animalHandling:
    "Calm or control beasts, train creatures, or read the intent of animals and familiars.",
  arcana:
    "Recall magical lore, identify spells and enchantments, or interpret arcane symbols.",
  athletics:
    "Jump, climb, swim, grapple, shove, or resist being pushed by force or magic.",
  deception:
    "Lie convincingly, disguise your intentions, or create false impressions to mislead.",
  forensics:
    "Analyze magical residue, reconstruct events, identify spell traces, and examine evidence.",
  herbology:
    "Identify magical plants, harvest ingredients, or understand their medicinal and alchemical uses.",
  historyOfMagic:
    "Recall magical events, recognize enchanted relics, or cite legal and historical precedents.",
  insight:
    "Detect lies, read emotions, understand motivations, or sense hidden intentions.",
  intimidation:
    "Coerce, threaten, or impose your will through presence, tone, or reputation.",
  investigation:
    "Search for clues, analyze patterns, deduce motives, or piece together complex mysteries.",
  magicalCreatures:
    "Identify and handle magical beasts, know their habits, or spot signs of their presence.",
  medicine:
    "Stabilize the dying, diagnose curses or illnesses, and determine cause of death.",
  muggleIntegration:
    "Blend into Muggle society, understand their customs and technology, or operate without revealing magic.",
  perception:
    "Spot danger, detect hidden details, hear faint sounds, or sense magical disturbances.",
  persuasion:
    "Negotiate, charm, or inspire cooperation through diplomacy, empathy, or rhetoric.",
  potionMaking:
    "Brew potions, identify concoctions, or improvise mixtures under pressure.",
  sleightOfHand:
    "Pick pockets, conceal wands or tools, perform tricks, or plant items unnoticed.",
  stealth:
    "Hide in shadows, move silently, or avoid detection both magically and mundanely.",
  streetwise:
    "Navigate urban environments, gather information from locals, or know where to find illicit contacts.",
  survival:
    "Track creatures, navigate the wilderness, locate food and shelter, or predict weather hazards.",
  dimensionalTheory:
    "Comprehend rifts, portals, and teleportation effects; analyze space-time anomalies.",
};
