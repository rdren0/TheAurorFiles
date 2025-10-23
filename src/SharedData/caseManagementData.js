/**
 * Case Management System Data Structures
 *
 * Defines data models and utilities for the Auror investigation case system.
 * Cases are the core "quest" mechanic for the Auror RPG.
 */

export const CASE_CATEGORIES = {
  MURDER: "Murder",
  DARK_MAGIC: "Illegal Use of Dark Magic",
  SMUGGLING: "Smuggling & Contraband",
  CORRUPTION: "Ministry Corruption",
  CREATURE_ATTACK: "Magical Creature Attack",
  MISSING_PERSON: "Missing Person",
  FRAUD: "Magical Fraud",
  TERRORISM: "Magical Terrorism",
  THEFT: "Theft of Magical Artifacts",
  ASSAULT: "Magical Assault",
  CONSPIRACY: "Criminal Conspiracy",
  COLD_CASE: "Cold Case",
  UNFORGIVABLE: "Use of Unforgivable Curses",
  BREACH: "Breach of Secrecy",
  OTHER: "Other",
};

export const CASE_STATUS = {
  ASSIGNED: "Assigned",
  INVESTIGATING: "Active Investigation",
  SURVEILLANCE: "Under Surveillance",
  ARREST_WARRANT: "Arrest Warrant Issued",
  IN_CUSTODY: "Suspect in Custody",
  TRIAL: "Awaiting Trial",
  SOLVED: "Solved - Closed",
  UNSOLVED_COLD: "Unsolved - Cold Case",
  DISMISSED: "Dismissed - No Merit",
  TRANSFERRED: "Transferred to Other Department",
};

export const CASE_PRIORITY = {
  CRITICAL: "Critical",
  HIGH: "High",
  MEDIUM: "Medium",
  LOW: "Low",
  ROUTINE: "Routine",
};

export const AUROR_ROLE = {
  LEAD: "Lead Investigator",
  ASSISTANT: "Assistant Investigator",
  CONSULTANT: "Consultant",
  SURVEILLANCE: "Surveillance Specialist",
  FORENSICS: "Forensics Specialist",
  COMBAT: "Combat Support",
};

export const EVIDENCE_TYPE = {
  PHYSICAL: "Physical Evidence",
  MAGICAL_TRACE: "Magical Trace",
  TESTIMONIAL: "Testimonial",
  DOCUMENTARY: "Documentary",
  BIOLOGICAL: "Biological",
  PHOTOGRAPHIC: "Photographic",
  PENSIEVE: "Pensieve Memory",
  ARTIFACT: "Magical Artifact",
};

export const SUSPICION_LEVEL = {
  PERSON_OF_INTEREST: "Person of Interest",
  SUSPECT: "Suspect",
  PRIME_SUSPECT: "Prime Suspect",
  ARRESTED: "Arrested",
  CLEARED: "Cleared",
  ACCOMPLICE: "Accomplice",
};

/**
 * Case Data Model
 */
export class CaseModel {
  constructor(data = {}) {
    this.caseId = data.caseId || null;
    this.caseNumber = data.caseNumber || this.generateCaseNumber();
    this.caseName = data.caseName || "Untitled Case";
    this.category = data.category || CASE_CATEGORIES.OTHER;
    this.status = data.status || CASE_STATUS.ASSIGNED;
    this.priority = data.priority || CASE_PRIORITY.MEDIUM;

    this.assignedAurors = data.assignedAurors || [];
    this.summary = data.summary || "";
    this.dateOpened = data.dateOpened || new Date().toISOString();
    this.deadline = data.deadline || this.calculateDeadline();
    this.dateClosed = data.dateClosed || null;

    this.victims = data.victims || [];
    this.suspects = data.suspects || [];
    this.evidence = data.evidence || [];
    this.clues = data.clues || [];
    this.locations = data.locations || [];
    this.timeline = data.timeline || [];
    this.notes = data.notes || [];

    this.resolution = data.resolution || null;
    this.rewards = data.rewards || this.getDefaultRewards();
  }

  generateCaseNumber() {
    const year = new Date().getFullYear();
    const random = Math.floor(Math.random() * 99999)
      .toString()
      .padStart(5, "0");
    return `DMLE-${year}-${random}`;
  }

  calculateDeadline() {
    const daysToAdd =
      this.category === CASE_CATEGORIES.MURDER
        ? 30
        : this.category === CASE_CATEGORIES.MISSING_PERSON
        ? 14
        : this.category === CASE_CATEGORIES.TERRORISM
        ? 7
        : 60; // Default 60 days

    const deadline = new Date();
    deadline.setDate(deadline.getDate() + daysToAdd);
    return deadline.toISOString();
  }

