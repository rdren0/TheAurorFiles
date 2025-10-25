/**
 * Auror Combat & Investigation Spells
 *
 * Comprehensive spell list for noir Auror RPG with rank restrictions and licensing requirements.
 * Organized by practical usage rather than academic school subjects.
 */

export const SPELL_CATEGORIES = {
  COMBAT_OFFENSIVE: "Combat - Offensive",
  COMBAT_DEFENSIVE: "Combat - Defensive",
  INVESTIGATION: "Investigation & Detection",
  TRACKING: "Tracking & Pursuit",
  INFILTRATION: "Infiltration & Disguise",
  INTIMIDATION: "Intimidation & Interrogation",
  UTILITY: "Utility & Support",
  HEALING: "Medical & Healing",
  RESTRICTED_MIND: "Restricted - Mind Magic",
  RESTRICTED_DARK: "Restricted - Dark Magic",
  UNFORGIVABLE: "Unforgivable Curses"
};

export const LICENSE_TYPES = {
  BASIC_COMBAT: "Basic Combat License",
  ADVANCED_COMBAT: "Advanced Combat License",
  INVESTIGATION: "Investigation License",
  INTERROGATION: "Interrogation Tactics License",
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
    name: "Nox",
    school: SPELL_CATEGORIES.UTILITY,
    level: 0,
    rank: 1,
    restricted: false,
    castingTime: "1 action",
    range: "Self",
    components: "V, S",
    duration: "Instantaneous",
    description: "Extinguish the light from Lumos or other magical light sources within 10 feet.",
    license: LICENSE_TYPES.BASIC_COMBAT,
    aurorNotes: "Pairs with Lumos for tactical lighting control."
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
    name: "Accio",
    school: SPELL_CATEGORIES.UTILITY,
    level: 1,
    rank: 1,
    restricted: false,
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    description: "Target object you can see flies into your hand. If held by creature, they make Strength save. Weight limit 10 lbs per caster level.",
    license: LICENSE_TYPES.INVESTIGATION,
    aurorNotes: "Essential evidence collection spell. Document all items summoned for chain of custody. Cannot summon items from secured evidence without authorization."
  },

  {
    name: "Alohomora",
    school: SPELL_CATEGORIES.INFILTRATION,
    level: 1,
    rank: 1,
    restricted: false,
    castingTime: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "Instantaneous",
    description: "Unlock non-magical locks. Make Arcana check (DC 15 + lock quality) to open magical locks.",
    license: LICENSE_TYPES.INVESTIGATION,
    aurorNotes: "Standard entry spell. Warrant required for private property. Emergency entry must be justified. Document all forced entries in incident report."
  },

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
    name: "Incarcerous",
    school: SPELL_CATEGORIES.COMBAT_OFFENSIVE,
    level: 1,
    rank: 1,
    restricted: false,
    castingTime: "1 action",
    range: "30 feet",
    components: "V, S",
    duration: "1 hour",
    description: "Conjure ropes that bind target. Target makes Dexterity save or becomes restrained. DC 18 Strength check or DC 15 Acrobatics check to escape.",
    license: LICENSE_TYPES.BASIC_COMBAT,
    aurorNotes: "Standard restraint for arrests. Must be replaced with regulation cuffs during transport."
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

  {
    name: "Aguamenti",
    school: SPELL_CATEGORIES.UTILITY,
    level: 1,
    rank: 1,
    restricted: false,
    castingTime: "1 action",
    range: "30 feet",
    components: "V, S",
    duration: "Instantaneous or Concentration up to 1 minute",
    description: "Create clean water. Instant: Fill one container with water. Sustained: Stream of water pours from wand (can extinguish fires, provide drinking water).",
    license: LICENSE_TYPES.BASIC_COMBAT,
    aurorNotes: "Utility spell for fire suppression and survival situations."
  },

  {
    name: "Episkey",
    school: SPELL_CATEGORIES.HEALING,
    level: 1,
    rank: 1,
    restricted: false,
    castingTime: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "Instantaneous",
    description: "Heal minor injuries. Target regains 1d8 + spellcasting modifier HP. Can mend broken bones (small ones like nose, fingers).",
    license: LICENSE_TYPES.BASIC_COMBAT,
    aurorNotes: "Basic field medicine. All Aurors trained in this spell."
  },

  {
    name: "Diffindo",
    school: SPELL_CATEGORIES.UTILITY,
    level: 1,
    rank: 1,
    restricted: false,
    castingTime: "1 action",
    range: "30 feet",
    components: "V, S",
    duration: "Instantaneous",
    description: "Sever or cut target object or material. Deals 2d8 slashing damage to creatures (Dexterity save for half).",
    license: LICENSE_TYPES.BASIC_COMBAT,
    aurorNotes: "Utility cutting spell. Can be used to cut ropes, fabric, thin materials. Potentially dangerous to people - justify use in reports."
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
    name: "Reducto",
    school: SPELL_CATEGORIES.COMBAT_OFFENSIVE,
    level: 2,
    rank: 2,
    restricted: false,
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    description: "Blast solid objects to pieces. Deals 4d6 force damage to objects (ignores hardness). Against creatures, deals 2d6 force damage (Dexterity save for half).",
    license: LICENSE_TYPES.ADVANCED_COMBAT,
    aurorNotes: "Breaching spell. Less collateral damage than Bombarda. Document all property damage."
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

  {
    name: "Specialis Revelio",
    school: SPELL_CATEGORIES.INVESTIGATION,
    level: 2,
    rank: 2,
    restricted: false,
    castingTime: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "Instantaneous",
    description: "Reveal magical properties, enchantments, and curses on touched object or creature. Learn school of magic and general effect.",
    license: LICENSE_TYPES.INVESTIGATION,
    aurorNotes: "Essential forensic spell for magical evidence analysis."
  },

  {
    name: "Colloportus",
    school: SPELL_CATEGORIES.UTILITY,
    level: 2,
    rank: 1,
    restricted: false,
    castingTime: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "Until dispelled",
    description: "Magically lock door, chest, or container. DC 20 + caster level to pick. Alohomora can open with contested Arcana check.",
    license: LICENSE_TYPES.BASIC_COMBAT,
    aurorNotes: "Secure crime scenes and evidence. Do not use to prevent suspect from leaving without proper arrest authority."
  },

  {
    name: "Silencio",
    school: SPELL_CATEGORIES.UTILITY,
    level: 2,
    rank: 1,
    restricted: false,
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Concentration, up to 10 minutes",
    description: "Target creature must make Wisdom save or become unable to speak or make noise. Cannot cast spells with verbal components.",
    license: LICENSE_TYPES.BASIC_COMBAT,
    aurorNotes: "Tactical silence. Useful for preventing suspects from alerting others. Cannot be used to prevent suspect from invoking rights."
  },

  {
    name: "Muffliato",
    school: SPELL_CATEGORIES.INFILTRATION,
    level: 2,
    rank: 2,
    restricted: false,
    castingTime: "1 action",
    range: "Self",
    components: "V, S",
    duration: "1 hour",
    description: "Create 15-foot radius of muffled buzzing around you. Those outside cannot hear conversations within. Those inside hear normally.",
    license: LICENSE_TYPES.INVESTIGATION,
    aurorNotes: "Counter-surveillance spell. Useful for confidential discussions in the field. Does not defeat magical eavesdropping."
  },

  {
    name: "Obscuro",
    school: SPELL_CATEGORIES.INTIMIDATION,
    level: 2,
    rank: 2,
    restricted: false,
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    description: "Conjure blindfold on target. Constitution save or blinded. Can attempt to remove as action (DC = spell save DC).",
    license: LICENSE_TYPES.INTERROGATION,
    aurorNotes: "Disorientation tactic. Useful for moving suspects or witnesses without revealing location. Interrogation use requires supervisor approval."
  },

  {
    name: "Scourgify",
    school: SPELL_CATEGORIES.UTILITY,
    level: 2,
    rank: 1,
    restricted: false,
    castingTime: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "Instantaneous",
    description: "Clean object or 10-foot area of mundane dirt, grime, and stains. Does not remove magical traces or evidence.",
    license: LICENSE_TYPES.BASIC_COMBAT,
    aurorNotes: "DO NOT USE ON CRIME SCENES. Evidence destruction = criminal charges. Approved for cleaning equipment and offices only."
  },

  {
    name: "Reparo",
    school: SPELL_CATEGORIES.UTILITY,
    level: 2,
    rank: 1,
    restricted: false,
    castingTime: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "Instantaneous",
    description: "Repair broken non-magical object. Works on items broken within last 24 hours. Cannot repair magical items without higher spell levels.",
    license: LICENSE_TYPES.BASIC_COMBAT,
    aurorNotes: "Evidence reconstruction. Document condition before and after repair. Cannot be used to destroy evidence by 'repairing' crime scene."
  },

  {
    name: "Furnunculus",
    school: SPELL_CATEGORIES.INTIMIDATION,
    level: 2,
    rank: 2,
    restricted: false,
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "1 hour",
    description: "Target breaks out in painful boils. Constitution save or take 2d6 damage and disadvantage on Charisma checks. Causes significant discomfort.",
    license: LICENSE_TYPES.INTERROGATION,
    aurorNotes: "Non-lethal affliction hex. Causes pain and humiliation. Interrogation use must be logged. Subject must be treated after questioning. Prolonged use may constitute torture."
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
    name: "Appare Vestigium",
    school: SPELL_CATEGORIES.TRACKING,
    level: 3,
    rank: 3,
    restricted: false,
    castingTime: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "Concentration, up to 10 minutes",
    description: "Reveal magical traces and spell echoes in 30-foot radius. See ghostly images of spells cast in last hour. Make Investigation check to determine timeline.",
    license: LICENSE_TYPES.INVESTIGATION,
    aurorNotes: "Advanced crime scene reconstruction. Shows magical activity but not physical actions. Document findings immediately."
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

  {
    name: "Finite Incantatem",
    school: SPELL_CATEGORIES.UTILITY,
    level: 3,
    rank: 2,
    restricted: false,
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    description: "End all spell effects on target creature or object. Make contested Arcana check vs caster's spell save DC for each effect.",
    license: LICENSE_TYPES.BASIC_COMBAT,
    aurorNotes: "Essential counter-spell. Useful for removing curses from victims and ending hostile enchantments."
  },

  {
    name: "Arresto Momentum",
    school: SPELL_CATEGORIES.TRACKING,
    level: 3,
    rank: 2,
    restricted: false,
    castingTime: "1 reaction (when creature moves)",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    description: "Slow or stop falling/moving creature or object. Target's speed becomes 0 until end of their next turn. Negates falling damage.",
    license: LICENSE_TYPES.BASIC_COMBAT,
    aurorNotes: "Pursuit and rescue spell. Can prevent suspects from escaping via falling/jumping. Also used to save falling civilians."
  },

  {
    name: "Slugulus Eructo",
    school: SPELL_CATEGORIES.INTIMIDATION,
    level: 3,
    rank: 3,
    restricted: false,
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "1 minute",
    description: "Target vomits slugs uncontrollably. Constitution save or become incapacitated and take 1d6 damage per round. Can repeat save each round.",
    license: LICENSE_TYPES.INTERROGATION,
    aurorNotes: "Severe disabling curse. Effective intimidation but causes extreme distress. Interrogation use requires Senior Auror approval. Medical attention required after 3 rounds. Prolonged use may constitute cruel treatment."
  },

  {
    name: "Tarantallegra",
    school: SPELL_CATEGORIES.INTIMIDATION,
    level: 3,
    rank: 2,
    restricted: false,
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    description: "Target's legs dance uncontrollably. Dexterity save or speed becomes 0 and disadvantage on attacks. Falls prone if fails save by 5+.",
    license: LICENSE_TYPES.INTERROGATION,
    aurorNotes: "Non-lethal disabling hex. Humiliating but non-harmful. Useful for preventing escape or as psychological pressure during interrogation."
  },

  {
    name: "Erecto",
    school: SPELL_CATEGORIES.UTILITY,
    level: 3,
    rank: 1,
    restricted: false,
    castingTime: "1 action",
    range: "30 feet",
    components: "V, S",
    duration: "8 hours",
    description: "Erect tent, barrier, or temporary structure. Can set up crime scene perimeter or field command post.",
    license: LICENSE_TYPES.BASIC_COMBAT,
    aurorNotes: "Field operations utility. Essential for long-term stakeouts and crime scene security."
  },

  {
    name: "Duro",
    school: SPELL_CATEGORIES.UTILITY,
    level: 3,
    rank: 2,
    restricted: false,
    castingTime: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "1 hour",
    description: "Turn object to stone. AC becomes 17, gains damage resistance. Living creatures get Constitution save to resist.",
    license: LICENSE_TYPES.BASIC_COMBAT,
    aurorNotes: "Utility transmutation. Can secure doors, create barriers, or (with approval) temporarily petrify dangerous suspects."
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

  {
    name: "Evanesco",
    school: SPELL_CATEGORIES.UTILITY,
    level: 4,
    rank: 3,
    restricted: false,
    castingTime: "1 action",
    range: "30 feet",
    components: "V, S",
    duration: "Instantaneous",
    description: "Vanish non-living object up to 10 cubic feet. Object ceases to exist. Cannot be used on magical items without higher spell levels.",
    license: LICENSE_TYPES.BASIC_COMBAT,
    aurorNotes: "WARNING: Evidence destruction = criminal charges. Only use for hazardous material disposal with authorization. All uses must be documented."
  },

  {
    name: "Calvario",
    school: SPELL_CATEGORIES.INTIMIDATION,
    level: 4,
    rank: 3,
    restricted: false,
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "24 hours",
    description: "Target's hair falls out. Constitution save or become bald. Extremely humiliating but harmless. Hair regrows normally after duration.",
    license: LICENSE_TYPES.INTERROGATION,
    aurorNotes: "Psychological intimidation hex. Non-harmful but humiliating. Useful for breaking confidence of vain suspects. Interrogation use must be logged."
  },

  {
    name: "Entrail-Expelling Curse",
    school: SPELL_CATEGORIES.INTIMIDATION,
    level: 4,
    rank: 5,
    restricted: true,
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    description: "Target's insides are violently expelled. Constitution save or take 6d10 necrotic damage and stunned for 1 round. Half damage on save.",
    license: LICENSE_TYPES.ADVANCED_COMBAT,
    aurorNotes: "EXTREMELY GRAPHIC AND LETHAL. Restricted to emergency lethal force situations. Often used by dark wizards as signature curse. Finding victim of this curse indicates serious dark wizard threat. Use requires immediate incident report and justification."
  },

  {
    name: "Cantis",
    school: SPELL_CATEGORIES.INTIMIDATION,
    level: 4,
    rank: 3,
    restricted: false,
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Concentration, up to 10 minutes",
    description: "Target sings everything they say. Wisdom save to resist. Cannot cast spells with verbal components, disadvantage on Stealth and Deception.",
    license: LICENSE_TYPES.INTERROGATION,
    aurorNotes: "Bizarre interrogation tactic. Makes lying more difficult as suspects must sing their statements. Creates unusual psychological pressure. Effective but undignified - use discretion."
  },

  {
    name: "Impervius",
    school: SPELL_CATEGORIES.UTILITY,
    level: 4,
    rank: 2,
    restricted: false,
    castingTime: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "24 hours",
    description: "Make object or creature waterproof and repel liquids. Water, potions, and other liquids slide off harmlessly.",
    license: LICENSE_TYPES.BASIC_COMBAT,
    aurorNotes: "Field utility spell. Protect equipment and documents in adverse weather. Useful for underwater investigations."
  },

  {
    name: "Rennervate",
    school: SPELL_CATEGORIES.HEALING,
    level: 4,
    rank: 2,
    restricted: false,
    castingTime: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "Instantaneous",
    description: "Wake unconscious creature. Removes stunned, unconscious, and paralyzed conditions from non-lethal spells. Stabilizes dying creatures.",
    license: LICENSE_TYPES.BASIC_COMBAT,
    aurorNotes: "Field revival spell. Essential for waking stunned suspects and providing emergency stabilization."
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

  {
    name: "Disillusionment Charm",
    school: SPELL_CATEGORIES.INFILTRATION,
    level: 5,
    rank: 4,
    restricted: false,
    castingTime: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "1 hour",
    description: "Target becomes nearly invisible, blending with surroundings like chameleon. Advantage on Stealth checks. Perception checks to spot you have disadvantage.",
    license: LICENSE_TYPES.INVESTIGATION,
    aurorNotes: "Advanced infiltration spell. Essential for surveillance operations. Movement still visible if observed carefully. Not true invisibility."
  },

  {
    name: "Anapneo",
    school: SPELL_CATEGORIES.HEALING,
    level: 5,
    rank: 3,
    restricted: false,
    castingTime: "1 action",
    range: "30 feet",
    components: "V, S",
    duration: "Instantaneous",
    description: "Clear target's airway. Removes choking hazards, allows drowning victim to breathe, counters suffocation. Target can breathe normally for 1 minute even in hostile environment.",
    license: LICENSE_TYPES.BASIC_COMBAT,
    aurorNotes: "Emergency medical spell. Saves lives in choking, drowning, or gas attack scenarios. All Aurors should know this spell."
  },

  {
    name: "Ascendio",
    school: SPELL_CATEGORIES.TRACKING,
    level: 5,
    rank: 3,
    restricted: false,
    castingTime: "1 action",
    range: "Self",
    components: "V, S",
    duration: "Instantaneous",
    description: "Propel yourself upward 60 feet. Land safely (no fall damage). Can launch through water, debris, or obstacles.",
    license: LICENSE_TYPES.BASIC_COMBAT,
    aurorNotes: "Tactical mobility for pursuit or escape. Useful for scaling buildings or escaping underwater. Can startle bystanders."
  },

  {
    name: "Flagrate",
    school: SPELL_CATEGORIES.UTILITY,
    level: 5,
    rank: 2,
    restricted: false,
    castingTime: "1 action",
    range: "30 feet",
    components: "V, S",
    duration: "1 hour",
    description: "Draw fiery marks in air or on surfaces. Marks glow and hover. Can write messages, mark locations, or create signals. Marks are warm but not harmful.",
    license: LICENSE_TYPES.BASIC_COMBAT,
    aurorNotes: "Crime scene marking and tactical signaling. Useful for coordinating teams or marking evidence locations."
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

  {
    name: "Sectumsempra",
    school: SPELL_CATEGORIES.COMBAT_OFFENSIVE,
    level: 6,
    rank: 6,
    restricted: true,
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    description: "Invisible slashing curse. Target takes 8d10 slashing damage and begins bleeding (1d10 damage per round). Dexterity save for half initial damage and no bleeding. Bleeding ends with healing magic or DC 15 Medicine check.",
    license: LICENSE_TYPES.ADVANCED_COMBAT,
    aurorNotes: "LETHAL DARK MAGIC. Created by Half-Blood Prince. Requires advanced authorization. Victims bleed profusely - medical support essential. Use only when deadly force authorized. Vulnera Sanentur required to fully heal wounds."
  },

  // ===== 7TH LEVEL SPELLS =====
  {
    name: "Vulnera Sanentur",
    school: SPELL_CATEGORIES.HEALING,
    level: 7,
    rank: 6,
    restricted: false,
    castingTime: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "Instantaneous",
    description: "Heal grievous wounds. Target regains 10d8 + 40 HP. Can heal wounds from dark magic, including sectumsempra. Stops bleeding and closes severe lacerations.",
    license: LICENSE_TYPES.ADVANCED_COMBAT,
    aurorNotes: "Critical field healing spell for Auror casualties. Recommended for all Senior Aurors. Essential counter to Sectumsempra."
  },

  {
    name: "Carpe Retractum",
    school: SPELL_CATEGORIES.TRACKING,
    level: 7,
    rank: 5,
    restricted: false,
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    description: "Fire magical rope that attaches to object or creature. Can pull yourself to target or pull target to you. Target makes Strength save to resist being pulled.",
    license: LICENSE_TYPES.BASIC_COMBAT,
    aurorNotes: "Advanced pursuit and mobility spell. Pull suspects from cover or reach elevated positions. Risk of injury if target pulled into obstacles."
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
  },

  // ===== ADDITIONAL UTILITY & CREATURE SPELLS =====
  {
    name: "Arania Exumai",
    school: SPELL_CATEGORIES.UTILITY,
    level: 2,
    rank: 2,
    restricted: false,
    castingTime: "1 action",
    range: "30 feet",
    components: "V, S",
    duration: "Instantaneous",
    description: "Blast spiders away. Deals 3d8 force damage to spider creatures (Acromantulas take double damage). Non-magical spiders flee in terror.",
    license: LICENSE_TYPES.BASIC_COMBAT,
    aurorNotes: "Specialized pest control. Essential when investigating areas with Acromantula infestation. Also works on regular spiders for crime scene clearing."
  },

  {
    name: "Serpensortia",
    school: SPELL_CATEGORIES.INTIMIDATION,
    level: 2,
    rank: 2,
    restricted: false,
    castingTime: "1 action",
    range: "30 feet",
    components: "V, S",
    duration: "Concentration, up to 10 minutes",
    description: "Conjure snake (your choice: constrictor or venomous). Snake obeys your commands if you speak Parseltongue, otherwise acts naturally. Stats as per snake type.",
    license: LICENSE_TYPES.INTERROGATION,
    aurorNotes: "Intimidation prop. Very effective against ophidiophobes. Conjured snake is real but temporary. Must ensure snake doesn't harm suspect. Remove snake before ending interrogation."
  },

  {
    name: "Vipera Evanesca",
    school: SPELL_CATEGORIES.UTILITY,
    level: 2,
    rank: 1,
    restricted: false,
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    description: "Vanish snakes within range. Removes conjured or real snakes harmlessly. Affects all snake-type creatures in 20-foot radius.",
    license: LICENSE_TYPES.BASIC_COMBAT,
    aurorNotes: "Counter to Serpensortia. Also useful for removing dangerous snake creatures from crime scenes or investigation sites."
  },

  {
    name: "Waddiwasi",
    school: SPELL_CATEGORIES.UTILITY,
    level: 1,
    rank: 1,
    restricted: false,
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    description: "Launch small objects (wads of paper, coins, small items) at high velocity. Deals 1d4 damage. Can remove stuck objects from surfaces.",
    license: LICENSE_TYPES.BASIC_COMBAT,
    aurorNotes: "Minor utility spell. Useful for dislodging evidence or creating distractions. Not effective as weapon."
  },

  {
    name: "Tergeo",
    school: SPELL_CATEGORIES.UTILITY,
    level: 1,
    rank: 1,
    restricted: false,
    castingTime: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "Instantaneous",
    description: "Siphon liquid or clean specific substance from surface. Can dry wet clothes, clean blood, or remove specific fluids. Does not remove magical traces.",
    license: LICENSE_TYPES.BASIC_COMBAT,
    aurorNotes: "Cleaning utility. WARNING: Do not use to clean blood evidence from crime scenes without photographing first. Approved for cleaning equipment and uniforms."
  },

  {
    name: "Informous",
    school: SPELL_CATEGORIES.INVESTIGATION,
    level: 2,
    rank: 2,
    restricted: false,
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    description: "Learn basic information about magical creature within range. Gain knowledge of species, threat level, and basic abilities. Make Magical Creatures check for deeper lore.",
    license: LICENSE_TYPES.INVESTIGATION,
    aurorNotes: "Creature identification spell. Essential when investigating magical creature attacks or trafficking cases."
  },

  {
    name: "Stele us",
    school: SPELL_CATEGORIES.INTIMIDATION,
    level: 1,
    rank: 1,
    restricted: false,
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    description: "Target sneezes uncontrollably. Constitution save or disadvantage on attacks and Perception checks. Minor distraction curse.",
    license: LICENSE_TYPES.BASIC_COMBAT,
    aurorNotes: "Minor harassment hex. Useful for creating distractions or mildly disabling suspects. Non-harmful."
  },

  {
    name: "Babbling Curse",
    school: SPELL_CATEGORIES.INTIMIDATION,
    level: 3,
    rank: 3,
    restricted: false,
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Concentration, up to 10 minutes",
    description: "Target speaks only gibberish. Wisdom save or unable to communicate coherently. Cannot cast spells with verbal components or convey meaning.",
    license: LICENSE_TYPES.INTERROGATION,
    aurorNotes: "Disable communication. Useful for preventing suspects from coordinating or alerting accomplices. Not useful for interrogation as suspect cannot give coherent answers."
  },

  {
    name: "Oculus Reparo",
    school: SPELL_CATEGORIES.UTILITY,
    level: 1,
    rank: 1,
    restricted: false,
    castingTime: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "Instantaneous",
    description: "Repair broken eyeglasses or lenses. Works on any non-magical optical device.",
    license: LICENSE_TYPES.BASIC_COMBAT,
    aurorNotes: "Minor utility. Helpful for witnesses or suspects who need glasses to identify suspects or review evidence."
  },

  {
    name: "Apparate",
    school: SPELL_CATEGORIES.UTILITY,
    level: 6,
    rank: 4,
    restricted: false,
    castingTime: "1 action",
    range: "Self (500 miles)",
    components: "V, S",
    duration: "Instantaneous",
    description: "Teleport to known location within 500 miles. Requires Apparition License. Cannot apparate through wards. Risk of splinching on failed Arcana check.",
    license: LICENSE_TYPES.INVESTIGATION,
    aurorNotes: "Essential mobility for rapid response. Requires Apparition License. Cannot apparate into warded locations without special clearance. Log all official apparitions for audit trail."
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
