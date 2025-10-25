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
      {hasSelectedClass === 1 && (
        <div style={styles.completionMessage}>
          ✓ Class selected:{" "}
          {availableClasses.find((cls) => cls.id === selectedClass)?.name ||
            selectedClass}
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

                    {/* Accessible features - Card layout */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                        gap: "12px",
                        marginBottom: "16px",
                      }}
                    >
                      {accessibleFeatures.map((levelFeature) =>
                        levelFeature.features.map((feature, index) => (
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
                              padding: "12px",
                              transition: "transform 0.2s, box-shadow 0.2s",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform =
                                "translateY(-2px)";
                              e.currentTarget.style.boxShadow = `0 4px 12px ${theme.shadowColor}40`;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform =
                                "translateY(0)";
                              e.currentTarget.style.boxShadow = "none";
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
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
                              <span
                                style={{
                                  backgroundColor: isSelected
                                    ? theme.success
                                    : theme.primary,
                                  color: theme.background,
                                  padding: "2px 8px",
                                  borderRadius: "12px",
                                  fontSize: "12px",
                                  fontWeight: "500",
                                }}
                              >
                                Lv {levelFeature.level}
                              </span>
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
                          </div>
                        ))
                      )}
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
        automatically. Choose a profession class to specialize your magical
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
