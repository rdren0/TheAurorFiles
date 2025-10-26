/**
 * Utility functions for handling NPC images stored in Supabase Storage
 */

/**
 * Generate Supabase storage URL for an NPC image
 * @param {string} npcName - The name of the NPC (used as filename)
 * @param {string} extension - Image file extension (default: 'png')
 * @returns {string} The full Supabase storage URL
 */
export const getNPCImageUrl = (npcName, extension = 'png') => {
  if (!npcName) return null;

  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
  if (!supabaseUrl) {
    console.error('REACT_APP_SUPABASE_URL is not defined');
    return null;
  }

  // Sanitize the NPC name for use as a filename
  // Replace spaces with underscores, remove special characters except hyphens and underscores
  const sanitizedName = npcName
    .trim()
    .replace(/\s+/g, '_') // Replace spaces with underscores
    .replace(/[^a-zA-Z0-9_-]/g, ''); // Remove special characters except - and _

  const bucketName = 'NPCs';
  const fileName = `${sanitizedName}.${extension}`;

  return `${supabaseUrl}/storage/v1/object/public/${bucketName}/${fileName}`;
};

/**
 * Get the expected filename for an NPC image
 * This is useful for knowing what to name files when uploading
 * @param {string} npcName - The name of the NPC
 * @param {string} extension - Image file extension (default: 'png')
 * @returns {string} The sanitized filename
 */
export const getNPCImageFilename = (npcName, extension = 'png') => {
  if (!npcName) return null;

  const sanitizedName = npcName
    .trim()
    .replace(/\s+/g, '_')
    .replace(/[^a-zA-Z0-9_-]/g, '');

  return `${sanitizedName}.${extension}`;
};

/**
 * Batch generate URLs for multiple NPCs
 * @param {Array<{name: string}>} npcs - Array of NPC objects with names
 * @param {string} extension - Image file extension (default: 'png')
 * @returns {Object} Object mapping NPC names to their image URLs
 */
export const batchGenerateNPCImageUrls = (npcs, extension = 'png') => {
  const urlMap = {};

  npcs.forEach(npc => {
    if (npc.name) {
      urlMap[npc.name] = getNPCImageUrl(npc.name, extension);
    }
  });

  return urlMap;
};

/**
 * Generate a list of expected filenames for all NPCs
 * Useful for bulk upload preparation
 * @param {Array<{name: string}>} npcs - Array of NPC objects with names
 * @param {string} extension - Image file extension (default: 'png')
 * @returns {Array<{npcName: string, filename: string}>}
 */
export const generateNPCFilenameList = (npcs, extension = 'png') => {
  return npcs.map(npc => ({
    npcName: npc.name,
    filename: getNPCImageFilename(npc.name, extension),
  }));
};
