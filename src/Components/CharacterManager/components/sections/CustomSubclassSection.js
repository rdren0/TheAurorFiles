import React, { useState, useEffect, useMemo } from "react";
import { useTheme } from "../../../../contexts/ThemeContext";
import { createBackgroundStyles } from "../../../../styles/masterStyles";
import { getCustomClasses, getCustomClassDetails } from "../../../../SharedData/customClassesData";

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
      if (!classData || !classData.level_features) return;

      classData.level_features.forEach((levelFeature) => {
        levelFeature.features.forEach((feature) => {
          if (feature.options && feature.options.length > 0) {
            // This is a subclass/specialization choice
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

  const minSubclassLevel = accessibleSubclasses.length > 0
    ? Math.min(...accessibleSubclasses.map((sc) => sc.level))
    : 3;

  // If no class selected, show message
  if (!characterClass) {
    return (
      <div style={styles.fieldContainer}>
        <h3 style={styles.skillsHeader}>Class Specialization</h3>
        <div style={styles.helpText}>
          Please select a profession class first to view available specializations.
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
        {characterLevel < minSubclassLevel && accessibleSubclasses.length === 0 && (
          <span style={{ display: "block", marginTop: "4px", color: theme.warning }}>
            ⚠️ Specializations become available at level {minSubclassLevel}.
            Your character is currently level {characterLevel}.
          </span>
        )}
        {accessibleSubclasses.length > 0 && (
          <span style={{ display: "block", marginTop: "4px", fontStyle: "italic" }}>
            Character Level {characterLevel}: {accessibleSubclasses.length} specialization
            {accessibleSubclasses.length > 1 ? "s" : ""} available.
          </span>
        )}
      </div>

      {hasSelectedSubclass === 1 && (
        <div style={styles.completionMessage}>
          ✓ Specialization selected: {
            accessibleSubclasses.find((sc) => sc.id === selectedSubclass)?.name || selectedSubclass
          }
        </div>
      )}

      <div style={styles.availableElementsSection}>
        <div style={styles.availableElementsContainer}>
          {/* Show accessible subclasses for the selected class */}
          {accessibleSubclasses.map((subclass) => {
            const isSelected = selectedSubclass === subclass.id;
            const isExpanded = expandedSubclasses.has(subclass.id);

            return (
              <div key={subclass.id} style={styles.featCard}>
                <div style={styles.featHeader}>
                  <label style={styles.featLabelClickable}>
                    <input
                      type="checkbox"
                      name="subclass"
                      value={subclass.id}
                      checked={isSelected}
                      onChange={() => handleSubclassToggle(subclass.id)}
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
                      {subclass.name}
                      <span
                        style={{
                          ...styles.availableChoicesIndicator,
                          marginLeft: "8px",
                        }}
                      >
                        (Level {subclass.level})
                      </span>
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
                    {subclass.features.map((feature, index) => (
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
                )}
              </div>
            );
          })}

          {/* Show locked subclasses when a class is selected */}
          {characterClass && lockedSubclasses.length > 0 && (
            <>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: theme.textSecondary,
                  marginTop: "16px",
                  marginBottom: "8px",
                }}
              >
                Locked Specializations
              </div>
              {lockedSubclasses.map((subclass) => (
                <div key={subclass.id} style={styles.featCard}>
                  <div style={styles.featHeader}>
                    <span
                      style={{
                        ...styles.featName,
                        color: theme.textSecondary,
                      }}
                    >
                      {subclass.name}
                      <span
                        style={{
                          ...styles.availableChoicesIndicator,
                          marginLeft: "8px",
                        }}
                      >
                        (Level {subclass.level})
                      </span>
                    </span>
                  </div>
                  <div
                    style={{
                      ...styles.featPreview,
                      color: theme.textSecondary,
                    }}
                  >
                    🔒 Unlocks when character reaches Level {subclass.level}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      <div style={styles.helpText}>
        Note: Specialization is optional and represents your character's focused
        training path within their chosen profession.
        {selectedSubclass && (
          <span
            style={{
              display: "block",
              marginTop: "4px",
              fontStyle: "italic",
              color: theme.success,
            }}
          >
            Uncheck the selected specialization to see all available options again.
          </span>
        )}
      </div>
    </div>
  );
};

export default CustomSubclassSection;
