import React, { useState, useEffect } from "react";
import { useTheme } from "../../../../contexts/ThemeContext";
import {
  fetchSubclassesForClass,
  fetchSubclassDetails,
} from "../../../../services/dnd5eApiService";

const SubclassSectionDnD = ({ character, onChange, disabled = false }) => {
  const { theme } = useTheme();
  const [subclasses, setSubclasses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [subclassDetails, setSubclassDetails] = useState(null);

  const characterClass = character?.class || "";
  const selectedSubclass = character?.subclass || "";
  const characterLevel = character?.level || 1;

  useEffect(() => {
    if (characterClass) {
      loadSubclasses(characterClass);
    } else {
      setSubclasses([]);
      setSubclassDetails(null);
    }
  }, [characterClass]);

  useEffect(() => {
    if (selectedSubclass) {
      loadSubclassDetails(selectedSubclass);
    } else {
      setSubclassDetails(null);
    }
  }, [selectedSubclass]);

  const loadSubclasses = async (classIndex) => {
    try {
      setLoading(true);
      const data = await fetchSubclassesForClass(classIndex);
      setSubclasses(data);
      setError(null);
    } catch (err) {
      setError("Failed to load subclasses");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const loadSubclassDetails = async (subclassIndex) => {
    try {
      const details = await fetchSubclassDetails(subclassIndex);
      setSubclassDetails(details);
    } catch (err) {
      console.error("Failed to load subclass details:", err);
    }
  };

  const styles = {
    container: {
      marginBottom: "24px",
    },
    label: {
      display: "block",
      marginBottom: "8px",
      fontWeight: "600",
      color: theme.text,
      fontSize: "14px",
      fontFamily: "'Courier New', monospace",
    },
    select: {
      width: "100%",
      padding: "10px 12px",
      border: `1px solid ${theme.border}`,
      borderRadius: "6px",
      backgroundColor: theme.surface,
      color: theme.text,
      fontSize: "14px",
      fontFamily: "'Courier New', monospace",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.6 : 1,
      transition: "all 0.2s ease",
    },
    info: {
      padding: "12px 16px",
      backgroundColor: theme.background,
      border: `1px solid ${theme.border}`,
      borderRadius: "6px",
      fontSize: "13px",
      color: theme.textSecondary,
      marginBottom: "12px",
      fontFamily: "'Courier New', monospace",
    },
    detailsCard: {
      marginTop: "16px",
      padding: "16px",
      backgroundColor: theme.background,
      border: `1px solid ${theme.border}`,
      borderRadius: "6px",
    },
    detailsTitle: {
      fontSize: "16px",
      fontWeight: "700",
      color: theme.text,
      marginBottom: "12px",
      fontFamily: "'Courier New', monospace",
      textTransform: "uppercase",
    },
    description: {
      fontSize: "13px",
      color: theme.textSecondary,
      lineHeight: "1.6",
      marginBottom: "12px",
      fontFamily: "'Courier New', monospace",
    },
    featureSection: {
      marginTop: "12px",
      paddingTop: "12px",
      borderTop: `1px solid ${theme.border}`,
    },
    featureTitle: {
      fontSize: "14px",
      fontWeight: "600",
      color: theme.primary,
      marginBottom: "8px",
      fontFamily: "'Courier New', monospace",
    },
    featureText: {
      fontSize: "13px",
      color: theme.text,
      lineHeight: "1.5",
      fontFamily: "'Courier New', monospace",
    },
    error: {
      color: "#ff4757",
      fontSize: "13px",
      marginTop: "8px",
      fontFamily: "'Courier New', monospace",
    },
    loading: {
      color: theme.textSecondary,
      fontSize: "13px",
      fontStyle: "italic",
      fontFamily: "'Courier New', monospace",
    },
  };

  if (!characterClass) {
    return (
      <div style={styles.container}>
        <label style={styles.label}>Subclass</label>
        <div style={styles.info}>
          Please select a class first before choosing a subclass.
        </div>
      </div>
    );
  }

  if (characterLevel < 3) {
    return (
      <div style={styles.container}>
        <label style={styles.label}>Subclass</label>
        <div style={styles.info}>
          Subclasses become available at level 3.
          <br />
          Current level: {characterLevel}
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div style={styles.container}>
        <label style={styles.label}>Subclass</label>
        <div style={styles.loading}>Loading subclasses...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.container}>
        <label style={styles.label}>Subclass</label>
        <div style={styles.error}>{error}</div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <label style={styles.label}>Subclass</label>
      <select
        value={selectedSubclass || ""}
        onChange={(e) => onChange("subclass", e.target.value)}
        disabled={disabled}
        style={styles.select}
      >
        <option value="">Select a subclass...</option>
        {subclasses.map((subclass) => (
          <option key={subclass.index} value={subclass.index}>
            {subclass.name}
          </option>
        ))}
      </select>

      {subclassDetails && (
        <div style={styles.detailsCard}>
          <div style={styles.detailsTitle}>{subclassDetails.name}</div>
          <div style={styles.description}>
            {subclassDetails.desc?.join(" ") || "A specialized path for your class."}
          </div>

          {subclassDetails.subclass_flavor && (
            <div style={styles.featureSection}>
              <div style={styles.featureTitle}>
                {subclassDetails.subclass_flavor}
              </div>
            </div>
          )}

          {subclassDetails.spells && subclassDetails.spells.length > 0 && (
            <div style={styles.featureSection}>
              <div style={styles.featureTitle}>Subclass Spells</div>
              <div style={styles.featureText}>
                This subclass grants additional spell options.
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SubclassSectionDnD;
