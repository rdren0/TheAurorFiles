/**
 * Unified Class Service
 * Combines D&D 5e API classes with custom Wizard World classes
 */

import {
  fetchClasses as fetchDndClasses,
  fetchClassDetails as fetchDndClassDetails,
  fetchSubclasses as fetchDndSubclasses,
  fetchSubclassDetails as fetchDndSubclassDetails,
  fetchSubclassesForClass as fetchDndSubclassesForClass,
} from "./dnd5eApiService";

import {
  getCustomClasses,
  getCustomClassDetails,
  isCustomClass,
} from "../SharedData/customClassesData";

/**
 * Fetch all available classes (D&D + Custom)
 * @param {Object} options - Options for filtering
 * @param {boolean} options.includeCustom - Include custom classes (default: true)
 * @param {boolean} options.includeDnD - Include D&D classes (default: true)
 * @returns {Promise<Array>} Array of all class objects
 */
export const fetchAllClasses = async (options = {}) => {
  const { includeCustom = true, includeDnD = true } = options;

  const classes = [];

  // Add custom classes first (they're the base for this system)
  if (includeCustom) {
    const customClasses = getCustomClasses();
    classes.push(...customClasses);
  }

  // Add D&D classes
  if (includeDnD) {
    try {
      const dndClasses = await fetchDndClasses();
      // Mark them as D&D classes
      const markedDndClasses = dndClasses.map(cls => ({
        ...cls,
        isCustom: false,
        isDnD: true
      }));
      classes.push(...markedDndClasses);
    } catch (error) {
      console.error("Error fetching D&D classes:", error);
    }
  }

  return classes;
};

/**
 * Fetch details for a specific class (custom or D&D)
 * @param {string} classIndex - The class index/ID
 * @returns {Promise<Object>} Class details
 */
export const fetchClassDetails = async (classIndex) => {
  // Check if it's a custom class first
  if (isCustomClass(classIndex)) {
    return getCustomClassDetails(classIndex);
  }

  // Otherwise, fetch from D&D API
  return await fetchDndClassDetails(classIndex);
};

/**
 * Get hit die for a class
 * @param {string} classIndex - The class index/ID
 * @returns {Promise<string>} Hit die (e.g., "d8", "d10")
 */
export const getClassHitDie = async (classIndex) => {
  const classDetails = await fetchClassDetails(classIndex);

  // Custom classes have hit_die property
  if (classDetails.hit_die) {
    return classDetails.hit_die;
  }

  // D&D API classes have hit_die as number
  if (classDetails.hit_die !== undefined) {
    return `d${classDetails.hit_die}`;
  }

  return "d8"; // Default
};

/**
 * Get primary abilities for a class
 * @param {string} classIndex - The class index/ID
 * @returns {Promise<Array>} Array of primary ability names
 */
export const getClassPrimaryAbilities = async (classIndex) => {
  const classDetails = await fetchClassDetails(classIndex);

  // Custom classes have primary_abilities
  if (classDetails.primary_abilities) {
    return classDetails.primary_abilities;
  }

  // For D&D classes, infer from spellcasting ability or class type
  const abilities = [];
  if (classDetails.spellcasting?.spellcasting_ability) {
    abilities.push(classDetails.spellcasting.spellcasting_ability.name);
  }

  return abilities;
};

/**
 * Get saving throw proficiencies for a class
 * @param {string} classIndex - The class index/ID
 * @returns {Promise<Array>} Array of saving throw proficiency names
 */
export const getClassSavingThrows = async (classIndex) => {
  const classDetails = await fetchClassDetails(classIndex);

  // Custom classes have saving_throws array
  if (classDetails.saving_throws) {
    return classDetails.saving_throws;
  }

  // D&D classes have saving_throws as objects
  if (classDetails.saving_throws) {
    return classDetails.saving_throws.map(st => st.name);
  }

  return [];
};

/**
 * Get skill choices for a class
 * @param {string} classIndex - The class index/ID
 * @returns {Promise<Object>} Skill choice configuration
 */
export const getClassSkillChoices = async (classIndex) => {
  const classDetails = await fetchClassDetails(classIndex);

  // Custom classes have skill_choices object
  if (classDetails.skill_choices) {
    return classDetails.skill_choices;
  }

  // D&D classes have proficiency_choices
  if (classDetails.proficiency_choices) {
    const skillChoice = classDetails.proficiency_choices.find(
      choice => choice.desc?.includes("skill")
    );

    if (skillChoice) {
      return {
        choose: skillChoice.choose,
        options: skillChoice.from.options.map(opt => opt.item?.name || opt.name)
      };
    }
  }

  return { choose: 0, options: [] };
};

/**
 * Get features for a specific level
 * @param {string} classIndex - The class index/ID
 * @param {number} level - Character level
 * @returns {Promise<Array>} Array of features for that level
 */
export const getClassFeaturesForLevel = async (classIndex, level) => {
  const classDetails = await fetchClassDetails(classIndex);

  // Custom classes have level_features array
  if (classDetails.level_features) {
    const levelFeatures = classDetails.level_features.find(lf => lf.level === level);
    return levelFeatures?.features || [];
  }

  // For D&D classes, would need to fetch from class levels endpoint
  // This is a simplified version
  return [];
};

/**
 * Check if a class has spellcasting
 * @param {string} classIndex - The class index/ID
 * @returns {Promise<boolean>} True if class has spellcasting
 */
export const classHasSpellcasting = async (classIndex) => {
  const classDetails = await fetchClassDetails(classIndex);
  return !!classDetails.spellcasting;
};

/**
 * Get spellcasting ability for a class
 * @param {string} classIndex - The class index/ID
 * @returns {Promise<string|null>} Spellcasting ability name or null
 */
export const getSpellcastingAbility = async (classIndex) => {
  const classDetails = await fetchClassDetails(classIndex);

  if (!classDetails.spellcasting) {
    return null;
  }

  // Custom classes may have casting_ability_choice
  if (classDetails.spellcasting.casting_ability_choice) {
    // Return first option as default, should be player choice
    return classDetails.spellcasting.casting_ability_choice[0];
  }

  // D&D classes have spellcasting_ability
  if (classDetails.spellcasting.spellcasting_ability) {
    return classDetails.spellcasting.spellcasting_ability.name;
  }

  return null;
};

// Re-export subclass functions (only from D&D API for now)
export const fetchSubclasses = fetchDndSubclasses;
export const fetchSubclassDetails = fetchDndSubclassDetails;
export const fetchSubclassesForClass = fetchDndSubclassesForClass;

export default {
  fetchAllClasses,
  fetchClassDetails,
  getClassHitDie,
  getClassPrimaryAbilities,
  getClassSavingThrows,
  getClassSkillChoices,
  getClassFeaturesForLevel,
  classHasSpellcasting,
  getSpellcastingAbility,
  fetchSubclasses,
  fetchSubclassDetails,
  fetchSubclassesForClass,
};
