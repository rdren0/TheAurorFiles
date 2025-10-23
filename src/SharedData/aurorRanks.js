/**
 * Auror Ranks and Progression System
 *
 * Defines the rank structure for Auror characters, including:
 * - Rank titles and level requirements
 * - Spell license levels
 * - Special authorities and permissions
 * - Salary and benefits
 * - Progression requirements
 */

export const AUROR_RANKS = [
  {
    rank: 1,
    level: 1,
    title: "Auror Trainee",
    spellLicenseLevel: 1,
    description: "Fresh from the Auror Training Program, learning the fundamentals under close supervision.",

    specialAuthorities: [
      "Basic Crime Scene Access",
      "Evidence Collection (supervised)",
      "Witness Interviews (supervised)",
      "Basic Investigation"
    ],

    restrictions: [
      "Cannot lead cases",
      "Requires Senior Auror supervision for arrests",
      "No solo fieldwork",
      "Limited spell authorization"
    ],

    licensedSpellCategories: [
      "Combat - Defensive (Basic)",
      "Utility & Support (Basic)",
      "Investigation & Detection (Basic)"
    ],

    salary: {
      baseGalleons: 100,
      bonusPerCase: 10,
      hazardPay: false
    },

    equipment: [
      "Standard Auror Wand",
      "Basic Defensive Gear",
      "Evidence Collection Kit",
      "Auror Trainee Badge"
    ]
  },

  {
    rank: 2,
    level: 3,
    title: "Junior Auror",
    spellLicenseLevel: 2,
    description: "Completed basic training. Able to conduct investigations with limited supervision.",

    specialAuthorities: [
      "Arrest Powers",
      "Crime Scene Leadership (minor cases)",
      "Independent Witness Interviews",
      "Evidence Analysis (basic)",
      "Search Warrants (application)",
      "Interrogation (supervised)"
    ],

    restrictions: [
      "Cannot lead major cases",
      "Restricted spell use requires approval",
      "No solo pursuits of dangerous suspects",
      "Memory charms forbidden"
    ],

    licensedSpellCategories: [
      "Combat - Offensive (Standard)",
      "Combat - Defensive (Advanced)",
      "Investigation & Detection (Standard)",
      "Tracking & Pursuit (Basic)",
      "Utility & Support (Advanced)"
    ],

    salary: {
      baseGalleons: 200,
      bonusPerCase: 25,
      hazardPay: true,
      hazardRate: 50 // Additional galleons for dangerous cases
    },

    equipment: [
      "Auror Wand (upgraded)",
      "Advanced Protective Vest",
      "Deluminator",
      "Sneakoscope",
      "Junior Auror Badge"
    ],

    progressionRequirements: {
      casesCompleted: 5,
      commendationsRequired: 0,
      trainingHours: 0,
      examRequired: false
    }
  },

  {
    rank: 3,
    level: 5,
    title: "Auror",
    spellLicenseLevel: 3,
    description: "Full Auror status. Trusted to handle complex cases independently.",

    specialAuthorities: [
      "Case Leadership (standard cases)",
      "Independent Interrogation",
      "Memory Charm Use (limited, with documentation)",
      "Warrant Approval",
      "Trainee Supervision",
      "Cross-departmental Coordination",
      "Use of Veritaserum (with approval)"
    ],

    restrictions: [
      "Major cases require Chief Auror oversight",
      "No Unforgivable Curses",
      "International operations require clearance",
      "Dark artifact handling needs specialist"
    ],

    licensedSpellCategories: [
      "Combat - Offensive (Advanced)",
      "Combat - Defensive (Expert)",
      "Investigation & Detection (Advanced)",
      "Tracking & Pursuit (Advanced)",
      "Infiltration & Disguise (Basic)",
      "Restricted - Mind Magic (Limited)"
    ],

    salary: {
      baseGalleons: 350,
      bonusPerCase: 50,
      hazardPay: true,
      hazardRate: 100
    },

    equipment: [
      "Custom Auror Wand",
      "Dragon-hide Protective Gear",
      "Invisibility Cloak (on loan)",
      "Emergency Portkey",
      "Auror Badge (Full)"
    ],

    progressionRequirements: {
      casesCompleted: 15,
      commendationsRequired: 1,
      trainingHours: 40,
      examRequired: false
    }
  },

  {
    rank: 4,
    level: 7,
    title: "Senior Auror",
    spellLicenseLevel: 4,
    description: "Veteran investigator with extensive field experience and tactical expertise.",

    specialAuthorities: [
      "Major Case Leadership",
      "Unforgivable Curse Knowledge (theoretical)",
      "Dark Arts Specialist Consultation",
      "International Cooperation",
      "Trainee Evaluation Authority",
      "Emergency Arrest Authority (no warrant in exigent circumstances)",
      "Legilimency Use (with warrant)"
    ],

    restrictions: [
      "No Unforgivable Curse use",
      "High-profile cases need Director approval",
      "Unspeakable operations require liaison"
    ],

    licensedSpellCategories: [
      "Combat - Offensive (Expert)",
      "Combat - Defensive (Master)",
      "Investigation & Detection (Expert)",
      "Tracking & Pursuit (Expert)",
      "Infiltration & Disguise (Advanced)",
      "Restricted - Mind Magic (Standard)",
      "Restricted - Dark Magic (Defensive Knowledge)"
    ],

    salary: {
      baseGalleons: 500,
      bonusPerCase: 75,
      hazardPay: true,
      hazardRate: 150
    },

    equipment: [
      "Master-crafted Wand",
      "Basilisk-hide Armor",
      "Personal Invisibility Cloak",
      "Emergency Portkey Network Access",
      "Senior Auror Badge",
      "Ministry Floo Network Priority Access"
    ],

    progressionRequirements: {
      casesCompleted: 30,
      commendationsRequired: 3,
      trainingHours: 80,
      examRequired: true,
      examName: "Senior Auror Tactical Assessment"
    }
  },

  {
    rank: 5,
    level: 9,
    title: "Lead Auror",
    spellLicenseLevel: 5,
    description: "Commands major investigations and coordinates multi-Auror operations.",

    specialAuthorities: [
      "Major Case Command",
      "Multi-Auror Team Leadership",
      "Restricted Spell Authorization",
      "International Task Force Leadership",
      "Unspeakable Liaison Authority",
      "Emergency Protocol Activation",
      "Obliviation Authority (with oversight)"
    ],

    restrictions: [
      "Unforgivable Curses require Director emergency authorization",
      "Political cases need Minister approval",
      "Cross-border operations require International Cooperation approval"
    ],

    licensedSpellCategories: [
      "Combat - Offensive (Master)",
      "Combat - Defensive (Grand Master)",
      "Investigation & Detection (Master)",
      "Tracking & Pursuit (Master)",
      "Infiltration & Disguise (Expert)",
      "Restricted - Mind Magic (Advanced)",
      "Restricted - Dark Magic (Offensive/Defensive)"
    ],

    salary: {
      baseGalleons: 700,
      bonusPerCase: 100,
      hazardPay: true,
      hazardRate: 200,
      administrativeStipend: 50
    },

    equipment: [
      "Legendary Auror Wand",
      "Custom Enchanted Armor",
      "Personal Invisibility Cloak",
      "Priority Portkey Authorization",
      "Lead Auror Badge",
      "Direct Line to Minister's Office"
    ],

    progressionRequirements: {
      casesCompleted: 50,
      commendationsRequired: 5,
      trainingHours: 120,
      examRequired: true,
      examName: "Lead Auror Command Evaluation",
      additionalRequirements: ["Led at least 3 major investigations", "Supervised 5+ Junior Aurors"]
    }
  },

  {
    rank: 6,
    level: 11,
    title: "Chief Auror",
    spellLicenseLevel: 6,
    description: "Senior leadership responsible for department operations and strategic planning.",

    specialAuthorities: [
      "Department Operations Command",
      "Cross-Border Operation Authorization",
      "Unspeakable Coordination",
      "Emergency Unforgivable Authorization (case-by-case)",
      "Strategic Intelligence Access",
      "Legislative Testimony Authority",
      "Junior Auror Hiring/Firing"
    ],

    restrictions: [
      "Personal Unforgivable use requires Minister approval",
      "Wizengamot cases need Chief Warlock coordination"
    ],

    licensedSpellCategories: [
      "All Standard Combat Spells",
      "All Investigation Spells",
      "All Tracking & Pursuit Spells",
      "All Infiltration Spells",
      "Restricted - Mind Magic (Expert)",
      "Restricted - Dark Magic (Expert)",
      "Experimental Combat Magic (with approval)"
    ],

    salary: {
      baseGalleons: 1000,
      bonusPerCase: 150,
      hazardPay: true,
      hazardRate: 250,
      administrativeStipend: 200,
      housingAllowance: 100
    },

    equipment: [
      "Elder Wand-quality Custom Wand",
      "Artifact-level Protective Gear",
      "Ministry Executive Equipment Suite",
      "Unrestricted Portkey Access",
      "Chief Auror Badge",
      "Wizengamot Gallery Access"
    ],

    progressionRequirements: {
      casesCompleted: 75,
      commendationsRequired: 8,
      trainingHours: 200,
      examRequired: true,
      examName: "Chief Auror Strategic Leadership Evaluation",
      additionalRequirements: [
        "Led 10+ major investigations",
        "International operation experience",
        "Wizengamot testimony experience",
        "Political approval required"
      ]
    }
  },

  {
    rank: 7,
    level: 13,
    title: "Senior Chief Auror",
    spellLicenseLevel: 7,
    description: "Elite leadership position with access to top-secret operations and strategic planning.",

    specialAuthorities: [
      "Multi-National Task Force Command",
      "Unspeakable Joint Operations",
      "Top Secret Clearance",
      "Emergency Unforgivable Authorization (field use)",
      "Strategic Threat Assessment",
      "Minister Advisory Role",
      "Auror Academy Curriculum Authority"
    ],

    restrictions: [
      "Killing Curse use requires post-action review",
      "Prophecy access requires Unspeakable approval"
    ],

    licensedSpellCategories: [
      "All Combat Spells",
      "All Investigation & Detection Spells",
      "All Restricted Mind Magic",
      "All Restricted Dark Magic",
      "Experimental & Prototype Spells",
      "Ancient Magic (with training)"
    ],

    salary: {
      baseGalleons: 1500,
      bonusPerCase: 200,
      hazardPay: true,
      hazardRate: 350,
      administrativeStipend: 400,
      housingAllowance: 200,
      retirementContribution: 100
    },

    equipment: [
      "Artifact Wand (historical significance)",
      "Legendary Protective Gear",
      "Full Ministry Arsenal Access",
      "Global Portkey Network",
      "Senior Chief Badge",
      "Wizengamot Voting Observer Status"
    ],

    progressionRequirements: {
      casesCompleted: 100,
      commendationsRequired: 12,
      trainingHours: 300,
      examRequired: true,
      examName: "Senior Chief Strategic Command Assessment",
      additionalRequirements: [
        "20+ major investigations led",
        "International task force experience",
        "Unspeakable joint operation experience",
        "Minister nomination required"
      ]
    }
  },

  {
    rank: 8,
    level: 15,
    title: "Master Auror",
    spellLicenseLevel: 8,
    description: "Legendary Auror with unparalleled expertise. Handles the most dangerous threats to magical society.",

    specialAuthorities: [
      "Unlimited Operational Authority",
      "Full Unforgivable Curse Use (with documentation)",
      "Unspeakable Classification Access",
      "Global Jurisdiction",
      "Emergency Martial Authority",
      "Wizengamot Testimony Priority",
      "Auror Training Authority"
    ],

    restrictions: [
      "Killing Curse use reviewed by Wizengamot committee",
      "Time-Turner operations need Unspeakable oversight"
    ],

    licensedSpellCategories: [
      "All Known Combat Magic",
      "All Investigation Magic",
      "All Restricted Magic",
      "All Experimental Magic",
      "Ancient Magic",
      "Forbidden Magic (documented use only)"
    ],

    salary: {
      baseGalleons: 2000,
      bonusPerCase: 300,
      hazardPay: true,
      hazardRate: 500,
      administrativeStipend: 600,
      housingAllowance: 300,
      retirementContribution: 200,
      hazardLifeInsurance: 1000
    },

    equipment: [
      "Custom Artifact Wand",
      "Legendary Enchanted Arsenal",
      "Unrestricted Ministry Vault Access",
      "Global Emergency Portkey",
      "Master Auror Badge (gold)",
      "Wizengamot Emergency Summons Authority"
    ],

    progressionRequirements: {
      casesCompleted: 150,
      commendationsRequired: 20,
      trainingHours: 500,
      examRequired: true,
      examName: "Master Auror Combat & Strategic Excellence Trial",
      additionalRequirements: [
        "50+ major investigations led",
        "Multiple international operations",
        "Defeated legendary dark wizard or equivalent threat",
        "Wizengamot recommendation required",
        "Minister approval required"
      ]
    }
  },

  {
    rank: 9,
    level: 17,
    title: "Head Auror",
    spellLicenseLevel: 9,
    description: "The supreme commander of all Auror operations. Advisor to the Minister and protector of magical society.",

    specialAuthorities: [
      "Supreme Auror Command",
      "Full Unforgivable Curse License",
      "All Magical Secrets Access",
      "Ministry Emergency Powers",
      "Wizengamot Ex-Officio Membership",
      "International Magical Law Enforcement Cooperation",
      "Declaration of Magical States of Emergency"
    ],

    restrictions: [
      "Actions subject to Wizengamot review",
      "Emergency powers require Minister co-signature (except immediate threat to life)"
    ],

    licensedSpellCategories: [
      "All Magic (no restrictions)"
    ],

    salary: {
      baseGalleons: 3000,
      bonusPerCase: 500,
      hazardPay: true,
      hazardRate: 750,
      administrativeStipend: 1000,
      housingAllowance: 500,
      retirementContribution: 500,
      hazardLifeInsurance: 5000,
      ministerialStipend: 1000
    },

    equipment: [
      "Historically Significant Artifact Wand",
      "Complete Magical Arsenal",
      "Unlimited Ministry Resources",
      "Global Command Center",
      "Head Auror Badge (platinum)",
      "Direct Minister Communication Line",
      "Wizengamot Chamber Access (all sessions)"
    ],

    progressionRequirements: {
      casesCompleted: 200,
      commendationsRequired: 30,
      trainingHours: 1000,
      examRequired: false, // Appointment-based
      additionalRequirements: [
        "Master Auror for at least 2 years",
        "100+ major investigations led",
        "Saved magical society from existential threat",
        "Wizengamot confirmation required",
        "Minister appointment required",
        "Confirmed by magical government vote"
      ]
    }
  },

  {
    rank: 10,
    level: 19,
    title: "Director of Magical Law Enforcement",
    spellLicenseLevel: 9,
    description: "Supreme authority over all magical law enforcement. Political and operational leader.",

    specialAuthorities: [
      "Complete DMLE Command",
      "All Auror, Hit Wizard, and Magical Law Enforcement Authority",
      "Ministry Strategic Planning",
      "International Magical Cooperation Leadership",
      "Emergency Magical Government Powers",
      "Wizengamot Voting Member",
      "Minister Succession Eligibility"
    ],

    restrictions: [
      "Subject to Wizengamot oversight",
      "Major policy changes require Minister approval"
    ],

    licensedSpellCategories: [
      "All Magic (unrestricted)"
    ],

    salary: {
      baseGalleons: 5000,
      bonusPerCase: 0, // Administrative, not field work
      hazardPay: false,
      administrativeStipend: 2000,
      housingAllowance: 1000,
      retirementContribution: 1000,
      ministerialStipend: 2000,
      securityDetail: 500
    },

    equipment: [
      "Historical Significance Wand Collection",
      "Ministry Executive Arsenal",
      "Complete Magical Resources",
      "Director's Office (Ministry Level 2)",
      "Director Badge (enchanted platinum)",
      "Minister's Council Permanent Seat",
      "Wizengamot Chief Warlock Communication"
    ],

    progressionRequirements: {
      casesCompleted: 0, // Political appointment
      commendationsRequired: 0,
      trainingHours: 0,
      examRequired: false,
      additionalRequirements: [
        "Head Auror experience",
        "Minister nomination",
        "Wizengamot confirmation",
        "Magical government vote"
      ]
    }
  }
];

