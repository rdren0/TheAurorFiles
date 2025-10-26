export const field_hunter = {
  id: "field_hunter",
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
        "Bonus action to Mark a creature or object within 90 ft for up to 1 hour (no concentration). A Mark ends early if you exceed your concurrent limit.",
        "You always know direction and distance to your Mark (same plane).",
        "Once per turn when you hit your Mark, add your proficiency bonus to the damage.",
        "Advantage on checks to track/locate your Mark; you can re-Mark the same target for free when it drops to 0 HP within 1 minute.",
      ],
    },
  ],

  // ---------- Core Level Features (shared) ----------
  level_features: [
    {
      level: 1,
      features: [
        {
          name: "Hunting Grounds",
          description:
            "Choose one locale: Urban Network, Wilderness, Underways, Coastal, or Arcane Sites. You and allies you lead ignore common travel friction there. Gain advantage on one of Stealth, Survival, or Investigation checks related to track/travel in that locale. Gain an additional locale at level 5.",
        },
        {
          name: "Contract Mark",
          description:
            "You learn to bind a limited pursuit sigil—see Contract Marks. The first time you Mark a target each encounter, gain temp HP equal to your Wisdom modifier (min 1).",
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
            "When your Mark you can see attempts to teleport, turn invisible, or change shape, use your reaction to force a Wisdom save (DC = 8 + PB + WIS). On a fail, the effect fizzles and the action is wasted. Uses/long rest = PB.",
        },
      ],
    },
    {
      level: 3,
      features: [
        {
          name: "Ritual Kit (Early-Warning)",
          description:
            "You can ritual-cast Alarm, Detect Magic, and a limited Snare variant without a book.",
        },
        {
          name: "Bounty Appraisal",
          description:
            "After 1 minute examining a creature, scene, or item, learn one concrete fact about its value/origin/risk (GM provides). Advantage on Persuasion to negotiate payment for recoveries and on Insight to spot false leads about your Mark.",
        },
        {
          name: "Branch of the Field",
          description:
            "Choose a specialization at 3rd level. Your Branch grants features at levels 3, 5, 7, 9, 13, and 17.",
          branches: ["Witchcatcher", "Relic Seeker", "Beast Reclaimer"],
          branch_milestone: true,
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
                "When you roll initiative, +10 ft speed until end of your first turn.",
            },
            {
              name: "Ghosted Steps",
              effect:
                "Ignore nonmagical difficult terrain; +1 to Dex (Stealth) checks.",
            },
            {
              name: "Tangle Throw",
              effect:
                "When you hit with a net, add your Wisdom modifier to the escape DC until the start of your next turn.",
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
            "When you Dash, you can short-blink up to 10 ft to a space you can see (once per turn) without provoking opportunity attacks.",
        },
        {
          name: "Contract Lock",
          description:
            "When your Mark would drop to 0 HP, you can instead drop it to 1 HP and bind it for 1 minute (speed 0; can't teleport; disadvantage to escape). Uses: 1/long rest.",
        },
        {
          name: "Branch Progression (5th)",
          description:
            "Gain your Branch’s 5th-level feature (see branches[branch].progression[5]).",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },
    {
      level: 6,
      features: [
        {
          name: "Hunter's Instinct",
          description:
            "Gain proficiency in Wisdom saves if you lack it. You can't be surprised while conscious, and your Mark has disadvantage on Stealth checks against you.",
        },
        {
          name: "Enhanced Contract Mark",
          description:
            "Mark range increases to 120 ft. First-Mark temp HP each encounter becomes 2 × WIS (min 2).",
        },
      ],
    },
    {
      level: 7,
      features: [
        {
          name: "Relentless Pursuit",
          description:
            "Speed +10 ft. When your Mark moves, you may use your reaction to move up to half your speed toward it without provoking opportunity attacks.",
        },
        {
          name: "Branch Progression (7th)",
          description:
            "Gain your Branch’s 7th-level feature (see branches[branch].progression[7]).",
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
            "Increase one ability by +2, or two by +1, or select a feat.",
        },
        {
          name: "Land's Stride",
          description:
            "Nonmagical difficult terrain doesn't slow you; you can pass through nonmagical plants without being slowed or damaged.",
        },
      ],
    },
    {
      level: 9,
      features: [
        {
          name: "Improved Containment Charm",
          description:
            "Containment Charm now interrupts teleportation up to 5th level (e.g., misty step, dimension door). Uses/long rest = PB + WIS.",
        },
        {
          name: "Branch Progression (9th)",
          description:
            "Gain your Branch’s 9th-level feature (see branches[branch].progression[9]).",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },
    {
      level: 10,
      features: [
        {
          name: "Hide in Plain Sight",
          description:
            "Spend 1 minute to create camouflage. You have advantage on Stealth checks while motionless; it ends if you move, attack, or cast.",
        },
        {
          name: "Third Hunting Ground",
          description:
            "Choose a third locale for Hunting Grounds. In one chosen locale you already have, gain expertise: you can't be tracked by nonmagical means there unless you choose to leave a trail.",
        },
      ],
    },
    {
      level: 11,
      features: [
        {
          name: "Superior Contract Mark",
          description:
            "Maintain two Contract Marks simultaneously. Once per turn when you damage a Marked target, add your Wisdom modifier to that damage (not stacking multiple times per turn).",
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
            "Take the Hide action as a bonus action. You can't be tracked by magical means unless you allow it.",
        },
        {
          name: "Branch Progression (13th)",
          description:
            "Gain your Branch’s 13th-level feature (see branches[branch].progression[13]).",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },
    {
      level: 14,
      features: [
        {
          name: "Feral Senses",
          description:
            "Blindsight 30 ft and advantage on initiative. You can see invisible creatures and objects within your blindsight.",
        },
      ],
    },
    {
      level: 15,
      features: [
        {
          name: "Greater Echo Step",
          description:
            "Echo Step distance increases to 30 ft, and you may use it once during your movement (not only when Dashing). You can bring one willing ally within 5 ft with you.",
        },
        {
          name: "Relentless",
          description:
            "When you'd drop to 0 HP while your Mark is alive and conscious, drop to 1 HP instead. Uses: 1/long rest.",
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
            "Maintain three Contract Marks simultaneously. Once per turn when you hit a Marked creature, choose one rider (no save): knock it prone, push it 10 ft, or reduce its speed by 10 ft until the end of its next turn.",
        },
        {
          name: "Branch Progression (17th)",
          description:
            "Gain your Branch’s 17th-level feature (see branches[branch].progression[17]).",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },
    {
      level: 18,
      features: [
        {
          name: "Foe Slayer",
          description:
            "Once per turn when you make an attack against a Mark, add WIS to the attack roll or the damage roll (declare after the roll but before results). Advantage on saving throws vs spells/abilities used by your Marks.",
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
            "• Maintain up to five Contract Marks simultaneously.\n• Hunter's Sight (1/short rest): as an action force a Marked creature that can see/hear you to make a WIS save; on a failure, you see through its senses for 1 minute (concentration) and have advantage on attacks against it while linked.\n• You have advantage on all attack rolls against your Marks.\n• Perfect Hunt (1/long rest, bonus action, 1 minute): gain truesight 120 ft; speed ×2; use Containment Charm each round as a reaction without expending uses; weapon attacks vs Marks crit on 19–20; bonus action teleport to one sensed Mark within 300 ft.",
        },
      ],
    },
  ],

  // ---------- Branches (specializations): explicit progression tree ----------
  branches: {
    Witchcatcher: {
      branchPath: "Witchcatcher",
      tagline: "Shut down casters and drag them in.",
      progression: {
        3: [
          {
            name: "Hex Net",
            description:
              "Gain a runed net. When you hit your Mark with it, the target must make a Con save (DC = 8 + PB + WIS) or it can't cast spells with verbal components until the start of your next turn. The net counts as magical; repairable on a short rest.",
          },
          {
            name: "Bonus Spells",
            description:
              "Hold Person and See Invisibility are always prepared.",
          },
        ],
        5: [
          {
            name: "Null Tether",
            description:
              "Your weapon attacks vs your Mark impose disadvantage on its concentration checks until the start of your next turn. Your Mark can't benefit from invisibility while within 30 ft of you.",
          },
        ],
        7: [
          {
            name: "Spell Trace",
            description:
              "When a spell is cast within 60 ft, learn what spell and who cast it. You sense when your Mark casts a spell within 1 mile (direction only).",
          },
        ],
        9: [
          {
            name: "Silencing Strike",
            description:
              "Once per turn when you hit your Mark, force a Con save. On a fail, it can't cast spells or use verbal components for 1 minute (repeat save at end of its turns). Uses/long rest = WIS.",
          },
        ],
        13: [
          {
            name: "Mage Breaker",
            description:
              "When your Mark casts a spell, use your reaction to make one weapon attack. On a hit, the spell fails (slot expended). Uses: 3/long rest.",
          },
        ],
        17: [
          {
            name: "Silence Lockdown",
            description:
              "1/long rest, center a 30-ft-radius zone on your Mark for 1 minute: Silence; invisibility suppressed; creatures attempting to cast must make a Con save or the spell fails (slot expended). Exempt up to WIS creatures.",
          },
        ],
      },
    },

    "Relic Seeker": {
      branchPath: "Relic Seeker",
      tagline: "Find it, bag it, haul it—across wards and worlds.",
      progression: {
        3: [
          {
            name: "Relic Sense",
            description:
              "Name/describe a specific object. For 1 hour (1/long rest), know the direction to the nearest instance—or to your Marked object's unique resonance—within 1 mile.",
          },
          {
            name: "Containment Satchel",
            description:
              "Ward-lined pouch/case. While a Small or smaller object is inside, minor curse effects are suppressed. Removing the item ends suppression.",
          },
          {
            name: "Bonus Spells",
            description:
              "Locate Object and Nystul's Magic Aura are always prepared.",
          },
        ],
        5: [
          {
            name: "Recall Tag",
            description:
              "Bonus action: call a tagged object (your Mark or an item you handled within 24h) from a creature within 30 ft. Holder makes a STR save vs your DC or it teleports to your hand. Uses: 1/short or long rest.",
          },
        ],
        7: [
          {
            name: "Object Reading",
            description:
              "Touch an object and concentrate 1 minute to glimpse the last creature to possess it and its general location when last held (past week). Uses/long rest = WIS.",
          },
        ],
        9: [
          {
            name: "Acquisition Expert",
            description:
              "Cast Knock and Arcane Lock once/long rest each without slots. Relic Sense range increases to 5 miles and lasts 8 hours.",
          },
        ],
        13: [
          {
            name: "Master Retriever",
            description:
              "1/long rest, cast Dimension Door without a slot, but only to a space within 10 ft of your Mark or a marked object. Recall Tag range increases to 60 ft.",
          },
        ],
        17: [
          {
            name: "Planar Retrieval",
            description:
              "Relic Sense works across planes for Marked objects. 1/week, cast Plane Shift without components to/from the plane containing your marked object/creature; bring up to 8 willing creatures.",
          },
        ],
      },
    },

    "Beast Reclaimer": {
      branchPath: "Beast Reclaimer",
      tagline: "Calm the monster, claim the leash.",
      progression: {
        3: [
          {
            name: "Calming Sign",
            description:
              "Action: present a sigil to a beast/magical beast within 30 ft. It makes a WIS save (DC = 8 + PB + WIS) or is charmed by you until the start of your next turn; while charmed its speed is halved and it avoids approaching others. Uses/long rest = PB.",
          },
          {
            name: "Bonus Spells",
            description:
              "Speak with Animals and Ensnaring Strike are always prepared.",
          },
        ],
        5: [
          {
            name: "Pacification Net",
            description:
              "When you hit your Mark, reduce its speed by 10 ft and give it disadvantage on its next attack roll before your next turn. Uses/long rest = WIS (min 1).",
          },
        ],
        7: [
          {
            name: "Beast Bond",
            description:
              "Bond with one beast/magical beast of CR 1 or lower (friendly; acts on your turn). If it dies, you can bond another after a long rest. CR limit becomes 2 at level 11.",
          },
        ],
        9: [
          {
            name: "Pack Tactics",
            description:
              "When your bonded beast is within 30 ft of your Mark, you both have advantage on attack rolls against it. You and the beast communicate telepathically on the same plane.",
          },
        ],
        13: [
          {
            name: "Primal Command",
            description:
              "Beast Bond affects CR 3 or lower. 1/long rest, summon a spectral pack (3 wolves using dire wolf stats) for 1 minute; they obey you and act on your turn.",
          },
        ],
        17: [
          {
            name: "Beast Lord",
            description:
              "Beast Bond affects CR 5 or lower. 2/day, as an action assume a bonded beast's form (up to CR 5) for 10 minutes as Polymorph (self only; keep mental stats; no spellcasting while transformed).",
          },
        ],
      },
    },
  },

  design_notes: {
    concept:
      "Ranger remap as a magical bounty hunter for people and treasure: mark, pursue, capture.",
    tone: "Noir professional—results over ideals.",
    balance_notes: [
      "Half-caster (Wis). Marks grant direction/distance & modest DPR (+PB; later +WIS once/turn) without stealing the show.",
      "Containment tools interrupt escape tricks (teleport/invisibility/shapeshift) with saves and use limits—no blanket counterspell.",
      "Branch spikes at 5/7/9/13/17 are potent but bounded; Witchcatcher-17 is a hard lockdown window by design.",
      "Capstone limits are tight: Marks cap at 5; crit range only vs Marks; teleport range 300 ft to keep encounters sane.",
    ],
  },
};
