/**
 * Auror Combat & Investigation Spells
 *
 * Curated spell list for Auror RPG with rank restrictions and licensing requirements.
 * Organized by combat/investigation focus rather than school subjects.
 */

export const SPELL_CATEGORIES = {
  COMBAT_OFFENSIVE: "Combat - Offensive",
  COMBAT_DEFENSIVE: "Combat - Defensive",
  INVESTIGATION: "Investigation & Detection",
  TRACKING: "Tracking & Pursuit",
  INFILTRATION: "Infiltration & Disguise",
  UTILITY: "Utility & Support",
  RESTRICTED_MIND: "Restricted - Mind Magic",
  RESTRICTED_DARK: "Restricted - Dark Magic",
  UNFORGIVABLE: "Unforgivable Curses"
};

export const LICENSE_TYPES = {
  BASIC_COMBAT: "Basic Combat License",
  ADVANCED_COMBAT: "Advanced Combat License",
  INVESTIGATION: "Investigation License",
  RESTRICTED_MIND: "Restricted Mind Magic License",
  RESTRICTED_DARK: "Restricted Dark Magic License",
  UNFORGIVABLE: "Unforgivable Curse License - Emergency Use Only"
};

/**
 * Auror Spell Database
 *
 * Each spell includes:
 * - rank: Minimum Auror rank required (1-10)
 * - restricted: Requires special authorization
 * - license: Type of license required
 * - aurorNotes: In-universe legal/procedural notes
 * - restrictions: Legal restrictions on use
 */
