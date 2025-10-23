/**
 * Investigation Techniques Framework
 *
 * Defines non-magical detective abilities that Aurors use for investigation work.
 * Unlike spells (which use spell slots), techniques use skill checks or limited uses per rest.
 */

export const TECHNIQUE_CATEGORIES = {
  INTERROGATION: "Interrogation",
  EVIDENCE_ANALYSIS: "Evidence Analysis",
  SURVEILLANCE: "Surveillance & Tracking",
  COMBAT_TACTICS: "Combat Tactics",
  SOCIAL_ENGINEERING: "Social Engineering",
  FORENSICS: "Magical Forensics",
  INFILTRATION: "Infiltration & Undercover"
};

export const ACTIVATION_TYPES = {
  SKILL_CHECK: "skill_check",
  LIMITED_USE: "limited_use",
  PASSIVE: "passive",
  REACTION: "reaction"
};

export const INVESTIGATION_TECHNIQUES = [
  // ===== INTERROGATION TECHNIQUES =====
  {
    id: "enhanced_questioning",
    name: "Enhanced Questioning",
    category: TECHNIQUE_CATEGORIES.INTERROGATION,
    rank: 2,
    description: "You've been trained in advanced interrogation methods that can break even the most stubborn suspects.",

    activation: {
      type: ACTIVATION_TYPES.SKILL_CHECK,
      actionType: "10 minutes",
      skillCheck: {
        primary: "Insight",
        secondary: "Intimidation",
        dc: "Contested against Deception"
      }
    },

    effect: {
      success: "Target must answer one question truthfully, or you gain advantage on Insight checks against them for 1 hour.",
      failure: "Target becomes hostile and uncooperative.",
      criticalSuccess: "Target answers 3 questions truthfully.",
      criticalFailure: "Target lawyers up; you can't question them further without legal intervention."
    },

    limitations: {
      usesPerRest: 3,
      restType: "long",
      requiresPermission: "Suspect must be in custody",
      restrictions: [
        "Cannot be used on Ministry officials without authorization",
        "Requires witness present for legal validity"
      ]
    },

    upgrades: [
      {
        rankRequired: 5,
        name: "Masterful Interrogator",
        benefit: "Gain +2 to skill check, can use 5 times per long rest"
      }
    ]
  },

  {
    id: "lie_detection",
    name: "Trained Lie Detection",
    category: TECHNIQUE_CATEGORIES.INTERROGATION,
    rank: 1,
    description: "Years of interviewing suspects have given you an uncanny ability to detect deception.",

    activation: {
      type: ACTIVATION_TYPES.PASSIVE,
      actionType: "Passive"
    },

    effect: {
      description: "Your Passive Insight is increased by 3 for detecting lies. Additionally, when you actively make an Insight check to detect deception, you can roll twice and use the higher result."
    },

    limitations: {
      restrictions: ["Doesn't work against magically-enhanced deception unless you use a detection spell"]
    }
  },

  {
    id: "good_cop_bad_cop",
    name: "Good Cop, Bad Cop",
    category: TECHNIQUE_CATEGORIES.INTERROGATION,
    rank: 3,
    description: "You coordinate with a partner to psychologically pressure a suspect.",

    activation: {
      type: ACTIVATION_TYPES.SKILL_CHECK,
      actionType: "15 minutes",
      skillCheck: {
        primary: "Persuasion",
        dc: "Contested against Insight"
      },
      requiresAlly: true
    },

    effect: {
      success: "Suspect becomes cooperative and reveals one significant piece of information.",
      failure: "Suspect sees through the tactic; future interrogations have disadvantage.",
      criticalSuccess: "Suspect confesses or provides multiple crucial details.",
      criticalFailure: "Suspect demands lawyer; interrogation ends."
    },

    limitations: {
      usesPerRest: 2,
      restType: "long",
      requiresPermission: "Requires partner Auror"
    }
  },

  // ===== EVIDENCE ANALYSIS TECHNIQUES =====
  {
    id: "crime_scene_reconstruction",
    name: "Crime Scene Reconstruction",
    category: TECHNIQUE_CATEGORIES.EVIDENCE_ANALYSIS,
    rank: 1,
    description: "By carefully examining a crime scene, you can piece together what happened.",

    activation: {
      type: ACTIVATION_TYPES.SKILL_CHECK,
      actionType: "1 hour",
      skillCheck: {
        primary: "Investigation",
        dc: 15
      }
    },

    effect: {
      success: "Learn 3 facts about what occurred: timeline, number of perpetrators, magic used, escape route, or victim's last moments.",
      failure: "Learn 1 fact, but it may be incomplete.",
      criticalSuccess: "Reconstruct entire event; GM describes scene as it happened.",
      criticalFailure: "Contaminate evidence; all future Investigation checks at this scene have disadvantage."
    },

    limitations: {
      usesPerScene: 1,
      restrictions: [
        "Scene must be less than 7 days old",
        "Requires Investigation proficiency"
      ]
    }
  },

  {
    id: "forensic_eye",
    name: "Forensic Eye for Detail",
    category: TECHNIQUE_CATEGORIES.EVIDENCE_ANALYSIS,
    rank: 2,
    description: "You've trained to spot even the smallest pieces of evidence.",

    activation: {
      type: ACTIVATION_TYPES.PASSIVE,
      actionType: "Passive"
    },

    effect: {
      description: "Your Passive Investigation is increased by 3. When searching for clues, you automatically find evidence with DC 12 or lower without needing to roll."
    }
  },

  {
    id: "evidence_preservation",
    name: "Evidence Preservation Expert",
    category: TECHNIQUE_CATEGORIES.EVIDENCE_ANALYSIS,
    rank: 2,
    description: "You know exactly how to collect and preserve evidence to maintain chain of custody.",

    activation: {
      type: ACTIVATION_TYPES.SKILL_CHECK,
      actionType: "10 minutes per piece",
      skillCheck: {
        primary: "Investigation",
        dc: 12
      }
    },

    effect: {
      success: "Evidence is properly preserved and will be admissible in court.",
      failure: "Evidence is collected but may be challenged in court (disadvantage on legal checks).",
      criticalSuccess: "Evidence is perfectly preserved; grants advantage on case resolution.",
      criticalFailure: "Evidence is contaminated and inadmissible."
    },

    limitations: {
      restrictions: ["Requires evidence collection kit"]
    }
  },

  {
    id: "pattern_recognition",
    name: "Criminal Pattern Recognition",
    category: TECHNIQUE_CATEGORIES.EVIDENCE_ANALYSIS,
    rank: 4,
    description: "Your experience allows you to spot patterns across multiple cases.",

    activation: {
      type: ACTIVATION_TYPES.SKILL_CHECK,
      actionType: "1 hour",
      skillCheck: {
        primary: "Investigation",
        secondary: "History",
        dc: 16
      }
    },

    effect: {
      success: "Identify if this crime matches the MO of any known criminals or unsolved cases.",
      criticalSuccess: "Identify the specific criminal or criminal organization responsible.",
      failure: "No pattern identified.",
      criticalFailure: "False pattern identified; may lead investigation astray."
    },

    limitations: {
      usesPerRest: 2,
      restType: "long",
      restrictions: ["Requires access to Ministry case files"]
    }
  },

  // ===== SURVEILLANCE & TRACKING TECHNIQUES =====
  {
    id: "stake_out_expertise",
    name: "Stake Out Expertise",
    category: TECHNIQUE_CATEGORIES.SURVEILLANCE,
    rank: 1,
    description: "You're trained to conduct long surveillance operations without being detected.",

    activation: {
      type: ACTIVATION_TYPES.SKILL_CHECK,
      actionType: "4 hours",
      skillCheck: {
        primary: "Stealth",
        secondary: "Perception",
        dc: "Contested against Perception"
      }
    },

    effect: {
      success: "Successfully observe target for 4 hours without being detected. Learn target's routine and associates.",
      failure: "Target spots you; surveillance compromised.",
      criticalSuccess: "Uncover significant information (meeting, illegal activity, secret location).",
      criticalFailure: "Target becomes aware they're being watched and goes to ground."
    },

    limitations: {
      restrictions: ["Requires warrant or probable cause for legal surveillance"]
    }
  },

  {
    id: "urban_tracking",
    name: "Urban Tracking",
    category: TECHNIQUE_CATEGORIES.SURVEILLANCE,
    rank: 2,
    description: "You can track suspects through crowded city streets.",

    activation: {
      type: ACTIVATION_TYPES.SKILL_CHECK,
      actionType: "10 minutes per mile",
      skillCheck: {
        primary: "Survival",
        secondary: "Investigation",
        dc: 14
      }
    },

    effect: {
      success: "Successfully track target through urban environment.",
      failure: "Lose the trail.",
      criticalSuccess: "Track target and learn their destination.",
      criticalFailure: "Get lost; waste 1 hour."
    }
  },

  {
    id: "tailing_expertise",
    name: "Expert Tailing",
    category: TECHNIQUE_CATEGORIES.SURVEILLANCE,
    rank: 3,
    description: "You can follow suspects without being noticed, even if they're actively watching for tails.",

    activation: {
      type: ACTIVATION_TYPES.SKILL_CHECK,
      actionType: "Variable",
      skillCheck: {
        primary: "Stealth",
        dc: "Contested against Perception, with disadvantage if target is paranoid"
      }
    },

    effect: {
      success: "Follow target undetected.",
      failure: "Target spots you.",
      criticalSuccess: "Follow target and identify all associates they meet.",
      criticalFailure: "Target confronts you; potential combat."
    },

    limitations: {
      restrictions: ["Disadvantage in areas with few people"]
    }
  },

  // ===== COMBAT TACTICS TECHNIQUES =====
  {
    id: "tactical_breach",
    name: "Breach & Clear",
    category: TECHNIQUE_CATEGORIES.COMBAT_TACTICS,
    rank: 3,
    description: "You've trained in tactical building entry, allowing your team to storm locations with precision.",

    activation: {
      type: ACTIVATION_TYPES.LIMITED_USE,
      actionType: "1 action",
      usesPerRest: 2,
      restType: "long"
    },

    effect: {
      description: "When entering a room or structure with hostiles, you and allies within 30 feet gain:",
      benefits: [
        "Surprise round if enemies aren't expecting you",
        "+2 to initiative",
        "Half cover for first round of combat",
        "Advantage on first attack"
      ]
    },

    limitations: {
      requiresPermission: "Warrant or emergency authority",
      restrictions: [
        "Requires at least 2 Aurors",
        "Must be entering through doorway/window"
      ]
    }
  },

  {
    id: "cover_tactics",
    name: "Combat Cover Tactics",
    category: TECHNIQUE_CATEGORIES.COMBAT_TACTICS,
    rank: 2,
    description: "You know how to use environment for maximum protection in combat.",

    activation: {
      type: ACTIVATION_TYPES.REACTION,
      actionType: "Reaction"
    },

    effect: {
      description: "When you would take damage while in cover, you can use your reaction to increase your AC by +2 for that attack. If this causes the attack to miss, you take no damage."
    },

    limitations: {
      usesPerRest: 3,
      restType: "short",
      restrictions: ["Must be in cover (half or three-quarters)"]
    }
  },

  {
    id: "suppressing_fire",
    name: "Suppressing Fire",
    category: TECHNIQUE_CATEGORIES.COMBAT_TACTICS,
    rank: 4,
    description: "You can pin down enemies with a barrage of spells, preventing them from acting effectively.",

    activation: {
      type: ACTIVATION_TYPES.LIMITED_USE,
      actionType: "1 action",
      usesPerRest: 3,
      restType: "short"
    },

    effect: {
      description: "Cast a cantrip or 1st level spell at a target. Whether you hit or miss, the target must make a Wisdom save (DC = 8 + prof + INT/WIS) or have disadvantage on attacks until the start of your next turn, and cannot leave their current position."
    },

    limitations: {
      restrictions: ["Consumes 1 action and spell slot if applicable"]
    }
  },

  {
    id: "tactical_positioning",
    name: "Tactical Positioning",
    category: TECHNIQUE_CATEGORIES.COMBAT_TACTICS,
    rank: 1,
    description: "You've been trained to maximize your position on the battlefield.",

    activation: {
      type: ACTIVATION_TYPES.PASSIVE,
      actionType: "Passive"
    },

    effect: {
      description: "You don't provoke opportunity attacks when moving from behind cover to behind other cover. Additionally, you can take the Dash action as a bonus action twice per short rest."
    }
  },

  {
    id: "team_coordination",
    name: "Squad Coordination",
    category: TECHNIQUE_CATEGORIES.COMBAT_TACTICS,
    rank: 5,
    description: "You can coordinate your team's actions for maximum effectiveness.",

    activation: {
      type: ACTIVATION_TYPES.LIMITED_USE,
      actionType: "1 bonus action",
      usesPerRest: 2,
      restType: "long"
    },

    effect: {
      description: "Choose up to 3 allies within 60 feet. Until the start of your next turn, those allies can use your spell save DC if it's higher than theirs, and they gain advantage on their next attack or spell."
    }
  },

  // ===== SOCIAL ENGINEERING TECHNIQUES =====
  {
    id: "undercover_operation",
    name: "Undercover Expertise",
    category: TECHNIQUE_CATEGORIES.SOCIAL_ENGINEERING,
    rank: 3,
    description: "You're trained in maintaining deep cover identities.",

    activation: {
      type: ACTIVATION_TYPES.SKILL_CHECK,
      actionType: "Ongoing",
      skillCheck: {
        primary: "Deception",
        secondary: "Performance",
        dc: "Contested against Insight"
      }
    },

    effect: {
      success: "Maintain cover identity; targets believe your persona.",
      failure: "Suspicious behavior; targets begin to doubt you.",
      criticalSuccess: "Fully trusted; gain access to sensitive information or locations.",
      criticalFailure: "Cover blown; targets realize you're an Auror."
    },

    limitations: {
      restrictions: [
        "Requires Department Head approval",
        "Must maintain character consistently",
        "Blown cover can endanger Auror"
      ]
    }
  },

  {
    id: "informant_cultivation",
    name: "Informant Cultivation",
    category: TECHNIQUE_CATEGORIES.SOCIAL_ENGINEERING,
    rank: 2,
    description: "You know how to turn witnesses into reliable informants.",

    activation: {
      type: ACTIVATION_TYPES.SKILL_CHECK,
      actionType: "30 minutes",
      skillCheck: {
        primary: "Persuasion",
        secondary: "Insight",
        dc: 15
      }
    },

    effect: {
      success: "NPC agrees to provide information periodically.",
      failure: "NPC refuses to cooperate.",
      criticalSuccess: "NPC becomes regular informant; provides ongoing intelligence.",
      criticalFailure: "NPC warns others; future social checks in this community have disadvantage."
    },

    limitations: {
      usesPerRest: 3,
      restType: "long",
      restrictions: ["May require payment or protection promises"]
    }
  },

  {
    id: "authority_presence",
    name: "Authority Presence",
    category: TECHNIQUE_CATEGORIES.SOCIAL_ENGINEERING,
    rank: 1,
    description: "Your Auror badge and bearing command respect and compliance.",

    activation: {
      type: ACTIVATION_TYPES.PASSIVE,
      actionType: "Passive"
    },

    effect: {
      description: "When identifying yourself as an Auror, you have advantage on Intimidation and Persuasion checks against law-abiding citizens. Gain +2 to Intimidation checks against criminals."
    }
  },

  {
    id: "witness_protection",
    name: "Witness Protection Protocols",
    category: TECHNIQUE_CATEGORIES.SOCIAL_ENGINEERING,
    rank: 4,
    description: "You can arrange for witness protection and safe houses.",

    activation: {
      type: ACTIVATION_TYPES.LIMITED_USE,
      actionType: "1 hour",
      usesPerRest: 1,
      restType: "long"
    },

    effect: {
      description: "Arrange safe house for a witness. While protected, the witness cannot be located by normal means and will testify. Protection lasts until case concludes or witness is compromised."
    },

    limitations: {
      requiresPermission: "Requires Lead Auror or higher authorization",
      restrictions: [
        "Costs 100 Galleons per week from department budget",
        "Witness must agree to testify"
      ]
    }
  },

  // ===== MAGICAL FORENSICS TECHNIQUES =====
  {
    id: "wand_trace_analysis",
    name: "Wand Trace Analysis",
    category: TECHNIQUE_CATEGORIES.FORENSICS,
    rank: 2,
    description: "You can analyze magical traces left at crime scenes to identify the caster.",

    activation: {
      type: ACTIVATION_TYPES.SKILL_CHECK,
      actionType: "30 minutes",
      skillCheck: {
        primary: "Arcana",
        dc: 14
      }
    },

    effect: {
      success: "Identify the school of magic used and approximate power level.",
      criticalSuccess: "Identify the specific spell cast and, with a wand registry check, potentially the caster.",
      failure: "No useful information.",
      criticalFailure: "Misidentify the spell; may lead investigation astray."
    },

    limitations: {
      restrictions: [
        "Traces fade after 48 hours",
        "Requires specialized detection equipment"
      ]
    }
  },

  {
    id: "curse_identification",
    name: "Curse Identification",
    category: TECHNIQUE_CATEGORIES.FORENSICS,
    rank: 3,
    description: "You can identify curses and hexes affecting victims or locations.",

    activation: {
      type: ACTIVATION_TYPES.SKILL_CHECK,
      actionType: "10 minutes",
      skillCheck: {
        primary: "Arcana",
        dc: 16
      }
    },

    effect: {
      success: "Identify the curse and its general effects.",
      criticalSuccess: "Identify the curse, its caster (if signature is present), and potential countermeasures.",
      failure: "Unable to identify curse.",
      criticalFailure: "Trigger curse; you become affected."
    }
  },

  {
    id: "potion_analysis",
    name: "Potion Analysis",
    category: TECHNIQUE_CATEGORIES.FORENSICS,
    rank: 2,
    description: "You can analyze potions to determine their ingredients and effects.",

    activation: {
      type: ACTIVATION_TYPES.SKILL_CHECK,
      actionType: "1 hour",
      skillCheck: {
        primary: "Arcana",
        secondary: "Medicine",
        dc: 14
      }
    },

    effect: {
      success: "Identify potion and its effects.",
      criticalSuccess: "Identify potion, effects, and who might have brewed it (based on technique).",
      failure: "Unable to identify.",
      criticalFailure: "Contaminate sample; potion destroyed."
    }
  },

  {
    id: "memory_extraction",
    name: "Pensieve Memory Extraction",
    category: TECHNIQUE_CATEGORIES.FORENSICS,
    rank: 5,
    description: "You're trained in extracting and viewing memories for evidence.",

    activation: {
      type: ACTIVATION_TYPES.SKILL_CHECK,
      actionType: "1 hour",
      skillCheck: {
        primary: "Arcana",
        dc: 18
      }
    },

    effect: {
      success: "Extract memory from willing subject; memory is admissible in court.",
      criticalSuccess: "Extract perfect, detailed memory that provides significant evidence.",
      failure: "Memory extraction fails; subject disoriented for 1 hour.",
      criticalFailure: "Damage subject's memory; they forget the events entirely."
    },

    limitations: {
      requiresPermission: "Requires warrant or subject consent",
      restrictions: [
        "Requires Pensieve access",
        "Subject must be willing or under legal compulsion",
        "Traumatic memories may harm subject"
      ]
    }
  },

  // ===== INFILTRATION & UNDERCOVER TECHNIQUES =====
  {
    id: "disguise_mastery",
    name: "Disguise Mastery",
    category: TECHNIQUE_CATEGORIES.INFILTRATION,
    rank: 2,
    description: "You're an expert at mundane disguises without relying on magic.",

    activation: {
      type: ACTIVATION_TYPES.SKILL_CHECK,
      actionType: "30 minutes",
      skillCheck: {
        primary: "Deception",
        dc: "Contested against Perception"
      }
    },

    effect: {
      success: "Disguise is believable; you can pass as your target identity.",
      failure: "Disguise is unconvincing; people are suspicious.",
      criticalSuccess: "Perfect disguise; even close associates may be fooled temporarily.",
      criticalFailure: "Disguise is laughably bad; you attract unwanted attention."
    },

    limitations: {
      restrictions: ["Requires disguise kit"]
    }
  },

  {
    id: "lockpicking",
    name: "Magical Lock Bypass",
    category: TECHNIQUE_CATEGORIES.INFILTRATION,
    rank: 3,
    description: "You can bypass magical locks and wards without triggering alarms.",

    activation: {
      type: ACTIVATION_TYPES.SKILL_CHECK,
      actionType: "1 minute per lock",
      skillCheck: {
        primary: "Arcana",
        secondary: "Sleight of Hand",
        dc: "Varies by lock complexity"
      }
    },

    effect: {
      success: "Lock bypassed without triggering alarms.",
      failure: "Lock remains locked; may trigger alarm on retry.",
      criticalSuccess: "Lock bypassed; you also disable any secondary wards or traps.",
      criticalFailure: "Trigger alarm; location owner alerted."
    },

    limitations: {
      requiresPermission: "Requires warrant except in exigent circumstances",
      restrictions: ["Some high-security locks may be impossible to bypass"]
    }
  },

  {
    id: "bug_planting",
    name: "Surveillance Device Deployment",
    category: TECHNIQUE_CATEGORIES.INFILTRATION,
    rank: 4,
    description: "You can plant magical listening devices or tracking charms without detection.",

    activation: {
      type: ACTIVATION_TYPES.SKILL_CHECK,
      actionType: "1 minute",
      skillCheck: {
        primary: "Sleight of Hand",
        secondary: "Stealth",
        dc: 14
      }
    },

    effect: {
      success: "Device planted; you can monitor target location or person.",
      failure: "Device planted but may be discovered (target gets Perception check).",
      criticalSuccess: "Device perfectly concealed; lasts twice as long.",
      criticalFailure: "Device discovered immediately; cover may be blown."
    },

    limitations: {
      requiresPermission: "Requires warrant",
      restrictions: ["Devices have limited range and duration"]
    }
  }
];

