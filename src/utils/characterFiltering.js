/**
 * Character filtering utilities
 *
 * Simplified for single-campaign use.
 * NPC visibility is now managed through the character_npc_visibility table.
 */

// Returns all characters - no filtering needed (visibility managed by database)
export const filterNPCGalleryCharacters = (characters) => {
  return characters;
};

// No special NPC badges needed in single campaign
export const shouldShowNPCBadge = () => {
  return false;
};

// No filtering needed in single campaign
export const shouldFilterFromOtherPlayers = () => {
  return false;
};