export const AUROR_SPELLS = [
  // ===== CANTRIPS (Rank 1) =====
  {
    name: "Lumos",
    school: SPELL_CATEGORIES.UTILITY,
    level: 0,
    rank: 1,
    restricted: false,
    castingTime: "1 action",
    range: "Self",
    components: "V, S",
    duration: "1 hour",
    description: "Your wand tip lights up, shedding bright light in a 20-foot radius and dim light for an additional 20 feet. You can extinguish the light as a bonus action.",
    license: LICENSE_TYPES.BASIC_COMBAT,
    aurorNotes: "Standard utility spell for all Aurors. No restrictions."
  },

  {
    name: "Stupefy",
    school: SPELL_CATEGORIES.COMBAT_OFFENSIVE,
    level: 0,
    rank: 1,
    restricted: false,
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    description: "Make a ranged spell attack. On hit, target must succeed on Constitution save (DC = 8 + prof + spell mod) or be stunned until end of your next turn.",
    license: LICENSE_TYPES.BASIC_COMBAT,
    aurorNotes: "Standard non-lethal takedown spell. Use of force must be justified in incident report.",
    higherLevels: "When cast at 1st level or higher, stun duration increases by 1 round per spell level."
  },

  {
    name: "Expelliarmus",
    school: SPELL_CATEGORIES.COMBAT_DEFENSIVE,
    level: 0,
    rank: 1,
    restricted: false,
    castingTime: "1 reaction (when creature casts spell)",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    description: "Make a ranged spell attack. On hit, target must make a Strength save or drop their wand, which flies 10 feet in random direction.",
    license: LICENSE_TYPES.BASIC_COMBAT,
    aurorNotes: "Preferred disarming spell. Minimizes harm while neutralizing threat.",
    higherLevels: "At 5th level, can knock wand up to 30 feet away. At 11th level, can disarm and catch the wand."
  },

  {
    name: "Protego",
    school: SPELL_CATEGORIES.COMBAT_DEFENSIVE,
    level: 0,
    rank: 1,
    restricted: false,
    castingTime: "1 reaction (when attacked)",
    range: "Self",
    components: "V, S",
    duration: "Instantaneous",
    description: "Add +5 to AC against one attack. If attack misses, you can use your next reaction to make a spell attack against the attacker.",
    license: LICENSE_TYPES.BASIC_COMBAT,
    aurorNotes: "Essential defensive spell. All Aurors must demonstrate proficiency in training.",
    higherLevels: "At 5th level, can protect one ally within 10 feet. At 11th level, can reflect spell back at caster."
  },

  // ===== 1ST LEVEL SPELLS =====
  {
    name: "Petrificus Totalus",
    school: SPELL_CATEGORIES.COMBAT_OFFENSIVE,
    level: 1,
    rank: 1,
    restricted: false,
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    description: "Target must make Constitution save or be paralyzed. At end of each turn, target can repeat save to break free.",
    license: LICENSE_TYPES.BASIC_COMBAT,
    aurorNotes: "Non-lethal restraint. Use for arrests and suspect control. Target must be monitored to prevent injury from fall."
  },

  {
    name: "Revelio",
    school: SPELL_CATEGORIES.INVESTIGATION,
    level: 1,
    rank: 1,
    restricted: false,
    castingTime: "1 action",
    range: "30 feet",
    components: "V, S",
    duration: "Instantaneous",
    description: "Reveal invisible objects, creatures, or hidden compartments in 30-foot radius. Make Arcana check (DC varies) to detect magical concealment.",
    license: LICENSE_TYPES.INVESTIGATION,
    aurorNotes: "Standard investigation spell. Can be used without warrant in plain view situations. For private property, warrant required."
  },

  {
    name: "Homenum Revelio",
    school: SPELL_CATEGORIES.INVESTIGATION,
    level: 1,
    rank: 2,
    restricted: false,
    castingTime: "1 action",
    range: "120 feet",
    components: "V, S",
    duration: "Instantaneous",
    description: "Detect presence of humans within 120 feet. Learn approximate number and general direction, but not identity.",
    license: LICENSE_TYPES.INVESTIGATION,
    aurorNotes: "Useful for building searches and suspect location. Constitutional concerns if used on private property without warrant."
  },

  {
    name: "Incendio",
    school: SPELL_CATEGORIES.COMBAT_OFFENSIVE,
    level: 1,
    rank: 2,
    restricted: false,
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    description: "Target takes 2d8 fire damage, or half on successful Dexterity save. Ignites flammable objects.",
    license: LICENSE_TYPES.ADVANCED_COMBAT,
    aurorNotes: "Potentially lethal. Use only when deadly force authorized. Risk of collateral damage - use with extreme caution.",
    higherLevels: "Damage increases by 1d8 per spell level above 1st."
  },

  // ===== 2ND LEVEL SPELLS =====
  {
    name: "Bombarda",
    school: SPELL_CATEGORIES.COMBAT_OFFENSIVE,
    level: 2,
    rank: 3,
    restricted: false,
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    description: "Target point explodes in 10-foot radius. Creatures take 3d10 force damage (Dexterity save for half). Destroys non-magical doors and barriers.",
    license: LICENSE_TYPES.ADVANCED_COMBAT,
    aurorNotes: "Breach spell for tactical entry. High collateral damage risk. Requires Lead Auror approval for use. Property damage must be documented.",
    higherLevels: "Damage increases by 1d10 per spell level. Radius increases by 5 feet at 5th level."
  },

  {
    name: "Protego Maxima",
    school: SPELL_CATEGORIES.COMBAT_DEFENSIVE,
    level: 2,
    rank: 2,
    restricted: false,
    castingTime: "1 action",
    range: "30 feet",
    components: "V, S",
    duration: "Concentration, up to 10 minutes",
    description: "Create protective barrier in 15-foot radius. Allies within gain +2 AC and advantage on saves against spells.",
    license: LICENSE_TYPES.BASIC_COMBAT,
    aurorNotes: "Defensive spell for team protection. Recommended for high-risk operations."
  },

  {
    name: "Aparecium",
    school: SPELL_CATEGORIES.INVESTIGATION,
    level: 2,
    rank: 1,
    restricted: false,
    castingTime: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "Instantaneous",
    description: "Reveal invisible ink, secret messages, or hidden writing on documents, walls, or objects touched.",
    license: LICENSE_TYPES.INVESTIGATION,
    aurorNotes: "Evidence revelation spell. Properly document before and after for chain of custody. Warrant may be required for private documents."
  },

  // ===== 3RD LEVEL SPELLS =====
  {
    name: "Legilimens",
    school: SPELL_CATEGORIES.RESTRICTED_MIND,
    level: 3,
    rank: 5,
    restricted: true,
    castingTime: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    description: "Attempt to read target's surface thoughts. Target makes Wisdom save. On failure, you perceive current thoughts and can ask one question per round they fail subsequent saves.",
    license: LICENSE_TYPES.RESTRICTED_MIND,
    aurorNotes: "REQUIRES: Warrant or Director approval. All uses must be logged. Evidence obtained may be inadmissible in court without proper authorization. Use on Ministry officials requires Department Head approval.",
    restrictions: [
      "Warrant required except in emergency",
      "Must have witness present",
      "Subject must be read their rights",
      "Cannot be used on Ministry officials without authorization"
    ]
  },

  {
    name: "Prior Incantato",
    school: SPELL_CATEGORIES.INVESTIGATION,
    level: 3,
    rank: 3,
    restricted: false,
    castingTime: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "Instantaneous",
    description: "Touch a wand to reveal the last 3 spells cast with it. Make Arcana check (DC 15) to learn caster's identity if wand is registered.",
    license: LICENSE_TYPES.INVESTIGATION,
    aurorNotes: "Critical forensic spell. Maintain chain of custody for wand evidence. Cross-reference with Ministry wand registry."
  },

  {
    name: "Confringo",
    school: SPELL_CATEGORIES.COMBAT_OFFENSIVE,
    level: 3,
    rank: 4,
    restricted: false,
    castingTime: "1 action",
    range: "120 feet",
    components: "V, S",
    duration: "Instantaneous",
    description: "Explosive curse. Target takes 5d10 fire damage (Dexterity save for half). Creatures within 5 feet take 2d10 fire damage.",
    license: LICENSE_TYPES.ADVANCED_COMBAT,
    aurorNotes: "POTENTIALLY LETHAL. Use only when deadly force is authorized. High collateral damage. Requires Senior Auror rank minimum. Incident review mandatory.",
    higherLevels: "Primary damage increases by 1d10 per level above 3rd."
  },

  // ===== 4TH LEVEL SPELLS =====
  {
    name: "Obliviate",
    school: SPELL_CATEGORIES.RESTRICTED_MIND,
    level: 4,
    rank: 5,
    restricted: true,
    castingTime: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "Permanent until restored",
    description: "Modify or erase target's memories. Target makes Wisdom save. On failure, you can erase or alter memories up to 1 hour of their life. Can be restored with Greater Restoration or similar magic.",
    license: LICENSE_TYPES.RESTRICTED_MIND,
    aurorNotes: "EXTREME RESTRICTIONS. Requires Lead Auror authorization minimum. Primary use: Breach of Secrecy violations (Muggles witnessing magic). Requires detailed paperwork. Unauthorized use = criminal charges. Memory backup required via Pensieve before modification.",
    restrictions: [
      "Lead Auror or higher authorization required",
      "Primarily for Breach of Secrecy cases",
      "Pensieve backup of original memory mandatory",
      "Detailed incident report required within 24 hours",
      "Modification log must be filed with Department of Mysteries",
      "Cannot be used on magical citizens without Director approval"
    ]
  },

  {
    name: "Piertotum Locomotor",
    school: SPELL_CATEGORIES.UTILITY,
    level: 4,
    rank: 4,
    restricted: false,
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Concentration, up to 1 hour",
    description: "Animate up to 5 suits of armor or statues to fight for you. They have AC 16, 30 HP, +6 to hit, deal 2d6+3 damage, and follow your commands.",
    license: LICENSE_TYPES.ADVANCED_COMBAT,
    aurorNotes: "Tactical support spell. Useful for overwhelming suspects or providing cover. Animated objects count as magical constructs for legal purposes."
  },

  // ===== 5TH LEVEL SPELLS =====
  {
    name: "Fiendfyre",
    school: SPELL_CATEGORIES.RESTRICTED_DARK,
    level: 5,
    rank: 7,
    restricted: true,
    castingTime: "1 action",
    range: "120 feet",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    description: "Summon cursed fire in 20-foot radius. Creatures take 8d10 fire damage per turn (Dexterity save for half). Fire spreads 10 feet per round and destroys nearly everything. Requires Concentration check (DC 18) each round or lose control.",
    license: LICENSE_TYPES.RESTRICTED_DARK,
    aurorNotes: "EXTREMELY DANGEROUS. Requires Senior Chief Auror authorization. Use only for destruction of Horcruxes or similar dark artifacts. Uncontrolled Fiendfyre can devastate entire buildings. Emergency containment team must be on standby. User liable for all damage if control is lost.",
    restrictions: [
      "Senior Chief Auror authorization required",
      "Only for destruction of dark artifacts or emergency situations",
      "Fire brigade and containment team must be on standby",
      "Area must be evacuated",
      "User personally liable if fire goes out of control"
    ]
  },

  {
    name: "Tracking Charm",
    school: SPELL_CATEGORIES.TRACKING,
    level: 5,
    rank: 5,
    restricted: false,
    castingTime: "1 minute",
    range: "Touch",
    components: "V, S, M (a piece of parchment)",
    duration: "7 days",
    description: "Place invisible tracking charm on object or person. For 7 days, you know the exact location of the target at all times. Target can make Wisdom save to detect the charm (DC = your spell save DC).",
    license: LICENSE_TYPES.INVESTIGATION,
    aurorNotes: "Requires warrant for use on persons. Can be used on suspects' property with probable cause. Location data must be logged hourly for evidence purposes."
  },

  // ===== 6TH LEVEL SPELLS =====
  {
    name: "Protego Diabolica",
    school: SPELL_CATEGORIES.COMBAT_DEFENSIVE,
    level: 6,
    rank: 6,
    restricted: true,
    castingTime: "1 action",
    range: "Self",
    components: "V, S",
    duration: "Concentration, up to 10 minutes",
    description: "Create ring of black fire in 30-foot radius. You choose which creatures can pass safely. Enemies who enter take 8d10 fire damage. Fire grants you and allies +3 AC and advantage on saves.",
    license: LICENSE_TYPES.RESTRICTED_DARK,
    aurorNotes: "Defensive dark magic. Requires Chief Auror authorization. Use for high-value target protection or critical defensive situations. Fire can harm bystanders - area must be secured."
  },

  // ===== 7TH LEVEL SPELLS =====
  {
    name: "Vulnera Sanentur",
    school: SPELL_CATEGORIES.UTILITY,
    level: 7,
    rank: 6,
    restricted: false,
    castingTime: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "Instantaneous",
    description: "Heal grievous wounds. Target regains 10d8 + 40 HP. Can heal wounds from dark magic, including sectumsempra.",
    license: LICENSE_TYPES.ADVANCED_COMBAT,
    aurorNotes: "Critical field healing spell for Auror casualties. Recommended for all Senior Aurors."
  },

  // ===== 8TH LEVEL SPELLS =====
  {
    name: "Morsmordre",
    school: SPELL_CATEGORIES.RESTRICTED_DARK,
    level: 8,
    rank: 8,
    restricted: true,
    castingTime: "1 action",
    range: "500 feet",
    components: "V, S",
    duration: "1 hour",
    description: "Conjure the Dark Mark in the sky - a giant skull with serpent tongue. Visible for miles. Creates terror in civilians (Wisdom save DC 18 or frightened for 1 minute).",
    license: LICENSE_TYPES.RESTRICTED_DARK,
    aurorNotes: "FORBIDDEN FOR AUROR USE except in training simulations. Casting this spell in the field is a criminal offense. Death Eaters use this to mark kills. Knowledge required for countermeasures only.",
    restrictions: [
      "FORBIDDEN - Training purposes only",
      "Unauthorized use = immediate termination and criminal charges",
      "Knowledge required for identification and dispelling"
    ]
  },

  // ===== UNFORGIVABLE CURSES (9TH LEVEL) =====
  {
    name: "Imperio",
    school: SPELL_CATEGORIES.UNFORGIVABLE,
    level: 9,
    rank: 9,
    restricted: true,
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "8 hours",
    description: "Target must make Wisdom save (DC = your spell save DC + 2) or fall under your complete control. You can issue commands telepathically. Target obeys to the best of their ability. Save can be repeated every hour.",
    license: LICENSE_TYPES.UNFORGIVABLE,
    aurorNotes: "UNFORGIVABLE CURSE. Requires Head Auror rank minimum. Emergency use only with extreme justification (terrorist with bomb, hostage situation with no alternatives). Immediate tribunal follows ANY use. Unauthorized use = life sentence in Azkaban. Must have witnesses or Pensieve evidence. All circumstances reviewed by Wizengamot committee.",
    restrictions: [
      "Head Auror or Director authorization required",
      "Emergency situations only - must be defending lives with no alternative",
      "Director must be notified within 1 hour",
      "Automatic investigation and tribunal",
      "Requires witness or Pensieve evidence",
      "Career-ending if deemed unjustified",
      "Use on magical law enforcement or government officials = automatic life sentence"
    ]
  },

  {
    name: "Crucio",
    school: SPELL_CATEGORIES.UNFORGIVABLE,
    level: 9,
    rank: 9,
    restricted: true,
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    description: "Target suffers excruciating pain. Must make Constitution save or be incapacitated with pain. Each round, take 6d10 psychic damage. Prolonged use (multiple minutes) can cause permanent insanity.",
    license: LICENSE_TYPES.UNFORGIVABLE,
    aurorNotes: "UNFORGIVABLE CURSE. ILLEGAL FOR AUROR USE. No circumstances justify torture. Even in extreme emergency, this curse is NEVER authorized. Knowledge required for identification and defense only. Casting = immediate arrest and life in Azkaban.",
    restrictions: [
      "ABSOLUTELY FORBIDDEN",
      "No authorization possible under any circumstances",
      "Knowledge for defensive purposes only",
      "Casting = immediate arrest, trial, and life sentence in Azkaban",
      "No exceptions - even Director cannot authorize"
    ]
  },

  {
    name: "Avada Kedavra",
    school: SPELL_CATEGORIES.UNFORGIVABLE,
    level: 9,
    rank: 9,
    restricted: true,
    castingTime: "1 action",
    range: "30 feet",
    components: "V, S",
    duration: "Instantaneous",
    description: "Green bolt of death. Ranged spell attack. On hit, target dies instantly (no save, no HP threshold). No resurrection possible except True Resurrection or similar 9th level magic.",
    license: LICENSE_TYPES.UNFORGIVABLE,
    aurorNotes: "THE KILLING CURSE. UNFORGIVABLE. Requires Head Auror rank minimum. USE ONLY IN EXTREME CIRCUMSTANCES. Immediate tribunal follows any use. Authorized scenarios: Active deadly threat, protecting lives, terrorist with weapon of mass destruction, no non-lethal alternative exists. Unauthorized use = life in Azkaban. Must have witness or Pensieve evidence. Full Wizengamot review.",
    restrictions: [
      "Head Auror or Director authorization required",
      "Extreme emergency situations only",
      "Must be defending lives with absolutely no alternative",
      "All non-lethal options must be exhausted first",
      "Director must be notified within 1 hour",
      "Automatic full Wizengamot investigation",
      "Requires witness or Pensieve evidence",
      "Career-ending if deemed unjustified",
      "False testimony about justification = additional life sentence"
    ]
  }
];

