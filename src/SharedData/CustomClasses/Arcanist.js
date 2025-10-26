export const arcanist = {
  id: "arcanist",
  name: "Arcanist",
  type: "Warlock",
  description:
    "Sanctioned researchers and field operatives who weaponize theory. No patrons—just dangerous scholarship.",

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

  // ——— SPELLCASTING ———
  spellcasting: {
    progression_type: "pact-caster",
    casting_ability: "Intelligence",
    save_dc: "8 + proficiency_bonus + Intelligence_mod",
    attack_mod: "proficiency_bonus + Intelligence_mod",
    notes:
      "Pact Magic: few slots, always highest level you can cast, refresh on short/long rest. Branch grants always-prepared spells.",
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

  // ——— CLASS RESOURCES ———
  class_resources: [
    {
      name: "Pact Magic",
      description:
        "You regain all expended Pact Magic slots on a short or long rest. All slots are the same level per Pact progression.",
    },
    {
      name: "Research Insights",
      description:
        "Experimental techniques akin to invocations. You learn 2 at 2nd level and more as you advance. You can replace one when you gain an Arcanist level.",
      learns_at_levels: [2, 5, 7, 9, 12, 15, 18],
      examples: [
        "Agonized Formula — Add INT to one damage roll of a damaging cantrip you cast each turn.",
        "Counterglyph — Cast Dispel Magic once per long rest without a slot; add +2 to the dispel check.",
        "Umbral Vision — See normally in magical darkness to 60 ft.",
        "Silent Thesis — Once per short rest, cast a spell without verbal components.",
        "Arcane Surveyor — Detect Magic at will.",
        "Glyph Step — Bonus action teleport 10 ft; uses/long rest = PB.",
      ],
    },
    {
      name: "Analytic Curse",
      description:
        "Bonus action: curse a creature within 90 ft for up to 1 hour (concentration). Once/turn when you hit it, deal +1d6 damage. Also impose disadvantage on ability checks using one ability score you choose. Regain after a short or long rest.",
    },
  ],

  // ——— CORE LEVEL FEATURES ———
  level_features: [
    {
      level: 1,
      features: [
        {
          name: "Pact Magic",
          description:
            "Your slots refresh on a short/long rest and are always your highest slot level (per Pact progression).",
        },
        {
          name: "Analytic Curse",
          description:
            "Bonus action mark (conc., 1 hour): +1d6 damage once/turn on hits; choose one ability score—target has disadvantage on checks using it.",
        },
      ],
    },

    {
      level: 2,
      features: [
        {
          name: "Research Insights",
          description:
            "Learn two Insights (see Class Resources). You learn more at 5/7/9/12/15/18.",
        },
        {
          name: "Methodical Casting",
          description:
            "When you roll initiative with no Pact slots, regain one expended slot (1/long rest).",
        },
      ],
    },

    {
      level: 3,
      features: [
        {
          name: "Branch of Study",
          description:
            "Choose a forbidden discipline: Temporal, Mentalism, Void, or Soulcraft. You gain its 3rd-level features now and more at 5, 9, 13, and 17.",
          branches: [
            "Temporal Study",
            "Mentalism Study",
            "Void Study",
            "Soulcraft Study",
          ],
          branch_milestone: true,
        },
      ],
    },

    {
      level: 4,
      features: [
        {
          name: "Ability Score Improvement or Field Thesis",
          description:
            "Increase one ability by +2, or two by +1, or choose a Thesis feat.",
          feat_examples: [
            {
              name: "Ritual Engineer",
              effect:
                "You can cast any known ritual as a ritual even if not prepared.",
            },
            {
              name: "Overclocked Matrix",
              effect:
                "When you cast a spell with a Pact slot, add +PB to one damage roll (1/short rest).",
            },
            {
              name: "Field Nullifier",
              effect:
                "When you succeed on a save vs a spell, reaction: grant an ally within 30 ft advantage on the same save.",
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
            "Once per short or long rest, when you cast a spell using a Pact slot, you can cast a cantrip as a bonus action.",
        },
        {
          name: "Branch Feature (5th)",
          description: "Gain your Branch’s 5th-level feature.",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },

    {
      level: 6,
      features: [
        {
          name: "Cognitive Shielding",
          description:
            "You have advantage on saves vs charm and fear and resistance to psychic damage while concentrating on a spell.",
        },
      ],
    },

    {
      level: 7,
      features: [
        {
          name: "Additional Research Insight",
          description: "Learn one Insight (see Class Resources).",
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
      ],
    },

    {
      level: 9,
      features: [
        {
          name: "Empirical Nullification",
          description:
            "When you cast Counterspell or Dispel Magic, add your INT modifier to the check. Once per short rest, if you fail the check by 5 or less, treat it as a success.",
        },
        {
          name: "Branch Feature (9th)",
          description: "Gain your Branch’s 9th-level feature.",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },

    {
      level: 10,
      features: [
        {
          name: "Refined Curse",
          description:
            "Analytic Curse bonus damage becomes 1d8. At the start of your turn, you can change which ability’s checks are at disadvantage.",
        },
      ],
    },

    {
      level: 11,
      features: [
        {
          name: "Grand Theorem (Mystic Arcanum — 6th)",
          description:
            "Choose one 6th-level spell as a theorem. You can cast it once without a slot and regain this use on a long rest.",
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
        {
          name: "Additional Research Insight",
          description: "Learn one Insight.",
        },
      ],
    },

    {
      level: 13,
      features: [
        {
          name: "Grand Theorem (Mystic Arcanum — 7th)",
          description: "Choose one 7th-level spell as a theorem (1/long rest).",
        },
        {
          name: "Branch Feature (13th)",
          description: "Gain your Branch’s 13th-level feature.",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },

    {
      level: 14,
      features: [
        {
          name: "Dual Hypothesis",
          description:
            "When your Analytic Curse ends on a creature, you can bonus action move it to a different creature you can see within 60 ft (no new concentration needed). Also, when you hit a cursed target, gain temporary HP equal to your PB.",
        },
      ],
    },

    {
      level: 15,
      features: [
        {
          name: "Grand Theorem (Mystic Arcanum — 8th)",
          description: "Choose one 8th-level spell as a theorem (1/long rest).",
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
          name: "Grand Theorem (Mystic Arcanum — 9th)",
          description: "Choose one 9th-level spell as a theorem (1/long rest).",
        },
        {
          name: "Branch Feature (17th)",
          description: "Gain your Branch’s 17th-level feature.",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },

    {
      level: 18,
      features: [
        {
          name: "Additional Research Insight",
          description: "Learn one Insight.",
        },
        {
          name: "Overstudy Safeguards",
          description:
            "When you finish a short rest, choose resistance to one damage type until you finish your next short or long rest. It ends early if you are incapacitated.",
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
          name: "Unified Thesis",
          description:
            "Once per long rest, spend 1 minute in focused calculation to regain all expended Pact slots. Your Analytic Curse no longer requires concentration, and you can maintain it on up to two creatures at once (still one bonus action to apply each).",
        },
      ],
    },
  ],

  // ——— BRANCHES (Skill-Tree Progression) ———
  branches: {
    "Temporal Study": {
      branchPath: "Temporal",
      tagline: "Control tempo, edit outcomes, lock space-time doors.",
      progression: {
        3: [
          {
            name: "Tactical Rewind",
            description:
              "Reaction when a creature within 30 ft makes an attack roll or ability check: force a reroll before the result is known; they must use the new roll. Uses/long rest = PB.",
          },
          {
            name: "Bonus Spells",
            description: "Always prepared: Feather Fall, Blur.",
          },
        ],
        5: [
          {
            name: "Freeze Frame",
            description:
              "Action: one creature within 30 ft must WIS save or be restrained until the start of your next turn; attacks vs it have advantage.",
          },
        ],
        9: [
          {
            name: "Step Outside Time",
            description:
              "Bonus action: become invisible and untargetable until the start of your next turn; you can still perceive and move (no actions). Uses/short rest = 1.",
          },
        ],
        13: [
          {
            name: "Paradox Anchor",
            description:
              "10-ft aura: teleportation is suppressed and creatures have disadvantage on checks to escape restraints. Reaction 1/short rest to end one condition on yourself by “rewinding” (charmed, frightened, grappled, or restrained).",
          },
        ],
        17: [
          {
            name: "Chronal Lock",
            description:
              "1/long rest, create a 20-ft-radius zone for 1 minute (concentration): creatures in the zone can’t teleport, can’t take reactions, and have −10 ft speed. At the end of each of their turns they can WIS save to ignore the zone until they leave it.",
          },
        ],
      },
    },

    "Mentalism Study": {
      branchPath: "Mentalism",
      tagline: "Links, pressure, and truth under clinical light.",
      progression: {
        3: [
          {
            name: "Telepathic Link",
            description:
              "Bonus action: link with a creature within 60 ft for 10 minutes; two-way communication if it understands a language.",
          },
          {
            name: "Bonus Spells",
            description: "Always prepared: Charm Person, Detect Thoughts.",
          },
        ],
        5: [
          {
            name: "Compel Truth",
            description:
              "Action: creatures of your choice in a 15-ft cone must CHA save or be unable to knowingly speak a lie until end of your next turn.",
          },
        ],
        9: [
          {
            name: "Mind Veil",
            description:
              "You are immune to having your thoughts read or alignment/surface emotions divined unless you allow it. Allies within 10 ft have advantage on saves vs charm.",
          },
        ],
        13: [
          {
            name: "Domination Lattice",
            description:
              "Action: one creature within 60 ft must WIS save or be dominated until the end of your next turn (as Dominate Person/Monster appropriate to type). 1/short rest.",
          },
        ],
        17: [
          {
            name: "Mass Override",
            description:
              "1/long rest: cast Mass Suggestion without a slot. While any target remains affected, you have advantage on social checks against them.",
          },
        ],
      },
    },

    "Void Study": {
      branchPath: "Void",
      tagline: "Edges, vectors, and the pressure of nothing.",
      progression: {
        3: [
          {
            name: "Gravitic Tug",
            description:
              "Action: one creature within 30 ft STR save or be pulled 10 ft toward you and take force damage = PB.",
          },
          {
            name: "Bonus Spells",
            description: "Always prepared: Misty Step, Levitate.",
          },
        ],
        5: [
          {
            name: "Rift Step",
            description:
              "When you cast a spell, teleport up to 30 ft and deal force damage = PB to a creature adjacent to your start or end point.",
          },
        ],
        9: [
          {
            name: "Event Horizon",
            description:
              "Bonus action (1/long rest): 10-ft aura for 1 minute (concentration). The area is difficult terrain for enemies; first time each round a hostile ends movement in the aura, STR save or be pulled 10 ft toward you and take force damage = PB.",
          },
        ],
        13: [
          {
            name: "Singular Strike",
            description:
              "Once per turn after you teleport, add 1d8 force damage to one attack and you can knock the target prone if it fails a STR save.",
          },
        ],
        17: [
          {
            name: "Micro Black Hole",
            description:
              "1/long rest: create a 20-ft-radius sphere (60-ft range, conc., up to 1 minute). Creatures starting their turn in it STR save or be restrained and take 4d8 force; on success, half and not restrained. A restrained creature repeats the save at end of turn.",
          },
        ],
      },
    },

    "Soulcraft Study": {
      branchPath: "Soulcraft",
      tagline: "Wards, bindings, and the economy of spirit.",
      progression: {
        3: [
          {
            name: "Warding Spirit",
            description:
              "Bonus action: ward a creature within 30 ft for 1 minute. The first time each round it takes damage, reduce by PB. Uses/long rest = PB.",
          },
          {
            name: "Bonus Spells",
            description:
              "Always prepared: Protection from Evil and Good, Gentle Repose.",
          },
        ],
        5: [
          {
            name: "Bind Malice",
            description:
              "Action: one creature within 60 ft CHA save or it can’t regain HP or gain temp HP until the start of your next turn.",
          },
        ],
        9: [
          {
            name: "Soul Aegis",
            description:
              "You and allies within 10 ft have resistance to necrotic damage and advantage on saves vs possession and fear.",
          },
        ],
        13: [
          {
            name: "Spirit Intercession",
            description:
              "When you or an ally within 30 ft would drop to 0 HP, you can instead drop them to 1 HP (1/long rest).",
          },
        ],
        17: [
          {
            name: "Exorcism Pulse",
            description:
              "1/long rest: 30-ft burst. Each creature of your choice must CHA save; on a fail, one charm/frighten/possession/curse effect ends and it takes 4d8 radiant; on success, effects are suppressed until the end of your next turn.",
          },
        ],
      },
    },
  },

  // ——— DESIGN NOTES ———
  design_notes: {
    concept:
      "Warlock remap where ‘patron’ = dangerous research. Branches are illicit disciplines. Pact cadence fits noir ops: burst, regroup, analyze.",
    tone: "Cold intellect; curiosity with teeth.",
    balance_notes: [
      "Insights mirror invocations (2 at 2nd, then 5/7/9/12/15/18).",
      "Mystic Arcanum re-flavored as Grand Theorems at 11/13/15/17 (6/7/8/9).",
      "Analytic Curse ≈ Hex but short-rest gated and check-disadvantage is utility, not save debuff.",
      "Branch spikes at 5/9/13/17 emphasize control/mobility/defense, not raw DPR creep.",
    ],
    rules_consistency:
      "All save DCs use 8 + PB + INT. Counter/Dispel boosters gated to short-rest cadence to avoid hard-lock metas.",
  },
};
