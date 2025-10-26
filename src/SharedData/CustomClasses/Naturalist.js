export const naturalist = {
  id: "naturalist",
  name: "Naturalist",
  type: "Druid",
  description:
    "Naturalists are experts in dangerous magical flora and fauna—the kind that kills, poisons, or drives men mad. They work the dark edges of magizoology: tracking werewolf packs through urban sprawl, harvesting venom from illegal Acromantula farms, or investigating when magical creatures start turning up dead. Part forensic expert, part beast wrangler, part black market supplier—they know that nature, magical or not, is rarely kind.",
  hit_die: "d8",
  primary_abilities: ["Wisdom", "Constitution"],
  saving_throws: ["Wisdom", "Intelligence"],
  armor_proficiencies: ["Light Armor", "Dragon Hide"],
  weapon_proficiencies: ["Wands", "Daggers", "Quarterstaffs"],
  tool_proficiencies: ["Herbalism Kit", "Poisoner's Kit"],

  skill_choices: {
    choose: 2,
    options: [
      "Nature",
      "Animal Handling",
      "Medicine",
      "Survival",
      "Investigation",
      "Perception",
    ],
  },

  spellcasting: {
    progression_type: "augmented",
    casting_ability: "Wisdom",
    notes:
      "Naturalists enhance base magic with creature abilities and deadly plants. They don't gain extra slots but add specialized nature magic.",
    bonus_spells: {
      cantrips: ["Thorn Whip", "Poison Spray"],
      1: [
        "Beast Speech",
        "Creature Command",
        "Devil's Snare",
        "Blood Replenisher",
      ],
      2: ["Beast Sight", "Antivenom", "Venomous Tentacula"],
      3: ["Fungal Bloom", "Pack Summons"],
    },
  },

  class_resources: [
    {
      name: "Field Manifestation",
      uses_formula: "proficiency_bonus",
      recovery: "short rest",
      duration: "10 minutes",
      modes: [
        "Beast Traits: Adopt abilities from creatures you've studied (werewolf regeneration, Acromantula climb, Thestral death sight).",
        "Manifest Companion: Summon a magical creature ally (uses Naturalist Companion stat block). It obeys without question—you've earned its respect or fear.",
      ],
    },
    {
      name: "Living Reagents",
      uses_formula: "proficiency_bonus + Wisdom_mod",
      recovery: "long rest",
      description:
        "Vials of venom, spores, and worse things. The Ministry would arrest you for half of what's in your kit.",
      spend_examples: [
        "Healing Draught: Restore 1d6 + WIS HP (tastes like blood).",
        "Antitoxin: +1d4 to saves vs poison/disease.",
        "Catalyst Venom: Next spell adds +1d4 poison damage.",
        "Paralytic Spores: Target must save or be paralyzed 1 round.",
      ],
    },
  ],

  // ---------- Core Level Features (shared) ----------
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
            "You gain proficiency with Herbalism Kit. Choose one additional: Alchemist's Supplies or Poisoner's Kit.",
        },
      ],
    },
    {
      level: 2,
      features: [
        {
          name: "Environmental Attunement",
          description:
            "Advantage on checks to track/identify magical flora & fauna and diagnose ecological imbalances. Once per short rest, sense nearby ley-imbalances as if casting Detect Magic (self-centered, 1 round, no components).",
        },
        {
          name: "Essence Extraction",
          description:
            "During a short rest, harvest one additional Living Reagent from suitable remains or terrain (GM adjudication).",
        },
      ],
    },
    {
      level: 3,
      features: [
        {
          name: "Branch of Study",
          description:
            "Choose a specialization at 3rd level. Your branch grants features at levels 3, 5, 7, 9, 13, and 17.",
          branches: ["Herbology", "Zoology", "Mycology"],
          branch_milestone: true,
        },
        {
          name: "Minor Symbiosis",
          description:
            "While your Manifest Companion or Field Familiar is active, you and it share any resistances granted by your current Embody Traits.",
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
          name: "Branch Progression (5th)",
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
          name: "Primal Resilience",
          description:
            "Gain resistance to poison damage and immunity to disease. Spend 1 Living Reagent to gain resistance to one of: acid, cold, fire, lightning (10 minutes).",
        },
        {
          name: "Greater Field Manifestation",
          description:
            "Field Manifestation uses become 4 per short rest. Embody Traits grants three traits simultaneously. Your Manifest Companion can use a CR 1 stat block.",
        },
      ],
    },
    {
      level: 7,
      features: [
        {
          name: "Branch Progression (7th)",
          description:
            "Your branch grants enhanced abilities at this level (see branches[branch].progression[7]).",
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
          name: "Symbiotic Evolution",
          description:
            "When you use Field Manifestation, you can split its effects—maintain both Embody Traits and Manifest Companion simultaneously. Living Reagents now heal 2d6 + WIS or grant advantage on two consecutive saves.",
        },
        {
          name: "Branch Progression (9th)",
          description:
            "Your branch reaches expert tier (see branches[branch].progression[9]).",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },
    {
      level: 10,
      features: [
        {
          name: "Nature's Avatar",
          description:
            "Choose one permanent benefit: tremorsense 30 ft; climb speed equal to walk; or swim speed equal to walk + water breathing. You may change this after a long rest spent in a natural environment.",
        },
      ],
    },
    {
      level: 11,
      features: [
        {
          name: "Superior Living Reagents",
          description:
            "Each use can now: heal 3d6 + WIS; grant advantage on all saves for 1 minute; remove one condition (charmed, frightened, paralyzed, poisoned, stunned); or deal 3d6 poison damage to a creature within 30 ft (CON save half).",
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
            "Field Manifestation uses become 5 per short rest. Your Manifest Companion can use a CR 3 stat block. While Embodying Traits, you gain immunity to one condition (choose: charmed, frightened, paralyzed, or stunned) for the duration.",
        },
        {
          name: "Branch Progression (13th)",
          description:
            "Your branch reaches master tier (see branches[branch].progression[13]).",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },
    {
      level: 14,
      features: [
        {
          name: "Ley-Ecology Sense",
          description:
            "In natural environments: tremorsense 60 ft, blindsight 30 ft. Detect the presence (not location) of aberrations, undead, and fiends within 120 ft. Cast Commune with Nature once per long rest without a slot.",
        },
      ],
    },
    {
      level: 15,
      features: [
        {
          name: "Legendary Companion",
          description:
            "Your Manifest Companion can use a CR 5 stat block, is immune to charm and fear, and has legendary resistances (3/day). It can speak one language you know.",
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
          name: "Branch Progression (17th)",
          description:
            "Your branch achieves legendary power (see branches[branch].progression[17]).",
          from_branch: true,
          branch_milestone: true,
        },
      ],
    },
    {
      level: 18,
      features: [
        {
          name: "Master of Living Magic",
          description:
            "You effectively always refresh your Living Reagents on rests: treat uses as refreshed on short or long rest. You can apply two Living Reagent effects as a single bonus action; range increases to 60 ft.",
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
            "You become a guardian of living magic.\n• Immune to poison, disease, and aging; you no longer need food or water.\n• Field Manifestation has unlimited uses.\n• Once per long rest, transform into an Ancient Treant or Ancient Green Dragon for 1 hour, retaining your class features. (DMs: consider gating breath/legendary actions per table balance.)\n• Your Manifest Companion becomes permanent and can plane shift 1/day.\n• You can cast Awaken at will without components or slots; creatures you awaken remain loyal to you.\n• The first time you would be reduced to 0 HP each day, you instead regrow to half HP as living growth knits you back together.",
        },
      ],
    },
  ],

  // ---------- Branches: explicit progression tree ----------
  branches: {
    Herbology: {
      branchPath: "Herbology",
      tagline: "Specialist in magical plants—the Ministry-regulated kind.",
      progression: {
        3: [
          {
            name: "Devil's Snare Expert",
            description:
              "Advantage on saves vs plant effects; identify plant poisons by taste; immunity to poison damage from plant sources.",
          },
          {
            name: "Venomous Cultivation",
            description:
              "During a long rest, prepare one plant-based poison (Poisoner's Kit). 2d6 poison (CON save half; DC = 8 + PB + WIS). Expires in 24 hours.",
          },
        ],
        5: [
          {
            name: "Animate Flora",
            description:
              "Once per short rest, animate nearby plants for 1 minute as a vine swarm (CR 1/2) under your control. Creatures starting their turn in the swarm must succeed on a STR save or have speed reduced to 0 until the start of their next turn.",
          },
        ],
        7: [
          {
            name: "Living Armor",
            description:
              "Bonus action to sprout bark and vines for 10 minutes: +2 AC, advantage on STR saves, and plant difficult terrain doesn’t slow you. Uses: PB per long rest.",
          },
        ],
        9: [
          {
            name: "Verdant Sanctuary",
            description:
              "Action: create a 20-ft-radius sanctuary for 10 minutes. Enemies treat it as difficult terrain; allies inside regain HP equal to your WIS at start of turn and have advantage on saves vs poison/disease. Uses: 1/short rest.",
          },
        ],
        13: [
          {
            name: "Worldtree Connection",
            description:
              "Once per long rest, tree-stride up to 500 ft between Large+ plants. While in Verdant Sanctuary, you can cast Entangle and Spike Growth at will (no slots).",
          },
        ],
        17: [
          {
            name: "Bloom of Life",
            description:
              "Once per long rest, erupt a 60-ft-radius growth for 10 minutes (heavily obscured). Allies immediately regain 4d8 HP and gain 30 temp HP. You can also cast Plant Growth at will.",
          },
        ],
      },
    },

    Zoology: {
      branchPath: "Zoology",
      tagline: "Magical creature tracker—the ones that kill.",
      progression: {
        3: [
          {
            name: "Predator Tracker",
            description:
              "Advantage to track magical creatures; identify bite/claw/residue; advantage on saves vs frightened by beasts and monstrosities.",
          },
          {
            name: "Beast Handler",
            description:
              "Speak with Animals at will. When you Embody Traits, gain two beast traits instead of one.",
          },
        ],
        5: [
          {
            name: "Pack Tactics",
            description:
              "When you or your Field Familiar hits a creature, the other gains advantage on the next attack against that creature before your next turn.",
          },
        ],
        7: [
          {
            name: "Beast Speech",
            description:
              "Telepathy with beasts/monstrosities within 120 ft. Your Field Familiar adds your PB to all saves and its max HP increases by your Naturalist level.",
          },
        ],
        9: [
          {
            name: "Apex Predator Bond",
            description:
              "Field Familiar can use a CR 2 stat block and makes an additional attack when it takes the Attack action. When it hits, you can use your reaction to make a weapon or spell attack against the same target.",
          },
        ],
        13: [
          {
            name: "Primal Pack",
            description:
              "Maintain two Field Familiars simultaneously (each up to CR 2). If within 30 ft of each other, each deals +1d8 damage on attacks. You can see through both familiars’ senses simultaneously.",
          },
        ],
        17: [
          {
            name: "Apex Alpha",
            description:
              "Maintain three Field Familiars (each up to CR 3). Bonus action: command all familiars to make one attack each. Once per long rest, assume a hybrid form for 1 hour, gaining your familiar’s movement speeds, natural weapons, and special senses while retaining your own abilities.",
          },
        ],
      },
    },

    Mycology: {
      branchPath: "Mycology",
      tagline: "Fungal specialist—spores, molds, and magical plagues.",
      progression: {
        3: [
          {
            name: "Toxic Immunity",
            description:
              "Immunity to poison damage and the poisoned condition. You can safely handle toxic substances.",
          },
          {
            name: "Spore Cloud",
            description:
              "Action: 15-ft-radius toxic spores centered on you. Creatures of your choice must make a CON save (DC = 8 + PB + WIS) or be poisoned until the start of your next turn. Uses: PB/long rest.",
          },
        ],
        5: [
          {
            name: "Fungal Network",
            description:
              "In dim light, underground, or dense vegetation, you and creatures affected by your Spore Cloud can communicate telepathically within 60 ft for 1 hour. Your Spore Cloud can exclude a number of creatures equal to your WIS mod.",
          },
        ],
        7: [
          {
            name: "Decay Touch",
            description:
              "Once per turn when you hit with a melee attack or spell, add 2d8 necrotic damage and regain HP equal to your WIS mod. Uses: WIS mod/short rest.",
          },
        ],
        9: [
          {
            name: "Spore Symbiosis",
            description:
              "Spore Cloud radius 20 ft; lasts 1 minute. Allies in the cloud gain temp HP equal to your WIS at the start of each of their turns. Enemies starting their turn in the cloud must save or be poisoned and have disadvantage on Perception checks.",
          },
        ],
        13: [
          {
            name: "Cordyceps Control",
            description:
              "When a beast or humanoid dies within your Spore Cloud, use your reaction to animate it as a spore-thrall (zombie stats; retains special movement). Acts on your turn for 1 hour. Up to 3 thralls at once. Uses: WIS mod/long rest.",
          },
        ],
        17: [
          {
            name: "Mycelial Hivemind",
            description:
              "Spore Cloud radius 30 ft and can persist until dismissed. Allies in the cloud are telepathically linked. When one ally in the cloud is hit, you can use your reaction to grant all other allies in the cloud +5 AC until the start of your next turn. Your thralls add your WIS mod to all rolls.",
          },
        ],
      },
    },
  },

  design_notes: {
    concept:
      "Newt Scamander meets noir—handles the magical creatures and plants that proper wizards fear.",
    tone: "Professional but dangerous. The person you call when a Nundu escapes or when bodies show strange bite marks.",
    balance_notes: [
      "Augmented progression avoids slot bloat while keeping nature-magic identity.",
      "Living Reagents = utility without eclipsing Healer-Alchemist’s role.",
      "Companion CR scaling is aggressive; DMs may cap Legendary Companion (15) or reduce legendary resistances for lower-power tables.",
      "Level 20 forms (Ancient Treant/Green Dragon) are epic; if that’s too wild for your table, swap to Guardian Colossus (custom CR 12) or grant a toned-down Primal Avatar instead.",
    ],
  },
};
