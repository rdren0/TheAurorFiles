import React, { useState, useEffect } from "react";
import { useTheme } from "../../../../../contexts/ThemeContext";
import { getCustomClassDetails } from "../../../../../SharedData/customClassesData";
import { fetchSubclassesForClass, fetchSubclassDetails } from "../../../../../services/classService";

const SubclassSelector = ({ character, onChange, disabled = false }) => {
  const { theme } = useTheme();
  const [subclasses, setSubclasses] = useState([]);
  const [subclassDetails, setSubclassDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [expandedSubclass, setExpandedSubclass] = useState(null);

  const characterClass = character?.class || "";
  const characterLevel = character?.level || 1;
  const selectedSubclass = character?.subclass || "";

  // Check if this is a custom class
  const customClassData = getCustomClassDetails(characterClass);
  const isCustomClass = !!customClassData;

  useEffect(() => {
    const loadSubclasses = async () => {
      if (!characterClass) {
        setSubclasses([]);
        return;
      }

      setLoading(true);
      try {
        if (isCustomClass) {
          // Handle custom class subclasses from level_features
          const customSubclasses = [];

          if (customClassData.level_features) {
            customClassData.level_features.forEach((levelFeature) => {
              levelFeature.features.forEach((feature) => {
                if (feature.options && feature.options.length > 0) {
                  // This is a subclass/branch choice
                  feature.options.forEach((option) => {
                    customSubclasses.push({
                      index: option.name.toLowerCase().replace(/\s+/g, "_"),
                      name: option.name,
                      level: levelFeature.level,
                      description: option.features ? option.features.map(f => f.name).join(", ") : "",
                      features: option.features || [],
                      isCustom: true
                    });
                  });
                }
              });
            });
          }

          setSubclasses(customSubclasses);
        } else {
          // Fetch D&D 5e subclasses from API
          const dndSubclasses = await fetchSubclassesForClass(characterClass);
          setSubclasses(dndSubclasses || []);
        }
      } catch (error) {
        console.error("Error loading subclasses:", error);
        setSubclasses([]);
      } finally {
        setLoading(false);
      }
    };

    loadSubclasses();
  }, [characterClass, isCustomClass, customClassData]);

  useEffect(() => {
    const loadSubclassDetails = async () => {
      if (!selectedSubclass) {
        setSubclassDetails(null);
        return;
      }

      try {
        if (isCustomClass) {
          // Find the selected custom subclass details
          const selected = subclasses.find(sc => sc.index === selectedSubclass || sc.name === selectedSubclass);
          setSubclassDetails(selected || null);
        } else {
          // Fetch D&D 5e subclass details
          const details = await fetchSubclassDetails(characterClass, selectedSubclass);
          setSubclassDetails(details);
        }
      } catch (error) {
        console.error("Error loading subclass details:", error);
        setSubclassDetails(null);
      }
    };

    loadSubclassDetails();
  }, [selectedSubclass, characterClass, isCustomClass, subclasses]);

  // Determine minimum level for subclass selection
  const minSubclassLevel = isCustomClass
    ? (subclasses.length > 0 ? Math.min(...subclasses.map(sc => sc.level || 3)) : 3)
    : 3;

  const canSelectSubclass = characterLevel >= minSubclassLevel;

  const handleSubclassChange = (subclassValue) => {
    onChange("subclass", subclassValue);
  };

  const toggleExpansion = (subclassIndex) => {
    setExpandedSubclass(expandedSubclass === subclassIndex ? null : subclassIndex);
  };

  const styles = {
    container: {
      marginBottom: "16px",
    },
    label: {
      display: "block",
      fontSize: "14px",
      fontWeight: "600",
      color: theme.text,
      marginBottom: "8px",
    },
    select: {
      width: "100%",
      padding: "10px 12px",
      fontSize: "14px",
      color: theme.text,
      backgroundColor: theme.surface,
      border: `1px solid ${theme.border}`,
      borderRadius: "6px",
      outline: "none",
      cursor: disabled || !canSelectSubclass ? "not-allowed" : "pointer",
      opacity: disabled || !canSelectSubclass ? 0.6 : 1,
    },
    helpText: {
      fontSize: "12px",
      color: theme.textSecondary,
      marginTop: "6px",
      fontStyle: "italic",
    },
    warningText: {
      fontSize: "12px",
      color: theme.warning,
      marginTop: "6px",
      padding: "8px",
      backgroundColor: `${theme.warning}15`,
      borderRadius: "4px",
      border: `1px solid ${theme.warning}`,
    },
    subclassCard: {
      marginTop: "12px",
      padding: "12px",
      backgroundColor: theme.surface,
      border: `1px solid ${theme.border}`,
      borderRadius: "8px",
    },
    subclassHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "8px",
      cursor: "pointer",
    },
    subclassName: {
      fontSize: "14px",
      fontWeight: "600",
      color: theme.primary,
    },
    subclassLevel: {
      fontSize: "12px",
      color: theme.textSecondary,
    },
    expandButton: {
      background: "none",
      border: "none",
      color: theme.primary,
      cursor: "pointer",
      fontSize: "16px",
      padding: "4px 8px",
    },
    featureList: {
      marginTop: "8px",
      paddingLeft: "16px",
    },
    featureItem: {
      fontSize: "13px",
      color: theme.text,
      marginBottom: "6px",
    },
    featureName: {
      fontWeight: "600",
      color: theme.primary,
    },
    featureDescription: {
      color: theme.textSecondary,
      marginLeft: "4px",
    },
  };

  if (!characterClass) {
    return (
      <div style={styles.container}>
        <label style={styles.label}>Subclass</label>
        <div style={styles.helpText}>
          Please select a class first to view available subclasses.
        </div>
      </div>
    );
  }

  if (!canSelectSubclass) {
    return (
      <div style={styles.container}>
        <label style={styles.label}>Subclass</label>
        <div style={styles.warningText}>
          Subclasses become available at level {minSubclassLevel}.
          Your character is currently level {characterLevel}.
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div style={styles.container}>
        <label style={styles.label}>Subclass</label>
        <div style={styles.helpText}>Loading subclasses...</div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <label style={styles.label}>
        Subclass {selectedSubclass ? "(Selected)" : "(Optional)"}
      </label>

      <select
        value={selectedSubclass}
        onChange={(e) => handleSubclassChange(e.target.value)}
        style={styles.select}
        disabled={disabled || !canSelectSubclass}
      >
        <option value="">Select a subclass (optional)...</option>

        {isCustomClass && subclasses.length > 0 && (
          <optgroup label={`━━ ${customClassData.name} Specializations ━━`}>
            {subclasses.map((subclass) => (
              <option key={subclass.index} value={subclass.index}>
                {subclass.name} (Level {subclass.level})
              </option>
            ))}
          </optgroup>
        )}

        {!isCustomClass && subclasses.length > 0 && (
          <>
            {subclasses.map((subclass) => (
              <option key={subclass.index} value={subclass.index}>
                {subclass.name}
              </option>
            ))}
          </>
        )}
      </select>

      {subclasses.length === 0 && (
        <div style={styles.helpText}>
          No subclasses available for this class at your current level.
        </div>
      )}

      {selectedSubclass && subclassDetails && (
        <div style={styles.subclassCard}>
          <div
            style={styles.subclassHeader}
            onClick={() => toggleExpansion(selectedSubclass)}
          >
            <div>
              <div style={styles.subclassName}>{subclassDetails.name}</div>
              {subclassDetails.level && (
                <div style={styles.subclassLevel}>
                  Available at Level {subclassDetails.level}
                </div>
              )}
            </div>
            <button
              style={styles.expandButton}
              type="button"
            >
              {expandedSubclass === selectedSubclass ? "▲" : "▼"}
            </button>
          </div>

          {expandedSubclass === selectedSubclass && (
            <div style={styles.featureList}>
              {isCustomClass && subclassDetails.features && (
                <>
                  {subclassDetails.features.map((feature, index) => (
                    <div key={index} style={styles.featureItem}>
                      <span style={styles.featureName}>{feature.name}:</span>
                      <span style={styles.featureDescription}>
                        {feature.description}
                      </span>
                    </div>
                  ))}
                </>
              )}

              {!isCustomClass && subclassDetails.desc && (
                <div style={styles.featureItem}>
                  {subclassDetails.desc.join(" ")}
                </div>
              )}

              {!isCustomClass && subclassDetails.spells && (
                <div style={styles.featureItem}>
                  <span style={styles.featureName}>Spells:</span>
                  <span style={styles.featureDescription}>
                    {subclassDetails.spells.map(s => s.spell?.name).join(", ")}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {!selectedSubclass && subclasses.length > 0 && (
        <div style={styles.helpText}>
          {isCustomClass
            ? `Choose your ${customClassData.name} specialization path.`
            : "Choose your character's subclass to specialize their abilities."}
        </div>
      )}
    </div>
  );
};

export default SubclassSelector;
