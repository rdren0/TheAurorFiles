import React, { useState, useMemo } from "react";
import { X, Book, Check, Search } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import {
  calculateWizardSpellsKnown,
  getAvailableWizardSpells,
  spellLevelToNumber,
} from "./wizardSpellUtils";

const WizardSpellSelectionModal = ({
  isOpen,
  onClose,
  character,
  spellsData,
  knownSpells = [],
  onSave,
}) => {
  const { theme } = useTheme();
  const [selectedSpells, setSelectedSpells] = useState(new Set(knownSpells));
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLevel, setFilterLevel] = useState("all");

  const maxSpells = calculateWizardSpellsKnown(character?.level || 1, character?.class);
  const availableSpells = useMemo(
    () => getAvailableWizardSpells(spellsData, character?.level || 1, character?.class),
    [spellsData, character?.level, character?.class]
  );

  const filteredSpells = useMemo(() => {
    return availableSpells.filter((spell) => {
      const matchesSearch =
        !searchTerm ||
        spell.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        spell.description?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesLevel =
        filterLevel === "all" || spell.spellLevel === parseInt(filterLevel);

      return matchesSearch && matchesLevel;
    });
  }, [availableSpells, searchTerm, filterLevel]);

  const toggleSpell = (spellName) => {
    const newSelected = new Set(selectedSpells);
    if (newSelected.has(spellName)) {
      newSelected.delete(spellName);
    } else {
      if (newSelected.size < maxSpells) {
        newSelected.add(spellName);
      }
    }
    setSelectedSpells(newSelected);
  };

  const handleSave = () => {
    onSave(Array.from(selectedSpells));
    onClose();
  };

  const getLevelOptions = () => {
    const levels = new Set();
    availableSpells.forEach((spell) => levels.add(spell.spellLevel));
    return Array.from(levels).sort((a, b) => a - b);
  };

  if (!isOpen) return null;

  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 10000,
      padding: "20px",
    },
    modal: {
      backgroundColor: theme.surface,
      borderRadius: "16px",
      border: `2px solid ${theme.border}`,
      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
      maxWidth: "900px",
      width: "100%",
      maxHeight: "90vh",
      display: "flex",
      flexDirection: "column",
    },
    header: {
      padding: "24px",
      borderBottom: `2px solid ${theme.border}`,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: theme.background,
      borderRadius: "16px 16px 0 0",
    },
    title: {
      fontSize: "20px",
      fontWeight: "700",
      color: theme.text,
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    closeButton: {
      background: "none",
      border: "none",
      padding: "8px",
      cursor: "pointer",
      borderRadius: "8px",
      transition: "background-color 0.2s",
      color: theme.textSecondary,
    },
    content: {
      flex: 1,
      overflow: "auto",
      padding: "24px",
    },
    counter: {
      padding: "16px",
      backgroundColor: `${theme.primary}15`,
      borderRadius: "8px",
      marginBottom: "16px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      border: `1px solid ${theme.primary}30`,
    },
    counterText: {
      fontSize: "16px",
      fontWeight: "600",
      color: theme.text,
    },
    counterNumbers: {
      fontSize: "20px",
      fontWeight: "700",
      color: theme.primary,
    },
    filters: {
      display: "flex",
      gap: "12px",
      marginBottom: "16px",
      flexWrap: "wrap",
    },
    searchBox: {
      flex: 1,
      minWidth: "200px",
      position: "relative",
    },
    searchInput: {
      width: "100%",
      padding: "10px 12px 10px 40px",
      borderRadius: "8px",
      border: `1px solid ${theme.border}`,
      backgroundColor: theme.background,
      color: theme.text,
      fontSize: "14px",
    },
    searchIcon: {
      position: "absolute",
      left: "12px",
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
    },
    select: {
      padding: "10px 12px",
      borderRadius: "8px",
      border: `1px solid ${theme.border}`,
      backgroundColor: theme.background,
      color: theme.text,
      fontSize: "14px",
      minWidth: "150px",
    },
    spellGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: "12px",
    },
    spellCard: {
      padding: "16px",
      backgroundColor: theme.background,
      border: `2px solid ${theme.border}`,
      borderRadius: "8px",
      cursor: "pointer",
      transition: "all 0.2s ease",
      position: "relative",
    },
    spellCardSelected: {
      borderColor: theme.primary,
      backgroundColor: `${theme.primary}10`,
    },
    spellCardDisabled: {
      opacity: 0.5,
      cursor: "not-allowed",
    },
    spellName: {
      fontSize: "16px",
      fontWeight: "600",
      color: theme.text,
      marginBottom: "4px",
    },
    spellMeta: {
      fontSize: "12px",
      color: theme.textSecondary,
      marginBottom: "8px",
    },
    spellDescription: {
      fontSize: "13px",
      color: theme.textSecondary,
      lineHeight: "1.4",
      display: "-webkit-box",
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    },
    checkmark: {
      position: "absolute",
      top: "12px",
      right: "12px",
      width: "24px",
      height: "24px",
      borderRadius: "50%",
      backgroundColor: theme.primary,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    footer: {
      padding: "20px 24px",
      borderTop: `2px solid ${theme.border}`,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: theme.background,
      borderRadius: "0 0 16px 16px",
    },
    button: {
      padding: "12px 24px",
      borderRadius: "8px",
      fontSize: "14px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.2s ease",
      border: "none",
    },
    cancelButton: {
      backgroundColor: "transparent",
      color: theme.textSecondary,
      border: `2px solid ${theme.border}`,
    },
    saveButton: {
      backgroundColor: theme.primary,
      color: "white",
    },
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div style={styles.header}>
          <div style={styles.title}>
            <Book size={24} color={theme.primary} />
            Select Known Spells
          </div>
          <button
            style={styles.closeButton}
            onClick={onClose}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `${theme.textSecondary}15`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            <X size={20} />
          </button>
        </div>

        <div style={styles.content}>
          <div style={styles.counter}>
            <span style={styles.counterText}>
              Selected Spells (Level {character?.level || 1} Investigator)
            </span>
            <span style={styles.counterNumbers}>
              {selectedSpells.size} / {maxSpells}
            </span>
          </div>

          <div style={styles.filters}>
            <div style={styles.searchBox}>
              <Search
                size={16}
                color={theme.textSecondary}
                style={styles.searchIcon}
              />
              <input
                type="text"
                placeholder="Search spells..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={styles.searchInput}
              />
            </div>
            <select
              value={filterLevel}
              onChange={(e) => setFilterLevel(e.target.value)}
              style={styles.select}
            >
              <option value="all">All Levels</option>
              {getLevelOptions().map((level) => (
                <option key={level} value={level}>
                  {level === 0 ? "Cantrips" : `Level ${level}`}
                </option>
              ))}
            </select>
          </div>

          <div style={styles.spellGrid}>
            {filteredSpells.map((spell) => {
              const isSelected = selectedSpells.has(spell.name);
              const isDisabled =
                !isSelected && selectedSpells.size >= maxSpells;

              return (
                <div
                  key={spell.name}
                  style={{
                    ...styles.spellCard,
                    ...(isSelected ? styles.spellCardSelected : {}),
                    ...(isDisabled ? styles.spellCardDisabled : {}),
                  }}
                  onClick={() => !isDisabled && toggleSpell(spell.name)}
                  onMouseEnter={(e) => {
                    if (!isDisabled) {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 12px rgba(0,0,0,0.1)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {isSelected && (
                    <div style={styles.checkmark}>
                      <Check size={16} color="white" />
                    </div>
                  )}
                  <div style={styles.spellName}>{spell.name}</div>
                  <div style={styles.spellMeta}>
                    {spell.levelName} • {spell.category}
                  </div>
                  <div style={styles.spellDescription}>
                    {spell.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={styles.footer}>
          <button
            style={{ ...styles.button, ...styles.cancelButton }}
            onClick={onClose}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `${theme.textSecondary}10`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Cancel
          </button>
          <button
            style={{ ...styles.button, ...styles.saveButton }}
            onClick={handleSave}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.9";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
            Save Selection ({selectedSpells.size} spells)
          </button>
        </div>
      </div>
    </div>
  );
};

export default WizardSpellSelectionModal;
