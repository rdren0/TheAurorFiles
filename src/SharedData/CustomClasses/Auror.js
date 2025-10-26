export const auror = {
  id: "auror",
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

  // ---------- Core Level Features (shared) ----------
  level_features: [
    {
      level: 1,
      features: [
        {
          name: "Detect Residual Magic",
          description:
            "As an action, sense lingering magical auras (recent spellcasting, curses, hex residue) within 30 ft until end of your next turn. Uses/long rest = proficiency bonus.",
        },
        {
          name: "Restorative Charm",
          description:
            "Maintain a healing/cleansing pool equal to 5 × your Auror level, used via touch. See Class Resources.",
        },
      ],
    },
    {
      level: 2,
      features: [
        {
          name: "Combat Doctrine (Fighting Style)",
          description: "Choose one style.",
          options: [
            {
              name: "Disarming Duelist",
              description:
                "+1 to hit with melee weapon or wand attacks. On a hit, force a STR save (DC = 8 + PB + ability mod); on a failure, the target drops one held item of your choice.",
            },
            { name: "Defense", description: "+1 AC while wearing armor." },
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
            "When you hit with a melee weapon or wand attack, expend a spell slot to deal extra radiant or force damage: +2d8 for a 1st-level slot, +1d8 per slot level above 1st (max +5d8). If the target cast a spell since the start of its last turn or is under a magical effect, add +1d8.",
        },
      ],
    },
    {
      level: 3,
      features: [
        {
          name: "Mandate (Oath)",
          description:
            "Choose a Mandate at 3rd level. Your Mandate grants features at levels 3, 5, 7, 9, 13, and 17.",
          branches: ["Justice", "Redemption", "Veil", "Retribution"],
          branch_milestone: true,
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
                "Reaction: impose disadvantage on an attack vs a creature within 5 ft.",
            },
            {
              name: "Hex Disruptor",
              effect:
                "Once per short rest, when you hit with Discharge Hex, also force a CON save or break concentration.",
            },
            {
              name: "Swift Apprehension",
              effect:
                "+10 ft speed; opportunity attacks against you have disadvantage while moving toward a creature you've marked or targeted with a Mandate feature.",
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
          description: "Attack twice when you take the Attack action.",
        },
        {
          name: "Field Aegis (Proto-Aura)",
          description:
            "Once per short or long rest, as a bonus action you emanate a 10-ft radius field for 1 minute. Allies inside gain +1 to saves vs spells and advantage on checks to escape grapples/restraints.",
        },
        {
          name: "Mandate Progression (5th)",
          description:
            "Your chosen Mandate grants an additional feature (see branches[branch].progression[5]).",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },
    {
      level: 6,
      features: [
        {
          name: "Auror's Resilience",
          description:
            "Choose a damage type tied to your Mandate: Justice (radiant), Redemption (psychic), Veil (force), Retribution (necrotic). You gain resistance to that type. You also have advantage on saves against spells cast by creatures you've marked or targeted with Mandate features.",
        },
        {
          name: "Improved Restorative Charm",
          description:
            "Expend 10 Restorative points to end one curse or magical effect of 3rd level or lower on a creature you touch.",
        },
      ],
    },
    {
      level: 7,
      features: [
        {
          name: "Greater Field Aegis",
          description:
            "Your Field Aegis radius becomes 15 ft and uses increase to 2/short rest. Choose an enhancement based on your Mandate whenever your Aegis is active (see branches).",
        },
        {
          name: "Mandate Progression (7th)",
          description:
            "Your Mandate grants enhanced abilities (see branches[branch].progression[7]).",
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
          description: "Increase one ability by +2, or two by +1, or a feat.",
        },
      ],
    },
    {
      level: 9,
      features: [
        {
          name: "Superior Discharge Hex",
          description:
            "Your Discharge Hex maximum increases to +6d8 (with a 5th-level slot). On a critical hit with an attack empowered by Discharge Hex, the target must succeed on a WIS save or be stunned until the end of your next turn (once per turn).",
        },
        {
          name: "Mandate Progression (9th)",
          description:
            "Your Mandate reaches expert tier (see branches[branch].progression[9]).",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },
    {
      level: 10,
      features: [
        {
          name: "Auror Aura",
          description:
            "Passive 10-ft aura: you and allies within gain +1 to saving throws against spells and magical effects. You may still activate Field Aegis for stronger effects.",
        },
      ],
    },
    {
      level: 11,
      features: [
        {
          name: "Enhanced Discharge Hex",
          description:
            "Discharge Hex deals +1d8 extra damage against a creature concentrating on a spell or under a magical effect. Also, when you hit with Discharge Hex, you may force a Concentration check as if the target took an additional 2d8 damage (no save).",
        },
      ],
    },
    {
      level: 12,
      features: [
        {
          name: "Ability Score Improvement",
          description: "Increase one ability by +2, or two by +1, or a feat.",
        },
      ],
    },
    {
      level: 13,
      features: [
        {
          name: "Mandate Mastery",
          description:
            "You can use Oathbinding Focus features twice per short rest (instead of once). While within your Auror Aura, your spell save DC and spell attack bonus each increase by +1.",
        },
        {
          name: "Mandate Progression (13th)",
          description:
            "Your Mandate reaches master tier (see branches[branch].progression[13]).",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },
    {
      level: 14,
      features: [
        {
          name: "Cleansing Touch",
          description:
            "Action: end one spell or magical effect on yourself or a touched creature. Effects of 5th level or lower automatically end; for 6th+, make a casting-ability check vs DC 10 + spell level. Uses: PB/long rest.",
        },
      ],
    },
    {
      level: 15,
      features: [
        {
          name: "Greater Auror Aura",
          description:
            "Aura radius increases to 30 ft; bonus becomes +2 to saves vs spells/magical effects. Allies in the aura also gain resistance to one damage type of your choice (choose each long rest).",
        },
      ],
    },
    {
      level: 16,
      features: [
        {
          name: "Ability Score Improvement",
          description: "Increase one ability by +2, or two by +1, or a feat.",
        },
      ],
    },
    {
      level: 17,
      features: [
        {
          name: "Mandate Progression (17th)",
          description:
            "Your Mandate achieves legendary power (see branches[branch].progression[17]).",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },
    {
      level: 18,
      features: [
        {
          name: "Auror's Vitality",
          description:
            "At the start of each of your turns while conscious and below half HP, regain HP equal to 5 + your casting_ability_mod. Does not function at 0 HP.",
        },
      ],
    },
    {
      level: 19,
      features: [
        {
          name: "Ability Score Improvement",
          description: "Increase one ability by +2, or two by +1, or a feat.",
        },
      ],
    },
    {
      level: 20,
      features: [
        {
          name: "Avatar of the Mandate",
          description:
            "You embody your Mandate. \n• Your Auror Aura radius increases to 30 ft. \n• Once on each of your turns, you can apply Discharge Hex without expending a spell slot. \n• You are immune to charm, fear, and magical sleep. \n• Avatar State (1/long rest, bonus action, 1 minute): you and allies in your aura have advantage on saves vs spells; enemies in your aura have disadvantage on saves vs your Auror spells and Mandate features; your weapon attacks crit on 19–20.",
        },
      ],
    },
  ],

  // ---------- Branches: explicit progression tree ----------
  branches: {
    Justice: {
      branchPath: "Justice",
      tagline: "Truth pursued, lies dismantled.",
      progression: {
        3: [
          {
            name: "Bonus Spells (Justice)",
            description:
              "Always prepared: Zone of Truth, Hold Person (don’t count against limit).",
          },
          {
            name: "Oathbinding Focus — True Bearing (Channel Divinity)",
            description:
              "Bonus action; choose a creature within 60 ft for 1 minute. You have advantage on checks to track/perceive/discern truth regarding it; your attacks against it ignore half and three-quarters cover. Uses: 1/short or long rest.",
          },
          {
            name: "Oathbinding Focus — Countercurse Pulse (Channel Divinity)",
            description:
              "Action; emit a 10-ft pulse. Each creature of your choice must make a CON save or one spell effect of 2nd level or lower on it is suppressed until the start of your next turn.",
          },
        ],
        5: [
          {
            name: "Incontrovertible Proof",
            description:
              "Creatures affected by your True Bearing have disadvantage on Deception checks against you and allies within your Field Aegis.",
          },
        ],
        7: [
          {
            name: "Witness Protection",
            description:
              "Allies within your Field Aegis cannot be surprised and add your PB to initiative. They have advantage on Insight checks to detect lies.",
          },
        ],
        9: [
          {
            name: "Inescapable Justice",
            description:
              "Creatures under your True Bearing can't turn invisible or teleport. 1/long rest you can cast Zone of Truth without a slot; creatures have disadvantage on its save.",
          },
        ],
        13: [
          {
            name: "Truth Incarnate",
            description:
              "1/long rest, activate a 15-ft aura for 1 minute: creatures in the aura can't lie (as Zone of Truth). Illusions in the aura are suppressed (as Dispel Magic vs 3rd; higher-level illusions contest with a check).",
          },
        ],
        17: [
          {
            name: "Final Judgment",
            description:
              "1/long rest, cast Plane Shift (hostile target only) without a slot. While Truth Incarnate is active, a creature that knowingly lies takes 3d10 psychic damage (once per creature per round).",
          },
        ],
      },
    },

    Redemption: {
      branchPath: "Redemption",
      tagline: "Mercy with a spine.",
      progression: {
        3: [
          {
            name: "Bonus Spells (Redemption)",
            description: "Always prepared: Calm Emotions, Sanctuary.",
          },
          {
            name: "Oathbinding Focus — Restraining Word",
            description:
              "Bonus action; a creature within 30 ft makes a WIS save. On a fail, its speed is 0 and it can't take reactions until the start of your next turn.",
          },
          {
            name: "Oathbinding Focus — Shield the Innocent",
            description:
              "Reaction when a creature within 30 ft is hit: reduce damage by 2d8 + proficiency bonus.",
          },
        ],
        5: [
          {
            name: "Pacifying Presence",
            description:
              "Creatures of your choice that start their turn within your Field Aegis must succeed on a WIS save or have disadvantage on attack rolls until the start of their next turn.",
          },
        ],
        7: [
          {
            name: "Sanctuary Pulse",
            description:
              "1/short rest, when you activate Field Aegis, emit a pulse: creatures of your choice within 30 ft must make a CHA save or be unable to attack you/your allies until end of their next turn.",
          },
        ],
        9: [
          {
            name: "Redemptive Strike",
            description:
              "When you would reduce a creature to 0 HP with Discharge Hex, you may instead leave it at 1 HP, unconscious and stable. Also, cast Calm Emotions PB times/long rest without a slot.",
          },
        ],
        13: [
          {
            name: "Sacrifice Ward",
            description:
              "When a creature within 30 ft would drop to 0 HP, reaction: teleport adjacent and take the damage instead. If this would drop you to 0, you drop to 1 HP instead. Uses: 1/long rest.",
          },
        ],
        17: [
          {
            name: "Martyr's Blessing",
            description:
              "The first time each long rest you'd drop to 0 HP, drop to 1 HP instead and emit a 30-ft burst: allies regain 25 HP, gain immunity to fear for 1 minute, and have advantage on their next attack or save.",
          },
        ],
      },
    },

    Veil: {
      branchPath: "Veil",
      tagline: "Secrets kept. Threats unseen.",
      progression: {
        3: [
          {
            name: "Bonus Spells (Veil)",
            description: "Always prepared: Silence, Invisibility.",
          },
          {
            name: "Oathbinding Focus — Memory Seal",
            description:
              "Action; touch a willing creature. For 1 hour, it can't be magically read (thoughts, alignment, surface memories). Uses: 1/short or long rest.",
          },
          {
            name: "Oathbinding Focus — Obscuring Ward",
            description:
              "Bonus action; 10-ft-radius veil centered on you for 1 minute. Allies inside have advantage on Stealth; ranged attacks from outside vs targets inside have disadvantage.",
          },
        ],
        5: [
          {
            name: "Quiet Step",
            description:
              "Allies in your Field Aegis ignore nonmagical difficult terrain and gain +5 to Stealth checks.",
          },
        ],
        7: [
          {
            name: "Obscuring Mist",
            description:
              "While your Field Aegis is active, the area is lightly obscured to enemies outside. Allies inside see normally. Ranged attacks from outside against creatures inside have disadvantage.",
          },
        ],
        9: [
          {
            name: "Shadow Step",
            description:
              "Bonus action in dim light/darkness: teleport up to 60 ft to dim light/darkness you can see; you may bring one willing adjacent ally. Uses: PB/long rest.",
          },
        ],
        13: [
          {
            name: "Greater Invisibility",
            description:
              "Cast Greater Invisibility on yourself PB times/long rest without a slot. While invisible, your first attack each turn deals +2d6 force damage.",
          },
        ],
        17: [
          {
            name: "Master of Shadows",
            description:
              "Gain Truesight 60 ft. 1/long rest, cast Etherealness without expending a slot.",
          },
        ],
      },
    },

    Retribution: {
      branchPath: "Retribution",
      tagline: "Hunt the wicked; end the threat.",
      progression: {
        3: [
          {
            name: "Bonus Spells (Retribution)",
            description: "Always prepared: Hunter's Mark, Branding Smite.",
          },
          {
            name: "Oathbinding Focus — Mark the Guilty",
            description:
              "Bonus action; mark a creature within 60 ft for 1 minute. Your first attack against it each turn deals +PB radiant damage; you have advantage on checks to track it.",
          },
          {
            name: "Oathbinding Focus — Spellbreaker",
            description:
              "When a creature within 30 ft begins casting a spell, reaction: impose disadvantage on its spell attacks until end of turn or grant advantage on saves against that spell.",
          },
        ],
        5: [
          {
            name: "Relentless Pursuit",
            description:
              "When your marked target moves, reaction: move up to half your speed toward it without provoking opportunity attacks.",
          },
        ],
        7: [
          {
            name: "Hunter's Mark (Enhanced)",
            description:
              "Your Mark the Guilty lasts 1 hour; you sense the target's general direction and distance within 1 mile. The first time each turn you hit it, it takes +2d6 radiant damage.",
          },
        ],
        9: [
          {
            name: "Executioner's Focus",
            description:
              "When you hit your Marked target, force a CON save. On a fail: +4d8 radiant damage and blinded until end of your next turn; on a success: half damage, not blinded. Uses: casting_ability_mod/long rest.",
          },
        ],
        13: [
          {
            name: "Overwhelming Vengeance",
            description:
              "When a creature you've Marked damages you or an ally within 30 ft, reaction: make a weapon attack with advantage; on hit, add radiant damage equal to your Auror level.",
          },
        ],
        17: [
          {
            name: "Death Sentence",
            description:
              "Once per long rest, when you hit a creature with Discharge Hex, pronounce a death sentence for 1 minute: the creature has vulnerability to your weapon attacks and Discharge Hex damage and can't regain HP (ends early if you’re incapacitated).",
          },
        ],
      },
    },
  },

  design_notes: {
    concept:
      "Paladin-adjacent oath class focused on anti-magic control, protection, and lawful apprehension.",
    tone: "Lawful but haunted; justice in a morally gray world.",
    balance_notes: [
      "Smite/Hex damage tracks standard Divine Smite ceilings with narrow anti-magic riders.",
      "Aegis at 5 is a modest burst aura; permanent aura at 10, bigger at 15 to avoid early overshadowing.",
      "Restorative pool fixed at 5 × level; condition/curse clearing is level-gated.",
      "Mandate spikes at 5/7/9/13/17 with bounded uses; strong but not unkillable capstone.",
    ],
  },
};
