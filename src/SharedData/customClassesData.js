/**
 * Custom Classes for Wizard World Noir
 * These classes represent magical professions and can be used alongside D&D 5e classes
 */

import { type } from "@testing-library/user-event/dist/type";

export const customClassesData = {
  base_witch_wizard: {
    id: "base_witch_wizard",
    name: "Witch / Wizard",
    type: "Base Class",
    description:
      "Every trained witch or wizard begins here. A magical investigator, duelist, or scholar who channels their will through structured spellcraft. This base class provides core magical training before advancing into professional vocations such as Auror, Unspeakable, or Healer.",
    hit_die: "d8",
    primary_abilities: ["Intelligence", "Wisdom", "Charisma"],
    saving_throws: ["Intelligence", "Wisdom"],
    armor_proficiencies: [],
    weapon_proficiencies: ["Wands", "Daggers", "Light Crossbows"],
    tool_proficiencies: ["Alchemist's Supplies", "Calligrapher's Tools"],
    skill_choices: {
      choose: 2,
      options: [
        "Arcana",
        "Insight",
        "Investigation",
        "History",
        "Medicine",
        "Perception",
        "Persuasion",
      ],
    },
    spellcasting: {
      progression_type: "half_caster",
      casting_ability_choice: ["Intelligence", "Wisdom", "Charisma"],
      cantrips_known: {
        1: 3,
        5: 4,
      },
      spells_prepared_formula: "casting_ability_mod + class_level",
      spell_slots: {
        1: { "1st": 2 },
        2: { "1st": 3 },
        3: { "1st": 3, "2nd": 2 },
        4: { "1st": 3, "2nd": 3 },
        5: { "1st": 4, "2nd": 3, "3rd": 2 },
      },
      spell_list: {
        cantrips: [
          "Lumos",
          "Nox",
          "Prestidigitation",
          "Minor Illusion",
          "Mage Hand",
          "Mending",
          "Message",
          "Thaumaturgy",
        ],
        level_1_to_3: [
          "Expelliarmus",
          "Protego",
          "Rennervate",
          "Detect Magic",
          "Revelio",
          "Alohomora",
          "Stupefy",
          "Petrificus Totalus",
          "Finite Incantatem",
          "Leviosa",
          "Obliviate",
          "Apparition",
        ],
      },
    },
    level_features: [
      {
        level: 1,
        features: [
          {
            name: "Magical Specialty",
            description: "Choose a focus that defines your magical training.",
            options: [
              {
                name: "Charms",
                effect:
                  "+1 to spell attack rolls and save DCs for charm-based spells. Gain Mage Hand if not already known.",
              },
              {
                name: "Defense",
                effect:
                  "Add proficiency bonus to AC for 1 round after casting a defensive spell like Shield or Counterspell.",
              },
              {
                name: "Transfiguration",
                effect:
                  "Alter the appearance of small nonliving objects as an action (cosmetic only).",
              },
              {
                name: "Potions & Alchemy",
                effect:
                  "Craft simple restorative or investigative potions during downtime without a lab.",
              },
              {
                name: "Dark Arts Studies",
                effect:
                  "Advantage on saving throws against fear; identify hexes, curses, and dark marks.",
              },
            ],
          },
          {
            name: "Spellcasting",
            description:
              "You gain the ability to cast spells and use magical cantrips according to your chosen casting ability.",
          },
        ],
      },
      {
        level: 2,
        features: [
          {
            name: "Detect Residual Magic",
            description:
              "Focus on a 30-foot area to detect any magical traces cast there within the past hour, learning school, strength, and emotional residue. Uses per long rest = proficiency bonus.",
          },
          {
            name: "Magical Theory",
            description:
              "When witnessing a spell being cast, you may use a reaction to make an Arcana check (DC 10 + spell level) to identify it before it takes effect.",
          },
        ],
      },
      {
        level: 3,
        features: [
          {
            name: "Countercurse",
            description:
              "When you or a nearby ally is affected by a spell, use your reaction to make a spellcasting ability check (DC 10 + spell level). On success, the effect ends. Once per short or long rest.",
          },
          {
            name: "Focus Recovery",
            description:
              "Once per short rest, as a bonus action, regain expended spell slots equal to half your proficiency bonus (rounded down), none higher than 2nd level.",
          },
        ],
      },
      {
        level: 4,
        features: [
          {
            name: "Ability Score Improvement or Magical Feat",
            description: "Increase an ability score or choose a magical feat.",
            feat_examples: [
              {
                name: "Duelist's Reflex",
                effect:
                  "Use Countercurse as a bonus action once per long rest.",
              },
              {
                name: "Forensic Focus",
                effect:
                  "Detect Residual Magic now reveals the last caster's wand signature.",
              },
              {
                name: "Efficient Channeling",
                effect: "Gain +1 spell slot of 2nd level or lower.",
              },
            ],
          },
        ],
      },
      {
        level: 5,
        features: [
          {
            name: "Signature Spell",
            description:
              "Choose one known spell of 2nd level or lower. You can cast it once per short rest without expending a spell slot. You may change this choice when you level up.",
          },
          {
            name: "Magical Burnout",
            description:
              "After casting three or more spells in a single combat, make a DC 10 Constitution save or gain 1 level of Mental Fatigue, imposing penalties on concentration and insight checks until a long rest.",
          },
        ],
      },
    ],
    design_notes: {
      concept:
        "Shared magical base for all player characters before branching into professions.",
      tone: "Wizard World Noir — investigative, morally gray, psychologically intense.",
      balance_notes:
        "Half-caster progression allows stacking with vocational class without overloading power. Designed to pair with Auror, Unspeakable, or Healer classes at levels 6+.",
    },
  },

  profession_healer_alchemist: {
    id: "profession_healer_alchemist",
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
              "Choose a specialization: Medicinal Healer, Forensic Alchemist, or Battle Chemist. You gain its 3rd-level features now and additional benefits at levels 5, 9, 13, and 17.",
            options: [
              {
                name: "Medicinal Healer",
                tagline: "Where compassion meets craft.",
                features: [
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
              },
              {
                name: "Forensic Alchemist",
                tagline: "Every crime leaves a trace.",
                features: [
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
              },
              {
                name: "Battle Chemist",
                tagline: "Brew fast, throw faster.",
                features: [
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
              },
            ],
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
            name: "Discipline Feature (5th)",
            description: "Your chosen Discipline grants an additional benefit.",
            options: [
              {
                name: "Medicinal Healer — Revitalizing Surge",
                description:
                  "When you heal a creature to its maximum hit points, it gains advantage on its next attack roll or saving throw made within 1 minute.",
              },
              {
                name: "Forensic Alchemist — Perfect Solvent",
                description:
                  "Spend 1 BP to dissolve or neutralize a single magical adhesive, alchemical snare, or curse residue you can touch without triggering it.",
              },
              {
                name: "Battle Chemist — Controlled Detonation",
                description:
                  "When you use Volatile Flask, you can exclude a number of creatures from the effect equal to your spellcasting ability modifier (minimum 1).",
              },
            ],
          },
          {
            name: "Shared Recovery",
            description:
              "Whenever you expend a spell slot of 2nd level or higher to cast a healing spell, regain 1 BP (once per turn).",
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
            name: "Discipline Feature (9th)",
            description: "Your Discipline grants a powerful feature.",
            options: [
              {
                name: "Medicinal Healer — Mass Triage",
                description:
                  "When you cast a healing spell of 3rd level or higher, choose a number of creatures within 30 ft equal to your Wisdom or Intelligence modifier (your choice). Each regains hit points equal to your proficiency bonus + your spellcasting modifier.",
              },
              {
                name: "Forensic Alchemist — Arcane Autopsy",
                description:
                  "Spend 2 BP and 1 hour examining a creature that died within the past week to learn: exact cause of death, any spells cast on it in the last hour before death, and a 30-second glimpse of its final memories.",
              },
              {
                name: "Battle Chemist — Volatile Saturation",
                description:
                  "Your Volatile Flask affects a 10-ft radius and deals 4d6 damage. The area becomes hazardous terrain for 1 minute; a creature entering or starting its turn there takes 1d6 of the flask's damage type (Dex save halves, using your spell save DC).",
              },
            ],
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
            name: "Discipline Feature (13th)",
            description: "Your Discipline reaches expert tier.",
            options: [
              {
                name: "Medicinal Healer — Life Ward",
                description:
                  "When a creature you can see within 30 ft would be reduced to 0 hit points, you can use your reaction and spend 3 BP to leave it at 1 hit point and grant it temporary hit points equal to your Healer-Alchemist level + your spellcasting modifier.",
              },
              {
                name: "Forensic Alchemist — Retrocognition",
                description:
                  "Spend 3 BP and 10 minutes to witness a ghostly echo of events that occurred in your current location within the past 24 hours, up to 10 minutes of activity. This reveals sights and muffled sounds but not secrets warded by powerful magic (GM's call).",
              },
              {
                name: "Battle Chemist — Adaptive Catalyst",
                description:
                  "When you use Volatile Flask, choose acid, fire, cold, or lightning damage. Creatures that fail the save are also affected for 1 minute: acid (corroded, −1 AC), fire (burning, 1d4 ongoing at start of turn), cold (slowed, −10 ft speed), or lightning (shocked, can't take reactions). Affected creatures can repeat the save at the end of each of their turns, ending the effect on a success.",
              },
            ],
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
            name: "Discipline Feature (17th)",
            description: "Your Discipline reaches master tier.",
            options: [
              {
                name: "Medicinal Healer — Resurrection Elixir",
                description:
                  "During a long rest, you can spend 10 BP and 300 gp in reagents to create a special elixir. If administered to a creature that died within the past 10 days, it returns to life as per *Raise Dead* (no slot required). The elixir lasts 7 days. You can have only one such elixir at a time.",
              },
              {
                name: "Forensic Alchemist — Perfect Analysis",
                description:
                  "Chemical Forensics no longer costs BP and works on samples up to 1 year old. You automatically succeed on checks to identify potions, poisons, and mundane alchemical substances. Once per long rest, you can replicate *Zone of Truth* (spell save DC equals your own) without expending a spell slot.",
              },
              {
                name: "Battle Chemist — Alchemical Arsenal",
                description:
                  "As an action, spend 5 BP to unleash an alchemical barrage. Choose up to three points within 60 ft. At each point, a Volatile Flask detonates (10-ft radius) using your current Volatile Flask damage and save rules. You can choose damage type separately for each point.",
              },
            ],
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
  },

  profession_spellwright: {
    id: "profession_spellwright",
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
        known_formula: "designs_known = min( level + Intelligence_mod, 12 )",
        active_by_level: {
          2: 2,
          6: 3,
          10: 4,
          14: 5,
        },
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
    level_features: [
      {
        level: 1,
        features: [
          {
            name: "Runic Imprinting",
            description:
              "You learn to inscribe small magical runes on Tiny objects. Choose one of the imprint effects when you inscribe it. You can maintain up to your Intelligence modifier active imprints (minimum 1).",
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
              "You can imbue nonmagical objects with temporary enchantments—Spell Designs. You know a number of designs and can have a limited number active at once (see resource). Assign or reassign designs when you finish a long rest. Example designs:",
            example_designs: [
              "Runic Weapon — Weapon counts as magical and deals +1 damage of a chosen type (fire, lightning, or force). At level 10 this increases to +2 damage.",
              "Deflection Ward — Armor or clothing grants +1 AC (stacks with armor, not with shields). At level 14 this becomes +2 AC.",
              "Arcane Battery — Stores a spell you know of up to 1st level. As an action, a creature holding the item releases the stored spell using your spell attack/save DC. The spell vanishes after it is released. Battery capacity improves at higher levels.",
              "Luminar Gem — Emits bright light in a 20-ft radius (dim 20 more) and can be toggled by command word.",
              "Recorder's Lens — Advantage on checks to examine magical inscriptions, sigils, or wards; takes a 1-minute recording that can be replayed as an illusory overlay.",
            ],
          },
          {
            name: "Arcane Engineering",
            description:
              "When crafting or repairing magic items, you spend half the usual gold and time. After 10 minutes studying a magical device, you learn its school of magic and general function (no check required).",
          },
        ],
      },
      {
        level: 3,
        features: [
          {
            name: "Branch of Craft",
            description:
              "Choose a specialty that shapes your inventions: Runesmith, Animaturgist, Thaumaturgic Engineer, or Enchanter.",
            options: [
              {
                name: "Runesmith",
                features: [
                  {
                    name: "Weapon Runes",
                    description:
                      "During a short rest, etch a combat rune into a weapon or armor you touch. Choose fire, lightning, or force. Once per turn when you hit with that weapon, deal +1d6 of the chosen type. The rune fades after your next long rest or if you etch a new one.",
                  },
                  {
                    name: "Warding Glyphs",
                    description:
                      "As a bonus action, inscribe a 10-ft square ward on a surface within 5 ft that lasts 1 minute or until you move more than 30 ft from it. Creatures of your choice in the ward gain +2 AC. You can have only one ward active at a time.",
                  },
                ],
              },
              {
                name: "Animaturgist",
                features: [
                  {
                    name: "Construct Companion",
                    description:
                      "You build a Tiny construct (uses your proficiency bonus for AC/attacks; HP = 5 + your Intelligence modifier + your level; speed 30 ft; darkvision 60 ft). It acts on your initiative, takes the Dodge action unless you use your bonus action to command it to Attack, Dash, Disengage, or Help. If it dies, you can rebuild it over a long rest for 25 gp in parts.",
                  },
                  {
                    name: "Self-Repair Protocol",
                    description:
                      "As an action, you expend a spell slot to restore your construct's HP equal to 1d8 per slot level.",
                  },
                ],
              },
              {
                name: "Thaumaturgic Engineer",
                features: [
                  {
                    name: "Arcane Capacitor",
                    description:
                      "Once per short rest, immediately after you cast a leveled spell, store its residue. Later (bonus action), release a 15-ft cone of force for 2d8 damage (Dex save halves; DC = Spellwright save DC).",
                  },
                  {
                    name: "Stabilized Core",
                    description:
                      "Allies within 10 ft of you have advantage on Constitution checks to maintain concentration on spells.",
                  },
                ],
              },
              {
                name: "Enchanter",
                features: [
                  {
                    name: "Emotion Resonance",
                    description:
                      "When you restore HP to a creature or grant it temporary HP with a spell or design, choose one ally within 30 ft; that ally gains +1 to attack rolls until the end of your next turn.",
                  },
                  {
                    name: "Charm Matrix",
                    description:
                      "You create a soothing trinket. Allies within 10 ft have advantage on saving throws against being frightened or charmed while they can see or hear you.",
                  },
                ],
              },
            ],
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
                effect:
                  "Create/overwrite a Runic Imprint as a bonus action instead of an action.",
              },
              {
                name: "Enhanced Battery",
                effect:
                  "Your Arcane Batteries can now store up to a 2nd-level spell.",
              },
              {
                name: "Master Craftsman",
                effect:
                  "When crafting nonmagical items, you work in half the time and may add a harmless minor magical flourish (glow, warmth, floating filigree).",
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
              "You may maintain one additional active design beyond your current limit (this stacks with the table). Also, you can place two compatible minor effects on the same item (e.g., a weapon that glows and deals extra fire damage).",
          },
          {
            name: "Branch Feature (5th)",
            description: "Your Branch grants a new feature.",
            options: [
              {
                name: "Runesmith — Overloaded Strike",
                description:
                  "When you hit with a runed weapon, you can expend a spell slot to deal +2d8 elemental damage of the rune's type (+1d8 per slot level above 1st).",
              },
              {
                name: "Animaturgist — Modular Upgrade",
                description:
                  "Add one module to your construct: flight (30 ft), swim (30 ft), or arcane discharge (ranged spell attack, 30/120 ft, 1d8 force). You can swap modules over a long rest.",
              },
              {
                name: "Thaumaturgic Engineer — Ley Pulse",
                description:
                  "When you trigger Arcane Capacitor, you may instead emit a supportive pulse: allies within 10 ft gain temporary HP equal to your Intelligence modifier and +10 ft speed until the start of your next turn.",
              },
              {
                name: "Enchanter — Resonant Feedback",
                description:
                  "When a creature benefiting from your Charm Matrix scores a critical hit or succeeds on a saving throw, you may either regain 1d4 HP or recover one 1st-level spell slot (once per turn).",
              },
            ],
          },
        ],
      },
      {
        level: 6,
        features: [
          {
            name: "Tool Master",
            description:
              "You gain proficiency with all artisan's tools. When you make a check with tools you're proficient with, add double your proficiency bonus.",
          },
          {
            name: "Spell Capture",
            description:
              "Once per short rest, when a creature you can see casts a spell of 3rd level or lower within 60 ft, you can use your reaction to attempt to capture its pattern: make an Intelligence (Arcana) check (DC = 10 + the spell's level). On a success, you can prepare that spell as a Spellwright spell until your next long rest (it counts against your prepared spells).",
          },
        ],
      },
      {
        level: 7,
        features: [
          {
            name: "Branch Feature (7th)",
            description: "Your Branch improves.",
            options: [
              {
                name: "Runesmith — Layered Inscriptions",
                description:
                  "A single item can hold up to two different runes at once. Activating both in the same turn requires a bonus action and can occur once per turn.",
              },
              {
                name: "Animaturgist — Swarm Protocol",
                description:
                  "You can maintain up to two Tiny constructs simultaneously (or one Small construct that uses the Steel Defender-style stat template). Only one construct can benefit from a Spell Design at a time.",
              },
              {
                name: "Thaumaturgic Engineer — Overcharge Matrix",
                description:
                  "When releasing Arcane Capacitor, you may expend a spell slot: increase the cone to 30 ft and add +2d8 force damage per slot level.",
              },
              {
                name: "Enchanter — Sympathetic Resonance",
                description:
                  "When an ally affected by your Emotion Resonance deals damage, they regain HP equal to your Intelligence modifier (once per turn). Your Charm Matrix radius increases to 20 ft.",
              },
            ],
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
              "Your Arcane Batteries can now store spells up to 3rd level. When a willing ally within 30 ft expends a 1st–3rd level spell slot, you can use your reaction to release a stored spell of the same level from one of your batteries to immediately restore that slot to them. This consumes the stored spell. You can do this once per short rest.",
          },
          {
            name: "Rapid Fabrication",
            description:
              "You can reassign your active Spell Designs when you finish a short rest instead of a long rest. In combat, you can spend a spell slot as a bonus action to create a temporary 1-minute design on an object you can touch.",
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
            name: "Branch Feature (11th)",
            description: "Your Branch reaches expert tier.",
            options: [
              {
                name: "Runesmith — Explosive Runes",
                description:
                  "As a bonus action, detonate one rune inscribed on a weapon or surface to force creatures in a 15-ft radius to make a Dexterity save. On a failure they take 6d6 damage of the rune's type, or half on a success. The detonated rune is removed and can be re-inscribed during a short rest.",
              },
              {
                name: "Animaturgist — Hivemind Coordination",
                description:
                  "When one of your constructs hits a creature, other constructs you control have advantage on attacks against that creature until the end of your turn. You can also see and hear through any of your constructs while they are within 1 mile (no action required).",
              },
              {
                name: "Thaumaturgic Engineer — Ley Amplifier",
                description:
                  "Once per short rest, when you cast a spell, you can treat it as if cast using a spell slot one level higher (to a maximum of 5th-level spell slot effects).",
              },
              {
                name: "Enchanter — Grand Charm",
                description:
                  "Creatures have disadvantage on saving throws against your enchantment spells. When you cast an enchantment spell that targets a creature, you may grant one ally within your Charm Matrix a mirrored secondary benefit if applicable (e.g., inspiration-like +1d4 on one roll within 1 minute).",
              },
            ],
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
              "You can maintain a number of active designs equal to the value for your level (see resource) + your Intelligence modifier (minimum +1). In addition, you can craft one Masterwork Design combining up to three compatible effects into a single item (8 hours work and rare materials worth 500 gp). You can have only one Masterwork Design at a time.",
          },
        ],
      },
      {
        level: 14,
        features: [
          {
            name: "Spell Storage Mastery",
            description:
              "Your Arcane Batteries can now store spells up to 5th level. You can maintain a number of stored spells across your batteries equal to your Intelligence modifier (minimum 1).",
          },
        ],
      },
      {
        level: 15,
        features: [
          {
            name: "Branch Feature (15th)",
            description: "Your Branch reaches master tier.",
            options: [
              {
                name: "Runesmith — Mythic Inscription",
                description:
                  "Over 24 hours, inscribe a mythic rune onto one weapon or armor you touch. While inscribed: weapons gain +2 to attack and damage and deal +2d6 of the rune's type; armor grants +2 AC and resistance to one damage type you choose when inscribing. You may have only one Mythic Inscription at a time.",
              },
              {
                name: "Animaturgist — Apex Construct",
                description:
                  "Upgrade one construct to a powerful form (Medium; uses enhanced Steel Defender-style stat template). It gains proficiency bonus to AC/attacks/saves, HP equal to twice your level + Intelligence modifier, and can cast one 3rd-level spell you know once per long rest (using your spell DC).",
              },
              {
                name: "Thaumaturgic Engineer — Perpetual Engine",
                description:
                  "When you roll initiative, regain one expended spell slot of 3rd level or lower. You also have advantage on Constitution saving throws to maintain concentration.",
              },
              {
                name: "Enchanter — Aura of Empowerment",
                description:
                  "Your Charm Matrix becomes a 30-ft aura. Allies in the aura add your Intelligence modifier to spell damage rolls and gain +1 to spell attack rolls.",
              },
            ],
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
              "You can maintain two Masterwork Designs at once. In addition, over 8 hours you can retrofit a permanent magic item to host one simple Spell Design (DM-approved) without removing its original properties; it counts against your active design limit.",
          },
        ],
      },
      {
        level: 18,
        features: [
          {
            name: "Recursive Enchantment",
            description:
              "Whenever you finish a short rest with one or more active designs, choose one. It becomes empowered until your next rest: weapons add +1d6 extra damage; armor gains +1 AC and resistance to one damage type; utility items gain one additional minor property (DM-approved).",
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
              "Your mastery of arcane craft is unparalleled. You gain: \n• +2 to your active design limit (after all other calculations).\n• Once per long rest, during a 1-hour workshop, create a Legendary Prototype that combines up to three Spell Design effects and one Masterwork benefit; it lasts 24 hours or until you create another prototype.\n• Your Spell Designs that you create personally have advantage on checks to resist being dispelled, and effects you create function normally in areas of antimagic you designate at the moment of creation if they are worn or carried by you (DM adjudication for powerful fields).",
          },
        ],
      },
    ],
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
  },

  profession_naturalist: {
    id: "profession_naturalist",
    name: "Naturalist",
    type: "Druid",
    description:
      "Naturalists are experts in living magic—flora, fauna, and the ley-ecology that binds them. They heal, wrangle, and weaponize the natural world through field research, herbology, and magizoology.",
    hit_die: "d8",
    primary_abilities: ["Wisdom"],
    saving_throws: ["Wisdom", "Intelligence"],
    armor_proficiencies: ["Light Armor"],
    weapon_proficiencies: ["Wands", "Daggers", "Quarterstaffs"],
    tool_proficiencies: ["Herbalism Kit"],
    skill_choices: {
      choose: 1,
      options: [
        "Nature",
        "Animal Handling",
        "Medicine",
        "Survival",
        "Arcana",
        "Investigation",
        "Perception",
      ],
    },
    spellcasting: {
      progression_type: "augmented",
      casting_ability_choice: ["Wisdom"],
      notes:
        "Naturalist levels do not grant additional spell slots. They add themed spells and techniques fueled by Field Manifestation and Living Reagents.",
      bonus_spells: {
        cantrips: ["Druidcraft", "Guidance"],
        level_1_to_3: [
          "Speak with Animals",
          "Animal Friendship",
          "Entangle",
          "Goodberry",
          "Beast Sense",
          "Lesser Restoration",
          "Spike Growth",
          "Plant Growth",
          "Conjure Animals",
        ],
      },
    },
    class_resources: [
      {
        name: "Field Manifestation",
        uses_formula: "proficiency_bonus per short rest",
        duration: "10 minutes (can be ended early as a bonus action)",
        recharge: "Short Rest",
        modes: [
          "Embody Traits: Choose one natural trait you have documented (two traits at level 5; three traits at level 13). Examples: climb speed equal to your speed, darkvision 60 ft, keen smell (advantage on Perception relying on smell), resistance to poison, swim speed equal to your speed, water breathing, tremorsense 10 ft.",
          "Manifest Companion: Summon a Primal Companion (beast/plant spirit) that uses a Naturalist Primal Companion stat block scaling with your level and proficiency bonus. It acts on your initiative, obeys your commands, and vanishes at 0 HP or when the effect ends.",
        ],
      },
      {
        name: "Living Reagents",
        uses_formula:
          "proficiency_bonus + Wisdom_mod (minimum proficiency_bonus) per long rest",
        recharge: "Long Rest",
        range: "30 ft (touch if you lack line of sight)",
        spend_examples: [
          "Vital Tincture: As a bonus action, a creature regains 1d6 + Wisdom_mod HP.",
          "Antitoxin Draught: A creature gains +1d4 to its next saving throw against poison or disease within 1 minute.",
          "Catalytic Infusion: Your next spell cast this turn adds +1d4 to one damage or healing roll.",
        ],
      },
    ],
    level_features: [
      {
        level: 1,
        features: [
          {
            name: "Field Manifestation",
            description:
              "Harness living magic to embody traits or manifest a companion. Uses equal to your proficiency bonus, recharging on a short or long rest.",
          },
          {
            name: "Living Reagents",
            description:
              "You carry a field kit of essences (pollen, scales, spores). As a bonus action, expend a reagent to apply one listed effect within 30 ft.",
          },
          {
            name: "Field Kit Proficiency",
            description:
              "You gain proficiency with Herbalism Kit. Choose one additional kit: Alchemist's Supplies or Poisoner's Kit.",
          },
        ],
      },
      {
        level: 2,
        features: [
          {
            name: "Environmental Attunement",
            description:
              "You have advantage on checks to track or identify magical flora/fauna and diagnose ecological imbalances. Once per short rest, you sense nearby ley-imbalances as if casting Detect Magic centered on you (1 round, no components).",
          },
          {
            name: "Essence Extraction",
            description:
              "During a short rest, you can harvest one additional Living Reagent from suitable remains or terrain (GM adjudication).",
          },
        ],
      },
      {
        level: 3,
        features: [
          {
            name: "Branch of Study",
            description:
              "Choose Herbology, Zoology, or Mycology. You gain its 3rd-level features now and additional benefits at level 5.",
            options: [
              {
                name: "Branch of Herbology",
                features: [
                  {
                    name: "Bonus Spells (Herbology)",
                    description:
                      "Entangle and Barkskin are always prepared and don't count against your limit.",
                  },
                  {
                    name: "Verdant Surge",
                    description:
                      "When you cast a spell that creates/manipulates plants or terrain, choose one: (a) one ally you can see regains 1d8 + WIS HP, or (b) one creature affected by the spell must succeed on a STR save (DC = 8 + PB + WIS) or become restrained by roots until the start of your next turn.",
                  },
                ],
              },
              {
                name: "Branch of Zoology",
                features: [
                  {
                    name: "Bonus Spells (Zoology)",
                    description:
                      "Animal Friendship and Beast Sense are always prepared and don't count against your limit.",
                  },
                  {
                    name: "Field Familiar",
                    description:
                      "Gain a loyal magical companion (use Beast of the Land/Air/Sea style stat block; PB to AC/attacks/saves). It acts on your turn and adds your Wisdom modifier to its damage rolls. If dismissed or reduced to 0 HP, you can resummon it after a short or long rest or by expending a Field Manifestation use.",
                  },
                ],
              },
              {
                name: "Branch of Mycology",
                features: [
                  {
                    name: "Bonus Spells (Mycology)",
                    description:
                      "Ray of Sickness and Blindness/Deafness are always prepared and don't count against your limit.",
                  },
                  {
                    name: "Spore Cloud",
                    description:
                      "As an action, release spores in a 15-ft radius within 30 ft. Creatures of your choice must succeed on a CON save (DC = 8 + PB + WIS) or become poisoned until the start of your next turn. Allies in the area gain 1d4 temp HP. Uses: PB per long rest.",
                  },
                ],
              },
            ],
          },
          {
            name: "Minor Symbiosis",
            description:
              "While your Manifest Companion or Field Familiar is active, you and it share any resistances granted by your current Embody Traits feature.",
          },
        ],
      },
      {
        level: 4,
        features: [
          {
            name: "Ability Score Improvement or Natural Lore Feat",
            description:
              "Increase an ability score by +2 (or two by +1), or choose a feat.",
            feat_examples: [
              {
                name: "Quick Infusion",
                effect:
                  "Once per short rest, use a Living Reagent as part of the same bonus action you use to cast a spell.",
              },
              {
                name: "Beast Whisperer",
                effect:
                  "Gain expertise in Animal Handling or Nature (your choice). Your Field Familiar gains +2 HP per Naturalist level.",
              },
              {
                name: "Toxicologist",
                effect:
                  "Your spells that deal poison or necrotic damage ignore resistance once per turn.",
              },
            ],
          },
        ],
      },
      {
        level: 5,
        features: [
          {
            name: "Improved Manifestation",
            description:
              "Your Manifest Companion can use a CR 1/2 stat block, and Embody Traits now grants two traits simultaneously. When you Manifest Companion, it immediately takes the Help action targeting you or your familiar.",
          },
          {
            name: "Branch Feature (5th)",
            description: "Your chosen Branch grants an additional benefit.",
            options: [
              {
                name: "Herbology — Animate Flora",
                description:
                  "Once per short rest, animate nearby plants for 1 minute as a vine swarm (CR 1/2) under your control acting on your turn. Creatures that start their turn in the swarm's space must make a STR save or have speed reduced to 0 until the start of their next turn.",
              },
              {
                name: "Zoology — Pack Tactics",
                description:
                  "When you or your Field Familiar hits a creature with an attack, the other gains advantage on the next attack roll against that creature before the end of your next turn.",
              },
              {
                name: "Mycology — Fungal Network",
                description:
                  "While in dim light, underground, or dense vegetation, you and any creature affected by your Spore Cloud can communicate telepathically within 60 ft for 1 hour. Your Spore Cloud can exclude a number of creatures equal to your Wisdom modifier.",
              },
            ],
          },
        ],
      },
      {
        level: 6,
        features: [
          {
            name: "Primal Resilience",
            description:
              "Your connection to living magic fortifies you. You gain resistance to poison damage and immunity to disease. Additionally, you can spend 1 Living Reagent to gain resistance to one damage type (acid, cold, fire, or lightning) for 10 minutes.",
          },
          {
            name: "Greater Field Manifestation",
            description:
              "Your Field Manifestation uses increase to 4 per short rest. When you Embody Traits, you can now gain three traits simultaneously, and your Manifest Companion can use a CR 1 stat block.",
          },
        ],
      },
      {
        level: 7,
        features: [
          {
            name: "Branch Feature (7th)",
            description: "Your Branch of Study grants enhanced abilities.",
            options: [
              {
                name: "Herbology — Living Armor",
                description:
                  "You can use a bonus action to sprout protective bark and vines. For 10 minutes, you gain +2 AC and advantage on Strength saves. While active, difficult terrain created by plants doesn't slow you. Uses: proficiency bonus per long rest.",
              },
              {
                name: "Zoology — Beast Speech",
                description:
                  "You can communicate telepathically with beasts and monstrosities within 120 ft. Additionally, your Field Familiar gains your proficiency bonus in all saves and its maximum HP increases by your Naturalist level.",
              },
              {
                name: "Mycology — Decay Touch",
                description:
                  "Once per turn when you hit with a melee attack or spell, you can add 2d8 necrotic damage. When you deal this damage, you regain HP equal to your Wisdom modifier. Uses: Wisdom modifier per short rest.",
              },
            ],
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
            name: "Symbiotic Evolution",
            description:
              "Your bond with nature deepens. When you use Field Manifestation, you can split its effects—maintain both Embody Traits and Manifest Companion simultaneously. Additionally, your Living Reagents can now heal 2d6 + Wisdom modifier or grant advantage on two consecutive saves.",
          },
          {
            name: "Branch Feature (9th)",
            description: "Your Branch reaches expert tier.",
            options: [
              {
                name: "Herbology — Verdant Sanctuary",
                description:
                  "As an action, transform a 20-ft radius into a verdant sanctuary for 10 minutes. The area becomes difficult terrain for enemies. Allies in the area regain HP equal to your Wisdom modifier at the start of their turn and have advantage on saves against poison and disease. Uses: 1 per short rest.",
              },
              {
                name: "Zoology — Apex Predator Bond",
                description:
                  "Your Field Familiar can now use a CR 2 stat block and gains an additional attack when it takes the Attack action. When your familiar hits with an attack, you can use your reaction to make a weapon or spell attack against the same target.",
              },
              {
                name: "Mycology — Spore Symbiosis",
                description:
                  "Your Spore Cloud radius increases to 20 ft and lasts 1 minute. Allies in the cloud gain your Wisdom modifier as temporary HP at the start of each of their turns. Enemies that start their turn in the cloud must save or become poisoned and have disadvantage on Perception checks.",
              },
            ],
          },
        ],
      },
      {
        level: 10,
        features: [
          {
            name: "Nature's Avatar",
            description:
              "You embody the essence of living magic. Choose one permanent benefit: tremorsense 30 ft, climb speed equal to your walking speed, or swim speed equal to your walking speed and ability to breathe underwater. You can change this choice when you finish a long rest in a natural environment.",
          },
        ],
      },
      {
        level: 11,
        features: [
          {
            name: "Superior Living Reagents",
            description:
              "Your Living Reagents become more versatile. Each use can now: heal 3d6 + Wisdom modifier, grant advantage on all saves for 1 minute, remove one condition (charmed, frightened, paralyzed, poisoned, stunned), or deal 3d6 poison damage to one creature within 30 ft (CON save half).",
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
            name: "Primal Mastery",
            description:
              "Your Field Manifestation uses increase to 5 per short rest. Your Manifest Companion can now use a CR 3 stat block, and when you Embody Traits, you gain immunity to one condition of your choice (charmed, frightened, paralyzed, or stunned) for the duration.",
          },
          {
            name: "Branch Feature (13th)",
            description: "Your Branch reaches master tier.",
            options: [
              {
                name: "Herbology — Worldtree Connection",
                description:
                  "Once per long rest, you can merge with plant life to teleport. Touch a tree or plant of Large size or greater and emerge from another such plant within 500 ft. Additionally, while in your Verdant Sanctuary, you can cast Entangle and Spike Growth at will without expending spell slots.",
              },
              {
                name: "Zoology — Primal Pack",
                description:
                  "You can maintain two Field Familiars simultaneously (each can be up to CR 2). When both familiars are within 30 ft of each other, they each deal an extra 1d8 damage on attacks. Additionally, you can see through both familiars' senses simultaneously.",
              },
              {
                name: "Mycology — Cordyceps Control",
                description:
                  "When a beast or humanoid dies within your Spore Cloud, you can use your reaction to animate it as a spore-controlled thrall. It uses zombie statistics but retains any special movement speeds. The thrall acts on your turn and lasts 1 hour. You can have up to 3 thralls simultaneously. Uses: Wisdom modifier per long rest.",
              },
            ],
          },
        ],
      },
      {
        level: 14,
        features: [
          {
            name: "Ley-Ecology Sense",
            description:
              "You gain tremorsense 60 ft and blindsight 30 ft when in natural environments. You can detect the presence of aberrations, undead, and fiends within 120 ft. Additionally, you can cast Commune with Nature once per long rest without expending a spell slot.",
          },
        ],
      },
      {
        level: 15,
        features: [
          {
            name: "Legendary Companion",
            description:
              "Your Manifest Companion reaches legendary status. It can now use a CR 5 stat block, gains immunity to charm and fear, and has legendary resistances (3/day). When your companion fails a save, it can choose to succeed instead. Additionally, your companion can now speak one language you know.",
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
            name: "Branch Feature (17th)",
            description: "Your Branch achieves legendary power.",
            options: [
              {
                name: "Herbology — Bloom of Life",
                description:
                  "Once per long rest, as an action, you can cause explosive growth in a 60-ft radius centered on you. The area becomes heavily obscured by verdant growth for 10 minutes. Allies in the area regain 4d8 HP immediately and gain 30 temporary HP. Additionally, you can cast Plant Growth at will without expending spell slots.",
              },
              {
                name: "Zoology — Apex Alpha",
                description:
                  "You can maintain three Field Familiars simultaneously (each up to CR 3). As a bonus action, you can command all your familiars to make one attack each. Additionally, once per long rest, you can assume a hybrid form combining your own abilities with your familiar's for 1 hour—you gain their movement speeds, natural weapons, and special senses while retaining your own abilities.",
              },
              {
                name: "Mycology — Mycelial Hivemind",
                description:
                  "Your Spore Cloud radius increases to 30 ft and becomes permanent once activated (can be dismissed at will). You and all allies in the cloud are connected telepathically. When one creature in the cloud is hit by an attack, you can use your reaction to grant all others in the cloud +5 AC until the start of your next turn. Your thralls gain your Wisdom modifier to all rolls.",
              },
            ],
          },
        ],
      },
      {
        level: 18,
        features: [
          {
            name: "Master of Living Magic",
            description:
              "Your Living Reagent uses are unlimited—you regain all expended uses whenever you finish a short or long rest. Additionally, you can use two Living Reagent effects as a single bonus action, and the range increases to 60 ft.",
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
            name: "Primordial Ascension",
            description:
              "You transcend mortality to become a guardian of living magic. You gain the following benefits:\n• You are immune to poison, disease, and aging. You no longer need food or water.\n• Your Field Manifestation has unlimited uses.\n• Once per long rest, you can transform into an Ancient Treant or Ancient Green Dragon form for 1 hour, gaining all their abilities while retaining your own class features.\n• Your Manifest Companion becomes permanent and gains the ability to plane shift once per day.\n• You can cast Awaken at will without components or spell slots, and creatures you awaken remain loyal to you permanently.\n• The first time you would be reduced to 0 HP each day, you instead regrow to half your maximum HP as bark, vines, or spores regenerate your body.",
          },
        ],
      },
    ],
    design_notes: {
      concept:
        "Combined herbology + magizoology chassis that fills the Druid niche via living-magic science.",
      tone: "Field biologist meets eco-witch: specimens, spores, and spectral companions.",
      balance_notes:
        "Augmented progression prevents slot bloat. Short-rest Field Manifestation mirrors Wild Shape flexibility; Living Reagents provide low-die support without eclipsing Healer.",
    },
  },

  profession_auror: {
    id: "profession_auror",
    name: "Auror",
    type: "Paladin",
    description:
      "Aurors are sworn protectors of the wizarding world—front-line duelists and case officers whose magic is shaped by a personal Mandate (oath). They disable, disarm, and contain magical threats, channeling focused power through sanctioned techniques.",
    hit_die: "d10",
    primary_abilities: ["Intelligence", "Wisdom", "Charisma"],
    saving_throws: ["Wisdom", "Charisma"],
    armor_proficiencies: ["Light Armor", "Medium Armor", "Shields"],
    weapon_proficiencies: ["Simple Weapons", "Martial Weapons", "Wands"],
    tool_proficiencies: [],
    skill_choices: {
      choose: 2,
      options: [
        "Insight",
        "Investigation",
        "Perception",
        "Intimidation",
        "Persuasion",
        "Athletics",
      ],
    },
    spellcasting: {
      progression_type: "half-caster",
      casting_ability_choice: ["Intelligence", "Wisdom", "Charisma"],
      notes:
        "Aurors prepare spells from sanctioned combat and protection protocols. Their slots follow half-caster progression.",
      save_dc: "8 + proficiency_bonus + casting_ability_mod",
      attack_mod: "proficiency_bonus + casting_ability_mod",
      bonus_spells: {
        cantrips: ["Guidance", "Thaumaturgy"],
        level_1_to_3: [
          "Command",
          "Detect Magic",
          "Shield of Faith",
          "Zone of Truth",
          "Hold Person",
          "Dispel Magic",
        ],
      },
    },
    class_resources: [
      {
        name: "Restorative Charm",
        aka: "Lay on Hands",
        pool_formula: "5 × Auror level",
        recharge: "Long Rest",
        effects_summary: [
          "As an action, touch a creature to restore HP from your pool.",
          "Expend 5 points to end one disease, poison, or minor curse (GM adjudication).",
        ],
      },
    ],
    level_features: [
      {
        level: 1,
        features: [
          {
            name: "Detect Residual Magic",
            description:
              "As an action, sense lingering magical auras (including recent spellcasting, curses, or hex residue) within 30 ft until the end of your next turn. Uses per long rest = your proficiency bonus.",
          },
          {
            name: "Restorative Charm",
            description:
              "You maintain a healing/cleansing pool equal to 5 × your Auror level, used via touch. See Class Resources.",
          },
        ],
      },
      {
        level: 2,
        features: [
          {
            name: "Combat Doctrine (Fighting Style)",
            description: "Choose one style:",
            options: [
              {
                name: "Disarming Duelist",
                description:
                  "+1 to hit with melee weapon or wand attacks. On a hit, you may force a STR save (DC = 8 + PB + ability mod); on a failure, the target drops one held item of your choice.",
              },
              {
                name: "Defense",
                description: "+1 AC while wearing armor.",
              },
              {
                name: "Warding Shield",
                description:
                  "While wielding a shield, allies within 5 ft gain +1 to saving throws against spells.",
              },
              {
                name: "Marksman",
                description:
                  "Once per turn, add +2 damage to a ranged spell attack you make.",
              },
            ],
          },
          {
            name: "Discharge Hex (Smite)",
            description:
              "When you hit with a melee weapon or wand attack, you may expend a spell slot to deal extra radiant or force damage: +2d8 for a 1st-level slot, +1d8 per slot level above 1st (max +5d8). If the target cast a spell since the start of its last turn or is under a magical effect, add +1d8.",
          },
        ],
      },
      {
        level: 3,
        features: [
          {
            name: "Mandate (Oath)",
            description:
              "Choose a Mandate that defines your code and techniques. You gain its 3rd-level features now and additional benefits at 5, 7, 9, 13, and 17.",
            options: [
              {
                name: "Mandate of Justice",
                features: [
                  {
                    name: "Bonus Spells (Justice)",
                    description:
                      "You always have Zone of Truth and Hold Person prepared; they don't count against your limit.",
                  },
                  {
                    name: "Oathbinding Focus (Channel Divinity): True Bearing",
                    description:
                      "Bonus action; choose a creature within 60 ft for 1 minute. You have advantage on checks to track, perceive, or discern truth regarding it; your attacks against it ignore half and three-quarters cover. Uses: 1 per short or long rest.",
                  },
                  {
                    name: "Oathbinding Focus (Channel Divinity): Countercurse Pulse",
                    description:
                      "Action; emit a 10-ft pulse. Each creature of your choice in the area must succeed on a Con save or one spell effect of 2nd level or lower on it is suppressed until the start of your next turn.",
                  },
                ],
              },
              {
                name: "Mandate of Redemption",
                features: [
                  {
                    name: "Bonus Spells (Redemption)",
                    description:
                      "You always have Calm Emotions and Sanctuary prepared; they don't count against your limit.",
                  },
                  {
                    name: "Oathbinding Focus: Restraining Word",
                    description:
                      "Bonus action; force a creature within 30 ft to make a Wis save. On a failure, its speed is 0 and it can't take reactions until the start of your next turn.",
                  },
                  {
                    name: "Oathbinding Focus: Shield the Innocent",
                    description:
                      "Reaction when a creature within 30 ft is hit: reduce the damage by 2d8 + your proficiency bonus.",
                  },
                ],
              },
              {
                name: "Mandate of the Veil",
                features: [
                  {
                    name: "Bonus Spells (Veil)",
                    description:
                      "You always have Silence and Invisibility prepared; they don't count against your limit.",
                  },
                  {
                    name: "Oathbinding Focus: Memory Seal",
                    description:
                      "Action; touch a willing creature. For 1 hour, it can't be magically read (thoughts, alignment, surface memories). Uses: 1 per short or long rest.",
                  },
                  {
                    name: "Oathbinding Focus: Obscuring Ward",
                    description:
                      "Bonus action; create a 10-ft-radius veil centered on you for 1 minute. Allies inside have advantage on Stealth checks; ranged attacks from outside against targets inside are at disadvantage.",
                  },
                ],
              },
              {
                name: "Mandate of Retribution",
                features: [
                  {
                    name: "Bonus Spells (Retribution)",
                    description:
                      "You always have Hunter's Mark and Branding Smite prepared; they don't count against your limit.",
                  },
                  {
                    name: "Oathbinding Focus: Mark the Guilty",
                    description:
                      "Bonus action; mark a creature within 60 ft for 1 minute. Your first attack against it each turn deals +PB radiant damage; you have advantage on checks to track it.",
                  },
                  {
                    name: "Oathbinding Focus: Spellbreaker",
                    description:
                      "When a creature within 30 ft begins casting a spell, use your reaction to either impose disadvantage on its spell attack rolls until end of turn or grant advantage on saves made against that spell.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        level: 4,
        features: [
          {
            name: "Ability Score Improvement or Enforcement Feat",
            description:
              "Increase an ability score by +2 (or two by +1), or choose a feat.",
            feat_examples: [
              {
                name: "Shield Interceptor",
                effect:
                  "When a creature within 5 ft is targeted by an attack, you can use your reaction to impose disadvantage on the attack.",
              },
              {
                name: "Hex Disruptor",
                effect:
                  "Once per short rest, when you hit with Discharge Hex, you may also force the target to succeed on a CON save or lose Concentration.",
              },
              {
                name: "Swift Apprehension",
                effect:
                  "Your speed increases by 10 ft and opportunity attacks against you are at disadvantage while you move toward a creature you've marked or targeted with a Mandate feature.",
              },
            ],
          },
        ],
      },
      {
        level: 5,
        features: [
          {
            name: "Extra Attack",
            description:
              "You can attack twice whenever you take the Attack action on your turn.",
          },
          {
            name: "Field Aegis (Proto-Aura)",
            description:
              "Once per short or long rest, as a bonus action you emanate a 10-ft radius field for 1 minute. Allies in the area gain +1 to saving throws against spells and advantage on checks to escape grapples or restraints.",
          },
          {
            name: "Mandate Feature (5th)",
            description: "Your chosen Mandate grants an additional benefit.",
            options: [
              {
                name: "Justice — Incontrovertible Proof",
                description:
                  "Creatures you have affected with True Bearing have disadvantage on Deception checks against you and allies within your Field Aegis.",
              },
              {
                name: "Redemption — Pacifying Presence",
                description:
                  "Creatures of your choice that start their turn within your Field Aegis must succeed on a WIS save or have disadvantage on attack rolls until the start of their next turn.",
              },
              {
                name: "Veil — Quiet Step",
                description:
                  "Allies inside your Field Aegis ignore nonmagical difficult terrain and gain +5 to Dexterity (Stealth) checks.",
              },
              {
                name: "Retribution — Relentless Pursuit",
                description:
                  "When your marked target moves, you may use your reaction to move up to half your speed toward it without provoking opportunity attacks.",
              },
            ],
          },
        ],
      },
      {
        level: 6,
        features: [
          {
            name: "Auror's Resilience",
            description:
              "Choose a damage type tied to your Mandate: Justice (radiant), Redemption (psychic), Veil (force), Retribution (necrotic). You gain resistance to that type. Additionally, you have advantage on saving throws against spells cast by creatures you've marked or targeted with your Mandate features.",
          },
          {
            name: "Improved Restorative Charm",
            description:
              "You can expend 10 points from your Restorative Charm to end one curse or magical effect of 3rd level or lower on a creature you touch.",
          },
        ],
      },
      {
        level: 7,
        features: [
          {
            name: "Greater Field Aegis",
            description:
              "Your Field Aegis radius increases to 15 ft and you can use it twice per short rest. Additionally, choose one enhancement based on your Mandate that applies whenever your aegis is active (see Mandate Features).",
          },
          {
            name: "Mandate Feature (7th)",
            description: "Your Mandate grants enhanced abilities.",
            options: [
              {
                name: "Justice — Witness Protection",
                description:
                  "Allies within your Field Aegis cannot be surprised and gain your proficiency bonus to initiative rolls. Additionally, they have advantage on Insight checks to detect lies.",
              },
              {
                name: "Redemption — Sanctuary Pulse",
                description:
                  "Once per short rest, when you activate Field Aegis, you can emit a sanctuary pulse. All creatures of your choice within 30 ft must succeed on a Charisma save or be unable to attack you or your allies until the end of their next turn.",
              },
              {
                name: "Veil — Obscuring Mist",
                description:
                  "While your Field Aegis is active, the area is lightly obscured to enemies outside the radius. Allies inside the aegis can see normally. Ranged attacks from outside targeting creatures inside have disadvantage.",
              },
              {
                name: "Retribution — Hunter's Mark (Enhanced)",
                description:
                  "When you use Mark the Guilty, its duration becomes 1 hour and you sense the target's general direction and distance within 1 mile. The first time each turn you hit the marked creature, it takes an extra 2d6 radiant damage.",
              },
            ],
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
            name: "Superior Discharge Hex",
            description:
              "Your Discharge Hex maximum extra damage increases to +6d8 (with a 5th-level slot). On a critical hit with an attack empowered by Discharge Hex, the target must succeed on a Wis save or be stunned until the end of your next turn (once per turn).",
          },
          {
            name: "Mandate Feature (9th)",
            description: "Your Mandate reaches expert tier.",
            options: [
              {
                name: "Justice — Inescapable Justice",
                description:
                  "Creatures affected by your True Bearing can't turn invisible or teleport. Once per long rest, you can cast Zone of Truth without expending a slot; creatures have disadvantage on saves against it.",
              },
              {
                name: "Redemption — Redemptive Strike",
                description:
                  "When you would reduce a creature to 0 HP with Discharge Hex, you may instead leave it at 1 HP, unconscious and stable. Also, you can cast Calm Emotions proficiency_bonus times per long rest without expending a slot.",
              },
              {
                name: "Veil — Shadow Step",
                description:
                  "Bonus action while in dim light/darkness: teleport up to 60 ft to a space you can see also in dim light/darkness. You may bring one willing ally within 5 ft. Uses: proficiency_bonus per long rest.",
              },
              {
                name: "Retribution — Executioner's Focus",
                description:
                  "When you hit your Marked target, you may force a Con save. On a failure, it takes +4d8 radiant damage and is blinded until the end of your next turn; on a success, it takes half damage and isn't blinded. Uses: casting_ability_mod per long rest.",
              },
            ],
          },
        ],
      },
      {
        level: 10,
        features: [
          {
            name: "Auror Aura",
            description:
              "You emanate a passive 10-ft aura. You and allies within gain +1 to saving throws against spells and magical effects. You may still activate Field Aegis for stronger effects.",
          },
        ],
      },
      {
        level: 11,
        features: [
          {
            name: "Enhanced Discharge Hex",
            description:
              "Discharge Hex deals +1d8 extra damage against a creature concentrating on a spell or under a magical effect. Additionally, when you hit with Discharge Hex, you may force a Concentration check as if the target took an additional 2d8 damage (no save) instead of automatically ending concentration.",
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
            name: "Mandate Mastery",
            description:
              "You can use Oathbinding Focus features twice per short rest (instead of once). While you are within your Auror Aura, your spell save DC and spell attack bonus each increase by +1.",
          },
          {
            name: "Mandate Feature (13th)",
            description: "Your Mandate reaches master tier.",
            options: [
              {
                name: "Justice — Truth Incarnate",
                description:
                  "You can activate a 15-ft aura of undeniable truth for 1 minute (1/long rest): creatures in the aura can't lie (as Zone of Truth), and illusory effects in the aura are suppressed (as Dispel Magic vs 3rd level; higher-level illusions contest with a check).",
              },
              {
                name: "Redemption — Sacrifice Ward",
                description:
                  "When a creature within 30 ft would be reduced to 0 HP, you can use your reaction to teleport to an adjacent space and take the damage instead. If this would reduce you to 0 HP, you drop to 1 HP instead. Uses: 1 per long rest.",
              },
              {
                name: "Veil — Greater Invisibility",
                description:
                  "You can cast Greater Invisibility on yourself without expending a slot proficiency_bonus times per long rest. While invisible, your first attack each turn deals +2d6 force damage.",
              },
              {
                name: "Retribution — Overwhelming Vengeance",
                description:
                  "When a creature you've Marked damages you or an ally within 30 ft, you may use your reaction to make a weapon attack against it with advantage; on a hit, add radiant damage equal to your Auror level.",
              },
            ],
          },
        ],
      },
      {
        level: 14,
        features: [
          {
            name: "Cleansing Touch",
            description:
              "As an action, end one spell or magical effect on yourself or a creature you touch. Effects of 5th level or lower automatically end; for 6th or higher, make a casting-ability check vs DC 10 + spell level. Uses: proficiency_bonus per long rest.",
          },
        ],
      },
      {
        level: 15,
        features: [
          {
            name: "Greater Auror Aura",
            description:
              "Your Auror Aura radius increases to 30 ft and the bonus becomes +2 to saving throws against spells and magical effects. Allies in the aura also gain resistance to one damage type of your choice (chosen at the end of each long rest).",
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
            name: "Mandate Feature (17th)",
            description: "Your Mandate achieves legendary power.",
            options: [
              {
                name: "Justice — Final Judgment",
                description:
                  "Once per long rest, you can cast Plane Shift (hostile target only) without a slot. Creatures that knowingly utter a lie within your Truth Incarnate aura take 3d10 psychic damage (once per creature per round).",
              },
              {
                name: "Redemption — Martyr's Blessing",
                description:
                  "The first time each long rest you would be reduced to 0 HP, you instead drop to 1 HP and emit a 30-ft burst: each ally in the area regains 25 HP, gains immunity to fear for 1 minute, and has advantage on their next attack roll or save.",
              },
              {
                name: "Veil — Master of Shadows",
                description:
                  "You gain Truesight 60 ft. Once per long rest, you may cast Etherealness without expending a slot.",
              },
              {
                name: "Retribution — Death Sentence",
                description:
                  "Once per long rest, when you hit a creature with Discharge Hex, you can pronounce a death sentence for 1 minute: the creature has vulnerability to your weapon attacks and Discharge Hex damage and can't regain HP. The effect ends early if you are incapacitated.",
              },
            ],
          },
        ],
      },
      {
        level: 18,
        features: [
          {
            name: "Auror's Vitality",
            description:
              "At the start of each of your turns while you're conscious and below half HP, you regain HP equal to 5 + your casting_ability_mod. This doesn't function if you have 0 HP.",
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
            name: "Avatar of the Mandate",
            description:
              "You embody your Mandate. \n• Your Auror Aura radius increases to 30 ft. \n• Once on each of your turns, you can apply Discharge Hex without expending a spell slot. \n• You are immune to charm, fear, and magical sleep. \n• Avatar State (1/long rest): as a bonus action, for 1 minute you and allies in your aura gain advantage on saving throws against spells; enemies in your aura have disadvantage on saving throws against your Auror spells and Mandate features; your weapon attacks score a critical hit on a roll of 19–20.",
          },
        ],
      },
    ],
    design_notes: {
      concept:
        "Paladin-adjacent oath class focused on anti-magic control, protection, and lawful apprehension.",
      tone: "Lawful but haunted; justice in a morally gray world.",
      balance_notes: [
        "Smite/Hex damage tracks standard Divine Smite ceilings with narrow anti-magic riders.",
        "Aegis at 5 gives a small burst aura; permanent aura arrives at 10 and scales again at 15 to avoid early overshadowing.",
        "Restorative pool stays at 5 × level to prevent runaway healing; added condition/curse clearing has level gates.",
        "High-tier Mandate features toned to powerful but bounded uses (no permanent at-will invisibility or universal immunities).",
        "Capstone grants once/turn free Hex and a strong, but not invulnerable, Avatar window.",
      ],
    },
  },

  profession_wordsmith: {
    id: "profession_wordsmith",
    name: "Wordsmith",
    type: "Bard",
    description:
      "Reporters, authors, propagandists, and public narrators who weaponize language, truth, and spectacle. Wordsmiths bend crowds, rattle suspects, and steady allies with ink, voice, and glamours.",
    hit_die: "d8",
    primary_abilities: ["Charisma", "Intelligence"],
    saving_throws: ["Dexterity", "Charisma"],
    armor_proficiencies: ["Light Armor"],
    weapon_proficiencies: ["Simple Weapons", "Wands"],
    tool_proficiencies: [
      "Calligrapher's Supplies",
      "One: Disguise Kit or Forgery Kit",
    ],
    skill_choices: {
      choose: 3,
      options: [
        "Persuasion",
        "Deception",
        "Insight",
        "Intimidation",
        "Perception",
        "Investigation",
        "Performance",
        "History",
      ],
    },
    spellcasting: {
      progression_type: "full-caster",
      casting_ability_choice: ["Charisma", "Intelligence"],
      notes:
        "Wordsmith spells manifest as rhetoric, sigils, glamours, and mnemonic charms.",
      bonus_spells: {
        cantrips: ["Vicious Mockery", "Message"],
        level_1_to_3: [
          "Charm Person",
          "Disguise Self",
          "Detect Thoughts",
          "Silence",
          "Suggestion",
          "Calm Emotions",
          "Hypnotic Pattern",
        ],
      },
    },
    class_resources: [
      {
        name: "Inspiration Dice",
        die_by_level: { 1: "d6", 5: "d8" },
        uses_formula: "Charisma_or_Intelligence_mod (min 1)",
        recharge: "Short Rest",
        effects_summary: [
          "Bonus action: grant a die to an ally who can hear or read you (lasts 10 minutes).",
          "The ally adds it to one attack, save, or ability check after rolling but before result.",
        ],
      },
    ],
    level_features: [
      {
        level: 1,
        features: [
          {
            name: "Byline",
            description:
              "Choose one: Persuasion or Deception. Gain proficiency; if already proficient, gain expertise. Also gain proficiency in one additional language.",
          },
          {
            name: "Inspiration",
            description:
              "You carry Inspiration Dice (see Class Resources). Bonus action to inspire; die = d6 at this tier.",
          },
        ],
      },
      {
        level: 2,
        features: [
          {
            name: "Freelancer's Versatility",
            description:
              "Add half your proficiency bonus (rounded down) to any ability check you make that doesn't already include your proficiency bonus.",
          },
          {
            name: "Counter-Narrative",
            description:
              "When a creature you can see within 60 ft makes an attack, ability check, or damage roll, you can use your reaction to expend an Inspiration die and subtract the roll from the creature's result if it can hear/understand you.",
          },
          {
            name: "Coffee Break (Song of Rest)",
            description:
              "During a short rest, if you or any friendly creatures who can hear you regain hit points, each regains an extra 1d6 HP.",
          },
        ],
      },
      {
        level: 3,
        features: [
          {
            name: "College (Beat) Selection",
            description:
              "Choose a Beat that defines your journalistic craft. You gain its 3rd-level features now and additional benefits at level 5.",
            options: [
              {
                name: "College of Propaganda (The Spin School)",
                features: [
                  {
                    name: "Talking Points",
                    description:
                      "Bonus action: choose up to two allies who can hear you. Until the start of your next turn, they add +1 to AC or +1 to saving throws (your choice). Uses: proficiency bonus per long rest.",
                  },
                  {
                    name: "Crowd Spin",
                    description:
                      "As an action, present a persuasive narrative to a small crowd (up to 6 creatures) within 30 ft. Each must succeed on a Wisdom save (DC = 8 + PB + casting_ability_mod) or be Charmed by you until the end of your next turn.",
                  },
                ],
              },
              {
                name: "College of Investigation (The Watchdog)",
                features: [
                  {
                    name: "Press Credentials",
                    description:
                      "Gain proficiency in Investigation or Perception (your choice); if already proficient, gain expertise. You also learn Detect Magic if you didn't already know it.",
                  },
                  {
                    name: "Expose",
                    description:
                      "As a bonus action, mark a creature you can see. Until the end of your next turn, the first attack made against it by you or an ally adds your Inspiration die to damage if it hits.",
                  },
                ],
              },
              {
                name: "College of Satire (The Razor Quill)",
                features: [
                  {
                    name: "Barbed Wit",
                    description:
                      "When you deal psychic damage with a spell or cantrip, add your casting ability modifier to one damage roll (once per turn).",
                  },
                  {
                    name: "Cut to Ribbons",
                    description:
                      "When Counter-Narrative reduces a roll by your die maximum (e.g., 6 on a d6), the target is also Silenced until the start of your next turn (no verbal components).",
                  },
                ],
              },
              {
                name: "College of Public Relations (The Silver Quill)",
                features: [
                  {
                    name: "Crisis Comms",
                    description:
                      "As a reaction when an ally within 30 ft fails a saving throw, expend an Inspiration die. The ally adds the die and can immediately move up to 10 ft without provoking opportunity attacks.",
                  },
                  {
                    name: "Polished Image",
                    description:
                      "You and allies within 10 ft gain +2 bonus to Charisma (Deception) and (Persuasion) checks while not in combat.",
                  },
                ],
              },
            ],
          },
          {
            name: "Expertise",
            description:
              "Choose two skills you're proficient in. Your proficiency bonus is doubled for checks you make with them.",
          },
        ],
      },
      {
        level: 4,
        features: [
          {
            name: "Ability Score Improvement or Media Feat",
            description:
              "Increase an ability score by +2, or two by +1, or choose a feat.",
            feat_examples: [
              {
                name: "Press Pass",
                effect:
                  "Advantage on Charisma checks to gain access to restricted areas if you can plausibly justify media presence.",
              },
              {
                name: "Headline Grabbing",
                effect:
                  "When you roll initiative, you regain one expended Inspiration die.",
              },
              {
                name: "Clean Copy",
                effect:
                  "You can cast Comprehend Languages and Disguise Self once per long rest without expending a slot.",
              },
            ],
          },
        ],
      },
      {
        level: 5,
        features: [
          {
            name: "Font of Inspiration",
            description:
              "You regain all expended Inspiration dice when you finish a short or long rest. Your Inspiration die becomes a d8.",
          },
          {
            name: "Beat Feature (5th)",
            description: "Your chosen College grants an additional benefit.",
            options: [
              {
                name: "Propaganda — Narrative Lock",
                description:
                  "When a creature fails the save against your Crowd Spin, it has disadvantage on its next saving throw against your spells before the end of your next turn.",
              },
              {
                name: "Investigation — Follow the Money",
                description:
                  "You can always tell if a creature you can see within 30 ft is carrying a concealed magical item. Once per short rest, you can cast See Invisibility without expending a slot.",
              },
              {
                name: "Satire — Public Humiliation",
                description:
                  "When you reduce a creature to 0 HP with psychic damage or it fails a save against one of your enchantments, you and allies gain temporary HP equal to your casting ability modifier.",
              },
              {
                name: "Public Relations — Rally Point",
                description:
                  "As a bonus action, create a 10-ft aura for 1 minute. Allies that start their turn in the aura gain +1 to attack rolls and +1 to saving throws against being frightened (1/short rest).",
              },
            ],
          },
        ],
      },
      {
        level: 6,
        features: [
          {
            name: "Additional Expertise",
            description:
              "Choose two more skills you're proficient in. Your proficiency bonus is doubled for checks you make with them. Additionally, you learn two additional languages of your choice.",
          },
          {
            name: "Countercharm",
            description:
              "As an action, you can perform for 1 minute (requires concentration). During this time, you and allies within 30 ft have advantage on saves against being frightened or charmed. You can use this feature a number of times equal to your Charisma modifier per long rest.",
          },
        ],
      },
      {
        level: 7,
        features: [
          {
            name: "College Feature (7th)",
            description: "Your College grants enhanced abilities.",
            options: [
              {
                name: "Propaganda — Mass Suggestion",
                description:
                  "Once per long rest, you can cast Mass Suggestion without expending a spell slot. Additionally, when you use Crowd Spin, the radius increases to 15 ft and can affect up to 10 creatures.",
              },
              {
                name: "Investigation — Investigative Report",
                description:
                  "When you spend at least 1 minute observing a creature, location, or object, you can make an Investigation check (DC determined by DM). On a success, you learn up to three pieces of relevant information about it. Additionally, you have advantage on checks to recall information you've previously documented.",
              },
              {
                name: "Satire — Cutting Words Upgraded",
                description:
                  "You can use Counter-Narrative as a reaction without expending an Inspiration die a number of times equal to your Charisma modifier per long rest. Additionally, when you use Counter-Narrative to reduce a saving throw, the creature also has disadvantage on its next attack roll.",
              },
              {
                name: "Public Relations — Reputation Management",
                description:
                  "You can spend 10 minutes with a creature to change its attitude toward you or an ally. Make a Charisma (Persuasion) check contested by their Wisdom (Insight). On success, shift their attitude one step (hostile → unfriendly → neutral → friendly → helpful). This effect lasts 24 hours or until you give them reason to change.",
              },
            ],
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
            name: "Superior Inspiration",
            description:
              "Your Inspiration die becomes a d10. Additionally, when a creature uses one of your Inspiration dice and rolls the maximum value, they regain the die (they can use it again).",
          },
          {
            name: "College Feature (9th)",
            description: "Your College reaches expert tier.",
            options: [
              {
                name: "Propaganda — Narrative Control",
                description:
                  "Once per short rest, you can rewrite recent events in the minds of witnesses. Choose up to 6 creatures within 60 ft. Each must make a Wisdom save or have their memory of the last 10 minutes altered as you describe (must be plausible). This functions as a modified Modify Memory spell.",
              },
              {
                name: "Investigation — The Scoop",
                description:
                  "Once per long rest, you can spend 1 hour researching a topic, creature, or location. The DM provides you with accurate information equivalent to casting Legend Lore and Divination simultaneously. Additionally, you can cast Scrying once per long rest without expending a spell slot.",
              },
              {
                name: "Satire — Viral Mockery",
                description:
                  "When you deal psychic damage with a spell, you can force the target to make a Charisma save. On a failure, the target is marked with humiliation for 1 minute. While marked, it has disadvantage on attack rolls and ability checks. Other creatures have advantage on Charisma checks against it.",
              },
              {
                name: "Public Relations — Crisis Management",
                description:
                  "When you or an ally within 30 ft fails a Charisma check or save, you can use your reaction to allow them to reroll with advantage. Additionally, you can cast Glibness on yourself once per long rest without expending a spell slot.",
              },
            ],
          },
        ],
      },
      {
        level: 10,
        features: [
          {
            name: "Magical Secrets",
            description:
              "You learn two spells of your choice from any class spell list (must be of a level you can cast). These spells count as Wordsmith spells for you. You learn two additional spells from any class at levels 14 and 18.",
          },
        ],
      },
      {
        level: 11,
        features: [
          {
            name: "Greater Coffee Break",
            description:
              "Your Coffee Break die becomes a d8. Additionally, during a short rest, you can spend one use of your Inspiration to grant all allies who can hear you advantage on their next ability check, attack roll, or saving throw.",
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
            name: "Master Wordsmith",
            description:
              "Your Inspiration dice maximum uses increase by your Charisma modifier (in addition to the normal amount). Additionally, you can grant Inspiration as a reaction when an ally within 60 ft fails an ability check, attack roll, or saving throw (before the result is announced).",
          },
          {
            name: "College Feature (13th)",
            description: "Your College reaches master tier.",
            options: [
              {
                name: "Propaganda — Truth is Malleable",
                description:
                  "You can cast Modify Memory at will on creatures that have been affected by your Crowd Spin or Narrative Control within the past hour. Additionally, creatures have disadvantage on saves against your enchantment spells if they've heard you speak within the past 24 hours.",
              },
              {
                name: "Investigation — Uncover Corruption",
                description:
                  "You automatically detect when a creature within 30 ft lies to you. Additionally, once per long rest, you can cast True Seeing on yourself without expending a spell slot, and the duration increases to 1 hour.",
              },
              {
                name: "Satire — Devastating Critique",
                description:
                  "When you deal psychic damage, you can maximize the damage instead of rolling (treat all dice as their maximum value). You can do this a number of times equal to your Charisma modifier per long rest. Additionally, creatures killed by your psychic damage cannot be resurrected by spells of 5th level or lower.",
              },
              {
                name: "Public Relations — Spin Doctor",
                description:
                  "You can cast Suggestion at will without expending a spell slot. Additionally, once per long rest, you can cast Mass Suggestion affecting up to 20 creatures within a 60-ft radius.",
              },
            ],
          },
        ],
      },
      {
        level: 14,
        features: [
          {
            name: "Additional Magical Secrets",
            description:
              "You learn two more spells of your choice from any class spell list (must be of a level you can cast). These spells count as Wordsmith spells for you.",
          },
        ],
      },
      {
        level: 15,
        features: [
          {
            name: "Legendary Inspiration",
            description:
              "Your Inspiration die becomes a d12. When you grant Inspiration, you can choose to grant it to up to three creatures simultaneously (uses one Inspiration charge). Additionally, creatures with your Inspiration can add the die to death saving throws.",
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
            name: "College Feature (17th)",
            description: "Your College achieves legendary power.",
            options: [
              {
                name: "Propaganda — Rewrite Reality",
                description:
                  "Once per long rest, you can use an action to broadcast a narrative that becomes truth. You cast Wish, but only to replicate the effects of enchantment or illusion spells of 8th level or lower, or to change the memories and perceptions of up to 100 creatures who can hear you.",
              },
              {
                name: "Investigation — The Whole Truth",
                description:
                  "You gain Truesight out to 120 ft permanently. Additionally, once per long rest, you can enter a trance for 1 minute (concentration) to perceive events that occurred at your current location within the past year, as if you were present.",
              },
              {
                name: "Satire — Death by Words",
                description:
                  "Once per long rest, you can deliver a devastating monologue. Choose one creature within 60 ft that can hear and understand you. Speak for 1 minute describing their flaws and failures. At the end, the creature must make a Charisma save (DC = your spell save DC + 2). On a failure, it takes 20d10 psychic damage and is stunned for 1 minute. On a success, it takes half damage and isn't stunned.",
              },
              {
                name: "Public Relations — Perfect Image",
                description:
                  "You can cast Glibness on yourself at will. Additionally, once per long rest, you can cast True Polymorph on yourself without concentration, lasting until you choose to end it. While polymorphed, you retain your Wordsmith features and can still cast spells.",
              },
            ],
          },
        ],
      },
      {
        level: 18,
        features: [
          {
            name: "Additional Magical Secrets",
            description:
              "You learn two more spells of your choice from any class spell list (must be of a level you can cast). These spells count as Wordsmith spells for you.",
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
            name: "Master of Words",
            description:
              "You have perfected the art of shaping reality through language. You gain the following benefits:\n• You regain all expended Inspiration dice when you roll initiative.\n• Your Inspiration dice grant an additional effect based on how they're used: on attack rolls, the attack deals extra psychic damage equal to the die roll; on saves, the creature gains temporary HP equal to the die roll; on ability checks, the creature can reroll the check if they fail.\n• You can speak and be understood by any creature that has a language. Your words bypass magical silence and deafness.\n• Once per long rest, you can speak the Word of Power. When you do, choose one effect: cast any spell of 9th level or lower without components or slots; restore all HP to all allies within 60 ft and end all conditions on them; deal 100 psychic damage to all enemies within 60 ft (Charisma save half); or rewrite the last 1 hour of time for yourself and up to 10 creatures (as per Time Stop and Wish combined).\n• You no longer age and cannot be aged magically.",
          },
        ],
      },
    ],
    design_notes: {
      concept:
        "Bard remap centered on journalism, persuasion, and crowd control.",
      tone: "Ink-stained noir: truth, spin, and spectacle.",
      balance_notes:
        "Tracks core Bard cadence (Inspiration d6→d8 at 5; Jack-of-all-Trades; Song of Rest). Colleges deliver control, support, or debuff angles without overshadowing hard controllers.",
    },
  },

  profession_hitwizard: {
    id: "profession_hitwizard",
    name: "Hit Wizard",
    type: "Rogue",
    description:
      "Hit Wizards are elite Bureau operatives trained for high-risk magical engagements, retrievals, and suppressions. They combine tactical precision, anti-magic technique, and ruthless efficiency. Where Aurors uphold the law, Hit Wizards enforce the silence afterward.",
    hit_die: "d8",
    primary_abilities: ["Dexterity", "Intelligence"],
    saving_throws: ["Dexterity", "Intelligence"],
    armor_proficiencies: ["Light Armor"],
    weapon_proficiencies: ["Simple Weapons", "Wands", "Daggers", "Shortswords"],
    tool_proficiencies: ["Wardbreaker's Tools"],
    skill_choices: {
      choose: 2,
      options: [
        "Stealth",
        "Perception",
        "Insight",
        "Investigation",
        "Acrobatics",
        "Deception",
        "Sleight of Hand",
        "Arcana",
      ],
    },
    spellcasting: {
      progression_type: "none",
      notes:
        "Hit Wizards rely on base magic for spellcasting; this class grants combat and suppression techniques rather than extra spell slots.",
      save_dc: "8 + proficiency_bonus + (Dexterity_mod or Intelligence_mod)",
      attack_mod: "proficiency_bonus + (Dexterity_mod or Intelligence_mod)",
    },
    class_resources: [
      {
        name: "Precision Strike",
        aka: "Sneak Attack",
        description:
          "Once per turn you deal extra damage to a creature you hit with an attack if you have advantage on the attack roll, or if another enemy of the target is within 5 ft of it and you don't have disadvantage. Damage type matches your attack (weapon) or may be force/psychic if delivered via sanctioned techniques.",
        dice_progression_by_level: {
          1: "1d6",
          3: "2d6",
          5: "3d6",
          7: "4d6",
          9: "5d6",
          11: "6d6",
          13: "7d6",
          15: "8d6",
          17: "9d6",
          19: "10d6",
        },
      },
    ],
    level_features: [
      {
        level: 1,
        features: [
          {
            name: "Precision Strike",
            description: "As detailed in Class Resources.",
          },
          {
            name: "Tactical Shift",
            description:
              "Bonus action each turn to Dash, Disengage, or Feint (choose one creature you can see within 30 ft; your next attack roll against it before the end of this turn has advantage).",
          },
          {
            name: "Expertise",
            description:
              "Choose two proficiencies (skills or Wardbreaker's Tools). Your proficiency bonus is doubled for checks using them.",
          },
        ],
      },
      {
        level: 2,
        features: [
          {
            name: "Arcane Countermeasure",
            description:
              "Reaction when you are hit by an attack or affected by a spell that deals damage: halve the damage (you must see the source and be conscious).",
          },
          {
            name: "Wardbreaker's Insight",
            description:
              "Advantage on checks to detect magical traps, wards, and glyphs. You disarm them in half the normal time with Wardbreaker's Tools.",
          },
        ],
      },
      {
        level: 3,
        features: [
          {
            name: "Division Assignment",
            description:
              "Choose a Bureau Division. You gain its 3rd-level features, plus further benefits at 5, 7, 9, 13, and 17.",
            options: [
              {
                name: "Division of Extraction (Ghost)",
                features: [
                  {
                    name: "Cloak Step",
                    description:
                      "Bonus action to become lightly invisible and soundless until the start of your next turn or until you attack/cast a spell. During this time, you leave no tracks. Uses: proficiency_bonus per long rest.",
                  },
                  {
                    name: "Echo Port",
                    description:
                      "Action to mark a visible point within 30 ft. Until the end of your next turn, you can bonus action teleport to that spot if you can still see it.",
                  },
                ],
              },
              {
                name: "Division of Suppression (Breaker)",
                features: [
                  {
                    name: "Disruption Field",
                    description:
                      "Action to emit a 10-ft-radius zone centered on you for 1 minute. Spell attacks made by creatures inside against targets inside have disadvantage; creatures that start their turn concentrating in the zone make their concentration checks with disadvantage until they leave. Uses: proficiency_bonus per long rest.",
                  },
                  {
                    name: "Arcane Jammer",
                    description:
                      "When you hit a creature concentrating on a spell, that creature makes its concentration check with disadvantage.",
                  },
                ],
              },
              {
                name: "Division of Termination (Wraith)",
                features: [
                  {
                    name: "Lethal Precision",
                    description:
                      "When you deal Precision Strike damage, you may reroll one of those damage dice (once per turn). Also once per turn when you deal Precision Strike damage, the target must succeed on a Con save (DC = 8 + PB + Dex or Int) or it can't cast spells until the start of its next turn.",
                  },
                  {
                    name: "Silent Finisher",
                    description:
                      "When you reduce a creature to 0 HP, you can become invisible until the end of your next turn. Uses: proficiency_bonus per long rest.",
                  },
                ],
              },
              {
                name: "Division of Intelligence (Cipher)",
                features: [
                  {
                    name: "False Face",
                    description:
                      "Action to adopt a minor glamour altering face, voice, and outfit within normal humanoid ranges for up to 1 hour. Uses: proficiency_bonus per long rest.",
                  },
                  {
                    name: "Truth Reader",
                    description:
                      "When you make an Insight check contested by Deception, add 1d4 to your result.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        level: 4,
        features: [
          {
            name: "Ability Score Improvement or Combat Feat",
            description:
              "Increase an ability score by +2, or two by +1, or select a feat.",
            feat_examples: [
              {
                name: "Rapid Response",
                effect:
                  "When you roll initiative, you can immediately move up to half your speed without provoking opportunity attacks.",
              },
              {
                name: "Anti-Mage Specialist",
                effect:
                  "Once per short rest, when you hit a creature concentrating on a spell, that creature automatically fails its concentration save.",
              },
              {
                name: "Field Technician",
                effect:
                  "Gain proficiency with one additional tool; your checks with Wardbreaker's Tools gain +2 bonus.",
              },
            ],
          },
        ],
      },
      {
        level: 5,
        features: [
          {
            name: "Exploit Mastery",
            description:
              "When you deal Precision Strike damage, apply one rider: (a) 10-ft knockback, (b) −10 ft speed until your next turn, or (c) the target has disadvantage on the next spell attack it makes before the end of its next turn.",
          },
          {
            name: "Division Feature (5th)",
            description: "Your Division grants a new feature.",
            options: [
              {
                name: "Ghost — Phase Veil",
                description:
                  "Until end of your turn, you can move through nonmagical barriers up to 5 ft thick as difficult terrain. Uses: 1 per short rest.",
              },
              {
                name: "Breaker — Null Pulse",
                description:
                  "Reaction when a creature within 30 ft casts a spell: force a Con save (DC = 8 + PB + Int). On a failure, the spell fizzles and the slot is expended. Uses: 1 per short rest.",
              },
              {
                name: "Wraith — Execution Protocol",
                description:
                  "When you score a critical hit or reduce a creature to 0 HP, you can make one weapon attack as a bonus action.",
              },
              {
                name: "Cipher — Memory Scramble",
                description:
                  "When you successfully deceive or charm a creature, you may force a Wis save (DC = 8 + PB + Int or Cha). On a failure, it forgets the last minute. Uses: proficiency_bonus per long rest.",
              },
            ],
          },
        ],
      },
      {
        level: 6,
        features: [
          {
            name: "Additional Expertise",
            description:
              "Choose two more proficiencies (skills or Wardbreaker's Tools) to gain expertise.",
          },
          {
            name: "Evasion",
            description:
              "On a Dex save for half damage, you take no damage on a success and half on a failure.",
          },
        ],
      },
      {
        level: 7,
        features: [
          {
            name: "Division Feature (7th)",
            description: "Your Division improves.",
            options: [
              {
                name: "Ghost — Ethereal Step",
                description:
                  "Bonus action to step into the Border Ethereal until the start of your next turn. While there, you can move through creatures/objects and have resistance to damage from the Material Plane. Uses: proficiency_bonus per long rest.",
              },
              {
                name: "Breaker — Antimagic Strike",
                description:
                  "Once per turn when you deal Precision Strike damage, the target makes a Con save. On a failure, it loses one spell slot of its highest available level and can't cast spells until the end of its next turn.",
              },
              {
                name: "Wraith — Shadow Kill",
                description:
                  "When you reduce a creature to 0 HP, you may react to teleport up to 30 ft and become invisible until the start of your next turn or until you attack.",
              },
              {
                name: "Cipher — Perfect Disguise",
                description:
                  "You can cast Alter Self at will (self only). Creatures have disadvantage on checks to see through your disguises.",
              },
            ],
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
            name: "Precision Strike Increase",
            description: "Your Precision Strike damage increases to 5d6.",
          },
          {
            name: "Division Feature (9th)",
            description: "Your Division reaches expert tier.",
            options: [
              {
                name: "Ghost — Phantom Presence",
                description:
                  "You can't be detected by divination magic or perceived through magical scrying sensors. Additionally, you leave no physical tracks and can't be tracked by magical means. You can cast Nondetection on yourself at will.",
              },
              {
                name: "Breaker — Dispelling Strike",
                description:
                  "Once per turn when you hit with Precision Strike, you can automatically dispel one spell of 5th level or lower affecting the target (as Dispel Magic). For spells of 6th level or higher, make an Intelligence check (DC = 10 + spell level).",
              },
              {
                name: "Wraith — Death Mark",
                description:
                  "As a bonus action, mark a creature you can see within 60 ft for death. For 1 minute, your attacks against it deal an extra 2d6 necrotic damage, and you have advantage on attack rolls against it. If it drops to 0 HP while marked, you regain HP equal to your Hit Wizard level. Uses: Wisdom modifier per long rest.",
              },
              {
                name: "Cipher — Impersonate",
                description:
                  "When you successfully use False Face to disguise yourself as a specific creature, you gain insight into their mannerisms, voice, and recent memories (last 24 hours). Additionally, you can cast Modify Memory once per long rest without expending a spell slot.",
              },
            ],
          },
        ],
      },
      {
        level: 10,
        features: [
          {
            name: "Uncanny Reflexes",
            description:
              "You have advantage on Dexterity saving throws against effects you can see, such as traps and spells. To gain this benefit, you can't be blinded, deafened, or incapacitated. Additionally, you can't be surprised while conscious.",
          },
        ],
      },
      {
        level: 11,
        features: [
          {
            name: "Precision Strike Increase",
            description:
              "Your Precision Strike damage increases to 6d6. Additionally, your Precision Strike now ignores resistance to its damage type.",
          },
          {
            name: "Reliable Talent",
            description:
              "Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10.",
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
            name: "Precision Strike Increase",
            description: "Your Precision Strike damage increases to 7d6.",
          },
          {
            name: "Division Feature (13th)",
            description: "Your Division reaches master tier.",
            options: [
              {
                name: "Ghost — Phase Assassin",
                description:
                  "You can attack while in the Border Ethereal. Additionally, once per long rest, you can remain ethereal for up to 10 minutes (as per Etherealness spell), and you can bring up to three willing creatures with you.",
              },
              {
                name: "Breaker — Null Zone",
                description:
                  "As an action, create a 30-ft radius antimagic field centered on you that lasts 1 minute. You can exclude a number of creatures equal to your Intelligence modifier from its effects. While in this zone, you and excluded allies have advantage on attack rolls. Uses: 1 per long rest.",
              },
              {
                name: "Wraith — Soul Reaper",
                description:
                  "When a creature marked by your Death Mark dies, its soul becomes trapped for 1 minute. During this time, the creature can't be resurrected except by Wish. You can communicate with the trapped soul telepathically. Additionally, you gain temporary HP equal to twice the creature's CR or level.",
              },
              {
                name: "Cipher — Identity Theft",
                description:
                  "Once per long rest, you can perfectly impersonate a creature you've observed for at least 1 hour within the past week. For 8 hours, you gain their physical form (as True Polymorph but retaining your mental stats), access to their surface thoughts and memories from the past month, and advantage on all Charisma checks involving creatures who knew the target.",
              },
            ],
          },
        ],
      },
      {
        level: 14,
        features: [
          {
            name: "Blindsense",
            description:
              "You gain blindsight out to 30 ft. Within that range, you can effectively see anything that isn't behind total cover, even if you're blinded or in darkness. Additionally, you can detect invisible creatures within this range.",
          },
        ],
      },
      {
        level: 15,
        features: [
          {
            name: "Precision Strike Increase",
            description:
              "Your Precision Strike damage increases to 8d6. Additionally, when you critically hit with an attack that includes Precision Strike, the target must succeed on a Constitution save (DC = 8 + PB + DEX or INT) or be paralyzed until the end of your next turn.",
          },
          {
            name: "Slippery Mind",
            description:
              "You gain proficiency in Wisdom saving throws. If you already have this proficiency, you gain proficiency in Intelligence or Charisma saves instead.",
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
            name: "Precision Strike Increase",
            description: "Your Precision Strike damage increases to 9d6.",
          },
          {
            name: "Division Feature (17th)",
            description: "Your Division achieves legendary power.",
            options: [
              {
                name: "Ghost — Impossible to Find",
                description:
                  "You become permanently invisible to divination magic, scrying, and tracking of any kind. Additionally, once per long rest, you can become completely undetectable for 1 hour (as Invisibility but can't be detected by any means, including Truesight). During this time, you leave no trace of your presence.",
              },
              {
                name: "Breaker — Mage Killer",
                description:
                  "When you hit a spellcaster with Precision Strike, you can force them to make a Constitution save (DC = 8 + PB + INT). On a failure, they lose all spell slots of 6th level and lower and can't cast spells for 1 minute. Additionally, you have advantage on saves against spells cast by creatures within 30 ft of you.",
              },
              {
                name: "Wraith — Angel of Death",
                description:
                  "Once per long rest, you can enter Death Form for 1 minute. During this time:\n• You become invisible and incorporeal\n• Your movement speed doubles\n• Your attacks automatically critically hit\n• Creatures you reduce to 0 HP die instantly and can't be resurrected by spells of 8th level or lower\n• You have resistance to all damage",
              },
              {
                name: "Cipher — Master of Deception",
                description:
                  "You can maintain up to three different identities simultaneously, complete with false backgrounds that hold up to magical scrutiny. Additionally, once per long rest, you can cast Simulacrum without components or spell slots, creating a duplicate of yourself or any creature you've impersonated in the past week.",
              },
            ],
          },
        ],
      },
      {
        level: 18,
        features: [
          {
            name: "Elusive",
            description:
              "You are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren't incapacitated. Additionally, you can use your reaction to impose disadvantage on an attack roll against you.",
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
          {
            name: "Precision Strike Increase",
            description: "Your Precision Strike damage increases to 10d6.",
          },
        ],
      },
      {
        level: 20,
        features: [
          {
            name: "Strike Team Commander",
            description:
              "You have perfected the art of assassination and black ops. You gain the following benefits:\n• Your Precision Strike damage becomes 10d6, and you can apply it to any attack against a creature that hasn't acted in combat yet, regardless of advantage or allies.\n• You can use Tactical Shift to take both Dash and Disengage as a bonus action on the same turn.\n• You gain immunity to being charmed, frightened, or magically detected.\n• Once per long rest, you can activate Omega Protocol as a bonus action for 1 minute. During this time:\n  - You have three reactions per round instead of one\n  - Your Arcane Countermeasure reduces damage to zero (instead of half)\n  - You can move through creatures and objects\n  - Your attacks deal maximum Precision Strike damage (no rolling)\n  - You can use any Division feature at will without expending uses\n• You no longer age and cannot be aged magically.",
          },
        ],
      },
    ],
    design_notes: {
      concept:
        "Rogue remap as Ministry strike-ops specialist — agile, tactical, and anti-magic focused.",
      tone: "Professional, efficient, and morally gray. Where Aurors bring justice, Hit Wizards bring finality.",
      balance_notes: [
        "Precision Strike uses standard Rogue Sneak Attack progression (1d6 → 10d6 by level 19)",
        "Divisions parallel Rogue archetypes with hybrid martial/utility features",
        "Division features granted at levels 3, 5, 7, 9, 13, 17 (similar to Rogue subclass progression)",
        "Half-caster progression provides utility spells without overshadowing martial focus",
        "Evasion at 6, Uncanny Reflexes at 10, Reliable Talent at 11 match Rogue defensive features",
        "Level 20 Omega Protocol is gated behind resource limit (1/long rest, 1 minute duration)",
        "All save DCs standardized: 8 + PB + relevant ability (DEX or INT)",
        "Arcane Countermeasure provides anti-magic utility without trivializing encounters",
      ],
      rules_consistency:
        "All save DCs = 8 + PB + relevant ability (DEX or INT). Features gated at levels 3/5/7/9/13/17 align with standard subclass pacing. Precision Strike follows Rogue's Sneak Attack scaling exactly.",
    },
  },

  profession_field_hunter: {
    id: "profession_field_hunter",
    name: "Field Hunter",
    type: "Ranger",
    description:
      "Field Hunters are magical bounty specialists—pragmatic operatives who track fugitives, recover stolen relics, and navigate hostile wards. They don't unweave magic like Arcanists—they use quick, practical charms to pursue, corner, and contain.",
    hit_die: "d10",
    primary_abilities: ["Dexterity", "Wisdom"],
    saving_throws: ["Strength", "Dexterity"],
    armor_proficiencies: ["Light Armor", "Medium Armor", "Shields"],
    weapon_proficiencies: [
      "Simple Weapons",
      "Martial Weapons",
      "Wands",
      "Hand Crossbows",
      "Nets",
    ],
    tool_proficiencies: ["Thieves' Tools", "Disguise Kit"],
    skill_choices: {
      choose: 3,
      options: [
        "Stealth",
        "Perception",
        "Insight",
        "Investigation",
        "Survival",
        "Animal Handling",
        "Acrobatics",
        "Arcana",
      ],
    },
    spellcasting: {
      progression_type: "half-caster",
      casting_ability_choice: ["Wisdom"],
      save_dc: "8 + proficiency_bonus + Wisdom_mod",
      attack_mod: "proficiency_bonus + Wisdom_mod",
      notes:
        "Practical, pursuit-focused magic (marking, concealment, movement, containment). Avoids deep counter-magic reserved for Arcanists.",
      bonus_spells: {
        cantrips: ["Minor Illusion", "Mage Hand"],
        level_1_to_3: [
          "Hunter's Mark",
          "Detect Magic",
          "Longstrider",
          "Disguise Self",
          "Pass without Trace",
          "Silence",
          "See Invisibility",
          "Locate Object",
          "Hold Person",
          "Nondetection",
          "Clairvoyance",
          "Tongues",
          "Rope Trick",
        ],
      },
    },
    class_resources: [
      {
        name: "Contract Marks",
        formula:
          "uses = proficiency_bonus + Wisdom_mod (minimum 1); one active at a time (increases at 11/17)",
        recharge: "Long Rest",
        effects_summary: [
          "Bonus action to Mark a creature or object within 90 ft for up to 1 hour (concentration not required). A Mark ends early if you Mark a new target beyond your current maximum.",
          "You always know direction and distance to your Mark (same plane).",
          "Once per turn when you hit your Mark, add your proficiency bonus to the damage.",
          "Advantage on checks to track/locate your Mark; you can re-Mark the same target for free when it drops to 0 HP within 1 minute.",
        ],
      },
    ],
    level_features: [
      {
        level: 1,
        features: [
          {
            name: "Hunting Grounds",
            description:
              "Choose one locale: Urban Network, Wilderness, Underways, Coastal, or Arcane Sites. You and allies you lead ignore common travel friction there (nonmagical difficult terrain, basic navigation hazards). You gain advantage on one of Stealth, Survival, or Investigation checks related to travel/track in that locale. You gain an additional locale at Field Hunter level 5.",
          },
          {
            name: "Contract Mark",
            description:
              "You learn to bind a limited pursuit sigil—see Contract Marks. When you first Mark a target this encounter, you gain temporary hit points equal to your Wisdom modifier (minimum 1).",
          },
        ],
      },
      {
        level: 2,
        features: [
          {
            name: "Field Style",
            description:
              "Choose one: Archery (+2 to ranged attack rolls), Dueling (+2 damage with a one-handed weapon), Two-Weapon (add +PB to one off-hand damage roll per turn), or Warder (+1 AC while concentrating on a spell).",
          },
          {
            name: "Containment Charm",
            description:
              "When your **Mark** you can see attempts to teleport, turn invisible, or change shape, you may use your reaction to force it to make a Wisdom save (DC = 8 + PB + WIS). On a failure, the effect fizzles and the triggering action is wasted. Uses per long rest = your proficiency bonus.",
          },
        ],
      },
      {
        level: 3,
        features: [
          {
            name: "Ritual Kit (Early-Warning)",
            description:
              "You can ritual-cast **Alarm**, **Detect Magic**, and a limited **Snare** variant without a book. These preparations warn, hinder, or route—never fully dispel enemy magic.",
          },
          {
            name: "Bounty Appraisal",
            description:
              "After 1 minute examining a creature, scene, or item, you learn one concrete fact about its black-market value, origin, or risk profile (GM provides). You have advantage on Persuasion checks to negotiate payment for recoveries and on Insight checks to spot false leads about your Mark.",
          },
          {
            name: "Branch of the Field",
            description:
              "Choose a specialization: Witchcatcher, Relic Seeker, or Beast Reclaimer. Gain its 3rd-level features now and more at 5/7/9/13/17.",
            options: [
              {
                name: "Witchcatcher",
                features: [
                  {
                    name: "Hex Net",
                    description:
                      "You gain a runed net. When you hit your Mark with it, the target must succeed on a Con save (DC = 8 + PB + WIS) or it can't cast spells with verbal components until the start of your next turn. The net counts as magical and can be repaired on a short rest.",
                  },
                  {
                    name: "Bonus Spells (Witchcatcher)",
                    description:
                      "**Hold Person** and **See Invisibility** are always prepared and don't count against your limit.",
                  },
                ],
              },
              {
                name: "Relic Seeker",
                features: [
                  {
                    name: "Relic Sense",
                    description:
                      "Describe or name a specific object. For the next hour (1/long rest), you know the direction to the nearest instance of that object—or to your Marked object's unique resonance—within 1 mile.",
                  },
                  {
                    name: "Containment Satchel",
                    description:
                      "A ward-lined pouch or case. While a Small or smaller object is inside, minor curse effects are suppressed (GM adjudication for scope). Removing the item ends the suppression.",
                  },
                  {
                    name: "Bonus Spells (Relic Seeker)",
                    description:
                      "**Locate Object** and **Nystul's Magic Aura** are always prepared and don't count against your limit.",
                  },
                ],
              },
              {
                name: "Beast Reclaimer",
                features: [
                  {
                    name: "Calming Sign",
                    description:
                      "Action: present a sigil to a beast or magical beast within 30 ft (GM determines type). It must succeed on a Wis save (DC = 8 + PB + WIS) or be charmed by you until the start of your next turn; while charmed its speed is halved and it avoids approaching other creatures. Uses per long rest = PB.",
                  },
                  {
                    name: "Bonus Spells (Beast Reclaimer)",
                    description:
                      "**Speak with Animals** and **Ensnaring Strike** are always prepared and don't count against your limit.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        level: 4,
        features: [
          {
            name: "Ability Score Improvement or Field Feat",
            description:
              "Increase one ability by +2 or two by +1, or select a Field feat.",
            feat_examples: [
              {
                name: "Quick Recon",
                effect:
                  "When you roll initiative, gain +10 ft speed until end of your first turn.",
              },
              {
                name: "Ghosted Steps",
                effect:
                  "Ignore nonmagical difficult terrain; +1 to Dexterity (Stealth) checks.",
              },
              {
                name: "Tangle Throw",
                effect:
                  "When you hit a creature with a net, you can add your Wisdom modifier to the escape DC until the start of your next turn.",
              },
            ],
          },
        ],
      },
      {
        level: 5,
        features: [
          {
            name: "Extra Attack",
            description: "Attack twice whenever you take the Attack action.",
          },
          {
            name: "Echo Step",
            description:
              "Whenever you take the Dash action, you can short-blink up to 10 ft to a space you can see (once per turn) without provoking opportunity attacks.",
          },
          {
            name: "Contract Lock",
            description:
              "When your **Mark** would drop to 0 HP, you can instead reduce it to 1 HP and bind it for 1 minute (speed 0; can't teleport; disadvantage on checks to escape restraints). Once per long rest.",
          },
          {
            name: "Branch Feature (5th)",
            description: "Your Branch grants a new benefit.",
            options: [
              {
                name: "Witchcatcher — Null Tether",
                description:
                  "Your weapon attacks against your Mark impose disadvantage on its concentration checks until the start of your next turn. Also, your Mark can't benefit from invisibility while within 30 ft of you.",
              },
              {
                name: "Relic Seeker — Recall Tag",
                description:
                  "Bonus action to call a tagged object (your Mark or an item you handled within 24h) from a creature within 30 ft. Holder makes a Str save vs your DC or the object teleports to your hand. Uses: 1/short or long rest.",
              },
              {
                name: "Beast Reclaimer — Pacification Net",
                description:
                  "When you hit your Mark with a weapon attack, reduce its speed by 10 ft and give it disadvantage on its next attack roll before your next turn. Uses per long rest = Wisdom_mod (minimum 1).",
              },
            ],
          },
        ],
      },
      {
        level: 6,
        features: [
          {
            name: "Hunter's Instinct",
            description:
              "Gain proficiency in Wisdom saves if you don't already have it. You can't be surprised while conscious, and your Mark has disadvantage on Stealth checks against you.",
          },
          {
            name: "Enhanced Contract Mark",
            description:
              "Your Contract Mark range increases to 120 ft. When you first Mark a target each encounter, gain temp HP equal to twice your Wisdom modifier (minimum 2).",
          },
        ],
      },
      {
        level: 7,
        features: [
          {
            name: "Relentless Pursuit",
            description:
              "Your speed increases by 10 ft. When your Mark moves on its turn, you can use your reaction to move up to half your speed toward it without provoking opportunity attacks.",
          },
          {
            name: "Branch Feature (7th)",
            description: "Enhanced tracking utilities.",
            options: [
              {
                name: "Witchcatcher — Spell Trace",
                description:
                  "When a spell is cast within 60 ft, you learn what spell it was and who cast it. You can sense when your Mark casts a spell within 1 mile (direction only).",
              },
              {
                name: "Relic Seeker — Object Reading",
                description:
                  "Touch an object and concentrate 1 minute to glimpse the last creature to possess it and its general location when last held (within the past week). Uses: Wisdom_mod per long rest.",
              },
              {
                name: "Beast Reclaimer — Beast Bond",
                description:
                  "Bond with one beast/magical beast of CR 1 or lower (friendly; follows commands; acts on your turn). If it dies, you may bond another after a long rest. At 11th level, CR limit increases to 2.",
              },
            ],
          },
        ],
      },
      {
        level: 8,
        features: [
          {
            name: "Ability Score Improvement",
            description:
              "Increase one ability by +2, or two by +1, or select a feat.",
          },
          {
            name: "Land's Stride",
            description:
              "Moving through nonmagical difficult terrain costs no extra movement; you can pass through nonmagical plants without being slowed or damaged.",
          },
        ],
      },
      {
        level: 9,
        features: [
          {
            name: "Improved Containment Charm",
            description:
              "Containment Charm now interrupts teleportation magic up to 5th level (e.g., **misty step**, **dimension door**). Uses per long rest = PB + Wisdom_mod.",
          },
          {
            name: "Branch Feature (9th)",
            description: "Branch reaches expert tier.",
            options: [
              {
                name: "Witchcatcher — Silencing Strike",
                description:
                  "Once per turn when you hit your Mark with a weapon attack, force a Con save. On a fail, it can't cast spells or use verbal components for 1 minute (repeat save at end of each of its turns). Uses: Wisdom_mod per long rest.",
              },
              {
                name: "Relic Seeker — Acquisition Expert",
                description:
                  "You can cast **Knock** and **Arcane Lock** once per long rest each without slots. **Relic Sense** range increases to 5 miles and lasts 8 hours.",
              },
              {
                name: "Beast Reclaimer — Pack Tactics",
                description:
                  "When your bonded beast is within 30 ft of your Mark, you both have advantage on attack rolls against it. You and the beast can communicate telepathically on the same plane.",
              },
            ],
          },
        ],
      },
      {
        level: 10,
        features: [
          {
            name: "Hide in Plain Sight",
            description:
              "Spend 1 minute to create camouflage. You have advantage on Stealth checks while motionless. The camouflage ends if you move, make an attack, or cast a spell.",
          },
          {
            name: "Third Hunting Ground",
            description:
              "Choose a third locale for Hunting Grounds. In one chosen locale you already have, you gain expertise: you can't be tracked by nonmagical means there unless you choose to leave a trail.",
          },
        ],
      },
      {
        level: 11,
        features: [
          {
            name: "Superior Contract Mark",
            description:
              "You can maintain **two** Contract Marks simultaneously. Additionally, once per turn when you damage a Marked target, you can add your Wisdom modifier to that damage (this does not stack multiple times per turn).",
          },
        ],
      },
      {
        level: 12,
        features: [
          {
            name: "Ability Score Improvement",
            description:
              "Increase one ability by +2, or two by +1, or select a feat.",
          },
        ],
      },
      {
        level: 13,
        features: [
          {
            name: "Vanish",
            description:
              "You can take the Hide action as a bonus action. You can't be tracked by magical means unless you allow it.",
          },
          {
            name: "Branch Feature (13th)",
            description: "Branch reaches master tier.",
            options: [
              {
                name: "Witchcatcher — Mage Breaker",
                description:
                  "When your Mark casts a spell, use your reaction to make one weapon attack. On a hit, the spell fails (slot expended). Uses: 3 per long rest.",
              },
              {
                name: "Relic Seeker — Master Retriever",
                description:
                  "Once per long rest, cast **Dimension Door** without a slot, but only to a space within 10 ft of your Mark or a marked object. **Recall Tag** range increases to 60 ft.",
              },
              {
                name: "Beast Reclaimer — Primal Command",
                description:
                  "Beast Bond affects CR 3 or lower. Once per long rest, summon a spectral pack (3 wolves using dire wolf stats) for 1 minute; they obey you and act on your turn.",
              },
            ],
          },
        ],
      },
      {
        level: 14,
        features: [
          {
            name: "Feral Senses",
            description:
              "You gain blindsight 30 ft and advantage on initiative rolls. You can see invisible creatures and objects within your blindsight.",
          },
        ],
      },
      {
        level: 15,
        features: [
          {
            name: "Greater Echo Step",
            description:
              "Echo Step distance increases to 30 ft, and you may use it once during your movement on your turn (not only when Dashing). You can bring one willing ally within 5 ft with you.",
          },
          {
            name: "Relentless",
            description:
              "When you would drop to 0 HP while your Mark is alive and conscious, you drop to 1 HP instead. Once per long rest.",
          },
        ],
      },
      {
        level: 16,
        features: [
          {
            name: "Ability Score Improvement",
            description:
              "Increase one ability by +2, or two by +1, or select a feat.",
          },
        ],
      },
      {
        level: 17,
        features: [
          {
            name: "Master Hunter",
            description:
              "You can maintain **three** Contract Marks simultaneously. Once per turn when you hit a Marked creature, choose one rider (no save): knock it prone, push it 10 ft, or reduce its speed by 10 ft until the end of its next turn.",
          },
          {
            name: "Branch Feature (17th)",
            description:
              "Branch achieves legendary mastery (tuned to avoid full Antimagic Field or at-will True Polymorph).",
            options: [
              {
                name: "Witchcatcher — Silence Lockdown",
                description:
                  "Once per long rest, center a 30-ft-radius zone on your Mark for 1 minute: **Silence**; invisibility is suppressed; and creatures attempting to cast a spell must succeed on a Con save or the spell fails (slot expended). You can exempt a number of creatures up to your Wisdom modifier.",
              },
              {
                name: "Relic Seeker — Planar Retrieval",
                description:
                  "Your **Relic Sense** works across planes for Marked objects. Once per week, you can cast **Plane Shift** without components to travel to (or from) the plane containing your marked object/creature; you may bring up to 8 willing creatures.",
              },
              {
                name: "Beast Reclaimer — Beast Lord",
                description:
                  "Beast Bond affects CR 5 or lower. As an action 2/day, you may assume a bonded beast's form (up to CR 5) for 10 minutes as per **Polymorph** (self only; retain mental stats; no spellcasting while transformed).",
              },
            ],
          },
        ],
      },
      {
        level: 18,
        features: [
          {
            name: "Foe Slayer",
            description:
              "Once per turn when you make an attack against a Mark, you can add your Wisdom modifier to the attack roll **or** to the damage roll (declare after the roll but before the result is confirmed). You also have advantage on saving throws against spells and abilities used by your Marks.",
          },
        ],
      },
      {
        level: 19,
        features: [
          {
            name: "Ability Score Improvement",
            description:
              "Increase one ability by +2, or two by +1, or select a feat.",
          },
        ],
      },
      {
        level: 20,
        features: [
          {
            name: "Legendary Bounty Hunter",
            description:
              "You perfect the art of the hunt.\n• You can maintain up to **five** Contract Marks simultaneously.\n• Hunter's Sight: as an action, force a Marked creature that can see or hear you to make a Wis save; on a failure you can see through its senses for 1 minute (concentration) and you have advantage on attacks against it while linked (1/short rest).\n• You have advantage on all attack rolls against your Marks.\n• Perfect Hunt (1/long rest, bonus action, 1 minute): you gain truesight 120 ft; your speed doubles; you can use Containment Charm as a reaction once per round without expending uses; your weapon attacks against Marks score a critical hit on 19–20; as a bonus action, you can teleport to one of your Marks you can sense within 300 ft.",
          },
        ],
      },
    ],
    design_notes: {
      concept:
        "Ranger remap as a magical bounty hunter for people and treasure: mark, pursue, capture.",
      tone: "Noir professional—results over ideals.",
      balance_notes: [
        "Half-caster (Wis). Marks grant direction/distance & modest DPR (+PB; later +WIS once/turn) without overshadowing casters.",
        "Containment tools interrupt escape tricks (teleport/invisibility/shapeshift) with saves and use limits—no blanket counterspells.",
        "Branch 17th-level upgrades avoid full Antimagic Field or at-will True Polymorph; effects are strong but bounded.",
        "Capstone limits Marks to 5 (not unlimited), replaces auto-crits with 19–20 vs Marks, and constrains teleport range to 300 ft for encounter sanity.",
      ],
    },
  },

  profession_muggle_liaison: {
    id: "profession_muggle_liaison",
    name: "Muggle Liaison",
    type: "Monk",
    description:
      "Embedded Bureau assets who live and work among nonmagicals. Liaisons blend in, de-escalate, extract, and keep the Secret—operating effectively without magic but carrying a small kit of subtle spells for when the quiet options run out.",
    hit_die: "d8",
    primary_abilities: ["Dexterity", "Wisdom"],
    saving_throws: ["Strength", "Dexterity"],
    armor_proficiencies: ["Light Armor"],
    weapon_proficiencies: [
      "Simple Weapons",
      "Shortswords",
      "Batons (club)",
      "Wands",
    ],
    tool_proficiencies: [
      "Disguise Kit",
      "Forgery Kit",
      "One: Healer's Kit or Thieves' Tools",
    ],
    skill_choices: {
      choose: 2,
      options: [
        "Persuasion",
        "Insight",
        "Perception",
        "Acrobatics",
        "Stealth",
        "Investigation",
        "Deception",
        "Medicine",
      ],
    },
    spellcasting: {
      progression_type: "quarter-caster",
      casting_ability_choice: ["Wisdom"],
      save_dc: "8 + proficiency_bonus + Wisdom_mod",
      attack_mod: "proficiency_bonus + Wisdom_mod",
      notes:
        "You know a few subtle spells for cover, movement, and calm. You can spend Protocol Points to cast them silently and without obvious light.",
      cantrips_known: { 1: 2, 5: 3 },
      spells_known: { 1: 2, 2: 3, 3: 4, 4: 5, 5: 6 },
      spell_slots: {
        1: { "1st": 1 },
        2: { "1st": 2 },
        3: { "1st": 2, "2nd": 1 },
        4: { "1st": 2, "2nd": 1 },
        5: { "1st": 2, "2nd": 2 },
      },
      spell_list: {
        cantrips: ["Thaumaturgy", "Minor Illusion", "Message", "Mage Hand"],
        level_1_to_3: [
          "Disguise Self",
          "Feather Fall",
          "Detect Magic",
          "Silent Image",
          "Comprehend Languages",
          "Sanctuary",
          "Calm Emotions",
          "Silence",
          "See Invisibility",
          "Nondetection",
        ],
      },
    },
    class_resources: [
      {
        name: "Protocol Points",
        formula: "proficiency_bonus + Wisdom_mod (minimum 2)",
        recharge: "Short Rest",
        effects_summary: [
          "Fuel de-escalation maneuvers, extra strikes, blinks, and covert casting.",
          "You can use only 1 Protocol option per turn unless a feature says otherwise.",
        ],
      },
    ],
    level_features: [
      {
        level: 1,
        features: [
          {
            name: "Unarmored Poise",
            description:
              "While you are not wearing armor or wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.",
          },
          {
            name: "Close-Quarters Training",
            description:
              "Your unarmed strikes use a d4 damage die and can use Dexterity for attack and damage. When you take the Attack action, you may make one unarmed strike as a bonus action.",
          },
          {
            name: "Masquerade Protocol",
            description:
              "You and allies within 10 ft gain advantage on checks to pass unnoticed in nonmagical spaces (e.g., to hide magical tells, conceal wands, or explain anomalies).",
          },
        ],
      },
      {
        level: 2,
        features: [
          {
            name: "Field Protocols",
            description:
              "Spend Protocol Points:\n• Rapid Takedown (1 pt): After you Attack, make two unarmed strikes as a bonus action (nonlethal by default).\n• De-escalate (1 pt): Until the start of your next turn, attacks against you are at disadvantage; add +PB to Persuasion checks to calm a hostile creature this round.\n• Quick Extraction (1 pt): Dash or Disengage as a bonus action; jump distance doubles; moving through a hostile creature's space doesn't provoke.\n• Flash Apparate (1 pt): Bonus action blink up to 10 ft to a space you can see. This is subtle; noticing it requires specific observation (GM adjudication).",
          },
          {
            name: "Interpose",
            description:
              "When a ranged weapon attack would hit you, use your reaction to reduce the damage by 1d10 + your DEX modifier + your class level. If reduced to 0, you can catch or deflect it; if you throw it back, make a ranged attack (20/60) as part of the same reaction.",
          },
        ],
      },
      {
        level: 3,
        features: [
          {
            name: "Covert Spellcasting",
            description:
              "When you cast a Liaison spell of 1st or 2nd level, you can spend 1 Protocol Point to cast it quietly: no verbal components and no visible glow. Creatures notice only with a check vs your spell save DC if specifically watching for magical anomalies.",
          },
          {
            name: "Cover Identity",
            description:
              "Choose Persuasion or Deception; gain proficiency (or expertise if already proficient). You maintain a documented cover. Casual scrutiny requires DC 15 Investigation to pierce (DC 20 if you spent 1 hour preparing).",
          },
          {
            name: "Liaison Path",
            description:
              "Choose a specialization: Community Diplomat, Protective Detail, or Undercover Operative. You gain its 3rd-level features now and more at 5/9/13/17.",
            options: [
              {
                name: "Community Diplomat",
                features: [
                  {
                    name: "Read the Room",
                    description:
                      "Gain expertise in Insight or Persuasion (your choice). Spend 1 minute observing a crowd to learn one: whom they trust, whom they fear, or whether magic influenced them in the last hour.",
                  },
                  {
                    name: "Calming Presence",
                    description:
                      "Bonus action: spend 1 Protocol Point to project a 10-ft aura for 1 minute. Hostiles of CR ≤ your level must succeed on a WIS save (DC = 8 + PB + WIS) to make opportunity attacks against your allies while in the aura.",
                  },
                ],
              },
              {
                name: "Protective Detail",
                features: [
                  {
                    name: "Guardian Step",
                    description:
                      "When a creature you can see within 10 ft is targeted by an attack, you can use your reaction to move up to 10 ft to an adjacent space. If the attack hits, reduce the damage by PB + WIS.",
                  },
                  {
                    name: "Shielding Palm",
                    description:
                      "When you use Interpose and the original target was an ally within 10 ft, you can redirect the projectile to yourself and apply your reduction. If reduced to 0, the attack misses entirely.",
                  },
                ],
              },
              {
                name: "Undercover Operative",
                features: [
                  {
                    name: "Urban Parkour",
                    description:
                      "Gain a climb speed equal to your speed and advantage on Acrobatics checks to navigate urban obstacles. Crowds and furniture no longer cause difficult terrain for you.",
                  },
                  {
                    name: "False Papers",
                    description:
                      "During a short rest, craft convincing documents for your cover with a Forgery Kit. They pass casual inspection; to detect, a creature must succeed on an Investigation check opposed by your Deception.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        level: 4,
        features: [
          {
            name: "Ability Score Improvement or Liaison Feat",
            description:
              "Increase an ability score by +2 (or two by +1), or choose a feat.",
            feat_examples: [
              {
                name: "Crisis Negotiator",
                effect:
                  "When you start De-escalate, choose a creature that can hear you within 30 ft; it has disadvantage on its next attack roll before your next turn unless it targets you.",
              },
              {
                name: "Street Runner",
                effect:
                  "+10 ft speed; climbing no longer costs extra movement.",
              },
              {
                name: "First Responder",
                effect:
                  "When a creature within 5 ft drops to 0 HP, you can move up to your speed toward it as a reaction.",
              },
            ],
          },
        ],
      },
      {
        level: 5,
        features: [
          {
            name: "Extra Attack",
            description:
              "You can attack twice, instead of once, whenever you take the Attack action.",
          },
          {
            name: "Staggering Command",
            description:
              "When you hit a creature with an unarmed strike, you may spend 1 Protocol Point to force a CON save (DC = 8 + PB + WIS). On a failure, it is Staggered until the end of your next turn: it can't take reactions and has disadvantage on Dexterity saves. On a success, it has disadvantage on its next opportunity attack before your next turn.",
          },
          {
            name: "Parkour Roll",
            description:
              "Reduce falling damage you take by an amount equal to 5 × your class level. During your movement this turn, you can run along walls or narrow ledges, provided you end on a surface that can support you.",
          },
          {
            name: "Path Feature (5th)",
            description: "Your Path grants additional abilities.",
            options: [
              {
                name: "Community Diplomat — Directive Word",
                description:
                  "Bonus action: choose a creature within 30 ft that can hear you. WIS save or it can't take the Attack action on its next turn and must move to clear civilians or remain in place if none are near. Uses/long rest = WIS mod (min 1).",
              },
              {
                name: "Protective Detail — Extract Under Fire",
                description:
                  "When you use Quick Extraction, choose an adjacent ally; they may move up to half their speed without provoking opportunity attacks.",
              },
              {
                name: "Undercover Operative — Slip the Net",
                description:
                  "When you hit a creature with an attack, you can spend 1 Protocol Point to immediately take the Disengage action and move up to 10 ft without provoking.",
              },
            ],
          },
        ],
      },
      {
        level: 6,
        features: [
          {
            name: "Protocol Mastery",
            description:
              "Increase your Protocol Point maximum by +PB. When you roll initiative and have fewer than 2 Protocol Points, you regain 2.",
          },
          {
            name: "Enhanced Unarmed Strike",
            description:
              "Your unarmed strikes deal 1d6 damage (1d8 at 11th, 1d10 at 17th). Your unarmed strikes count as magical for overcoming resistance and immunity.",
          },
        ],
      },
      {
        level: 7,
        features: [
          {
            name: "Evasion",
            description:
              "On a Dex save for half damage, you take no damage on a success and half on a failure.",
          },
          {
            name: "Stillness of Mind",
            description:
              "Action to end one effect on yourself causing you to be charmed or frightened. You have advantage on saves against being charmed or frightened.",
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
            name: "Advanced Flash Apparate",
            description:
              "Your Flash Apparate distance increases to 20 ft. When you Flash Apparate, you may take the Hide action as part of the same bonus action if you end in light or heavy obscurity.",
          },
          {
            name: "Path Feature (9th)",
            description: "Your Path reaches expert tier.",
            options: [
              {
                name: "Community Diplomat — Crowd Shield",
                description:
                  "While 3+ nonhostile creatures are within 15 ft, you have half cover. Calming Presence aura radius increases to 20 ft and lasts 10 minutes.",
              },
              {
                name: "Protective Detail — Bodyguard's Instinct",
                description:
                  "When you use Guardian Step, you can move up to your speed instead of 10 ft. You can use Guardian Step a number of times equal to your WIS mod per short rest without expending your reaction; further uses require your reaction.",
              },
              {
                name: "Undercover Operative — Deep Cover",
                description:
                  "You can perfectly mimic the speech patterns, mannerisms, and habits of someone you've observed for at least 1 hour. You can cast Alter Self once per long rest without a slot.",
              },
            ],
          },
        ],
      },
      {
        level: 10,
        features: [
          {
            name: "Purity of Body",
            description:
              "You are immune to disease and poison. You no longer need to sleep and can't be magically put to sleep. You still require 8 hours of restful activity for a long rest and can keep watch during it.",
          },
        ],
      },
      {
        level: 11,
        features: [
          {
            name: "Superior Unarmed Strike",
            description:
              "Your unarmed strikes deal 1d8 damage. When you hit with an unarmed strike, you can spend 1 Protocol Point to add your Wisdom modifier to the damage.",
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
            name: "Tongue of the Sun and Moon",
            description:
              "You can understand all spoken languages, and any creature that understands a language understands you. Your Covert Spellcasting becomes undetectable by mundane means; only magic like Detect Magic can reveal it.",
          },
          {
            name: "Path Feature (13th)",
            description: "Your Path reaches master tier.",
            options: [
              {
                name: "Community Diplomat — Master Negotiator",
                description:
                  "You can cast Charm Person at will without expending spell slots (you may apply Covert Spellcasting). Once per long rest, you can cast Mass Suggestion without a slot.",
              },
              {
                name: "Protective Detail — Sacrifice Play",
                description:
                  "When an ally within 30 ft would be reduced to 0 HP, you can use your reaction to teleport to them and take the damage instead. If this would reduce you to 0 HP, you drop to 1 HP instead. Once per long rest.",
              },
              {
                name: "Undercover Operative — Ghost Protocol",
                description:
                  "You can become invisible (as Greater Invisibility) for 1 minute by spending 3 Protocol Points. You ignore nonmagical difficult terrain and leave no tracks unless you choose to.",
              },
            ],
          },
        ],
      },
      {
        level: 14,
        features: [
          {
            name: "Diamond Soul",
            description:
              "You gain proficiency in all saving throws. When you fail a saving throw, you can spend 1 Protocol Point to reroll it, taking the second result.",
          },
        ],
      },
      {
        level: 15,
        features: [
          {
            name: "Timeless Body",
            description:
              "You no longer age and can't be aged magically. You have advantage on Wisdom (Insight) checks and can't be surprised while conscious.",
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
            name: "Legendary Unarmed Strike",
            description:
              "Your unarmed strikes deal 1d10 damage. When you critically hit with an unarmed strike, you can spend 1 Protocol Point to attempt a stun (CON save, DC = 8 + PB + WIS) until the end of your next turn.",
          },
          {
            name: "Path Feature (17th)",
            description: "Your Path achieves legendary mastery.",
            options: [
              {
                name: "Community Diplomat — Voice of Peace",
                description:
                  "Once per long rest, speak for 10 minutes to a hostile crowd (up to 100 creatures) that can hear you. Each must make a WIS save (DC = 8 + PB + WIS + 2). On a failure, it becomes friendly toward your party for 24 hours unless you harm them.",
              },
              {
                name: "Protective Detail — Perfect Defense",
                description:
                  "As a reaction when you or an ally within 30 ft would take damage, spend 5 Protocol Points to reduce that damage to 0. Allies within 10 ft of you gain +2 AC and advantage on Dexterity saves while you are conscious.",
              },
              {
                name: "Undercover Operative — Identity Shift",
                description:
                  "Spend 1 hour to assume a perfected identity (as a nonmagical counterpart to Seeming + Alter Self) that withstands divination of 5th level or lower (as Nondetection). You may maintain up to two such deep covers at a time and switch between them as an action (no healing or stat changes).",
              },
            ],
          },
        ],
      },
      {
        level: 18,
        features: [
          {
            name: "Empty Body",
            description:
              "You can spend 4 Protocol Points as an action to become ethereal (as Etherealness) for 1 minute. While ethereal, you can move through objects and creatures and have resistance to all damage.",
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
            name: "Perfect Liaison",
            description:
              "You have mastered operating between worlds.\n• When you roll initiative, regain 4 Protocol Points.\n• Your unarmed strikes deal an extra 1d6 force damage.\n• You can use two Protocol options per turn instead of one.\n• Perfect State (1/long rest, 1 minute, no concentration): you have advantage on attacks, checks, and saves; attacks against you have disadvantage; you may use Protocol options without spending points; you count a d20 roll of 9 or lower on Stealth and Deception checks as a 10; you can cast Liaison spells of 2nd level or lower at will without slots or components.\n• You no longer age and cannot be aged magically.",
          },
        ],
      },
    ],
    design_notes: {
      concept:
        "Monk remap to covert Ministry handler who can operate without magic but keeps a tiny toolbox of subtle spells.",
      tone: "Quiet, disciplined, and plausibly deniable.",
      rules_consistency:
        "Save DCs = 8 + PB + Wisdom. Protocol cadence mirrors monk ki. Covert casting is utility/presentation only—no counter-magic overlap.",
      balance_notes: [
        "Protocol Point economy tightened: +PB base scaling; +PB bump at 6th; short-rest refresh; capped per-turn usage.",
        "Bodyguard's Instinct bounded to WIS-mod free uses per short rest; otherwise reaction-gated.",
        "Capstone grants at-will up to 2nd-level Liaison spells during Perfect State (not unlimited higher magic); replaces automatic successes with 'floor 10' on key checks.",
      ],
    },
  },
  profession_arcanist: {
    id: "profession_arcanist",
    name: "Arcanist",
    type: "Warlock",
    description:
      "Arcanists are sanctioned researchers and field operatives who explore the boundaries of magic—legally or otherwise. Their power doesn't come from patrons or divine beings, but from disciplined study of forbidden branches of arcana. Each Arcanist walks a narrow line between discovery and disaster, wielding theory as weapon and experiment as creed.",
    hit_die: "d8",
    primary_abilities: ["Intelligence", "Charisma"],
    saving_throws: ["Wisdom", "Charisma"],
    armor_proficiencies: ["Light Armor"],
    weapon_proficiencies: [
      "Simple Weapons",
      "Wands",
      "Daggers",
      "Light Crossbows",
    ],
    tool_proficiencies: ["Calligrapher's Supplies", "Alchemist's Supplies"],
    skill_choices: {
      choose: 2,
      options: [
        "Arcana",
        "History",
        "Investigation",
        "Deception",
        "Insight",
        "Persuasion",
      ],
    },
    spellcasting: {
      progression_type: "pact-caster",
      casting_ability: "Intelligence",
      notes:
        "You use Pact Magic, relying on a small number of spell slots that are always the same level and refresh on a short or long rest. Your research determines your spell focus, and your Branch of Study provides additional known spells.",
      bonus_spells: {
        cantrips: ["Mage Hand", "Prestidigitation"],
        level_1_to_3: [
          "Armor of Agathys",
          "Detect Magic",
          "Disguise Self",
          "Hex",
          "Hold Person",
          "Counterspell",
          "Dispel Magic",
        ],
      },
    },
    class_resources: [
      {
        name: "Pact Magic",
        description:
          "You channel your research through structured magical frameworks that condense complex formulae into reusable bursts of energy. You regain all expended spell slots when you finish a short or long rest. Your spell slots are always the highest level you can cast, following the Pact Magic progression.",
      },
      {
        name: "Research Insights",
        description:
          "You uncover esoteric discoveries called Research Insights—repeatable magical techniques refined through experimentation. At 2nd level, choose two Insights. You gain more as you advance (see your class table). Each Insight provides a passive effect, unique ability, or minor spellcasting boon.",
        examples: [
          "Agonized Formula: Add your Intelligence modifier to one damage roll of a damaging cantrip you cast each turn.",
          "Counterglyph: Cast Dispel Magic once per long rest without using a spell slot. When you do, add +2 to your ability check to dispel.",
          "Umbral Vision: You can see normally in magical darkness up to 60 feet.",
          "Silent Thesis: Once per short rest, you can cast a spell without verbal components.",
          "Arcane Surveyor: You can cast Detect Magic at will without expending a spell slot.",
          "Glyph Step: As a bonus action, teleport up to 10 ft to an unoccupied space you can see. Uses per long rest = your proficiency bonus.",
        ],
      },
      {
        name: "Analytic Curse",
        description:
          "As a bonus action, target one creature you can see within 90 ft for 1 hour (concentration). Once per turn, when you hit that creature, you deal an extra 1d6 damage. The target also has disadvantage on ability checks using one ability score of your choice. You regain this ability after a short or long rest.",
      },
    ],
    level_features: [
      {
        level: 1,
        features: [
          {
            name: "Pact Magic",
            description:
              "You gain access to Pact Magic, using a small pool of powerful spell slots that refresh on a short rest. All slots are of the same level, increasing as you gain Arcanist levels.",
          },
          {
            name: "Analytic Curse",
            description:
              "You can mark a target through observation and resonance. As a bonus action, curse one creature within 90 ft for 1 hour (concentration). Once per turn when you hit that creature, deal +1d6 damage and impose disadvantage on one ability check type of your choice.",
          },
        ],
      },
      {
        level: 2,
        features: [
          {
            name: "Research Insights",
            description:
              "You gain two Research Insights representing your experimental methods. Choose additional Insights as you level up.",
          },
          {
            name: "Methodical Casting",
            description:
              "When you roll initiative and have no spell slots remaining, regain one expended Pact Magic slot. Once per long rest.",
          },
        ],
      },
      {
        level: 3,
        features: [
          {
            name: "Branch of Study",
            description:
              "Choose your forbidden discipline—your Branch of Study. This determines the area of research that defines your work and shapes your powers. Choose from: **Temporal Study**, **Mentalism Study**, **Void Study**, or **Soulcraft Study**.",
            options: [
              {
                name: "Temporal Study",
                features: [
                  {
                    name: "Tactical Rewind",
                    description:
                      "When a creature within 30 ft makes an attack roll or ability check, you can use your reaction to force a reroll after seeing the roll but before knowing the outcome. They must use the new result. Uses per long rest = your proficiency bonus.",
                  },
                  {
                    name: "Bonus Spells",
                    description:
                      "You always have *Feather Fall* and *Blur* prepared; they don't count against your known spells.",
                  },
                ],
              },
              {
                name: "Mentalism Study",
                features: [
                  {
                    name: "Telepathic Link",
                    description:
                      "You can telepathically communicate with a creature within 60 ft that understands a language. Establishing the link requires a bonus action and lasts for 10 minutes.",
                  },
                  {
                    name: "Bonus Spells",
                    description:
                      "You always have *Charm Person* and *Detect Thoughts* prepared; they don't count against your known spells.",
                  },
                ],
              },
              {
                name: "Void Study",
                features: [
                  {
                    name: "Gravitic Tug",
                    description:
                      "As an action, target a creature within 30 ft. It must succeed on a Strength saving throw or be pulled 10 ft toward you and take force damage equal to your proficiency bonus.",
                  },
                  {
                    name: "Bonus Spells",
                    description:
                      "You always have *Misty Step* and *Levitate* prepared; they don't count against your known spells.",
                  },
                ],
              },
              {
                name: "Soulcraft Study",
                features: [
                  {
                    name: "Warding Spirit",
                    description:
                      "As a bonus action, summon a protective spirit that hovers around a creature you can see within 30 ft for 1 minute. The first time each round the warded creature takes damage, reduce it by your proficiency bonus. Uses per long rest = your proficiency bonus.",
                  },
                  {
                    name: "Bonus Spells",
                    description:
                      "You always have *Protection from Evil and Good* and *Gentle Repose* prepared; they don't count against your known spells.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        level: 4,
        features: [
          {
            name: "Ability Score Improvement or Field Thesis",
            description:
              "Increase one ability score by +2, two by +1, or select a specialized thesis feat.",
            feat_examples: [
              {
                name: "Ritual Engineer",
                effect:
                  "You can cast any known spell with the ritual tag as a ritual, even if not prepared.",
              },
              {
                name: "Overclocked Matrix",
                effect:
                  "When you cast a spell using a Pact Magic slot, add +PB to one damage roll of that spell once per short rest.",
              },
              {
                name: "Field Nullifier",
                effect:
                  "When you succeed on a saving throw against a spell, use your reaction to grant an ally within 30 ft advantage on the same save.",
              },
            ],
          },
        ],
      },
      {
        level: 5,
        features: [
          {
            name: "Arcane Overdrive",
            description:
              "Once per short or long rest, when you cast a spell using a Pact Magic slot, you can immediately cast a cantrip as a bonus action.",
          },
          {
            name: "Branch Feature (5th)",
            description:
              "Your chosen Branch of Study grants an additional benefit.",
            options: [
              {
                name: "Temporal — Freeze Frame",
                description:
                  "As an action, choose a creature within 30 ft. It must succeed on a Wisdom saving throw or be restrained until the start of your next turn as time partially locks around it. Attacks against it have advantage.",
              },
              {
                name: "Mentalism — Compel Truth",
                description:
                  "As an action, force creatures of your choice in a 15-ft cone to make a Charisma saving throw. On a failure, a creature cannot knowingly speak a lie until the end of your next turn.",
              },
              {
                name: "Void — Rift Step",
                description:
                  "When you cast a spell, you can teleport up to 30 ft to an unoccupied space you can see and deal force damage equal to your proficiency bonus to a creature adjacent to either your starting or ending point.",
              },
              {
                name: "Soulcraft — Bind Malice",
                description:
                  "As an action, target a creature within 60 ft. It must succeed on a Charisma saving throw or be unable to regain hit points or gain temporary hit points until the start of your next turn.",
              },
            ],
          },
        ],
      },
    ],
    design_notes: {
      concept:
        "Warlock remap with research replacing patronage. Branches of Study mirror distinct schools of controversial or restricted magical research. Pact Magic pacing fits the noir field-ops tone, allowing rapid bursts of power followed by downtime for analysis.",
      tone: "Cold intellect and dangerous curiosity. Arcanists weaponize understanding.",
      balance_notes:
        "Tracks Warlock progression: Pact Magic at 1, Invocations (Research Insights) at 2, subclass (Branch) at 3 and upgrade at 5, ASI at 4. Analytic Curse replaces Hex but balances as short-rest utility. Branches focus on control, mobility, or defense.",
      rules_consistency:
        "Save DCs = 8 + proficiency bonus + Intelligence modifier. Research Insights mimic Invocations but re-flavored for experimental academia. Branch spells are always prepared.",
    },
  },
  profession_obscurial: {
    id: "profession_obscurial",
    name: "Obscurial",
    type: "Barbarian",
    description:
      "Obscurials are witches and wizards whose magic turns inward—repressed, volatile, and devastating when unleashed. In the field they are living anomalies: bursts of destructive power wrapped in flesh, feared by criminals and bureaucrats alike.",
    hit_die: "d12",
    primary_abilities: ["Strength", "Constitution"],
    saving_throws: ["Strength", "Constitution"],
    armor_proficiencies: ["Light Armor", "Medium Armor", "Shields"],
    weapon_proficiencies: ["Simple Weapons", "Martial Weapons"],
    tool_proficiencies: [],
    skill_choices: {
      choose: 2,
      options: [
        "Athletics",
        "Intimidation",
        "Insight",
        "Perception",
        "Survival",
        "Arcana",
      ],
    },
    spellcasting: {
      progression_type: "none",
      notes:
        "Obscurials do not gain spell slots from this class. They rely on innate, unstable magic expressed through Outbursts rather than structured casting.",
    },
    class_resources: [
      {
        name: "Outburst",
        description:
          "You unleash the unstable magic inside you in a controlled frenzy.",
        activation: "Bonus Action",
        duration: "1 minute",
        effects_summary: [
          "While Outburst is active and you aren't wearing heavy armor:",
          "• You gain advantage on Strength checks and Strength saving throws.",
          "• When you make a melee weapon attack using Strength, you gain a bonus to the damage roll (see Surge Damage Bonus).",
          "• You have resistance to bludgeoning, piercing, and slashing damage.",
          "• You cannot cast spells from this class and can't concentrate on spells.",
          "Backlash: When your Outburst ends, roll a d6. On a 1, you take psychic damage equal to 1d6 × the number of Outbursts you have used since your last long rest.",
        ],
        outbursts_per_long_rest_by_level: { 1: 2, 3: 3, 5: 3 },
        surge_damage_bonus_by_level: { 1: 2, 5: 2 },
        end_conditions: [
          "Ends early if you are knocked unconscious or if your turn ends and you haven't attacked a hostile creature or taken damage since your last turn.",
        ],
      },
    ],
    level_features: [
      {
        level: 1,
        features: [
          {
            name: "Outburst",
            description:
              "As detailed under Class Resources. Your repressed magic erupts to empower your body and dull pain, at the risk of backlash.",
          },
          {
            name: "Unarmored Defense (Warped Physiology)",
            description:
              "While you are not wearing any armor, your AC equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.",
          },
        ],
      },
      {
        level: 2,
        features: [
          {
            name: "Chaotic Opening (Reckless Attack)",
            description:
              "On your turn, you can gain advantage on all melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.",
          },
          {
            name: "Instability Sense (Danger Sense)",
            description:
              "You have advantage on Dexterity saving throws against effects you can see, such as traps and spells. You can't use this benefit while blinded, deafened, or incapacitated.",
          },
        ],
      },
      {
        level: 3,
        features: [
          {
            name: "Manifestation (Primal Path)",
            description:
              "Choose how your inner magic expresses itself: **Decaying Touch**, **Icy Grasp**, or **Eyes of Blight**. You gain the Manifestation's 3rd-level features now and additional benefits at 5th level.",
            options: [
              {
                name: "Decaying Touch",
                features: [
                  {
                    name: "Entropic Aura",
                    description:
                      "While Outburst is active, creatures of your choice that start their turn within 5 ft of you take necrotic damage equal to your proficiency bonus. Objects and nonmagical armor you damage with melee attacks show visible corrosion.",
                  },
                  {
                    name: "Rot-Borne Resilience",
                    description:
                      "While Outburst is active, you have resistance to necrotic damage.",
                  },
                ],
              },
              {
                name: "Icy Grasp",
                features: [
                  {
                    name: "Freezing Pressure",
                    description:
                      "When you hit a creature with a melee attack during Outburst, you can reduce its speed by 10 ft until the start of your next turn (once per turn).",
                  },
                  {
                    name: "Cold Carapace",
                    description:
                      "While Outburst is active, you have resistance to cold damage and ignore difficult terrain created by ice or snow.",
                  },
                ],
              },
              {
                name: "Eyes of Blight",
                features: [
                  {
                    name: "Dreadful Glare",
                    description:
                      "As a bonus action while Outburst is active, force one creature within 30 ft that can see you to make a Wisdom saving throw (DC = 8 + PB + Con). On a failure, it is frightened of you until the end of your next turn. Uses per Outburst = your Constitution modifier (minimum 1).",
                  },
                  {
                    name: "Psychic Shear",
                    description:
                      "While Outburst is active, you have resistance to psychic damage.",
                  },
                ],
              },
            ],
          },
          {
            name: "Bureau Reputation (Ribbon)",
            description:
              "You gain proficiency in one of the following skills: Intimidation, Insight, or Investigation. If you are already proficient, you may instead gain expertise with that skill.",
          },
        ],
      },
      {
        level: 4,
        features: [
          {
            name: "Ability Score Improvement or Outburst Feat",
            description:
              "Increase one ability score by +2, two by +1, or choose a feat tied to your volatile training.",
            feat_examples: [
              {
                name: "Hardened Vessel",
                effect:
                  "Increase Constitution by 1 (to a max of 20). When your Outburst ends, you can choose to negate the Backlash roll once per long rest.",
              },
              {
                name: "Shock Vent",
                effect:
                  "When you take damage while Outburst is active, you can use your reaction to deal your proficiency bonus in the Manifestation's damage type to a creature within 5 ft.",
              },
              {
                name: "Containment Scars",
                effect:
                  "You have advantage on saving throws to end the frightened or charmed conditions while Outburst is active.",
              },
            ],
          },
        ],
      },
      {
        level: 5,
        features: [
          {
            name: "Extra Attack",
            description:
              "You can attack twice, instead of once, whenever you take the Attack action on your turn.",
          },
          {
            name: "Surge Pulse",
            description:
              "The first time you drop to half your hit point maximum or lower during an Outburst, you emit a shockwave. Creatures of your choice within 10 ft must make a Constitution saving throw (DC = 8 + PB + Con) or take 2d6 damage of your Manifestation's type (necrotic, cold, or psychic) and be pushed 5 ft; on a success, they take half damage and aren't pushed. Once per Outburst.",
          },
          {
            name: "Manifestation Feature (5th)",
            description:
              "Your chosen Manifestation grants an additional benefit.",
            options: [
              {
                name: "Decaying Touch — Ruinous Blows",
                description:
                  "Your melee weapon attacks deal an extra 1d4 necrotic damage while Outburst is active. When you reduce a creature to 0 HP, you gain temporary HP equal to your proficiency bonus.",
              },
              {
                name: "Icy Grasp — Absolute Zero",
                description:
                  "Creatures you hit while Outburst is active must succeed on a Strength saving throw (DC = 8 + PB + Con) or be restrained by rime until the start of your next turn (once per turn). A restrained target can use an action to make the save again, ending the effect on a success.",
              },
              {
                name: "Eyes of Blight — Aura of Despair",
                description:
                  "While Outburst is active, hostile creatures within 10 ft of you have disadvantage on the first saving throw they make each round.",
              },
            ],
          },
        ],
      },
    ],
    design_notes: {
      concept:
        "Barbarian remap where Rage becomes Outburst: unstable, internalized magic that empowers the body and warps the battlefield with a small risk of backlash.",
      tone: "Tragic weapon: feared, powerful, barely contained.",
      balance_notes:
        "Tracks Barbarian core: d12 HD, Unarmored Defense, Reckless Attack, Danger Sense, Path at 3, ASI at 4, Extra Attack at 5. Resistances match Barbarian's physical resistances; Manifestations add typed resistances and rider effects without eclipsing casters.",
      rules_consistency:
        "Save DCs use 8 + proficiency bonus + Constitution modifier. Outburst uses per long rest follow Rage cadence (2 at 1st, 3 at 3rd). Surge damage bonus mirrors Rage (+2 at this tier). Backlash is a small, thematic risk gate.",
    },
  },
};

/**
 * Get all custom classes
 * @returns {Array} Array of custom class objects
 */
export const getCustomClasses = () => {
  return Object.values(customClassesData).map((classData) => ({
    index: classData.id,
    name: classData.name,
    type: classData.type,
    isCustom: true,
  }));
};

/**
 * Get custom class details by ID
 * @param {string} classId - The class ID
 * @returns {Object|null} Custom class data or null
 */
export const getCustomClassDetails = (classId) => {
  return customClassesData[classId] || null;
};

/**
 * Check if a class ID is a custom class
 * @param {string} classId - The class ID
 * @returns {boolean} True if custom class
 */
export const isCustomClass = (classId) => {
  return classId in customClassesData;
};

export default customClassesData;
