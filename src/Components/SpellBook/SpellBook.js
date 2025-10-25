import { useState, useEffect, useRef } from "react";
import {
  Search,
  X,
  Filter,
  ChevronDown,
  ChevronRight,
  Info,
  BookOpen,
} from "lucide-react";
import { SubjectCard } from "./SubjectCard";
import { useTheme } from "../../contexts/ThemeContext";
import { createSpellBookStyles, searchStyles } from "./styles";
import { hasSubclassFeature } from "./utils";
import WizardSpellSelectionModal from "./WizardSpellSelectionModal";
import { calculateWizardSpellsKnown } from "./wizardSpellUtils";

import { spellsData } from "../../SharedData/spells";
import { useCallback } from "react";
import CastingTiles from "../CharacterSheet/CastingTiles";

const SpellBook = ({
  supabase,
  user,
  selectedCharacter,
  characters,
  adminMode = false,
  isUserAdmin = false,
  discordUserId,
}) => {
  const { theme } = useTheme();
  const styles = createSpellBookStyles(theme);
  const [expandedSections, setExpandedSections] = useState({});
  const [expandedSubjects, setExpandedSubjects] = useState({});
  const [showSpecializedSubjects, setShowSpecializedSubjects] = useState(false);
  const [error, setError] = useState(null);
  const [criticalSuccesses, setCriticalSuccesses] = useState({});
  const [spellAttempts, setSpellAttempts] = useState({});
  const [failedAttempts, setFailedAttempts] = useState({});
  const [researchedSpells, setResearchedSpells] = useState({});
  const [arithmancticTags, setArithmancticTags] = useState({});
  const [runicTags, setRunicTags] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAttemptFilters, setSelectedAttemptFilters] = useState([]);
  const [yearFilter, setYearFilter] = useState("all");
  const [classFilter, setClassFilter] = useState("all");
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [isLevelDropdownOpen, setIsLevelDropdownOpen] = useState(false);
  const [isAttemptDropdownOpen, setIsAttemptDropdownOpen] = useState(false);
  const [showAutoUnlockedSpells, setShowAutoUnlockedSpells] = useState(true);
  const [showKnownSpells, setShowKnownSpells] = useState(true);
  const [knownSpells, setKnownSpells] = useState([]);
  const [showSpellSelectionModal, setShowSpellSelectionModal] = useState(false);
  const levelDropdownRef = useRef(null);
  const attemptDropdownRef = useRef(null);

  const loadSpellProgress = useCallback(async () => {
    if (!selectedCharacter) return;

    let characterOwnerDiscordId;

    if (adminMode && isUserAdmin) {
      characterOwnerDiscordId =
        selectedCharacter.discord_user_id || selectedCharacter.ownerId;
    } else {
      characterOwnerDiscordId =
        user?.user_metadata?.provider_id || discordUserId;
    }

    if (!characterOwnerDiscordId) return;

    try {
      const { data, error } = await supabase
        .from("spell_progress_summary")
        .select("*")
        .eq("character_id", selectedCharacter.id)
        .eq("discord_user_id", characterOwnerDiscordId);

      if (error) {
        console.error("Error fetching spell progress:", error);
        return;
      }

      const newSpellAttempts = {};
      const newCriticalSuccesses = {};
      const newFailedAttempts = {};
      const newResearchedSpells = {};
      const newArithmancticTags = {};
      const newRunicTags = {};

      data.forEach((spell) => {
        const spellName = spell.spell_name;

        if (spell.successful_attempts > 0) {
          newSpellAttempts[spellName] = {
            1: true,
            2: spell.successful_attempts >= 2,
          };
        }

        if (spell.has_natural_twenty) {
          newCriticalSuccesses[spellName] = true;
        }

        if (spell.has_failed_attempt) {
          newFailedAttempts[spellName] = true;
        }

        if (spell.researched) {
          newResearchedSpells[spellName] = true;
        }

        if (spell.has_arithmantic_tag) {
          newArithmancticTags[spellName] = true;
        }

        if (spell.has_runic_tag) {
          newRunicTags[spellName] = true;
        }
      });

      setSpellAttempts(newSpellAttempts);
      setCriticalSuccesses(newCriticalSuccesses);
      setFailedAttempts(newFailedAttempts);
      setResearchedSpells(newResearchedSpells);
      setArithmancticTags(newArithmancticTags);
      setRunicTags(newRunicTags);
    } catch (error) {
      console.error("Error loading spell progress:", error);
    }
  }, [
    selectedCharacter,
    user,
    supabase,
    adminMode,
    isUserAdmin,
    discordUserId,
  ]);

  useEffect(() => {
    loadSpellProgress();
  }, [loadSpellProgress]);

  // Load known spells from spell_progress_summary
  const loadKnownSpells = useCallback(async () => {
    if (!selectedCharacter || !supabase) return;

    let characterOwnerDiscordId;

    if (adminMode && isUserAdmin) {
      characterOwnerDiscordId =
        selectedCharacter.discord_user_id || selectedCharacter.ownerId;
    } else {
      characterOwnerDiscordId =
        user?.user_metadata?.provider_id || discordUserId;
    }

    if (!characterOwnerDiscordId) return;

    try {
      const { data, error } = await supabase
        .from("spell_progress_summary")
        .select("spell_name")
        .eq("character_id", selectedCharacter.id)
        .eq("discord_user_id", characterOwnerDiscordId);

      if (error) {
        console.error("Error loading known spells:", error);
        return;
      }

      // Extract spell names from the progress data
      const spellNames = data?.map(item => item.spell_name) || [];
      setKnownSpells(spellNames);
    } catch (error) {
      console.error("Error loading known spells:", error);
    }
  }, [selectedCharacter, supabase, adminMode, isUserAdmin, user, discordUserId]);

  useEffect(() => {
    loadKnownSpells();
  }, [loadKnownSpells]);

  // Save known spells using spell_progress_summary
  const handleSaveKnownSpells = async (spells) => {
    if (!selectedCharacter || !supabase) return;

    let characterOwnerDiscordId;

    if (adminMode && isUserAdmin) {
      characterOwnerDiscordId =
        selectedCharacter.discord_user_id || selectedCharacter.ownerId;
    } else {
      characterOwnerDiscordId =
        user?.user_metadata?.provider_id || discordUserId;
    }

    if (!characterOwnerDiscordId) return;

    try {
      // Determine which spells are newly added and which were removed
      const previousSpells = new Set(knownSpells);
      const newSpells = new Set(spells);

      const addedSpells = spells.filter(spell => !previousSpells.has(spell));
      const removedSpells = knownSpells.filter(spell => !newSpells.has(spell));

      // Mark newly added spells as mastered (2 critical successes) in spell_progress_summary
      if (addedSpells.length > 0) {
        const progressUpdates = addedSpells.map(spellName => ({
          character_id: selectedCharacter.id,
          discord_user_id: characterOwnerDiscordId,
          spell_name: spellName,
          critical_successes: 2,
          successful_attempts: 2,
          failures: 0,
          has_natural_twenty: true,
          has_failed_attempt: false,
          researched: false
        }));

        // Use upsert to create or update spell progress
        const { error: progressError } = await supabase
          .from("spell_progress_summary")
          .upsert(progressUpdates, {
            onConflict: "character_id,spell_name"
          });

        if (progressError) {
          console.error("Error updating spell progress:", progressError);
          setError("Failed to save known spells. Please try again.");
          return;
        }
      }

      // Remove spell progress for removed spells
      if (removedSpells.length > 0) {
        const { error: deleteError } = await supabase
          .from("spell_progress_summary")
          .delete()
          .eq("character_id", selectedCharacter.id)
          .eq("discord_user_id", characterOwnerDiscordId)
          .in("spell_name", removedSpells);

        if (deleteError) {
          console.error("Error removing spell progress:", deleteError);
          setError("Failed to remove spells. Please try again.");
          return;
        }
      }

      // Update local state and reload progress
      setKnownSpells(spells);
      await loadSpellProgress();
      await loadKnownSpells();

    } catch (error) {
      console.error("Error saving known spells:", error);
      setError("Failed to save known spells. Please try again.");
    }
  };

  const attemptFilterOptions = [
    { value: "unattempted", label: "Unattempted" },
    { value: "attempted", label: "Attempted" },
    { value: "mastered", label: "Mastered" },
    { value: "failed", label: "Failed" },
    { value: "researched", label: "Researched" },
  ];

  const getAvailableSpellsData = useCallback(() => ({ ...spellsData }), []);

  // Define core subjects that are always visible - Investigator Toolkit Categories
  const coreSubjects = [
    "Combat Operations",
    "Crime Scene Analysis",
    "Surveillance & Tracking",
    "Interrogation Techniques",
    "Field Medicine",
    "Specialized Arsenal",
    "Unforgivable Curses",
  ];

  const isSpecializedSubject = (subjectName) => {
    return !coreSubjects.includes(subjectName);
  };

  const getAvailableClasses = useCallback(() => {
    const availableSpells = getAvailableSpellsData();
    const classes = new Set();

    Object.entries(availableSpells).forEach(([, subject]) => {
      Object.entries(subject.levels).forEach(([, spells]) => {
        spells.forEach((spell) => {
          if (Array.isArray(spell.class)) {
            spell.class.forEach((cls) => classes.add(cls));
          }
        });
      });
    });

    const classArray = Array.from(classes).sort();
    return classArray;
  }, [getAvailableSpellsData]);

  const getAvailableYears = useCallback(() => {
    const availableSpells = getAvailableSpellsData();
    const years = new Set();

    Object.entries(availableSpells).forEach(([, subject]) => {
      Object.entries(subject.levels).forEach(([, spells]) => {
        spells.forEach((spell) => {
          if (spell.year !== null && spell.year !== undefined) {
            years.add(spell.year);
          }
        });
      });
    });

    const yearArray = Array.from(years).sort((a, b) => a - b);
    return yearArray;
  }, [getAvailableSpellsData]);

  const getAvailableLevels = useCallback(() => {
    const availableSpells = getAvailableSpellsData();
    const levels = new Set();

    Object.entries(availableSpells).forEach(([, subject]) => {
      Object.keys(subject.levels).forEach((level) => {
        levels.add(level);
      });
    });

    const levelArray = Array.from(levels).sort((a, b) => {
      if (a === "Cantrips") return -1;
      if (b === "Cantrips") return 1;
      const aNum = parseInt(a.match(/(\d+)/)?.[1] || "0");
      const bNum = parseInt(b.match(/(\d+)/)?.[1] || "0");
      return aNum - bNum;
    });
    return levelArray;
  }, [getAvailableSpellsData]);

  const classFilterOptions = [
    { value: "all", label: "All Classes" },
    ...getAvailableClasses().map((className) => ({
      value: className,
      label: className,
    })),
  ];

  const yearFilterOptions = [
    { value: "all", label: "All Years" },
    ...getAvailableYears().map((year) => ({
      value: year.toString(),
      label: `${year}${
        year === 1 ? "st" : year === 2 ? "nd" : year === 3 ? "rd" : "th"
      } Year`,
    })),
  ];

  const levelFilterOptions = [
    { value: "all", label: "All Levels" },
    ...getAvailableLevels().map((level) => ({
      value: level,
      label: level,
    })),
  ];

  useEffect(() => {
    setSpellAttempts({});
    setCriticalSuccesses({});
    setFailedAttempts({});
    setResearchedSpells({});
    setArithmancticTags({});
    setRunicTags({});
    setSelectedAttemptFilters([]);
    setYearFilter("all");
    setClassFilter("all");
    setSelectedLevels([]);
  }, [selectedCharacter?.id]);

  const getSpellAttemptStatus = useCallback(
    (spellName) => {
      const attempts = spellAttempts[spellName] || {};
      const successfulAttempts = Object.values(attempts).filter(Boolean).length;
      const hasFailed = failedAttempts[spellName];
      const isResearched = researchedSpells[spellName];
      const hasAnyAttempt = successfulAttempts > 0 || hasFailed;

      const isMastered = successfulAttempts >= 2;

      return {
        isUnattempted: !hasAnyAttempt && !isResearched,
        isAttempted: successfulAttempts > 0 && !isMastered,
        isMastered: isMastered,
        hasFailed: hasFailed && successfulAttempts === 0,
        isResearched: isResearched,
        successfulAttempts,
      };
    },
    [spellAttempts, failedAttempts, researchedSpells]
  );

  const getFilteredSpellsData = useCallback(() => {
    const availableSpells = getAvailableSpellsData();
    let filteredData = {};

    if (searchTerm.trim()) {
      const lowerSearchTerm = searchTerm.toLowerCase();

      Object.entries(availableSpells).forEach(([subjectName, subjectData]) => {
        const filteredLevels = {};
        let hasMatchingSpells = false;

        Object.entries(subjectData.levels).forEach(([level, spells]) => {
          const filteredSpells = spells.filter((spell) => {
            const hasInherentTag = spell.tags?.some((tag) =>
              tag.toLowerCase().includes(lowerSearchTerm)
            );

            const hasManualArithmancticTag =
              arithmancticTags[spell.name] &&
              "arithmantic".includes(lowerSearchTerm);
            const hasManualRunicTag =
              runicTags[spell.name] && "runic".includes(lowerSearchTerm);

            const isResearchedWithResearcher =
              researchedSpells[spell.name] &&
              hasSubclassFeature(selectedCharacter, "Researcher");
            const hasResearcherArithmancticTag =
              isResearchedWithResearcher &&
              "arithmantic".includes(lowerSearchTerm);
            const hasResearcherRunicTag =
              isResearchedWithResearcher && "runic".includes(lowerSearchTerm);

            return (
              spell.name.toLowerCase().includes(lowerSearchTerm) ||
              spell.description?.toLowerCase().includes(lowerSearchTerm) ||
              spell.level?.toLowerCase().includes(lowerSearchTerm) ||
              spell.class?.some((cls) =>
                cls.toLowerCase().includes(lowerSearchTerm)
              ) ||
              subjectName.toLowerCase().includes(lowerSearchTerm) ||
              spell.castingTime?.toLowerCase().includes(lowerSearchTerm) ||
              spell.range?.toLowerCase().includes(lowerSearchTerm) ||
              spell.duration?.toLowerCase().includes(lowerSearchTerm) ||
              hasInherentTag ||
              hasManualArithmancticTag ||
              hasManualRunicTag ||
              hasResearcherArithmancticTag ||
              hasResearcherRunicTag
            );
          });

          if (filteredSpells.length > 0) {
            filteredLevels[level] = filteredSpells;
            hasMatchingSpells = true;
          }
        });

        if (hasMatchingSpells) {
          filteredData[subjectName] = {
            ...subjectData,
            levels: filteredLevels,
          };
        }
      });
    } else {
      filteredData = { ...availableSpells };
    }
    if (classFilter !== "all") {
      const classFilteredData = {};

      Object.entries(filteredData).forEach(([subjectName, subjectData]) => {
        const filteredLevels = {};
        let hasMatchingSpells = false;

        Object.entries(subjectData.levels).forEach(([level, spells]) => {
          const filteredSpells = spells.filter((spell) => {
            return spell.class?.includes(classFilter) || false;
          });

          if (filteredSpells.length > 0) {
            filteredLevels[level] = filteredSpells;
            hasMatchingSpells = true;
          }
        });

        if (hasMatchingSpells) {
          classFilteredData[subjectName] = {
            ...subjectData,
            levels: filteredLevels,
          };
        }
      });

      filteredData = classFilteredData;
    }

    if (yearFilter !== "all") {
      const yearFilteredData = {};
      const targetYear = parseInt(yearFilter);

      Object.entries(filteredData).forEach(([subjectName, subjectData]) => {
        const filteredLevels = {};
        let hasMatchingSpells = false;

        Object.entries(subjectData.levels).forEach(([level, spells]) => {
          const filteredSpells = spells.filter((spell) => {
            const spellYear = spell.year;
            if (spellYear === null || spellYear === undefined) return false;

            const normalizedSpellYear =
              typeof spellYear === "string" ? parseInt(spellYear) : spellYear;
            const matches = normalizedSpellYear === targetYear;

            return matches;
          });

          if (filteredSpells.length > 0) {
            filteredLevels[level] = filteredSpells;
            hasMatchingSpells = true;
          }
        });

        if (hasMatchingSpells) {
          yearFilteredData[subjectName] = {
            ...subjectData,
            levels: filteredLevels,
          };
        }
      });

      filteredData = yearFilteredData;
    }

    if (selectedLevels.length > 0) {
      const levelFilteredData = {};

      Object.entries(filteredData).forEach(([subjectName, subjectData]) => {
        const filteredLevels = {};
        let hasMatchingSpells = false;

        Object.entries(subjectData.levels).forEach(([level, spells]) => {
          if (selectedLevels.includes(level)) {
            filteredLevels[level] = spells;
            hasMatchingSpells = true;
          }
        });

        if (hasMatchingSpells) {
          levelFilteredData[subjectName] = {
            ...subjectData,
            levels: filteredLevels,
          };
        }
      });

      filteredData = levelFilteredData;
    }

    if (selectedAttemptFilters.length > 0) {
      const finalFilteredData = {};

      Object.entries(filteredData).forEach(([subjectName, subjectData]) => {
        const filteredLevels = {};
        let hasMatchingSpells = false;

        Object.entries(subjectData.levels).forEach(([level, spells]) => {
          const filteredSpells = spells.filter((spell) => {
            const status = getSpellAttemptStatus(spell.name);

            return selectedAttemptFilters.some((filter) => {
              switch (filter) {
                case "unattempted":
                  return status.isUnattempted;
                case "attempted":
                  return status.isAttempted;
                case "mastered":
                  return status.isMastered;
                case "failed":
                  return status.hasFailed;
                case "researched":
                  return status.isResearched;
                default:
                  return false;
              }
            });
          });

          if (filteredSpells.length > 0) {
            filteredLevels[level] = filteredSpells;
            hasMatchingSpells = true;
          }
        });

        if (hasMatchingSpells) {
          finalFilteredData[subjectName] = {
            ...subjectData,
            levels: filteredLevels,
          };
        }
      });

      return finalFilteredData;
    }

    return filteredData;
  }, [
    searchTerm,
    selectedAttemptFilters,
    yearFilter,
    classFilter,
    selectedLevels,
    getAvailableSpellsData,
    arithmancticTags,
    runicTags,
    researchedSpells,
    selectedCharacter,
    getSpellAttemptStatus,
  ]);

  const getTotalSpells = (dataSource = null) => {
    const sourceData = dataSource || getAvailableSpellsData();
    return Object.values(sourceData).reduce((total, subject) => {
      return (
        total +
        Object.values(subject.levels).reduce(
          (levelTotal, spells) => levelTotal + spells.length,
          0
        )
      );
    }, 0);
  };

  const spellExistsInSpellsData = (spellName) => {
    for (const subject of Object.values(spellsData)) {
      for (const levelSpells of Object.values(subject.levels)) {
        if (levelSpells.some((spell) => spell.name === spellName)) {
          return true;
        }
      }
    }
    return false;
  };

  const getTotalMastered = () => {
    const allSpellNames = new Set([
      ...Object.keys(spellAttempts),
      ...Object.keys(failedAttempts),
      ...Object.keys(researchedSpells),
    ]);

    return Array.from(allSpellNames).filter((spellName) => {
      if (!spellExistsInSpellsData(spellName)) return false;
      const status = getSpellAttemptStatus(spellName);
      return status.isMastered;
    }).length;
  };

  const getTotalAttempted = () => {
    const allSpellNames = new Set([
      ...Object.keys(spellAttempts),
      ...Object.keys(failedAttempts),
      ...Object.keys(researchedSpells),
    ]);

    return Array.from(allSpellNames).filter((spellName) => {
      if (!spellExistsInSpellsData(spellName)) return false;
      const status = getSpellAttemptStatus(spellName);
      return status.isAttempted;
    }).length;
  };

  const getTotalResearched = () => {
    const allSpellNames = new Set([
      ...Object.keys(spellAttempts),
      ...Object.keys(failedAttempts),
      ...Object.keys(researchedSpells),
    ]);

    return Array.from(allSpellNames).filter((spellName) => {
      if (!spellExistsInSpellsData(spellName)) return false;
      const status = getSpellAttemptStatus(spellName);
      // Only count as researched if not mastered and not attempted
      // Researched trumps failed
      return status.isResearched && !status.isMastered && !status.isAttempted;
    }).length;
  };

  const getTotalFailed = () => {
    const allSpellNames = new Set([
      ...Object.keys(spellAttempts),
      ...Object.keys(failedAttempts),
      ...Object.keys(researchedSpells),
    ]);

    return Array.from(allSpellNames).filter((spellName) => {
      if (!spellExistsInSpellsData(spellName)) return false;
      const status = getSpellAttemptStatus(spellName);
      // Only count as failed if not mastered, not attempted, and not researched
      // Failed is lowest priority
      return (
        status.hasFailed &&
        !status.isMastered &&
        !status.isAttempted &&
        !status.isResearched
      );
    }).length;
  };

  const getTotalEnhanced = () => {
    if (!hasSubclassFeature(selectedCharacter, "Researcher")) return 0;

    let enhancedCount = getTotalResearched();

    const availableSpells = getAvailableSpellsData();
    Object.values(availableSpells).forEach((subject) => {
      Object.values(subject.levels).forEach((spells) => {
        spells.forEach((spell) => {
          if (
            (spell.tags?.includes("Arithmantic") &&
              spell.tags?.includes("Runic")) ||
            (arithmancticTags[spell.name] && runicTags[spell.name])
          ) {
            if (!researchedSpells[spell.name]) {
              enhancedCount++;
            }
          }
        });
      });
    });

    return enhancedCount;
  };

  const filteredSpellsData = getFilteredSpellsData();
  const totalSpells = getTotalSpells();
  const totalFilteredSpells = getTotalSpells(filteredSpellsData);
  const totalMastered = getTotalMastered();
  const totalAttempted = getTotalAttempted();
  const totalResearched = getTotalResearched();
  const totalFailed = getTotalFailed();
  const totalEnhanced = getTotalEnhanced();

  const clearSearch = () => {
    setSearchTerm("");
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedAttemptFilters([]);
    setYearFilter("all");
    setClassFilter("all");
    setSelectedLevels([]);
    setIsLevelDropdownOpen(false);
    setIsAttemptDropdownOpen(false);
  };

  const handleLevelToggle = (level) => {
    setSelectedLevels((prev) => {
      if (prev.includes(level)) {
        return prev.filter((l) => l !== level);
      } else {
        return [...prev, level];
      }
    });
  };

  const handleAttemptFilterToggle = (filter) => {
    setSelectedAttemptFilters((prev) => {
      if (prev.includes(filter)) {
        return prev.filter((f) => f !== filter);
      } else {
        return [...prev, filter];
      }
    });
  };

  const selectAllLevels = () => {
    setSelectedLevels(getAvailableLevels());
  };

  const deselectAllLevels = () => {
    setSelectedLevels([]);
  };

  const selectAllAttemptFilters = () => {
    setSelectedAttemptFilters(
      attemptFilterOptions.map((option) => option.value)
    );
  };

  const deselectAllAttemptFilters = () => {
    setSelectedAttemptFilters([]);
  };

  const toggleLevelDropdown = () => {
    setIsLevelDropdownOpen(!isLevelDropdownOpen);
  };

  const toggleAttemptDropdown = () => {
    setIsAttemptDropdownOpen(!isAttemptDropdownOpen);
  };

  const getLevelDropdownLabel = () => {
    if (selectedLevels.length === 0) {
      return "All Levels";
    } else if (selectedLevels.length === 1) {
      return selectedLevels[0];
    } else if (selectedLevels.length === getAvailableLevels().length) {
      return "All Levels";
    } else {
      return `${selectedLevels.length} Levels`;
    }
  };

  const getAttemptDropdownLabel = () => {
    if (selectedAttemptFilters.length === 0) {
      return "All Spells";
    } else if (selectedAttemptFilters.length === 1) {
      const option = attemptFilterOptions.find(
        (opt) => opt.value === selectedAttemptFilters[0]
      );
      return option ? option.label : selectedAttemptFilters[0];
    } else if (selectedAttemptFilters.length === attemptFilterOptions.length) {
      return "All Spells";
    } else {
      return `${selectedAttemptFilters.length} Filters`;
    }
  };

  useEffect(() => {
    if (searchTerm.trim()) {
      const currentFilteredData = getFilteredSpellsData();
      const newExpandedSubjects = {};
      Object.keys(currentFilteredData).forEach((subjectName) => {
        newExpandedSubjects[subjectName] = true;
      });
      setExpandedSubjects(newExpandedSubjects);
    }
  }, [searchTerm, getFilteredSpellsData]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        levelDropdownRef.current &&
        !levelDropdownRef.current.contains(event.target)
      ) {
        setIsLevelDropdownOpen(false);
      }
      if (
        attemptDropdownRef.current &&
        !attemptDropdownRef.current.contains(event.target)
      ) {
        setIsAttemptDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!user || !discordUserId) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2 style={{ color: "#6B7280", marginBottom: "16px" }}>
          Authentication Required
        </h2>
        <p style={{ color: "#6B7280" }}>
          Please log in with Discord to access the spellbook.
        </p>
      </div>
    );
  }

  if (characters.length === 0) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2 style={{ color: "#6B7280", marginBottom: "16px" }}>
          No Characters Found
        </h2>
        <p style={{ color: "#6B7280" }}>
          You haven't created any characters yet. Create a character in the
          Character Creation tab first.
        </p>
      </div>
    );
  }

  if (!selectedCharacter) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2 style={{ color: "#6B7280", marginBottom: "16px" }}>
          No Character Selected
        </h2>
        <p style={{ color: "#6B7280" }}>
          Please select a character from the dropdown above to access their
          spellbook.
        </p>
      </div>
    );
  }

  return (
    <div
      className="SpellBook"
      style={{
        backgroundColor: theme.background,
        minHeight: "100vh",
        paddingBottom: "20px",
      }}
    >
      <CastingTiles character={selectedCharacter} />

      <div style={styles.searchContainer}>
        <div style={styles.searchInputContainer}>
          <Search
            size={20}
            color={theme.textSecondary}
            style={styles.searchIcon}
          />
          <input
            type="text"
            placeholder="Search spells by name, description, level, subject, class..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
          {searchTerm && (
            <button
              onClick={clearSearch}
              style={styles.searchClearButton}
              title="Clear search"
            >
              <X size={16} color={theme.textSecondary} />
            </button>
          )}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginTop: "12px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Filter size={16} color={theme.textSecondary} />
            <div
              ref={attemptDropdownRef}
              style={{
                position: "relative",
                minWidth: "240px",
              }}
            >
              <div
                onClick={toggleAttemptDropdown}
                style={{
                  padding: "8px 12px",
                  borderRadius: "6px",
                  border: `1px solid ${theme.border}`,
                  backgroundColor: theme.background,
                  color: theme.text,
                  fontSize: "14px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  minHeight: "20px",
                  flexWrap: "wrap",
                  gap: "4px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    flex: 1,
                    flexWrap: "wrap",
                  }}
                >
                  {selectedAttemptFilters.length === 0 ? (
                    <span style={{ color: theme.textSecondary }}>
                      All Spells
                    </span>
                  ) : (
                    selectedAttemptFilters.map((filter) => {
                      const option = attemptFilterOptions.find(
                        (opt) => opt.value === filter
                      );
                      return (
                        <span
                          key={filter}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                            padding: "2px 8px",
                            borderRadius: "12px",
                            fontSize: "12px",
                            backgroundColor: `${theme.primary}15`,
                            color: theme.primary,
                            fontWeight: "500",
                          }}
                        >
                          {option?.label}
                          <X
                            size={12}
                            style={{
                              cursor: "pointer",
                              marginLeft: "2px",
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAttemptFilterToggle(filter);
                            }}
                          />
                        </span>
                      );
                    })
                  )}
                </div>
                <ChevronDown
                  size={16}
                  color={theme.textSecondary}
                  style={{
                    transition: "transform 0.2s",
                    transform: isAttemptDropdownOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                />
              </div>

              {isAttemptDropdownOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 4px)",
                    left: 0,
                    right: 0,
                    backgroundColor: theme.surface,
                    border: `1px solid ${theme.border}`,
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    zIndex: 1000,
                    maxHeight: "300px",
                    overflowY: "auto",
                  }}
                >
                  <div
                    style={{
                      padding: "8px 12px",
                      borderBottom: `1px solid ${theme.border}`,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "600",
                        color: theme.text,
                      }}
                    >
                      Select Filters
                    </span>
                    <div style={{ display: "flex", gap: "4px" }}>
                      <button
                        onClick={selectAllAttemptFilters}
                        style={{
                          padding: "2px 6px",
                          fontSize: "10px",
                          border: `1px solid ${theme.border}`,
                          borderRadius: "4px",
                          backgroundColor: "transparent",
                          color: theme.primary,
                          cursor: "pointer",
                        }}
                      >
                        All
                      </button>
                      <button
                        onClick={deselectAllAttemptFilters}
                        style={{
                          padding: "2px 6px",
                          fontSize: "10px",
                          border: `1px solid ${theme.border}`,
                          borderRadius: "4px",
                          backgroundColor: "transparent",
                          color: theme.primary,
                          cursor: "pointer",
                        }}
                      >
                        Clear
                      </button>
                    </div>
                  </div>

                  <div style={{ padding: "4px" }}>
                    {attemptFilterOptions.map((option) => (
                      <div
                        key={option.value}
                        onClick={() =>
                          handleAttemptFilterToggle(option.value)
                        }
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "8px 12px",
                          borderRadius: "4px",
                          cursor: "pointer",
                          fontSize: "14px",
                          color: theme.text,
                          backgroundColor: "transparent",
                          transition: "background-color 0.15s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor =
                            theme.background || "#f8fafc";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = "transparent";
                        }}
                      >
                        <div
                          style={{
                            width: "16px",
                            height: "16px",
                            border: `2px solid ${
                              selectedAttemptFilters.includes(option.value)
                                ? theme.primary
                                : theme.border
                            }`,
                            borderRadius: "3px",
                            backgroundColor: selectedAttemptFilters.includes(
                              option.value
                            )
                              ? theme.primary
                              : "transparent",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {selectedAttemptFilters.includes(option.value) && (
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                            >
                              <path
                                d="M10 3L4.5 8.5L2 6"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </div>
                        {option.label}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div
            ref={levelDropdownRef}
            style={{
              position: "relative",
              minWidth: "200px",
            }}
          >
            <div
              onClick={toggleLevelDropdown}
              style={{
                padding: "8px 12px",
                borderRadius: "6px",
                border: `1px solid ${theme.border}`,
                backgroundColor: theme.background,
                color: theme.text,
                fontSize: "14px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                minHeight: "20px",
                flexWrap: "wrap",
                gap: "4px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  flex: 1,
                  flexWrap: "wrap",
                }}
              >
                {selectedLevels.length === 0 ? (
                  <span style={{ color: theme.textSecondary }}>
                    All Levels
                  </span>
                ) : (
                  selectedLevels.map((level) => (
                    <span
                      key={level}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        padding: "2px 8px",
                        borderRadius: "12px",
                        fontSize: "12px",
                        backgroundColor: `${theme.primary}15`,
                        color: theme.primary,
                        fontWeight: "500",
                      }}
                    >
                      {level}
                      <X
                        size={12}
                        style={{
                          cursor: "pointer",
                          marginLeft: "2px",
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLevelToggle(level);
                        }}
                      />
                    </span>
                  ))
                )}
              </div>
              <ChevronDown
                size={16}
                color={theme.textSecondary}
                style={{
                  transition: "transform 0.2s",
                  transform: isLevelDropdownOpen
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                }}
              />
            </div>

            {isLevelDropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 4px)",
                  left: 0,
                  right: 0,
                  backgroundColor: theme.surface,
                  border: `1px solid ${theme.border}`,
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  zIndex: 1000,
                  maxHeight: "300px",
                  overflowY: "auto",
                }}
              >
                <div
                  style={{
                    padding: "8px 12px",
                    borderBottom: `1px solid ${theme.border}`,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                      color: theme.text,
                    }}
                  >
                    Select Levels
                  </span>
                  <div style={{ display: "flex", gap: "4px" }}>
                    <button
                      onClick={deselectAllLevels}
                      style={{
                        padding: "2px 6px",
                        fontSize: "10px",
                        border: `1px solid ${theme.border}`,
                        borderRadius: "4px",
                        backgroundColor: "transparent",
                        color: theme.primary,
                        cursor: "pointer",
                      }}
                    >
                      Clear
                    </button>
                  </div>
                </div>

                <div style={{ padding: "4px" }}>
                  {getAvailableLevels().map((level) => (
                    <div
                      key={level}
                      onClick={() => handleLevelToggle(level)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "8px 12px",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "14px",
                        color: theme.text,
                        backgroundColor: "transparent",
                        transition: "background-color 0.15s ease",
                        ":hover": {
                          backgroundColor: theme.background,
                        },
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor =
                          theme.background || "#f8fafc";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "transparent";
                      }}
                    >
                      <div
                        style={{
                          width: "16px",
                          height: "16px",
                          border: `2px solid ${
                            selectedLevels.includes(level)
                              ? theme.primary
                              : theme.border
                          }`,
                          borderRadius: "3px",
                          backgroundColor: selectedLevels.includes(level)
                            ? theme.primary
                            : "transparent",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {selectedLevels.includes(level) && (
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                          >
                            <path
                              d="M10 3L4.5 8.5L2 6"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                      {level}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                color: theme.textSecondary,
                fontWeight: "500",
              }}
            >
              Class:
            </span>
            <select
              value={classFilter}
              onChange={(e) => setClassFilter(e.target.value)}
              style={{
                padding: "6px 12px",
                borderRadius: "6px",
                border: `1px solid ${theme.border}`,
                backgroundColor: theme.background,
                color: theme.text,
                fontSize: "14px",
                minWidth: "180px",
              }}
            >
              {classFilterOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                color: theme.textSecondary,
                fontWeight: "500",
              }}
            >
              Year:
            </span>
            <select
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
              style={{
                padding: "6px 12px",
                borderRadius: "6px",
                border: `1px solid ${theme.border}`,
                backgroundColor: theme.background,
                color: theme.text,
                fontSize: "14px",
                minWidth: "120px",
              }}
            >
              {yearFilterOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {(searchTerm ||
            selectedAttemptFilters.length > 0 ||
            yearFilter !== "all" ||
            classFilter !== "all" ||
            selectedLevels.length > 0) && (
            <button
              onClick={clearFilters}
              style={{
                padding: "6px 12px",
                borderRadius: "6px",
                border: `1px solid ${theme.border}`,
                backgroundColor: theme.background,
                color: theme.textSecondary,
                fontSize: "12px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
              title="Clear all filters"
            >
              <X size={14} />
              Clear Filters
            </button>
          )}
        </div>

        {(searchTerm ||
          selectedAttemptFilters.length > 0 ||
          yearFilter !== "all" ||
          classFilter !== "all" ||
          selectedLevels.length > 0) && (
          <div style={styles.searchResults}>
            Showing {totalFilteredSpells} of {totalSpells} spells
            {searchTerm && <span> • Search: "{searchTerm}"</span>}
            {selectedAttemptFilters.length > 0 && (
              <span>
                {" "}
                • Filters:{" "}
                {selectedAttemptFilters
                  .map(
                    (f) =>
                      attemptFilterOptions.find((opt) => opt.value === f)
                        ?.label
                  )
                  .join(", ")}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Automatically Unlocked Spells Section */}
      <div
        style={{
          margin: "20px",
          backgroundColor: theme.surface,
          border: `2px solid ${theme.primary}`,
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <button
          onClick={() => setShowAutoUnlockedSpells(!showAutoUnlockedSpells)}
          style={{
            width: "100%",
            padding: "16px 20px",
            backgroundColor: `${theme.primary}15`,
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            transition: "background-color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = `${theme.primary}25`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = `${theme.primary}15`;
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", gap: "12px" }}
          >
            {showAutoUnlockedSpells ? (
              <ChevronDown size={24} color={theme.primary} />
            ) : (
              <ChevronRight size={24} color={theme.primary} />
            )}
            <span
              style={{
                fontSize: "18px",
                fontWeight: "700",
                color: theme.text,
                letterSpacing: "0.5px",
              }}
            >
              AUTOMATICALLY KNOWN SPELLS
            </span>
          </div>
          <span
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: theme.primary,
              backgroundColor: theme.surface,
              padding: "4px 12px",
              borderRadius: "12px",
            }}
          >
            No Attempt Required
          </span>
        </button>

        {showAutoUnlockedSpells && (
          <div style={{ padding: "20px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "16px",
                padding: "12px",
                backgroundColor: `${theme.primary}10`,
                borderRadius: "8px",
                border: `1px solid ${theme.primary}30`,
              }}
            >
              <Info size={16} color={theme.primary} />
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  color: theme.text,
                  lineHeight: "1.5",
                }}
              >
                <strong>As a trained investigator,</strong> you automatically know these fundamental spells. You can cast them without needing to attempt or master them.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "12px",
              }}
            >
              {[
                { name: "Lumos", description: "Creates light from your wand tip" },
                { name: "Nox", description: "Extinguishes light from your wand" },
                { name: "Alohomora", description: "Unlocks doors and windows" },
                { name: "Colloportus", description: "Locks doors and windows" },
                { name: "Reparo", description: "Repairs broken objects" },
                { name: "Accio", description: "Summons objects to you" },
                { name: "Mage Hand", description: "Creates a spectral hand to manipulate objects" },
                { name: "Prestidigitation", description: "Performs minor magical tricks" },
                { name: "Message", description: "Sends a whispered message to someone nearby" },
                { name: "Minor Illusion", description: "Creates a sound or image illusion" },
              ].map((spell) => (
                <div
                  key={spell.name}
                  style={{
                    padding: "12px",
                    backgroundColor: theme.background,
                    border: `1px solid ${theme.border}`,
                    borderRadius: "8px",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = `${theme.primary}08`;
                    e.currentTarget.style.borderColor = theme.primary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = theme.background;
                    e.currentTarget.style.borderColor = theme.border;
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                      color: theme.primary,
                      marginBottom: "4px",
                      fontSize: "14px",
                    }}
                  >
                    {spell.name}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: theme.textSecondary,
                      lineHeight: "1.4",
                    }}
                  >
                    {spell.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Known Spells Section */}
      <div
        style={{
          margin: "20px",
          backgroundColor: theme.surface,
          border: `2px solid #a0522d`,
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <button
          onClick={() => setShowKnownSpells(!showKnownSpells)}
          style={{
            width: "100%",
            padding: "16px 20px",
            backgroundColor: "#a0522d15",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            transition: "background-color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#a0522d25";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#a0522d15";
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", gap: "12px" }}
          >
            {showKnownSpells ? (
              <ChevronDown size={24} color="#a0522d" />
            ) : (
              <ChevronRight size={24} color="#a0522d" />
            )}
            <span
              style={{
                fontSize: "18px",
                fontWeight: "700",
                color: theme.text,
                letterSpacing: "0.5px",
              }}
            >
              KNOWN SPELLS
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#a0522d",
                backgroundColor: theme.surface,
                padding: "4px 12px",
                borderRadius: "12px",
              }}
            >
              {knownSpells.length} / {calculateWizardSpellsKnown(selectedCharacter?.level || 1, selectedCharacter?.class)}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowSpellSelectionModal(true);
              }}
              style={{
                padding: "8px 16px",
                backgroundColor: "#a0522d",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.9";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
              <BookOpen size={16} />
              {knownSpells.length === 0 ? "Select Spells" : "Manage Spells"}
            </button>
          </div>
        </button>

        {showKnownSpells && (
          <div style={{ padding: "20px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "16px",
                padding: "12px",
                backgroundColor: "#a0522d10",
                borderRadius: "8px",
                border: "1px solid #a0522d30",
              }}
            >
              <Info size={16} color="#a0522d" />
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  color: theme.text,
                  lineHeight: "1.5",
                }}
              >
                <strong>These are the spells in your spellbook.</strong> As a Level {selectedCharacter?.level || 1} investigator, you can know up to {calculateWizardSpellsKnown(selectedCharacter?.level || 1, selectedCharacter?.class)} spells total. Select which spells you've learned during your training.
              </p>
            </div>

            {knownSpells.length === 0 ? (
              <div
                style={{
                  padding: "40px",
                  textAlign: "center",
                  color: theme.textSecondary,
                }}
              >
                <BookOpen
                  size={48}
                  color={theme.textSecondary}
                  style={{ margin: "0 auto 16px" }}
                />
                <p style={{ fontSize: "16px", marginBottom: "8px" }}>
                  No spells selected yet
                </p>
                <p style={{ fontSize: "14px" }}>
                  Click "Select Spells" to choose which spells your character knows
                </p>
              </div>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                  gap: "12px",
                }}
              >
                {knownSpells.map((spellName) => {
                  // Find the spell details from spellsData
                  let spellDetails = null;
                  Object.values(spellsData).forEach((category) => {
                    Object.values(category.levels || {}).forEach((spells) => {
                      const found = spells.find((s) => s.name === spellName);
                      if (found) spellDetails = found;
                    });
                  });

                  if (!spellDetails) return null;

                  return (
                    <div
                      key={spellName}
                      style={{
                        padding: "12px",
                        backgroundColor: theme.background,
                        border: `1px solid ${theme.border}`,
                        borderRadius: "8px",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#a0522d08";
                        e.currentTarget.style.borderColor = "#a0522d";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = theme.background;
                        e.currentTarget.style.borderColor = theme.border;
                      }}
                    >
                      <div
                        style={{
                          fontWeight: "600",
                          color: "#a0522d",
                          marginBottom: "4px",
                          fontSize: "14px",
                        }}
                      >
                        {spellDetails.name}
                      </div>
                      <div
                        style={{
                          fontSize: "11px",
                          color: theme.textSecondary,
                          marginBottom: "6px",
                        }}
                      >
                        {spellDetails.level}
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          color: theme.textSecondary,
                          lineHeight: "1.4",
                        }}
                      >
                        {spellDetails.description?.substring(0, 100)}...
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>

      {error && (
        <div
          style={{
            backgroundColor: "#FEE2E2",
            border: "1px solid #FECACA",
            color: "#DC2626",
            padding: "12px",
            borderRadius: "8px",
            margin: "16px 20px",
            fontSize: "14px",
          }}
        >
          {error}
        </div>
      )}

      <div style={styles.subjectsGrid}>
        {Object.entries(filteredSpellsData)
          .filter(([subjectName]) => !isSpecializedSubject(subjectName))
          .map(([subjectName, subjectData]) => (
            <SubjectCard
              key={subjectName}
              criticalSuccesses={criticalSuccesses}
              discordUserId={discordUserId}
              expandedSections={expandedSections}
              expandedSubjects={expandedSubjects}
              selectedCharacter={selectedCharacter}
              setCriticalSuccesses={setCriticalSuccesses}
              setError={setError}
              setExpandedSections={setExpandedSections}
              setExpandedSubjects={setExpandedSubjects}
              setSpellAttempts={setSpellAttempts}
              spellAttempts={spellAttempts}
              failedAttempts={failedAttempts}
              setFailedAttempts={setFailedAttempts}
              researchedSpells={researchedSpells}
              setResearchedSpells={setResearchedSpells}
              arithmancticTags={arithmancticTags}
              setArithmancticTags={setArithmancticTags}
              runicTags={runicTags}
              setRunicTags={setRunicTags}
              subjectData={subjectData}
              subjectName={subjectName}
              supabase={supabase}
              user={user}
              globalSearchTerm={searchTerm}
              selectedLevels={selectedLevels}
              selectedAttemptFilters={selectedAttemptFilters}
              onSpellProgressUpdate={loadSpellProgress}
            />
          ))}

        {Object.entries(filteredSpellsData).filter(([subjectName]) =>
          isSpecializedSubject(subjectName)
        ).length > 0 && (
          <div
            style={{
              backgroundColor: theme.background || "#f8fafc",
              border: `1px solid ${theme.border || "#e5e7eb"}`,
              borderRadius: "12px",
              marginBottom: "16px",
              overflow: "hidden",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <button
              onClick={() =>
                setShowSpecializedSubjects(!showSpecializedSubjects)
              }
              style={{
                width: "100%",
                padding: "16px 20px",
                backgroundColor: theme.background || "#f8fafc",
                border: "none",
                borderBottom: showSpecializedSubjects
                  ? `1px solid ${theme.border || "#e5e7eb"}`
                  : "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
                transition: "background-color 0.2s ease",
                color: theme.text || "#1f2937",
                fontSize: "18px",
                fontWeight: "600",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  theme.surface || "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  theme.background || "#f8fafc";
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                {showSpecializedSubjects ? (
                  <ChevronDown size={24} color={theme.text} />
                ) : (
                  <ChevronRight size={24} color={theme.text} />
                )}
                <span>Specialized Subjects</span>
              </div>
              <span
                style={{
                  fontSize: "14px",
                  color: theme.textSecondary || "#6b7280",
                  fontWeight: "500",
                }}
              >
                {
                  Object.entries(filteredSpellsData).filter(([subjectName]) =>
                    isSpecializedSubject(subjectName)
                  ).length
                }{" "}
                subjects
              </span>
            </button>

            {showSpecializedSubjects && (
              <div style={{ padding: "16px" }}>
                <div
                  style={{
                    backgroundColor: theme.surface || "#ffffff",
                    border: `2px solid ${theme.primary || "#6366f1"}`,
                    borderRadius: "8px",
                    padding: "16px",
                    marginBottom: "16px",
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                  }}
                >
                  <Info
                    size={16}
                    color={theme.primary || "#6366f1"}
                    style={{ flexShrink: 0 }}
                  />
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: "13px",
                        color: theme.textSecondary || "#6b7280",
                        lineHeight: "1.5",
                      }}
                    >
                      These subjects are restricted to certain subclasses.
                      Please consult with the DM for clarification on which
                      subjects your character can access.
                    </div>
                  </div>
                </div>
                {Object.entries(filteredSpellsData)
                  .filter(([subjectName]) => isSpecializedSubject(subjectName))
                  .map(([subjectName, subjectData]) => (
                    <SubjectCard
                      key={subjectName}
                      criticalSuccesses={criticalSuccesses}
                      discordUserId={discordUserId}
                      expandedSections={expandedSections}
                      expandedSubjects={expandedSubjects}
                      selectedCharacter={selectedCharacter}
                      setCriticalSuccesses={setCriticalSuccesses}
                      setError={setError}
                      setExpandedSections={setExpandedSections}
                      setExpandedSubjects={setExpandedSubjects}
                      setSpellAttempts={setSpellAttempts}
                      spellAttempts={spellAttempts}
                      failedAttempts={failedAttempts}
                      setFailedAttempts={setFailedAttempts}
                      researchedSpells={researchedSpells}
                      setResearchedSpells={setResearchedSpells}
                      arithmancticTags={arithmancticTags}
                      setArithmancticTags={setArithmancticTags}
                      runicTags={runicTags}
                      setRunicTags={setRunicTags}
                      subjectData={subjectData}
                      subjectName={subjectName}
                      supabase={supabase}
                      user={user}
                      globalSearchTerm={searchTerm}
                      selectedLevels={selectedLevels}
                      selectedAttemptFilters={selectedAttemptFilters}
                      onSpellProgressUpdate={loadSpellProgress}
                    />
                  ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Wizard Spell Selection Modal */}
      <WizardSpellSelectionModal
        isOpen={showSpellSelectionModal}
        onClose={() => setShowSpellSelectionModal(false)}
        character={selectedCharacter}
        spellsData={spellsData}
        knownSpells={knownSpells}
        onSave={handleSaveKnownSpells}
      />
    </div>
  );
};

export default SpellBook;