/**
 * Get Auror rank by level
 */
export const getAurorRank = (level) => {
  // Find the highest rank the character qualifies for
  const qualifyingRanks = AUROR_RANKS.filter(rank => level >= rank.level);
  return qualifyingRanks[qualifyingRanks.length - 1] || AUROR_RANKS[0];
};

/**
 * Get Auror rank by rank number
 */
export const getAurorRankByNumber = (rankNumber) => {
  return AUROR_RANKS.find(rank => rank.rank === rankNumber) || AUROR_RANKS[0];
};

/**
 * Check if character qualifies for next rank
 */
export const canProgressToNextRank = (character, currentRank) => {
  const nextRank = AUROR_RANKS.find(r => r.rank === currentRank.rank + 1);
  if (!nextRank) return { canProgress: false, reason: "Already at maximum rank" };

  // Check level requirement
  if (character.level < nextRank.level) {
    return {
      canProgress: false,
      reason: `Requires level ${nextRank.level} (currently ${character.level})`
    };
  }

  // Check progression requirements if they exist
  if (currentRank.progressionRequirements) {
    const reqs = currentRank.progressionRequirements;

    if (reqs.casesCompleted && (character.casesCompleted || 0) < reqs.casesCompleted) {
      return {
        canProgress: false,
        reason: `Requires ${reqs.casesCompleted} cases completed (currently ${character.casesCompleted || 0})`
      };
    }

    if (reqs.commendationsRequired && (character.commendations?.length || 0) < reqs.commendationsRequired) {
      return {
        canProgress: false,
        reason: `Requires ${reqs.commendationsRequired} commendations (currently ${character.commendations?.length || 0})`
      };
    }

    if (reqs.examRequired && !character.passedExams?.includes(reqs.examName)) {
      return {
        canProgress: false,
        reason: `Must pass ${reqs.examName}`
      };
    }
  }

  return { canProgress: true, nextRank };
};

