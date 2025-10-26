import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useTheme } from "../../../../contexts/ThemeContext";
import { createBackgroundStyles } from "../../../../styles/masterStyles";
import {
  getCustomClasses,
  getCustomClassDetails,
} from "../../../../SharedData/customClassesData";

const CustomSubclassSection = ({ character, onChange, disabled = false }) => {
  const { theme } = useTheme();
  const styles = createBackgroundStyles(theme);
  const [expandedSubclasses, setExpandedSubclasses] = useState(new Set());

  const selectedSubclass = character?.subclass || "";
  const characterClass = character?.class || "";
  const characterLevel = character?.level || 1;

  // Extract all subclass options from ALL custom classes
  const allSubclasses = useMemo(() => {
    const customClasses = getCustomClasses();
    const subclasses = [];

    customClasses.forEach((classInfo) => {
      // Skip the base Witch/Wizard class
      if (classInfo.index === "base_witch_wizard") return;

      const classData = getCustomClassDetails(classInfo.index);
      if (!classData) return;

      // NEW FORMAT: Check for branches object
      if (classData.branches) {
        Object.entries(classData.branches).forEach(([branchName, branchData]) => {
          if (!branchData.progression) return;

          // Get the first level at which this branch appears
          const levels = Object.keys(branchData.progression).map(Number).sort((a, b) => a - b);
          const firstLevel = levels[0];

          if (!firstLevel) return;

          // Get initial features for this branch
          const initialFeatures = branchData.progression[firstLevel] || [];

          subclasses.push({
            id: branchData.branchPath.toLowerCase().replace(/\s+/g, "_"),
            name: branchData.branchPath,
            level: firstLevel,
            description: branchData.tagline || "",
            features: initialFeatures,
            parentFeatureName: "Branch of Study", // Generic name
            className: classData.name,
            classId: classData.id,
            branchData: branchData, // Store full branch data for future use
          });
        });
      }
      // OLD FORMAT FALLBACK: Only use if class doesn't have new branches format
      else if (classData.level_features) {
        classData.level_features.forEach((levelFeature) => {
          levelFeature.features.forEach((feature) => {
            if (feature.options && feature.options.length > 0) {
              // This is a subclass/specialization choice (old format)
              feature.options.forEach((option) => {
                subclasses.push({
                  id: option.name.toLowerCase().replace(/\s+/g, "_"),
                  name: option.name,
                  level: levelFeature.level,
                  description: feature.description || "",
                  features: option.features || [],
                  parentFeatureName: feature.name,
                  className: classData.name,
                  classId: classData.id,
                });
              });
            }
          });
        });
      }
    });

    return subclasses;
  }, []);

  // Filter subclasses by class - ONLY show if class is selected
  const accessibleSubclasses = useMemo(() => {
    if (!characterClass) return [];

    return allSubclasses.filter(
      (sc) => sc.classId === characterClass && sc.level <= characterLevel
    );
  }, [allSubclasses, characterLevel, characterClass]);

  const lockedSubclasses = useMemo(() => {
    if (!characterClass) return [];

    return allSubclasses.filter(
      (sc) => sc.classId === characterClass && sc.level > characterLevel
    );
  }, [allSubclasses, characterLevel, characterClass]);

  // Group accessible subclasses by level
  const subclassesByLevel = useMemo(() => {
    const grouped = {};
    accessibleSubclasses.forEach((subclass) => {
      if (!grouped[subclass.level]) {
        grouped[subclass.level] = [];
      }
      grouped[subclass.level].push(subclass);
    });
    return grouped;
  }, [accessibleSubclasses]);

  // Group locked subclasses by level
  const lockedSubclassesByLevel = useMemo(() => {
    const grouped = {};
    lockedSubclasses.forEach((subclass) => {
      if (!grouped[subclass.level]) {
        grouped[subclass.level] = [];
      }
      grouped[subclass.level].push(subclass);
    });
    return grouped;
  }, [lockedSubclasses]);

  // Get sorted level keys
  const accessibleLevels = Object.keys(subclassesByLevel)
    .map(Number)
    .sort((a, b) => a - b);
  const lockedLevels = Object.keys(lockedSubclassesByLevel)
    .map(Number)
    .sort((a, b) => a - b);

  useEffect(() => {
    if (selectedSubclass) {
      setExpandedSubclasses((prev) => {
        const newSet = new Set(prev);
        newSet.add(selectedSubclass);
        return newSet;
      });
    }
  }, [selectedSubclass]);

  const handleSubclassToggle = (subclassId) => {
    if (selectedSubclass === subclassId) {
      onChange("subclass", "");
    } else {
      onChange("subclass", subclassId);
      setExpandedSubclasses((prev) => {
        const newSet = new Set(prev);
        newSet.add(subclassId);
        return newSet;
      });
    }
  };

  const toggleSubclassExpansion = (subclassId) => {
    setExpandedSubclasses((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(subclassId)) {
        newSet.delete(subclassId);
      } else {
        newSet.add(subclassId);
      }
      return newSet;
    });
  };

  const hasSelectedSubclass = selectedSubclass ? 1 : 0;

  const classData = useMemo(() => {
    if (!characterClass) return null;
    return getCustomClassDetails(characterClass);
  }, [characterClass]);

  // Helper function to get all progression levels for a branch
  const getBranchProgression = (subclass) => {
    if (!subclass) return [];

    if (!subclass.branchData || !subclass.branchData.progression) {
      // Old format - just return the initial features
      return [
        {
          level: subclass.level || 1,
          features: subclass.features || [],
          isAccessible: (subclass.level || 1) <= characterLevel,
        },
      ];
    }

    // New format - get all progression levels
    const progression = [];
    const levels = Object.keys(subclass.branchData.progression)
      .map(Number)
      .sort((a, b) => a - b);

    levels.forEach((level) => {
      const features = subclass.branchData.progression[level] || [];
      // Only add levels that have features
      if (features.length > 0) {
        progression.push({
          level: level,
          features: features,
          isAccessible: level <= characterLevel,
        });
      }
    });

    return progression;
  };

  const minSubclassLevel =
    accessibleSubclasses.length > 0
      ? Math.min(...accessibleSubclasses.map((sc) => sc.level))
      : 3;

  // If no class selected, show message
  if (!characterClass) {
    return (
      <div style={styles.fieldContainer}>
        <h3 style={styles.skillsHeader}>Class Specialization</h3>
        <div style={styles.helpText}>
          Please select a subclass first to view available
          specializations.
        </div>
      </div>
    );
  }

  return (
    <div style={styles.fieldContainer}>
      <h3 style={styles.skillsHeader}>
        {classData?.name} Specialization ({hasSelectedSubclass}/1 selected)
      </h3>

      <div style={styles.helpText}>
        Choose your specialization path within the {classData?.name} class.
        {characterLevel < minSubclassLevel &&
          accessibleSubclasses.length === 0 && (
            <span
              style={{
                display: "block",
                marginTop: "4px",
                color: theme.warning,
              }}
            >
              ⚠️ Specializations become available at level {minSubclassLevel}.
              Your character is currently level {characterLevel}.
            </span>
          )}
        {accessibleSubclasses.length > 0 && (
          <span
            style={{ display: "block", marginTop: "4px", fontStyle: "italic" }}
          >
            Character Level {characterLevel}: {accessibleSubclasses.length}{" "}
            specialization
            {accessibleSubclasses.length > 1 ? "s" : ""} available.
          </span>
        )}
      </div>

      {hasSelectedSubclass === 1 && (
        <div style={styles.completionMessage}>
          ✓ Specialization selected:{" "}
          {accessibleSubclasses.find((sc) => sc.id === selectedSubclass)
            ?.name || selectedSubclass}
        </div>
      )}

      <div style={styles.availableElementsSection}>
        <div style={styles.availableElementsContainer}>
          {/* Show accessible subclasses grouped by level */}
          {accessibleLevels.map((level) => (
            <div key={`level-${level}`}>
              {/* Level Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginTop: level === accessibleLevels[0] ? "0" : "24px",
                  marginBottom: "12px",
                  paddingBottom: "8px",
                  borderBottom: `2px solid ${theme.border}`,
                }}
              >
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    color: theme.primary,
                  }}
                >
                  Level {level} Specializations
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "500",
                    color: theme.textSecondary,
                    padding: "2px 8px",
                    backgroundColor: theme.surface,
                    borderRadius: "12px",
                    border: `1px solid ${theme.border}`,
                  }}
                >
                  {subclassesByLevel[level].length} option
                  {subclassesByLevel[level].length > 1 ? "s" : ""}
                </div>
                {characterLevel === level && (
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: "600",
                      color: theme.success,
                      padding: "3px 10px",
                      backgroundColor: `${theme.success}15`,
                      borderRadius: "12px",
                      border: `1px solid ${theme.success}50`,
                    }}
                  >
                    ✓ YOUR LEVEL
                  </div>
                )}
              </div>

              {/* Subclasses for this level */}
              {subclassesByLevel[level].map((subclass) => {
                const isSelected = selectedSubclass === subclass.id;
                const isExpanded = expandedSubclasses.has(subclass.id);

                return (
                  <div
                    key={subclass.id}
                    style={{
                      ...(isSelected
                        ? styles.selectedElementCard
                        : styles.featCard),
                      marginBottom: "12px",
                    }}
                  >
                    <div style={styles.featHeader}>
                      <label
                        style={styles.featLabelClickable}
                        onClick={(e) => {
                          // Prevent double-firing when clicking the checkbox itself
                          if (e.target.tagName === "INPUT") return;
                          handleSubclassToggle(subclass.id);
                        }}
                      >
                        <input
                          type="checkbox"
                          name="subclass"
                          value={subclass.id}
                          checked={isSelected}
                          onChange={(e) => {
                            e.stopPropagation();
                            handleSubclassToggle(subclass.id);
                          }}
                          disabled={disabled}
                          style={{
                            width: "18px",
                            height: "18px",
                            marginRight: "8px",
                            cursor: disabled ? "not-allowed" : "pointer",
                            accentColor: theme.success,
                            transform: "scale(1.2)",
                          }}
                        />
                        <span
                          style={
                            isSelected
                              ? styles.featNameSelected
                              : styles.featName
                          }
                        >
                          {subclass.name}
                        </span>
                      </label>
                      {!isSelected && (
                        <button
                          onClick={() => toggleSubclassExpansion(subclass.id)}
                          style={styles.expandButton}
                          type="button"
                          disabled={disabled}
                        >
                          {isExpanded ? "▲" : "▼"}
                        </button>
                      )}
                    </div>

                    <div style={styles.featPreview}>
                      {subclass.parentFeatureName}: {subclass.description}
                    </div>

                    {(isExpanded || isSelected) && (
                      <div
                        style={
                          isSelected
                            ? styles.featDescriptionSelected
                            : styles.featDescription
                        }
                      >
                        {/* Display full progression tree */}
                        {getBranchProgression(subclass).length > 0 ? (
                          getBranchProgression(subclass).map(
                          (progressionLevel, progIndex) => (
                            <div key={`prog-${progIndex}`}>
                              {/* Level header within the branch */}
                              <div
                                style={{
                                  fontSize: "13px",
                                  fontWeight: "700",
                                  color: progressionLevel.isAccessible
                                    ? theme.primary
                                    : theme.textSecondary,
                                  marginTop: progIndex > 0 ? "16px" : "0",
                                  marginBottom: "8px",
                                  paddingBottom: "4px",
                                  borderBottom: `1px solid ${
                                    progressionLevel.isAccessible
                                      ? theme.border
                                      : theme.border + "50"
                                  }`,
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "8px",
                                  opacity: progressionLevel.isAccessible
                                    ? 1
                                    : 0.6,
                                }}
                              >
                                {!progressionLevel.isAccessible && "🔒 "}
                                Level {progressionLevel.level} Features
                                {!progressionLevel.isAccessible && (
                                  <span
                                    style={{
                                      fontSize: "11px",
                                      fontWeight: "500",
                                      padding: "2px 6px",
                                      backgroundColor: `${theme.warning}15`,
                                      borderRadius: "8px",
                                      border: `1px solid ${theme.warning}50`,
                                      color: theme.warning,
                                    }}
                                  >
                                    Unlocks in{" "}
                                    {progressionLevel.level - characterLevel}{" "}
                                    level
                                    {progressionLevel.level - characterLevel > 1
                                      ? "s"
                                      : ""}
                                  </span>
                                )}
                                {progressionLevel.isAccessible &&
                                  progressionLevel.level === characterLevel && (
                                    <span
                                      style={{
                                        fontSize: "11px",
                                        fontWeight: "600",
                                        color: theme.success,
                                        padding: "2px 8px",
                                        backgroundColor: `${theme.success}15`,
                                        borderRadius: "8px",
                                        border: `1px solid ${theme.success}50`,
                                      }}
                                    >
                                      ✓ CURRENT
                                    </span>
                                  )}
                              </div>

                              {/* Features for this level */}
                              {progressionLevel.features.map(
                                (feature, featureIndex) => (
                                  <div
                                    key={featureIndex}
                                    style={{
                                      ...(isSelected
                                        ? styles.singleFeatureSelected
                                        : styles.singleFeature),
                                      opacity: progressionLevel.isAccessible
                                        ? 1
                                        : 0.5,
                                      backgroundColor: progressionLevel.isAccessible
                                        ? undefined
                                        : `${theme.surface}80`,
                                      border: progressionLevel.isAccessible
                                        ? undefined
                                        : `1px dashed ${theme.border}`,
                                    }}
                                  >
                                    <strong
                                      style={{
                                        ...(isSelected
                                          ? styles.featureNameSelected
                                          : styles.featureName),
                                        color: progressionLevel.isAccessible
                                          ? undefined
                                          : theme.textSecondary,
                                      }}
                                    >
                                      {feature.name}:
                                    </strong>
                                    <p
                                      style={{
                                        ...(isSelected
                                          ? styles.featureDescriptionSelected
                                          : styles.featureDescription),
                                        color: progressionLevel.isAccessible
                                          ? undefined
                                          : theme.textSecondary,
                                      }}
                                    >
                                      {feature.description}
                                    </p>
                                  </div>
                                )
                              )}
                            </div>
                          )
                        )
                        ) : (
                          <div style={{ padding: "12px", color: theme.textSecondary, fontStyle: "italic" }}>
                            No features available for this specialization.
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}

          {/* Show locked subclasses grouped by level */}
          {characterClass && lockedSubclasses.length > 0 && (
            <>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  color: theme.textSecondary,
                  marginTop: "32px",
                  marginBottom: "16px",
                  paddingTop: "16px",
                  borderTop: `2px dashed ${theme.border}`,
                }}
              >
                🔒 Locked Specializations
              </div>
              {lockedLevels.map((level) => (
                <div key={`locked-level-${level}`}>
                  {/* Locked Level Header */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginTop: level === lockedLevels[0] ? "0" : "20px",
                      marginBottom: "12px",
                      paddingBottom: "6px",
                      borderBottom: `1px dashed ${theme.border}`,
                    }}
                  >
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: theme.textSecondary,
                      }}
                    >
                      Level {level} Specializations
                    </div>
                    <div
                      style={{
                        fontSize: "11px",
                        fontWeight: "500",
                        color: theme.textSecondary,
                        padding: "2px 8px",
                        backgroundColor: theme.surface,
                        borderRadius: "12px",
                        border: `1px dashed ${theme.border}`,
                        opacity: 0.7,
                      }}
                    >
                      Unlocks in {level - characterLevel} level
                      {level - characterLevel > 1 ? "s" : ""}
                    </div>
                  </div>

                  {/* Locked subclasses for this level */}
                  {lockedSubclassesByLevel[level].map((subclass) => (
                    <div
                      key={subclass.id}
                      style={{
                        ...styles.lockedFeature,
                        marginBottom: "10px",
                      }}
                    >
                      <div style={styles.featHeader}>
                        <span
                          style={{
                            ...styles.featName,
                            color: theme.textSecondary,
                            opacity: 0.8,
                          }}
                        >
                          🔒 {subclass.name}
                        </span>
                      </div>
                      <div
                        style={{
                          ...styles.featPreview,
                          color: theme.textSecondary,
                          fontSize: "12px",
                          fontStyle: "italic",
                        }}
                      >
                        Unlocks when your character reaches Level{" "}
                        {subclass.level}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      <div style={styles.helpText}>
        Note: Specialization is optional and represents your character's focused
        training path within their chosen subclass.
        {selectedSubclass && (
          <span
            style={{
              display: "block",
              marginTop: "4px",
              fontStyle: "italic",
              color: theme.success,
            }}
          >
            Uncheck the selected specialization to see all available options
            again.
          </span>
        )}
      </div>
    </div>
  );
};

export default CustomSubclassSection;
