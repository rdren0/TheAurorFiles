import React, { useState, useEffect, useMemo } from "react";
import { useTheme } from "../../../../contexts/ThemeContext";
import { createBackgroundStyles } from "../../../../styles/masterStyles";
import {
  getCustomClasses,
  getCustomClassDetails,
} from "../../../../SharedData/customClassesData";

const CustomClassSection = ({ character, onChange, disabled = false }) => {
  const { theme } = useTheme();
  const styles = createBackgroundStyles(theme);
  const [expandedClasses, setExpandedClasses] = useState(new Set());
  const [expandedFeatures, setExpandedFeatures] = useState(new Set());

  const selectedClass = character?.class || "";
  const classFeatureChoices = character?.classFeatureChoices || {};

  // Get all custom classes except base Witch/Wizard
  const availableClasses = useMemo(() => {
    const customClasses = getCustomClasses();

    return customClasses
      .filter((cls) => cls.index !== "base_witch_wizard")
      .map((cls) => {
        const details = getCustomClassDetails(cls.index);
        return {
          ...cls,
          ...details,
        };
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  useEffect(() => {
    if (selectedClass) {
      setExpandedClasses((prev) => {
        const newSet = new Set(prev);
        newSet.add(selectedClass);
        return newSet;
      });
    }
  }, [selectedClass]);

  const handleClassToggle = (classId) => {
    if (selectedClass === classId) {
      onChange("class", "");
      // Also clear subclass when class is deselected
      onChange("subclass", "");
    } else {
      onChange("class", classId);
      // Clear subclass when switching classes
      onChange("subclass", "");
      setExpandedClasses((prev) => {
        const newSet = new Set(prev);
        newSet.add(classId);
        return newSet;
      });
    }
  };

  const toggleClassExpansion = (classId) => {
    setExpandedClasses((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(classId)) {
        newSet.delete(classId);
      } else {
        newSet.add(classId);
      }
      return newSet;
    });
  };

  const toggleFeatureExpansion = (featureKey) => {
    setExpandedFeatures((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(featureKey)) {
        newSet.delete(featureKey);
      } else {
        newSet.add(featureKey);
      }
      return newSet;
    });
  };

  const handleFeatureOptionChange = (featureName, optionName) => {
    const newChoices = {
      ...classFeatureChoices,
      [featureName]: optionName,
    };
    onChange("classFeatureChoices", newChoices);
  };

  const hasSelectedClass = selectedClass ? 1 : 0;

  // Count feature choices for the selected class
  const getFeatureChoiceCounts = (classData, characterLevel) => {
    if (!classData?.level_features) return { required: 0, selected: 0 };

    let required = 0;
    let selected = 0;

    classData.level_features.forEach((levelFeature) => {
      if (levelFeature.level <= characterLevel) {
        levelFeature.features.forEach((feature) => {
          if (feature.options && feature.options.length > 0) {
            required++;
            if (classFeatureChoices[feature.name]) {
              selected++;
            }
          }
        });
      }
    });

    return { required, selected };
  };

  const featureChoiceCounts = useMemo(() => {
    if (!selectedClass) return { required: 0, selected: 0 };
    const classData = getCustomClassDetails(selectedClass);
    return getFeatureChoiceCounts(classData, character?.level || 1);
  }, [selectedClass, classFeatureChoices, character?.level]);

  // Get features up to character level
  const getAccessibleFeatures = (classData, characterLevel) => {
    if (!classData.level_features) return [];
    return classData.level_features.filter((lf) => lf.level <= characterLevel);
  };

  const getLockedFeatures = (classData, characterLevel) => {
    if (!classData.level_features) return [];
    return classData.level_features.filter((lf) => lf.level > characterLevel);
  };

  return (
    <div style={styles.fieldContainer}>
      {hasSelectedClass === 1 && (
        <div style={styles.completionMessage}>
          ✓ Class selected:{" "}
          {availableClasses.find((cls) => cls.id === selectedClass)?.name ||
            selectedClass}
          {featureChoiceCounts.required > 0 && (
            <span
              style={{
                marginLeft: "12px",
                padding: "4px 10px",
                backgroundColor:
                  featureChoiceCounts.selected === featureChoiceCounts.required
                    ? `${theme.success}20`
                    : `${theme.warning}20`,
                borderRadius: "12px",
                fontSize: "13px",
                fontWeight: "600",
                color:
                  featureChoiceCounts.selected === featureChoiceCounts.required
                    ? theme.success
                    : theme.warning,
                border: `1px solid ${
                  featureChoiceCounts.selected === featureChoiceCounts.required
                    ? theme.success
                    : theme.warning
                }50`,
              }}
            >
              Feature Choices: {featureChoiceCounts.selected}/
              {featureChoiceCounts.required}
            </span>
          )}
        </div>
      )}

      <div style={styles.availableElementsSection}>
        <div style={styles.availableElementsContainer}>
          {availableClasses.map((classData) => {
            const isSelected = selectedClass === classData.id;
            const isExpanded = expandedClasses.has(classData.id);
            const accessibleFeatures = getAccessibleFeatures(
              classData,
              character?.level || 1
            );
            const lockedFeatures = getLockedFeatures(
              classData,
              character?.level || 1
            );

            return (
              <div
                key={classData.id}
                style={
                  isSelected ? styles.selectedElementCard : styles.featCard
                }
              >
                <div style={styles.featHeader}>
                  <label
                    style={styles.featLabelClickable}
                    onClick={(e) => {
                      // Prevent double-firing when clicking the checkbox itself
                      if (e.target.tagName === "INPUT") return;
                      handleClassToggle(classData.id);
                    }}
                  >
                    <input
                      type="checkbox"
                      name="class"
                      value={classData.id}
                      checked={isSelected}
                      onChange={(e) => {
                        e.stopPropagation();
                        handleClassToggle(classData.id);
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
                        isSelected ? styles.featNameSelected : styles.featName
                      }
                    >
                      {classData.name}
                      {classData.type && (
                        <span
                          style={{
                            ...styles.availableChoicesIndicator,
                            marginLeft: "8px",
                          }}
                        >
                          ({classData.type})
                        </span>
                      )}
                    </span>
                  </label>
                  {!isSelected && (
                    <button
                      onClick={() => toggleClassExpansion(classData.id)}
                      style={styles.expandButton}
                      type="button"
                      disabled={disabled}
                    >
                      {isExpanded ? "▲" : "▼"}
                    </button>
                  )}
                </div>

                <div style={styles.featPreview}>{classData.description}</div>

                {(isExpanded || isSelected) && (
                  <div
                    style={
                      isSelected
                        ? styles.featDescriptionSelected
                        : styles.featDescription
                    }
                  >
                    {/* Class Stats Card */}
                    <div
                      style={{
                        backgroundColor: isSelected
                          ? theme.backgroundAlt
                          : theme.background,
                        border: `1px solid ${
                          isSelected ? theme.success : theme.border
                        }`,
                        borderRadius: "8px",
                        padding: "12px",
                        marginBottom: "16px",
                      }}
                    >
                        <h4
                          style={{
                            margin: "0 0 12px 0",
                            color: isSelected ? theme.success : theme.text,
                            fontSize: "16px",
                            fontWeight: "600",
                          }}
                        >
                          Class Statistics
                        </h4>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            gap: "8px",
                            fontSize: "14px",
                          }}
                        >
                          <div>
                            <strong
                              style={{
                                color: isSelected
                                  ? theme.success
                                  : theme.textSecondary,
                              }}
                            >
                              Hit Die:
                            </strong>{" "}
                            <span
                              style={{
                                color: isSelected ? theme.text : theme.text,
                              }}
                            >
                              {classData.hit_die}
                            </span>
                          </div>

                          {classData.primary_abilities && (
                            <div>
                              <strong
                                style={{
                                  color: isSelected
                                    ? theme.success
                                    : theme.textSecondary,
                                }}
                              >
                                Primary:
                              </strong>{" "}
                              <span
                                style={{
                                  color: isSelected ? theme.text : theme.text,
                                }}
                              >
                                {classData.primary_abilities.join(", ")}
                              </span>
                            </div>
                          )}

                          {classData.saving_throws && (
                            <div style={{ gridColumn: "1 / -1" }}>
                              <strong
                                style={{
                                  color: isSelected
                                    ? theme.success
                                    : theme.textSecondary,
                                }}
                              >
                                Saving Throws:
                              </strong>{" "}
                              <span
                                style={{
                                  color: isSelected ? theme.text : theme.text,
                                }}
                              >
                                {classData.saving_throws.join(", ")}
                              </span>
                            </div>
                          )}

                          {classData.skill_choices && (
                            <div style={{ gridColumn: "1 / -1" }}>
                              <strong
                                style={{
                                  color: isSelected
                                    ? theme.success
                                    : theme.textSecondary,
                                }}
                              >
                                Skills:
                              </strong>{" "}
                              <span
                                style={{
                                  color: isSelected ? theme.text : theme.text,
                                }}
                              >
                                Choose {classData.skill_choices.choose} from{" "}
                                {classData.skill_choices.options.join(", ")}
                              </span>
                            </div>
                          )}
                        </div>
                    </div>

                    {/* Accessible features - Grouped by level */}
                    <div style={{ marginBottom: "16px" }}>
                      {accessibleFeatures.map((levelFeature, levelIndex) => (
                        <div
                          key={`level-${levelFeature.level}`}
                          style={{
                            marginBottom: levelIndex < accessibleFeatures.length - 1 ? "24px" : "0",
                          }}
                        >
                          {/* Level Header */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                              marginBottom: "12px",
                              paddingBottom: "8px",
                              borderBottom: `2px solid ${isSelected ? theme.success : theme.border}`,
                            }}
                          >
                            <div
                              style={{
                                fontSize: "16px",
                                fontWeight: "700",
                                color: isSelected ? theme.success : theme.primary,
                              }}
                            >
                              Level {levelFeature.level} Features
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
                              {levelFeature.features.length} feature{levelFeature.features.length > 1 ? "s" : ""}
                            </div>
                          </div>

                          {/* Features list */}
                          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                            {levelFeature.features.map((feature, index) => (
                              <div
                                key={`level-${levelFeature.level}-${index}`}
                                style={{
                                  backgroundColor: isSelected
                                    ? theme.background
                                    : theme.backgroundAlt,
                                  border: `1px solid ${
                                    isSelected ? theme.success : theme.border
                                  }`,
                                  borderRadius: "8px",
                                  padding: "14px",
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                    marginBottom: "8px",
                                  }}
                                >
                                  <strong
                                    style={{
                                      color: isSelected
                                        ? theme.success
                                        : theme.text,
                                      fontSize: "14px",
                                      fontWeight: "600",
                                    }}
                                  >
                                    {feature.name}
                                  </strong>
                                </div>
                                <p
                                  style={{
                                    color: isSelected
                                      ? theme.text
                                      : theme.textSecondary,
                                    fontSize: "13px",
                                    lineHeight: "1.5",
                                    margin: 0,
                                  }}
                                >
                                  {feature.description}
                                </p>

                                {/* Display feature options if they exist */}
                                {feature.options && feature.options.length > 0 && (
                                  <div
                                    style={{
                                      marginTop: "12px",
                                      paddingTop: "12px",
                                      borderTop: `1px solid ${
                                        isSelected ? theme.border : theme.border + "80"
                                      }`,
                                    }}
                                  >
                                    <div
                                      style={{
                                        fontSize: "12px",
                                        fontWeight: "600",
                                        color: isSelected ? theme.success : theme.primary,
                                        marginBottom: "8px",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                      }}
                                    >
                                      <span>Choose one option:</span>
                                      {classFeatureChoices[feature.name] && (
                                        <span
                                          style={{
                                            fontSize: "11px",
                                            fontWeight: "500",
                                            color: theme.success,
                                            backgroundColor: `${theme.success}15`,
                                            padding: "2px 8px",
                                            borderRadius: "8px",
                                            border: `1px solid ${theme.success}50`,
                                          }}
                                        >
                                          ✓ Selected
                                        </span>
                                      )}
                                    </div>
                                    {feature.options.map((option, optIndex) => {
                                      const featureKey = `${classData.id}-${levelFeature.level}-${feature.name}`;
                                      const isFeatureExpanded = expandedFeatures.has(featureKey + '-' + optIndex);
                                      const isOptionSelected = classFeatureChoices[feature.name] === option.name;

                                      return (
                                        <div
                                          key={optIndex}
                                          style={{
                                            marginBottom: "8px",
                                            backgroundColor: isOptionSelected
                                              ? `${theme.success}10`
                                              : isSelected
                                              ? theme.backgroundAlt
                                              : theme.background,
                                            borderRadius: "6px",
                                            border: `2px solid ${
                                              isOptionSelected
                                                ? theme.success
                                                : theme.border
                                            }`,
                                            overflow: "hidden",
                                            transition: "all 0.2s",
                                          }}
                                        >
                                          <label
                                            style={{
                                              display: "flex",
                                              alignItems: "flex-start",
                                              padding: "10px",
                                              cursor: disabled ? "not-allowed" : "pointer",
                                            }}
                                            onClick={(e) => {
                                              if (e.target.tagName !== "INPUT") {
                                                handleFeatureOptionChange(feature.name, option.name);
                                              }
                                            }}
                                          >
                                            <input
                                              type="radio"
                                              name={`${classData.id}-${feature.name}`}
                                              value={option.name}
                                              checked={isOptionSelected}
                                              onChange={() => handleFeatureOptionChange(feature.name, option.name)}
                                              disabled={disabled}
                                              style={{
                                                width: "18px",
                                                height: "18px",
                                                marginRight: "10px",
                                                marginTop: "2px",
                                                cursor: disabled ? "not-allowed" : "pointer",
                                                accentColor: theme.success,
                                                flexShrink: 0,
                                              }}
                                            />
                                            <div style={{ flex: 1 }}>
                                              <div
                                                style={{
                                                  fontSize: "13px",
                                                  fontWeight: "600",
                                                  color: isOptionSelected
                                                    ? theme.success
                                                    : isSelected
                                                    ? theme.text
                                                    : theme.primary,
                                                  marginBottom: "4px",
                                                }}
                                              >
                                                {option.name}
                                              </div>
                                              <div
                                                style={{
                                                  fontSize: "12px",
                                                  color: theme.textSecondary,
                                                  lineHeight: "1.4",
                                                }}
                                              >
                                                {option.description}
                                              </div>
                                            </div>
                                          </label>
                                        </div>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Locked features */}
                    {lockedFeatures.length > 0 && (
                      <div
                        style={{
                          backgroundColor: theme.backgroundAlt,
                          border: `1px dashed ${theme.border}`,
                          borderRadius: "8px",
                          padding: "12px",
                          textAlign: "center",
                        }}
                      >
                        <div
                          style={{
                            color: theme.textSecondary,
                            fontSize: "14px",
                          }}
                        >
                          🔒 {lockedFeatures.length} feature level
                          {lockedFeatures.length > 1 ? "s" : ""} unlock at
                          higher character levels (
                          {lockedFeatures.map((lf) => lf.level).join(", ")})
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div style={styles.helpText}>
        Note: All characters also have the base Witch / Wizard class
        automatically. Choose a subclass to specialize your magical
        training.
        {selectedClass && (
          <span
            style={{
              display: "block",
              marginTop: "4px",
              fontStyle: "italic",
              color: theme.success,
            }}
          >
            Uncheck the selected class to see all available options again.
          </span>
        )}
      </div>
    </div>
  );
};

export default CustomClassSection;
