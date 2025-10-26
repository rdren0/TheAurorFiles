import React, { useState, useEffect } from "react";
import {
  Eye,
  EyeOff,
  Users,
  Search,
  X,
  CheckSquare,
  Square,
  Filter,
  GraduationCap,
  UserCheck,
  Loader,
  AlertCircle,
  Save,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { ALL_CHARACTERS } from "../SharedData/charactersData";

const NPCVisibilityManager = ({ supabase }) => {
  const { theme } = useTheme();
  const [characters, setCharacters] = useState([]);
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [visibilityData, setVisibilityData] = useState({});
  const [npcSearchTerm, setNpcSearchTerm] = useState("");
  const [characterSearchTerm, setCharacterSearchTerm] = useState("");
  const [selectedCase, setSelectedCase] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState("reveal");
  const [selectedCharacterForView, setSelectedCharacterForView] =
    useState(null);

  const cases = [
    "all",
    ...new Set(ALL_CHARACTERS.map((npc) => npc.case_name).filter(Boolean)),
  ];
  const types = ["all", ...new Set(ALL_CHARACTERS.map((npc) => npc.type))];

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data: charactersData, error: charError } = await supabase
        .from("characters")
        .select("*")
        .order("name");

      if (charError) throw charError;

      setCharacters(charactersData || []);

      const { data: visibilityData, error: visError } = await supabase
        .from("character_npc_visibility")
        .select("*");

      if (visError) throw visError;

      const visibilityMap = {};
      (visibilityData || []).forEach((vis) => {
        if (!visibilityMap[vis.character_id]) {
          visibilityMap[vis.character_id] = new Set();
        }
        visibilityMap[vis.character_id].add(vis.npc_name);
      });

      setVisibilityData(visibilityMap);
    } catch (err) {
      console.error("Error loading data:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleCharacterSelection = (characterId) => {
    setSelectedCharacters((prev) =>
      prev.includes(characterId)
        ? prev.filter((id) => id !== characterId)
        : [...prev, characterId]
    );
  };

  const selectAllCharacters = () => {
    const filtered = getFilteredCharacters();
    setSelectedCharacters(filtered.map((c) => c.id));
  };

  const deselectAllCharacters = () => {
    setSelectedCharacters([]);
  };

  const getFilteredCharacters = () => {
    return characters.filter((char) =>
      char.name.toLowerCase().includes(characterSearchTerm.toLowerCase())
    );
  };

  const getFilteredNPCs = () => {
    return ALL_CHARACTERS.filter((npc) => {
      const matchesSearch = npc.name
        .toLowerCase()
        .includes(npcSearchTerm.toLowerCase());
      const matchesCase =
        selectedCase === "all" || npc.case_name === selectedCase;
      const matchesType = selectedType === "all" || npc.type === selectedType;

      return matchesSearch && matchesCase && matchesType;
    });
  };

  const isNPCVisibleToCharacter = (characterId, npcName) => {
    return visibilityData[characterId]?.has(npcName) || false;
  };

  const revealNPCToCharacters = async (npcName, npc) => {
    if (selectedCharacters.length === 0) {
      alert("Please select at least one character");
      return;
    }

    setSaving(true);
    setError(null);
    try {
      const user = await supabase.auth.getUser();
      const discordUserId = user.data.user?.user_metadata?.provider_id;

      const insertData = selectedCharacters.map((characterId) => ({
        character_id: characterId,
        npc_name: npcName,
        npc_case_name: npc.case_name,
        npc_type: npc.type,
        revealed_by: discordUserId,
        revealed_at: new Date().toISOString(),
      }));

      const { error: insertError } = await supabase
        .from("character_npc_visibility")
        .upsert(insertData, {
          onConflict: "character_id,npc_name",
          ignoreDuplicates: false,
        });

      if (insertError) throw insertError;

      const newVisibilityData = { ...visibilityData };
      selectedCharacters.forEach((characterId) => {
        if (!newVisibilityData[characterId]) {
          newVisibilityData[characterId] = new Set();
        }
        newVisibilityData[characterId].add(npcName);
      });
      setVisibilityData(newVisibilityData);

      alert(
        `Revealed "${npcName}" to ${selectedCharacters.length} character(s)`
      );
    } catch (err) {
      console.error("Error revealing NPC:", err);
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const hideNPCFromCharacters = async (npcName) => {
    if (selectedCharacters.length === 0) {
      alert("Please select at least one character");
      return;
    }

    setSaving(true);
    setError(null);
    try {
      const { error: deleteError } = await supabase
        .from("character_npc_visibility")
        .delete()
        .in("character_id", selectedCharacters)
        .eq("npc_name", npcName);

      if (deleteError) throw deleteError;

      const newVisibilityData = { ...visibilityData };
      selectedCharacters.forEach((characterId) => {
        if (newVisibilityData[characterId]) {
          newVisibilityData[characterId].delete(npcName);
        }
      });
      setVisibilityData(newVisibilityData);

      alert(
        `Hidden "${npcName}" from ${selectedCharacters.length} character(s)`
      );
    } catch (err) {
      console.error("Error hiding NPC:", err);
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const getVisibleNPCsForCharacter = (characterId) => {
    if (!visibilityData[characterId]) return [];
    return ALL_CHARACTERS.filter((npc) =>
      visibilityData[characterId].has(npc.name)
    );
  };

  const styles = {
    container: {
      padding: "20px",
    },
    header: {
      marginBottom: "20px",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      color: theme.text,
      marginBottom: "8px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    description: {
      fontSize: "14px",
      color: theme.textSecondary,
      marginBottom: "16px",
    },
    modeToggle: {
      display: "flex",
      gap: "8px",
      marginBottom: "20px",
    },
    modeButton: {
      padding: "8px 16px",
      borderRadius: "8px",
      border: `2px solid ${theme.border}`,
      backgroundColor: theme.surface,
      color: theme.text,
      fontSize: "14px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    activeModeButton: {
      backgroundColor: theme.primary,
      color: "white",
      borderColor: theme.primary,
    },
    splitView: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
    },
    panel: {
      backgroundColor: theme.surface,
      borderRadius: "12px",
      border: `2px solid ${theme.border}`,
      padding: "16px",
    },
    panelHeader: {
      fontSize: "18px",
      fontWeight: "bold",
      color: theme.text,
      marginBottom: "12px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    searchContainer: {
      position: "relative",
      marginBottom: "12px",
    },
    searchInput: {
      width: "100%",
      padding: "8px 32px 8px 8px",
      borderRadius: "8px",
      border: `2px solid ${theme.border}`,
      backgroundColor: theme.background,
      color: theme.text,
      fontSize: "14px",
    },
    searchIcon: {
      position: "absolute",
      right: "8px",
      top: "50%",
      transform: "translateY(-50%)",
      color: theme.textSecondary,
    },
    filterRow: {
      display: "flex",
      gap: "8px",
      marginBottom: "12px",
    },
    select: {
      flex: 1,
      padding: "8px",
      borderRadius: "8px",
      border: `2px solid ${theme.border}`,
      backgroundColor: theme.background,
      color: theme.text,
      fontSize: "14px",
    },
    characterList: {
      maxHeight: "400px",
      overflowY: "auto",
      marginBottom: "12px",
    },
    characterItem: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "8px",
      borderRadius: "8px",
      backgroundColor: theme.background,
      marginBottom: "4px",
      cursor: "pointer",
      transition: "background-color 0.2s",
    },
    npcList: {
      maxHeight: "600px",
      overflowY: "auto",
    },
    npcItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px",
      borderRadius: "8px",
      backgroundColor: theme.background,
      marginBottom: "8px",
      border: `1px solid ${theme.border}`,
    },
    npcInfo: {
      flex: 1,
    },
    npcName: {
      fontSize: "14px",
      fontWeight: "bold",
      color: theme.text,
      marginBottom: "4px",
    },
    npcMeta: {
      fontSize: "12px",
      color: theme.textSecondary,
    },
    buttonGroup: {
      display: "flex",
      gap: "8px",
    },
    button: {
      padding: "6px 12px",
      borderRadius: "6px",
      border: "none",
      fontSize: "12px",
      fontWeight: "500",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "4px",
      transition: "all 0.2s",
    },
    revealButton: {
      backgroundColor: "#10b981",
      color: "white",
    },
    hideButton: {
      backgroundColor: "#ef4444",
      color: "white",
    },
    selectionBar: {
      padding: "8px",
      backgroundColor: theme.primary + "20",
      borderRadius: "8px",
      marginBottom: "12px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    selectionText: {
      fontSize: "12px",
      fontWeight: "500",
      color: theme.text,
    },
    linkButton: {
      background: "none",
      border: "none",
      color: theme.primary,
      fontSize: "12px",
      cursor: "pointer",
      textDecoration: "underline",
    },
    loadingContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px",
    },
    errorContainer: {
      backgroundColor: "#fee",
      border: "2px solid #fcc",
      borderRadius: "8px",
      padding: "12px",
      marginBottom: "16px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      color: "#c00",
    },
    viewModePanel: {
      gridColumn: "1 / -1",
    },
    visibleNPCList: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gap: "12px",
      marginTop: "12px",
    },
    npcCard: {
      padding: "12px",
      backgroundColor: theme.background,
      borderRadius: "8px",
      border: `1px solid ${theme.border}`,
    },
    selectCharacterPrompt: {
      textAlign: "center",
      padding: "40px",
      color: theme.textSecondary,
      fontSize: "14px",
    },
  };

  if (loading) {
    return (
      <div style={styles.container}>
        <div style={styles.loadingContainer}>
          <Loader size={32} className="animate-spin" />
        </div>
      </div>
    );
  }

  const filteredCharacters = getFilteredCharacters();
  const filteredNPCs = getFilteredNPCs();

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>
          <Eye size={24} />
          NPC Visibility Manager
        </h2>
        <p style={styles.description}>
          Control which NPCs are visible to each character. Reveal NPCs as the
          story progresses.
        </p>
      </div>

      {error && (
        <div style={styles.errorContainer}>
          <AlertCircle size={20} />
          <span>{error}</span>
        </div>
      )}

      <div style={styles.modeToggle}>
        <button
          style={{
            ...styles.modeButton,
            ...(viewMode === "reveal" ? styles.activeModeButton : {}),
          }}
          onClick={() => setViewMode("reveal")}
        >
          <Eye size={16} />
          Reveal NPCs
        </button>
        <button
          style={{
            ...styles.modeButton,
            ...(viewMode === "view" ? styles.activeModeButton : {}),
          }}
          onClick={() => setViewMode("view")}
        >
          <UserCheck size={16} />
          View Character NPCs
        </button>
      </div>

      {viewMode === "reveal" ? (
        <div style={styles.splitView}>
          {/* Character Selection Panel */}
          <div style={styles.panel}>
            <h3 style={styles.panelHeader}>
              <Users size={18} />
              Select Characters ({selectedCharacters.length} selected)
            </h3>

            <div style={styles.searchContainer}>
              <input
                type="text"
                placeholder="Search characters..."
                value={characterSearchTerm}
                onChange={(e) => setCharacterSearchTerm(e.target.value)}
                style={styles.searchInput}
              />
              <Search size={16} style={styles.searchIcon} />
            </div>

            {selectedCharacters.length > 0 && (
              <div style={styles.selectionBar}>
                <span style={styles.selectionText}>
                  {selectedCharacters.length} character(s) selected
                </span>
                <button
                  onClick={deselectAllCharacters}
                  style={styles.linkButton}
                >
                  Clear
                </button>
              </div>
            )}

            <div
              style={{
                display: "flex",
                gap: "8px",
                marginBottom: "12px",
              }}
            >
              <button
                onClick={selectAllCharacters}
                style={{
                  ...styles.button,
                  backgroundColor:
                    filteredCharacters.length > 0 &&
                    filteredCharacters.every((char) =>
                      selectedCharacters.includes(char.id)
                    )
                      ? theme.primary
                      : theme.surface,
                  color:
                    filteredCharacters.length > 0 &&
                    filteredCharacters.every((char) =>
                      selectedCharacters.includes(char.id)
                    )
                      ? "white"
                      : theme.text,
                  flex: 1,
                }}
              >
                <CheckSquare size={14} />
                Select All
              </button>
            </div>

            <div style={styles.characterList}>
              {filteredCharacters.map((char) => {
                const isSelected = selectedCharacters.includes(char.id);
                return (
                  <div
                    key={char.id}
                    style={{
                      ...styles.characterItem,
                      backgroundColor: isSelected
                        ? theme.primary + "30"
                        : theme.background,
                      border: isSelected
                        ? `2px solid ${theme.primary}`
                        : `1px solid ${theme.border}`,
                    }}
                    onClick={() => toggleCharacterSelection(char.id)}
                  >
                    {isSelected ? (
                      <CheckSquare size={16} color={theme.primary} />
                    ) : (
                      <Square size={16} color={theme.textSecondary} />
                    )}
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: "500" }}>
                        {char.name}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* NPC List Panel */}
          <div style={styles.panel}>
            <h3 style={styles.panelHeader}>
              <GraduationCap size={18} />
              NPCs ({filteredNPCs.length})
            </h3>

            <div style={styles.searchContainer}>
              <input
                type="text"
                placeholder="Search NPCs..."
                value={npcSearchTerm}
                onChange={(e) => setNpcSearchTerm(e.target.value)}
                style={styles.searchInput}
              />
              <Search size={16} style={styles.searchIcon} />
            </div>

            <div style={styles.filterRow}>
              <select
                value={selectedCase}
                onChange={(e) => setSelectedCase(e.target.value)}
                style={styles.select}
              >
                {cases.map((caseName) => (
                  <option key={caseName} value={caseName}>
                    {caseName === "all" ? "All Cases" : caseName}
                  </option>
                ))}
              </select>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                style={styles.select}
              >
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type === "all" ? "All Types" : type}
                  </option>
                ))}
              </select>
            </div>

            <div style={styles.npcList}>
              {filteredNPCs.map((npc) => {
                const visibleToCount = selectedCharacters.filter((charId) =>
                  isNPCVisibleToCharacter(charId, npc.name)
                ).length;

                return (
                  <div key={npc.id} style={styles.npcItem}>
                    <div style={styles.npcInfo}>
                      <div style={styles.npcName}>{npc.name}</div>
                      <div style={styles.npcMeta}>
                        {npc.school} • {npc.type}
                      </div>
                      {selectedCharacters.length > 0 && (
                        <div
                          style={{
                            fontSize: "11px",
                            color: theme.textSecondary,
                            marginTop: "4px",
                          }}
                        >
                          Visible to {visibleToCount} of{" "}
                          {selectedCharacters.length} selected
                        </div>
                      )}
                    </div>
                    <div style={styles.buttonGroup}>
                      <button
                        onClick={() => revealNPCToCharacters(npc.name, npc)}
                        disabled={
                          saving ||
                          selectedCharacters.length === 0 ||
                          visibleToCount === selectedCharacters.length
                        }
                        style={{
                          ...styles.button,
                          ...styles.revealButton,
                          opacity:
                            selectedCharacters.length === 0 ||
                            visibleToCount === selectedCharacters.length
                              ? 0.5
                              : 1,
                          cursor:
                            selectedCharacters.length === 0 ||
                            visibleToCount === selectedCharacters.length
                              ? "not-allowed"
                              : "pointer",
                        }}
                      >
                        <Eye size={14} />
                        Reveal
                      </button>
                      <button
                        onClick={() => hideNPCFromCharacters(npc.name)}
                        disabled={
                          saving ||
                          selectedCharacters.length === 0 ||
                          visibleToCount === 0
                        }
                        style={{
                          ...styles.button,
                          ...styles.hideButton,
                          opacity:
                            selectedCharacters.length === 0 ||
                            visibleToCount === 0
                              ? 0.5
                              : 1,
                          cursor:
                            selectedCharacters.length === 0 ||
                            visibleToCount === 0
                              ? "not-allowed"
                              : "pointer",
                        }}
                      >
                        <EyeOff size={14} />
                        Hide
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div style={styles.panel}>
          <h3 style={styles.panelHeader}>
            <UserCheck size={18} />
            View NPCs by Character
          </h3>

          <div style={styles.searchContainer}>
            <select
              value={selectedCharacterForView || ""}
              onChange={(e) =>
                setSelectedCharacterForView(
                  e.target.value ? parseInt(e.target.value) : null
                )
              }
              style={styles.searchInput}
            >
              <option value="">Select a character...</option>
              {characters.map((char) => (
                <option key={char.id} value={char.id}>
                  {char.name}
                </option>
              ))}
            </select>
          </div>

          {selectedCharacterForView ? (
            <div>
              <div
                style={{
                  fontSize: "14px",
                  color: theme.textSecondary,
                  marginBottom: "12px",
                }}
              >
                Showing{" "}
                {getVisibleNPCsForCharacter(selectedCharacterForView).length}{" "}
                visible NPC(s) for{" "}
                <strong>
                  {
                    characters.find((c) => c.id === selectedCharacterForView)
                      ?.name
                  }
                </strong>
              </div>
              <div style={styles.visibleNPCList}>
                {getVisibleNPCsForCharacter(selectedCharacterForView).map(
                  (npc) => (
                    <div key={npc.id} style={styles.npcCard}>
                      <div style={styles.npcName}>{npc.name}</div>
                      <div style={styles.npcMeta}>
                        {npc.school} • {npc.type}
                      </div>
                    </div>
                  )
                )}
              </div>
              {getVisibleNPCsForCharacter(selectedCharacterForView).length ===
                0 && (
                <div style={styles.selectCharacterPrompt}>
                  No NPCs have been revealed to this character yet.
                </div>
              )}
            </div>
          ) : (
            <div style={styles.selectCharacterPrompt}>
              Select a character to view their visible NPCs
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NPCVisibilityManager;
