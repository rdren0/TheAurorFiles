import React, { useState, useEffect } from "react";
import { useTheme } from "../../../../../contexts/ThemeContext";
import { fetchAllClasses, fetchClassDetails } from "../../../../../services/classService";

const ClassSelector = ({ value, onChange, disabled = false }) => {
  const { theme } = useTheme();
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [classDetails, setClassDetails] = useState(null);

  useEffect(() => {
    loadClasses();
  }, []);

  useEffect(() => {
    if (value) {
      loadClassDetails(value);
    } else {
      setClassDetails(null);
    }
  }, [value]);

  const loadClasses = async () => {
    try {
      setLoading(true);
      // Only fetch custom classes, not D&D 5e classes
      const data = await fetchAllClasses({ includeCustom: true, includeDnD: false });
      setClasses(data);
      setError(null);
    } catch (err) {
      setError("Failed to load classes");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const loadClassDetails = async (classIndex) => {
    try {
      const details = await fetchClassDetails(classIndex);
      setClassDetails(details);
    } catch (err) {
      console.error("Failed to load class details:", err);
    }
  };

  const styles = {
    container: {
      marginBottom: "20px",
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
    detailsCard: {
      marginTop: "12px",
      padding: "16px",
      backgroundColor: theme.background,
      border: `1px solid ${theme.border}`,
      borderRadius: "6px",
    },
    detailsTitle: {
      fontSize: "16px",
      fontWeight: "700",
      color: theme.text,
      marginBottom: "8px",
      fontFamily: "'Courier New', monospace",
      textTransform: "uppercase",
    },
    detailsText: {
      fontSize: "13px",
      color: theme.textSecondary,
      lineHeight: "1.6",
      marginBottom: "12px",
      fontFamily: "'Courier New', monospace",
    },
    stat: {
      display: "inline-block",
      marginRight: "16px",
      fontSize: "13px",
      color: theme.text,
      fontFamily: "'Courier New', monospace",
    },
    statLabel: {
      fontWeight: "600",
      color: theme.primary,
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

  if (loading) {
    return (
      <div style={styles.container}>
        <label style={styles.label}>Class</label>
        <div style={styles.loading}>Loading classes...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.container}>
        <label style={styles.label}>Class</label>
        <div style={styles.error}>{error}</div>
        <button
          onClick={loadClasses}
          style={{
            marginTop: "8px",
            padding: "6px 12px",
            backgroundColor: theme.primary,
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "13px",
            fontFamily: "'Courier New', monospace",
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <label style={styles.label}>Class</label>
      <select
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        style={styles.select}
      >
        <option value="">Select a class...</option>
        {classes
          .filter((cls) => cls.index !== "base_witch_wizard")
          .map((cls) => (
            <option key={cls.index} value={cls.index}>
              {cls.name}
            </option>
          ))}
      </select>

      {classDetails && (
        <div style={styles.detailsCard}>
          <div style={styles.detailsTitle}>
            {classDetails.name}
          </div>

          {classDetails.description && (
            <div style={styles.detailsText}>{classDetails.description}</div>
          )}

          <div>
            <span style={styles.stat}>
              <span style={styles.statLabel}>Hit Die:</span> {classDetails.hit_die || `d${classDetails.hit_die}`}
            </span>

            {/* Custom class spellcasting */}
            {classDetails.spellcasting?.casting_ability_choice && (
              <span style={styles.stat}>
                <span style={styles.statLabel}>Spellcasting Ability:</span>{" "}
                {classDetails.spellcasting.casting_ability_choice.join(" / ")}
              </span>
            )}

            {/* D&D class spellcasting */}
            {classDetails.spellcasting?.spellcasting_ability && (
              <span style={styles.stat}>
                <span style={styles.statLabel}>Spellcasting Ability:</span>{" "}
                {classDetails.spellcasting.spellcasting_ability?.name || "Intelligence"}
              </span>
            )}
          </div>

          {/* Custom class primary abilities */}
          {classDetails.primary_abilities && classDetails.primary_abilities.length > 0 && (
            <div style={styles.detailsText}>
              <span style={styles.statLabel}>Primary Abilities:</span>{" "}
              {classDetails.primary_abilities.join(", ")}
            </div>
          )}

          {/* D&D class proficiencies */}
          {classDetails.proficiencies && classDetails.proficiencies.length > 0 && (
            <div style={styles.detailsText}>
              <span style={styles.statLabel}>Proficiencies:</span>{" "}
              {classDetails.proficiencies.map((p) => p.name || p).join(", ")}
            </div>
          )}

          {/* Custom class skill choices */}
          {classDetails.skill_choices && (
            <div style={styles.detailsText}>
              <span style={styles.statLabel}>Skills:</span> Choose {classDetails.skill_choices.choose} from{" "}
              {classDetails.skill_choices.options.join(", ")}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ClassSelector;