  getDefaultRewards() {
    const priorityXP = {
      [CASE_PRIORITY.CRITICAL]: 1000,
      [CASE_PRIORITY.HIGH]: 750,
      [CASE_PRIORITY.MEDIUM]: 500,
      [CASE_PRIORITY.LOW]: 300,
      [CASE_PRIORITY.ROUTINE]: 150,
    };

    const priorityGold = {
      [CASE_PRIORITY.CRITICAL]: 200,
      [CASE_PRIORITY.HIGH]: 150,
      [CASE_PRIORITY.MEDIUM]: 100,
      [CASE_PRIORITY.LOW]: 50,
      [CASE_PRIORITY.ROUTINE]: 25,
    };

    return {
      xp: priorityXP[this.priority] || 500,
      galleonsBonus: priorityGold[this.priority] || 100,
      commendation: null, // Set when case is solved with distinction
    };
  }
}

/**
 * Evidence Data Model
 */
export class EvidenceModel {
  constructor(data = {}) {
    this.evidenceId = data.evidenceId || null;
    this.caseId = data.caseId || null;
    this.evidenceName = data.evidenceName || "Unnamed Evidence";
    this.evidenceType = data.evidenceType || EVIDENCE_TYPE.PHYSICAL;

    this.discovery = {
      location: data.discovery?.location || "",
      discoveredBy: data.discovery?.discoveredBy || null,
      dateCollected: data.discovery?.dateCollected || new Date().toISOString(),
      investigationRoll: data.discovery?.investigationRoll || null,
    };

    this.chainOfCustody = data.chainOfCustody || [
      {
        date: new Date().toISOString(),
        action: "Collected",
        by: data.discovery?.discoveredBy || null,
        location: data.discovery?.location || "Unknown",
      },
    ];

    this.analysis = {
      requested: data.analysis?.requested || false,
      requestedBy: data.analysis?.requestedBy || null,
      analyst: data.analysis?.analyst || null,
      results: data.analysis?.results || null,
      dateCompleted: data.analysis?.dateCompleted || null,
    };

    this.legal = {
      admissible: data.legal?.admissible ?? true,
      properProcedure: data.legal?.properProcedure ?? true,
      warrantRequired: data.legal?.warrantRequired || false,
      warrantObtained: data.legal?.warrantObtained || null,
    };

    this.storage = {
      location: data.storage?.location || "Evidence Intake",
      secured: data.storage?.secured || false,
      accessLog: data.storage?.accessLog || [],
    };

    this.linkedTo = {
      suspects: data.linkedTo?.suspects || [],
      clues: data.linkedTo?.clues || [],
      otherEvidence: data.linkedTo?.otherEvidence || [],
    };

    this.description = data.description || "";
    this.imageUrl = data.imageUrl || null;
  }

  addToCustodyChain(action, byCharacterId, location) {
    this.chainOfCustody.push({
      date: new Date().toISOString(),
      action,
      by: byCharacterId,
      location,
    });

    // Check if chain is broken
    if (action === "Lost" || action === "Contaminated") {
      this.legal.admissible = false;
      this.legal.properProcedure = false;
    }
  }

  requestAnalysis(requestedBy, analyst = null) {
    this.analysis.requested = true;
    this.analysis.requestedBy = requestedBy;
    this.analysis.analyst = analyst;
  }

  completeAnalysis(results) {
    this.analysis.results = results;
    this.analysis.dateCompleted = new Date().toISOString();
  }
}

/**
 * Clue Data Model
 */
export class ClueModel {
  constructor(data = {}) {
    this.clueId = data.clueId || null;
    this.caseId = data.caseId || null;
    this.description = data.description || "";
    this.investigationDC = data.investigationDC || 15;
    this.discovered = data.discovered || false;
    this.discoveredBy = data.discoveredBy || null;
    this.discoveryDate = data.discoveryDate || null;
    this.leadsTo = data.leadsTo || []; // Array of evidence/suspect/location IDs
    this.hidden = data.hidden || false; // GM can hide clues from players until discovered
  }

  discover(characterId) {
    this.discovered = true;
    this.discoveredBy = characterId;
    this.discoveryDate = new Date().toISOString();
  }
}

/**
 * Suspect Data Model (simplified - full NPC data stored separately)
 */
export class SuspectModel {
  constructor(data = {}) {
    this.suspectId = data.suspectId || null;
    this.caseId = data.caseId || null;
    this.npcId = data.npcId || null; // Links to full NPC database
    this.suspicionLevel =
      data.suspicionLevel || SUSPICION_LEVEL.PERSON_OF_INTEREST;
    this.alibi = data.alibi || "";
    this.alibiVerified = data.alibiVerified || false;
    this.motive = data.motive || "";
    this.opportunity = data.opportunity || "";
    this.means = data.means || "";
    this.interrogated = data.interrogated || false;
    this.interrogatedBy = data.interrogatedBy || null;
    this.interrogationNotes = data.interrogationNotes || "";
    this.arrestDate = data.arrestDate || null;
    this.chargesFiledDate = data.chargesFiledDate || null;
    this.charges = data.charges || [];
  }