/**
 * Get spells by category
 */
export const getSpellsByCategory = (category) => {
  return AUROR_SPELLS.filter(spell => spell.school === category);
};

/**
 * Get spells available at rank
 */
export const getSpellsAvailableAtRank = (rank) => {
  return AUROR_SPELLS.filter(spell => spell.rank <= rank);
};

/**
 * Get spell by name
 */
export const getSpellByName = (name) => {
  return AUROR_SPELLS.find(spell => spell.name.toLowerCase() === name.toLowerCase());
};

/**
 * Check if character can legally cast spell
 */
export const canCastSpell = (spell, character) => {
  const characterRank = character.aurorRank || 1;

  // Check rank requirement
  if (characterRank < spell.rank) {
    return {
      canCast: false,
      reason: `Requires ${spell.rank >= 9 ? 'Head Auror' : 'rank ' + spell.rank} or higher`,
      legal: false
    };
  }

  // Check if restricted spell
  if (spell.restricted) {
    // Check if character has authorization
    const hasAuth = character.spellLicenses?.some(
      license => license.spellName === spell.name && license.authorized
    );

    if (!hasAuth) {
      return {
        canCast: false,
        reason: "Requires special authorization",
        legal: false,
        requiresAuthorization: true
      };
    }

    // Has authorization, but warn about legal requirements
    return {
      canCast: true,
      legal: true,
      warning: spell.aurorNotes,
      restrictions: spell.restrictions
    };
  }

  // Non-restricted spell, check spell level
  const maxSpellLevel = Math.ceil(characterRank / 2) + 1; // Rough approximation
  if (spell.level > maxSpellLevel) {
    return {
      canCast: false,
      reason: `Spell level too high for current rank`,
      legal: true
    };
  }

  return { canCast: true, legal: true };
};

/**
 * Get spell license requirements
 */
export const getSpellLicenseInfo = (spell) => {
  return {
    license: spell.license,
    rank: spell.rank,
    restricted: spell.restricted,
    legalNotes: spell.aurorNotes,
    restrictions: spell.restrictions || []
  };
};

export default AUROR_SPELLS;
