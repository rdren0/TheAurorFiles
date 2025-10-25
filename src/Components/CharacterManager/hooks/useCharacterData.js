import { useState, useEffect, useCallback } from "react";
import { DEFAULT_CHARACTER } from "../constants/characterDefaults";
import { characterService } from "../../../services/characterService";
import {
  transformCharacterForSave,
  transformCharacterFromDB,
} from "../components/CharacterForm/utils/characterTransformUtils";
import { getAllAbilityModifiers } from "../utils/characterUtils";

export const useCharacterData = (
  characterId = null,
  userId = null,
  adminMode = false,
  isUserAdmin = false
) => {
  const [character, setCharacter] = useState(DEFAULT_CHARACTER);
  const [originalCharacter, setOriginalCharacter] = useState(DEFAULT_CHARACTER);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const hasChanges =
    JSON.stringify(character) !== JSON.stringify(originalCharacter);

  const loadCharacter = useCallback(async () => {
    if (!characterId) return;

    if (!userId && !(adminMode && isUserAdmin)) {
      console.warn(
        "Cannot load character: userId is undefined and not in admin mode"
      );
      return;
    }

    setLoading(true);
    setError(null);

    try {
      let loadedCharacter;

      if (adminMode && isUserAdmin) {
        loadedCharacter = await characterService.getCharacterByIdAdmin(
          characterId
        );
      } else if (userId) {
        loadedCharacter = await characterService.getCharacterById(
          characterId,
          userId
        );
      } else {
        throw new Error("Cannot load character: missing userId");
      }

      if (loadedCharacter) {
        console.log("📥 loadCharacter - DB response:", JSON.stringify(loadedCharacter, null, 2));

        const transformedCharacter = transformCharacterFromDB(loadedCharacter);
        console.log("📥 loadCharacter - after transform:", JSON.stringify(transformedCharacter, null, 2));

        if (loadedCharacter.base_ability_scores) {
          transformedCharacter.abilityScores =
            loadedCharacter.base_ability_scores;
        }

        const finalCharacter = {
          ...DEFAULT_CHARACTER,
          ...transformedCharacter,
        };

        finalCharacter._originalHitPoints = loadedCharacter.hit_points;

        console.log("📥 loadCharacter - final character state:", JSON.stringify(finalCharacter, null, 2));

        setCharacter(finalCharacter);
        setOriginalCharacter(finalCharacter);
      }
    } catch (err) {
      console.error("Error loading character:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [characterId, userId, adminMode, isUserAdmin]);

  const updateCharacter = useCallback((field, value) => {
    setCharacter((prev) => {
      const updated = { ...prev };

      if (field.includes(".")) {
        const [parent, child] = field.split(".");
        updated[parent] = {
          ...prev[parent],
          [child]: value,
        };
      } else {
        updated[field] = value;
      }

      return updated;
    });
  }, []);

  const updateCharacterBulk = useCallback((updates) => {
    setCharacter((prev) => ({
      ...prev,
      ...updates,
    }));
  }, []);

  const resetCharacter = useCallback(() => {
    const resetChar = { ...originalCharacter };

    if (resetChar._originalHitPoints !== undefined) {
      resetChar.hitPoints = resetChar._originalHitPoints;
    }

    setCharacter(resetChar);
    setError(null);
  }, [originalCharacter]);

  const saveCharacter = useCallback(async () => {
    console.log("=== SAVE CHARACTER START ===");
    console.log("1. Current Form State:", JSON.stringify(character, null, 2));
    console.log("1a. Class field specifically:", character.class);

    let effectiveUserId;

    if (adminMode && isUserAdmin) {
      effectiveUserId =
        originalCharacter.discordUserId || character.discordUserId;

      if (!effectiveUserId) {
        throw new Error("Character's discord_user_id is missing");
      }
    } else {
      effectiveUserId = userId;

      if (!effectiveUserId) {
        throw new Error("User ID required to save character");
      }
    }

    setLoading(true);
    setError(null);

    try {
      const baseScores = character.abilityScores || {
        strength: 8,
        dexterity: 8,
        constitution: 8,
        intelligence: 8,
        wisdom: 8,
        charisma: 8,
      };

      const modifiers = getAllAbilityModifiers(character);

      const finalAbilityScores = {
        strength: baseScores.strength + modifiers.strength,
        dexterity: baseScores.dexterity + modifiers.dexterity,
        constitution: baseScores.constitution + modifiers.constitution,
        intelligence: baseScores.intelligence + modifiers.intelligence,
        wisdom: baseScores.wisdom + modifiers.wisdom,
        charisma: baseScores.charisma + modifiers.charisma,
      };

      const characterWithFinalScores = {
        ...character,
        abilityScores: finalAbilityScores,
        baseAbilityScores: baseScores,
      };

      const characterToSave = transformCharacterForSave(
        characterWithFinalScores
      );

      characterToSave.discord_user_id = effectiveUserId;
      characterToSave.base_ability_scores = baseScores;
      characterToSave.ability_modifiers = modifiers;

      console.log("2. Request Payload (after transform):", JSON.stringify(characterToSave, null, 2));
      console.log("2a. Class field in payload:", characterToSave.class);

      let result;

      if (character.id) {
        console.log("Updating existing character with ID:", character.id);
        if (adminMode && isUserAdmin) {
          result = await characterService.updateCharacterAsAdmin(
            character.id,
            characterToSave
          );
        } else {
          result = await characterService.updateCharacter(
            character.id,
            characterToSave,
            effectiveUserId
          );
        }
      } else {
        console.log("Creating new character");
        result = await characterService.saveCharacter(
          characterToSave,
          effectiveUserId
        );
      }

      console.log("3. Response Payload from DB:", JSON.stringify(result, null, 2));

      if (result) {
        const transformedResult = transformCharacterFromDB(result);
        console.log("4. Response after transformCharacterFromDB:", JSON.stringify(transformedResult, null, 2));

        if (result.base_ability_scores) {
          transformedResult.abilityScores = result.base_ability_scores;
        }

        // Start with defaults, then apply DB response - this ensures clean state
        const savedCharacter = {
          ...DEFAULT_CHARACTER,
          ...transformedResult,
        };

        savedCharacter._originalHitPoints = result.hit_points;

        console.log("5. Final saved character state (should match DB):", JSON.stringify(savedCharacter, null, 2));

        setCharacter(savedCharacter);
        setOriginalCharacter(savedCharacter);

        console.log("=== SAVE CHARACTER SUCCESS ===");
        return result;
      }
    } catch (err) {
      console.error("=== SAVE CHARACTER ERROR ===");
      console.error("Error saving character:", err);
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [character, originalCharacter, userId, adminMode, isUserAdmin]);

  useEffect(() => {
    if (characterId) {
      if (userId || (adminMode && isUserAdmin)) {
        loadCharacter();
      }
    }
  }, [characterId, userId, adminMode, isUserAdmin, loadCharacter]);

  return {
    character,
    loading,
    error,
    hasChanges,
    updateCharacter,
    updateCharacterBulk,
    resetCharacter,
    saveCharacter,
    loadCharacter,
  };
};
