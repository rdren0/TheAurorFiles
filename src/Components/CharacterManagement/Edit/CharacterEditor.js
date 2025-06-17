import { useState, useEffect, useCallback, useMemo } from "react";
import { DiceRoller } from "@dice-roller/rpg-dice-roller";
import {
  Save,
  X,
  AlertTriangle,
  RefreshCw,
  ArrowLeft,
  Settings,
  Lock,
  Unlock,
  Star,
} from "lucide-react";
import { castingStyles, skillsByCastingStyle, hpData } from "../../data";
import { standardFeats as importedStandardFeats } from "../../standardFeatData";
import { checkFeatPrerequisites } from "../../CharacterSheet/utils";
import { useTheme } from "../../../contexts/ThemeContext";
import { characterService } from "../../../services/characterService";
import { InnateHeritage } from "../Shared/InnateHeritage";
import EnhancedFeatureSelector from "../Shared/EnhancedFeatureSelector";
import { AbilityScorePicker } from "../Shared/AbilityScorePicker";
import { createCharacterCreationStyles } from "../../../styles/masterStyles";
import EnhancedSubclassSelector from "../Shared/EnhancedSubclassSelector";
import EnhancedBackgroundSelector from "../Shared/EnhancedBackgroundSelector";
import EnhancedSkillsSection from "../Shared/EnhancedSkillsSection";
import StepIndicator from "../Shared/StepIndicator";
import {
  AbilityScoreIncrements,
  ASIFeatSelector,
  FeatRequirementsInfo,
  getAllSelectedFeats,
} from "../Create/ASIComponents";
import EnhancedHouseSelector from "../Create/EnhancedHouseSelector";
import { backgroundsData } from "../Shared/backgroundsData";

const standardFeats = importedStandardFeats || [];

if (!importedStandardFeats) {
  console.warn(
    "Warning: standardFeats is undefined from data import. Using empty array as fallback."
  );
}

const migrateBackgroundSkills = (character) => {
  if (character.backgroundSkills && character.backgroundSkills.length > 0) {
    return character;
  }

  if (character.background && character.background !== "") {
    const background = backgroundsData[character.background];
    if (background && background.skillProficiencies) {
      return {
        ...character,
        backgroundSkills: background.skillProficiencies,
      };
    }
  }

  return {
    ...character,
    backgroundSkills: [],
  };
};

