/**
 * Wizard Spell Selection Utilities
 * Based on D&D 5e Wizard rules, adapted for custom class system
 */

import { customClassesData } from "../../SharedData/customClassesData";
import { getAllowedCategories } from "./spellAccessByProfession";

/**
 * Calculate how many spells a character should know at a given level
 * @param {number} level - Character level (1-20)
 * @param {string} characterClass - Character's class (e.g., "professor", "obscurial")
 * @returns {number} - Total number of spells known
 */
export const calculateWizardSpellsKnown = (level, characterClass = null) => {
  if (!level || level < 1) return 6; // Default to level 1

  // Check character class type to determine progression
  const classData = characterClass ? customClassesData[characterClass] : null;
  const classType = classData?.type;
  const progressionType = classData?.spellcasting?.progression_type;

  // D&D 5e Full Casters: Wizard, Bard, Sorcerer, Cleric, Druid, Warlock
  const fullCasterTypes = ["Wizard", "Bard", "Sorcerer", "Cleric", "Druid", "Warlock"];
  const isFullCaster = fullCasterTypes.includes(classType) || progressionType === "full" || progressionType === "full-caster";

  // Full casters get standard wizard progression
  if (isFullCaster) {
    // Level 1: 6 spells
    // Each level up: +2 spells
    return 6 + ((level - 1) * 2);
  }

  // Everyone else (Half casters, Martial classes, etc.) gets reduced progression
  // This includes: Paladin, Ranger, Artificer, Fighter, Monk, Rogue, Barbarian, etc.
  // Base 6 spells, +1 per level
  return 6 + (level - 1);
};

/**
 * Get the maximum spell level a wizard can cast at their character level
 * @param {number} level - Character level (1-20)
 * @returns {number} - Maximum spell level (0-9)
 */
export const getMaxSpellLevel = (level) => {
  if (!level || level < 1) return 0;
  if (level >= 17) return 9;
  if (level >= 15) return 8;
  if (level >= 13) return 7;
  if (level >= 11) return 6;
  if (level >= 9) return 5;
  if (level >= 7) return 4;
  if (level >= 5) return 3;
  if (level >= 3) return 2;
  return 1;
};

/**
 * Convert spell level string to number
 * @param {string} levelStr - Spell level string (e.g., "1st Level", "Cantrip")
 * @returns {number} - Spell level as number (0 for cantrips)
 */
export const spellLevelToNumber = (levelStr) => {
  if (!levelStr) return 0;
  if (levelStr.toLowerCase().includes("cantrip")) return 0;
  const match = levelStr.match(/(\d+)/);
  return match ? parseInt(match[1]) : 0;
};

/**
 * Check if a spell is available to wizards based on its class array
 * @param {Array<string>} spellClasses - Array of class names the spell belongs to
 * @returns {boolean} - True if spell is available to wizards
 */
export const isWizardSpell = (spellClasses) => {
  if (!Array.isArray(spellClasses)) return false;

  // Check if any of the classes indicate this is a wizard-accessible spell
  const wizardCategories = [
    "Combat Operations",
    "Crime Scene Analysis",
    "Surveillance & Tracking",
    "Interrogation Techniques",
    "Field Medicine",
    "Specialized Arsenal"
    // Note: "Unforgivable Curses" excluded as these require special permission
  ];

  return spellClasses.some(cls => wizardCategories.includes(cls));
};

/**
 * Filter spells that a wizard can learn based on their level and profession
 * @param {Object} spellsData - All available spells
 * @param {number} characterLevel - Character's current level
 * @param {string} characterClass - Character's profession/class (e.g., "auror", "professor")
 * @returns {Array} - Array of spell objects the wizard can learn
 */
export const getAvailableWizardSpells = (spellsData, characterLevel, characterClass = null) => {
  const maxLevel = getMaxSpellLevel(characterLevel);
  const allowedCategories = getAllowedCategories(characterClass);
  const availableSpells = [];

  Object.entries(spellsData).forEach(([categoryName, category]) => {
    // Skip Unforgivable Curses (requires special permission)
    if (categoryName === "Unforgivable Curses") return;

    // Check if this profession has access to this category
    if (!allowedCategories.includes(categoryName)) return;

    Object.entries(category.levels || {}).forEach(([levelName, spells]) => {
      const spellLevel = spellLevelToNumber(levelName);

      // Only include spells up to the max spell level the wizard can cast
      if (spellLevel <= maxLevel) {
        spells.forEach(spell => {
          availableSpells.push({
            ...spell,
            category: categoryName,
            spellLevel: spellLevel,
            levelName: levelName
          });
        });
      }
    });
  });

  return availableSpells.sort((a, b) => {
    // Sort by spell level first, then alphabetically by name
    if (a.spellLevel !== b.spellLevel) {
      return a.spellLevel - b.spellLevel;
    }
    return a.name.localeCompare(b.name);
  });
};
