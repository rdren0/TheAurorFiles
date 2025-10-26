import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const HOUSE_THEMES = {
  // Classic Film Noir
  "Classic Noir": {
    primary: "#1a1a1a",
    secondary: "#4a4a4a",
    accent: "#2d2d2d",
    background: "#0d0d0d",
    surface: "#1f1f1f",
    text: "#d4d4d4",
    textSecondary: "#9a9a9a",
    border: "#333333",
    success: "#4a8f4a",
    warning: "#d4a520",
    error: "#8b1a1a",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)",
    cardBackground: "#1f1f1f",
    headerBackground: "#0d0d0d",
    sidebarBackground: "#1a1a1a",
  },
  // Detective's Office (Warm Sepia)
  "Detective Office": {
    primary: "#2b1d0e",
    secondary: "#8b7355",
    accent: "#a0826d",
    background: "#1a120a",
    surface: "#2b1d0e",
    text: "#e6d5c3",
    textSecondary: "#b8a898",
    border: "#4a3a2a",
    success: "#6b8e23",
    warning: "#cd853f",
    error: "#8b4513",
    gradient: "linear-gradient(135deg, #2b1d0e 0%, #1a120a 100%)",
    cardBackground: "#2b1d0e",
    headerBackground: "#1a120a",
    sidebarBackground: "#241811",
  },
  // Midnight Investigation
  "Midnight Investigation": {
    primary: "#0a192f",
    secondary: "#1a3a52",
    accent: "#2e5266",
    background: "#020c1b",
    surface: "#112240",
    text: "#ccd6f6",
    textSecondary: "#8892b0",
    border: "#233554",
    success: "#5cb85c",
    warning: "#f0ad4e",
    error: "#d9534f",
    gradient: "linear-gradient(135deg, #0a192f 0%, #020c1b 100%)",
    cardBackground: "#112240",
    headerBackground: "#0a192f",
    sidebarBackground: "#0d1929",
  },
  // Crime Scene (Red Accent)
  "Crime Scene": {
    primary: "#1a0000",
    secondary: "#4a0000",
    accent: "#8b0000",
    background: "#0d0000",
    surface: "#1f0a0a",
    text: "#d4a5a5",
    textSecondary: "#9a7575",
    border: "#330000",
    success: "#2d6a2d",
    warning: "#d4a520",
    error: "#c00000",
    gradient: "linear-gradient(135deg, #1a0000 0%, #0d0000 100%)",
    cardBackground: "#1f0a0a",
    headerBackground: "#1a0000",
    sidebarBackground: "#150505",
  },
  // Street Lamp (Amber Glow)
  "Street Lamp": {
    primary: "#2a1f0d",
    secondary: "#5c4520",
    accent: "#8b6914",
    background: "#1a140a",
    surface: "#2a1f0d",
    text: "#f4e4c1",
    textSecondary: "#c9b896",
    border: "#4a3a1a",
    success: "#556b2f",
    warning: "#daa520",
    error: "#8b4513",
    gradient: "linear-gradient(135deg, #2a1f0d 0%, #1a140a 100%)",
    cardBackground: "#2a1f0d",
    headerBackground: "#1a140a",
    sidebarBackground: "#221a0f",
  },
  // Foggy Alley
  "Foggy Alley": {
    primary: "#2d2d2d",
    secondary: "#4d4d4d",
    accent: "#6d6d6d",
    background: "#1d1d1d",
    surface: "#2d2d2d",
    text: "#c4c4c4",
    textSecondary: "#9494 94",
    border: "#3d3d3d",
    success: "#4a7c4a",
    warning: "#c4a520",
    error: "#8b2020",
    gradient: "linear-gradient(135deg, #2d2d2d 0%, #1d1d1d 100%)",
    cardBackground: "#2d2d2d",
    headerBackground: "#1d1d1d",
    sidebarBackground: "#252525",
  },
  // Typewriter (High Contrast)
  Typewriter: {
    primary: "#0f0f0f",
    secondary: "#2f2f2f",
    accent: "#1a1a1a",
    background: "#000000",
    surface: "#1a1a1a",
    text: "#f0f0f0",
    textSecondary: "#b0b0b0",
    border: "#2a2a2a",
    success: "#5a9a5a",
    warning: "#d4a520",
    error: "#9a2a2a",
    gradient: "linear-gradient(135deg, #0f0f0f 0%, #000000 100%)",
    cardBackground: "#1a1a1a",
    headerBackground: "#000000",
    sidebarBackground: "#0a0a0a",
  },
  // Rain-Soaked Streets
  "Rain-Soaked Streets": {
    primary: "#1a2332",
    secondary: "#2a3f5f",
    accent: "#3a5a7f",
    background: "#0d1621",
    surface: "#1a2332",
    text: "#b8d4f1",
    textSecondary: "#8aa4c4",
    border: "#2a3f5f",
    success: "#4a8f7c",
    warning: "#c4a560",
    error: "#8b3a3a",
    gradient: "linear-gradient(135deg, #1a2332 0%, #0d1621 100%)",
    cardBackground: "#1a2332",
    headerBackground: "#0d1621",
    sidebarBackground: "#151d2a",
  },
  // Case File (Manila Folder)
  "Case File": {
    primary: "#3d3020",
    secondary: "#6d5a3f",
    accent: "#8d7a5f",
    background: "#2d2010",
    surface: "#3d3020",
    text: "#f4e4d4",
    textSecondary: "#c9b9a9",
    border: "#5d4a2f",
    success: "#6b8e5b",
    warning: "#d4a560",
    error: "#8b4a4a",
    gradient: "linear-gradient(135deg, #3d3020 0%, #2d2010 100%)",
    cardBackground: "#3d3020",
    headerBackground: "#2d2010",
    sidebarBackground: "#342818",
  },
  // Cigarette Smoke
  "Cigarette Smoke": {
    primary: "#2a2a2e",
    secondary: "#4a4a52",
    accent: "#6a6a72",
    background: "#1a1a1e",
    surface: "#2a2a2e",
    text: "#d4d4dc",
    textSecondary: "#a4a4ac",
    border: "#3a3a42",
    success: "#5a8a6a",
    warning: "#c4a570",
    error: "#8b4a4a",
    gradient: "linear-gradient(135deg, #2a2a2e 0%, #1a1a1e 100%)",
    cardBackground: "#2a2a2e",
    headerBackground: "#1a1a1e",
    sidebarBackground: "#222226",
  },
  // Evidence Board (Cork Board)
  "Evidence Board": {
    primary: "#4a3a2a",
    secondary: "#6a5a4a",
    accent: "#8a7a6a",
    background: "#3a2a1a",
    surface: "#4a3a2a",
    text: "#f4e4d4",
    textSecondary: "#c9b9a9",
    border: "#5a4a3a",
    success: "#6b8e6b",
    warning: "#d4a570",
    error: "#8b4a4a",
    gradient: "linear-gradient(135deg, #4a3a2a 0%, #3a2a1a 100%)",
    cardBackground: "#4a3a2a",
    headerBackground: "#3a2a1a",
    sidebarBackground: "#423222",
  },
  // Newspaper Print
  "Newspaper Print": {
    primary: "#2a2a2e",
    secondary: "#4a4a50",
    accent: "#3a3a3e",
    background: "#0d0d10",
    surface: "#2a2a2e",
    text: "#f5f5f8",
    textSecondary: "#d0d0d5",
    border: "#3a3a3e",
    success: "#60b070",
    warning: "#e0b590",
    error: "#b04a4a",
    gradient: "linear-gradient(135deg, #2a2a2e 0%, #0d0d10 100%)",
    cardBackground: "#2a2a2e",
    headerBackground: "#1a1a1e",
    sidebarBackground: "#1a1a1e",
  },
};