  interrogate(characterId, notes) {
    this.interrogated = true;
    this.interrogatedBy = characterId;
    this.interrogationNotes = notes;
  }

  arrest() {
    this.suspicionLevel = SUSPICION_LEVEL.ARRESTED;
    this.arrestDate = new Date().toISOString();
  }

  clear() {
    this.suspicionLevel = SUSPICION_LEVEL.CLEARED;
  }
}

/**
 * Case Timeline Event Model
 */
export class TimelineEventModel {
  constructor(data = {}) {
    this.eventId = data.eventId || null;
    this.caseId = data.caseId || null;
    this.eventDate = data.eventDate || new Date().toISOString();
    this.eventDescription = data.eventDescription || "";
    this.addedBy = data.addedBy || null;
    this.sortOrder = data.sortOrder || 0;
    this.verified = data.verified || false;
    this.source = data.source || ""; // Witness, evidence, etc.
  }
}

/**
 * Case Note Model
 */
export class CaseNoteModel {
  constructor(data = {}) {
    this.noteId = data.noteId || null;
    this.caseId = data.caseId || null;
    this.characterId = data.characterId || null;
    this.noteText = data.noteText || "";
    this.createdAt = data.createdAt || new Date().toISOString();
    this.shared = data.shared ?? true; // Private vs. shared with team
  }
}

/**
 * Case Resolution Model
 */
export class CaseResolutionModel {
  constructor(data = {}) {
    this.solved = data.solved || false;
    this.solvedDate = data.solvedDate || null;
    this.culprit = data.culprit || null; // NPC ID
    this.charges = data.charges || [];
    this.sentence = data.sentence || null;
    this.caseSummary = data.caseSummary || "";
    this.commendationsIssued = data.commendationsIssued || [];
    this.lessonsLearned = data.lessonsLearned || "";
  }
}

/**
 * Location Model
 */
export class LocationModel {
  constructor(data = {}) {
    this.locationId = data.locationId || null;
    this.caseId = data.caseId || null;
    this.name = data.name || "";
    this.address = data.address || "";
    this.locationType = data.locationType || ""; // Crime scene, suspect residence, etc.
    this.searched = data.searched || false;
    this.searchedBy = data.searchedBy || null;
    this.searchDate = data.searchDate || null;
    this.findings = data.findings || []; // Array of evidence/clue IDs
    this.warrantRequired = data.warrantRequired || false;
    this.warrantObtained = data.warrantObtained || null;
    this.description = data.description || "";
  }

  search(characterId) {
    this.searched = true;
    this.searchedBy = characterId;
    this.searchDate = new Date().toISOString();
  }
}

/**
 * Utility Functions
 */

/**
 * Calculate case complexity based on number of suspects, evidence, etc.
 */
export const calculateCaseComplexity = (caseData) => {
  let complexity = 0;

  complexity += caseData.suspects?.length || 0;
  complexity += (caseData.evidence?.length || 0) * 0.5;
  complexity += (caseData.clues?.length || 0) * 0.3;
  complexity += (caseData.locations?.length || 0) * 0.7;

  if (
    caseData.category === CASE_CATEGORIES.MURDER ||
    caseData.category === CASE_CATEGORIES.TERRORISM
  ) {
    complexity *= 1.5;
  }

  if (caseData.priority === CASE_PRIORITY.CRITICAL) {
    complexity *= 1.3;
  }

  return Math.round(complexity);
};

/**
 * Determine if case is at risk of going cold
 */
export const isCaseAtRisk = (caseData) => {
  const now = new Date();
  const deadline = new Date(caseData.deadline);
  const daysUntilDeadline = Math.ceil((deadline - now) / (1000 * 60 * 60 * 24));

  if (daysUntilDeadline < 0) {
    return { atRisk: true, reason: "Deadline passed", severity: "critical" };
  }

  if (daysUntilDeadline <= 3) {
    return { atRisk: true, reason: "Deadline approaching", severity: "high" };
  }

  if (daysUntilDeadline <= 7) {
    return { atRisk: true, reason: "Deadline soon", severity: "medium" };
  }

  // Check if making progress
  const discoveredClues =
    caseData.clues?.filter((c) => c.discovered).length || 0;
  const totalClues = caseData.clues?.length || 1;
  const progress = discoveredClues / totalClues;

  if (progress < 0.3 && daysUntilDeadline <= 14) {
    return { atRisk: true, reason: "Limited progress", severity: "medium" };
  }

  return { atRisk: false };
};

/**
 * Calculate case progress percentage
 */
