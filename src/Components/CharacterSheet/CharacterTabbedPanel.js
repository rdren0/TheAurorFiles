import React, { useState } from "react";
import { Package, Wand, Dices, Award, Rat } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import Inventory from "../Inventory/Inventory";
import FlexibleDiceRoller from "../FlexibleDiceRoller/FlexibleDiceRoller";
import SpellSlotTracker from "./SpellSlotTracker";
import CharacterFeatsDisplay from "./CharacterFeatsDisplay";
import MetaMagicDisplay from "./MetaMagicDisplay";
import SpellSummary from "./SpellSummary";
import CustomSpells from "./CustomSpells";
import CustomMeleeAttacks from "./CustomMeleeAttacks";
import CreaturesPanel from "./CreaturesPanel";

const CharacterTabbedPanel = ({
  supabase,
  user,
  selectedCharacter,
  characters,
  setCharacter,
  discordUserId,
  adminMode,
  isUserAdmin,
  onNavigateToCharacterManagement,
}) => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("slots");

  const styles = {
    container: {
      backgroundColor: theme.surface,
      borderRadius: "4px",
      border: `1px solid ${theme.border}`,
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
      height: "1200px",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    },
    tabsContainer: {
      display: "flex",
      flexDirection: "row",
      backgroundColor: theme.background,
      borderBottom: `2px solid ${theme.border}`,
    },
    tab: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      padding: "12px 20px",
      cursor: "pointer",
      fontSize: "13px",
      fontWeight: "600",
      transition: "all 0.2s ease",
      backgroundColor: "transparent",
      color: theme.textSecondary,
      border: "none",
      borderBottom: `3px solid transparent`,
      outline: "none",
      textAlign: "center",
      position: "relative",
      fontFamily: "'Courier New', monospace",
      textTransform: "uppercase",
      letterSpacing: "1.2px",
    },
    activeTab: {
      color: theme.text,
      borderBottomColor: theme.primary,
      backgroundColor: theme.surface,
      fontWeight: "700",
    },
    tabLabel: {
      display: "inline-block",
    },
    tabIcon: {
      display: "inline-block",
    },
    tabContent: {
      flex: 1,
      overflow: "auto",
      padding: "0",
    },
    placeholderContent: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      padding: "40px 20px",
      textAlign: "center",
    },
    placeholderTitle: {
      fontSize: "18px",
      fontWeight: "600",
      color: theme.text,
      margin: "16px 0 8px 0",
      fontFamily: "'Courier New', monospace",
    },
    placeholderText: {
      fontSize: "14px",
      color: theme.textSecondary,
      margin: "0",
      fontFamily: "'Courier New', monospace",
    },
  };

  const tabs = [
    {
      id: "diceRoller",
      label: "Chance Roll",
      icon: Dices,
      component: (
        <div
          style={{
            backgroundColor: theme.background,
            padding: "16px",
            height: "100%",
          }}
        >
          <FlexibleDiceRoller
            title="Custom Roll"
            description={`Rolling for ${selectedCharacter.name}`}
            character={selectedCharacter}
          />
        </div>
      ),
    },
    {
      id: "slots",
      label: "Actions",
      icon: Wand,
      component: (
        <div
          style={{
            backgroundColor: theme.background,
            padding: "16px",
            paddingBottom: "32px",
          }}
        >
          <SpellSummary
            character={selectedCharacter}
            supabase={supabase}
            user={user}
            discordUserId={discordUserId}
            adminMode={adminMode}
            isUserAdmin={isUserAdmin}
          />
          <CustomSpells
            character={selectedCharacter}
            supabase={supabase}
            discordUserId={discordUserId}
          />
          <SpellSlotTracker
            character={selectedCharacter}
            supabase={supabase}
            discordUserId={discordUserId}
            setCharacter={setCharacter}
            selectedCharacterId={selectedCharacter.id}
          />
          <MetaMagicDisplay
            character={selectedCharacter}
            onNavigateToCharacterManagement={onNavigateToCharacterManagement}
          />
          <CustomMeleeAttacks
            character={selectedCharacter}
            supabase={supabase}
            discordUserId={discordUserId}
          />
        </div>
      ),
    },
    {
      id: "feats",
      label: "Skills",
      icon: Award,
      component: (
        <CharacterFeatsDisplay
          character={selectedCharacter}
          supabase={supabase}
          discordUserId={discordUserId}
          setCharacter={setCharacter}
          adminMode={adminMode}
          isUserAdmin={isUserAdmin}
        />
      ),
    },
    {
      id: "inventory",
      label: "Evidence",
      icon: Package,
      component: (
        <Inventory
          user={user}
          selectedCharacter={selectedCharacter}
          supabase={supabase}
        />
      ),
    },
    {
      id: "creatures",
      label: "Contacts",
      icon: Rat,
      component: (
        <CreaturesPanel
          supabase={supabase}
          user={user}
          selectedCharacter={selectedCharacter}
        />
      ),
    },
  ];

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div style={styles.container}>
      <div style={styles.tabsContainer}>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              style={{
                ...styles.tab,
                ...(isActive ? styles.activeTab : {}),
              }}
              onClick={() => setActiveTab(tab.id)}
              title={tab.label}
            >
              <span style={styles.tabIcon}>
                <Icon size={16} />
              </span>
              <span style={styles.tabLabel}>{tab.label}</span>
            </button>
          );
        })}
      </div>
      <div style={styles.tabContent}>{activeTabData?.component}</div>
    </div>
  );
};

export default CharacterTabbedPanel;
