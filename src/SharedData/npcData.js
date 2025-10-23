/**
 * NPC (Non-Player Character) Database System
 *
 * Defines data models for suspects, witnesses, informants, and adversaries
 * in the Auror RPG investigation system.
 */

export const NPC_STATUS = {
  ALIVE: "Alive",
  DECEASED: "Deceased",
  MISSING: "Missing",
  INCARCERATED: "Incarcerated",
  AZKABAN: "Azkaban",
  FUGITIVE: "Fugitive",
  UNKNOWN: "Unknown"
};

export const NPC_ALLEGIANCE = {
  MINISTRY: "Ministry of Magic",
  AUROR: "Auror Office",
  DEATH_EATER: "Death Eater",
  ORDER: "Order of the Phoenix",
  NEUTRAL: "Neutral",
  CRIMINAL: "Criminal Organization",
  CIVILIAN: "Civilian",
  INFORMANT: "Confidential Informant",
  UNKNOWN: "Unknown"
};

export const RELATIONSHIP_TYPE = {
  FAMILY: "Family",
  FRIEND: "Friend",
  ENEMY: "Enemy",
  RIVAL: "Rival",
  BUSINESS: "Business Partner",
  ROMANTIC: "Romantic",
  ACCOMPLICE: "Criminal Accomplice",
  INFORMANT_HANDLER: "Informant/Handler",
  UNKNOWN: "Unknown Connection"
};

export const THREAT_LEVEL = {
  HARMLESS: "Harmless",
  LOW: "Low Threat",
  MODERATE: "Moderate Threat",
  HIGH: "High Threat",
  EXTREME: "Extreme Threat",
  MOST_WANTED: "Most Wanted"
};

/**
 * NPC Data Model
 */
export class NPCModel {
  constructor(data = {}) {
    // Basic Information
    this.npcId = data.npcId || null;
    this.name = data.name || "Unknown Individual";
    this.aliases = data.aliases || [];
    this.age = data.age || null;
    this.gender = data.gender || null;
    this.occupation = data.occupation || "Unknown";
    this.address = data.address || "Unknown";
    this.status = data.status || NPC_STATUS.ALIVE;
    this.imageUrl = data.imageUrl || null;

    // Background
    this.background = {
      house: data.background?.house || null, // Hogwarts house
      bloodStatus: data.background?.bloodStatus || null, // Pure-blood, Half-blood, Muggle-born
      nationality: data.background?.nationality || "British",
      knownAffiliations: data.background?.knownAffiliations || [],
      education: data.background?.education || null,
      family: data.background?.family || [],
      history: data.background?.history || ""
    };

    // Criminal History
    this.criminalHistory = data.criminalHistory || [];

    // D&D Stats (if combatant)
    this.stats = data.stats || null;

    // Investigation Data
    this.investigation = {
      suspectInCases: data.investigation?.suspectInCases || [],
      witnessInCases: data.investigation?.witnessInCases || [],
      victimInCases: data.investigation?.victimInCases || [],
      alibi: data.investigation?.alibi || null,
      alibiVerified: data.investigation?.alibiVerified || false,
      motive: data.investigation?.motive || null,
      opportunity: data.investigation?.opportunity || null,
      means: data.investigation?.means || null,
      statements: data.investigation?.statements || [],
      knownInformation: data.investigation?.knownInformation || {
        publicKnowledge: [],
        investigationReveal: [],
        interrogationReveal: [],
        confidential: []
      }
    };

    // Relationships
    this.relationships = data.relationships || [];

    // Threat Assessment
    this.threatLevel = data.threatLevel || THREAT_LEVEL.HARMLESS;
    this.allegiance = data.allegiance || NPC_ALLEGIANCE.CIVILIAN;
    this.knownSpells = data.knownSpells || [];
    this.dangerousAbilities = data.dangerousAbilities || [];

    // Informant Data (if applicable)
    this.informant = data.informant || null;

    // GM Notes (hidden from players)
    this.gmNotes = data.gmNotes || "";
  }

  addCriminalRecord(offense, date, disposition, sentence = null) {
    this.criminalHistory.push({
      date,
      offense,
      disposition, // "Convicted", "Acquitted", "Charges Dropped", etc.
      sentence,
      caseNumber: null
    });
  }

  addStatement(characterId, statement, deceptionCheck = null) {
    this.investigation.statements.push({
      date: new Date().toISOString(),
      interviewedBy: characterId,
      statement,
      deceptionCheck,
      believed: deceptionCheck ? deceptionCheck >= 15 : null
    });
  }

