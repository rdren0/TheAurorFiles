/**
 * Spell Access by Profession
 * Defines which spell categories each magical profession can access
 */

// Universal categories - everyone gets these from base magical training
const UNIVERSAL_CATEGORIES = [
  "Charms",
  "Transfigurations",
  "Jinxes, Hexes & Curses", // Basic defensive/offensive magic
];

// Professional spell access mappings
export const SPELL_ACCESS = {
  // Base magical training - gets universal spells only
  base_witch_wizard: {
    categories: [...UNIVERSAL_CATEGORIES],
    description: "Basic magical training - universal spells only",
  },

  // AUROR - Combat specialist and dark wizard catcher
  auror: {
    categories: [
      ...UNIVERSAL_CATEGORIES,
      "Combat Operations",
      "Crime Scene Analysis",
      "Surveillance & Tracking",
      "Interrogation Techniques",
      "Specialized Arsenal",
      "Divinations", // For tracking/investigation
    ],
    description: "Combat operations, investigation, and tracking specialist",
  },

  // HIT WIZARD - Elite combat enforcement
  hitwizard: {
    categories: [
      ...UNIVERSAL_CATEGORIES,
      "Combat Operations",
      "Specialized Arsenal",
      "Grim", // Dark/assassination magic unique to them
      "Gravetouched", // Darker combat magic
    ],
    description: "Elite combat specialist with access to darker magic",
  },

  // PROFESSOR - Academic master with theoretical knowledge
  professor: {
    categories: [
      ...UNIVERSAL_CATEGORIES,
      "Combat Operations",
      "Crime Scene Analysis",
      "Surveillance & Tracking",
      "Interrogation Techniques",
      "Field Medicine",
      "Specialized Arsenal",
      "Divinations",
      "Healing",
      "Elemental",
      "Valiant",
      "Magizoo",
      // Professors know theory of almost everything
    ],
    description: "Academic specialist - access to nearly all magic theory",
  },

  // HEALER / ALCHEMIST - Medical and healing specialist
  healer_alchemist: {
    categories: [
      ...UNIVERSAL_CATEGORIES,
      "Field Medicine",
      "Healing",
      "Divinations", // Medical diagnostics
      "Elemental", // Potion ingredients, alchemical processes
      "Transfigurations", // Biological transfigurations
    ],
    description: "Medical and alchemical specialist",
  },

  // MUGGLE LIAISON - Subtle magic and memory work
  muggle_liaison: {
    categories: [
      ...UNIVERSAL_CATEGORIES,
      "Interrogation Techniques", // Memory charms
      "Surveillance & Tracking",
      "Divinations", // Detection magic
    ],
    description: "Subtle magic and memory modification specialist",
  },

  // ARCANIST - Pure magical theory specialist
  arcanist: {
    categories: [
      ...UNIVERSAL_CATEGORIES,
      "Divinations",
      "Elemental",
      "Valiant",
      "Combat Operations",
      "Specialized Arsenal",
    ],
    description: "Pure arcane theory specialist",
  },

  // SPELLWRIGHT - Spell creation and modification
  spellwright: {
    categories: [
      ...UNIVERSAL_CATEGORIES,
      "Combat Operations",
      "Specialized Arsenal",
      "Divinations",
      "Elemental",
    ],
    description: "Spell creation and modification specialist",
  },

  // NATURALIST - Nature and creature magic
  naturalist: {
    categories: [
      ...UNIVERSAL_CATEGORIES,
      "Magizoo",
      "Healing",
      "Divinations",
      "Elemental",
      "Transfigurations",
    ],
    description: "Nature and creature magic specialist",
  },

  // WORDSMITH - Language and communication magic
  wordsmith: {
    categories: [
      ...UNIVERSAL_CATEGORIES,
      "Interrogation Techniques",
      "Divinations",
      "Surveillance & Tracking",
    ],
    description: "Language and communication magic specialist",
  },

  // FIELD HUNTER - Tracking and wilderness magic
  field_hunter: {
    categories: [
      ...UNIVERSAL_CATEGORIES,
      "Surveillance & Tracking",
      "Combat Operations",
      "Magizoo",
      "Divinations",
      "Field Medicine",
    ],
    description: "Tracking and wilderness combat specialist",
  },

  // SCRAPPER - Street fighting and improvised magic
  scrapper: {
    categories: [
      ...UNIVERSAL_CATEGORIES,
      "Combat Operations",
      "Jinxes, Hexes & Curses",
    ],
    description: "Street combat specialist - limited but practical magic",
  },

  // OBSCURIAL - Unstable magic user (Barbarian equivalent)
  obscurial: {
    categories: [
      ...UNIVERSAL_CATEGORIES,
      "Combat Operations",
      "Grim",
      "Gravetouched",
      "Elemental", // Raw destructive power
    ],
    description: "Unstable magic user with access to raw destructive power",
  },
};

/**
 * Get allowed spell categories for a profession
 * @param {string} profession - Character's profession/class
 * @returns {Array<string>} - Array of allowed spell category names
 */
export const getAllowedCategories = (profession) => {
  if (!profession) {
    return UNIVERSAL_CATEGORIES;
  }

  const accessConfig = SPELL_ACCESS[profession];
  if (!accessConfig) {
    console.warn(`No spell access config for profession: ${profession}`);
    return UNIVERSAL_CATEGORIES;
  }

  return accessConfig.categories;
};

/**
 * Check if a profession has access to a specific spell category
 * @param {string} profession - Character's profession/class
 * @param {string} category - Spell category name
 * @returns {boolean} - True if profession can access this category
 */
export const hasAccessToCategory = (profession, category) => {
  const allowedCategories = getAllowedCategories(profession);
  return allowedCategories.includes(category);
};

/**
 * Get a description of spell access for a profession
 * @param {string} profession - Character's profession/class
 * @returns {string} - Description of what magic this profession can access
 */
export const getSpellAccessDescription = (profession) => {
  if (!profession) {
    return "Basic magical training";
  }

  const accessConfig = SPELL_ACCESS[profession];
  return accessConfig?.description || "Unknown profession";
};