const COLORBLIND_THEMES = {
  "protanopia-light": {
    primary: "#0066CC",
    secondary: "#FF6600",
    accent: "#3399FF",
    background: "#F5F5F5",
    surface: "#FFFFFF",
    text: "#1F2937",
    textSecondary: "#6B7280",
    border: "#E5E7EB",
    success: "#10B981",
    warning: "#FF6600",
    error: "#EF4444",
    gradient: "linear-gradient(135deg, #0066CC 0%, #FF6600 100%)",
    cardBackground: "#FFFFFF",
    headerBackground: "#0066CC",
    sidebarBackground: "#F5F5F5",
  },
  "protanopia-dark": {
    primary: "#3399FF",
    secondary: "#FF9933",
    accent: "#66AAFF",
    background: "#1A1A1A",
    surface: "#2A2A2A",
    text: "#F5F5F5",
    textSecondary: "#CCCCCC",
    border: "#3A3A3A",
    success: "#10B981",
    warning: "#FF9933",
    error: "#EF4444",
    gradient: "linear-gradient(135deg, #3399FF 0%, #FF9933 100%)",
    cardBackground: "#2A2A2A",
    headerBackground: "#1A1A1A",
    sidebarBackground: "#2A2A2A",
  },
  "deuteranopia-light": {
    primary: "#0066CC",
    secondary: "#FFCC00",
    accent: "#3399FF",
    background: "#F5F5F5",
    surface: "#FFFFFF",
    text: "#1F2937",
    textSecondary: "#6B7280",
    border: "#E5E7EB",
    success: "#10B981",
    warning: "#FFCC00",
    error: "#EF4444",
    gradient: "linear-gradient(135deg, #0066CC 0%, #FFCC00 100%)",
    cardBackground: "#FFFFFF",
    headerBackground: "#0066CC",
    sidebarBackground: "#F5F5F5",
  },
  "deuteranopia-dark": {
    primary: "#3399FF",
    secondary: "#FFDD33",
    accent: "#66AAFF",
    background: "#1A1A1A",
    surface: "#2A2A2A",
    text: "#F5F5F5",
    textSecondary: "#CCCCCC",
    border: "#3A3A3A",
    success: "#10B981",
    warning: "#FFDD33",
    error: "#EF4444",
    gradient: "linear-gradient(135deg, #3399FF 0%, #FFDD33 100%)",
    cardBackground: "#2A2A2A",
    headerBackground: "#1A1A1A",
    sidebarBackground: "#2A2A2A",
  },
  "tritanopia-light": {
    primary: "#CC0066",
    secondary: "#FF6600",
    accent: "#FF3399",
    background: "#F5F5F5",
    surface: "#FFFFFF",
    text: "#1F2937",
    textSecondary: "#6B7280",
    border: "#E5E7EB",
    success: "#10B981",
    warning: "#FF6600",
    error: "#EF4444",
    gradient: "linear-gradient(135deg, #CC0066 0%, #FF6600 100%)",
    cardBackground: "#FFFFFF",
    headerBackground: "#CC0066",
    sidebarBackground: "#F5F5F5",
  },
  "tritanopia-dark": {
    primary: "#FF3399",
    secondary: "#FF9933",
    accent: "#FF66BB",
    background: "#1A1A1A",
    surface: "#2A2A2A",
    text: "#F5F5F5",
    textSecondary: "#CCCCCC",
    border: "#3A3A3A",
    success: "#10B981",
    warning: "#FF9933",
    error: "#EF4444",
    gradient: "linear-gradient(135deg, #FF3399 0%, #FF9933 100%)",
    cardBackground: "#2A2A2A",
    headerBackground: "#1A1A1A",
    sidebarBackground: "#2A2A2A",
  },
  "high-contrast-light": {
    primary: "#000000",
    secondary: "#333333",
    accent: "#666666",
    background: "#FFFFFF",
    surface: "#FFFFFF",
    text: "#000000",
    textSecondary: "#333333",
    border: "#000000",
    success: "#000000",
    warning: "#000000",
    error: "#000000",
    gradient: "linear-gradient(135deg, #000000 0%, #333333 100%)",
    cardBackground: "#FFFFFF",
    headerBackground: "#FFFFFF",
    sidebarBackground: "#FFFFFF",
  },
  "high-contrast-dark": {
    primary: "#FFFFFF",
    secondary: "#CCCCCC",
    accent: "#999999",
    background: "#000000",
    surface: "#000000",
    text: "#FFFFFF",
    textSecondary: "#CCCCCC",
    border: "#FFFFFF",
    success: "#FFFFFF",
    warning: "#FFFFFF",
    error: "#FFFFFF",
    gradient: "linear-gradient(135deg, #FFFFFF 0%, #CCCCCC 100%)",
    cardBackground: "#000000",
    headerBackground: "#000000",
    sidebarBackground: "#000000",
  },
};