  addRelationship(npcId, type, description) {
    this.relationships.push({
      npcId,
      type,
      description,
      confirmed: false
    });
  }

  becomeInformant(handlerId, reliability = "Unproven") {
    this.informant = {
      handlerId,
      since: new Date().toISOString(),
      reliability, // "Unproven", "Reliable", "Very Reliable", "Unreliable"
      timesProvided: 0,
      accuracyRate: null,
      lastContact: new Date().toISOString(),
      payment: 0, // Total galleons paid
      active: true
    };
  }
}

/**
 * NPC Stats Model (D&D style)
 */
export class NPCStatsModel {
  constructor(data = {}) {
    this.level = data.level || 1;
    this.abilities = {
      STR: data.abilities?.STR || 10,
      DEX: data.abilities?.DEX || 10,
      CON: data.abilities?.CON || 10,
      INT: data.abilities?.INT || 10,
      WIS: data.abilities?.WIS || 10,
      CHA: data.abilities?.CHA || 10
    };
    this.ac = data.ac || 10;
    this.hp = data.hp || 10;
    this.maxHp = data.maxHp || 10;
    this.speed = data.speed || 30;
    this.spells = data.spells || [];
    this.specialAbilities = data.specialAbilities || [];
    this.proficiencyBonus = data.proficiencyBonus || Math.floor((this.level - 1) / 4) + 2;
    this.savingThrows = data.savingThrows || {};
    this.skills = data.skills || {};
  }

  getAbilityModifier(ability) {
    return Math.floor((this.abilities[ability] - 10) / 2);
  }

  getSkillModifier(skill, abilityMap) {
    const ability = abilityMap[skill];
    const baseMod = this.getAbilityModifier(ability);
    const proficient = this.skills[skill] || 0;
    return baseMod + (proficient * this.proficiencyBonus);
  }
}

/**
 * Criminal Record Model
 */
export class CriminalRecordModel {
  constructor(data = {}) {
    this.recordId = data.recordId || null;
    this.npcId = data.npcId || null;
    this.date = data.date || new Date().toISOString();
    this.offense = data.offense || "";
    this.disposition = data.disposition || "Pending";
    this.sentence = data.sentence || null;
    this.caseNumber = data.caseNumber || null;
    this.arrestingAuror = data.arrestingAuror || null;
    this.details = data.details || "";
  }
}

/**
 * Informant Model
 */
export class InformantModel {
  constructor(data = {}) {
    this.informantId = data.informantId || null;
    this.npcId = data.npcId || null;
    this.codename = data.codename || this.generateCodename();
    this.handlerId = data.handlerId || null; // Character ID of Auror handler
    this.since = data.since || new Date().toISOString();
    this.reliability = data.reliability || "Unproven";
    this.timesProvided = data.timesProvided || 0;
    this.accuracyRate = data.accuracyRate || null;
    this.lastContact = data.lastContact || new Date().toISOString();
    this.totalPayment = data.totalPayment || 0;
    this.active = data.active ?? true;
    this.burned = data.burned || false; // If cover is blown
    this.inWitPro = data.inWitPro || false; // In witness protection
    this.intelligence = data.intelligence || []; // Array of intelligence provided
  }

