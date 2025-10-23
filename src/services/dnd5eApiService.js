/**
 * Service for interacting with the D&D 5e API
 * Documentation: https://www.dnd5eapi.co/docs/
 */

const API_BASE_URL = "https://www.dnd5eapi.co/api";

// Cache for API responses to reduce network calls
const cache = {
  classes: null,
  subclasses: null,
  classDetails: {},
  subclassDetails: {},
};

/**
 * Fetch all available classes
 * @returns {Promise<Array>} Array of class objects with index, name, and url
 */
export const fetchClasses = async () => {
  if (cache.classes) {
    return cache.classes;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/classes`);
    if (!response.ok) {
      throw new Error(`Failed to fetch classes: ${response.statusText}`);
    }
    const data = await response.json();
    cache.classes = data.results;
    return data.results;
  } catch (error) {
    console.error("Error fetching D&D classes:", error);
    throw error;
  }
};

/**
 * Fetch details for a specific class
 * @param {string} classIndex - The class index (e.g., 'wizard', 'fighter')
 * @returns {Promise<Object>} Detailed class object
 */
export const fetchClassDetails = async (classIndex) => {
  if (cache.classDetails[classIndex]) {
    return cache.classDetails[classIndex];
  }

  try {
    const response = await fetch(`${API_BASE_URL}/classes/${classIndex}`);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch class details: ${response.statusText}`
      );
    }
    const data = await response.json();
    cache.classDetails[classIndex] = data;
    return data;
  } catch (error) {
    console.error(`Error fetching details for class ${classIndex}:`, error);
    throw error;
  }
};

/**
 * Fetch all available subclasses
 * @returns {Promise<Array>} Array of subclass objects with index, name, and url
 */
export const fetchSubclasses = async () => {
  if (cache.subclasses) {
    return cache.subclasses;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/subclasses`);
    if (!response.ok) {
      throw new Error(`Failed to fetch subclasses: ${response.statusText}`);
    }
    const data = await response.json();
    cache.subclasses = data.results;
    return data.results;
  } catch (error) {
    console.error("Error fetching D&D subclasses:", error);
    throw error;
  }
};

/**
 * Fetch details for a specific subclass
 * @param {string} subclassIndex - The subclass index (e.g., 'evocation', 'champion')
 * @returns {Promise<Object>} Detailed subclass object
 */
export const fetchSubclassDetails = async (subclassIndex) => {
  if (cache.subclassDetails[subclassIndex]) {
    return cache.subclassDetails[subclassIndex];
  }

  try {
    const response = await fetch(`${API_BASE_URL}/subclasses/${subclassIndex}`);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch subclass details: ${response.statusText}`
      );
    }
    const data = await response.json();
    cache.subclassDetails[subclassIndex] = data;
    return data;
  } catch (error) {
    console.error(
      `Error fetching details for subclass ${subclassIndex}:`,
      error
    );
    throw error;
  }
};

/**
 * Fetch subclasses for a specific class
 * @param {string} classIndex - The class index
 * @returns {Promise<Array>} Array of subclass objects for that class
 */
export const fetchSubclassesForClass = async (classIndex) => {
  try {
    const classDetails = await fetchClassDetails(classIndex);
    return classDetails.subclasses || [];
  } catch (error) {
    console.error(
      `Error fetching subclasses for class ${classIndex}:`,
      error
    );
    throw error;
  }
};

/**
 * Fetch class levels (features per level)
 * @param {string} classIndex - The class index
 * @param {number} level - Specific level (optional)
 * @returns {Promise<Object|Array>} Level details or array of all levels
 */
export const fetchClassLevels = async (classIndex, level = null) => {
  try {
    const url = level
      ? `${API_BASE_URL}/classes/${classIndex}/levels/${level}`
      : `${API_BASE_URL}/classes/${classIndex}/levels`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch class levels: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching levels for class ${classIndex}:`, error);
    throw error;
  }
};

/**
 * Fetch subclass levels (features per level)
 * @param {string} subclassIndex - The subclass index
 * @param {number} level - Specific level (optional)
 * @returns {Promise<Object|Array>} Level details or array of all levels
 */
export const fetchSubclassLevels = async (subclassIndex, level = null) => {
  try {
    const url = level
      ? `${API_BASE_URL}/subclasses/${subclassIndex}/levels/${level}`
      : `${API_BASE_URL}/subclasses/${subclassIndex}/levels`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch subclass levels: ${response.statusText}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error(
      `Error fetching levels for subclass ${subclassIndex}:`,
      error
    );
    throw error;
  }
};

/**
 * Clear the cache (useful for testing or forcing refresh)
 */
export const clearCache = () => {
  cache.classes = null;
  cache.subclasses = null;
  cache.classDetails = {};
  cache.subclassDetails = {};
};

export default {
  fetchClasses,
  fetchClassDetails,
  fetchSubclasses,
  fetchSubclassDetails,
  fetchSubclassesForClass,
  fetchClassLevels,
  fetchSubclassLevels,
  clearCache,
};
