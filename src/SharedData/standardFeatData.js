/**
 * Standard D&D 5e Feats from Open5e API
 * This file now dynamically fetches feats from the Open5e API
 */

import { fetchAndTransformFeats } from "../services/open5eApiService";

// Cache the fetched feats
let cachedFeats = null;
let fetchPromise = null;

/**
 * Get all standard feats from Open5e
 * @returns {Promise<Array>} Array of feat objects
 */
export const getStandardFeats = async () => {
  if (cachedFeats) {
    return cachedFeats;
  }

  // If a fetch is already in progress, return that promise
  if (fetchPromise) {
    return fetchPromise;
  }

  fetchPromise = fetchAndTransformFeats()
    .then(feats => {
      cachedFeats = feats;
      fetchPromise = null;
      return feats;
    })
    .catch(error => {
      console.error("Error fetching feats:", error);
      fetchPromise = null;
      // Return empty array on error
      return [];
    });

  return fetchPromise;
};

/**
 * Synchronous access to feats (returns cached feats or empty array)
 * Use getStandardFeats() for async access with API fetch
 * @returns {Array} Array of cached feat objects or empty array
 */
export const standardFeats = [];

// Immediately start fetching feats when the module loads
getStandardFeats().then(feats => {
  // Update the exported array with fetched feats
  standardFeats.length = 0;
  standardFeats.push(...feats);
}).catch(error => {
  console.error("Failed to load standard feats:", error);
});

// Legacy export structure for backwards compatibility
export default {
  standardFeats,
  getStandardFeats,
};