  generateCodename() {
    const adjectives = ["Red", "Blue", "Silver", "Golden", "Shadow", "Swift", "Silent", "Crimson"];
    const nouns = ["Owl", "Phoenix", "Dragon", "Raven", "Fox", "Wolf", "Snake", "Eagle"];
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${adj} ${noun}`;
  }

  provideIntelligence(info, verified = false) {
    this.intelligence.push({
      date: new Date().toISOString(),
      information: info,
      verified,
      caseId: null
    });
    this.timesProvided++;
    this.lastContact = new Date().toISOString();
  }

  calculateReliability() {
    if (this.timesProvided === 0) return "Unproven";

    const verifiedCount = this.intelligence.filter(i => i.verified).length;
    const rate = verifiedCount / this.timesProvided;
    this.accuracyRate = Math.round(rate * 100);

    if (rate >= 0.9) return "Very Reliable";
    if (rate >= 0.7) return "Reliable";
    if (rate >= 0.5) return "Somewhat Reliable";
    return "Unreliable";
  }
}

/**
 * NPC Relationship Model
 */
export class NPCRelationshipModel {
  constructor(data = {}) {
    this.relationshipId = data.relationshipId || null;
    this.npcId1 = data.npcId1 || null;
    this.npcId2 = data.npcId2 || null;
    this.relationshipType = data.relationshipType || RELATIONSHIP_TYPE.UNKNOWN;
    this.description = data.description || "";
    this.confirmed = data.confirmed || false;
    this.discoveredBy = data.discoveredBy || null;
    this.dateDiscovered = data.dateDiscovered || null;
  }
}

/**
 * Utility Functions
 */

/**
 * Calculate NPC danger rating
 */
export const calculateDangerRating = (npc) => {
  let danger = 0;

  // Criminal history
  danger += (npc.criminalHistory?.length || 0) * 2;

  // Violent crimes
  const violentCrimes = npc.criminalHistory?.filter(c =>
    c.offense.includes("Murder") ||
    c.offense.includes("Assault") ||
    c.offense.includes("Unforgivable")
  ).length || 0;
  danger += violentCrimes * 5;

  // Threat level
  const threatLevelScore = {
    [THREAT_LEVEL.HARMLESS]: 0,
    [THREAT_LEVEL.LOW]: 2,
    [THREAT_LEVEL.MODERATE]: 5,
    [THREAT_LEVEL.HIGH]: 10,
    [THREAT_LEVEL.EXTREME]: 15,
    [THREAT_LEVEL.MOST_WANTED]: 20
  };
  danger += threatLevelScore[npc.threatLevel] || 0;

  // Stats
  if (npc.stats) {
    danger += Math.floor(npc.stats.level / 2);
  }

  // Allegiance
  if (npc.allegiance === NPC_ALLEGIANCE.DEATH_EATER) danger += 10;
  if (npc.allegiance === NPC_ALLEGIANCE.CRIMINAL) danger += 5;

  return danger;
};

/**
 * Build relationship web for visualization
 */
export const buildRelationshipWeb = (npcId, allNPCs, allRelationships, depth = 2) => {
  const web = {
    central: npcId,
    nodes: [],
    edges: []
  };

  const visited = new Set([npcId]);
  const queue = [{ npcId, currentDepth: 0 }];

  while (queue.length > 0) {
    const { npcId: currentId, currentDepth } = queue.shift();

    if (currentDepth >= depth) continue;

    // Find all relationships involving this NPC
    const connections = allRelationships.filter(
      r => r.npcId1 === currentId || r.npcId2 === currentId
    );

    connections.forEach(rel => {
      const connectedId = rel.npcId1 === currentId ? rel.npcId2 : rel.npcId1;

      if (!visited.has(connectedId)) {
        visited.add(connectedId);
        queue.push({ npcId: connectedId, currentDepth: currentDepth + 1 });

        const connectedNPC = allNPCs.find(n => n.npcId === connectedId);
        if (connectedNPC) {
          web.nodes.push({
            npcId: connectedId,
            name: connectedNPC.name,
            depth: currentDepth + 1
          });
        }
      }

      web.edges.push({
        from: currentId,
        to: connectedId,
        type: rel.relationshipType,
        description: rel.description
      });
    });
  }

  return web;
};

/**
 * Search NPCs by criteria
 */
export const searchNPCs = (allNPCs, criteria) => {
  return allNPCs.filter(npc => {
    if (criteria.name && !npc.name.toLowerCase().includes(criteria.name.toLowerCase())) {
      return false;
    }

    if (criteria.status && npc.status !== criteria.status) {
      return false;
    }

    if (criteria.allegiance && npc.allegiance !== criteria.allegiance) {
      return false;
    }

    if (criteria.threatLevel && npc.threatLevel !== criteria.threatLevel) {
      return false;
    }

    if (criteria.occupation && !npc.occupation.toLowerCase().includes(criteria.occupation.toLowerCase())) {
      return false;
    }

    if (criteria.hasCriminalHistory && (!npc.criminalHistory || npc.criminalHistory.length === 0)) {
      return false;
    }

    return true;
  });
};

/**
 * Generate NPC quick reference
 */
export const generateNPCQuickRef = (npc) => {
  return {
    name: npc.name,
    occupation: npc.occupation,
    status: npc.status,
    threatLevel: npc.threatLevel,
    allegiance: npc.allegiance,
    criminalRecords: npc.criminalHistory?.length || 0,
    knownAssociates: npc.relationships?.length || 0,
    isInformant: !!npc.informant,
    dangerRating: calculateDangerRating(npc)
  };
};

/**
 * Example NPC Templates
 */
export const EXAMPLE_NPCS = [
  {
    name: "Marcus Flint",
    age: 32,
    occupation: "Professional Quidditch Player (retired)",
    address: "Flat 7B, Diagon Alley",
    status: NPC_STATUS.ALIVE,
    background: {
      house: "Slytherin",
      bloodStatus: "Pure-blood",
      knownAffiliations: ["Pure-blood supremacist groups (suspected)", "Montrose Magpies"],
      family: ["Mother: Ursula Flint", "Father: Unknown"]
    },
    criminalHistory: [
      {
        date: "2018-05-12",
        offense: "Assault",
        disposition: "Charges Dropped",
        sentence: null
      }
    ],
    stats: {
      level: 5,
      abilities: { STR: 16, DEX: 12, CON: 14, INT: 10, WIS: 8, CHA: 13 },
      ac: 13,
      hp: 45,
      maxHp: 45,
      spells: ["Stupefy", "Protego", "Expelliarmus", "Petrificus Totalus"]
    },
    threatLevel: THREAT_LEVEL.MODERATE,
    allegiance: NPC_ALLEGIANCE.NEUTRAL,
    knownSpells: ["Stupefy", "Protego", "Expelliarmus"],
    gmNotes: "Actually innocent. Real killer is his brother using Polyjuice. Will become valuable informant if cleared."
  },

  {
    name: "Elara Blackwood",
    age: 28,
    occupation: "Apothecary Owner",
    address: "12 Knockturn Alley",
    status: NPC_STATUS.ALIVE,
    background: {
      house: "Ravenclaw",
      bloodStatus: "Half-blood",
      knownAffiliations: ["Slug Club Alumni"],
      family: []
    },
    criminalHistory: [],
    threatLevel: THREAT_LEVEL.LOW,
    allegiance: NPC_ALLEGIANCE.INFORMANT,
    informant: {
      codename: "Silver Raven",
      reliability: "Very Reliable",
      timesProvided: 12,
      accuracyRate: 92
    },
    gmNotes: "Valuable informant. Has connections in Knockturn Alley. Motivated by wanting to clean up her neighborhood."
  },

  {
    name: "Corvus Nott",
    age: 45,
    occupation: "Unknown (suspected Dark Arts dealer)",
    address: "Unknown",
    status: NPC_STATUS.FUGITIVE,
    background: {
      house: "Slytherin",
      bloodStatus: "Pure-blood",
      knownAffiliations: ["Death Eaters (suspected)", "Nott Family"],
      family: ["Father: Theodore Nott Sr. (deceased)", "Son: Theodore Nott Jr."]
    },
    criminalHistory: [
      {
        date: "2020-03-15",
        offense: "Illegal Dark Artifact Trafficking",
        disposition: "Convicted",
        sentence: "5 years Azkaban"
      },
      {
        date: "2023-08-22",
        offense: "Escape from Azkaban",
        disposition: "At Large",
        sentence: null
      }
    ],
    stats: {
      level: 12,
      abilities: { STR: 12, DEX: 14, CON: 13, INT: 17, WIS: 15, CHA: 16 },
      ac: 15,
      hp: 85,
      maxHp: 85,
      spells: ["Avada Kedavra", "Crucio", "Imperio", "Fiendfyre", "Advanced Dark Magic"]
    },
    threatLevel: THREAT_LEVEL.EXTREME,
    allegiance: NPC_ALLEGIANCE.DEATH_EATER,
    knownSpells: ["Unforgivable Curses", "Fiendfyre", "Dark Arts Mastery"],
    dangerousAbilities: ["Master Legilimens", "Skilled Occlumens", "Expert Duelist"],
    gmNotes: "PRIMARY ANTAGONIST. Masterminding artifact smuggling ring. Will not hesitate to kill Aurors."
  }
];

export default {
  NPC_STATUS,
  NPC_ALLEGIANCE,
  RELATIONSHIP_TYPE,
  THREAT_LEVEL,
  NPCModel,
  NPCStatsModel,
  CriminalRecordModel,
  InformantModel,
  NPCRelationshipModel,
  calculateDangerRating,
  buildRelationshipWeb,
  searchNPCs,
  generateNPCQuickRef,
  EXAMPLE_NPCS
};
