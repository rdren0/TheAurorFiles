/**
 * Service for interacting with the Open5e API
 * Documentation: https://api.open5e.com/docs/
 */

const API_BASE_URL = "https://api.open5e.com/v1";

// Cache for API responses to reduce network calls
const cache = {
  feats: null,
  featDetails: {},
};

/**
 * Fetch all available feats from Open5e
 * @returns {Promise<Array>} Array of feat objects
 */
export const fetchFeats = async () => {
  if (cache.feats) {
    return cache.feats;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/feats/?limit=100`);
    if (!response.ok) {
      throw new Error(`Failed to fetch feats: ${response.statusText}`);
    }
    const data = await response.json();
    cache.feats = data.results;
    return data.results;
  } catch (error) {
    console.error("Error fetching Open5e feats:", error);
    throw error;
  }
};

/**
 * Fetch details for a specific feat
 * @param {string} featSlug - The feat slug (e.g., 'grappler', 'alert')
 * @returns {Promise<Object>} Detailed feat object
 */
export const fetchFeatDetails = async (featSlug) => {
  if (cache.featDetails[featSlug]) {
    return cache.featDetails[featSlug];
  }

  try {
    const response = await fetch(`${API_BASE_URL}/feats/${featSlug}`);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch feat details: ${response.statusText}`
      );
    }
    const data = await response.json();
    cache.featDetails[featSlug] = data;
    return data;
  } catch (error) {
    console.error(`Error fetching details for feat ${featSlug}:`, error);
    throw error;
  }
};

/**
 * Transform Open5e feat data to match the app's feat structure
 * @param {Object} open5eFeat - Feat object from Open5e API
 * @returns {Object} Transformed feat object for the app
 */
export const transformFeatToAppFormat = (open5eFeat) => {
  // Extract ability score increases from effects
  const abilityScoreIncrease = extractAbilityScoreIncrease(open5eFeat.effects_desc);

  // Create a preview from the first effect or description
  const preview = open5eFeat.effects_desc && open5eFeat.effects_desc.length > 0
    ? open5eFeat.effects_desc[0]
    : open5eFeat.desc || "";

  // Combine description and effects into a single description array
  const description = [
    open5eFeat.desc,
    ...(open5eFeat.effects_desc || [])
  ].filter(Boolean);

  return {
    name: open5eFeat.name,
    preview: truncateText(preview, 80),
    description,
    prerequisites: open5eFeat.prerequisite ? parsePrerequisites(open5eFeat.prerequisite) : null,
    benefits: {
      abilityScoreIncrease,
      skillProficiencies: [],
      expertise: [],
      savingThrowProficiencies: [],
      resistances: [],
      immunities: [],
      speeds: {},
      combatBonuses: {},
      spellcasting: {},
      specialAbilities: extractSpecialAbilities(open5eFeat),
    },
    source: {
      document: open5eFeat.document__title || "Open5e",
      slug: open5eFeat.slug,
      url: open5eFeat.document__url,
    },
  };
};

/**
 * Extract ability score increase from effect descriptions
 * @param {Array<string>} effects - Array of effect descriptions
 * @returns {Object|null} Ability score increase object
 */
const extractAbilityScoreIncrease = (effects) => {
  if (!effects || effects.length === 0) return null;

  // Look for patterns like "Your Strength or Dexterity score increases by 1"
  const abilityPattern = /(Strength|Dexterity|Constitution|Intelligence|Wisdom|Charisma).*(increases|increase).*by\s+(\d+)/i;
  const orPattern = /Your\s+(Strength|Dexterity|Constitution|Intelligence|Wisdom|Charisma)\s+or\s+(Strength|Dexterity|Constitution|Intelligence|Wisdom|Charisma)\s+score\s+increases?\s+by\s+(\d+)/i;

  for (const effect of effects) {
    const orMatch = effect.match(orPattern);
    if (orMatch) {
      const ability1 = orMatch[1].toLowerCase();
      const ability2 = orMatch[2].toLowerCase();
      const amount = parseInt(orMatch[3]);
      return {
        type: "choice",
        abilities: [ability1, ability2],
        amount,
      };
    }

    const match = effect.match(abilityPattern);
    if (match) {
      const ability = match[1].toLowerCase();
      const amount = parseInt(match[3]);
      return {
        ability,
        amount,
      };
    }
  }

  return null;
};

/**
 * Parse prerequisites from text
 * @param {string} prerequisiteText - Prerequisite text
 * @returns {Object} Prerequisites object
 */
const parsePrerequisites = (prerequisiteText) => {
  if (!prerequisiteText || prerequisiteText === "null") return null;

  // This is a simple parser - can be enhanced based on actual prerequisite formats
  return {
    text: prerequisiteText,
    // Could add structured parsing here for common patterns
  };
};

/**
 * Extract special abilities from feat
 * @param {Object} feat - Feat object from Open5e
 * @returns {Array} Array of special ability objects
 */
const extractSpecialAbilities = (feat) => {
  if (!feat.effects_desc || feat.effects_desc.length === 0) {
    return [];
  }

  return feat.effects_desc.map((effect, index) => ({
    name: `${feat.name} Effect ${index + 1}`,
    type: "passive",
    description: effect,
  }));
};

/**
 * Truncate text to a maximum length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
const truncateText = (text, maxLength) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + "...";
};

/**
 * Fetch and transform all feats to app format
 * @returns {Promise<Array>} Array of transformed feat objects
 */
export const fetchAndTransformFeats = async () => {
  const feats = await fetchFeats();
  return feats.map(transformFeatToAppFormat);
};

/**
 * Clear the cache (useful for testing or forcing refresh)
 */
export const clearCache = () => {
  cache.feats = null;
  cache.featDetails = {};
};

export default {
  fetchFeats,
  fetchFeatDetails,
  transformFeatToAppFormat,
  fetchAndTransformFeats,
  clearCache,
};
