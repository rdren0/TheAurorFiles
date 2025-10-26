export const professor = {
  id: "professor",
  name: "Professor",
  type: "Wizard",
  description:
    "Professors are the architects of modern magic—lecturers, theorists, and forensic arcanists who turn evidence into insight and equations into outcomes. In the noir world of magical investigation, they’re the experts you call when the spell shouldn’t have worked—or did.",

  hit_die: "d6",
  primary_abilities: ["Intelligence", "Wisdom"],
  saving_throws: ["Intelligence", "Wisdom"],
  armor_proficiencies: ["Light Armor"],
  weapon_proficiencies: [
    "Wands",
    "Daggers",
    "Quarterstaffs",
    "Light Crossbows",
  ],
  tool_proficiencies: ["Calligrapher's Tools", "Alchemist's Supplies"],
  skill_proficiencies: {
    choose: 2,
    from: [
      "Arcana",
      "History",
      "Investigation",
      "Insight",
      "Nature",
      "Perception",
    ],
  },

  // ——— SPELLCASTING ———
  spellcasting: {
    progression_type: "full",
    casting_ability: "Intelligence",
    attack_mod: "proficiency_bonus + Intelligence_mod",
    save_dc: "8 + proficiency_bonus + Intelligence_mod",
    notes:
      "Professors use the Wizard spellbook, preparation, and slot table. Academic features layer metamagic-lite tweaks and forensic reads on top of baseline casting.",
  },

  // ——— CLASS RESOURCES ———
  class_resources: [
    {
      name: "Research Dice",
      description:
        "A pool of scholarly insight used to tweak spells or extract data from magical phenomena.",
      die_scaling_by_level: { 1: "d6", 5: "d8", 11: "d10", 17: "d12" },
      dice_count_by_level: { 1: 2, 5: 3, 11: 4, 17: 5 },
      recovery: "All dice on a long rest; recover 1 die on a short rest.",
    },
  ],

  // ——— LEVEL FEATURES ———
  level_features: [
    {
      level: 1,
      features: [
        {
          name: "Arcane Academia",
          description:
            "You have advantage on Intelligence (Arcana) and (History) checks about magical theory, schools, rituals, or spell architecture. You can always identify a spell as it’s being cast if it’s on your spell list.",
        },
        {
          name: "Academic Focus",
          description:
            "When you cast a spell, you may spend 1 Research Die to choose one: (a) add the die to one damage or healing roll of the spell; (b) increase the spell save DC by +1; (c) instantly learn one pertinent fact about a magical effect/residue you can see (GM provides a concise, actionable truth).",
        },
        {
          name: "Refocus (Arcane Recovery)",
          description:
            "Once per day when you finish a short rest, recover expended spell slots with a combined level equal to half your Professor level (rounded up) and no slot higher than 5th.",
        },
      ],
    },

    {
      level: 2,
      features: [
        {
          name: "Study Session (Ritual Focus)",
          description:
            "After a short rest, you may swap one prepared spell for another in your spellbook. Once per long rest, you can cast one spell from your spellbook as a ritual even if it lacks the ritual tag (it must have a casting time of 10 minutes or less).",
        },
        {
          name: "Field Notes",
          description:
            "When you spend 10 minutes documenting a site, you gain advantage on later Intelligence checks to recall details about it and on the next Investigation check made there by you or an ally (within 24 hours).",
        },
      ],
    },

    {
      level: 3,
      features: [
        {
          name: "Department of Study",
          description:
            "Choose an academic specialization. You gain features now and again at 5, 9, 13, and 17.",
          options: [
            {
              name: "Theoretical Thaumaturgy",
              features: [
                {
                  name: "Formula Manipulation",
                  description:
                    "When casting a spell, you may spend 1 Research Die to apply one tweak: change range ±50%; extend duration by 1 round (or by 1 minute if the duration is ≥1 minute); or allow a willing target of your spell to reroll one failed save against that spell.",
                },
                {
                  name: "Experimental Surge",
                  description:
                    "When you roll a 1 on a Research Die spent to modify a spell, the spell gains a minor unpredictable side effect (DM flavor) but doubles one of its numeric outcomes (damage dice, temp HP, or movement) for that casting. Triggers once per long rest.",
                },
              ],
            },
            {
              name: "Magical History",
              features: [
                {
                  name: "Forensic Recall",
                  description:
                    "Once per short rest, spend 1 minute examining an area/object to learn: the last spell cast there, its school, an approximate caster level, and a rough intent. Functions as a forensic overlay beyond Detect Magic.",
                },
                {
                  name: "Arcane Reconstruction",
                  description:
                    "Spend 1 Research Die and 1 minute to project a 1-minute, sketch-quality illusion of recent events (silhouettes, positions, key motions) that occurred in the last hour (DM may adjust window by residue strength).",
                },
              ],
            },
            {
              name: "Applied Arcana",
              features: [
                {
                  name: "Practical Experimentation",
                  description:
                    "When you cast a spell of 1st level or higher that deals damage, you can change its damage type to acid, cold, fire, lightning, thunder, or force.",
                },
                {
                  name: "Arcane Efficiency",
                  description:
                    "When a spell you cast affects multiple creatures, one ally you choose gains temporary HP equal to your Intelligence modifier. Once per short rest.",
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
          name: "Improved Academic Focus",
          description:
            "Your Research Dice become d8s and your pool increases (see Class Resources). As a bonus action, deliver a brief Lecture; allies within 30 ft who can hear you gain +1 to spell attack rolls or +1 to their spell save DCs until the start of your next turn. Uses/long rest = Intelligence modifier (min 1).",
        },
        {
          name: "Department Feature (5th)",
          description: "Your specialization grants a new benefit.",
          isAutomaticFromBranch: true,
          options: [
            {
              name: "Theoretical — Arcane Symmetry",
              description:
                "When a creature targets only you with a spell, you can use your reaction to mirror its basic effect (damage/healing/movement) as a spell of one level lower using your slot and stats. 1/long rest.",
            },
            {
              name: "History — Chrono-Anchor",
              description:
                "Reaction when a creature within 60 ft casts a spell: the caster makes an Intelligence save (DC = 8 + PB + INT). On a fail, the spell’s effects are delayed until the start of that creature’s next turn. Uses/long rest = INT mod.",
            },
            {
              name: "Applied — Controlled Detonation",
              description:
                "When you cast a spell that deals area damage, you can exclude a number of creatures up to your Intelligence modifier from the effect.",
            },
          ],
        },
      ],
    },

    {
      level: 6,
      features: [
        {
          name: "Peer Review",
          description:
            "When an ally you can see within 30 ft casts a spell, you may use your reaction to spend 1 Research Die and add the die to one damage or healing roll of that spell, or to increase its save DC by +1.",
        },
      ],
    },

    {
      level: 7,
      features: [
        {
          name: "Precise Casting",
          description:
            "When you cast a spell that requires a spell attack, you can treat a d20 roll of 9 or lower as a 10 once per turn.",
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
          name: "Advanced Lecture",
          description:
            "When you use Lecture, you may also grant one ally advantage on their next concentration check before the start of your next turn.",
        },
        {
          name: "Department Feature (9th)",
          isAutomaticFromBranch: true,
          options: [
            {
              name: "Theoretical — Variable Geometry",
              description:
                "When you cast a spell that creates an area (cone, sphere, cube, line), you can reshape it into another area of equal or smaller footprint (DM adjudication) once per short rest.",
            },
            {
              name: "History — Evidentiary Echo",
              description:
                "As an action, mark a 20-ft cube for 10 minutes. The first time a spell is cast in that area, you learn the caster, school, and exact spell text (if on your list), and can store the echo to gain advantage on a single Arcana/Counterspell/Dispel check against that spell within 24 hours.",
            },
            {
              name: "Applied — Field Triage",
              description:
                "When you cast a spell of 1st+ level, you or an ally within 30 ft can end one of the following on themselves: blinded, deafened, or poisoned. Uses/long rest = INT mod.",
            },
          ],
        },
      ],
    },

    {
      level: 10,
      features: [
        {
          name: "Scholarly Poise",
          description:
            "You gain proficiency in Wisdom saving throws if you don’t already have it. If you already have it, choose Constitution or Charisma saves instead.",
        },
      ],
    },

    {
      level: 11,
      features: [
        {
          name: "Master’s Thesis",
          description:
            "Your Research Dice become d10s and your pool increases (see Class Resources). When you spend a Research Die on Academic Focus, you may choose two different options from it instead of one (still costs only 1 die).",
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
          name: "Department Feature (13th)",
          isAutomaticFromBranch: true,
          options: [
            {
              name: "Theoretical — Counteraxiom",
              description:
                "When you succeed on a Counterspell or Dispel Magic check, you can immediately force the originator to make a Charisma save (DC = 8 + PB + INT) or be unable to cast spells until the start of their next turn. 1/short rest.",
            },
            {
              name: "History — Deep Dossier",
              description:
                "Spend 10 minutes and 1 Research Die to compile a magical dossier on a creature, place, or item you’ve studied. For the next 24 hours, you and allies gain +2 on checks to track, research, or interact with it (social or arcane), and you have advantage on the first save against its effects.",
            },
            {
              name: "Applied — Overclock Matrix",
              description:
                "1/short rest when you cast a spell using a slot, add +PB to one damage/healing roll of that spell and ignore resistance to its damage type for that casting.",
            },
          ],
        },
      ],
    },

    {
      level: 14,
      features: [
        {
          name: "Pragmatic Savant",
          description:
            "Choose one 1st-level and one 2nd-level Professor spell you know. You can cast each at its base level without expending a slot once per short rest.",
        },
      ],
    },

    {
      level: 15,
      features: [
        {
          name: "Doctoral Defense",
          description:
            "Your Research Dice become d12s at 17th level, but starting now, when you spend a Research Die to increase DC or to bolster an ally’s save, you also grant that ally temporary HP equal to your INT mod.",
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
          name: "Grand Colloquium",
          description:
            "Your Research Dice and pool increase (see Class Resources). When you roll initiative and have no Research Dice remaining, regain 1 die.",
        },
        {
          name: "Department Feature (17th)",
          isAutomaticFromBranch: true,
          options: [
            {
              name: "Theoretical — Perfect Form",
              description:
                "1/long rest, for 1 minute when you cast a spell you may choose two Formula Manipulation tweaks without spending Research Dice, and you have advantage on concentration checks.",
            },
            {
              name: "History — Witness to Ages",
              description:
                "1/long rest, spend 1 minute to view a clear sensory replay (sight/sound) of notable events within a 60-ft radius that occurred in the last 24 hours, as if present. You can pause/rewind during that minute.",
            },
            {
              name: "Applied — Production Line Casting",
              description:
                "When you cast a spell of 3rd level or lower, you can immediately cast a cantrip as a bonus action and move up to 10 ft without provoking opportunity attacks. 1/turn.",
            },
          ],
        },
      ],
    },

    {
      level: 18,
      features: [
        {
          name: "Spell Mastery (Professor)",
          description:
            "Choose one 1st-level and one 2nd-level Professor spell you have prepared. You can cast them at base level without expending spell slots. You can change these when you finish a long rest.",
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
          name: "Signature Theorems",
          description:
            "Choose two 3rd-level Professor spells you have prepared. You cast each at 3rd level once without expending a slot. You regain all expended uses when you finish a short or long rest.",
        },
        {
          name: "Dean of the Discipline",
          description:
            "When you spend a Research Die on Academic Focus, you may treat the die as its maximum value once per turn.",
        },
      ],
    },
  ],

  // ——— DESIGN NOTES ———
  design_notes: {
    concept:
      "A Wizard remap as forensic academic: flexible prep, metamagic-lite tweaks, and scene reconstruction.",
    tone: "Analytical, exacting, and a little tired of being right.",
    balance_notes: [
      "Uses Wizard slots & spellbook; Arcane Recovery preserved via Refocus.",
      "Research Dice scale modestly (2→5 dice; d6→d12) with short-rest trickle to prevent nova abuse.",
      "Lecture is a short buff gated by INT-mod uses; grows at 9th for concentration support.",
      "Departments deliver control (Theoretical), investigation (History), or pragmatic combat utility (Applied) at 3/5/9/13/17.",
      "High-level keeps Wizard feel: Spell Mastery at 18, Signature-style at 20 with short-rest refresh.",
    ],
    rules_consistency:
      "All Professor save DCs = 8 + PB + INT; Research Dice don’t stack with other effects to push DC above reasonable bounds (+1 cap per spend).",
  },
};