const THEMES = {
  light: {
    primary: "#6366F1",
    secondary: "#8B5CF6",
    accent: "#3B82F6",
    background: "#F9FAFB",
    surface: "#FFFFFF",
    text: "#1F2937",
    textSecondary: "#6B7280",
    border: "#E5E7EB",
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
    gradient: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
    cardBackground: "#FFFFFF",
    headerBackground: "#6366F1",
    sidebarBackground: "#F9FAFB",
  },
  dark: {
    primary: "#8B5CF6",
    secondary: "#6366F1",
    accent: "#3B82F6",
    background: "#111827",
    surface: "#1F2937",
    text: "#F9FAFB",
    textSecondary: "#D1D5DB",
    border: "#374151",
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
    gradient: "linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)",
    cardBackground: "#1F2937",
    headerBackground: "#111827",
    sidebarBackground: "#1F2937",
  },
};

export const SCHOOL_CATEGORIES = {
  "Classic Detective": [
    "Classic Noir",
    "Detective Office",
    "Typewriter",
    "Newspaper Print",
  ],
  "Urban Night": [
    "Midnight Investigation",
    "Rain-Soaked Streets",
    "Foggy Alley",
    "Street Lamp",
  ],
  "Investigation Themes": [
    "Crime Scene",
    "Case File",
    "Evidence Board",
    "Cigarette Smoke",
  ],
};

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("house");
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [themeHouse, setThemeHouse] = useState("Classic Noir");
  const [selectedColorblindType, setSelectedColorblindType] =
    useState("protanopia-light");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("aurorfiles-theme");
    const savedHouse = localStorage.getItem("aurorfiles-theme-house");
    const savedColorblindType = localStorage.getItem(
      "aurorfiles-colorblind-type"
    );

    if (
      savedTheme &&
      ["light", "dark", "house", "colorblind"].includes(savedTheme)
    ) {
      setThemeMode(savedTheme);
    }

    if (savedHouse && HOUSE_THEMES[savedHouse]) {
      setThemeHouse(savedHouse);
    }

    if (savedColorblindType) {
      setSelectedColorblindType(savedColorblindType);
    }

    setIsInitialized(true);
  }, []);

  const setThemeModeWithPersistence = (newTheme) => {
    setThemeMode(newTheme);
    localStorage.setItem("aurorfiles-theme", newTheme);
  };

  const setThemeHouseWithPersistence = (newHouse) => {
    setThemeHouse(newHouse);
    localStorage.setItem("aurorfiles-theme-house", newHouse);
  };

  const setSelectedColorblindTypeWithPersistence = (newType) => {
    setSelectedColorblindType(newType);
    localStorage.setItem("aurorfiles-colorblind-type", newType);
  };

  const updateSelectedCharacterFromExternal = (character) => {
    setSelectedCharacter(character);
  };

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("aurorfiles-theme", themeMode);
    }
  }, [themeMode, isInitialized]);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("aurorfiles-theme-house", themeHouse);
    }
  }, [themeHouse, isInitialized]);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(
        "aurorfiles-colorblind-type",
        selectedColorblindType
      );
    }
  }, [selectedColorblindType, isInitialized]);

  const getCurrentTheme = () => {
    if (themeMode === "house") {
      return HOUSE_THEMES[themeHouse] || THEMES.light;
    }
    if (themeMode === "colorblind") {
      return COLORBLIND_THEMES[selectedColorblindType] || THEMES.light;
    }
    return THEMES[themeMode] || THEMES.light;
  };

  const theme = getCurrentTheme();

  const contextValue = {
    themeMode,
    setThemeMode: setThemeModeWithPersistence,
    theme,
    selectedCharacter,
    setSelectedCharacter: () => {},
    themeHouse,
    setThemeHouse: setThemeHouseWithPersistence,
    selectedColorblindType,
    setSelectedColorblindType: setSelectedColorblindTypeWithPersistence,
    updateSelectedCharacterFromExternal,
    availableHouses: Object.keys(HOUSE_THEMES),
    HOUSE_THEMES,
    THEMES,
    COLORBLIND_THEMES,
    SCHOOL_CATEGORIES,
    isInitialized,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

const DEFAULT_THEME = {
  surface: "#ffffff",
  background: "#f8fafc",
  text: "#1f2937",
  textSecondary: "#6b7280",
  primary: "#6366f1",
  secondary: "#8b5cf6",
  success: "#10b981",
  warning: "#f59e0b",
  error: "#ef4444",
  border: "#e5e7eb",
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    console.warn(
      "useTheme must be used within a ThemeProvider. Using default theme."
    );
    return {
      theme: DEFAULT_THEME,
      themeMode: "light",
      setThemeMode: () => {},
      selectedCharacter: null,
      setSelectedCharacter: () => {},
      themeHouse: "Classic Noir",
      setThemeHouse: () => {},
      selectedColorblindType: "protanopia-light",
      setSelectedColorblindType: () => {},
      updateSelectedCharacterFromExternal: () => {},
      availableHouses: [],
      HOUSE_THEMES: {},
      THEMES: { light: DEFAULT_THEME },
      COLORBLIND_THEMES: {},
      SCHOOL_CATEGORIES: {},
      isInitialized: true,
    };
  }

  if (!context.theme) {
    console.warn("Theme is undefined in context. Using default theme.");
    return {
      ...context,
      theme: DEFAULT_THEME,
    };
  }

  return context;
};

export default ThemeContext;