export const calculateCaseProgress = (caseData) => {
  let totalTasks = 0;
  let completedTasks = 0;

  // Clues
  const totalClues = caseData.clues?.length || 0;
  const discoveredClues =
    caseData.clues?.filter((c) => c.discovered).length || 0;
  totalTasks += totalClues;
  completedTasks += discoveredClues;

  // Evidence analysis
  const totalEvidence = caseData.evidence?.length || 0;
  const analyzedEvidence =
    caseData.evidence?.filter((e) => e.analysis?.results).length || 0;
  totalTasks += totalEvidence;
  completedTasks += analyzedEvidence;

  // Suspect interrogations
  const totalSuspects = caseData.suspects?.length || 0;
  const interrogatedSuspects =
    caseData.suspects?.filter((s) => s.interrogated).length || 0;
  totalTasks += totalSuspects;
  completedTasks += interrogatedSuspects;

  // Locations searched
  const totalLocations = caseData.locations?.length || 0;
  const searchedLocations =
    caseData.locations?.filter((l) => l.searched).length || 0;
  totalTasks += totalLocations;
  completedTasks += searchedLocations;

  if (totalTasks === 0) return 0;

  return Math.round((completedTasks / totalTasks) * 100);
};

/**
 * Validate evidence admissibility
 */
export const isEvidenceAdmissible = (evidence) => {
  // Check chain of custody
  if (!evidence.chainOfCustody || evidence.chainOfCustody.length === 0) {
    return { admissible: false, reason: "No chain of custody" };
  }

  // Check for broken chain
  if (!evidence.legal.properProcedure) {
    return { admissible: false, reason: "Chain of custody broken" };
  }

  // Check warrant requirements
  if (evidence.legal.warrantRequired && !evidence.legal.warrantObtained) {
    return { admissible: false, reason: "Warrant required but not obtained" };
  }

  return { admissible: true };
};

/**
 * Generate case report summary
 */
export const generateCaseReport = (caseData) => {
  const progress = calculateCaseProgress(caseData);
  const complexity = calculateCaseComplexity(caseData);
  const risk = isCaseAtRisk(caseData);

  return {
    caseNumber: caseData.caseNumber,
    caseName: caseData.caseName,
    status: caseData.status,
    priority: caseData.priority,
    progress: `${progress}%`,
    complexity: complexity > 20 ? "High" : complexity > 10 ? "Medium" : "Low",
    atRisk: risk.atRisk,
    riskSeverity: risk.severity,
    assignedAurors: caseData.assignedAurors?.length || 0,
    suspects: caseData.suspects?.length || 0,
    evidenceCollected: caseData.evidence?.length || 0,
    cluesDiscovered: caseData.clues?.filter((c) => c.discovered).length || 0,
    totalClues: caseData.clues?.length || 0,
    daysUntilDeadline: Math.ceil(
      (new Date(caseData.deadline) - new Date()) / (1000 * 60 * 60 * 24)
    ),
  };
};

/**
 * Example Case Templates
 */
export const EXAMPLE_CASES = [
  {
    caseName: "The Knockturn Alley Murder",
    category: CASE_CATEGORIES.MURDER,
    priority: CASE_PRIORITY.HIGH,
    summary:
      "Shopkeeper Caractacus Burke found dead in his shop. Signs of struggle, wand missing, Dark Mark present.",
    clues: [
      {
        description: "Scorch marks on floor suggest powerful curse",
        investigationDC: 15,
      },
      { description: "Hidden ledger in desk drawer", investigationDC: 18 },
      {
        description: "Witness heard argument night before",
        investigationDC: 12,
      },
    ],
  },
  {
    caseName: "Disappearance at Hogsmeade",
    category: CASE_CATEGORIES.MISSING_PERSON,
    priority: CASE_PRIORITY.HIGH,
    summary:
      "Tourist last seen leaving Three Broomsticks. No trace of magic, no struggle, vanished without trace.",
    clues: [
      {
        description: "Bartender remembers suspicious patron",
        investigationDC: 14,
      },
      {
        description: "Faint trace of Portkey magic detected",
        investigationDC: 17,
      },
      {
        description: "Missing person's wand found in alley",
        investigationDC: 13,
      },
    ],
  },
];

export default {
  CASE_CATEGORIES,
  CASE_STATUS,
  CASE_PRIORITY,
  AUROR_ROLE,
  EVIDENCE_TYPE,
  SUSPICION_LEVEL,
  CaseModel,
  EvidenceModel,
  ClueModel,
  SuspectModel,
  TimelineEventModel,
  CaseNoteModel,
  CaseResolutionModel,
  LocationModel,
  calculateCaseComplexity,
  isCaseAtRisk,
  calculateCaseProgress,
  isEvidenceAdmissible,
  generateCaseReport,
  EXAMPLE_CASES,
};
