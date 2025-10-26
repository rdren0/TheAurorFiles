export const hitwizard = {
  id: "hitwizard",
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

  // ---------- Core Level Features (shared) ----------
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
            "Choose a Bureau Division at 3rd level. Your Division grants features at levels 3, 5, 7, 9, 13, and 17.",
          branches: ["Ghost", "Breaker", "Wraith", "Cipher"],
          branch_milestone: true,
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
                "When you roll initiative, immediately move up to half your speed without provoking opportunity attacks.",
            },
            {
              name: "Anti-Mage Specialist",
              effect:
                "Once per short rest, when you hit a concentrating creature, it automatically fails its concentration save.",
            },
            {
              name: "Field Technician",
              effect:
                "Gain proficiency with one additional tool; your checks with Wardbreaker's Tools gain +2.",
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
            "When you deal Precision Strike damage, apply one rider: (a) 10-ft knockback; (b) −10 ft speed until your next turn; or (c) the target has disadvantage on the next spell attack it makes before the end of its next turn.",
        },
        {
          name: "Division Progression (5th)",
          description:
            "Your Division grants a new feature (see branches[branch].progression[5]).",
          from_branch: true,
          branch_milestone: true,
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
          name: "Division Progression (7th)",
          description:
            "Your Division improves (see branches[branch].progression[7]).",
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
          name: "Division Progression (9th)",
          description:
            "Your Division reaches expert tier (see branches[branch].progression[9]).",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },
    {
      level: 10,
      features: [
        {
          name: "Uncanny Reflexes",
          description:
            "You have advantage on Dexterity saving throws against effects you can see, and you can't be surprised while conscious. You lose this benefit if blinded, deafened, or incapacitated.",
        },
      ],
    },
    {
      level: 11,
      features: [
        {
          name: "Precision Strike Increase",
          description:
            "Your Precision Strike damage increases to 6d6. Your Precision Strike ignores resistance to its damage type.",
        },
        {
          name: "Reliable Talent",
          description:
            "When an ability check adds your proficiency bonus, treat a d20 roll of 9 or lower as a 10.",
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
          name: "Precision Strike Increase",
          description: "Your Precision Strike damage increases to 7d6.",
        },
        {
          name: "Division Progression (13th)",
          description:
            "Your Division reaches master tier (see branches[branch].progression[13]).",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },
    {
      level: 14,
      features: [
        {
          name: "Blindsense",
          description:
            "You gain blindsight out to 30 ft. You can detect invisible creatures within this range and effectively see anything not behind total cover.",
        },
      ],
    },
    {
      level: 15,
      features: [
        {
          name: "Precision Strike Increase",
          description:
            "Your Precision Strike damage increases to 8d6. On a critical hit that includes Precision Strike, the target must succeed on a Con save (DC = 8 + PB + Dex or Int) or be paralyzed until the end of your next turn.",
        },
        {
          name: "Slippery Mind",
          description:
            "Gain proficiency in Wisdom saving throws. If you already have it, gain proficiency in Intelligence or Charisma saves instead.",
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
          name: "Precision Strike Increase",
          description: "Your Precision Strike damage increases to 9d6.",
        },
        {
          name: "Division Progression (17th)",
          description:
            "Your Division achieves legendary power (see branches[branch].progression[17]).",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },
    {
      level: 18,
      features: [
        {
          name: "Elusive",
          description:
            "No attack roll has advantage against you while you aren't incapacitated. You can also use your reaction to impose disadvantage on one attack against you.",
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
            "• You can apply Precision Strike to any attack against a creature that hasn't acted yet, regardless of advantage or nearby allies.\n• Tactical Shift lets you Dash and Disengage as the same bonus action.\n• You are immune to being charmed, frightened, or magically detected.\n• Omega Protocol (1/long rest, bonus action, 1 minute): you have three reactions per round; Arcane Countermeasure reduces damage to 0; you can move through creatures/objects; your Precision Strike damage is maximized; you can use any Division feature without expending uses.",
        },
      ],
    },
  ],

  // ---------- Branches (Divisions): explicit progression tree ----------
  branches: {
    Ghost: {
      branchPath: "Division of Extraction (Ghost)",
      tagline: "Get in, get out, leave no ripple.",
      progression: {
        3: [
          {
            name: "Cloak Step",
            description:
              "Bonus action: become lightly invisible and soundless until the start of your next turn or until you attack/cast a spell; leave no tracks. Uses: PB/long rest.",
          },
          {
            name: "Echo Port",
            description:
              "Action: mark a visible point within 30 ft. Until the end of your next turn, you can bonus-action teleport to that spot if you can still see it.",
          },
        ],
        5: [
          {
            name: "Phase Veil",
            description:
              "Until end of your turn, move through nonmagical barriers up to 5 ft thick as difficult terrain. Uses: 1/short rest.",
          },
        ],
        7: [
          {
            name: "Ethereal Step",
            description:
              "Bonus action: step into the Border Ethereal until the start of your next turn (resistance to damage from the Material Plane; move through creatures/objects). Uses: PB/long rest.",
          },
        ],
        9: [
          {
            name: "Phantom Presence",
            description:
              "You aren't detected by divination magic or scrying sensors; leave no tracks; can cast Nondetection on yourself at will.",
          },
        ],
        13: [
          {
            name: "Phase Assassin",
            description:
              "You can attack while in the Border Ethereal. 1/long rest, remain ethereal up to 10 minutes (as Etherealness) and bring up to three willing creatures.",
          },
        ],
        17: [
          {
            name: "Impossible to Find",
            description:
              "Permanently invisible to divinations/scrying/tracking. 1/long rest, become undetectable for 1 hour: cannot be perceived by any means (including Truesight) and leave no trace.",
          },
        ],
      },
    },

    Breaker: {
      branchPath: "Division of Suppression (Breaker)",
      tagline: "Crush their casting. Silence the scene.",
      progression: {
        3: [
          {
            name: "Disruption Field",
            description:
              "Action: 10-ft radius zone centered on you for 1 minute. Spell attacks made by creatures inside against targets inside have disadvantage; creatures starting their turn concentrating in the zone make concentration checks with disadvantage until they leave. Uses: PB/long rest.",
          },
          {
            name: "Arcane Jammer",
            description:
              "When you hit a concentrating creature, it makes its concentration check with disadvantage.",
          },
        ],
        5: [
          {
            name: "Null Pulse",
            description:
              "Reaction when a creature within 30 ft casts a spell: Con save (DC = 8 + PB + Int) or the spell fizzles and the slot is expended. Uses: 1/short rest.",
          },
        ],
        7: [
          {
            name: "Antimagic Strike",
            description:
              "Once per turn when you deal Precision Strike damage, the target makes a Con save. On a failure, it loses one spell slot of its highest level and can't cast until end of its next turn.",
          },
        ],
        9: [
          {
            name: "Dispelling Strike",
            description:
              "Once per turn when you hit with Precision Strike, automatically dispel one spell of 5th level or lower on the target (as Dispel Magic). For 6th+, make an Int check (DC = 10 + spell level).",
          },
        ],
        13: [
          {
            name: "Null Zone",
            description:
              "Action: create a 30-ft radius antimagic field centered on you for 1 minute. You may exclude a number of creatures equal to your Int modifier. While in this zone, you and excluded allies have advantage on attack rolls. Uses: 1/long rest.",
          },
        ],
        17: [
          {
            name: "Mage Killer",
            description:
              "When you hit a spellcaster with Precision Strike, Con save (DC = 8 + PB + Int). On a failure, it loses all spell slots of 6th level and lower and can't cast spells for 1 minute. You have advantage on saves against spells cast by creatures within 30 ft.",
          },
        ],
      },
    },

    Wraith: {
      branchPath: "Division of Termination (Wraith)",
      tagline: "One shot. No witnesses.",
      progression: {
        3: [
          {
            name: "Lethal Precision",
            description:
              "When you deal Precision Strike damage, you may reroll one of those damage dice (once/turn). Also once/turn when you deal Precision Strike damage, the target must succeed on a Con save (DC = 8 + PB + Dex or Int) or it can't cast spells until the start of its next turn.",
          },
          {
            name: "Silent Finisher",
            description:
              "When you reduce a creature to 0 HP, you become invisible until the end of your next turn. Uses: PB/long rest.",
          },
        ],
        5: [
          {
            name: "Execution Protocol",
            description:
              "When you crit or reduce a creature to 0 HP, make one weapon attack as a bonus action.",
          },
        ],
        7: [
          {
            name: "Shadow Kill",
            description:
              "When you reduce a creature to 0 HP, reaction: teleport up to 30 ft and become invisible until the start of your next turn or until you attack.",
          },
        ],
        9: [
          {
            name: "Death Mark",
            description:
              "Bonus action: mark a creature within 60 ft for 1 minute. Your attacks against it deal +2d6 necrotic and you have advantage to hit it. If it drops to 0 HP while marked, regain HP equal to your Hit Wizard level. Uses: Wisdom modifier/long rest.",
          },
        ],
        13: [
          {
            name: "Soul Reaper",
            description:
              "When a creature marked by Death Mark dies, its soul is trapped for 1 minute (no resurrection except Wish). You can telepathically question it. Gain temp HP equal to twice its CR/level.",
          },
        ],
        17: [
          {
            name: "Angel of Death",
            description:
              "1/long rest, enter Death Form for 1 minute: invisible and incorporeal; speed ×2; your attacks automatically crit; creatures you drop to 0 HP die and can't be resurrected by spells of 8th level or lower; resistance to all damage.",
          },
        ],
      },
    },

    Cipher: {
      branchPath: "Division of Intelligence (Cipher)",
      tagline: "Become the lie so perfectly that truth blinks first.",
      progression: {
        3: [
          {
            name: "False Face",
            description:
              "Action: adopt a minor glamour (face, voice, outfit) within normal humanoid ranges for up to 1 hour. Uses: PB/long rest.",
          },
          {
            name: "Truth Reader",
            description:
              "When you make an Insight check contested by Deception, add 1d4 to your result.",
          },
        ],
        5: [
          {
            name: "Memory Scramble",
            description:
              "When you successfully deceive or charm a creature, force a Wis save (DC = 8 + PB + Int or Cha). On a failure, it forgets the last minute. Uses: PB/long rest.",
          },
        ],
        7: [
          {
            name: "Perfect Disguise",
            description:
              "You can cast Alter Self at will (self only). Creatures have disadvantage to see through your disguises.",
          },
        ],
        9: [
          {
            name: "Impersonate",
            description:
              "When you use False Face to mimic a specific creature, you glean mannerisms, voice, and recent memories (last 24h). You can cast Modify Memory 1/long rest without a slot.",
          },
        ],
        13: [
          {
            name: "Identity Theft",
            description:
              "1/long rest, perfectly impersonate a creature you've observed for at least 1 hour within the past week. For 8 hours, gain its physical form (True Polymorph-like; keep your mental stats), access to surface thoughts and memories from the past month, and advantage on Charisma checks with its contacts.",
          },
        ],
        17: [
          {
            name: "Master of Deception",
            description:
              "Maintain up to three living identities with false backgrounds that pass magical scrutiny. 1/long rest, cast Simulacrum without components or spell slots, creating a duplicate of yourself or a creature you've impersonated in the past week.",
          },
        ],
      },
    },
  },

  design_notes: {
    concept:
      "Rogue remap as Ministry strike-ops specialist — agile, tactical, anti-magic.",
    tone: "Professional, efficient, and morally gray. Where Aurors bring justice, Hit Wizards bring finality.",
    balance_notes: [
      "Precision Strike matches Rogue Sneak Attack scaling exactly.",
      "Subclass beats at 3/5/7/9/13/17 mirror Rogue pacing.",
      "Arcane Countermeasure (1) + Evasion (6) + Elusive (18) stack for survivability without invulnerability.",
      "Heads-up: Breaker 13/17 and Wraith 17 are very swingy. If you want saner tables, cap Null Zone to 10-ft radius or concentration, and make Mage Killer block slots up to 5th. Death Form autocrits will delete bosses — consider limiting to first hit each turn.",
    ],
    rules_consistency:
      "All save DCs = 8 + PB + relevant ability (Dex or Int). Division milestone features are referenced in core level table as branch milestones.",
  },
};
