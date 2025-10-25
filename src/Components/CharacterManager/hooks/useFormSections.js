import { useState, useCallback } from "react";
import { FORM_SECTIONS } from "../constants/formSections";

export const useFormSections = () => {
  // Initialize all sections as expanded by default
  const [expandedSections, setExpandedSections] = useState(() => {
    const initialState = {};
    FORM_SECTIONS.forEach(section => {
      initialState[`section-${section.id}`] = true;
    });
    return initialState;
  });

  const toggleSectionExpansion = useCallback((sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  }, []);

  const getSectionConfig = useCallback((sectionId) => {
    return FORM_SECTIONS.find((section) => section.id === sectionId);
  }, []);

  return {
    expandedSections,
    toggleSectionExpansion,
    getSectionConfig,
    sections: FORM_SECTIONS,
  };
};
