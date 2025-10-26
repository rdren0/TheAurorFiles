import React from "react";
import { useTheme } from "../../../../../contexts/ThemeContext";
import { createCharacterCreationStyles } from "../../../../../styles/masterStyles";
import OptimizedImageUpload from "./OptimizedImageUpload";
import { EnhancedCastingStyleSelector } from "./EnhancedCastingStyleSelector";

const BasicInfoSection = ({
  character,
  onChange,
  errors = {},
  mode = "create",
  disabled = false,
  supabase,
}) => {
  const { theme } = useTheme();
  const styles = createCharacterCreationStyles(theme);

  const handleInputChange = (field, value) => {
    onChange(field, value);
  };

  const handleLevelChange = (level) => {
    handleInputChange("level", level);
  };

  const handleImageChange = (file, previewUrl) => {
    if (previewUrl) {
      handleInputChange("imageUrl", previewUrl);
    } else if (!file) {
      handleInputChange("imageUrl", "");
    }
  };

  const onUploadComplete = (url) => {
    handleInputChange("imageUrl", url);
  };

  return (
    <>
      <div style={styles.fieldContainer}>
        <label style={styles.label}>Character Name *</label>
        <input
          type="text"
          value={character.name || ""}
          onChange={(e) => handleInputChange("name", e.target.value)}
          placeholder="Enter your character's name..."
          style={{
            ...styles.input,
            opacity: disabled ? 0.6 : 1,
            pointerEvents: disabled ? "none" : "auto",
          }}
          maxLength={50}
          disabled={disabled}
        />
      </div>

      <div style={styles.fieldContainer}>
        <label style={styles.label}>Character Portrait</label>
        <OptimizedImageUpload
          currentImageUrl={character.imageUrl || ""}
          onImageChange={handleImageChange}
          onUploadComplete={onUploadComplete}
          supabase={supabase}
          theme={theme}
          disabled={disabled}
          styles={{
            container: styles.imageUploadContainer,
            wrapper: styles.imageUploadWrapper,
            helpText: styles.helpText,
            error: styles.errorContainer,
          }}
          maxSizeMB={5}
          compressionQuality={0.8}
          maxWidth={600}
          maxHeight={600}
          bucket="character-images"
          folder="new-characters"
          placeholder="Upload character portrait"
          helpText="JPG, PNG, GIF, or WebP • Images are automatically compressed"
          size={120}
        />
      </div>

      {/* Game Session selector hidden - single case file only */}

      <div style={styles.fieldContainer}>
        <label style={styles.label}>Level *</label>
        <input
          type="number"
          min="1"
          max="20"
          value={character.level || 1}
          onChange={(e) => handleLevelChange(parseInt(e.target.value) || 1)}
          style={{
            ...styles.input,
            opacity: disabled ? 0.6 : 1,
            pointerEvents: disabled ? "none" : "auto",
          }}
          disabled={disabled}
        />
      </div>

      <div style={styles.fieldContainer}>
        <EnhancedCastingStyleSelector
          selectedStyle={character.castingStyle || ""}
          onStyleChange={(style) => handleInputChange("castingStyle", style)}
          required={true}
        />
      </div>
    </>
  );
};

export default BasicInfoSection;
