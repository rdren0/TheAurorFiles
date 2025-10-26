export const obscurial = {
  id: "obscurial",
  name: "Obscurial",
  type: "Barbarian",
  description:
    "Witches and wizards whose repressed magic turned inward—volatile, devastating, barely contained. They weaponize raw, wandless power through emotion or endurance, skirting the edge between control and catastrophe.",

  hit_die: "d10",
  primary_abilities: ["Constitution", "Charisma"],
  saving_throws: ["Constitution", "Charisma"],
  armor_proficiencies: ["Light Armor", "Medium Armor"],
  weapon_proficiencies: ["Simple Weapons"],
  tool_proficiencies: [],

  skill_choices: {
    choose: 2,
    options: [
      "Arcana",
      "Insight",
      "Intimidation",
      "Investigation",
      "Perception",
      "Survival",
    ],
  },

  // ——— SPELLCASTING ———
  spellcasting: {
    progression_type: "half-caster",
    casting_ability_choice: ["Constitution", "Charisma"],
    save_dc: "8 + proficiency_bonus + chosen_mod",
    attack_mod: "proficiency_bonus + chosen_mod",
    notes:
      "At 1st level choose Constitution (survival-driven) or Charisma (emotion-driven) for your spellcasting. You cast without a focus by default; doing so risks a Surge.",
    bonus_spells: {
      cantrips: ["Thunderclap", "Chill Touch"], // reflavored as raw lashes of force/decay
      level_1_to_3: [
        "Shield",
        "Absorb Elements",
        "Hellish Rebuke",
        "Thunderwave",
        "Hold Person",
        "Shatter",
        "Blink",
      ],
    },
  },

  // ——— CLASS RESOURCES ———
  class_resources: [
    {
      name: "Wandless Channeling",
      description:
        "When you cast a spell without a focus or wand, choose one: gain advantage on the spell attack OR impose disadvantage on its saving throws. Then roll on the Obscurial Surge table.",
      surge_roll: "d20",
      surge_table: [
        "1 — Misfire: the spell targets you if possible; otherwise it fizzles.",
        "2–3 — Backblast: each creature (including you) within 10 ft takes 1d6 force (no save).",
        "4–5 — Shadow Tax: gain advantage on your next attack this turn; then gain 1 level of exhaustion.",
        "6–10 — Stable Casting: no surge.",
        "11–13 — Jitter Step: after the spell, you teleport 10 ft in a random direction.",
        "14–16 — Phase Flicker: resist all damage until the start of your next turn; you can’t speak until then.",
        "17–18 — Harmonic Draw: your next spell before the end of your next turn is cast as if 1 slot level higher.",
        "19 — Obscurus Skirl: gain temp HP equal to your Obscurial level.",
        "20 — Apex Eruption: gain temp HP equal to your level and your damage rolls deal +PB necrotic until end of next turn.",
      ],
    },
    {
      name: "Obscurial Outburst",
      description:
        "A controlled eruption of the Obscurus. As a bonus action, enter Outburst for 1 minute. While in Outburst: your spell attacks have advantage, your damaging spells and unarmed/simple-weapon attacks deal +PB necrotic or force (your choice each hit), and you have resistance to force and necrotic damage. Each of your turns you take Outburst Strain (see scaling). If you end your turn without casting a spell or making an attack, Outburst ends.",
      uses: "proficiency_bonus per long rest",
      strain: {
        2: "1d6 self damage at end of your turn (can’t be reduced).",
        11: "1d8 self damage.",
        17: "1d10 self damage.",
      },
    },
  ],

  // ——— LEVEL FEATURES ———
  level_features: [
    {
      level: 1,
      features: [
        {
          name: "Unstable Magic",
          description:
            "You can cast using your chosen ability (Con or Cha). When you cast without a focus, you may trigger Wandless Channeling.",
        },
        {
          name: "Unarmored Defense",
          description:
            "While not wearing armor or wielding a shield, your AC = 10 + Dexterity_mod + chosen_mod.",
        },
        {
          name: "Repressed Power",
          description:
            "When damage would drop you below half your HP (rounded down), you may burst: creatures of your choice within 5 ft take 1d6 force (Con save for half, DC = your save DC). Uses: 1/long rest.",
        },
      ],
    },

    {
      level: 2,
      features: [
        {
          name: "Obscurial Outburst",
          description:
            "Bonus action enter Outburst for 1 minute; see Class Resources. Uses: PB/long rest. Strain: 1d6/turn (can’t be reduced).",
        },
        {
          name: "Danger Sense (Arcane)",
          description:
            "You have advantage on Dexterity saves vs spells and magical effects you can see.",
        },
      ],
    },

    {
      level: 3,
      features: [
        {
          name: "Manifestation Path",
          description:
            "Choose how your Obscurus expresses itself: Decaying Touch, Icy Grasp, or Eyes of Blight. You gain its 3rd-level features now, and more at 5, 9, 13, and 17.",
          branches: ["Decaying Touch", "Icy Grasp", "Eyes of Blight"],
          branch_milestone: true,
        },
      ],
    },

    {
      level: 4,
      features: [
        {
          name: "Ability Score Improvement",
          description:
            "Increase one ability by +2, or two by +1, or choose a feat.",
        },
      ],
    },

    {
      level: 5,
      features: [
        {
          name: "Extra Attack",
          description:
            "When you take the Attack action, you can attack twice instead of once.",
        },
        {
          name: "Controlled Fury",
          description:
            "While in Outburst, your damaging spells and attacks deal an additional +PB damage (stacks with Outburst’s base +PB). At the end of Outburst, roll once on the Surge table. Strain increases to 1d8/turn at 11th level.",
        },
        {
          name: "Path Feature (5th)",
          description: "Gain your Path’s 5th-level feature.",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },

    {
      level: 6,
      features: [
        {
          name: "Surge Shaping",
          description:
            "When you roll on the Surge table, roll twice and choose one result (once per short rest). Additionally, you can ignore one Surge result 1/long rest.",
        },
        {
          name: "Bulwark of Will",
          description:
            "Advantage on checks to maintain concentration. When you take damage from your own Strain, you have resistance to the next damage you take before your next turn.",
        },
      ],
    },

    {
      level: 7,
      features: [
        {
          name: "Obscurial Resilience",
          description:
            "While in Outburst, you have resistance to bludgeoning, piercing, and slashing damage from spells and magical attacks.",
        },
      ],
    },

    {
      level: 8,
      features: [
        {
          name: "Ability Score Improvement",
          description:
            "Increase one ability by +2, or two by +1, or choose a feat.",
        },
      ],
    },

    {
      level: 9,
      features: [
        {
          name: "Repressed Power (2d6)",
          description:
            "Your defensive burst deals 2d6 force, and you can use it twice per long rest.",
        },
        {
          name: "Path Feature (9th)",
          description: "Gain your Path’s 9th-level feature.",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },

    {
      level: 10,
      features: [
        {
          name: "Obscurial Ward",
          description:
            "You can grant yourself temp HP equal to your proficiency bonus at the start of each of your turns while in Outburst.",
        },
        {
          name: "Surge Denial",
          description:
            "When you would roll on the Surge table, you can instead take 1d6 force damage to treat the result as 6–10 (Stable Casting). Uses: PB/long rest.",
        },
      ],
    },

    {
      level: 11,
      features: [
        {
          name: "Potent Outburst",
          description:
            "Outburst Strain becomes 1d8/turn. Your Outburst bonus damage applies to opportunity attacks and reactions you make.",
        },
      ],
    },

    {
      level: 12,
      features: [
        {
          name: "Ability Score Improvement",
          description:
            "Increase one ability by +2, or two by +1, or choose a feat.",
        },
      ],
    },

    {
      level: 13,
      features: [
        {
          name: "Controlled Instability",
          description:
            "When you cast a spell using a slot, choose one amplification: (a) Empowered Fury: add +PB to one damage roll; (b) Distorted Flow: the spell ignores one resistance of your choice; (c) Corrosive Focus: creatures have disadvantage on the save against the spell. Then roll d6 Backlash: 1) take 2d6 force; 2) speed halved until your next turn; 3) lose concentration; 4–6) no backlash. Uses/long rest = PB.",
        },
        {
          name: "Path Feature (13th)",
          description: "Gain your Path’s 13th-level feature.",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },

    {
      level: 14,
      features: [
        {
          name: "Relentless Obscurus",
          description:
            "When you roll initiative and have no Outburst uses, regain 1. Also, once on each of your turns when you hit with a spell or weapon attack against a creature that damaged you since your last turn, add 1d6 necrotic.",
        },
      ],
    },

    {
      level: 15,
      features: [
        {
          name: "Ability Score Improvement",
          description:
            "Increase one ability by +2, or two by +1, or choose a feat.",
        },
      ],
    },

    {
      level: 16,
      features: [
        {
          name: "Iron Will",
          description:
            "You are immune to being frightened while in Outburst. When you succeed on a save vs charm, you can force the source to make a Con save or take 2d6 psychic.",
        },
      ],
    },

    {
      level: 17,
      features: [
        {
          name: "Overclocked Outburst",
          description:
            "Strain becomes 1d10/turn. While in Outburst, you can cast one Obscurial spell as a bonus action (1/turn).",
        },
        {
          name: "Path Feature (17th)",
          description: "Gain your Path’s 17th-level feature.",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },

    {
      level: 18,
      features: [
        {
          name: "Cataclysm Sheath",
          description:
            "While below half HP, you have resistance to all damage from spells. When you drop a creature to 0 HP, you may immediately roll the Surge table and choose the result.",
        },
      ],
    },

    {
      level: 19,
      features: [
        {
          name: "Ability Score Improvement",
          description:
            "Increase one ability by +2, or two by +1, or choose a feat.",
        },
      ],
    },

    {
      level: 20,
      features: [
        {
          name: "Master of the Obscurus",
          description:
            "Perfect control for 1 minute (1/long rest): Outburst costs no uses and inflicts no Strain; your Wandless Channeling doesn’t trigger Surges; your spells and attacks deal +2×PB bonus damage; you have advantage on all saves vs spells; and you can maintain concentration on one additional spell (if both require concentration, you make concentration checks for each separately).",
        },
      ],
    },
  ],

  // ——— MANIFESTATION PATHS (Skill-Tree) ———
  branches: {
    "Decaying Touch": {
      branchPath: "Decay",
      tagline: "Entropy in your hands—corrosion, rot, and unraveling.",
      progression: {
        3: [
          {
            name: "Wither Mark",
            description:
              "Bonus action mark a creature you can see (1 minute, no conc.). The first time each turn you hit it with a spell or weapon attack, it takes +1d4 necrotic. Uses/long rest = PB.",
          },
          {
            name: "Rust the Edge",
            description:
              "When a marked creature hits you with a weapon attack, reduce that weapon’s damage rolls by 1d4 until the end of its next turn (no stack).",
          },
        ],
        5: [
          {
            name: "Unraveling Pulse",
            description:
              "When you deal necrotic to a marked creature, it makes a Con save; on a fail, it can’t regain HP until the start of your next turn.",
          },
        ],
        9: [
          {
            name: "Entropic Sweep",
            description:
              "Action: 15-ft cone; creatures save Con or take 3d6 necrotic and −10 ft speed until the end of their next turn (half/no slow on success). Uses/short rest = 1.",
          },
        ],
        13: [
          {
            name: "Sunder Wards",
            description:
              "When you hit a marked creature, you may attempt to dispel one effect on it as if casting Dispel Magic using your Obscurial level as the check bonus. Uses/long rest = PB.",
          },
        ],
        17: [
          {
            name: "Total Rot",
            description:
              "Once/long rest when you hit a marked target, it becomes vulnerable to necrotic until the end of your next turn and its resistances (if any) to nonmagical B/P/S are suppressed.",
          },
        ],
      },
    },

    "Icy Grasp": {
      branchPath: "Frost",
      tagline: "Cold as denial—freezing impulse, halting motion.",
      progression: {
        3: [
          {
            name: "Frostbite Lash",
            description:
              "When you deal cold damage, add your chosen casting ability modifier to one damage roll of the spell (once/turn).",
          },
          {
            name: "Hoarfrost Ward",
            description:
              "While in Outburst, creatures that hit you with melee attacks take cold damage equal to your PB.",
          },
        ],
        5: [
          {
            name: "Ice Shackles",
            description:
              "When you hit with a spell or weapon attack, you can reduce the target’s speed by 10 ft until the end of your next turn (no save).",
          },
        ],
        9: [
          {
            name: "Glacial Surge",
            description:
              "When you roll 14–16 or 19–20 on the Surge table, you can also create difficult terrain ice in a 10-ft radius centered on you until start of your next turn.",
          },
        ],
        13: [
          {
            name: "Absolute Zero (Stasis)",
            description:
              "1/short rest as a bonus action, choose a creature within 30 ft. It must Con save or be restrained by ice until the end of your next turn; attacks against it have advantage.",
          },
        ],
        17: [
          {
            name: "Permafrost",
            description:
              "Your cold damage ignores resistance and treats immunity as resistance against creatures currently affected by your Ice Shackles or Stasis.",
          },
        ],
      },
    },

    "Eyes of Blight": {
      branchPath: "Blight",
      tagline:
        "Fear, pressure, and psychic static—an Obscurus that stares back.",
      progression: {
        3: [
          {
            name: "Dread Gaze",
            description:
              "As a bonus action, force one creature within 30 ft to make a Wis save. On a fail, it is frightened of you until the start of your next turn. Uses/long rest = PB.",
          },
          {
            name: "Psychic Scour",
            description:
              "When a frightened creature you can see takes damage from you, add +PB psychic (once per creature per turn).",
          },
        ],
        5: [
          {
            name: "Mind Rattle",
            description:
              "When you deal psychic damage, the target has disadvantage on its next attack roll before the end of its next turn.",
          },
        ],
        9: [
          {
            name: "Silence the Scream",
            description:
              "Creatures frightened by you have disadvantage on Concentration checks and can’t use reactions the turn they become frightened.",
          },
        ],
        13: [
          {
            name: "Crushing Presence",
            description:
              "Action: 10-ft radius aura around you for 1 minute (conc.). Hostiles that start their turn in it must make a Wis save or take 2d6 psychic and have speed halved until start of their next turn. Uses/long rest = 1.",
          },
        ],
        17: [
          {
            name: "Catatonia",
            description:
              "Once per long rest, when you hit a creature frightened of you, it must Con save or be stunned until the end of your next turn.",
          },
        ],
      },
    },
  },

  // ——— DESIGN NOTES ———
  design_notes: {
    concept:
      "Half-caster barbarian: rage → Outburst; reckless magic → Surges. You decide when to risk upside.",
    tone: "Power barely leashed; control bought with scars.",
    balance_notes: [
      "Outburst uses = PB; grants modest stacking DPR (+PB baseline, +PB Controlled Fury) gated by self-damage Strain.",
      "Surge control arrives 6/10 so early levels stay spicy, late game becomes intentional.",
      "Extra Attack at 5 keeps weapon+spell hybrids viable; several features trigger on either.",
      "Path spikes at 3/5/9/13/17 mirror the skill-tree beats you asked for.",
    ],
    rules_consistency:
      "Save DC = 8 + PB + chosen Con/Cha; Outburst Strain damage ignores resistances to prevent trivialization.",
  },
};
