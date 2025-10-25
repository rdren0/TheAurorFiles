export const backgroundsData = {
  Whistleblower: {
    name: "Whistleblower",
    description:
      "You exposed rot inside a ministry office, guild, or megacorp and paid for it. You know how systems break—and where the bodies are filed.",
    preview:
      "An insider-turned-advocate who knows how institutions really work",
    skillProficiencies: ["Persuasion", "History of Magic"],
    features: [
      {
        name: "Paper Trail",
        description:
          "You can quickly piece together chains of custody and approvals. When given a few names or documents, you infer who signed off, who benefits, and where to pull next."
      }
    ],
    backgroundBonus:
      "Advantage on checks to navigate bureaucracy, request records, or leverage policy loopholes",
    typicalEquipment:
      "Encrypted notepad, burner wand-holster, folded ethics memo with incriminating annotations"
  },

  "Forensic Artist": {
    name: "Forensic Artist",
    description:
      "You turn memories and evidence into images: moving photographs, composite sketches, and reconstructed scenes.",
    preview:
      "A crime-scene sketcher and photo specialist with a steady hand",
    skillProficiencies: ["Investigation", "Insight"],
    features: [
      {
        name: "Scene Reconstruction",
        description:
          "Given partial evidence (blurry photo, witness description, scuffed floor), you produce an actionable sketch or moving plate highlighting likely positions and key details."
      }
    ],
    backgroundBonus:
      "Advantage to recall visual details you've studied or sketched within the last month",
    typicalEquipment:
      "Camera or sketch kit, charmed darkroom folio, grease pencil, evidence envelopes"
  },

  Archivist: {
    name: "Archivist",
    description:
      "Stacks, stacks, and more stacks. You lived in records rooms, morgues (the paper kind), and private collections.",
    preview:
      "A records hound who knows where knowledge is buried—literally",
    skillProficiencies: ["Magical Theory", "Investigation"],
    features: [
      {
        name: "Knowing Where To Look",
        description:
          "When you search a library, archive, or newsroom morgue, you find useful leads in half the normal time and identify one unconventional source others would miss."
      }
    ],
    backgroundBonus:
      "Restricted reading access at most public institutions with an hour and a plausible pretext",
    typicalEquipment:
      "Archive card, index tabs, pocket catalog of coded references"
  },

  Enforcer: {
    name: "Enforcer",
    description:
      "Some problems answer to force. You've bounced in back-alley clubs, collected debts, and stood your ground when wands came out.",
    preview:
      "A steady-handed intimidator who keeps doors shut and clients safe",
    skillProficiencies: ["Intimidation", "Athletics"],
    features: [
      {
        name: "Show of Force",
        description:
          "When you make a credible threat or physical demonstration, bystanders hesitate or clear the way, and low-level muscle thinks twice."
      }
    ],
    backgroundBonus:
      "Advantage on checks to coerce street toughs or break up a brawl without lethal escalation",
    typicalEquipment:
      "Sap or baton, reinforced coat, list of favors owed"
  },

  Tracker: {
    name: "Tracker",
    description:
      "Cities, moors, or border wastes—you follow sign, read weather, and move quiet.",
    preview:
      "A patient hunter of people and things across any terrain",
    skillProficiencies: ["Survival", "Perception"],
    features: [
      {
        name: "Sign Reader",
        description:
          "You determine direction, pace, and group size from minimal traces; in cities, you replace tracks with habits—routes, vendors, and patterns."
      }
    ],
    backgroundBonus:
      "Not slowed by difficult terrain while tracking and can estimate how far ahead your quarry is",
    typicalEquipment:
      "Waxed cloak, compass, city map marked with bolt-holes"
  },

  Grifter: {
    name: "Grifter",
    description:
      "You get in by being who they expect to see. Badges, smiles, and the right paperwork.",
    preview:
      "A charming impostor who lives by the con and the cover",
    skillProficiencies: ["Deception", "Persuasion"],
    features: [
      {
        name: "Borrowed Authority",
        description:
          "With a minute of prep and a prop, you convincingly pass as minor staff or contracted help in most institutions for a short window."
      }
    ],
    backgroundBonus:
      "Advantage to create plausible alibis or covers on the fly",
    typicalEquipment:
      "Forged lanyard, reversible jacket, pocketful of believable tickets/receipts"
  },

  Medium: {
    name: "Medium",
    description:
      "The dead talk, if you listen. You don't romanticize it—you just pick up whispers others miss.",
    preview:
      "A spirit-listener who reads omens and interviews the deceased",
    skillProficiencies: ["Insight", "Perception"],
    toolProficiencies: ["Astronomer's tools"],
    features: [
      {
        name: "Cold Read",
        description:
          "You sense recent strong emotions in a room or object and can ask a simple question of a nearby lingering spirit once per scene."
      }
    ],
    backgroundBonus:
      "Advantage on checks to communicate with ghosts or interpret omens",
    typicalEquipment:
      "Astronomer's tools, chalk circle kit, pocket talisman (sentimental, not magical)"
  },

  "Grey Man": {
    name: "Grey Man",
    description:
      "You excel at being unremarkable. People's eyes skid off you; cameras catch you mid-blink.",
    preview:
      "An inconspicuous shadow who passes anywhere without notice",
    skillProficiencies: ["Stealth", "Persuasion"],
    features: [
      {
        name: "Forgettable Face",
        description:
          "After brief contact, casual witnesses struggle to recall your details unless they beat your check; you blend seamlessly into queues and crowds."
      }
    ],
    backgroundBonus:
      "Advantage to tail a mark in public without detection",
    typicalEquipment:
      "Neutral coat, cap, pocket calendar of shift changes"
  },

  "Beast Wrangler": {
    name: "Beast Wrangler",
    description:
      "You handle magical creatures for ports, customs, or private menageries. Claws, fangs, and contracts.",
    preview:
      "A calm hand with creatures—and those who profit from them",
    skillProficiencies: ["Magical Creatures", "Survival"],
    toolProficiencies: ["Herbologist's tools"],
    features: [
      {
        name: "Value All Life",
        description:
          "Creatures and sentient beasts are less hostile to you by default; handlers will hear you out before reaching for shackles."
      }
    ],
    backgroundBonus:
      "Advantage to calm or corral non-hostile beasts and read their stress cues",
    typicalEquipment:
      "Herbologist's tools, thick gloves, soothing salve, whistle with three coded calls"
  },

  Detective: {
    name: "Detective",
    description:
      "You connect the dots. Private eye, internal affairs, or Bureau—your methods get results.",
    preview:
      "A seasoned investigator with a nose for the missing piece",
    skillProficiencies: ["Investigation", "Insight"],
    features: [
      {
        name: "Investigator's Insight",
        description:
          "Given ten minutes at any scene, you identify one actionable lead others overlooked."
      }
    ],
    backgroundBonus:
      "A small network of informants who trade minor tips for small favors",
    typicalEquipment:
      "Notebook and pen, magnifier, battered brimmed hat"
  },

  "Hard-Luck": {
    name: "Hard-Luck",
    description:
      "You learned the world's angles by hitting every one of them. You're resilient, resourceful, and a magnet for falling objects.",
    preview:
      "A survivor whose misfortune taught caution and grit",
    skillProficiencies: ["Medicine", "Perception"],
    features: [
      {
        name: "Walking Disaster",
        description:
          "You anticipate preventable hazards and improvise stopgaps to keep operations from snowballing into calamity."
      }
    ],
    backgroundBonus:
      "Resistance to incidental damage from falls, debris, and mundane traps",
    typicalEquipment:
      "Roll of plasters, lucky charm, pocket toolkit"
  },

  Scapegoat: {
    name: "Scapegoat",
    description:
      "You've been the butt of jokes, the name on the blame line, and you're still here—watching, learning.",
    preview:
      "An overlooked survivor who notices what others ignore",
    skillProficiencies: ["Insight", "Stealth"],
    features: [
      {
        name: "Fade and Endure",
        description:
          "You keep your head down in a tense room; hostile attention slides to louder targets while you observe."
      }
    ],
    backgroundBonus:
      "Advantage on checks to eavesdrop or go unnoticed in familiar workplaces",
    typicalEquipment:
      "Shabby wand holster, scuffed notebook packed with observations"
  },

  "Forensic Alchemist": {
    name: "Forensic Alchemist",
    description:
      "You brew answers—reagents, traces, residues, timelines. Your bench tells stories.",
    preview:
      "A meticulous potion-maker who reads evidence at a glance",
    skillProficiencies: ["Herbology", "Potion-making"],
    toolProficiencies: ["Potioneer's kit"],
    features: [
      {
        name: "Chain of Evidence",
        description:
          "You gain quick access at reputable apothecaries and labs and can identify one common and one uncommon reagent or brew by trace alone."
      }
    ],
    backgroundBonus:
      "Advantage on checks to analyze substances, toxins, or potion residues",
    typicalEquipment:
      "Potioneer's kit, labeled vials, muggle notebook with ballpoint pen"
  },

  Bodyguard: {
    name: "Bodyguard",
    description:
      "You take hits meant for others and shepherd them through red zones.",
    preview:
      "A protector who plans routes, reads threats, and stands fast",
    skillProficiencies: ["Athletics", "Intimidation"],
    features: [
      {
        name: "People's Shield",
        description:
          "When defending a client, you can secure a path to safety or hold a doorway long enough for noncombatants to clear out."
      }
    ],
    backgroundBonus:
      "Advantage on checks to detect ambush setups and pick safe seating/egress",
    typicalEquipment:
      "Earpiece charm, reinforced coat, photo of the principal with routes scribbled on back"
  },

  "Broom Courier": {
    name: "Broom Courier",
    description:
      "You flew the night lanes with parcels and secrets. Speed, routes, and timing are your gospel.",
    preview:
      "A daring pilot who knows the skyways and who uses them",
    skillProficiencies: ["Acrobatics", "Athletics"],
    toolProficiencies: ["Broomstick"],
    features: [
      {
        name: "Sky Network",
        description:
          "You know the rooftops, owl posts, and weather windows; you can find a rooftop landing or sympathetic waystation in most districts."
      }
    ],
    backgroundBonus:
      "Advantage on aerial navigation and courier contacts for rumors about shipments",
    typicalEquipment:
      "Tuned broom, courier satchel, brass wind gauge"
  },

  Socialite: {
    name: "Socialite",
    description:
      "You move where the champagne flows and secrets change hands. Parties are your office.",
    preview:
      "A connector with a velvet smile and a razor memory",
    skillProficiencies: ["Deception", "Persuasion"],
    features: [
      {
        name: "Rumor-Monger",
        description:
          "You can surface one pertinent rumor per scene from your network—accurate, but framed by the source's bias."
      }
    ],
    backgroundBonus:
      "Advantage on checks to gain invitations or extract gossip at social events",
    typicalEquipment:
      "Heirloom ring, peacock feather quill, engraved calling cards"
  },

  Burglar: {
    name: "Burglar",
    description:
      "Locks are just puzzles with worse attitudes. You specialize in quiet entries and quieter exits.",
    preview:
      "A stealth specialist for break-ins, lifts, and sabotage",
    skillProficiencies: ["Sleight of Hand", "Stealth"],
    features: [
      {
        name: "Creative Entry",
        description:
          "You can find or improvise an unconventional access route—service corridors, rooflines, dumbwaiters—given a few minutes of scouting."
      }
    ],
    backgroundBonus:
      "Advantage to bypass simple locks and mundane security without leaving obvious traces",
    typicalEquipment:
      "Thieves' tools, glass cutter, soft-soled shoes"
  },

  "Occult Antiquarian": {
    name: "Occult Antiquarian",
    description:
      "You traffic in old grimoires, cursed heirlooms, and provenance.",
    preview:
      "A scholar-dealer who knows which relics bite back",
    skillProficiencies: ["History of Magic", "Magical Theory"],
    features: [
      {
        name: "Provenance Check",
        description:
          "With a short inspection, you identify likely origin, school, and hazards of an artifact—and who might pay for it."
      }
    ],
    backgroundBonus:
      "Advantage on checks to appraise or negotiate over magical antiques",
    typicalEquipment:
      "Loop, ledger of clients, warded specimen wrap"
  },

  "Street Medico": {
    name: "Street Medico",
    description:
      "Alleys and safehouses are your clinic. You patch people up—quietly.",
    preview:
      "A back-alley healer with steady hands and sealed lips",
    skillProficiencies: ["Medicine", "Insight"],
    features: [
      {
        name: "No Questions Asked",
        description:
          "You can secure a discreet treatment space and basic supplies almost anywhere and calm panicked patients quickly."
      }
    ],
    backgroundBonus:
      "Advantage on checks to stabilize allies and identify recent injuries' cause",
    typicalEquipment:
      "Field kit, antiseptic charm, stained apron"
  },

  Reporter: {
    name: "Reporter",
    description:
      "You chase stories through rain, threats, and lockouts. You don't spook easy.",
    preview:
      "A relentless journalist who trades favors for truths",
    skillProficiencies: ["Persuasion", "Investigation"],
    features: [
      {
        name: "Press Pass (Kinda)",
        description:
          "Flash a badge (or a convincing replica) to gain brief access or stall officials. You also maintain one editor or fixer contact for on-the-record leverage."
      }
    ],
    backgroundBonus:
      "Advantage on checks to interview reluctant sources or sift rumors for what's actionable",
    typicalEquipment:
      "Press card, pocket recorder quill, list of burner tip lines"
  }
};