/**
 * Check if spell is licensed for character's rank
 */
export const isSpellLicensed = (spell, character) => {
  const rank = getAurorRank(character.level);

  // Check basic spell level against license
  if (spell.level > rank.spellLicenseLevel) {
    return {
      licensed: false,
      reason: `Requires ${spell.rank ? getAurorRankByNumber(spell.rank).title : 'higher Auror rank'}`,
      rankRequired: spell.rank || Math.ceil(spell.level / 2)
    };
  }

  // Check if spell requires specific rank
  if (spell.rank && rank.rank < spell.rank) {
    return {
      licensed: false,
      reason: `Requires ${getAurorRankByNumber(spell.rank).title}`,
      rankRequired: spell.rank
    };
  }

  // Check if spell is in restricted categories
  if (spell.restricted) {
    // Check if character has special authorization
    const hasAuthorization = character.spellLicenses?.some(
      license => license.spellName === spell.name && license.authorized
    );

    if (!hasAuthorization) {
      return {
        licensed: false,
        reason: "Requires special authorization",
        requiresAuthorization: true
      };
    }
  }

  return { licensed: true };
};

/**
 * Calculate total salary for rank
 */
export const calculateSalary = (rank, casesThisMonth = 0, hazardousCases = 0) => {
  const salary = rank.salary;

  let total = salary.baseGalleons;
  total += casesThisMonth * salary.bonusPerCase;

  if (salary.hazardPay && hazardousCases > 0) {
    total += hazardousCases * salary.hazardRate;
  }

  if (salary.administrativeStipend) {
    total += salary.administrativeStipend;
  }

  if (salary.housingAllowance) {
    total += salary.housingAllowance;
  }

  if (salary.retirementContribution) {
    total += salary.retirementContribution;
  }

  if (salary.ministerialStipend) {
    total += salary.ministerialStipend;
  }

  if (salary.securityDetail) {
    total += salary.securityDetail;
  }

  return total;
};

/**
 * Get rank progression path
 */
export const getRankProgressionPath = (currentLevel) => {
  return AUROR_RANKS.map(rank => ({
    ...rank,
    achieved: currentLevel >= rank.level,
    current: getAurorRank(currentLevel).rank === rank.rank,
    next: getAurorRank(currentLevel).rank + 1 === rank.rank
  }));
};

export default AUROR_RANKS;
