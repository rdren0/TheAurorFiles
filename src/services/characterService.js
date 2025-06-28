import { createClient } from "@supabase/supabase-js";
import { getStartingEquipment, addStartingEquipment } from "./inventoryService";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);

const getCharacters = async (discordUserId) => {
  const { data, error } = await supabase
    .from("characters")
    .select("*")
    .eq("discord_user_id", discordUserId)
    .eq("active", true)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`Failed to fetch characters: ${error.message}`);
  }

  return data || [];
};

const getAllCharacters = async () => {
  try {
    try {
      const { data, error } = await supabase
        .from("characters")
        .select(`*,discord_users (username,display_name)`)
        .eq("active", true)
        .order("created_at", { ascending: false });

      if (!error) {
        return data || [];
      } else {
        console.warn("❌ Relationship-based query failed:", error.message);
        throw error;
      }
    } catch (relationshipError) {
      console.warn("🔄 Relationship query failed, trying manual join...");

      const { data: characters, error: charactersError } = await supabase
        .from("characters")
        .select("*")
        .eq("active", true)
        .order("created_at", { ascending: false });

      if (charactersError) {
        throw new Error(
          `Failed to fetch characters: ${charactersError.message}`
        );
      }

      if (!characters || characters.length === 0) {
        return [];
      }

      const discordUserIds = [
        ...new Set(
          characters.map((char) => char.discord_user_id).filter(Boolean)
        ),
      ];

      if (discordUserIds.length === 0) {
        return characters.map((char) => ({ ...char, discord_users: null }));
      }

      const { data: discordUsers, error: usersError } = await supabase
        .from("discord_users")
        .select("discord_user_id, username, display_name")
        .in("discord_user_id", discordUserIds);

      if (usersError) {
        console.warn(
          "⚠️ Failed to load discord users, continuing without user info:",
          usersError.message
        );
        return characters.map((char) => ({ ...char, discord_users: null }));
      }

      const userMap = {};
      if (discordUsers) {
        discordUsers.forEach((user) => {
          userMap[user.discord_user_id] = user;
        });
      }

      const charactersWithUsers = characters.map((character) => ({
        ...character,
        discord_users: userMap[character.discord_user_id] || null,
      }));

      return charactersWithUsers;
    }
  } catch (error) {
    console.error("💥 Error in getAllCharacters:", error);

    try {
      const { data, error: simpleError } = await supabase
        .from("characters")
        .select("*")
        .eq("active", true)
        .order("created_at", { ascending: false });

      if (simpleError) {
        throw simpleError;
      }

      return (data || []).map((character) => ({
        ...character,
        discord_users: null,
      }));
    } catch (lastResortError) {
      console.error(
        "💥 Even simple character loading failed:",
        lastResortError
      );
      throw new Error(`Failed to fetch all characters: ${error.message}`);
    }
  }
};

const isUserForbidden = async (discordUserId) => {
  const { data, error } = await supabase
    .from("user_roles")
    .select("role")
    .eq("discord_user_id", discordUserId)
    .eq("role", "forbidden")
    .single();

  if (error && error.code !== "PGRST116") {
    console.error("Error checking forbidden status:", error);
    return false;
  }

  return !!data;
};

const isUserAdmin = async (discordUserId) => {
  try {
    const forbidden = await isUserForbidden(discordUserId);
    if (forbidden) {
      return false;
    }
  } catch (forbiddenError) {
    console.error("❌ Error checking forbidden status:", forbiddenError);
  }

  try {
    const { data, error } = await supabase
      .from("user_roles")
      .select("role, granted_by, granted_at")
      .eq("discord_user_id", discordUserId)
      .eq("role", "admin");

    if (error && error.code !== "PGRST116") {
      console.error("❌ Error checking admin status:", error);
      return false;
    }

    const isAdmin = !!(data && data.length > 0);
    return isAdmin;
  } catch (adminError) {
    console.error("❌ Error in admin check:", adminError);
    return false;
  }
};

const verifyAdminPassword = async (discordUserId, password) => {
  try {
    const forbidden = await isUserForbidden(discordUserId);

    if (forbidden) {
      throw new Error(
        "The ancient magic recognizes you as forbidden. Access permanently denied."
      );
    }

    const ADMIN_PASSWORD = process.env.REACT_APP_ADMIN_PASSWORD;

    if (!ADMIN_PASSWORD) {
      console.log("❌ No admin password configured");
      throw new Error("The magical registry is not properly configured");
    }

    if (password !== ADMIN_PASSWORD) {
      console.log("❌ Password doesn't match");
      throw new Error("The unlocking charm failed");
    }

    const insertData = {
      discord_user_id: discordUserId,
      role: "admin",
      granted_by: "website",
      granted_at: new Date().toISOString(),
    };
    console.log("Insert data object:", insertData);

    const { error } = await supabase
      .from("user_roles")
      .insert(insertData)
      .select();

    if (error && error.code !== "23505") {
      console.error("❌ Database error (not a duplicate key):", error);
      console.error("This is the actual error causing the failure!");
      throw new Error(`Database error: ${error.message}`);
    }

    if (error && error.code === "23505") {
      console.log(
        "ℹ️ Duplicate key error - user already has admin role (this is fine)"
      );
    }

    return true;
  } catch (error) {
    throw error;
  }
};