/**
 * Get techniques by category
 */
export const getTechniquesByCategory = (category) => {
  return INVESTIGATION_TECHNIQUES.filter(tech => tech.category === category);
};

/**
 * Get techniques available at rank
 */
export const getTechniquesAvailableAtRank = (rank) => {
  return INVESTIGATION_TECHNIQUES.filter(tech => tech.rank <= rank);
};

/**
 * Get technique by ID
 */
export const getTechniqueById = (id) => {
  return INVESTIGATION_TECHNIQUES.find(tech => tech.id === id);
};

/**
 * Check if character can use technique
 */
export const canUseTechnique = (technique, character) => {
  const characterRank = character.aurorRank || 1;

  if (characterRank < technique.rank) {
    return {
      canUse: false,
      reason: `Requires rank ${technique.rank} or higher`
    };
  }

  if (technique.limitations?.requiresPermission) {
    return {
      canUse: true,
      warning: technique.limitations.requiresPermission
    };
  }

  return { canUse: true };
};

/**
 * Get technique usage count
 */
export const getTechniqueUsesRemaining = (technique, characterTechniqueData) => {
  if (technique.activation.type === ACTIVATION_TYPES.PASSIVE) {
    return Infinity;
  }

  if (technique.activation.type === ACTIVATION_TYPES.SKILL_CHECK && !technique.limitations?.usesPerRest) {
    return Infinity; // Unlimited skill checks
  }

  if (technique.limitations?.usesPerRest) {
    const usedCount = characterTechniqueData?.usedCount || 0;
    return technique.limitations.usesPerRest - usedCount;
  }

  if (technique.activation.type === ACTIVATION_TYPES.LIMITED_USE) {
    const usedCount = characterTechniqueData?.usedCount || 0;
    return technique.activation.usesPerRest - usedCount;
  }

  return 0;
};

/**
 * Calculate technique skill check modifier
 */
export const getTechniqueCheckModifier = (technique, character) => {
  const activation = technique.activation;
  if (activation.type !== ACTIVATION_TYPES.SKILL_CHECK) {
    return null;
  }

  const primarySkill = activation.skillCheck.primary;
  const secondarySkill = activation.skillCheck.secondary;

  // Get character's skill modifiers
  const primaryMod = character.skills?.[primarySkill]?.modifier || 0;
  const secondaryMod = secondarySkill ? (character.skills?.[secondarySkill]?.modifier || 0) : 0;

  return {
    primary: { skill: primarySkill, modifier: primaryMod },
    secondary: secondarySkill ? { skill: secondarySkill, modifier: secondaryMod } : null,
    canChoose: !!secondarySkill
  };
};

export default INVESTIGATION_TECHNIQUES;
