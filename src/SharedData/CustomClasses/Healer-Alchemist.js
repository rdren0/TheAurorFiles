export const healer_alchemist = {
  id: "healer_alchemist",
  type: "Cleric",
  name: "Healer-Alchemist",
  description:
    "Specialists in restorative and analytical magic who mend the wounded and unravel mysteries through potions, antidotes, and forensic chemistry. Whether working in the field or the lab, Healer-Alchemists turn ingredients and empathy into power, healing allies and exposing the unseen.",
  hit_die: "d8",
  primary_abilities: ["Wisdom", "Intelligence"],
  saving_throws: ["Wisdom", "Intelligence"],
  armor_proficiencies: [],
  weapon_proficiencies: ["Wands", "Daggers"],
  tool_proficiencies: ["Alchemist's Supplies", "Healer's Kit"],

  skill_choices: {
    choose: 1,
    options: [
      "Medicine",
      "Arcana",
      "Insight",
      "Investigation",
      "Nature",
      "Perception",
    ],
  },

  spellcasting: {
    progression_type: "augmented",
    notes:
      "Healer-Alchemists do not gain additional spell slots. They gain restorative and chemical variants and alchemical techniques fueled by Brew Points.",
    casting_ability_choice: ["Wisdom", "Intelligence"],
    bonus_spells: {
      cantrips: ["Mending", "Spare the Dying"],
      level_1_to_3: [
        "Cure Wounds",
        "Detect Poison and Disease",
        "Purify Food and Drink",
        "Lesser Restoration",
        "Identify",
        "Detect Magic",
        "Protection from Poison",
        "Enhance Ability",
        "Dispel Magic",
      ],
    },
  },

  class_resources: [
    {
      name: "Brew Points",
      formula: "Maximum Brew Points = proficiency_bonus × 2",
      recharge:
        "Short Rest: regain half of your maximum (rounded down). Long Rest: regain all.",
      notes: [
        "You cannot exceed your maximum Brew Points unless a feature says otherwise.",
        "If a feature lists a Brew Point cost and another action type, you still pay the cost.",
      ],
      spend_examples: [
        "Brew restorative potions or alchemical concoctions",
        "Empower healing or antidote effects",
        "Create forensic solutions to reveal hidden clues",
      ],
    },
  ],

  // ---- Core Level Features (shared for all branches) ----
  level_features: [
    {
      level: 1,
      features: [
        {
          name: "Medical Training",
          description:
            "You gain proficiency in Medicine. If you are already proficient, you gain expertise (double proficiency bonus). You can stabilize a creature at 0 hit points as a bonus action when using a Healer's Kit.",
        },
        {
          name: "Brew Points",
          description:
            "You maintain a pool of Brew Points (BP) equal to twice your proficiency bonus. You regain half your maximum on a short rest and all on a long rest.",
        },
        {
          name: "Field Kit",
          description:
            "You carry a compact kit that functions as Alchemist's Supplies and a Healer's Kit. During a long rest, you can configure the kit's preparation: choose one potion from Potioncraft that you craft at +1 potency (e.g., +1 die of healing) until your next long rest.",
        },
        {
          name: "Restorative Burst",
          description:
            "As an action, you release a restorative vapor at a creature you can see within 15 ft. Spend 1–4 BP; the target regains 1d8 hit points per BP spent + your spellcasting ability modifier. This is a magical healing effect.",
        },
      ],
    },
    {
      level: 2,
      features: [
        {
          name: "Potioncraft",
          description:
            "During a short or long rest, you can spend BP to create up to three temporary potions, each lasting 24 hours before spoiling. Each potion costs 1 BP to craft unless noted. Examples:\n- Healing Draught (1 BP): restores 2d4 + your spellcasting modifier HP.\n- Antitoxin Elixir (1 BP): advantage on saving throws vs. poison and disease for 1 hour.\n- Truth Serum (1 BP): for 10 minutes, the drinker has disadvantage on Deception checks and creatures have advantage on Charisma (Persuasion) checks against them.\n- Focus Tonic (2 BP; once per long rest per creature): restores one expended 1st-level spell slot of a willing creature.",
        },
        {
          name: "Chemical Forensics",
          description:
            "You can spend 1 BP and 10 minutes analyzing a sample (blood, residue, dust, potion, etc.) to learn one specific property such as spell school, approximate age, key ingredient, or emotional residue left by the caster. The GM provides a concrete clue.",
        },
      ],
    },
    {
      level: 3,
      features: [
        {
          name: "Alchemical Discipline",
          description:
            "Choose a specialization path at 3rd level. Your chosen path grants features at levels 3, 5, 9, 13, and 17.",
          branches: [
            "Medicinal Healer",
            "Forensic Alchemist",
            "Battle Chemist",
          ],
          branch_milestone: true,
        },
        {
          name: "Stabilizing Touch",
          description:
            "When a creature within 5 ft drops to 0 hit points, you can use your reaction to spend 1 BP to stabilize it and grant it 1 temporary hit point. It doesn't make death saves until the start of its next turn.",
        },
      ],
    },
    {
      level: 4,
      features: [
        {
          name: "Ability Score Improvement or Healer Feat",
          description:
            "Increase an ability score by +2 (or two by +1) or select a Healer-specific feat.",
          feat_examples: [
            {
              name: "Quick Mixer",
              effect:
                "Craft one potion as a bonus action in combat by spending 1 BP; it must be used within 1 round.",
            },
            {
              name: "Emergency Apparition",
              effect:
                "When a creature within 10 ft falls unconscious, you may teleport to an adjacent space as a reaction once per short rest.",
            },
            {
              name: "Efficient Brewer",
              effect:
                "When you finish a short rest, regain +1 BP (in addition to the normal amount).",
            },
            {
              name: "Clinical Precision",
              effect:
                "When you roll healing dice, you can reroll any 1s once per casting or Restorative Burst.",
            },
          ],
        },
      ],
    },
    {
      level: 5,
      features: [
        {
          name: "Panacea Catalyst",
          description:
            "As an action, spend 3 BP to choose up to three creatures you can see within 15 ft. Each target regains 2d8 + your spellcasting modifier hit points and ends one of the following on themselves: poison, disease, blinded, deafened, or poisoned. You can't use this feature again until you finish a short or long rest.",
        },
        {
          name: "Shared Recovery",
          description:
            "Whenever you expend a spell slot of 2nd level or higher to cast a healing spell, regain 1 BP (once per turn).",
        },
        {
          name: "Discipline Progression",
          description:
            "Your chosen branch grants an additional feature at this level (see branches[branch].progression[5]).",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },
    {
      level: 6,
      features: [
        {
          name: "Catalyst Reaction",
          description:
            "When you restore hit points to a creature with a spell or class feature on your turn, the next damaging alchemical effect you deal before the end of your next turn deals bonus damage equal to your proficiency bonus. When you deal damage with an alchemical effect on your turn, the next healing effect you use before the end of your next turn heals additional hit points equal to your proficiency bonus. Each bonus can trigger once per turn.",
        },
        {
          name: "Alchemical Immunity",
          description:
            "You gain resistance to poison damage and immunity to the poisoned condition, and you have advantage on saving throws against disease.",
        },
      ],
    },
    {
      level: 7,
      features: [
        {
          name: "Emergency Response",
          description:
            "When a creature you can see within 30 ft drops to 0 hit points, you can use your reaction to teleport to an unoccupied space within 5 ft of it and immediately use Restorative Burst as part of the same reaction. You must still spend BP for Restorative Burst.",
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
          name: "Greater Potioncraft",
          description:
            "You can craft potions that replicate up to 3rd-level spell effects from your bonus spell list or thematically appropriate restorative/alchemical spells at GM discretion. Crafted potions last 7 days. You can spend 2 BP to create a Greater Healing Draught that restores 4d4 + your spellcasting modifier HP.",
        },
        {
          name: "Discipline Progression",
          description:
            "Your chosen branch grants a powerful feature at this level (see branches[branch].progression[9]).",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },
    {
      level: 10,
      features: [
        {
          name: "Physician's Aura",
          description:
            "You emanate a 10-ft aura of restorative energy. An ally that starts its turn in the aura regains hit points equal to your proficiency bonus (a creature can benefit from this once per round). Healing you provide to creatures inside your aura is increased by your proficiency bonus.",
        },
      ],
    },
    {
      level: 11,
      features: [
        {
          name: "Improved Restorative Burst",
          description:
            "When you use Restorative Burst, you can target up to two creatures within range. Roll the total healing dice once and divide the result (your modifier is applied to only one target).",
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
          name: "Alchemical Mastery",
          description:
            "Your maximum Brew Points increases by your proficiency bonus. When you finish a short rest, you regain two-thirds (rounded down) of your maximum Brew Points instead of half. Once per long rest, you can overcharge above your maximum by an amount equal to your proficiency bonus for 1 hour.",
        },
        {
          name: "Discipline Progression",
          description:
            "Your chosen branch grants an expert-tier feature at this level (see branches[branch].progression[13]).",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },
    {
      level: 14,
      features: [
        {
          name: "Supreme Panacea",
          description:
            "As an action, spend 5 BP to touch a creature. It regains all hit points, ends all diseases and poisons, and removes all levels of exhaustion. Until it finishes a long rest, it has immunity to poison and disease. You can't use this feature again until you finish a long rest.",
        },
      ],
    },
    {
      level: 15,
      features: [
        {
          name: "Greater Physician's Aura",
          description:
            "Your Physician's Aura increases to a 30-ft radius. Allies in your aura have advantage on death saving throws and Constitution saving throws.",
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
          name: "Discipline Progression",
          description:
            "Your chosen branch grants a master-tier feature at this level (see branches[branch].progression[17]).",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },
    {
      level: 18,
      features: [
        {
          name: "Legendary Healer",
          description:
            "When you roll initiative and have no Brew Points, regain 3 BP. Additionally, a number of times per long rest equal to your Wisdom or Intelligence modifier (your choice), you can choose to maximize the healing dice of a spell or class feature you use.",
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
          name: "Magnum Opus",
          description:
            "You have perfected the alchemical arts.\n• When you finish a short or long rest, you regain all Brew Points.\n• Restorative Burst costs 1 fewer BP for you (minimum 0).\n• Once per long rest, as an action, you can enter a 1-hour Philosopher's Stone state: all healing you provide is doubled, you and allies within 30 ft have immunity to poison and disease, and you can cast *Greater Restoration* without a slot or material components for the duration.",
        },
      ],
    },
  ],

  // ---- Branches: explicit progression tree by level ----
  branches: {
    "Medicinal Healer": {
      branchPath: "Medicinal Healer",
      tagline: "Where compassion meets craft.",
      progression: {
        3: [
          {
            name: "Efficient Triage",
            description:
              "When you cast a healing spell or use Restorative Burst, you may choose a second creature within 5 ft of the main target to regain hit points equal to your proficiency bonus.",
          },
          {
            name: "Sanitizing Aura",
            description:
              "As a bonus action, spend 1 BP to emit a 10-ft aura for 1 minute. Allies in the aura have advantage on saving throws against poison and disease.",
          },
        ],
        5: [
          {
            name: "Revitalizing Surge",
            description:
              "When you heal a creature to its maximum hit points, it gains advantage on its next attack roll or saving throw made within 1 minute.",
          },
        ],
        9: [
          {
            name: "Mass Triage",
            description:
              "When you cast a healing spell of 3rd level or higher, choose a number of creatures within 30 ft equal to your Wisdom or Intelligence modifier (your choice). Each regains hit points equal to your proficiency bonus + your spellcasting modifier.",
          },
        ],
        13: [
          {
            name: "Life Ward",
            description:
              "When a creature you can see within 30 ft would be reduced to 0 hit points, you can use your reaction and spend 3 BP to leave it at 1 hit point and grant it temporary hit points equal to your Healer-Alchemist level + your spellcasting modifier.",
          },
        ],
        17: [
          {
            name: "Resurrection Elixir",
            description:
              "During a long rest, you can spend 10 BP and 300 gp in reagents to create a special elixir. If administered to a creature that died within the past 10 days, it returns to life as per *Raise Dead* (no slot required). The elixir lasts 7 days. You can have only one such elixir at a time.",
          },
        ],
      },
    },

    "Forensic Alchemist": {
      branchPath: "Forensic Alchemist",
      tagline: "Every crime leaves a trace.",
      progression: {
        3: [
          {
            name: "Residue Reagent",
            description:
              "When you use Chemical Forensics, you can distill a sample into a faintly glowing vial. For 1 hour, it glows brighter within 30 ft of similar magical energy.",
          },
          {
            name: "Trace Analysis",
            description:
              "You have advantage on Investigation checks to identify how magic interacted with physical materials (burned wards, potion splashes, curse marks, etc.).",
          },
        ],
        5: [
          {
            name: "Perfect Solvent",
            description:
              "Spend 1 BP to dissolve or neutralize a single magical adhesive, alchemical snare, or curse residue you can touch without triggering it.",
          },
        ],
        9: [
          {
            name: "Arcane Autopsy",
            description:
              "Spend 2 BP and 1 hour examining a creature that died within the past week to learn: exact cause of death, any spells cast on it in the last hour before death, and a 30-second glimpse of its final memories.",
          },
        ],
        13: [
          {
            name: "Retrocognition",
            description:
              "Spend 3 BP and 10 minutes to witness a ghostly echo of events that occurred in your current location within the past 24 hours, up to 10 minutes of activity. This reveals sights and muffled sounds but not secrets warded by powerful magic (GM's call).",
          },
        ],
        17: [
          {
            name: "Perfect Analysis",
            description:
              "Chemical Forensics no longer costs BP and works on samples up to 1 year old. You automatically succeed on checks to identify potions, poisons, and mundane alchemical substances. Once per long rest, you can replicate *Zone of Truth* (spell save DC equals your own) without expending a spell slot.",
          },
        ],
      },
    },

    "Battle Chemist": {
      branchPath: "Battle Chemist",
      tagline: "Brew fast, throw faster.",
      progression: {
        3: [
          {
            name: "Volatile Flask",
            description:
              "As an action, spend 2 BP to throw an alchemical flask at a point within 30 ft. Creatures in a 5-ft radius make a Dexterity saving throw against your spell save DC, taking 3d6 acid or fire damage (your choice) on a failed save, or half as much on a success.",
          },
          {
            name: "Combat Stim",
            description:
              "As a bonus action, administer a stimulant to an ally within 5 ft, granting temporary hit points equal to your proficiency bonus + your spellcasting modifier for 1 minute.",
          },
        ],
        5: [
          {
            name: "Controlled Detonation",
            description:
              "When you use Volatile Flask, you can exclude a number of creatures from the effect equal to your spellcasting ability modifier (minimum 1).",
          },
        ],
        9: [
          {
            name: "Volatile Saturation",
            description:
              "Your Volatile Flask affects a 10-ft radius and deals 4d6 damage. The area becomes hazardous terrain for 1 minute; a creature entering or starting its turn there takes 1d6 of the flask's damage type (Dex save halves, using your spell save DC).",
          },
        ],
        13: [
          {
            name: "Adaptive Catalyst",
            description:
              "When you use Volatile Flask, choose acid, fire, cold, or lightning damage. Creatures that fail the save are also affected for 1 minute: acid (corroded, −1 AC), fire (burning, 1d4 ongoing at start of turn), cold (slowed, −10 ft speed), or lightning (shocked, can't take reactions). Affected creatures can repeat the save at the end of each of their turns, ending the effect on a success.",
          },
        ],
        17: [
          {
            name: "Alchemical Arsenal",
            description:
              "As an action, spend 5 BP to unleash an alchemical barrage. Choose up to three points within 60 ft. At each point, a Volatile Flask detonates (10-ft radius) using your current Volatile Flask damage and save rules. You can choose damage type separately for each point.",
          },
        ],
      },
    },
  },

  design_notes: {
    concept:
      "Pairs with the base Witch/Wizard to represent healers, potion masters, or forensic chemists. Provides restorative, investigative, and utility support.",
    tone: "Grounded magical medicine and alchemical science — equal parts compassion and curiosity.",
    balance_notes: [
      "BP pool tied to proficiency (with enhanced recharge at 13) prevents early over-healing and late-game spam.",
      "Restorative Burst scales by BP spent, not level spikes; 11th adds multi-target utility without doubling modifiers.",
      "Battle Chemist damage requires saves vs. spell DC and costs BP; AOE scaling gated at 9/13/17.",
      "High-tier heals consolidated so Supreme Panacea and Magnum Opus don't stack excessively.",
    ],
  },
};