const getUserRoleStatus = async (discordUserId) => {
  const { data, error } = await supabase
    .from("user_role_status")
    .select("*")
    .eq("discord_user_id", discordUserId)
    .single();

  if (error && error.code !== "PGRST116") {
    console.error("Error checking user role status:", error);
    return { effective_role: "user", roles: ["user"] };
  }

  return data || { effective_role: "user", roles: ["user"] };
};

const setUserRole = async (targetDiscordUserId, role, grantedBy) => {
  const validRoles = ["admin", "moderator", "user", "forbidden"];
  if (!validRoles.includes(role)) {
    throw new Error("Invalid role specified");
  }

  try {
    const { error } = await supabase.from("user_roles").insert({
      discord_user_id: targetDiscordUserId,
      role: role,
      granted_by: grantedBy,
      granted_at: new Date().toISOString(),
    });

    if (error && error.code !== "23505") {
      throw new Error(`Failed to grant ${role} role: ${error.message}`);
    }

    return true;
  } catch (error) {
    console.error("Error setting user role:", error);
    throw error;
  }
};

const removeUserRole = async (targetDiscordUserId, role) => {
  const { error } = await supabase
    .from("user_roles")
    .delete()
    .eq("discord_user_id", targetDiscordUserId)
    .eq("role", role);

  if (error) {
    throw new Error(`Failed to remove ${role} role: ${error.message}`);
  }

  return true;
};

const saveCharacter = async (characterData, discordUserId) => {
  try {
    const { data: savedCharacter, error: characterError } = await supabase
      .from("characters")
      .insert({
        ability_scores: characterData.ability_scores,
        asi_choices: characterData.asi_choices,
        background: characterData.background,
        casting_style: characterData.casting_style,
        current_hit_dice: characterData.level,
        current_hit_points: characterData.hit_points,
        discord_user_id: discordUserId,
        game_session: characterData.game_session,
        heritage_choices: characterData.heritage_choices || {},
        hit_points: characterData.hit_points,
        house: characterData.house,
        house_choices: characterData.house_choices,
        initiative_ability: characterData.initiative_ability,
        innate_heritage: characterData.innate_heritage,
        innate_heritage_skills: characterData.innate_heritage_skills,
        level: characterData.level,
        level1_choice_type: characterData.level1_choice_type,
        magic_modifiers: characterData.magic_modifiers,
        name: characterData.name,
        skill_proficiencies: characterData.skill_proficiencies,
        skill_expertise: characterData.skill_expertise,
        standard_feats: characterData.standard_feats,
        subclass: characterData.subclass,
        subclass_choices: characterData.subclass_choices,
        wand_type: characterData.wand_type,
      })
      .select()
      .single();

    if (characterError) {
      throw characterError;
    }

    if (characterData.background && savedCharacter.id) {
      try {
        const startingEquipment = getStartingEquipment(
          characterData.background
        );

        if (startingEquipment.length > 0) {
          await addStartingEquipment(
            discordUserId,
            savedCharacter.id,
            startingEquipment,
            supabase
          );
        }
      } catch (equipmentError) {
        console.error("Failed to add starting equipment:", equipmentError);
      }
    }

    return savedCharacter;
  } catch (error) {
    console.error("Error in saveCharacter:", error);
    throw error;
  }
};

