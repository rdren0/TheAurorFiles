import React, { useState, useEffect, useMemo } from "react";
import { useTheme } from "../../../../contexts/ThemeContext";
import { createBackgroundStyles } from "../../../../styles/masterStyles";
import { getCustomClasses, getCustomClassDetails } from "../../../../SharedData/customClassesData";

const CustomClassSection = ({ character, onChange, disabled = false }) => {
  const { theme } = useTheme();
  const styles = createBackgroundStyles(theme);
  const [expandedClasses, setExpandedClasses] = useState(new Set());

  const selectedClass = character?.class || "";

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

  const hasSelectedClass = selectedClass ? 1 : 0;

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
      <h3 style={styles.skillsHeader}>
        Profession Class ({hasSelectedClass}/1 selected)
      </h3>

      <div style={styles.helpText}>
        Choose your character's profession class. Each class represents a specialized magical career path.
        <span style={{ display: "block", marginTop: "4px", fontStyle: "italic" }}>
          Showing {availableClasses.length} available profession classes.
        </span>
      </div>

      {hasSelectedClass === 1 && (
        <div style={styles.completionMessage}>
          ✓ Class selected: {
            availableClasses.find((cls) => cls.id === selectedClass)?.name || selectedClass
          }
        </div>
      )}

      <div style={styles.availableElementsSection}>
        <div style={styles.availableElementsContainer}>
          {availableClasses.map((classData) => {
            const isSelected = selectedClass === classData.id;
            const isExpanded = expandedClasses.has(classData.id);
            const accessibleFeatures = getAccessibleFeatures(classData, character?.level || 1);
            const lockedFeatures = getLockedFeatures(classData, character?.level || 1);

            return (
              <div key={classData.id} style={styles.featCard}>
                <div style={styles.featHeader}>
                  <label style={styles.featLabelClickable}>
                    <input
                      type="checkbox"
                      name="class"
                      value={classData.id}
                      checked={isSelected}
                      onChange={() => handleClassToggle(classData.id)}
                      disabled={disabled}
                      style={{
                        width: "18px",
                        height: "18px",
                        marginRight: "8px",
                        cursor: disabled ? "not-allowed" : "pointer",
                        accentColor: theme.primary,
                        transform: "scale(1.2)",
                      }}
                    />
                    <span style={styles.featName}>
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
                    {/* Class basics */}
                    <div
                      style={
                        isSelected
                          ? styles.singleFeatureSelected
                          : styles.singleFeature
                      }
                    >
                      <div style={{ marginBottom: "8px" }}>
                        <strong
                          style={
                            isSelected
                              ? styles.featureNameSelected
                              : styles.featureName
                          }
                        >
                          Hit Die:
                        </strong>
                        <span
                          style={
                            isSelected
                              ? styles.featureDescriptionSelected
                              : styles.featureDescription
                          }
                        >
                          {" "}{classData.hit_die}
                        </span>
                      </div>

                      {classData.primary_abilities && (
                        <div style={{ marginBottom: "8px" }}>
                          <strong
                            style={
                              isSelected
                                ? styles.featureNameSelected
                                : styles.featureName
                            }
                          >
                            Primary Abilities:
                          </strong>
                          <span
                            style={
                              isSelected
                                ? styles.featureDescriptionSelected
                                : styles.featureDescription
                            }
                          >
                            {" "}{classData.primary_abilities.join(", ")}
                          </span>
                        </div>
                      )}

                      {classData.saving_throws && (
                        <div style={{ marginBottom: "8px" }}>
                          <strong
                            style={
                              isSelected
                                ? styles.featureNameSelected
                                : styles.featureName
                            }
                          >
                            Saving Throws:
                          </strong>
                          <span
                            style={
                              isSelected
                                ? styles.featureDescriptionSelected
                                : styles.featureDescription
                            }
                          >
                            {" "}{classData.saving_throws.join(", ")}
                          </span>
                        </div>
                      )}

                      {classData.skill_choices && (
                        <div style={{ marginBottom: "8px" }}>
                          <strong
                            style={
                              isSelected
                                ? styles.featureNameSelected
                                : styles.featureName
                            }
                          >
                            Skills:
                          </strong>
                          <span
                            style={
                              isSelected
                                ? styles.featureDescriptionSelected
                                : styles.featureDescription
                            }
                          >
                            {" "}Choose {classData.skill_choices.choose} from{" "}
                            {classData.skill_choices.options.join(", ")}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Accessible features */}
                    {accessibleFeatures.map((levelFeature) => (
                      <div
                        key={`level-${levelFeature.level}`}
                        style={styles.featureContainer}
                      >
                        <h5
                          style={
                            isSelected
                              ? styles.levelHeaderSelected
                              : styles.levelHeader
                          }
                        >
                          Level {levelFeature.level} Features:
                        </h5>
                        {levelFeature.features.map((feature, index) => (
                          <div
                            key={index}
                            style={
                              isSelected
                                ? styles.singleFeatureSelected
                                : styles.singleFeature
                            }
                          >
                            <strong
                              style={
                                isSelected
                                  ? styles.featureNameSelected
                                  : styles.featureName
                              }
                            >
                              {feature.name}:
                            </strong>
                            <p
                              style={
                                isSelected
                                  ? styles.featureDescriptionSelected
                                  : styles.featureDescription
                              }
                            >
                              {feature.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    ))}

                    {/* Locked features */}
                    {lockedFeatures.length > 0 && (
                      <div style={styles.lockedFeature}>
                        <h5
                          style={{
                            ...styles.levelHeader,
                            color: theme.textSecondary,
                          }}
                        >
                          Higher Level Features (Locked):
                        </h5>
                        <div style={styles.lockedContainer}>
                          🔒 {lockedFeatures.length} feature level
                          {lockedFeatures.length > 1 ? "s" : ""} unlock at higher
                          character levels (
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
        Note: All characters also have the base Witch / Wizard class automatically.
        Choose a profession class to specialize your magical training.
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
