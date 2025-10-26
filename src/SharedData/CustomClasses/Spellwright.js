export const spellwright = {
  id: "spellwright",
  name: "Spellwright",
  type: "Artificer",
  description:
    "Spellwrights are the magical craftsmen, inventors, and enchanters of the modern wizarding world. They treat magic as a material to be designed and refined—capturing spells in metal, glass, and ink. Whether working for the Bureau, a private guild, or themselves, Spellwrights are the builders of the arcane infrastructure everyone else relies on.",
  hit_die: "d8",
  primary_abilities: ["Intelligence", "Dexterity", "Constitution"],
  saving_throws: ["Constitution", "Intelligence"],
  armor_proficiencies: ["Light Armor", "Medium Armor"],
  weapon_proficiencies: ["Simple Weapons", "Wands"],
  tool_proficiencies: [
    "Tinker's Tools",
    "Smith's Tools",
    "One Artisan Tool of Choice",
  ],

  skill_choices: {
    choose: 2,
    options: [
      "Arcana",
      "History",
      "Investigation",
      "Perception",
      "Sleight of Hand",
      "Insight",
    ],
  },

  spellcasting: {
    progression_type: "half-caster",
    casting_ability: "Intelligence",
    notes:
      "Spellwrights use precise runic matrices and enchanted devices to produce spell effects. They do not cast in the traditional sense; they activate prebuilt circuits of magic that release stored energy.",
    save_dc: "8 + proficiency_bonus + Intelligence_mod",
    attack_mod: "proficiency_bonus + Intelligence_mod",
    bonus_spells: {
      cantrips: ["Mending", "Light"],
      level_1_to_3: [
        "Detect Magic",
        "Shield",
        "Magic Weapon",
        "Identify",
        "Dispel Magic",
      ],
    },
  },

  class_resources: [
    {
      name: "Spell Designs",
      aka: "Infusions",
      known_formula: "designs_known = min(level + Intelligence_mod, 12)",
      active_by_level: { 2: 2, 6: 3, 10: 4, 14: 5 },
      recharge:
        "Designs persist until you finish a long rest or reassign them after finishing a long rest.",
      rules: [
        "You can imbue nonmagical objects with temporary enchantments called Spell Designs.",
        "A single object can host only one design at a time unless a feature states otherwise.",
        "If you exceed your active design limit, the oldest design ends.",
        "A creature must attune to an item only if the design replicates a magic item that normally requires attunement.",
      ],
    },
    {
      name: "Runic Imprinting",
      aka: "Magical Tinkering",
      uses_formula: "uses = max(1, Intelligence_mod)",
      recharge: "Long Rest",
      effects_summary: [
        "As an action, inscribe a simple rune on a Tiny object.",
        "Choose one: emit light (20 ft bright, 20 ft dim), record/play a 6-second sound, display a 25-word message, or emit a distinctive scent.",
        "Effect lasts indefinitely or until you overwrite it. You can maintain up to your Intelligence modifier of concurrent imprints.",
      ],
    },
  ],

  // ---------- Core Level Features (shared) ----------
  level_features: [
    {
      level: 1,
      features: [
        {
          name: "Runic Imprinting",
          description:
            "Inscribe minor runes on Tiny objects (light, sound, message, scent). Maintain up to your Intelligence modifier active imprints (minimum 1).",
        },
        {
          name: "Tool Expertise",
          description:
            "Choose one artisan's tool with which you are proficient. You gain expertise with it (double proficiency bonus).",
        },
      ],
    },
    {
      level: 2,
      features: [
        {
          name: "Spell Designs",
          description:
            "Imbue nonmagical objects with temporary enchantments (see resource). Assign/reassign on a long rest. Examples:\n- Runic Weapon: weapon becomes magical; +1 damage (fire/lightning/force). +2 at level 10.\n- Deflection Ward: +1 AC to worn armor/clothing (stacks with armor, not shields). +2 at level 14.\n- Arcane Battery: store a known spell up to 1st level; release as an action using your DC/attack. Capacity improves with level.\n- Luminar Gem: bright light 20 ft (dim 20 ft), toggle by command.\n- Recorder's Lens: advantage to examine magical inscriptions; 1-minute record/replay overlay.",
        },
        {
          name: "Arcane Engineering",
          description:
            "Craft/repair magic items in half time and cost. After 10 minutes studying a magical device, learn its school and general function without a check.",
        },
      ],
    },
    {
      level: 3,
      features: [
        {
          name: "Branch of Craft",
          description:
            "Choose a specialty at 3rd level. Your branch grants features at levels 3, 5, 7, 11, and 15.",
          branches: [
            "Runesmith",
            "Animaturgist",
            "Thaumaturgic Engineer",
            "Enchanter",
          ],
          branch_milestone: true,
        },
      ],
    },
    {
      level: 4,
      features: [
        {
          name: "Ability Score Improvement or Design Feat",
          description:
            "Increase one ability score by +2, or two by +1, or gain a Design feat.",
          feat_examples: [
            {
              name: "Quick Imprint",
              effect: "Create/overwrite a Runic Imprint as a bonus action.",
            },
            {
              name: "Enhanced Battery",
              effect: "Arcane Batteries can now store up to a 2nd-level spell.",
            },
            {
              name: "Master Craftsman",
              effect:
                "When crafting nonmagical items, work in half the time and add a harmless minor magical flourish.",
            },
          ],
        },
      ],
    },
    {
      level: 5,
      features: [
        {
          name: "Advanced Spell Designs",
          description:
            "Maintain one additional active design beyond your current limit (stacks with resource table). You may place two compatible minor effects on the same item.",
        },
        {
          name: "Branch Progression (5th)",
          description:
            "Your chosen branch grants a new feature at this level (see branches[branch].progression[5]).",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },
    {
      level: 6,
      features: [
        {
          name: "Tool Master",
          description:
            "Gain proficiency with all artisan's tools. When you make a check with tools you're proficient with, add double your proficiency bonus.",
        },
        {
          name: "Spell Capture",
          description:
            "Once per short rest, when a creature casts a spell of 3rd level or lower within 60 ft, use your reaction to attempt to capture its pattern: Intelligence (Arcana) check (DC 10 + spell level). On success, you can prepare that spell until your next long rest (counts against prepared spells).",
        },
      ],
    },
    {
      level: 7,
      features: [
        {
          name: "Branch Progression (7th)",
          description:
            "Your chosen branch improves at this level (see branches[branch].progression[7]).",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },
    {
      level: 8,
      features: [
        {
          name: "Ability Score Improvement",
          description:
            "Increase one ability score by +2, or two by +1, or select a feat.",
        },
      ],
    },
    {
      level: 9,
      features: [
        {
          name: "Arcane Battery Network",
          description:
            "Batteries can store up to 3rd-level spells. Reaction: when a willing ally within 30 ft expends a 1st–3rd-level slot, release a stored spell of the same level from one of your batteries to immediately restore that slot to them (once per short rest).",
        },
        {
          name: "Rapid Fabrication",
          description:
            "Reassign your active Spell Designs on a short rest. In combat, spend a spell slot as a bonus action to create a temporary 1-minute design on a touched object.",
        },
      ],
    },
    {
      level: 10,
      features: [
        {
          name: "Arcane Innovation",
          description:
            "Choose one spell of 5th level or lower from any class list. It becomes a Spellwright spell for you and is always prepared. You can change this spell when you gain a Spellwright level.",
        },
      ],
    },
    {
      level: 11,
      features: [
        {
          name: "Branch Progression (11th)",
          description:
            "Your branch reaches expert tier at this level (see branches[branch].progression[11]).",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },
    {
      level: 12,
      features: [
        {
          name: "Ability Score Improvement",
          description:
            "Increase one ability score by +2, or two by +1, or select a feat.",
        },
      ],
    },
    {
      level: 13,
      features: [
        {
          name: "Masterwork Designs",
          description:
            "Maintain active designs equal to your level-based limit + your Intelligence modifier (min +1). Also craft one Masterwork Design combining up to three compatible effects into a single item (8 hours, 500 gp rare materials). Only one Masterwork at a time.",
        },
      ],
    },
    {
      level: 14,
      features: [
        {
          name: "Spell Storage Mastery",
          description:
            "Batteries can now store up to 5th-level spells. You can maintain stored spells across your batteries equal to your Intelligence modifier (minimum 1).",
        },
      ],
    },
    {
      level: 15,
      features: [
        {
          name: "Branch Progression (15th)",
          description:
            "Your branch reaches master tier at this level (see branches[branch].progression[15]).",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },
    {
      level: 16,
      features: [
        {
          name: "Ability Score Improvement",
          description:
            "Increase one ability score by +2, or two by +1, or select a feat.",
        },
      ],
    },
    {
      level: 17,
      features: [
        {
          name: "Arcane Supremacy",
          description:
            "Maintain two Masterwork Designs at once. Over 8 hours, retrofit a permanent magic item to host one simple Spell Design (DM-approved) without removing its original properties; it counts against your active design limit.",
        },
      ],
    },
    {
      level: 18,
      features: [
        {
          name: "Recursive Enchantment",
          description:
            "When you finish a short rest with one or more active designs, choose one to empower until your next rest: weapons +1d6 damage; armor +1 AC and resistance to one damage type; utility items gain one additional minor property (DM-approved).",
        },
      ],
    },
    {
      level: 19,
      features: [
        {
          name: "Ability Score Improvement",
          description:
            "Increase one ability score by +2, or two by +1, or select a feat.",
        },
      ],
    },
    {
      level: 20,
      features: [
        {
          name: "Grand Architect",
          description:
            "Gain +2 to your active design limit (after all other calculations). Once per long rest, during a 1-hour workshop, create a Legendary Prototype combining up to three Spell Design effects and one Masterwork benefit; it lasts 24 hours or until you create another. Your personally created designs have advantage on checks to resist being dispelled, and effects you create function normally in areas of antimagic you designate at creation if worn or carried by you (DM adjudication for powerful fields).",
        },
      ],
    },
  ],

  // ---------- Branches: explicit progression tree ----------
  branches: {
    Runesmith: {
      branchPath: "Runesmith",
      tagline: "Etch power into steel and stone.",
      progression: {
        3: [
          {
            name: "Weapon Runes",
            description:
              "During a short rest, etch a combat rune into a weapon or armor. Choose fire, lightning, or force. Once per turn when you hit with that weapon, deal +1d6 damage of the chosen type. The rune fades after your next long rest or when you etch a new one.",
          },
          {
            name: "Warding Glyphs",
            description:
              "Bonus action to inscribe a 10-ft square ward on a surface within 5 ft for 1 minute (or until you move >30 ft). Creatures of your choice in the ward gain +2 AC. Only one ward active at a time.",
          },
        ],
        5: [
          {
            name: "Overloaded Strike",
            description:
              "When you hit with a runed weapon, expend a spell slot to deal +2d8 elemental damage of the rune's type (+1d8 per slot level above 1st).",
          },
        ],
        7: [
          {
            name: "Layered Inscriptions",
            description:
              "A single item can hold up to two different runes simultaneously. Activating both in the same turn requires a bonus action (once per turn).",
          },
        ],
        11: [
          {
            name: "Explosive Runes",
            description:
              "Bonus action to detonate one rune on a weapon/surface: creatures in a 15-ft radius make a Dexterity save, taking 6d6 damage of the rune's type on a fail (half on success). That rune is removed and can be re-inscribed on a short rest.",
          },
        ],
        15: [
          {
            name: "Mythic Inscription",
            description:
              "Over 24 hours, inscribe a mythic rune on one weapon or armor. Weapons: +2 to hit/damage and +2d6 of the rune's type. Armor: +2 AC and resistance to one damage type chosen when inscribing. Only one Mythic Inscription at a time.",
          },
        ],
      },
    },

    Animaturgist: {
      branchPath: "Animaturgist",
      tagline: "Life from lattice and light.",
      progression: {
        3: [
          {
            name: "Construct Companion",
            description:
              "Build a Tiny construct (AC/attacks use your PB; HP = 5 + Int mod + level; speed 30 ft; darkvision 60 ft). Acts on your initiative; defaults to Dodge unless your bonus action commands Attack/Dash/Disengage/Help. Rebuild on a long rest for 25 gp.",
          },
          {
            name: "Self-Repair Protocol",
            description:
              "As an action, expend a spell slot to restore your construct's HP equal to 1d8 per slot level.",
          },
        ],
        5: [
          {
            name: "Modular Upgrade",
            description:
              "Add one module: flight (30 ft), swim (30 ft), or arcane discharge (ranged spell attack 30/120 ft, 1d8 force). Swap modules on a long rest.",
          },
        ],
        7: [
          {
            name: "Swarm Protocol",
            description:
              "Maintain up to two Tiny constructs, or one Small construct using a Steel Defender-style stat template. Only one construct can benefit from a Spell Design at a time.",
          },
        ],
        11: [
          {
            name: "Hivemind Coordination",
            description:
              "When one construct hits a creature, other constructs you control have advantage on attacks against that creature until end of your turn. You can see/hear through your constructs within 1 mile.",
          },
        ],
        15: [
          {
            name: "Apex Construct",
            description:
              "Upgrade one construct to a powerful form (Medium; enhanced Steel Defender-style template). It uses PB for AC/attacks/saves, HP = 2 × level + Int mod, and can cast one 3rd-level spell you know once per long rest (your DC).",
          },
        ],
      },
    },

    "Thaumaturgic Engineer": {
      branchPath: "Thaumaturgic Engineer",
      tagline: "Bottled lightning, on tap.",
      progression: {
        3: [
          {
            name: "Arcane Capacitor",
            description:
              "Once per short rest, immediately after you cast a leveled spell, store its residue. Later (bonus action), release a 15-ft cone of force for 2d8 damage (Dex save halves; DC = your Spellwright save DC).",
          },
          {
            name: "Stabilized Core",
            description:
              "Allies within 10 ft have advantage on Constitution checks to maintain concentration.",
          },
        ],
        5: [
          {
            name: "Ley Pulse",
            description:
              "When you trigger Arcane Capacitor, you may instead emit a supportive pulse: allies within 10 ft gain temporary HP equal to your Intelligence modifier and +10 ft speed until the start of your next turn.",
          },
        ],
        7: [
          {
            name: "Overcharge Matrix",
            description:
              "When releasing Arcane Capacitor, you may expend a spell slot: increase the cone to 30 ft and add +2d8 force damage per slot level.",
          },
        ],
        11: [
          {
            name: "Ley Amplifier",
            description:
              "Once per short rest, when you cast a spell, treat it as if cast using a spell slot one level higher (max 5th-level slot effects).",
          },
        ],
        15: [
          {
            name: "Perpetual Engine",
            description:
              "When you roll initiative, regain one expended spell slot of 3rd level or lower. You also have advantage on Constitution saving throws to maintain concentration.",
          },
        ],
      },
    },

    Enchanter: {
      branchPath: "Enchanter",
      tagline: "Rewire the heart; tune the will.",
      progression: {
        3: [
          {
            name: "Emotion Resonance",
            description:
              "When you restore HP to a creature or grant it temporary HP with a spell or design, choose an ally within 30 ft; that ally gains +1 to attack rolls until the end of your next turn.",
          },
          {
            name: "Charm Matrix",
            description:
              "Create a soothing trinket. Allies within 10 ft have advantage on saves vs. frightened or charmed while they can see or hear you.",
          },
        ],
        5: [
          {
            name: "Resonant Feedback",
            description:
              "When a creature benefiting from your Charm Matrix crits or succeeds on a saving throw, you may either regain 1d4 HP or recover one 1st-level spell slot (once per turn).",
          },
        ],
        7: [
          {
            name: "Sympathetic Resonance",
            description:
              "When an ally affected by Emotion Resonance deals damage, they regain HP equal to your Intelligence modifier (once per turn). Charm Matrix radius increases to 20 ft.",
          },
        ],
        11: [
          {
            name: "Grand Charm",
            description:
              "Creatures have disadvantage on saving throws against your enchantment spells. When you cast an enchantment that targets a creature, grant one ally within your Matrix a mirrored secondary benefit if applicable (e.g., +1d4 on one roll within 1 minute).",
          },
        ],
        15: [
          {
            name: "Aura of Empowerment",
            description:
              "Charm Matrix becomes a 30-ft aura. Allies in the aura add your Intelligence modifier to spell damage and gain +1 to spell attack rolls.",
          },
        ],
      },
    },
  },

  design_notes: {
    concept:
      "Artificer-style remap focused on magical invention and applied spellcraft. Spellwrights build devices, runes, and constructs that let magic behave like engineered infrastructure.",
    tone: "Analytical, obsessive, and creative—mages as engineers.",
    balance_notes: [
      "Active design cap mirrors Artificer pacing (2/3/4/5) with modest extensions at 5, 13, and 20.",
      "Construct power tracks Tiny/Small companions with command economy bounded by bonus actions.",
      "Battery/storage capped at 5th-level spells at 14 to avoid high-level slot recursion.",
      "Branch spikes at 5/7/11/15 are impactful but gated by action economy and rests.",
      "No unlimited designs or free high-tier spell replication; resource loops constrained to short-rest cadence.",
    ],
    rules_consistency:
      "All save DCs use 8 + proficiency bonus + Intelligence modifier; all attack rolls use proficiency + Intelligence. Reassign designs on rests to encourage planning rather than combat swapping (except where features state otherwise).",
  },
};