const updateCharacter = async (characterId, characterData, discordUserId) => {
  try {
    const { data: currentCharacter } = await supabase
      .from("characters")
      .select("background")
      .eq("id", characterId)
      .eq("discord_user_id", discordUserId)
      .single();

    const { data: updatedCharacter, error: updateError } = await supabase
      .from("characters")
      .update({
        ability_scores: characterData.ability_scores,
        asi_choices: characterData.asi_choices,
        background: characterData.background,
        casting_style: characterData.casting_style,
        game_session: characterData.game_session,
        heritage_choices: characterData.heritage_choices || {},
        hit_points: characterData.hit_points,
        house: characterData.house,
        house_choices: characterData.house_choices,
        initiative_ability: characterData.initiative_ability,
        innate_heritage: characterData.innate_heritage,
        innate_heritage_skills: characterData.innate_heritage_skills,
        level: characterData.level,
        level1_choice_type: characterData.level1_choice_type,
        magic_modifiers: characterData.magic_modifiers,
        name: characterData.name,
        skill_proficiencies: characterData.skill_proficiencies,
        skill_expertise: characterData.skill_expertise,
        standard_feats: characterData.standard_feats,
        subclass: characterData.subclass,
        subclass_choices: characterData.subclass_choices,
        updated_at: new Date().toISOString(),
        wand_type: characterData.wand_type,
      })
      .eq("id", characterId)
      .eq("discord_user_id", discordUserId)
      .select()
      .single();

    if (updateError) {
      throw updateError;
    }

    const backgroundChanged =
      currentCharacter?.background !== characterData.background;

    if (backgroundChanged && characterData.background) {
      try {
        const startingEquipment = getStartingEquipment(
          characterData.background
        );

        if (startingEquipment.length > 0) {
          await addStartingEquipment(
            discordUserId,
            characterId,
            startingEquipment,
            supabase
          );
        }
      } catch (equipmentError) {
        console.error(
          "Failed to add starting equipment on background change:",
          equipmentError
        );
      }
    }

    return updatedCharacter;
  } catch (error) {
    console.error("Error in updateCharacter:", error);
    throw error;
  }
};

const updateCharacterSubclass = async (
  characterId,
  subclass,
  subclassChoices,
  discordUserId
) => {
  if (subclassChoices && typeof subclassChoices !== "object") {
    throw new Error("Invalid subclass choices format - must be an object");
  }

  const { data, error } = await supabase
    .from("characters")
    .update({
      subclass: subclass,
      subclass_choices: subclassChoices || {},
      updated_at: new Date().toISOString(),
    })
    .eq("id", characterId)
    .eq("discord_user_id", discordUserId)
    .eq("active", true)
    .select();

  if (error) {
    throw new Error(`Failed to update character subclass: ${error.message}`);
  }

  return data[0];
};

const getCharacterById = async (characterId, discordUserId) => {
  const { data, error } = await supabase
    .from("characters")
    .select("*")
    .eq("id", characterId)
    .eq("discord_user_id", discordUserId)
    .eq("active", true)
    .single();

  if (error) {
    if (error.code === "PGRST116") {
      throw new Error("Character not found");
    }
    throw new Error(`Failed to fetch character: ${error.message}`);
  }

  return data;
};

const getCharacterByIdAdmin = async (characterId) => {
  const { data, error } = await supabase
    .from("characters")
    .select(
      `
      *,
      discord_users (
        username,
        display_name
      )
    `
    )
    .eq("id", characterId)
    .eq("active", true)
    .single();

  if (error) {
    if (error.code === "PGRST116") {
      throw new Error("Character not found");
    }
    throw new Error(`Failed to fetch character: ${error.message}`);
  }

  return data;
};

const deleteCharacter = async (characterId, discordUserId) => {
  const { data, error } = await supabase
    .from("characters")
    .update({
      active: false,
      archived_at: new Date().toISOString(),
    })
    .eq("id", characterId)
    .eq("discord_user_id", discordUserId)
    .eq("active", true)
    .select();

  if (error) {
    throw new Error(`Failed to archive character: ${error.message}`);
  }

  return data[0];
};

const restoreCharacter = async (characterId, discordUserId) => {
  const { data, error } = await supabase
    .from("characters")
    .update({
      active: true,
      archived_at: null,
      restored_at: new Date().toISOString(),
    })
    .eq("id", characterId)
    .eq("discord_user_id", discordUserId)
    .eq("active", false)
    .select();

  if (error) {
    throw new Error(`Failed to restore character: ${error.message}`);
  }

  return data[0];
};

const getArchivedCharacters = async (discordUserId = null) => {
  let query = supabase
    .from("characters")
    .select("*")
    .eq("active", false)
    .order("archived_at", { ascending: false });

  if (discordUserId) {
    query = query.eq("discord_user_id", discordUserId);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(`Failed to fetch archived characters: ${error.message}`);
  }

  return data || [];
};

export const characterService = {
  getCharacters,
  getAllCharacters,
  isUserAdmin,
  isUserForbidden,
  verifyAdminPassword,
  getUserRoleStatus,
  setUserRole,
  removeUserRole,
  getCharacterById,
  getCharacterByIdAdmin,
  saveCharacter,
  updateCharacter,
  updateCharacterSubclass,
  deleteCharacter,
  restoreCharacter,
  getArchivedCharacters,
};
