import React, { useState, useEffect, useRef } from "react";
import { Save, X, RotateCcw } from "lucide-react";
import { useTheme } from "../../../../contexts/ThemeContext";
import { createBaseStyles } from "../../utils/styles";
import { useCharacterData } from "../../hooks/useCharacterData";
import { useFormSections } from "../../hooks/useFormSections";
import { FormSection } from "../index";
import {
  AbilityScoresSection,
  HitPointsSection,
  BackgroundSection,
  Level1ChoiceSection,
  CustomClassSection,
  CustomSubclassSection,
  SkillsSection,
  ToolsLanguagesSection,
  MagicModifiersSection,
  MetaMagicSection,
  CastingStyleChoicesSection,
  NotesSection,
  BasicInfoSection,
  InnateHeritageSection,
} from "../sections";

import {
  getAllSelectedFeats,
  getAvailableASILevels,
  handleASIChoiceChange as utilsHandleASIChoiceChange,
  handleASIFeatChange as utilsHandleASIFeatChange,
  handleASIAbilityChange as utilsHandleASIAbilityChange,
} from "../../utils/characterUtils";

const CharacterForm = ({
  characterId = null,
  userId,
  mode = "create",
  onSave,
  onCancel,
  supabase,
  adminMode = false,
  isUserAdmin = false,
  initialSection = null,
}) => {
  const { theme } = useTheme();
  const styles = createBaseStyles(theme);

  const [isSticky, setIsSticky] = useState(false);
  const toolbarRef = useRef(null);
  const placeholderRef = useRef(null);
  const [toolbarHeight, setToolbarHeight] = useState(0);

  const {
    character,
    loading,
    error,
    hasChanges,
    updateCharacter,
    updateCharacterBulk,
    saveCharacter,
    resetCharacter,
  } = useCharacterData(characterId, userId, adminMode, isUserAdmin);

  const {
    expandedSections,
    toggleSectionExpansion,
    getSectionConfig,
    sections,
  } = useFormSections();

  useEffect(() => {
    const handleScroll = () => {
      if (!placeholderRef.current || !toolbarRef.current) return;

      const placeholder = placeholderRef.current;
      const toolbar = toolbarRef.current;
      const rect = placeholder.getBoundingClientRect();

      if (toolbar && !isSticky) {
        setToolbarHeight(toolbar.offsetHeight);
      }

      if (rect.top <= 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isSticky]);

  useEffect(() => {
    if (initialSection && character) {
      const timer = setTimeout(() => {
        const sectionElement = document.getElementById(
          `section-${initialSection}`
        );
        if (sectionElement) {
          sectionElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [initialSection, character]);

  const handleASIChoiceChange = (level, choiceType) => {
    const updatedCharacter = utilsHandleASIChoiceChange(
      character,
      level,
      choiceType
    );
    updateCharacterBulk(updatedCharacter);
  };

  const handleASIFeatChange = (level, featName, featChoices = {}) => {
    try {
      const updatedCharacter = utilsHandleASIFeatChange(
        character,
        level,
        featName,
        featChoices
      );
      updateCharacterBulk(updatedCharacter);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleASIAbilityChange = (level, abilityUpdates) => {
    const updatedCharacter = utilsHandleASIAbilityChange(
      character,
      level,
      abilityUpdates
    );
    updateCharacterBulk(updatedCharacter);
  };

  const handleSave = async () => {
    try {
      const savedCharacter = await saveCharacter();
      if (onSave) {
        onSave(savedCharacter);
      }
    } catch (err) {
      console.error("Failed to save character:", err);
    }
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all changes?")) {
      resetCharacter();
    }
  };

  if (loading && mode === "edit") {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "400px",
          color: theme.textSecondary,
        }}
      >
        Loading character...
      </div>
    );
  }

  const toolbarStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: isSticky ? "0" : "20px",
    padding: "16px",
    backgroundColor: theme.surface,
    borderRadius: isSticky ? "0" : "8px",
    border: `3px solid ${theme.text}`,
    ...(isSticky && {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      borderRadius: 0,
    }),
    transition: "all 0.3s ease",
  };

  return (
    <div>
      <div
        ref={placeholderRef}
        style={{
          height: isSticky ? `${toolbarHeight}px` : 0,
          transition: "height 0.3s ease",
        }}
      />

      <div ref={toolbarRef} style={toolbarStyles}>
        <div>
          <h2
            style={{
              color: theme.text,
              margin: 0,
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            {mode === "create"
              ? "Create Character"
              : `Edit ${character.name || "Character"}`}
          </h2>
          <p
            style={{
              color: theme.textSecondary,
              margin: "4px 0 0 0",
              fontSize: "14px",
            }}
          >
            {hasChanges ? "You have unsaved changes" : "No changes made"}
          </p>
        </div>

        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {hasChanges && (
            <button
              onClick={handleReset}
              style={{
                ...styles.button,
                ...styles.buttonSecondary,
                backgroundColor: theme.error,
                border: theme.border,
              }}
            >
              <RotateCcw size={16} />
              Reset
            </button>
          )}

          <button
            onClick={handleSave}
            disabled={loading || !hasChanges}
            style={{
              ...styles.button,
              ...styles.buttonPrimary,
              opacity: loading || !hasChanges ? 0.6 : 1,
              backgroundColor: hasChanges ? theme.success : theme.border,
            }}
          >
            <Save size={16} />
            {loading ? "Saving..." : "Save"}
          </button>

          {onCancel && (
            <button
              onClick={onCancel}
              style={{
                ...styles.button,
                ...styles.buttonPrimary,
                opacity: loading ? 0.6 : 1,
                backgroundColor: "#d97706",
              }}
            >
              <X size={16} />
              Cancel
            </button>
          )}
        </div>
      </div>

      {error && (
        <div
          style={{
            padding: "12px 16px",
            backgroundColor: `${theme.error}20`,
            border: `1px solid ${theme.error}`,
            borderRadius: "8px",
            marginBottom: "20px",
            color: theme.error,
          }}
        >
          Error: {error}
        </div>
      )}

      <FormSection
        title="Basic Information"
        subtitle="Character name, level, and core details"
        id="section-basic-info"
        collapsible={true}
        isExpanded={expandedSections["section-basic-info"]}
        onToggleExpansion={() => toggleSectionExpansion("section-basic-info")}
      >
        <BasicInfoSection
          character={character}
          onChange={updateCharacter}
          mode={mode}
          supabase={supabase}
        />
      </FormSection>

      <FormSection
        title="Casting Style Features"
        subtitle="Level-based casting style feature choices"
        id="section-casting-style-choices"
        collapsible={true}
        isExpanded={expandedSections["section-casting-style-choices"]}
        onToggleExpansion={() => toggleSectionExpansion("section-casting-style-choices")}
      >
        <CastingStyleChoicesSection
          character={character}
          setCharacter={updateCharacter}
        />
      </FormSection>

      <FormSection
        title="Heritage / Species"
        subtitle="Character species and innate magical abilities"
        id="section-heritage"
        collapsible={true}
        isExpanded={expandedSections["section-heritage"]}
        onToggleExpansion={() => toggleSectionExpansion("section-heritage")}
      >
        <InnateHeritageSection
          character={character}
          handleInputChange={(field, value) => updateCharacter(field, value)}
          isEditing={mode === "edit"}
          heritageChoices={character.heritageChoices || {}}
          onHeritageChoicesChange={(choices) => {
            const updatedCharacter = {
              ...character,
              heritageChoices: choices,
            };
            updateCharacterBulk(updatedCharacter);
          }}
          onCharacterUpdate={updateCharacterBulk}
          disabled={false}
        />
      </FormSection>

      <FormSection
        title="Ability Scores"
        subtitle="Set your character's base ability scores"
        id="section-ability-scores"
        collapsible={true}
        isExpanded={expandedSections["section-ability-scores"]}
        onToggleExpansion={() => toggleSectionExpansion("section-ability-scores")}
      >
        <AbilityScoresSection
          character={character}
          onChange={updateCharacter}
          onCharacterUpdate={updateCharacterBulk}
          mode={mode}
          featChoices={getAllSelectedFeats(character)}
          houseChoices={character.houseChoices || character.house_choices}
          heritageChoices={character.heritageChoices || {}}
          showModifiers={true}
        />
      </FormSection>

      <FormSection
        title="Background"
        subtitle="Character background and starting proficiencies"
        id="section-background"
        collapsible={true}
        isExpanded={expandedSections["section-background"]}
        onToggleExpansion={() => toggleSectionExpansion("section-background")}
      >
        <BackgroundSection
          value={character.background}
          onChange={(backgroundName) =>
            updateCharacter("background", backgroundName)
          }
          onCharacterUpdate={(updatedCharacter) =>
            updateCharacterBulk(updatedCharacter)
          }
          character={character}
          mode={mode}
        />
      </FormSection>

      <FormSection
        title="Profession Class"
        subtitle="Choose your character's magical profession and career path"
        id="section-profession-class"
        collapsible={true}
        isExpanded={expandedSections["section-profession-class"]}
        onToggleExpansion={() => toggleSectionExpansion("section-profession-class")}
      >
        <CustomClassSection
          character={character}
          onChange={updateCharacter}
          mode={mode}
        />
      </FormSection>

      <FormSection
        title="Class Specialization"
        subtitle="Choose your character's specialized path within their profession"
        id="section-specialization"
        collapsible={true}
        isExpanded={expandedSections["section-specialization"]}
        onToggleExpansion={() => toggleSectionExpansion("section-specialization")}
      >
        <CustomSubclassSection
          character={character}
          onChange={updateCharacter}
          mode={mode}
        />
      </FormSection>

      <FormSection
        title="Skills & Proficiencies"
        subtitle="Skill proficiencies and expertise"
        id="section-skills"
        collapsible={true}
        isExpanded={expandedSections["section-skills"]}
        onToggleExpansion={() => toggleSectionExpansion("section-skills")}
      >
        <SkillsSection
          character={character}
          onChange={(field, value) => updateCharacter(field, value)}
          onCharacterUpdate={updateCharacterBulk}
          mode={mode}
        />
      </FormSection>

      <FormSection
        title="Tool Proficiencies"
        subtitle="Tool proficiencies"
        id="section-tools"
        collapsible={true}
        isExpanded={expandedSections["section-tools"]}
        onToggleExpansion={() => toggleSectionExpansion("section-tools")}
      >
        <ToolsLanguagesSection
          character={character}
          onChange={(field, value) => updateCharacter(field, value)}
          mode={mode}
        />
      </FormSection>

      <FormSection
        title="Magic Modifiers & Wand"
        subtitle="Wand bonuses and character wand information"
        id="section-magic-modifiers"
        collapsible={true}
        isExpanded={expandedSections["section-magic-modifiers"]}
        onToggleExpansion={() => toggleSectionExpansion("section-magic-modifiers")}
      >
        <MagicModifiersSection
          character={character}
          onChange={updateCharacter}
        />
      </FormSection>

      <FormSection
        title="Hit Points"
        subtitle="Calculate your character's hit points based on casting style and constitution"
        id="section-hit-points"
        collapsible={true}
        isExpanded={expandedSections["section-hit-points"]}
        onToggleExpansion={() => toggleSectionExpansion("section-hit-points")}
      >
        <HitPointsSection character={character} onChange={updateCharacter} />
      </FormSection>

      <FormSection
        title="Metamagic"
        subtitle="Select metamagic options available to your character"
        id="section-metamagic"
        collapsible={true}
        isExpanded={expandedSections["section-metamagic"]}
        onToggleExpansion={() => toggleSectionExpansion("section-metamagic")}
      >
        <MetaMagicSection character={character} onChange={updateCharacter} />
      </FormSection>

      <FormSection
        title="Character Notes"
        subtitle="Additional notes, character flaws, backstory etc"
        id="section-notes"
        collapsible={true}
        isExpanded={expandedSections["section-notes"]}
        onToggleExpansion={() => toggleSectionExpansion("section-notes")}
      >
        <NotesSection character={character} onChange={updateCharacter} />
      </FormSection>
    </div>
  );
};

export default CharacterForm;