const CharacterEditor = ({
  character: originalCharacter,
  onSave,
  onCancel,
  user,
}) => {
  const { theme } = useTheme();
  const styles = createCharacterCreationStyles(theme);

  const safeOriginalCharacter = useMemo(() => {
    const baseCharacter = originalCharacter || {
      id: null,
      name: "",
      level: 1,
      castingStyle: "",
      house: "",
      houseChoices: {},
      standardFeats: [],
      asiChoices: {},
      abilityScores: {
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10,
      },
      skillProficiencies: [],
      backgroundSkills: [],
      innateHeritage: "",
      level1ChoiceType: "",
      hitPoints: 1,
      initiativeAbility: "dexterity",
      subclass: "",
      background: "",
      gameSession: "",
      wandType: "",
      magicModifiers: {
        divinations: 0,
        charms: 0,
        transfiguration: 0,
        healing: 0,
        jinxesHexesCurses: 0,
      },
    };

    return migrateBackgroundSkills(baseCharacter);
  }, [originalCharacter]);

  const [asiLevelFilters, setASILevelFilters] = useState({});

  const setASILevelFilter = (level, filter) => {
    setASILevelFilters((prev) => ({
      ...prev,
      [level]: filter,
    }));
  };

  const ASI_LEVELS = [4, 8, 12, 16, 19];

  const getAvailableASILevels = (currentLevel) => {
    return ASI_LEVELS.filter((level) => level <= currentLevel);
  };

  const inferLevel1ChoiceType = (character) => {
    if (character.level1ChoiceType) {
      return character.level1ChoiceType;
    }
    if (character.innateHeritage && character.innateHeritage.trim() !== "") {
      return "innate";
    }
    if (character.standardFeats && character.standardFeats.length > 0) {
      const asiChoices = character.asiChoices || {};
      const asiFeats = Object.values(asiChoices)
        .filter((choice) => choice.type === "feat" && choice.selectedFeat)
        .map((choice) => choice.selectedFeat);
      if (character.standardFeats.length > asiFeats.length) {
        return "feat";
      }
    }
    return "";
  };

  const separateFeats = (character) => {
    if (!character) {
      return { level1Feats: [], asiFeats: [] };
    }

    const allFeats = character.standardFeats || [];
    const asiChoices = character.asiChoices || {};
    const asiFeats = Object.values(asiChoices)
      .filter((choice) => choice.type === "feat" && choice.selectedFeat)
      .map((choice) => choice.selectedFeat);
    const level1Feats = allFeats.filter((feat) => !asiFeats.includes(feat));
    return {
      level1Feats,
      asiFeats,
    };
  };

  const [character, setCharacter] = useState(() => {
    const { level1Feats } = separateFeats(safeOriginalCharacter);
    const characterWithLevel1Choice = {
      ...safeOriginalCharacter,
      level1ChoiceType: inferLevel1ChoiceType(safeOriginalCharacter),
      standardFeats:
        safeOriginalCharacter.level1ChoiceType === "feat" ? level1Feats : [],
    };
    return characterWithLevel1Choice;
  });

  const [expandedFeats, setExpandedFeats] = useState(new Set());
  const [featFilter, setFeatFilter] = useState("");
  const [tempInputValues, setTempInputValues] = useState({});
  const [isManualMode, setIsManualMode] = useState(true);
  const [isHpManualMode, setIsHpManualMode] = useState(true);
  const [rolledHp, setRolledHp] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState(null);
  const [magicModifierTempValues, setMagicModifierTempValues] = useState({});
  const [rolledStats, setRolledStats] = useState([]);
  const [availableStats, setAvailableStats] = useState([]);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [selectedHouse, setSelectedHouse] = useState(
    safeOriginalCharacter.house || ""
  );
  const [houseChoices, setHouseChoices] = useState(
    safeOriginalCharacter.houseChoices || {}
  );

  useEffect(() => {
    if (character) {
      setSelectedHouse(character.house || "");
      setHouseChoices(character.houseChoices || {});
    }
    // eslint-disable-next-line
  }, [character.house, character.houseChoices]);

  useEffect(() => {
    if (
      character.background &&
      (!character.backgroundSkills || character.backgroundSkills.length === 0)
    ) {
      const background = backgroundsData[character.background];
      if (background && background.skillProficiencies) {
        console.log(
          "Migrating background skills for existing character:",
          background.skillProficiencies
        );
        setCharacter((prev) => ({
          ...prev,
          backgroundSkills: background.skillProficiencies,
        }));
      }
    }
    // eslint-disable-next-line
  }, [character.background]);

  const [lockedFields, setLockedFields] = useState({
    level1ChoiceType: true,
    abilityScores: true,
  });

  const discordUserId = user?.user_metadata?.provider_id;

  const validateFeatSelections = useCallback(() => {
    const allSelectedFeats = getAllSelectedFeats(character);
    const uniqueFeats = [...new Set(allSelectedFeats)];

    if (allSelectedFeats.length !== uniqueFeats.length) {
      const duplicates = allSelectedFeats.filter(
        (feat, index) => allSelectedFeats.indexOf(feat) !== index
      );
      setError(
        `Duplicate feats detected: ${duplicates.join(
          ", "
        )}. Each feat can only be selected once.`
      );
      return false;
    }

    const safeStandardFeats = standardFeats || [];
    const invalidFeats = allSelectedFeats.filter((featName) => {
      const feat = safeStandardFeats.find((f) => f.name === featName);
      return feat && !checkFeatPrerequisites(feat, character);
    });

    if (invalidFeats.length > 0) {
      console.warn(
        "Some selected feats no longer meet prerequisites:",
        invalidFeats
      );
      setError(
        `Warning: Some selected feats no longer meet prerequisites: ${invalidFeats.join(
          ", "
        )}`
      );
      return false;
    }

    return true;
  }, [character]);

  const handleASIChoiceChange = (level, choiceType) => {
    setCharacter((prev) => ({
      ...prev,
      asiChoices: {
        ...prev.asiChoices,
        [level]: {
          ...prev.asiChoices[level],
          type: choiceType,
          ...(choiceType === "asi"
            ? {
                abilityScoreIncreases: [],
                selectedFeat: null,
              }
            : {
                abilityScoreIncreases: null,
                selectedFeat: null,
              }),
        },
      },
    }));
  };

  const handleASIFeatChange = (level, featName) => {
    setCharacter((prev) => ({
      ...prev,
      asiChoices: {
        ...prev.asiChoices,
        [level]: {
          ...prev.asiChoices[level],
          type: "feat",
          selectedFeat: featName,
        },
      },
    }));
  };

  const handleASIAbilityChange = (level, abilityUpdates) => {
    setCharacter((prev) => ({
      ...prev,
      asiChoices: {
        ...prev.asiChoices,
        [level]: {
          ...prev.asiChoices[level],
          type: "asi",
          abilityScoreIncreases: abilityUpdates,
        },
      },
    }));
  };

  useEffect(() => {
    const hasAllScores = Object.values(character.abilityScores || {}).every(
      (score) => score !== null && score !== undefined
    );
    if (hasAllScores) {
      setIsManualMode(true);
      setRolledStats([]);
      setAvailableStats([]);
    }
    setLockedFields({
      level1ChoiceType:
        character.level > 1 ||
        Boolean(character.innateHeritage || character.standardFeats?.length),
      abilityScores: hasAllScores,
    });
  }, [character]);

  useEffect(() => {
    const hasChanges =
      JSON.stringify(character) !== JSON.stringify(safeOriginalCharacter);
    setHasUnsavedChanges(hasChanges);
  }, [character, safeOriginalCharacter]);

  useEffect(() => {
    if (character) {
      validateFeatSelections();
    }
    // eslint-disable-next-line
  }, [
    character.level,
    character.castingStyle,
    character.innateHeritage,
    character.subclass,
    character.standardFeats,
    character.asiChoices,
    validateFeatSelections,
  ]);

  const gameSessionOptions = [
    "Sunday - Knights",
    "Monday - Haunting",
    "Tuesday - Knights",
    "Wednesday - Haunting",
    "Thursday - Knights",
    "Friday - Knights",
    "Saturday - Haunting",
    "Saturday - Knights",
    "DEVELOPMENT",
  ];

  const handleHouseSelect = (house) => {
    setSelectedHouse(house);
    handleInputChange("house", house);
  };

  const handleHouseChoiceSelect = (house, featureName, optionName) => {
    setHouseChoices((prev) => ({
      ...prev,
      [house]: { ...prev[house], [featureName]: optionName },
    }));
    setCharacter((prev) => ({
      ...prev,
      houseChoices: {
        ...prev.houseChoices,
        [house]: { ...prev.houseChoices[house], [featureName]: optionName },
      },
    }));
  };

  const rollHp = () => {
    if (!character.castingStyle) return;
    const roller = new DiceRoller();
    const castingData = hpData[character.castingStyle];
    if (!castingData) return;
    const conScore = character.abilityScores.constitution;
    const conMod = conScore !== null ? Math.floor((conScore - 10) / 2) : 0;
    const level = character.level || 1;
    const hitDie = castingData.hitDie || 6;
    const baseRoll = roller.roll(`1d${hitDie}`);
    const baseHP = baseRoll.total + conMod;
    let additionalHP = 0;
    if (level > 1) {
      const additionalRolls = roller.roll(`${level - 1}d${hitDie}`);
      additionalHP = additionalRolls.total + conMod * (level - 1);
    }
    const totalHP = baseHP + additionalHP;
    setRolledHp(Math.max(1, totalHP));
  };

  const assignStat = (ability, statValue) => {
    if (lockedFields.abilityScores) return;
    const oldValue = character.abilityScores[ability];
    const statIndex = availableStats.indexOf(statValue);
    if (statIndex > -1) {
      const updatedAvailable = [...availableStats];
      updatedAvailable.splice(statIndex, 1);
      setAvailableStats(updatedAvailable);
    }
    if (oldValue !== null) {
      setAvailableStats((prev) => [...prev, oldValue]);
    }
    setCharacter((prev) => ({
      ...prev,
      abilityScores: {
        ...prev.abilityScores,
        [ability]: statValue,
      },
    }));
  };

  const clearStat = (ability) => {
    if (lockedFields.abilityScores) return;
    const oldValue = character.abilityScores[ability];
    if (oldValue !== null) {
      if (!isManualMode) {
        setAvailableStats((prev) => [...prev, oldValue]);
      }
      setCharacter((prev) => ({
        ...prev,
        abilityScores: {
          ...prev.abilityScores,
          [ability]: null,
        },
      }));
    }
  };

  const allStatsAssigned = () => {
    return Object.values(character.abilityScores || {}).every(
      (score) => score !== null && score !== undefined
    );
  };

  const getAvailableSkills = () => {
    if (!character.castingStyle) return [];
    return skillsByCastingStyle[character.castingStyle] || [];
  };

  const handleInputChange = (field, value) => {
    if (field.includes(".")) {
      const [parent, child] = field.split(".");
      setCharacter((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      if (field === "castingStyle") {
        setCharacter((prev) => ({
          ...prev,
          [field]: value,
          skillProficiencies: [],
        }));
        setRolledHp(null);
      } else if (field === "level") {
        const newLevel = parseInt(value) || 1;
        setCharacter((prev) => ({
          ...prev,
          [field]: newLevel,
        }));
        setRolledHp(null);
      } else if (field === "background") {
        const background = backgroundsData[value];
        const newBackgroundSkills =
          background && background.skillProficiencies
            ? background.skillProficiencies
            : [];

        setCharacter((prev) => {
          const currentSkills = prev.skillProficiencies || [];
          const oldBackgroundSkills = prev.backgroundSkills || [];

          const skillsWithoutOldBackground = currentSkills.filter(
            (skill) => !oldBackgroundSkills.includes(skill)
          );

          const updatedSkills = [
            ...skillsWithoutOldBackground,
            ...newBackgroundSkills,
          ];

          console.log("Background changed to:", value);
          console.log("New background skills:", newBackgroundSkills);
          console.log("Updated skill proficiencies:", updatedSkills);

          return {
            ...prev,
            [field]: value,
            backgroundSkills: newBackgroundSkills,
            skillProficiencies: [...new Set(updatedSkills)],
          };
        });
      } else {
        setCharacter((prev) => ({
          ...prev,
          [field]: value,
        }));
      }
    }
  };

  const handleLevel1ChoiceChange = (choiceType) => {
    if (lockedFields.level1ChoiceType) return;
    setCharacter((prev) => ({
      ...prev,
      level1ChoiceType: choiceType,
      innateHeritage: choiceType === "feat" ? "" : prev.innateHeritage,
      standardFeats: choiceType === "innate" ? [] : prev.standardFeats,
    }));
  };

  const handleSkillToggle = (skill) => {
    setCharacter((prev) => {
      const currentSkills = prev.skillProficiencies || [];
      const backgroundSkills = prev.backgroundSkills || [];
      const castingStyleSkills = getAvailableSkills();

      if (backgroundSkills.includes(skill)) {
        return prev;
      }

      const selectedCastingStyleSkills = currentSkills.filter(
        (s) => castingStyleSkills.includes(s) && !backgroundSkills.includes(s)
      );

      const isCurrentlySelected = currentSkills.includes(skill);

      if (!isCurrentlySelected && selectedCastingStyleSkills.length >= 2) {
        return prev;
      }

      return {
        ...prev,
        skillProficiencies: isCurrentlySelected
          ? currentSkills.filter((s) => s !== skill)
          : [...currentSkills, skill],
      };
    });
  };

  const calculateHitPoints = () => {
    if (!character.castingStyle) return 0;
    const castingData = hpData[character.castingStyle];
    if (!castingData) return 0;
    const conScore = character.abilityScores?.constitution;
    const conMod = conScore !== null ? Math.floor((conScore - 10) / 2) : 0;
    const level = character.level || 1;
    const baseHP = castingData.base + conMod;
    const additionalHP = (level - 1) * (castingData.avgPerLevel + conMod);
    return Math.max(1, baseHP + additionalHP);
  };

  const getCurrentHp = () => {
    if (isHpManualMode) {
      return character.hitPoints || 1;
    } else if (rolledHp !== null && !isHpManualMode) {
      return rolledHp;
    } else {
      return calculateHitPoints();
    }
  };

  const calculateMaxFeats = () => {
    if (character.level1ChoiceType !== "feat") return 0;
    return 1;
  };

  const toggleFieldLock = (fieldName) => {
    setLockedFields((prev) => ({
      ...prev,
      [fieldName]: !prev[fieldName],
    }));
  };

  const collectAllFeatsFromChoices = () => {
    const allFeats = [];
    if (
      character.level1ChoiceType === "feat" &&
      character.standardFeats.length > 0
    ) {
      allFeats.push(...character.standardFeats);
    }
    const availableASILevels = getAvailableASILevels(character.level);
    availableASILevels.forEach((level) => {
      const choice = character.asiChoices[level];
      if (choice && choice.type === "feat" && choice.selectedFeat) {
        allFeats.push(choice.selectedFeat);
      }
    });
    return allFeats;
  };

  const getFeatProgressionInfo = () => {
    const currentLevel = character.level || 1;
    const availableASILevels = getAvailableASILevels(currentLevel);
    const nextASILevel = ASI_LEVELS.find((level) => currentLevel < level);
    const choices = [];
    if (character.level1ChoiceType === "innate") {
      choices.push({ level: 1, choice: "Innate Heritage", type: "innate" });
    } else if (character.level1ChoiceType === "feat") {
      choices.push({ level: 1, choice: "Starting Feat", type: "feat" });
    }
    availableASILevels.forEach((level) => {
      const asiChoice = character.asiChoices[level];
      if (asiChoice) {
        if (asiChoice.type === "asi") {
          const increases = asiChoice.abilityScoreIncreases || [];
          const abilityNames = increases
            .map(
              (inc) =>
                inc.ability.charAt(0).toUpperCase() + inc.ability.slice(1)
            )
            .join(", ");
          choices.push({
            level,
            choice: `ASI (+1 ${abilityNames})`,
            type: "asi",
          });
        } else if (asiChoice.type === "feat") {
          choices.push({
            level,
            choice: asiChoice.selectedFeat || "Feat (not selected)",
            type: "feat",
          });
        }
      }
    });
    return {
      choices,
      nextASILevel,
      totalFeatsSelected: collectAllFeatsFromChoices().length,
    };
  };

  const saveCharacter = async () => {
    setIsSaving(true);
    setError(null);

    if (!character.name?.trim()) {
      setError("Character name is required");
      setIsSaving(false);
      return;
    }

    if (!character.id) {
      setError("Cannot save: Character ID is missing");
      setIsSaving(false);
      return;
    }

    if (!validateFeatSelections()) {
      setIsSaving(false);
      return;
    }

    const allFeats = collectAllFeatsFromChoices();
    const characterToSave = {
      ability_scores: character.abilityScores,
      asi_choices: character.asiChoices || {},
      background: character.background,
      background_skills: character.backgroundSkills || [],
      casting_style: character.castingStyle,
      feat_choices: character.featChoices || {},
      game_session: character.gameSession,
      hit_points: getCurrentHp(),
      house_choices: houseChoices,
      house: character.house,
      initiative_ability: character.initiativeAbility || "dexterity",
      innate_heritage: character.innateHeritage,
      level: character.level,
      level1_choice_type: character.level1ChoiceType,
      magic_modifiers: character.magicModifiers,
      name: character.name.trim(),
      skill_proficiencies: character.skillProficiencies || [],
      standard_feats: allFeats,
      subclass_choices: character.subclassChoices || {},
      subclass: character.subclass,
      wand_type: character.wandType,
    };

    try {
      const updatedCharacter = await characterService.updateCharacter(
        character.id,
        characterToSave,
        discordUserId
      );

      console.log("Returned from database:", updatedCharacter);
      console.log("originalCharacter in edit:", originalCharacter);
      console.log(
        "originalCharacter.houseChoices:",
        originalCharacter.houseChoices
      );
      const transformedCharacter = {
        id: updatedCharacter.id,
        abilityScores: updatedCharacter.ability_scores,
        asiChoices: updatedCharacter.asi_choices || {},
        background: updatedCharacter.background,
        backgroundSkills: updatedCharacter.background_skills || [],
        castingStyle: updatedCharacter.casting_style,
        createdAt: updatedCharacter.created_at,
        gameSession: updatedCharacter.game_session || "",
        hitPoints: updatedCharacter.hit_points,
        house: updatedCharacter.house,
        houseChoices: updatedCharacter.house_choices || {},
        initiativeAbility: updatedCharacter.initiative_ability || "dexterity",
        innateHeritage: updatedCharacter.innate_heritage,
        level: updatedCharacter.level,
        level1ChoiceType: updatedCharacter.level1_choice_type || "",
        name: updatedCharacter.name,
        skillExpertise: updatedCharacter.skill_expertise || [],
        skillProficiencies: updatedCharacter.skill_proficiencies || [],
        standardFeats: updatedCharacter.standard_feats || [],
        subclass: updatedCharacter.subclass,
        subclassChoices: updatedCharacter.subclass_choices || {},
        wandType: updatedCharacter.wand_type || "",
        magicModifiers: updatedCharacter.magic_modifiers || {
          divinations: 0,
          charms: 0,
          transfiguration: 0,
          healing: 0,
          jinxesHexesCurses: 0,
        },
      };
      if (onSave) {
        onSave(transformedCharacter);
      }
    } catch (err) {
      setError("Failed to update character: " + err.message);
      console.error("Error updating character:", err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    if (hasUnsavedChanges) {
      if (
        !window.confirm(
          "You have unsaved changes. Are you sure you want to cancel?"
        )
      ) {
        return;
      }
    }
    onCancel();
  };

  const featInfo = getFeatProgressionInfo();

  if (!originalCharacter) {
    return (
      <div style={styles.panel}>
        <div style={{ ...styles.header, textAlign: "center" }}>
          <h1 style={styles.title}>Loading Character...</h1>
          <p style={styles.subtitle}>
            Please wait while the character data loads.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.panel}>
      <div
        style={{
          ...styles.header,
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "24px",
        }}
      >
        <button
          onClick={handleCancel}
          style={{
            ...styles.button,
            backgroundColor: theme.border,
            color: theme.textSecondary,
            padding: "8px",
          }}
        >
          <ArrowLeft size={16} />
        </button>
        <div style={{ flex: 1 }}>
          <h1 style={styles.title}>Editing: {character.name}</h1>
          <p style={styles.subtitle}>
            Level {character.level} {character.castingStyle} • {character.house}
            {hasUnsavedChanges && (
              <span style={{ color: theme.warning, marginLeft: "8px" }}>
                • Unsaved changes
              </span>
            )}
          </p>
        </div>
        <div style={{ color: theme.primary }}>
          <Settings />
        </div>
      </div>

      {error && (
        <div style={styles.errorContainer}>
          <AlertTriangle size={16} />
          {error}
        </div>
      )}

      <div style={styles.editingWarning}>
        <AlertTriangle size={16} />
        <div>
          <strong>Editing Existing Character</strong>
          <p>
            Some fields may be locked to preserve character integrity. Use the
            lock/unlock buttons to modify restricted fields if needed.
          </p>
        </div>
      </div>
      <StepIndicator step={1} totalSteps={5} label="Basic Information" />
      <div style={styles.fieldContainer}>
        <label style={styles.label}>Character Name *</label>
        <input
          type="text"
          value={character.name || ""}
          onChange={(e) => handleInputChange("name", e.target.value)}
          placeholder="Enter character name..."
          style={styles.input}
          maxLength={50}
        />
      </div>

      <div style={styles.fieldContainer}>
        <label style={styles.label}>Game Session</label>
        <select
          value={character.gameSession || ""}
          onChange={(e) => handleInputChange("gameSession", e.target.value)}
          style={styles.select}
        >
          <option value="">Select Game Session...</option>
          {gameSessionOptions.map((session) => (
            <option key={session} value={session}>
              {session}
            </option>
          ))}
        </select>
      </div>
      <div style={styles.fieldContainer}>
        <label style={styles.label}>Casting Style</label>
        <select
          value={character.castingStyle || ""}
          onChange={(e) => handleInputChange("castingStyle", e.target.value)}
          style={styles.select}
        >
          <option value="">Select Casting Style...</option>
          {castingStyles.map((style) => (
            <option key={style} value={style}>
              {style}
            </option>
          ))}
        </select>
      </div>

      {character.castingStyle === "Intellect Caster" && (
        <div style={styles.fieldContainer}>
          <label style={styles.label}>Initiative Ability *</label>
          <div style={styles.helpText}>
            As an intellect caster, you may choose to use Intelligence or
            Dexterity for initiative.
            {character.abilityScores &&
              character.abilityScores.dexterity &&
              character.abilityScores.intelligence && (
                <div
                  style={{
                    marginTop: "8px",
                    fontSize: "12px",
                    fontStyle: "italic",
                    color: theme.primary,
                  }}
                >
                  {Math.floor((character.abilityScores.intelligence - 10) / 2) >
                  Math.floor((character.abilityScores.dexterity - 10) / 2)
                    ? "💡 Intelligence gives a higher modifier"
                    : Math.floor((character.abilityScores.dexterity - 10) / 2) >
                      Math.floor(
                        (character.abilityScores.intelligence - 10) / 2
                      )
                    ? "⚡ Dexterity gives a higher modifier"
                    : "⚖️ Both abilities give the same modifier"}
                </div>
              )}
          </div>
          <div style={styles.level1ChoiceContainer}>
            <label
              style={
                character.initiativeAbility === "dexterity"
                  ? styles.level1ChoiceLabelSelected
                  : styles.level1ChoiceLabel
              }
            >
              <input
                type="radio"
                name="initiativeAbility"
                value="dexterity"
                checked={character.initiativeAbility === "dexterity"}
                onChange={(e) =>
                  handleInputChange("initiativeAbility", e.target.value)
                }
                style={styles.level1ChoiceRadio}
              />
              <span
                style={
                  character.initiativeAbility === "dexterity"
                    ? styles.level1ChoiceTextSelected
                    : styles.level1ChoiceText
                }
              >
                Dexterity (Standard)
                {character.abilityScores &&
                  character.abilityScores.dexterity && (
                    <span
                      style={{
                        color:
                          character.abilityScores.intelligence &&
                          Math.floor(
                            (character.abilityScores.dexterity - 10) / 2
                          ) >
                            Math.floor(
                              (character.abilityScores.intelligence - 10) / 2
                            )
                            ? theme.success
                            : theme.textSecondary,
                        fontWeight:
                          character.abilityScores.intelligence &&
                          Math.floor(
                            (character.abilityScores.dexterity - 10) / 2
                          ) >
                            Math.floor(
                              (character.abilityScores.intelligence - 10) / 2
                            )
                            ? "bold"
                            : "normal",
                        marginLeft: "8px",
                      }}
                    >
                      {Math.floor(
                        (character.abilityScores.dexterity - 10) / 2
                      ) >= 0
                        ? "+"
                        : ""}
                      {Math.floor((character.abilityScores.dexterity - 10) / 2)}
                    </span>
                  )}
              </span>
            </label>
            <label
              style={
                character.initiativeAbility === "intelligence"
                  ? styles.level1ChoiceLabelSelected
                  : styles.level1ChoiceLabel
              }
            >
              <input
                type="radio"
                name="initiativeAbility"
                value="intelligence"
                checked={character.initiativeAbility === "intelligence"}
                onChange={(e) =>
                  handleInputChange("initiativeAbility", e.target.value)
                }
                style={styles.level1ChoiceRadio}
              />
              <span
                style={
                  character.initiativeAbility === "intelligence"
                    ? styles.level1ChoiceTextSelected
                    : styles.level1ChoiceText
                }
              >
                Intelligence (Intellect Caster)
                {character.abilityScores &&
                  character.abilityScores.intelligence && (
                    <span
                      style={{
                        color:
                          character.abilityScores.dexterity &&
                          Math.floor(
                            (character.abilityScores.intelligence - 10) / 2
                          ) >
                            Math.floor(
                              (character.abilityScores.dexterity - 10) / 2
                            )
                            ? theme.success
                            : theme.textSecondary,
                        fontWeight:
                          character.abilityScores.dexterity &&
                          Math.floor(
                            (character.abilityScores.intelligence - 10) / 2
                          ) >
                            Math.floor(
                              (character.abilityScores.dexterity - 10) / 2
                            )
                            ? "bold"
                            : "normal",
                        marginLeft: "8px",
                      }}
                    >
                      {Math.floor(
                        (character.abilityScores.intelligence - 10) / 2
                      ) >= 0
                        ? "+"
                        : ""}
                      {Math.floor(
                        (character.abilityScores.intelligence - 10) / 2
                      )}
                    </span>
                  )}
              </span>
            </label>
          </div>
        </div>
      )}

      <div style={styles.levelHpGrid}>
        <div style={styles.levelContainer}>
          <label style={styles.label}>Level</label>
          <input
            type="number"
            min="1"
            max="20"
            value={character.level || 1}
            onChange={(e) =>
              handleInputChange("level", parseInt(e.target.value) || 1)
            }
            style={styles.input}
          />
        </div>
        <div style={styles.hpFieldContainer}>
          <label style={styles.label}>Hit Points</label>
          {!character.castingStyle ? (
            <div style={styles.skillsPlaceholder}>
              Select a Casting Style first
            </div>
          ) : (
            <div style={styles.hpValueContainer}>
              {isHpManualMode ? (
                <input
                  type="number"
                  min="1"
                  value={character.hitPoints || ""}
                  onChange={(e) =>
                    handleInputChange(
                      "hitPoints",
                      parseInt(e.target.value) || 1
                    )
                  }
                  placeholder="--"
                  style={styles.hpManualInput}
                />
              ) : rolledHp !== null ? (
                <div style={styles.hpRollDisplay}>{rolledHp}</div>
              ) : (
                <div style={styles.hpDisplay}>{calculateHitPoints()}</div>
              )}
            </div>
          )}
        </div>
        {character.castingStyle && (
          <div style={styles.hpControlsContainer}>
            <div style={styles.hpControlsInline}>
              {!isHpManualMode && (
                <button
                  onClick={rollHp}
                  style={{
                    ...styles.button,
                    backgroundColor: "#EF4444",
                    fontSize: "12px",
                  }}
                >
                  <RefreshCw size={14} />
                  Roll
                </button>
              )}
              <div
                onClick={() => {
                  setIsHpManualMode(!isHpManualMode);
                  setRolledHp(null);
                }}
                style={{
                  ...styles.hpToggle,
                  backgroundColor: isHpManualMode
                    ? theme.success
                    : theme.border,
                  borderColor: isHpManualMode
                    ? theme.success
                    : theme.textSecondary,
                }}
                title={
                  isHpManualMode
                    ? "Switch to Auto/Roll mode"
                    : "Switch to Manual mode"
                }
              >
                <div
                  style={{
                    ...styles.hpToggleKnob,
                    left: isHpManualMode ? "22px" : "2px",
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <StepIndicator step={2} totalSteps={5} label="House Selection" />

      <div style={styles.fieldContainer}>
        <label style={styles.label}>House</label>
        <EnhancedHouseSelector
          selectedHouse={selectedHouse}
          onHouseSelect={handleHouseSelect}
          houseChoices={houseChoices}
          onHouseChoiceSelect={handleHouseChoiceSelect}
        />
      </div>

      <StepIndicator
        step={3}
        totalSteps={5}
        label="Skills & Features & Backgrounds"
      />

      <EnhancedSubclassSelector
        value={character.subclass}
        onChange={(value) => handleInputChange("subclass", value)}
        styles={styles}
        theme={theme}
        disabled={false}
        characterLevel={character.level}
        subclassChoices={character.subclassChoices || {}}
        onSubclassChoicesChange={(choices) =>
          setCharacter((prev) => ({ ...prev, subclassChoices: choices }))
        }
      />

      {/* Character Progression Summary */}
      {character.level > 1 && (
        <div style={styles.fieldContainer}>
          <div
            style={{
              ...styles.fieldContainer,
              backgroundColor: theme.surface,
              border: `1px solid ${theme.border}`,
              borderRadius: "8px",
              padding: "16px",
              marginBottom: "16px",
            }}
          >
            <h4
              style={{
                ...styles.skillsSubheader,
                margin: "0 0 12px 0",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Star size={16} color={theme.primary} />
              Character Progression Summary
            </h4>
            <div style={{ fontSize: "14px", lineHeight: "1.5" }}>
              <div style={{ marginBottom: "8px" }}>
                <strong>Level {character.level} Character Choices:</strong>
              </div>
              {featInfo.choices.map((choice, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: "4px",
                    color:
                      choice.type === "feat"
                        ? theme.primary
                        : choice.type === "asi"
                        ? theme.success
                        : choice.type === "innate"
                        ? theme.warning
                        : theme.text,
                  }}
                >
                  ✓ Level {choice.level}: {choice.choice}
                </div>
              ))}
              {featInfo.nextASILevel && (
                <div
                  style={{ marginBottom: "4px", color: theme.textSecondary }}
                >
                  ○ Level {featInfo.nextASILevel}: Next ASI/Feat Choice
                </div>
              )}
              <div
                style={{
                  fontSize: "12px",
                  color: theme.textSecondary,
                  marginTop: "8px",
                  fontStyle: "italic",
                }}
              >
                Total Feats Selected: {featInfo.totalFeatsSelected}
              </div>
            </div>
          </div>
        </div>
      )}

      <div style={styles.fieldContainer}>
        <div style={styles.lockedFieldHeader}>
          <h3 style={styles.skillsHeader}>
            Starting Choice (Level 1)
            {lockedFields.level1ChoiceType && (
              <span style={styles.lockedBadge}>
                <Lock size={12} />
                Locked
              </span>
            )}
          </h3>
          <button
            onClick={() => toggleFieldLock("level1ChoiceType")}
            style={{
              ...styles.lockButton,
              backgroundColor: lockedFields.level1ChoiceType
                ? "#ef4444"
                : "#10b981",
            }}
          >
            {lockedFields.level1ChoiceType ? (
              <Unlock size={14} />
            ) : (
              <Lock size={14} />
            )}
            {lockedFields.level1ChoiceType ? "Unlock" : "Lock"}
          </button>
        </div>
        {lockedFields.level1ChoiceType && (
          <div style={styles.lockedFieldInfo}>
            This field is locked to preserve character integrity. Changing your
            Level 1 choice may affect character balance.
          </div>
        )}
        <div style={styles.level1ChoiceContainer}>
          <label
            style={
              character.level1ChoiceType === "innate"
                ? styles.level1ChoiceLabelSelected
                : styles.level1ChoiceLabel
            }
          >
            <input
              type="radio"
              name="level1Choice"
              value="innate"
              checked={character.level1ChoiceType === "innate"}
              onChange={(e) => handleLevel1ChoiceChange(e.target.value)}
              style={styles.level1ChoiceRadio}
              disabled={lockedFields.level1ChoiceType}
            />
            <span
              style={
                character.level1ChoiceType === "innate"
                  ? styles.level1ChoiceTextSelected
                  : styles.level1ChoiceText
              }
            >
              Innate Heritage
            </span>
          </label>
          <label
            style={
              character.level1ChoiceType === "feat"
                ? styles.level1ChoiceLabelSelected
                : styles.level1ChoiceLabel
            }
          >
            <input
              type="radio"
              name="level1Choice"
              value="feat"
              checked={character.level1ChoiceType === "feat"}
              onChange={(e) => handleLevel1ChoiceChange(e.target.value)}
              style={styles.level1ChoiceRadio}
              disabled={lockedFields.level1ChoiceType}
            />
            <span
              style={
                character.level1ChoiceType === "feat"
                  ? styles.level1ChoiceTextSelected
                  : styles.level1ChoiceText
              }
            >
              Starting Standard Feat
            </span>
          </label>
        </div>
      </div>

      {character.level1ChoiceType === "innate" && (
        <InnateHeritage
          character={character}
          handleInputChange={handleInputChange}
          isEditing={true}
        />
      )}
      {character.level1ChoiceType === "feat" && (
        <div style={styles.fieldContainer}>
          <FeatRequirementsInfo character={character} />
          <EnhancedFeatureSelector
            character={character}
            setCharacter={setCharacter}
            expandedFeats={expandedFeats}
            setExpandedFeats={setExpandedFeats}
            featFilter={featFilter}
            setFeatFilter={setFeatFilter}
            maxFeats={calculateMaxFeats()}
            isLevel1Choice={false}
            characterLevel={character.level}
            standardFeats={standardFeats}
          />
        </div>
      )}
      {/* Skills Section - Placed early in Step 3 */}
      <EnhancedSkillsSection
        character={character}
        handleSkillToggle={handleSkillToggle}
        getAvailableSkills={getAvailableSkills}
        styles={styles}
        theme={theme}
      />

      {/* ASI/Feat Choices for levels 4, 8, 12, 16, 19 */}
      {getAvailableASILevels(character.level).map((level) => {
        const choice = character.asiChoices?.[level] || {};
        const hasSelectedChoice =
          choice.type === "asi" ||
          (choice.type === "feat" && choice.selectedFeat);

        return (
          <div key={level} style={styles.fieldContainer}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "8px",
              }}
            >
              <h3 style={styles.skillsHeader}>
                Level {level} Choice (
                {hasSelectedChoice ? "1/1 selected" : "0/1 selected"}) *
              </h3>
              {character.level > level && (
                <div style={styles.warningBadge}>
                  ⚠️ Editing Level {character.level} Character
                </div>
              )}
            </div>

            <div style={styles.helpText}>
              At level {level}, choose either an Ability Score Improvement (+2
              total, max +1 per ability) or a Standard Feat.
            </div>

            {/* Choice Type Selection */}
            <div style={styles.level1ChoiceContainer}>
              <label
                style={
                  choice.type === "asi"
                    ? styles.level1ChoiceLabelSelected
                    : styles.level1ChoiceLabel
                }
              >
                <input
                  type="radio"
                  name={`level${level}Choice`}
                  value="asi"
                  checked={choice.type === "asi"}
                  onChange={(e) => handleASIChoiceChange(level, "asi")}
                  style={styles.level1ChoiceRadio}
                />
                <span
                  style={
                    choice.type === "asi"
                      ? styles.level1ChoiceTextSelected
                      : styles.level1ChoiceText
                  }
                >
                  Ability Score Improvement
                </span>
              </label>

              <label
                style={
                  choice.type === "feat"
                    ? styles.level1ChoiceLabelSelected
                    : styles.level1ChoiceLabel
                }
              >
                <input
                  type="radio"
                  name={`level${level}Choice`}
                  value="feat"
                  checked={choice.type === "feat"}
                  onChange={(e) => handleASIChoiceChange(level, "feat")}
                  style={styles.level1ChoiceRadio}
                />
                <span
                  style={
                    choice.type === "feat"
                      ? styles.level1ChoiceTextSelected
                      : styles.level1ChoiceText
                  }
                >
                  Standard Feat
                </span>
              </label>
            </div>

            {/* ASI Selection */}
            {choice.type === "asi" && (
              <div style={{ marginTop: "16px" }}>
                <div style={styles.completionMessage}>
                  ✓ Ability Score Improvement selected!
                </div>

                <div
                  style={{
                    background: theme.surface,
                    border: `1px solid ${theme.border}`,
                    borderRadius: "8px",
                    padding: "12px",
                    marginTop: "8px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: theme.text,
                      marginBottom: "8px",
                    }}
                  >
                    Select Ability Score Increases (+2 total, max +1 per
                    ability):
                  </div>

                  <AbilityScoreIncrements
                    level={level}
                    choice={choice}
                    character={character}
                    handleASIAbilityChange={handleASIAbilityChange}
                    theme={theme}
                    styles={styles}
                  />
                </div>
              </div>
            )}

            {/* Feat Selection */}
            {choice.type === "feat" && (
              <div style={{ marginTop: "16px" }}>
                {choice.selectedFeat ? (
                  <div style={styles.completionMessage}>
                    ✓ Feat selected: {choice.selectedFeat}
                  </div>
                ) : (
                  <div style={styles.helpText}>
                    Select a Standard Feat from the options below:
                  </div>
                )}

                <div
                  style={{
                    background: theme.surface,
                    border: `1px solid ${theme.border}`,
                    borderRadius: "8px",
                    padding: "12px",
                    marginTop: "8px",
                  }}
                >
                  <FeatRequirementsInfo character={character} />
                  <ASIFeatSelector
                    level={level}
                    character={character}
                    choice={choice}
                    handleASIFeatChange={handleASIFeatChange}
                    expandedFeats={expandedFeats}
                    setExpandedFeats={setExpandedFeats}
                    featFilter={asiLevelFilters[level] || ""}
                    setFeatFilter={(filter) => setASILevelFilter(level, filter)}
                    theme={theme}
                    styles={styles}
                  />
                </div>
              </div>
            )}

            {/* Show selection status */}
            {!choice.type && (
              <div
                style={{
                  background: theme.surfaceHover,
                  border: `1px dashed ${theme.border}`,
                  borderRadius: "8px",
                  padding: "16px",
                  marginTop: "8px",
                  textAlign: "center",
                  color: theme.textSecondary,
                }}
              >
                <div style={{ fontSize: "16px", marginBottom: "4px" }}>
                  ⚪ No choice selected yet
                </div>
                <div style={{ fontSize: "12px" }}>
                  Choose either Ability Score Improvement or Standard Feat above
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* Background */}
      <EnhancedBackgroundSelector
        value={character.background}
        onChange={(backgroundName) => {
          handleInputChange("background", backgroundName);
        }}
        onCharacterUpdate={(updatedCharacter) => {
          setCharacter(updatedCharacter);
        }}
        character={character}
        disabled={false}
      />

      <StepIndicator step={4} totalSteps={5} label="Ability Scores" />
      <div style={styles.fieldContainer}>
        <div style={styles.lockedFieldHeader}>
          <h3 style={styles.skillsHeader}>
            Ability Scores
            {lockedFields.abilityScores && (
              <span style={styles.lockedBadge}>
                <Lock size={12} />
                Locked
              </span>
            )}
            <div style={styles.lockedFieldInfo}>
              Ability scores are locked. Use the unlock button to modify them.
            </div>
          </h3>

          <button
            onClick={() => toggleFieldLock("abilityScores")}
            style={{
              ...styles.lockButton,
              backgroundColor: lockedFields.abilityScores
                ? "#ef4444"
                : "#10b981",
            }}
          >
            {lockedFields.abilityScores ? (
              <Unlock size={14} />
            ) : (
              <Lock size={14} />
            )}
            {lockedFields.abilityScores ? "Unlock" : "Lock"}
          </button>
        </div>
        {lockedFields.abilityScores ? (
          <div style={styles.lockedAbilityScores}>
            {Object.entries(character.abilityScores || {}).map(
              ([ability, score]) => (
                <div key={ability} style={styles.lockedAbilityScore}>
                  <span style={styles.abilityName}>
                    {ability.charAt(0).toUpperCase() + ability.slice(1)}:
                  </span>
                  <span style={styles.abilityValue}>{score || 0}</span>
                </div>
              )
            )}
          </div>
        ) : (
          <AbilityScorePicker
            allStatsAssigned={allStatsAssigned}
            assignStat={assignStat}
            availableStats={availableStats}
            character={character}
            clearStat={clearStat}
            featChoices={character.featChoices || {}}
            houseChoices={character.houseChoices || houseChoices}
            isEditing={true}
            isManualMode={isManualMode}
            rollAllStats={() => {}}
            rolledStats={rolledStats}
            showModifiers={true}
            setAvailableStats={setAvailableStats}
            setCharacter={setCharacter}
            setIsManualMode={setIsManualMode}
            setRolledStats={setRolledStats}
            setTempInputValues={setTempInputValues}
            tempInputValues={tempInputValues}
          />
        )}
      </div>
      <StepIndicator step={5} totalSteps={5} label="Wand Modifiers" />
      <div style={styles.fieldContainer}>
        <h3 style={styles.skillsHeader}>Magic Subject Modifiers</h3>
        <div style={styles.helpText}>
          Enter your wand's bonuses/penalties for each subject of magic (The DM
          will provide these values)
        </div>
        <div style={styles.magicModifiersGrid}>
          {[
            { key: "divinations", label: "Divinations" },
            { key: "charms", label: "Charms" },
            { key: "transfiguration", label: "Transfiguration" },
            { key: "healing", label: "Healing" },
            { key: "jinxesHexesCurses", label: "JHC" },
          ].map(({ key, label }) => (
            <div key={key} style={styles.magicModifierItem}>
              <label style={styles.magicModifierLabel}>{label}</label>
              <input
                type="number"
                value={
                  magicModifierTempValues.hasOwnProperty(key)
                    ? magicModifierTempValues[key]
                    : (character.magicModifiers || {})[key] || 0
                }
                onChange={(e) => {
                  const value = e.target.value;
                  setMagicModifierTempValues((prev) => ({
                    ...prev,
                    [key]: value,
                  }));
                }}
                onBlur={() => {
                  const tempValue = magicModifierTempValues[key];
                  if (tempValue !== undefined) {
                    const numValue =
                      tempValue === "" || tempValue === "-"
                        ? 0
                        : parseInt(tempValue, 10);
                    const finalValue = isNaN(numValue) ? 0 : numValue;
                    handleInputChange(`magicModifiers.${key}`, finalValue);
                    setMagicModifierTempValues((prev) => {
                      const newState = { ...prev };
                      delete newState[key];
                      return newState;
                    });
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.target.blur();
                  }
                }}
                style={styles.magicModifierInput}
                min="-99"
                max="99"
                step="1"
              />
            </div>
          ))}
        </div>
      </div>

      <div style={styles.actionButtons}>
        <button
          onClick={handleCancel}
          style={{
            ...styles.button,
            backgroundColor: theme.border,
            color: theme.textSecondary,
          }}
          disabled={isSaving || !hasUnsavedChanges}
        >
          <X size={16} />
          Cancel
        </button>
        <button
          onClick={saveCharacter}
          disabled={isSaving || !hasUnsavedChanges}
          style={{
            ...styles.saveButton,
            backgroundColor: theme.primary,
            cursor: isSaving ? "not-allowed" : "pointer",
            opacity: isSaving ? 0.7 : 1,
          }}
        >
          <Save size={16} />
          {isSaving ? "Saving Changes..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
};

export default CharacterEditor;
