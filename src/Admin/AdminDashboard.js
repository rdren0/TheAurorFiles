import React, { useState, useEffect, useCallback } from "react";
import {
  Shield,
  BarChart3,
  FileText,
  Eye,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import NPCVisibilityManager from "./NPCVisibilityManager";

const AdminDashboard = ({ supabase }) => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("overview");
  const [dashboardStats, setDashboardStats] = useState({
    totalCharacters: 0,
    activeUsers: 0,
  });

  const adminStyles = {
    container: {
      padding: "20px",
      backgroundColor: theme.background,
      minHeight: "100vh",
    },
    header: {
      marginBottom: "24px",
      textAlign: "center",
      padding: "20px",
      backgroundColor: theme.surface,
      borderRadius: "12px",
      border: `2px solid ${theme.border}`,
    },
    title: {
      fontSize: "32px",
      fontWeight: "bold",
      color: theme.text,
      marginBottom: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "12px",
    },
    subtitle: {
      fontSize: "16px",
      color: theme.textSecondary,
      margin: "0",
    },
    adminBadge: {
      display: "inline-block",
      backgroundColor: "#ff6b35",
      color: "white",
      padding: "4px 12px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "bold",
      marginBottom: "16px",
    },
    tabNavigation: {
      display: "flex",
      gap: "4px",
      marginBottom: "24px",
      backgroundColor: theme.surface,
      padding: "8px",
      borderRadius: "12px",
      border: `2px solid ${theme.border}`,
      flexWrap: "wrap",
    },
    tab: {
      flex: 1,
      padding: "12px 16px",
      borderRadius: "8px",
      border: "none",
      backgroundColor: "transparent",
      color: theme.text,
      fontSize: "14px",
      fontWeight: "500",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      transition: "all 0.2s ease",
      minWidth: "140px",
    },
    activeTab: {
      backgroundColor: theme.primary,
      fontWeight: "600",
      color: theme.text,
    },
    tabContent: {
      backgroundColor: theme.surface,
      borderRadius: "12px",
      border: `2px solid ${theme.border}`,
      minHeight: "400px",
      overflow: "hidden",
      color: theme.text,
    },

    overviewGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      padding: "24px",
    },
    statCard: {
      backgroundColor: theme.background,
      padding: "24px",
      borderRadius: "12px",
      border: `2px solid ${theme.border}`,
      textAlign: "center",
      transition: "all 0.2s ease",
      cursor: "pointer",
      position: "relative",
      overflow: "hidden",
    },
    statIcon: {
      marginBottom: "16px",
      display: "flex",
      justifyContent: "center",
    },
    statNumber: {
      fontSize: "36px",
      fontWeight: "bold",
      marginBottom: "8px",
    },
    statLabel: {
      fontSize: "16px",
      fontWeight: "600",
      color: theme.text,
      marginBottom: "4px",
    },
    statDescription: {
      fontSize: "14px",
      color: theme.textSecondary,
      marginBottom: "8px",
    },
    clickHint: {
      fontSize: "12px",
      color: theme.primary,
      fontWeight: "500",
      opacity: 0.8,
    },
    loadingContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "60px 20px",
      color: theme.textSecondary,
    },
  };

  const loadDashboardStats = useCallback(async () => {
    try {
      const { data: allCharacters } = await supabase
        .from("characters")
        .select("discord_user_id")
        .eq("active", true);

      const uniqueUsers = new Set(
        (allCharacters || []).map((c) => c.discord_user_id)
      );

      setDashboardStats({
        totalCharacters: allCharacters?.length || 0,
        activeUsers: uniqueUsers.size,
      });
    } catch (error) {
      console.error("Error loading dashboard stats:", error);
    }
  }, [supabase]);

  useEffect(() => {
    loadDashboardStats();
  }, [loadDashboardStats]);

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      icon: BarChart3,
      component: (
        <OverviewTab
          stats={dashboardStats}
          styles={adminStyles}
          onTabChange={setActiveTab}
        />
      ),
    },
    {
      id: "npc-visibility",
      label: "NPC Gallery",
      icon: Eye,
      component: <NPCVisibilityManager supabase={supabase} />,
    },
  ];

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div style={adminStyles.container}>
      <div style={adminStyles.header}>
        <div style={adminStyles.adminBadge}>🔓 ADMIN ACCESS ACTIVE</div>
        <h1 style={adminStyles.title}>
          <Shield size={36} />
          Admin Dashboard
        </h1>
        <p style={adminStyles.subtitle}>
          Manage characters, sessions, and game data
        </p>
      </div>

      <div style={adminStyles.tabNavigation}>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          const hasBadge = tab.badge && Number(tab.badge) > 0;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                ...adminStyles.tab,
                ...(isActive ? adminStyles.activeTab : {}),
              }}
            >
              <Icon size={16} />
              {tab.label}
              {hasBadge && (
                <span
                  style={{
                    marginLeft: "8px",
                    padding: "2px 8px",
                    borderRadius: "12px",
                    fontSize: "12px",
                    fontWeight: "600",
                    backgroundColor: "#f59e0b",
                    color: "white",
                    minWidth: "18px",
                    textAlign: "center",
                  }}
                >
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div style={adminStyles.tabContent}>{activeTabData?.component}</div>
    </div>
  );
};

const OverviewTab = ({ stats, styles, onTabChange }) => {
  const { theme } = useTheme();

  const statCards = [
    {
      icon: FileText,
      number: stats.totalCharacters,
      label: "Total Characters",
      description: "Active player characters",
      color: "#06b6d4",
      clickAction: () => onTabChange("npc-visibility"),
    },
  ];

  return (
    <div>
      <div style={styles.overviewGrid}>
        {statCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              style={{
                ...styles.statCard,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onClick={card.clickAction}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = `0 8px 25px ${card.color}25`;
                e.currentTarget.style.borderColor = card.color + "80";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = theme.border;
              }}
              title={`Click to view ${card.label.toLowerCase()}`}
            >
              <div style={styles.statIcon}>
                <Icon size={32} color={card.color} />
              </div>
              <div style={{ ...styles.statNumber, color: card.color }}>
                {card.number}
              </div>
              <div style={styles.statLabel}>{card.label}</div>
              <div style={styles.statDescription}>{card.description}</div>
              <div style={styles.clickHint}>Click to view →</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminDashboard;
