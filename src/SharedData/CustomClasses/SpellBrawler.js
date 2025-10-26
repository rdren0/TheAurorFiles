export const spellbrawler = {
  id: "spellbrawler",
  name: "Spellbrawler",
  type: "Fighter",
  description:
    "Underground duelists who fuse brutal combat with crude runecraft. They carve sigils into scar and steel, swing wands like batons, and make pain pay dividends.",

  hit_die: "d10",
  primary_abilities: ["Strength", "Constitution", "Dexterity"],
  saving_throws: ["Strength", "Constitution"],
  armor_proficiencies: ["Light Armor", "Medium Armor", "Shields"],
  weapon_proficiencies: [
    "Simple Weapons",
    "Martial Weapons",
    "Improvised Weapons",
    "Wands (treated as clubs)",
  ],
  skill_proficiencies: {
    choose: 2,
    from: [
      "Athletics",
      "Intimidation",
      "Perception",
      "Sleight of Hand",
      "Survival",
      "Acrobatics",
    ],
  },

  // ——— RUNECRAFT (no spell slots) ———
  spellcasting: {
    progression_type: "rune-based",
    casting_ability: "Constitution",
    attack_mod: "proficiency_bonus + Constitution_mod",
    save_dc: "8 + proficiency_bonus + Constitution_mod",
    notes:
      "You inscribe runes during rests. Each inscribed rune grants a passive benefit and a once-per-trigger active you fuel with Rune Charges. You can change your inscribed runes on a long rest.",
    rune_capacity_by_level: { 3: 2, 7: 3, 10: 4, 15: 5, 18: 6 }, // total simultaneously inscribed
  },

  // ——— CLASS RESOURCES ———
  class_resources: [
    {
      name: "Rune Charges",
      recovery: "Short Rest",
      uses_formula: "max(2, Constitution_mod + proficiency_bonus)", // steady scaling
      description:
        "Fuel to trigger rune actives. You can spend at most 1 Rune Charge per turn unless a feature says otherwise.",
    },
    {
      name: "Shake It Off",
      recovery: "Short Rest",
      uses_per_rest_by_level: { 1: 1, 10: 2, 18: 3 },
      description:
        "Bonus action: healing sigils flare across your scars. Regain 1d10 + your Spellbrawler level HP.",
    },
    {
      name: "Push Through",
      recovery: "Short Rest",
      uses_per_rest_by_level: { 2: 1, 17: 2 },
      description:
        "On your turn, take one additional action. Your runes sear you for 1d4 fire damage that ignores resistance and reduction.",
    },
  ],

  // ——— LEVEL FEATURES ———
  level_features: [
    {
      level: 1,
      features: [
        {
          name: "Fighting Style",
          description: "Choose one pit-honed specialty.",
          options: [
            {
              name: "Cage Fighter",
              description: "+1 AC while an enemy is within 5 ft of you.",
            },
            {
              name: "Dirty Fighter",
              description:
                "Your unarmed and improvised weapon attacks deal +1d4 damage.",
            },
            {
              name: "Berserker Charge",
              description:
                "After you Dash, you can make one melee weapon attack as a bonus action.",
            },
          ],
        },
        {
          name: "Shake It Off",
          description:
            "Bonus action self-heal: 1d10 + level HP (uses scale; see Class Resources).",
        },
        {
          name: "Brawler’s Kit",
          description:
            "Improvised weapons you wield count as clubs (d6 bludgeoning) and are considered proficient. If it’s got heft, it hurts.",
        },
      ],
    },

    {
      level: 2,
      features: [
        {
          name: "Push Through",
          description:
            "Take one additional action and take 1d4 unpreventable fire damage.",
        },
        {
          name: "Scar Ignition",
          description:
            "When you spend a Rune Charge, you gain temporary HP equal to your proficiency bonus (once per turn).",
        },
      ],
    },

    {
      level: 3,
      features: [
        {
          name: "Rune Carver",
          description:
            "During a long rest, inscribe a number of runes up to your rune capacity. Each rune grants a passive benefit while inscribed and an active you can trigger by spending 1 Rune Charge unless otherwise stated.",
          rune_list: [
            {
              name: "Blood Rune",
              passive: "While below half HP, you add +2 to damage rolls.",
              active:
                "Next hit deals 2d6 necrotic and you heal half that damage.",
            },
            {
              name: "Iron Rune",
              passive: "+1 AC while not wearing heavy armor.",
              active: "Reaction when hit: reduce damage by 2d6 + CON mod.",
            },
            {
              name: "Storm Rune",
              passive: "You can't be paralyzed.",
              active:
                "Your next attack has advantage and deals +1d8 lightning.",
            },
            {
              name: "Beast Rune",
              passive: "Advantage on Intimidation checks.",
              active:
                "Gain 15 temp HP; your melee hits push 10 ft (STR save negates).",
            },
            {
              name: "Shadow Rune",
              passive: "Darkvision 60 ft (or +30 ft if you already have it).",
              active:
                "Bonus action: teleport up to 30 ft to a space you can see.",
            },
            {
              name: "Ember Rune",
              passive: "Resistance to fire damage.",
              active:
                "Wreathe fists/blade for 1 minute: your melee hits add +1d4 fire.",
            },
            {
              name: "Graviton Rune",
              passive: "You ignore nonmagical difficult terrain.",
              active:
                "Pull a creature you can see within 20 ft 10 ft straight toward you (STR save).",
            },
            {
              name: "Mirror Rune",
              passive: "+1 on saves vs spells.",
              active:
                "Reaction when targeted by an attack: impose disadvantage.",
            },
          ],
        },
        {
          name: "Spellbrawler Archetype",
          description: "Choose a background from the rings.",
          options: [
            {
              name: "Pit Fighter",
              features: [
                {
                  name: "Brutal Strikes",
                  description:
                    "Your melee critical hits knock the target prone. When you crit, you can activate one rune without spending a Rune Charge.",
                },
                {
                  name: "Scarred Veteran",
                  description:
                    "Advantage on saving throws against fear. Add your CON modifier to death saving throws.",
                },
              ],
            },
            {
              name: "Gang Enforcer",
              features: [
                {
                  name: "Pack Fighter",
                  description:
                    "If an ally is within 5 ft of your target, your attacks deal +1d4 damage.",
                },
                {
                  name: "Threatening Presence",
                  description:
                    "Enemies have disadvantage on opportunity attacks against your allies within 5 ft of you.",
                },
              ],
            },
            {
              name: "Prize Fighter",
              features: [
                {
                  name: "Crowd Pleaser",
                  description:
                    "When you reduce a creature to 0 HP, you regain 1 Rune Charge (once per turn).",
                },
                {
                  name: "Champion’s Resilience",
                  description:
                    "When you succeed on a saving throw against a spell, you regain 1 Rune Charge (once per short rest).",
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
        { name: "Ability Score Improvement", description: "ASI / feat." },
      ],
    },

    {
      level: 5,
      features: [
        {
          name: "Extra Attack",
          description: "When you take the Attack action, you can attack twice.",
        },
        {
          name: "Knuckle Sigils",
          description:
            "Your unarmed strikes count as magical and use a d6 damage die (d8 at 11th).",
        },
      ],
    },

    {
      level: 6,
      features: [
        {
          name: "Pain into Power",
          description:
            "The first time you take damage each turn, your next attack before the end of that turn gains +PB damage.",
        },
      ],
    },

    {
      level: 7,
      features: [
        {
          name: "Archetype Feature (7th)",
          description: "Your ring background improves.",
        },
        {
          name: "Runic Guard",
          description:
            "While you have at least 1 Rune Charge remaining, you gain +1 AC.",
        },
      ],
    },

    {
      level: 8,
      features: [
        { name: "Ability Score Improvement", description: "ASI / feat." },
      ],
    },

    {
      level: 9,
      features: [
        {
          name: "Refuse the Curse (Indomitable)",
          description:
            "Reroll a failed saving throw. Uses/long rest: 1 (2 at 13th, 3 at 17th).",
        },
      ],
    },

    {
      level: 10,
      features: [
        {
          name: "Expanded Carving",
          description:
            "Your rune capacity increases (see table). When you finish a short rest, you may swap one inscribed rune for another.",
        },
        {
          name: "Second Wind of Steel",
          description:
            "Shake It Off uses increase to 2 per short rest (already reflected in resource). Additionally, when you use Shake It Off, you gain resistance to bludgeoning, piercing, and slashing until the start of your next turn.",
        },
        { name: "Archetype Feature (10th)", description: "Subclass feature." },
      ],
    },

    {
      level: 11,
      features: [
        {
          name: "Extra Attack (2)",
          description:
            "You can attack three times when you take the Attack action.",
        },
        {
          name: "Heavy Hands",
          description:
            "Your unarmed strike damage die becomes d8; improvised melee weapons you wield deal at least d6.",
        },
      ],
    },

    {
      level: 12,
      features: [
        { name: "Ability Score Improvement", description: "ASI / feat." },
      ],
    },

    {
      level: 13,
      features: [
        {
          name: "Refuse the Curse (2)",
          description: "You can use Refuse the Curse twice per long rest.",
        },
      ],
    },

    {
      level: 14,
      features: [
        { name: "Ability Score Improvement", description: "ASI / feat." },
      ],
    },

    {
      level: 15,
      features: [
        {
          name: "Archetype Feature (15th)",
          description: "Subclass master-tier feature.",
        },
        {
          name: "Rune Siphon",
          description:
            "When you reduce a hostile creature to 0 HP, you regain 1 Rune Charge (no limit per turn).",
        },
      ],
    },

    {
      level: 16,
      features: [
        { name: "Ability Score Improvement", description: "ASI / feat." },
      ],
    },

    {
      level: 17,
      features: [
        {
          name: "Push Through (2)",
          description: "You can use Push Through twice per short rest.",
        },
        {
          name: "Refuse the Curse (3)",
          description:
            "You can use Refuse the Curse three times per long rest.",
        },
      ],
    },

    {
      level: 18,
      features: [
        {
          name: "Relentless Runes",
          description:
            "When you roll initiative with 0 Rune Charges, you regain Rune Charges equal to your CON modifier (minimum 2). Your rune capacity increases to 6.",
        },
        {
          name: "Shake It Off (3)",
          description: "You can use Shake It Off three times per short rest.",
        },
        {
          name: "Archetype Feature (18th)",
          description: "Subclass legendary feature.",
        },
      ],
    },

    {
      level: 19,
      features: [
        { name: "Ability Score Improvement", description: "ASI / feat." },
      ],
    },

    {
      level: 20,
      features: [
        {
          name: "Blood-Etched Apex",
          description:
            "For 1 minute (1/long rest), you enter a perfected state: (1) once on each of your turns you can activate a rune without spending a Rune Charge; (2) Push Through does not deal self-damage; (3) you have advantage on attack rolls; (4) your melee and unarmed hits deal +PB force damage; (5) when you use Refuse the Curse, you also gain temp HP equal to PB.",
        },
      ],
    },
  ],

  // ——— SUBCLASS DETAILS ———
  subclasses: {
    "Pit Fighter": {
      branchPath: "PitFighter",
      features_by_level: {
        7: {
          name: "Blood for the Crowd",
          description:
            "When you knock a creature prone, you can move up to half your speed as a free action toward a different enemy and make one melee attack (once per turn).",
        },
        10: {
          name: "Ringside Tough",
          description:
            "You have resistance to damage from opportunity attacks. When a creature misses you with an opportunity attack, you can make a melee weapon attack against it.",
        },
        15: {
          name: "Finish the Bout",
          description:
            "When you hit a creature that is prone, stunned, or restrained, add +PB to the attack’s damage and it must succeed on a Con save (DC = 8 + PB + CON) or be incapacitated until the start of its next turn (once per target per turn).",
        },
        18: {
          name: "Champion of the Pits",
          description:
            "Your critical hit range improves to 19–20 with melee and unarmed attacks.",
        },
      },
    },

    "Gang Enforcer": {
      branchPath: "GangEnforcer",
      features_by_level: {
        7: {
          name: "Lock the Lane",
          description:
            "Creatures you hit can’t take reactions until the start of your next turn.",
        },
        10: {
          name: "Muscle Memory",
          description:
            "When an ally within 10 ft hits a creature, you can use your reaction to move up to 10 ft and make one melee attack against that creature.",
        },
        15: {
          name: "Break Their Nerve",
          description:
            "When you and at least one ally are adjacent to the same enemy, that enemy has disadvantage on attacks against creatures other than you until your next turn.",
        },
        18: {
          name: "Crew Boss",
          description:
            "Your Pack Fighter bonus becomes +1d6, and allies within 10 ft add +1 to attack rolls while adjacent to you.",
        },
      },
    },

    "Prize Fighter": {
      branchPath: "PrizeFighter",
      features_by_level: {
        7: {
          name: "Work the Crowd",
          description:
            "When you spend a Rune Charge, you may grant a visible ally within 30 ft temp HP equal to PB (once per turn).",
        },
        10: {
          name: "Showstopper",
          description:
            "When you use Push Through, choose one: gain +2 AC until start of your next turn, or your next attack deals an extra 2d8 damage.",
        },
        15: {
          name: "Comeback King/Queen",
          description:
            "When you are reduced to 0 HP and not killed outright, drop to 1 HP instead and immediately regain 1 Rune Charge (1/long rest).",
        },
        18: {
          name: "Main Event",
          description:
            "Once per turn when you hit, you can add an additional +PB damage and force the target to make a Wis save (DC = 8 + PB + CON) or become frightened of you until the start of your next turn.",
        },
      },
    },
  },

  // ——— DESIGN NOTES ———
  design_notes: {
    concept:
      "Fighter chassis with a gritty runic engine. No slots—just scars, charges, and choices.",
    tone: "Brutal pragmatist; makes magic bleed.",
    balance_notes: [
      "Rune Charges = PB + CON keeps fuel steady without slot creep.",
      "Push Through mirrors Action Surge but has a real cost (unpreventable chip).",
      "Rune capacity matches Rune Knight–style breadth but with lower ceiling per turn (1 charge/turn).",
      "Fighter pacing: subclass at 3/7/10/15/18; Extra Attack (2) at 11; ASIs at 4/6/8/12/14/16/19.",
      "Capstone grants free rune trigger per turn, not unlimited spam.",
    ],
    rules_consistency:
      "All rune save DCs = 8 + PB + CON. Improvised weapon baseline set; unarmed becomes magical at 5.",
  },
};
