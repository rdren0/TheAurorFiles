export const subclassesData = {
  Charms: {
    name: "Charms",
    description:
      "Masters of precision magic and enchantments with advanced spell techniques and dueling expertise",
    higherLevelFeatures: [
      {
        level: 1,
        name: "Bewitching Studies",
        description:
          "At 1st level, you gain Target Practice and choose one additional feature that defines your approach to charms magic.",
        choices: [],
      },
      {
        level: 1,
        name: "Target Practice",
        description:
          "You've honed your aim to be able to strike very specifically with your dueling Charms. When casting a Charm, you can target specific items or body parts, as well as restrict the effects of the charm to only that specific item or body part.",
        benefits: {
          specialAbilities: [
            {
              name: "Target Practice",
              type: "passive",
              description:
                "Target specific items or body parts with Charms, restricting effects to those areas",
            },
          ],
        },
        choices: [],
      },
      {
        level: 1,
        name: "Level 1 Specialization",
        description: "Choose your initial specialization approach.",
        choices: [
          {
            name: "Lightning Fast Wand",
            description:
              "You've honed your senses to be able to strike very specifically with your dueling Charms. Whenever you add your spellcasting ability modifier to a spell attack roll, add half your Dexterity modifier (rounded up) as a bonus as well. Additionally, you have advantage on initiative rolls.",
            benefits: {
              combatBonuses: {
                spellAttack: "half Dexterity modifier (rounded up)",
                initiative: "advantage",
              },
              specialAbilities: [
                {
                  name: "Lightning Fast Wand",
                  type: "passive",
                  description:
                    "Add half Dexterity modifier to spell attack rolls",
                },
                {
                  name: "Quick Reflexes",
                  type: "passive",
                  description: "Advantage on initiative rolls",
                },
              ],
            },
          },
          {
            name: "Protective Enchantments",
            description:
              "You gain access to the Protego spell. Additionally, when you cast a Protego, you may choose to affect a friendly creature within 30 feet. When you or a friendly creature is affected by one of your protego spells, they may roll 1d4 and add that number to the AC bonus of the spell. At 5th level, you gain access to Protego Maxima and can cast either spell twice per round as reactions.",
            benefits: {
              spells: ["Protego", "Protego Maxima (at 5th level)"],
              specialAbilities: [
                {
                  name: "Enhanced Protego",
                  type: "spell enhancement",
                  description:
                    "Target friendly creatures within 30 feet with Protego",
                },
                {
                  name: "Reinforced Shield",
                  type: "spell enhancement",
                  description:
                    "Targets of your Protego spells add 1d4 to AC bonus",
                },
                {
                  name: "Reactive Casting",
                  type: "passive",
                  description:
                    "At 5th level, cast Protego/Protego Maxima twice per round as reactions",
                },
              ],
            },
          },
        ],
      },
      {
        level: 4,
        name: "Mastered Charms (Optional)",
        description:
          "Can take instead of ASI/Feat. +1 Dexterity (max 20). Choose five known cantrips as Mastered Charms - each can be cast once per short rest as a bonus action without expending sorcery points.",
        benefits: {
          abilityScoreIncrease: {
            type: "fixed",
            ability: "dexterity",
            amount: 1,
            max: 20,
          },
          specialAbilities: [
            {
              name: "Mastered Charms",
              type: "resource",
              uses: "5 cantrips, once each per short rest",
              description:
                "Cast chosen cantrips as bonus action without sorcery points",
            },
          ],
        },
        choices: [],
      },
      {
        level: 6,
        name: "Advanced Charmswork",
        description:
          "Choose: Rapid Casting (cast additional charms spells per action, scaling with level) or Professional Charmer (access to enhanced Professional Charms spell versions).",
        choices: [
          {
            name: "Rapid Casting",
            description:
              "When you cast a Charms spell as an action, cast another locked-in Charms spell of 3rd level or lower as part of that action. Increases to 3 spells at 10th level, 4 spells at 18th level.",
            benefits: {
              specialAbilities: [
                {
                  name: "Rapid Casting",
                  type: "action enhancement",
                  description: "Cast additional Charms spells with one action",
                  scaling: {
                    6: "2 spells (3rd level or lower)",
                    10: "3 spells",
                    18: "4 spells",
                  },
                },
              ],
            },
          },
          {
            name: "Professional Charmer",
            description:
              "Gain access to Professional Charms spell enhancements (enhanced versions of Diffindo, Immobulus, Deprimo, Confundo, Piertotum Locomotor that must be locked in).",
            benefits: {
              spells: [
                "Professional Diffindo",
                "Professional Immobulus",
                "Professional Deprimo",
                "Professional Confundo",
                "Professional Piertotum Locomotor",
              ],
              specialAbilities: [
                {
                  name: "Professional Charms",
                  type: "spell enhancement",
                  description:
                    "Access to enhanced versions of specific Charms spells",
                },
              ],
            },
          },
        ],
      },
      {
        level: 9,
        name: "Double Cast",
        description:
          "When you cast a spell of 1st level or higher that doesn't deal damage, choose one additional target for the same spell within range without expending an additional spell slot. Once per long rest.",
        benefits: {
          specialAbilities: [
            {
              name: "Double Cast",
              type: "spell enhancement",
              uses: "1 per long rest",
              description:
                "Non-damaging spells can target one additional creature",
            },
          ],
        },
        choices: [],
      },
      {
        level: 10,
        name: "Powerful Magic",
        description:
          "Choose: Durable Spellwork (defensive concentration bonuses) or Issued Command (allies can cast your charms spells).",
        choices: [
          {
            name: "Durable Spellwork",
            description:
              "While you maintain concentration on a spell, you have +2 bonus to AC and all saving throws.",
            benefits: {
              combatBonuses: {
                acBonus: "+2 while concentrating",
                savingThrowBonus: "+2 while concentrating",
              },
              specialAbilities: [
                {
                  name: "Durable Spellwork",
                  type: "passive",
                  description: "+2 AC and saving throws while concentrating",
                },
              ],
            },
          },
          {
            name: "Issued Command",
            description:
              "Once per round, command an ally to cast one of your locked-in charms spells without them needing the spell or gaining a casting attempt. Use half proficiency bonus times per long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Issued Command",
                  type: "action",
                  uses: "half proficiency bonus per long rest",
                  description:
                    "Ally casts your locked-in Charms spell once per round",
                },
              ],
            },
          },
        ],
      },
      {
        level: 14,
        name: "Refined Techniques",
        description:
          "Choose: Wand and Shield (dual-casting concentration spells) or The Sound of Silence (enhanced subtle spellcasting).",
        choices: [
          {
            name: "Wand and Shield",
            description:
              "When casting Protego/Protego Maxima, transition to off-hand (bonus action dedication) while maintaining another concentration/dedication spell with your wand. Make separate Constitution saves for each spell when taking damage.",
            benefits: {
              specialAbilities: [
                {
                  name: "Wand and Shield",
                  type: "concentration enhancement",
                  description:
                    "Maintain two concentration spells (Protego in off-hand)",
                },
              ],
            },
          },
          {
            name: "The Sound of Silence",
            description:
              "Gain Subtle Spell metamagic (doesn't count toward limit). Use Subtle Spell for half normal sorcery points. If you already have Subtle Spell, exchange it for a different metamagic.",
            benefits: {
              metamagic: ["Subtle Spell (free)"],
              specialAbilities: [
                {
                  name: "Enhanced Subtle Spell",
                  type: "metamagic enhancement",
                  description: "Use Subtle Spell for half sorcery point cost",
                },
              ],
            },
          },
        ],
      },
      {
        level: 18,
        name: "Pinnacle of Casting",
        description:
          "Choose: Called Shot (reroll missed spell attacks) or Force of Will (enhanced save-or-suck spells with doubled areas).",
        choices: [
          {
            name: "Called Shot",
            description:
              "If you miss with a spell attack roll, reroll with advantage. Twice per rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Called Shot",
                  type: "reaction",
                  uses: "2 per rest",
                  description: "Reroll missed spell attacks with advantage",
                },
              ],
            },
          },
          {
            name: "Force of Will",
            description:
              "Creatures make saving throws against your Charms spells at disadvantage. Charms spells with area effects (cube, line, sphere, cone) have doubled area size.",
            benefits: {
              specialAbilities: [
                {
                  name: "Imposing Will",
                  type: "passive",
                  description:
                    "Enemies have disadvantage on saves vs your Charms spells",
                },
                {
                  name: "Expanded Areas",
                  type: "spell enhancement",
                  description: "Double area size for Charms AoE spells",
                },
              ],
            },
          },
        ],
      },
    ],
  },

  "Jinxes, Hexes, and Curses": {
    name: "Jinxes, Hexes, and Curses",
    description:
      "Specialists in harmful magic, curse-breaking, and dark arts combat with Auror training or spell dismantling expertise",
    higherLevelFeatures: [
      {
        level: 1,
        name: "Practical Studies",
        description:
          "At 1st level, you choose a specialization that defines your approach to dark magic - either becoming an Auror-in-training with investigative skills or focusing on curse-breaking techniques to dismantle hostile magic.",
        choices: [],
      },
      {
        level: 1,
        name: "Level 1 Specialization",
        description: "Choose your initial specialization approach.",
        choices: [
          {
            name: "Auror Training",
            description:
              "You've started practicing skills to become an Auror. You learn two common potion recipes (or one uncommon), gain an Auror's kit with tracking tools, disguise items, false identity materials, and a healing vial (1d4 HP per dose, proficiency bonus doses per long rest). Gain proficiency in two of: Investigation, Potion-Making, Stealth, Survival.",
            benefits: {
              equipment: ["Auror's Kit"],
              potionRecipes: {
                type: "choice",
                options: ["2 common recipes", "1 uncommon recipe"],
              },
              skillProficiencies: [
                {
                  type: "choice",
                  skills: [
                    "Investigation",
                    "Potion Making",
                    "Stealth",
                    "Survival",
                  ],
                  count: 2,
                },
              ],
              specialAbilities: [
                {
                  name: "Healing Vial",
                  type: "consumable",
                  healing: "1d4 HP per dose",
                  uses: "proficiency bonus doses per long rest",
                },
              ],
            },
          },
          {
            name: "Curse-Breaking",
            description:
              "Your curiosity in dismantling spells has found an outlet. When you or an ally within 5 feet are targeted by any Jinx, Hex, Curse, or Dark spell, you can use your reaction to make a spellcasting ability check (DC 10 + spell level). On success, you change the spell into a different locked-in JHC or Dark spell of your choosing.",
            benefits: {
              specialAbilities: [
                {
                  name: "Curse Redirection",
                  type: "reaction",
                  range: "self or ally within 5 feet",
                  description:
                    "Redirect JHC/Dark spells to different locked spell (DC 10 + spell level)",
                },
              ],
            },
          },
        ],
      },
      {
        level: 6,
        name: "Combat-Ready",
        description:
          "Choose: Forceful Magic (bonus action melee spell attacks with scaling damage) or Magical Adrenaline (self-healing in combat situations).",
        choices: [
          {
            name: "Forceful Magic",
            description:
              "When you cast a spell requiring a spell attack, make an additional melee spell attack as a bonus action (1d6 + spellcasting modifier damage). Damage increases: 1d8 at 8th level, 1d10 at 10th level, 1d12 at 12th level.",
            benefits: {
              specialAbilities: [
                {
                  name: "Forceful Magic",
                  type: "bonus action",
                  damage: {
                    base: "1d6 + spellcasting modifier",
                    scaling: {
                      8: "1d8",
                      10: "1d10",
                      12: "1d12",
                    },
                  },
                  description:
                    "Bonus action melee spell attack after casting spell attack",
                },
              ],
            },
          },
          {
            name: "Magical Adrenaline",
            description:
              "As a bonus action, regain 1d10 + your level hit points. Use 1 + Constitution modifier times per long rest (minimum 1).",
            benefits: {
              specialAbilities: [
                {
                  name: "Magical Adrenaline",
                  type: "bonus action",
                  healing: "1d10 + level",
                  uses: "1 + Constitution modifier per long rest (minimum 1)",
                },
              ],
            },
          },
        ],
      },
      {
        level: 9,
        name: "Enhanced Curses",
        description:
          "When you hit a creature with a Jinx, Hex, or Curse, use bonus action to deal additional damage equal to JHC modifier + Charisma modifier. Use JHC modifier times per long rest.",
        benefits: {
          specialAbilities: [
            {
              name: "Enhanced Curses",
              type: "bonus action",
              damage: "JHC modifier + Charisma modifier",
              uses: "JHC modifier times per long rest",
              description: "Bonus damage when hitting with JHC spells",
            },
          ],
        },
        choices: [],
      },
      {
        level: 10,
        name: "Specialized Skills",
        description:
          "Choose: Dark Traces (detect dark beings and magic) or Ward-Breaker (redirect area spells back to caster - requires Curse-Breaking choice).",
        choices: [
          {
            name: "Dark Traces",
            description:
              "As an action, detect Dark Beings or Dark magics within 60 feet until end of next turn (not behind total cover). Know creature type but not identity. Use 1 + Charisma modifier times per long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Dark Traces",
                  type: "action",
                  range: "60 feet",
                  duration: "until end of next turn",
                  uses: "1 + Charisma modifier per long rest",
                  description: "Detect Dark Beings and Dark magic",
                },
              ],
            },
          },
          {
            name: "Ward-Breaker",
            description:
              "Requires Curse-Breaking. When hostile creature casts JHC/Dark spell with area effect, reaction to make spellcasting check (DC 12 + spell level). Success redirects spell origin to center on the caster.",
            requirements: ["Curse-Breaking"],
            benefits: {
              specialAbilities: [
                {
                  name: "Ward-Breaker",
                  type: "reaction",
                  description:
                    "Redirect area JHC/Dark spells to center on caster (DC 12 + spell level)",
                },
              ],
            },
          },
        ],
      },
      {
        level: 14,
        name: "Cursemaster",
        description:
          "Choose: Dark Duelist (defensive mastery and spell enhancement) or Defensive Arts (counterattack when spells miss you).",
        choices: [
          {
            name: "Dark Duelist",
            description:
              "Advantage on saving throws against Jinxes, Hexes, Curses, or Dark spells. Your JHC/Dark spells are automatically cast one level higher than the consumed spell slot (not exceeding your highest available slot level).",
            benefits: {
              savingThrows: {
                advantage: ["Jinxes", "Hexes", "Curses", "Dark spells"],
              },
              specialAbilities: [
                {
                  name: "Dark Duelist",
                  type: "passive",
                  description: "Advantage on saves vs JHC/Dark spells",
                },
                {
                  name: "Empowered Dark Magic",
                  type: "spell enhancement",
                  description: "JHC/Dark spells cast at +1 spell level",
                },
              ],
            },
          },
          {
            name: "Defensive Arts",
            description:
              "If a creature misses a ranged spell attack against you, or you succeed on a spell's saving throw, blast the attacker with 4d6 arcane force damage as a reaction.",
            benefits: {
              specialAbilities: [
                {
                  name: "Defensive Arts",
                  type: "reaction",
                  damage: "4d6 force",
                  trigger: "When spell attack misses or save succeeds",
                  description: "Counterattack with arcane blast",
                },
              ],
            },
          },
        ],
      },
      {
        level: 18,
        name: "Legendary",
        description:
          "Choose: Dark Manipulation (summon inferi allies) or Unravelling Magic (automatically succeed on specific dispelling spells).",
        choices: [
          {
            name: "Dark Manipulation",
            description:
              "Use an action to summon two inferi to fight with you. Once per long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Dark Manipulation",
                  type: "action",
                  summons: "2 inferi",
                  uses: "1 per long rest",
                  description: "Summon inferi allies",
                },
              ],
            },
          },
          {
            name: "Unravelling Magic",
            description:
              "You automatically succeed whenever casting Finite Incantatem and Langlock spells.",
            benefits: {
              specialAbilities: [
                {
                  name: "Unravelling Magic",
                  type: "spell enhancement",
                  description: "Auto-succeed on Finite Incantatem and Langlock",
                },
              ],
            },
          },
        ],
      },
    ],
  },

  Transfiguration: {
    name: "Transfiguration",
    description:
      "Masters of transformation magic with specializations in anatomy, elements, or magical weaponry",
    higherLevelFeatures: [
      {
        level: 1,
        name: "Scientific Studies",
        description:
          "At 1st level, you gain Anatomy Textbook and one of the following features.",
        benefits: {
          specialAbilities: [
            {
              name: "Anatomy Textbook",
              type: "spell enhancement",
              description:
                "When casting a Transfiguration spell that normally requires a higher-level slot to affect a living creature, you can instead use a slot one level lower than normal. In addition, when you cast Vera Verto, it can automatically target creatures one size larger than normally allowed for the slot level used.",
            },
          ],
        },
        choices: [],
      },
      {
        level: 1,
        name: "Level 1 Specialization",
        description: "Choose your initial specialization approach.",
        choices: [
          {
            name: "Animagus Transformation",
            description:
              "You can use your action to magically assume the shape of your animagus form. You can use this feature twice. You regain expended uses when you finish a short or long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Animagus Form",
                  type: "transformation",
                  uses: "2 per short rest",
                  description: "Transform into chosen animal form",
                },
              ],
            },
          },
          {
            name: "Elementalist",
            description:
              "Your study of Alchemy has given you insights in the nature of elements. You can choose one of the following Effects: Any spell that involves only fire, water, earth, or air is automatically cast one level higher than the consumed spell slot, not exceeding the highest available level of spell slots you have. OR Any time you cast a spell that deals acid, cold, fire, lightning, or thunder damage, you deal an additional 1d4 damage. The damage die increases to 2d4 at 5th Level, 3d4 at 9th level, 4d4 at 13th level and 5d4 at 17th level. Additionally, you can use a bonus action on your turn to cause whirling gusts of elemental air to briefly surround you, immediately before or after you cast a spell of 1st level or higher. Doing so allows you to fly up to 10 feet without provoking opportunity attacks.",
            benefits: {
              specialAbilities: [
                {
                  name: "Elemental Enhancement",
                  type: "choice",
                  options: [
                    "Elemental spells (fire/water/earth/air only) cast at +1 level",
                    "Extra elemental damage (1d4-5d4 scaling) + 10ft bonus action flight",
                  ],
                },
              ],
            },
          },
          {
            name: "Transfigured Armament",
            description:
              "When you cast Vera Verto, you may transfigure your wand into the form of any singular melee weapon of your choosing. Your Transfigured Armament uses your Strength ability for attack and damage rolls. The damage dealt is considered magical for the purposes of overcoming resistance to damage from non-magical attacks.",
            benefits: {
              weaponProficiencies: ["All melee weapons (when transfigured)"],
              specialAbilities: [
                {
                  name: "Wand Weaponry",
                  type: "spell enhancement",
                  description:
                    "Transform wand into melee weapon with Vera Verto (uses Strength, magical damage)",
                },
              ],
            },
          },
        ],
      },
      {
        level: 4,
        name: "Elemental Spirit (Optional ASI)",
        description:
          "Requires Elementalist. Summon elemental spirits (Poison, Ice, Flame, Lightning, Wind) that deal 2d6 damage in 10-foot radius and fight alongside you. Once per long rest.",
        requirements: ["Elementalist"],
        benefits: {
          specialAbilities: [
            {
              name: "Elemental Spirit",
              type: "action",
              summons: "Elemental spirit",
              damage: "2d6 in 10ft radius",
              uses: "1 per long rest",
            },
          ],
        },
        choices: [],
      },
      {
        level: 6,
        name: "Transfiguration Prodigy",
        description:
          "Choose: Animagus Transformation (shapechanging ability), Elemental Casting (spell list + damage aura), or Rune-Etched Weapon (spellcasting through weapons - requires Transfigured Armament).",
        choices: [
          {
            name: "Arcane Attacks",
            description:
              "Animagus Transformation Required. You can attack twice, instead of once, whenever you take the Attack action on your turn. Additionally, your attacks in your form count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage. The number of attacks increases to three at 18th level.",
            requirements: ["Animagus Transformation"],
            benefits: {
              specialAbilities: [
                {
                  name: "Extra Attack",
                  type: "combat",
                  description: "2 attacks per turn (3 at 18th level)",
                  scaling: {
                    6: "2 attacks",
                    18: "3 attacks",
                  },
                },
                {
                  name: "Magical Attacks",
                  type: "passive",
                  description: "Animagus attacks count as magical",
                },
              ],
            },
          },
          {
            name: "Elemental Casting",
            description:
              "Elementalist Required. You gain access to the Elemental Casting spell list. Additionally, whenever you start casting a spell of 1st level or higher that deals acid, cold, fire, lightning, or thunder damage, magic erupts from you. This eruption causes creatures of your choice that you can see within 10 feet of you to take acid, cold, fire, lightning, or thunder damage (choose each time this ability activates) equal to half your level. This damage can activate once per turn. You can do this a number of times equal to your proficiency bonus per long rest.",
            requirements: ["Elementalist"],
            benefits: {
              spellList: "Elemental Casting",
              specialAbilities: [
                {
                  name: "Elemental Eruption",
                  type: "passive",
                  damage: "half level elemental",
                  range: "10 feet",
                  uses: "proficiency bonus per long rest",
                  trigger: "When casting elemental damage spell",
                },
              ],
            },
          },
          {
            name: "Rune-Etched Weapon",
            description:
              "Transfigured Armament Required. Your understanding of your wand as both spellcasting implement and as a transfigured armament allows you to wield it as both with increased accuracy and effectiveness. You use your spell casting ability modifier instead of your strength modifier for attack rolls and damage rolls with your Transfigured Armament. As an action, you may expend 2 sorcery points to cast a spell with a regular range of 30 feet and cast it as a touch spell, if the spell has the possibility of targeting more than 1 creature, it can be used to affect 1 creature. If you have access to the Quickened Spell metamagic, you may instead cast this spell as a bonus action immediately after successfully hitting a target with your transfigured armament, using the result of the melee weapon attack roll to hit with the touch spell attack roll as well. Additionally, you can cast any locked in spells through your Transfigured Armament as if it were a spell blade.",
            requirements: ["Transfigured Armament"],
            benefits: {
              specialAbilities: [
                {
                  name: "Enhanced Weapon Combat",
                  type: "combat enhancement",
                  description:
                    "Use spellcasting modifier for weapon attacks and damage",
                },
                {
                  name: "Touch Spell Conversion",
                  type: "spell enhancement",
                  cost: "2 sorcery points",
                  description: "Convert 30ft spells to touch through weapon",
                },
                {
                  name: "Quickened Touch Casting",
                  type: "bonus action",
                  requirement: "Quickened Spell metamagic",
                  description:
                    "Cast touch spell after weapon hit using same attack roll",
                },
                {
                  name: "Spell Blade",
                  type: "spell enhancement",
                  description: "Cast locked spells through weapon",
                },
              ],
            },
          },
        ],
      },
      {
        level: 8,
        name: "Magic Weaponry (Optional ASI)",
        description:
          "You can optionally take this feature in place of an Ability score Improvement or Feat.",
        choices: [
          {
            name: "I Cast Smack",
            description:
              "Transfigured Armament Required. You gain access to the Valiant spell list, and can cast any Cantrips or Valiant spells through your Transfigured Armament in place of a wand. Additionally, you can choose one of the following: Archery (gain ability to turn weapon into ranged weapon 80/320, +2 to ranged attack rolls) OR Sightless Swordsman (blindsight 10 feet, see invisible creatures unless hidden).",
            requirements: ["Transfigured Armament"],
            benefits: {
              spellList: "Valiant",
              specialAbilities: [
                {
                  name: "Weapon Spellcasting",
                  type: "spell enhancement",
                  description:
                    "Cast Valiant spells through Transfigured Armament",
                },
                {
                  name: "Combat Specialization",
                  type: "choice",
                  options: [
                    "Archery: Ranged weapon (80/320), +2 ranged attack bonus",
                    "Sightless Swordsman: Blindsight 10ft, see invisible",
                  ],
                },
              ],
            },
          },
        ],
      },
      {
        level: 9,
        name: "Feats of Strength",
        description:
          "Choose: Alchemist's Stone (magical item creation), Aura of Valiance (saving throw bonuses), or Elemental Push (movement control with elemental damage).",
        choices: [
          {
            name: "Alchemist's Stone",
            description:
              "Requires Anatomy Textbook or Intuitive Conversion. Create stone granting: Darkvision 60ft, +10 speed, Con save proficiency, or elemental resistance. Change effect when casting Transfiguration spells.",
            requirements: ["Anatomy Textbook", "Intuitive Conversion"],
            benefits: {
              specialAbilities: [
                {
                  name: "Alchemist's Stone",
                  type: "item creation",
                  effects: [
                    "Darkvision 60ft",
                    "+10 speed",
                    "Con save proficiency",
                    "elemental resistance",
                  ],
                  description: "Create magical stone with changeable effects",
                },
              ],
            },
          },
          {
            name: "Aura of Valiance",
            description:
              "Requires Transfigured Armament. You and allies within 10 feet (30 feet at 18th level) gain Strength modifier bonus to saving throws while you're conscious.",
            requirements: ["Transfigured Armament"],
            benefits: {
              specialAbilities: [
                {
                  name: "Aura of Valiance",
                  type: "aura",
                  range: {
                    base: "10 feet",
                    scaling: { 18: "30 feet" },
                  },
                  bonus: "Strength modifier to saves",
                },
              ],
            },
          },
          {
            name: "Elemental Push",
            description:
              "Requires Elementalist. Elemental damage reduces creature speed by 10 feet. Add Strength modifier to Incendio Ruptis damage.",
            requirements: ["Elementalist"],
            benefits: {
              specialAbilities: [
                {
                  name: "Elemental Slow",
                  type: "passive",
                  description: "Elemental damage reduces speed by 10ft",
                },
                {
                  name: "Enhanced Incendio",
                  type: "spell enhancement",
                  description:
                    "Add Strength modifier to Incendio Ruptis damage",
                },
              ],
            },
          },
        ],
      },
      {
        level: 10,
        name: "Precise Control",
        description:
          "Choose: Partial Transfiguration (affect only desired portions), Molding the Elements (counterattack with elemental damage + knockback), or Power Strike (cantrip + weapon attack combo).",
        choices: [
          {
            name: "Partial Transfiguration",
            description:
              "Any Transfiguration spell can target only desired portions of the target while maintaining all normal capabilities and restrictions.",
            benefits: {
              specialAbilities: [
                {
                  name: "Partial Transfiguration",
                  type: "spell enhancement",
                  description:
                    "Target specific portions with Transfiguration spells",
                },
              ],
            },
          },
          {
            name: "Molding the Elements",
            description:
              "When hit by attack, reaction to deal your level in elemental damage and force Strength save (DC = spell save DC). Failed save pushes 20 feet, failure by 5+ knocks prone.",
            benefits: {
              specialAbilities: [
                {
                  name: "Elemental Retaliation",
                  type: "reaction",
                  damage: "character level",
                  save: "Strength",
                  effects: ["20ft push on fail", "prone on fail by 5+"],
                },
              ],
            },
          },
          {
            name: "Beast Caster",
            description:
              "Animagus Transformation Required. While in your animagus form you gain the ability to cast locked in cantrips as a bonus action. All cantrips cast this way have a range of 10 feet and cannot gain the benefits of Sorcerer or Casting Style features.",
            requirements: ["Animagus Transformation"],
            benefits: {
              specialAbilities: [
                {
                  name: "Animagus Spellcasting",
                  type: "bonus action",
                  description:
                    "Cast locked-in cantrips in animal form (10ft range)",
                },
              ],
            },
          },
          {
            name: "Power Strike",
            description:
              "Rune-Etched Weapon or I Cast Smack Required. When you use your action to cast a cantrip, you can make one weapon attack as a bonus action. Additionally, your weapon attacks score a critical hit on a roll of 19 or 20.",
            requirements: ["Rune-Etched Weapon", "I Cast Smack"],
            benefits: {
              specialAbilities: [
                {
                  name: "Spell-Weapon Combo",
                  type: "bonus action",
                  description: "Weapon attack after casting cantrip",
                },
                {
                  name: "Improved Critical",
                  type: "passive",
                  description: "Weapon attacks crit on 19-20",
                },
              ],
            },
          },
        ],
      },
      {
        level: 14,
        name: "Magically Reinforced",
        description:
          "Choose: Durable Constructs (enhanced creature constructs), Fortified Structures (stronger objects), Will of the Wind (flight + group flight), or Bonded Weaponry (weapon summoning).",
        choices: [
          {
            name: "Durable Constructs",
            description:
              "You imbue your constructs of creatures with a more potent magic. Your transfigured or conjured living constructs gain temporary hit points equal to your level, deal an additional 1d6 of damage, and can support three times as much weight as their mundane equivalents.",
            benefits: {
              specialAbilities: [
                {
                  name: "Reinforced Constructs",
                  type: "passive",
                  bonus: "Level temp HP + 1d6 damage + 3x weight capacity",
                },
              ],
            },
          },
          {
            name: "Fortified Structures",
            description:
              "Transfigured/conjured objects have twice the HP and support three times the weight of mundane equivalents.",
            benefits: {
              specialAbilities: [
                {
                  name: "Fortified Objects",
                  type: "passive",
                  description:
                    "2x HP and 3x weight capacity for conjured objects",
                },
              ],
            },
          },
          {
            name: "Will of the Wind",
            description:
              "Gain 60-foot magical fly speed. Can reduce to 30 feet for 1 hour to grant 30-foot fly speed to 3 + Transfiguration modifier creatures. Once per short rest.",
            benefits: {
              speeds: {
                fly: "60 feet (magical)",
              },
              specialAbilities: [
                {
                  name: "Group Flight",
                  type: "action",
                  duration: "1 hour",
                  targets: "3 + Transfiguration modifier creatures",
                  uses: "1 per short rest",
                },
              ],
            },
          },
          {
            name: "Bonded Weaponry",
            description:
              "Requires Transfigured Armament. Ritual bond with weapon prevents disarming and allows bonus action summoning from same plane.",
            requirements: ["Transfigured Armament"],
            benefits: {
              specialAbilities: [
                {
                  name: "Weapon Bond",
                  type: "passive",
                  description: "Cannot be disarmed",
                },
                {
                  name: "Weapon Recall",
                  type: "bonus action",
                  description: "Summon bonded weapon from same plane",
                },
              ],
            },
          },
        ],
      },
      {
        level: 18,
        name: "Molecular Manipulator",
        description:
          "Choose: Apex Predator (enhanced Animagus), True Alchemist (Philosopher's Stone), Element Blast (immunity + damage boost), or Deadly Strike (enhanced weapon criticals).",
        choices: [
          {
            name: "Apex Predator",
            description:
              "Requires Animagus Transformation. Transform as bonus action, gain two additional animal forms that can be hidden from Ministry, use any as corporeal patronus.",
            requirements: ["Animagus Transformation"],
            benefits: {
              specialAbilities: [
                {
                  name: "Swift Transformation",
                  type: "bonus action",
                  description: "Transform into Animagus form",
                },
                {
                  name: "Expanded Forms",
                  type: "passive",
                  description: "2 additional hidden forms, usable as patronus",
                },
              ],
            },
          },
          {
            name: "True Alchemist",
            description:
              "Create Philosopher's Stone (turn metal to gold, Elixir of Life). Cannot die naturally, age 1 year per 10 years passed. Only one stone may exist.",
            benefits: {
              specialAbilities: [
                {
                  name: "Philosopher's Stone",
                  type: "item creation",
                  abilities: ["Turn metal to gold", "Create Elixir of Life"],
                  description: "Immortality - age 1 year per 10 years",
                },
              ],
            },
          },
          {
            name: "Element Blast",
            description:
              "Immunity to two elemental damage types (acid, cold, fire, lightning, thunder). Transfiguration damage spells deal extra half-level elemental damage to one target.",
            benefits: {
              immunities: [
                {
                  type: "choice",
                  count: 2,
                  options: ["acid", "cold", "fire", "lightning", "thunder"],
                },
              ],
              specialAbilities: [
                {
                  name: "Elemental Empowerment",
                  type: "spell enhancement",
                  damage: "half level elemental",
                  targets: "one target",
                },
              ],
            },
          },
          {
            name: "Deadly Strike",
            description:
              "Requires Transfigured Armament. Weapon hits give target disadvantage on next spell save. Weapon attacks crit on 18-20.",
            requirements: ["Transfigured Armament"],
            benefits: {
              specialAbilities: [
                {
                  name: "Weakening Strike",
                  type: "passive",
                  description:
                    "Weapon hits impose disadvantage on next spell save",
                },
                {
                  name: "Superior Critical",
                  type: "passive",
                  description: "Weapon attacks crit on 18-20",
                },
              ],
            },
          },
        ],
      },
    ],
  },

  Healing: {
    name: "Healing",
    description:
      "Medical specialists and field medics with enhanced healing magic and protective abilities",
    higherLevelFeatures: [
      {
        level: 1,
        name: "Medical Studies",
        description:
          "At 1st level, you gain Star Grass Salve recipe and choose a specialization that defines your approach to healing magic - focusing on personal resilience, enhanced healing power, or group support bonds.",
        choices: [],
      },
      {
        level: 1,
        name: "Star Grass Salve",
        description:
          "You learn the star grass salve recipe. Use Intelligence (Potion Making) or Wisdom (Medicine) instead of Wisdom (Potion Making) when brewing. When administering star grass salve to others, it heals additional HP equal to your level.",
        benefits: {
          potionRecipes: ["Star Grass Salve"],
          specialAbilities: [
            {
              name: "Medical Expertise",
              type: "passive",
              description:
                "Use Int (Potion Making) or Wis (Medicine) for brewing",
            },
            {
              name: "Enhanced Salve",
              type: "passive",
              description:
                "Star grass salve heals +level HP when you administer",
            },
          ],
        },
        choices: [],
      },
      {
        level: 1,
        name: "Level 1 Specialization",
        description: "Choose your initial specialization approach.",
        choices: [
          {
            name: "Unshakable Nerves",
            description:
              "Your study of injuries and diseases has given you iron will. Cannot be frightened by non-magical effects and have advantage on Constitution saving throws.",
            benefits: {
              immunities: ["frightened (non-magical)"],
              savingThrows: {
                advantage: ["Constitution"],
              },
              specialAbilities: [
                {
                  name: "Iron Will",
                  type: "passive",
                  description:
                    "Immune to non-magical fear, advantage on Con saves",
                },
              ],
            },
          },
          {
            name: "Powerful Healer",
            description:
              "Your healing spells are more effective. When using spells of 1st level or higher to restore HP, the target regains additional HP equal to 2 + spell level.",
            benefits: {
              specialAbilities: [
                {
                  name: "Enhanced Healing",
                  type: "spell enhancement",
                  bonus: "2 + spell level HP",
                  description: "Bonus healing on 1st+ level healing spells",
                },
              ],
            },
          },
          {
            name: "Therapeutic Friendship",
            description:
              "Create magical bonds among willing creatures (proficiency bonus creatures within 30 feet for 10 minutes). Bonded creatures within 30 feet of each other can add 1d4 to attack rolls, ability checks, or saves once per turn. Use proficiency bonus times per long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Therapeutic Bonds",
                  type: "action",
                  duration: "10 minutes",
                  targets: "proficiency bonus creatures",
                  range: "30 feet",
                  bonus: "1d4 to attacks/checks/saves once per turn",
                  uses: "proficiency bonus per long rest",
                },
              ],
            },
          },
        ],
      },
      {
        level: 4,
        name: "Restorative Presence (Optional ASI)",
        description:
          "Choose: Preserve Life (distribute healing points among multiple targets) or Life Balm (movement-based healing without opportunity attacks).",
        choices: [
          {
            name: "Preserve Life",
            description:
              "As an action, restore HP equal to 5 × your level. Divide among creatures within 30 feet, maximum half their HP max each. Cannot target undead/constructs. Use half proficiency bonus times per long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Preserve Life",
                  type: "action",
                  healing: "5 × level total",
                  range: "30 feet",
                  limitation: "max half HP per creature",
                  uses: "half proficiency bonus per long rest",
                },
              ],
            },
          },
          {
            name: "Life Balm",
            description:
              "As an action, move up to speed without provoking opportunity attacks. When moving within 5 feet of creatures, restore 2d6 + spellcasting modifier HP (minimum 1). Each creature can benefit once per use. Use half proficiency bonus times per long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Life Balm",
                  type: "action + movement",
                  healing: "2d6 + spellcasting modifier",
                  range: "5 feet while moving",
                  uses: "half proficiency bonus per long rest",
                },
              ],
            },
          },
        ],
      },
      {
        level: 6,
        name: "Dedicated Protector",
        description:
          "Choose: An Ounce of Prevention (self-healing when healing others), A Saving-People Thing (ally damage redirection), or Potent Spellcasting (spell attack damage bonus).",
        choices: [
          {
            name: "An Ounce of Prevention",
            description:
              "Requires Powerful Healer. When casting healing spells of 1st level+ on others, you regain HP equal to 2 + spell level.",
            requirements: ["Powerful Healer"],
            benefits: {
              specialAbilities: [
                {
                  name: "Reciprocal Healing",
                  type: "passive",
                  healing: "2 + spell level",
                  trigger: "When healing others with 1st+ level spells",
                },
              ],
            },
          },
          {
            name: "A Saving-People Thing",
            description:
              "Requires Therapeutic Friendship. When bonded creature takes damage, another bonded creature within 30 feet can use reaction to cast Protego, teleport within 5 feet, and take all damage instead.",
            requirements: ["Therapeutic Friendship"],
            benefits: {
              specialAbilities: [
                {
                  name: "Protective Bond",
                  type: "reaction",
                  range: "30 feet",
                  abilities: [
                    "Cast Protego",
                    "Teleport within 5ft",
                    "Take all damage",
                  ],
                },
              ],
            },
          },
          {
            name: "Potent Spellcasting",
            description:
              "Once per turn when hitting with spell attack, deal extra 1d8 radiant damage (2d8 at 14th level).",
            benefits: {
              specialAbilities: [
                {
                  name: "Radiant Strike",
                  type: "passive",
                  damage: {
                    base: "1d8 radiant",
                    scaling: { 14: "2d8 radiant" },
                  },
                  frequency: "once per turn",
                },
              ],
            },
          },
        ],
      },
      {
        level: 9,
        name: "Spell Breaker",
        description:
          "When restoring HP with 1st level+ spell, can also end one spell on the target. Ended spell level must be ≤ healing spell slot level used.",
        benefits: {
          specialAbilities: [
            {
              name: "Spell Breaker",
              type: "spell enhancement",
              description:
                "End one spell when healing (spell level ≤ healing spell level)",
            },
          ],
        },
        choices: [],
      },
      {
        level: 10,
        name: "Moral Support",
        description:
          "Choose: Never Give Up (death save advantage and bonus healing), Emergency Care Plan (doubled healing ranges), or When It Matters (DM discretion ally reinforcement).",
        choices: [
          {
            name: "Never Give Up",
            description:
              "While conscious, allies within 60 feet have advantage on death saves. Allies stabilized/healed from dying by your healing receive bonus HP equal to your level.",
            benefits: {
              specialAbilities: [
                {
                  name: "Death Ward Aura",
                  type: "aura",
                  range: "60 feet",
                  effect: "Allies have advantage on death saves",
                },
                {
                  name: "Revival Bonus",
                  type: "passive",
                  healing: "level bonus HP when reviving",
                },
              ],
            },
          },
          {
            name: "Emergency Care Plan",
            description:
              "All Healing spell ranges doubled (Touch becomes 60 feet). Can cast healing spells on targets within range as long as you can hear them.",
            benefits: {
              specialAbilities: [
                {
                  name: "Extended Reach",
                  type: "spell enhancement",
                  description: "Double healing spell ranges, Touch → 60ft",
                },
                {
                  name: "Audio Targeting",
                  type: "spell enhancement",
                  description: "Can heal any target you can hear",
                },
              ],
            },
          },
          {
            name: "When It Matters",
            description:
              "When rolling initiative (DM discretion), romantic partner, best friend, or significant NPC may apparate to your side for defense.",
            benefits: {
              specialAbilities: [
                {
                  name: "Loyal Defender",
                  type: "narrative",
                  trigger: "Rolling initiative (DM discretion)",
                  effect: "Ally apparates to defend",
                },
              ],
            },
          },
        ],
      },
      {
        level: 14,
        name: "Combat Medic",
        description:
          "Choose: Phoenix Tears (magical cure-all creation) or Bold Caster (enhanced cantrip damage).",
        choices: [
          {
            name: "Phoenix Tears",
            description:
              "After 8 hours of magical outreach, a phoenix provides tears that remove all curses, diseases, poisons and restore all HP. Only works when you have no other tears, loses power if anyone else possesses/administers them.",
            benefits: {
              specialAbilities: [
                {
                  name: "Phoenix Tears",
                  type: "item creation",
                  time: "8 hours",
                  effects: [
                    "Remove all curses",
                    "Remove all diseases",
                    "Remove all poisons",
                    "Restore all HP",
                  ],
                  limitations: [
                    "Must have no other tears",
                    "Personal use only",
                  ],
                },
              ],
            },
          },
          {
            name: "Bold Caster",
            description:
              "Add your Healing modifier to damage dealt with any locked-in cantrips.",
            benefits: {
              specialAbilities: [
                {
                  name: "Empowered Cantrips",
                  type: "passive",
                  damage: "+Healing modifier",
                  applies: "locked-in cantrips",
                },
              ],
            },
          },
        ],
      },
      {
        level: 18,
        name: "Savior",
        description:
          "Choose: Empathic Bond (enhanced group protection with damage resistance) or Supreme Healing (maximum healing dice results).",
        choices: [
          {
            name: "Empathic Bond",
            description:
              "Requires A Saving-People Thing. Therapeutic Friendship and A Saving-People Thing work at 60 feet range. When using A Saving-People Thing to take damage, gain resistance to that damage.",
            requirements: ["A Saving-People Thing"],
            benefits: {
              specialAbilities: [
                {
                  name: "Extended Bonds",
                  type: "range enhancement",
                  newRange: "60 feet",
                },
                {
                  name: "Protective Resistance",
                  type: "passive",
                  description: "Resistance when taking damage for ally",
                },
              ],
            },
          },
          {
            name: "Supreme Healing",
            description:
              "When rolling dice to restore HP with spells, use highest possible result for each die (e.g., 2d6 becomes 12 HP restored).",
            benefits: {
              specialAbilities: [
                {
                  name: "Supreme Healing",
                  type: "spell enhancement",
                  description: "Maximize all healing dice",
                },
              ],
            },
          },
        ],
      },
    ],
  },

  Divinations: {
    name: "Divinations",
    description:
      "Seers and mind-readers with foresight abilities, mental manipulation, and mystical perception",
    higherLevelFeatures: [
      {
        level: 1,
        name: "Clairvoyant Studies",
        description:
          "At 1st level, you gain a Diviner's Kit and proficiency with it. Add half proficiency bonus to Initiative and cannot be surprised while conscious. Choose a specialization that defines your approach to divination magic.",
        benefits: {
          toolProficiencies: ["Diviner's kit"],
          combatBonuses: {
            initiative: "half proficiency bonus",
          },
          immunities: ["surprised (while conscious)"],
          specialAbilities: [
            {
              name: "Clairvoyant Reflexes",
              type: "passive",
              description: "Cannot be surprised while conscious",
            },
          ],
        },
        choices: [],
      },
      {
        level: 1,
        name: "Level 1 Specialization",
        description: "Choose your initial specialization approach.",
        choices: [
          {
            name: "Foresight",
            description:
              "You see omens everywhere. After long rest, roll two d20s and record as foresight rolls. Expend one to replace any attack roll, saving throw, or ability check you can see (once per turn). Reroll after long rest. Gain third roll at 10th level.",
            benefits: {
              specialAbilities: [
                {
                  name: "Foresight",
                  type: "resource",
                  uses: {
                    base: "2 d20 rolls",
                    scaling: { 10: "3 d20 rolls" },
                  },
                  refresh: "long rest",
                  description: "Replace any visible d20 roll once per turn",
                },
              ],
            },
          },
          {
            name: "Legilimency",
            description:
              "Add Legilimens to locked spells. Cast Legilimens at-will (verbal or non-verbal). Resistance attempts against your Legilimens are made at disadvantage.",
            benefits: {
              spells: ["Legilimens"],
              specialAbilities: [
                {
                  name: "Natural Legilimens",
                  type: "at-will",
                  description: "Cast Legilimens at-will",
                },
                {
                  name: "Imposing Mind",
                  type: "passive",
                  description:
                    "Targets have disadvantage on saves vs your Legilimens",
                },
              ],
            },
          },
        ],
      },
      {
        level: 6,
        name: "Farseeing",
        description:
          "Choose: Font of Divination (spell slot recovery through divination magic) or Skilled Occlumens (mental defense and deception abilities).",
        choices: [
          {
            name: "Font of Divination",
            description:
              "When casting divination spell of 2nd level+ using spell slot, regain one expended spell slot. Regained slot must be lower level than cast spell, max 5th level.",
            benefits: {
              specialAbilities: [
                {
                  name: "Divination Recovery",
                  type: "spell recovery",
                  trigger: "Cast 2nd+ level divination spell",
                  recovery: "1 slot of lower level (max 5th)",
                },
              ],
            },
          },
          {
            name: "Skilled Occlumens",
            description:
              "Legilimens and Veritaserum don't work on you unless you allow it. Can choose to let Legilimens continue while revealing false information, emotions, or memories of your choosing.",
            benefits: {
              immunities: [
                "Legilimens (unless allowed)",
                "Veritaserum (unless allowed)",
              ],
              specialAbilities: [
                {
                  name: "Mental Fortress",
                  type: "passive",
                  description: "Immune to mind reading unless allowed",
                },
                {
                  name: "False Memories",
                  type: "reaction",
                  description: "Feed false information to Legilimens attempts",
                },
              ],
            },
          },
        ],
      },
      {
        level: 9,
        name: "Sensing Danger",
        description:
          "Add full proficiency bonus to Initiative and add half Divinations modifier (rounded up, minimum +1) to AC.",
        benefits: {
          combatBonuses: {
            initiative: "full proficiency bonus",
            acBonus: "half Divinations modifier (minimum +1)",
          },
          specialAbilities: [
            {
              name: "Heightened Awareness",
              type: "passive",
              description:
                "Full proficiency to initiative, half Div modifier to AC",
            },
          ],
        },
        choices: [],
      },
      {
        level: 10,
        name: "The Unseeable",
        description:
          "Choose: Third Eye (enhanced perception abilities) or Mystic Sleep (dream manipulation, scrying, and portal creation).",
        choices: [
          {
            name: "Third Eye",
            description:
              "Action to gain one benefit until incapacitated or short/long rest: Darkvision 60ft, read any language, or see invisible creatures/objects within 10ft. Once per short/long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Third Eye",
                  type: "action",
                  duration: "until incapacitated or rest",
                  uses: "1 per short rest",
                  options: [
                    "Darkvision 60ft",
                    "Read any language",
                    "See invisible within 10ft",
                  ],
                },
              ],
            },
          },
          {
            name: "Mystic Sleep",
            description:
              "After rest, choose: Dream messaging (appear in target's dreams, shape environment, optional nightmare for 3d6 damage), Scrying (see/hear target with invisible sensor), or Portal (10ft circle to last long rest location). Once per long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Dream Walk",
                  type: "choice after rest",
                  uses: "1 per long rest",
                  options: [
                    "Dream messaging (3d6 nightmare damage)",
                    "Scrying (invisible sensor)",
                    "Portal (to last long rest location)",
                  ],
                },
              ],
            },
          },
        ],
      },
      {
        level: 14,
        name: "Revealed Intentions",
        description:
          "Universal: Once per downtime, automatically succeed on failed Activity or Relationship slot. Choose: Greater Foresight (enhanced foresight rerolls) or Darting Eyes (combat mind control with corruption risk).",
        benefits: {
          specialAbilities: [
            {
              name: "Social Insight",
              type: "downtime",
              uses: "1 per downtime",
              description: "Auto-succeed on failed Activity/Relationship",
            },
          ],
        },
        choices: [
          {
            name: "Greater Foresight",
            description:
              "Requires Foresight. Reroll one Foresight roll per day, must use new roll.",
            requirements: ["Foresight"],
            benefits: {
              specialAbilities: [
                {
                  name: "Fate Manipulation",
                  type: "daily",
                  uses: "1 reroll per day",
                  description: "Reroll one Foresight die",
                },
              ],
            },
          },
          {
            name: "Darting Eyes",
            description:
              "Requires Legilimency. Bonus action to cast Legilimens in combat, charming target with telepathic control. Action for total control until end of next turn (gain corruption point, max 4). Damage breaks charm, no effect on Occlumens.",
            requirements: ["Legilimency"],
            benefits: {
              specialAbilities: [
                {
                  name: "Combat Legilimens",
                  type: "bonus action",
                  effect: "Charm with telepathic control",
                },
                {
                  name: "Total Control",
                  type: "action",
                  duration: "until end of next turn",
                  cost: "1 corruption point (max 4)",
                },
              ],
            },
          },
        ],
      },
      {
        level: 18,
        name: "Mystical Knowledge",
        description:
          "Choose: Vivid Visions (see future action results before committing) or Master of Minds (weaponized Legilimens with psychic damage).",
        choices: [
          {
            name: "Vivid Visions",
            description:
              "Bonus action to see vision of your next action and consequences, rolling all required rolls. If you choose that action, vision becomes reality using same rolls. Once per long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Perfect Prescience",
                  type: "bonus action",
                  uses: "1 per long rest",
                  description: "Preview and lock in next action's results",
                },
              ],
            },
          },
          {
            name: "Master of Minds",
            description:
              "Requires Legilimency. When casting Legilimens as action, force Wisdom save. Target takes 4d8 psychic damage (failed save) or half (success). Damage increases by 1d8 per slot level above 3rd.",
            requirements: ["Legilimency"],
            benefits: {
              specialAbilities: [
                {
                  name: "Psychic Assault",
                  type: "spell enhancement",
                  damage: "4d8 psychic (+1d8 per level above 3rd)",
                  save: "Wisdom (half on success)",
                },
              ],
            },
          },
        ],
      },
    ],
  },
  Magizoology: {
    name: "Magizoology",
    description:
      "Beast masters and creature experts with magical companions, nature magic, and creature communication abilities",
    higherLevelFeatures: [
      {
        level: 1,
        name: "Biological Studies",
        description:
          "At 1st level, your study of magical creatures allows you to cast any known Healing spells on beasts. You gain a small trunk that carries magical beasts inside. Choose one specialization that defines your approach to creature study.",
        benefits: {
          equipment: ["Small trunk (carries magical beasts)"],
          specialAbilities: [
            {
              name: "Beast Healing",
              type: "passive",
              description: "Cast any known Healing spells on beasts",
            },
          ],
        },
        choices: [],
      },
      {
        level: 1,
        name: "Level 1 Specialization",
        description: "Choose your initial specialization approach.",
        choices: [
          {
            name: "Studious",
            description:
              "You maintain a personal notebook of beast findings. Whenever you add your Magical Creatures proficiency to an ability check, also add your Intelligence modifier. Focuses on academic knowledge and creature analysis.",
            benefits: {
              equipment: ["Personal notebook of beast findings"],
              specialAbilities: [
                {
                  name: "Academic Expertise",
                  type: "passive",
                  description:
                    "Add Intelligence modifier when using Magical Creatures proficiency",
                },
              ],
            },
          },
          {
            name: "Creature Empathy",
            description:
              "You have innate ability to communicate with bestial creatures. As an action, communicate simple ideas to creatures with Intelligence 3+ and read their basic mood, intent, emotional state, magical effects, needs, and how to avoid their attacks. Focuses on emotional connection and communication.",
            benefits: {
              specialAbilities: [
                {
                  name: "Beast Communication",
                  type: "action",
                  description:
                    "Communicate with creatures (Int 3+), read mood/intent/state/needs",
                },
              ],
            },
          },
        ],
      },
      {
        level: 6,
        name: "Way of the Wild",
        description:
          "Core: Wizard's Best Friend (beast companion with Command Dice system). Choose: Basically a Disney Princess (Magizoo spell list access) or Prepared Ambush (magical trap weaving).",
        benefits: {
          specialAbilities: [
            {
              name: "Wizard's Best Friend",
              type: "companion",
              description: "Beast companion with Command Dice system",
            },
          ],
        },
        choices: [
          {
            name: "Basically a Disney Princess",
            description:
              "Gain access to Magizoo Spell List (creature communication, summoning, control, transformation spells). May attempt to cast these spells in Care for Magical Creatures class.",
            benefits: {
              spellList: "Magizoo",
              specialAbilities: [
                {
                  name: "Magizoo Spell Access",
                  type: "passive",
                  description:
                    "Access to creature-related spells, can attempt in CMC class",
                },
              ],
            },
          },
          {
            name: "Prepared Ambush",
            description:
              "When casting 1st level+ spell targeting single creature/area, weave spell into surroundings as magical trap. Set trigger conditions and exclusions. Trap detected by Investigation vs spell save DC or Specialis Revelio.",
            benefits: {
              specialAbilities: [
                {
                  name: "Spell Trap Weaving",
                  type: "spell enhancement",
                  description:
                    "Weave spells into magical traps with triggers/exclusions",
                },
              ],
            },
          },
        ],
      },
      {
        level: 9,
        name: "Call Beasts",
        description:
          "High-pitched wail summons swarms to attack moving creatures. As reaction when creature within 60 feet moves, swarm attacks 5-foot square where creature stops (2d12 slashing damage when entering/starting turn in area). Once per short rest.",
        benefits: {
          specialAbilities: [
            {
              name: "Call Beasts",
              type: "reaction",
              damage: "2d12 slashing",
              range: "60 feet",
              area: "5-foot square",
              uses: "1 per short rest",
              description: "Summon swarm to attack where moving creature stops",
            },
          ],
        },
        choices: [],
      },
      {
        level: 10,
        name: "Outdoorswizard",
        description:
          "Core: Gentle Caretaker (enhanced beast companion stats). Choose: Survivalist (terrain mastery + group travel benefits) or Monster Hunting (analyze creature resistances/immunities).",
        benefits: {
          specialAbilities: [
            {
              name: "Gentle Caretaker",
              type: "companion enhancement",
              description: "Enhanced beast companion stats",
            },
          ],
        },
        choices: [
          {
            name: "Survivalist",
            description:
              "Gain proficiency (or expertise if already proficient) in Herbology and Survival. Group benefits: no difficult terrain slowdown, pass through non-magical plants without penalty, can't be surprised while resting (if you/party/companion keeps watch), advantage vs magical plant impediments.",
            benefits: {
              skillProficiencies: [
                {
                  type: "fixed",
                  skills: ["Herbology", "Survival"],
                  expertise: "if already proficient",
                },
              ],
              specialAbilities: [
                {
                  name: "Terrain Master",
                  type: "passive",
                  description: "Group ignores difficult terrain",
                },
                {
                  name: "Natural Passage",
                  type: "passive",
                  description:
                    "Pass through non-magical plants without penalty",
                },
                {
                  name: "Watchful Rest",
                  type: "passive",
                  description:
                    "Can't be surprised while resting if keeping watch",
                },
                {
                  name: "Plant Resistance",
                  type: "passive",
                  description: "Advantage vs magical plant impediments",
                },
              ],
            },
          },
          {
            name: "Monster Hunting",
            description:
              "Bonus action to analyze creature within 60 feet (Wisdom save, spend 2 sorcery points for disadvantage). Learn damage immunities, resistances, vulnerabilities. Hidden divination creatures appear to have none. Use Wisdom modifier times per long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Analyze Creature",
                  type: "bonus action",
                  range: "60 feet",
                  save: "Wisdom",
                  uses: "Wisdom modifier per long rest",
                  description:
                    "Learn resistances/immunities/vulnerabilities (2 SP for disadvantage)",
                },
              ],
            },
          },
        ],
      },
      {
        level: 14,
        name: "Genus Genius",
        description:
          "Choose: Beast Whisperer (calm hostile beasts), Exploited Vulnerabilities (mark weaknesses for allies), Based Magizoologist (healing aura for companions), or Friend of All (natural creatures hesitant to attack).",
        choices: [
          {
            name: "Beast Whisperer",
            description:
              "Action to use Wisdom (Magical Creatures) check to soothe hostile beast. Success makes beast neutral to party until you/party inflicts damage/conditions on it or identical beasts. Once per short rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Soothe Beast",
                  type: "action",
                  check: "Wisdom (Magical Creatures)",
                  uses: "1 per short rest",
                  description: "Make hostile beast neutral until harmed",
                },
              ],
            },
          },
          {
            name: "Exploited Vulnerabilities",
            description:
              "Bonus action to call out enemy weaknesses. Target takes additional 2d8 damage from allies' damaging spells until start of your next turn. Intelligence modifier uses per long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Mark Weakness",
                  type: "bonus action",
                  damage: "2d8 from ally spells",
                  duration: "until start of next turn",
                  uses: "Intelligence modifier per long rest",
                },
              ],
            },
          },
          {
            name: "Based Magizoologist",
            description:
              "Requires Gentle Caretaker. When Beast Companion ends turn within 20 feet of you, it regains HP equal to half your level.",
            requirements: ["Gentle Caretaker"],
            benefits: {
              specialAbilities: [
                {
                  name: "Companion Regeneration",
                  type: "passive",
                  healing: "half level",
                  range: "20 feet",
                  description:
                    "Beast companion heals when ending turn near you",
                },
              ],
            },
          },
          {
            name: "Friend of All",
            description:
              "When beast/plant creature attacks you, it must make Wisdom save vs your spell save DC. Failed save forces different target or automatic miss. Success grants 24-hour immunity. Creature aware of effect before attacking.",
            benefits: {
              specialAbilities: [
                {
                  name: "Natural Deterrent",
                  type: "passive",
                  save: "Wisdom vs spell save DC",
                  description:
                    "Beasts/plants must save or miss/retarget (24hr immunity on success)",
                },
              ],
            },
          },
        ],
      },
      {
        level: 18,
        name: "Sixth Sense",
        description:
          "Choose: Draconic Empathy (dragon companions if you've raised one from egg - requires Wizard's Best Friend) or Hunter's Reflexes (reaction spellcasting to interrupt enemy actions).",
        choices: [
          {
            name: "Draconic Empathy",
            description:
              "Requires Wizard's Best Friend. If you've raised a dragon from egg, it views you as ally and can serve as beast companion. Tamed dragons have own HP, hit dice, ability scores, and use natural attack actions.",
            requirements: ["Wizard's Best Friend"],
            benefits: {
              specialAbilities: [
                {
                  name: "Dragon Companion",
                  type: "companion",
                  description:
                    "Dragons raised from egg can serve as beast companions",
                },
              ],
            },
          },
          {
            name: "Hunter's Reflexes",
            description:
              "Reaction when seeing creature cast spell/attack: cast spell (action/bonus action/reaction casting time) targeting only that creature. Conditions/damage applied before target completes action. Damage imposes disadvantage on attack roll. Proficiency bonus uses per short rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Interrupt Casting",
                  type: "reaction",
                  uses: "proficiency bonus per short rest",
                  description:
                    "Cast spell to interrupt enemy spell/attack (damage causes disadvantage)",
                },
              ],
            },
          },
        ],
      },
    ],
  },

  "Dark Arts": {
    name: "Dark Arts",
    description:
      "Masters of forbidden magic and shadow techniques who embrace corruption to gain power through dark spells and malicious enchantments",
    higherLevelFeatures: [
      {
        level: 1,
        name: "Tricks of the Trade",
        description:
          "At 1st level, you learn how to make Liquid Darkness and choose one additional feature that defines your approach to dark magic.",
        choices: [],
      },
      {
        level: 1,
        name: "Liquid Darkness",
        description:
          "You learn the recipe to create a potion known as Liquid Darkness. When you make a Wisdom (Potion Making) check you may instead use Charisma (Persuasion) or Wisdom (Perception), representing time spent asking for help or cheating off others.",
        benefits: {
          potionRecipes: ["Liquid Darkness"],
          specialAbilities: [
            {
              name: "Alternative Brewing",
              type: "passive",
              description:
                "Use Charisma (Persuasion) or Wisdom (Perception) for Potion Making",
            },
          ],
        },
        choices: [],
      },
      {
        level: 1,
        name: "Level 1 Specialization",
        description: "Choose your initial specialization approach.",
        choices: [
          {
            name: "Embracing the Darkness",
            description:
              "As you embrace the darkness of the Dark Arts you grow ever more powerful. You gain a number of additional Sorcery Points equal to the number of Corruption Points you have, but take 1d4 points of Psychic Damage per corrupted sorcery point used.",
            benefits: {
              specialAbilities: [
                {
                  name: "Corrupted Power",
                  type: "resource",
                  bonus: "Sorcery Points equal to Corruption Points",
                  cost: "1d4 psychic damage per corrupted SP used",
                },
              ],
            },
          },
          {
            name: "Malice",
            description:
              "The anger in your heart has given you the ability to place a malicious curse on an enemy. As a bonus action, choose one creature you can see within 30 feet of you. The target is cursed for 1 minute. You gain bonus damage equal to your proficiency bonus (once per spell), critical hits on 19-20 against the target, and regain hit points when the cursed target dies. Once per short or long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Malicious Curse",
                  type: "bonus action",
                  range: "30 feet",
                  duration: "1 minute",
                  uses: "1 per short rest",
                  effects: [
                    "Bonus damage equal to proficiency (once per spell)",
                    "Crit on 19-20 vs target",
                    "Heal when target dies",
                  ],
                },
              ],
            },
          },
        ],
      },
      {
        level: 6,
        name: "Acolyte of Shadows",
        description:
          "You gain Forbidden Knowledge and choose one additional dark arts technique.",
        benefits: {
          specialAbilities: [
            {
              name: "Forbidden Knowledge",
              type: "passive",
              description: "Access to forbidden magical knowledge",
            },
          ],
        },
        choices: [
          {
            name: "Wrathful Magic",
            description:
              "You have learned how to channel your wrath into your spellwork. When you hit a creature with a spell attack, you can use a reaction to deal extra necrotic damage equal to 5 + twice your level. Use half proficiency bonus times per long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Wrathful Strike",
                  type: "reaction",
                  damage: "5 + (2 × level) necrotic",
                  uses: "half proficiency bonus per long rest",
                  trigger: "Hit with spell attack",
                },
              ],
            },
          },
          {
            name: "Dark Intentions",
            description:
              "The evil in your heart has become potent enough to affect those around you. Twice per long rest, choose Frightening (Wisdom save or frightened for 1 minute with halved speed) or Judging (gain advantage on attacks against target for 1d4 rounds).",
            benefits: {
              specialAbilities: [
                {
                  name: "Dark Intentions",
                  type: "action",
                  uses: "2 per long rest",
                  options: [
                    "Frightening: Wis save or frightened 1 min + half speed",
                    "Judging: Advantage on attacks for 1d4 rounds",
                  ],
                },
              ],
            },
          },
        ],
      },
      {
        level: 9,
        name: "Death Wish",
        description:
          "As an action, choose one creature you can see within 30 feet, cursing it until the end of your next turn. The next attack against the cursed creature grants vulnerability to all damage from that attack. Use half spellcasting ability modifier times per long rest.",
        benefits: {
          specialAbilities: [
            {
              name: "Death Wish",
              type: "action",
              range: "30 feet",
              duration: "until end of next turn",
              uses: "half spellcasting modifier per long rest",
              effect: "Next attack gains vulnerability to all damage",
            },
          ],
        },
        choices: [],
      },
      {
        level: 10,
        name: "Deeper Darkness",
        description:
          "Choose one feature that represents your deeper mastery of the Dark Arts.",
        choices: [
          {
            name: "Visions of Death",
            description:
              "When you hit with an attack, target must make Wisdom save or be unable to hear until your next turn and take 3d10 psychic damage (6d10 and unable to speak if failed by 5+). Once per long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Death Vision",
                  type: "trigger on hit",
                  save: "Wisdom",
                  damage: "3d10 psychic (6d10 + mute if fail by 5+)",
                  effect: "Deafened until next turn",
                  uses: "1 per long rest",
                },
              ],
            },
          },
          {
            name: "Dark Duelist",
            description:
              "Dark spells are automatically cast one level higher than the consumed spell slot. If you have reached Devious tier corruption, apply a random metamagic effect (roll 1d8 on metamagic table).",
            benefits: {
              specialAbilities: [
                {
                  name: "Enhanced Dark Magic",
                  type: "spell enhancement",
                  description: "Dark spells cast at +1 spell level",
                },
                {
                  name: "Chaotic Metamagic",
                  type: "conditional",
                  description: "Random metamagic at Devious corruption (1d8)",
                },
              ],
            },
          },
        ],
      },
      {
        level: 14,
        name: "Precision Strike",
        description:
          "Choose one feature that enhances your combat capabilities or dark magic mastery.",
        choices: [
          {
            name: "Advanced Defenses",
            description:
              "When you cast any protego-related spell, you can transition the spell's casting to your off-hand (bonus action dedication) while maintaining another concentration/dedication spell with your wand. Make separate saves for each spell.",
            benefits: {
              specialAbilities: [
                {
                  name: "Dual Concentration",
                  type: "concentration enhancement",
                  description:
                    "Maintain Protego in off-hand while concentrating on another spell",
                },
              ],
            },
          },
          {
            name: "Dark Curse",
            description:
              "When casting a spell with an attack roll, expend a bonus action to transform it into a Curse. If it hits, target makes Constitution save or gains 1d2 exhaustion (max 5). Curse removed by Wideye Potion or Vulnera Sanentur. Use spellcasting modifier times per day.",
            benefits: {
              specialAbilities: [
                {
                  name: "Exhausting Curse",
                  type: "bonus action",
                  save: "Constitution",
                  effect: "1d2 exhaustion (max 5)",
                  uses: "spellcasting modifier per day",
                  description: "Transform spell attacks into exhaustion curses",
                },
              ],
            },
          },
          {
            name: "Greater Judgment",
            description:
              "Requires Dark Intentions. When a creature under your Judgment makes an attack, use your reaction to make a spell attack against that creature using a spell of level equal to half proficiency bonus (rounded down) or lower.",
            requirements: ["Dark Intentions"],
            benefits: {
              specialAbilities: [
                {
                  name: "Punitive Strike",
                  type: "reaction",
                  trigger: "Judged creature attacks",
                  description:
                    "Spell attack using spell ≤ half proficiency bonus level",
                },
              ],
            },
          },
        ],
      },
      {
        level: 18,
        name: "Consumed By The Dark",
        description:
          "Choose one feature representing your complete mastery of dark magic.",
        choices: [
          {
            name: "Punishment",
            description:
              "Whenever a creature hits you with an attack, that creature takes psychic damage equal to your Charisma modifier (minimum 1) if you're not incapacitated.",
            benefits: {
              specialAbilities: [
                {
                  name: "Retributive Aura",
                  type: "passive",
                  damage: "Charisma modifier psychic (minimum 1)",
                  trigger: "When hit by attack",
                },
              ],
            },
          },
          {
            name: "Suffering",
            description:
              "You become a master of instant death. When you hit with a spell attack without disadvantage, target must make Constitution save (DC 8 + half your corruption points). On failure, double the damage of your attack.",
            benefits: {
              specialAbilities: [
                {
                  name: "Death Master",
                  type: "passive",
                  save: "Constitution (DC 8 + half corruption)",
                  effect: "Double damage on failed save",
                  trigger: "Hit with spell attack without disadvantage",
                },
              ],
            },
          },
        ],
      },
    ],
  },

  Culinarian: {
    name: "Culinarian",
    description:
      "Masters of magical cuisine who support allies through enchanted meals and recipes, combining culinary expertise with spellcasting abilities",
    higherLevelFeatures: [
      {
        level: 1,
        name: "Foodie",
        description:
          "At 1st level, you gain the Recipes feature and choose one culinary specialization. Additionally, you gain proficiency in Survival and Constitution saving throws (or Wisdom/Charisma saves if you already have Constitution).",
        benefits: {
          skillProficiencies: [
            {
              type: "fixed",
              skills: ["Survival"],
            },
          ],
          savingThrows: {
            proficiency: ["Constitution"],
            alternative: "Wisdom/Charisma if already have Constitution",
          },
        },
        choices: [],
      },
      {
        level: 1,
        name: "Recipes",
        description:
          "You learn three recipes from your cookbook. After a long rest, prepare recipes equal to your proficiency bonus. Creatures consume meals as a bonus action. You gain 'Prepare Meal' as an additional Free Period/Downtime action for learning new recipes or cooking additional meals.",
        benefits: {
          specialAbilities: [
            {
              name: "Magical Recipes",
              type: "resource",
              known: "3 recipes",
              prepared: "proficiency bonus",
              description: "Prepare magical meals, consumed as bonus action",
            },
            {
              name: "Prepare Meal",
              type: "downtime action",
              description: "Additional action for learning recipes or cooking",
            },
          ],
        },
        choices: [],
      },
      {
        level: 1,
        name: "Level 1 Specialization",
        description: "Choose your initial specialization approach.",
        choices: [
          {
            name: "Cooking by the Book",
            description:
              "Your culinary techniques overlap with potion-making. Use Survival (Wisdom) in place of Potion-Making (Wisdom) when brewing potions. Your self-experimentation gives you advantage on Constitution saving throws.",
            benefits: {
              savingThrows: {
                advantage: ["Constitution"],
              },
              specialAbilities: [
                {
                  name: "Culinary Alchemy",
                  type: "passive",
                  description: "Use Survival for Potion-Making checks",
                },
              ],
            },
          },
          {
            name: "No Reservations",
            description:
              "You are a devoted lover of Muggle cuisine. Gain proficiency in Muggle Studies. When Culinarian features require Survival (Wisdom) checks, you may use Muggle Studies (Intelligence) instead.",
            benefits: {
              skillProficiencies: [
                {
                  type: "fixed",
                  skills: ["Muggle Studies"],
                },
              ],
              specialAbilities: [
                {
                  name: "Worldly Cuisine",
                  type: "passive",
                  description:
                    "Use Muggle Studies (Int) for Survival (Wis) in Culinarian features",
                },
              ],
            },
          },
        ],
      },
      {
        level: 4,
        name: "Honorary House Elf (Optional)",
        description:
          "Can take instead of ASI/Feat. Learn favorite foods through Insight checks, then use Survival (Wisdom) for Persuasion checks when giving someone their favorite food.",
        benefits: {
          specialAbilities: [
            {
              name: "Favorite Foods",
              type: "passive",
              description:
                "Learn favorites with Insight, use Survival for Persuasion with favorite foods",
            },
          ],
        },
        choices: [],
      },
      {
        level: 6,
        name: "Worldly Insights",
        description:
          "Choose one feature that represents your growing mastery of culinary magic.",
        choices: [
          {
            name: "Fast Food",
            description:
              "You've got a stockpile of ready-made meals. As an action, summon one locked-in recipe as a completed meal from the kitchens. Use spellcasting modifier times per long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Instant Meal",
                  type: "action",
                  uses: "spellcasting modifier per long rest",
                  description: "Summon completed meal of locked-in recipe",
                },
              ],
            },
          },
          {
            name: "Yes, Chef!",
            description:
              "Your commanding presence carries into battle. Use Help action as bonus action on targets who can hear you. If they yell 'Yes, Chef!' and attempt your suggested action, they gain advantage on that roll.",
            benefits: {
              specialAbilities: [
                {
                  name: "Culinary Command",
                  type: "bonus action",
                  description:
                    "Help action as bonus, grants advantage if acknowledged",
                },
              ],
            },
          },
        ],
      },
      {
        level: 9,
        name: "Nourishment",
        description:
          "Whenever an ally consumes one of your recipes, they gain temporary hit points equal to 2d6 + your Intelligence or Wisdom modifier (whichever is higher, minimum 1).",
        benefits: {
          specialAbilities: [
            {
              name: "Nourishing Meals",
              type: "passive",
              tempHP: "2d6 + Int/Wis modifier",
              description: "Allies gain temp HP from your recipes",
            },
          ],
        },
        choices: [],
      },
      {
        level: 10,
        name: "Main Dish",
        description:
          "Choose one feature that represents your mastery of meal preparation.",
        choices: [
          {
            name: "Sugar Rush",
            description:
              "Creatures consuming your meals gain an additional action (cast spell 3rd level or lower, or Dash/Disengage/Hide/Use Object). Cannot be affected again until short/long rest. Spell level increases to 4th at 13th level, 5th at 17th level.",
            benefits: {
              specialAbilities: [
                {
                  name: "Sugar Rush",
                  type: "meal effect",
                  effect: "Extra action (spell or movement)",
                  scaling: {
                    10: "3rd level spells",
                    13: "4th level spells",
                    17: "5th level spells",
                  },
                  refresh: "short rest",
                },
              ],
            },
          },
          {
            name: "Dinnertime Bonding",
            description:
              "Once per semester, host a banquet with at least 5 people. Ask each the same question. Satisfactory answers grant one Foresight roll lasting until expended or end of semester.",
            benefits: {
              specialAbilities: [
                {
                  name: "Magical Banquet",
                  type: "narrative",
                  uses: "1 per semester",
                  reward: "1 Foresight roll per satisfactory answer",
                },
              ],
            },
          },
        ],
      },
      {
        level: 14,
        name: "Pièce de Résistance",
        description:
          "Choose one feature representing your culinary mastery pinnacle.",
        choices: [
          {
            name: "YES! CHEF!",
            description:
              "Requires Yes, Chef! When suggesting actions that force saving throws, targets make those saves at disadvantage if the ally yells 'Yes, Chef!' and follows through.",
            requirements: ["Yes, Chef!"],
            benefits: {
              specialAbilities: [
                {
                  name: "Commanding Presence",
                  type: "enhancement",
                  description:
                    "Suggested actions impose disadvantage on saves if acknowledged",
                },
              ],
            },
          },
          {
            name: "Royal Banquet",
            description:
              "Requires Dinnertime Bonding. Satisfactory answers grant two Foresight rolls. Participants can divulge secrets for immunity to poison/fear, +2d10 max HP, and same HP gain until semester end.",
            requirements: ["Dinnertime Bonding"],
            benefits: {
              specialAbilities: [
                {
                  name: "Grand Feast",
                  type: "narrative enhancement",
                  reward: "2 Foresight rolls per answer",
                  secretReward:
                    "Immunity to poison/fear, +2d10 max HP until semester end",
                },
              ],
            },
          },
          {
            name: "Eating Contest Champion",
            description:
              "Once per turn when eating a meal as bonus action, eat two meals instead. Use spellcasting ability modifier times per long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Double Consumption",
                  type: "bonus action enhancement",
                  uses: "spellcasting modifier per long rest",
                  description: "Eat two meals with one bonus action",
                },
              ],
            },
          },
        ],
      },
      {
        level: 18,
        name: "Michelin Starred Chef",
        description:
          "Choose one feature representing your absolute mastery of magical cuisine.",
        choices: [
          {
            name: "It's Fucking Raw!",
            description:
              "As bonus action, throw food at creatures up to 30 feet (attack roll if unwilling). Choose whether they gain positive or negative effects from your recipes when consumed.",
            benefits: {
              specialAbilities: [
                {
                  name: "Food Projectile",
                  type: "bonus action",
                  range: "30 feet",
                  description:
                    "Throw food with chosen positive/negative effects",
                },
              ],
            },
          },
          {
            name: "Where's The Lamb Sauce!",
            description:
              "As action, screech for 1 minute. Enemies within 60 feet make Intelligence saves at start of turn (3d8 psychic damage, half on success). Bonus action to throw arcane kitchen utensil (spell attack, 2d12 + spellcasting modifier force damage). Once per long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Kitchen Nightmare",
                  type: "action",
                  duration: "1 minute",
                  range: "60 feet",
                  save: "Intelligence",
                  damage: "3d8 psychic (half on success)",
                  uses: "1 per long rest",
                },
                {
                  name: "Utensil Barrage",
                  type: "bonus action",
                  damage: "2d12 + spellcasting modifier force",
                  description: "Throw arcane kitchen utensil",
                },
              ],
            },
          },
        ],
      },
    ],
  },

  "Herbology & Potions": {
    name: "Herbology & Potions",
    description:
      "Masters of botanical magic and alchemical arts who specialize in plant companions, potion brewing, and natural evocations to support allies and control the battlefield",
    higherLevelFeatures: [
      {
        level: 1,
        name: "Bottle Fame",
        description:
          "At 1st level, choose your specialization path that determines your approach to herbology and potions mastery.",
        choices: [],
      },
      {
        level: 1,
        name: "Level 1 Specialization",
        description: "Choose your initial specialization approach.",
        choices: [
          {
            name: "The Subtle Science",
            description:
              "You gain a well-loved heirloom potions textbook filled with ancestral notes. Gain Potions Kit, proficiency in Potions Kit and Potion-Making, and access to 3 additional common potion recipes. Add Intelligence modifier to Potion Making (Wisdom) checks. Learn 2 Uncommon recipes at 6th level, 1 Rare at 10th, 1 Very Rare at 14th.",
            benefits: {
              equipment: ["Heirloom potions textbook", "Potions Kit"],
              toolProficiencies: ["Potioneer's kit"],
              skillProficiencies: [
                {
                  type: "fixed",
                  skills: ["Potion-Making"],
                },
              ],
              potionRecipes: {
                type: "scaling",
                recipes: {
                  1: "3 common",
                  6: "2 uncommon",
                  10: "1 rare",
                  14: "1 very rare",
                },
              },
              specialAbilities: [
                {
                  name: "Alchemical Genius",
                  type: "passive",
                  description:
                    "Add Intelligence modifier to Potion Making (Wisdom) checks",
                },
              ],
            },
          },
          {
            name: "Green Thumb",
            description:
              "Gain Herbology Kit, proficiency in Herbology Kit and Herbology skill, and cast Orchideous wordlessly/wandlessly at will. Add Wisdom to Herbology (Intelligence) checks. Gain portable greenhouse and two plant companions (one utility, one combat). Combat plant adds 1d8 piercing damage once per turn. Symbiotic Connection grants Herbology modifier to initiative and +10 feet speed with difficult terrain immunity during combat.",
            benefits: {
              equipment: ["Herbology Kit", "Portable greenhouse"],
              toolProficiencies: ["Herbologist's tools"],
              skillProficiencies: [
                {
                  type: "fixed",
                  skills: ["Herbology"],
                },
              ],
              spells: ["Orchideous (at-will)"],
              combatBonuses: {
                initiative: "Herbology modifier",
                speed: "+10 feet in combat",
              },
              immunities: ["difficult terrain (in combat)"],
              specialAbilities: [
                {
                  name: "Botanical Expertise",
                  type: "passive",
                  description: "Add Wisdom to Herbology (Intelligence) checks",
                },
                {
                  name: "Plant Companions",
                  type: "companion",
                  count: 2,
                  types: ["utility", "combat"],
                  combatDamage: "1d8 piercing once per turn",
                },
              ],
            },
          },
        ],
      },
      {
        level: 3,
        name: "Alternative Magic System (Optional)",
        description:
          "Instead of normal Metamagic, choose an alternative magical specialization.",
        choices: [
          {
            name: "Metapotions",
            description:
              "Replace Metamagic abilities with Mastery Points for modifying potions. Learn 2 Metapotion effects at 3rd level, gain 1 more each level until all are learned. Use Mastery Points to enhance potion brewing with various effects.",
            benefits: {
              specialAbilities: [
                {
                  name: "Metapotion System",
                  type: "resource replacement",
                  replaces: "Metamagic",
                  uses: "Mastery Points",
                  known: "2 at 3rd level, +1 per level",
                },
              ],
            },
          },
          {
            name: "Natural Evocations",
            description:
              "Replace Metamagic abilities with Nature Points for botanical magic. Gain abilities like Nature's Wrath (reroll missed attacks), Carnivorous Force (temporary HP and damage boost), Tree Stride (teleport between trees), and Summon Spirit (elemental companions).",
            benefits: {
              specialAbilities: [
                {
                  name: "Natural Evocation System",
                  type: "resource replacement",
                  replaces: "Metamagic",
                  uses: "Nature Points",
                  abilities: [
                    "Nature's Wrath",
                    "Carnivorous Force",
                    "Tree Stride",
                    "Summon Spirit",
                  ],
                },
              ],
            },
          },
        ],
      },
      {
        level: 4,
        name: "Toxic Presence (Optional)",
        description:
          "Can take instead of ASI/Feat. Constant exposure to poisons makes you venomous. When creatures move within 10 feet or start turn there, use reaction to deal 1d4 necrotic damage (Constitution save negates). Damage increases to 1d6 at 6th, 1d8 at 10th, 1d10 at 14th level.",
        benefits: {
          specialAbilities: [
            {
              name: "Venomous Aura",
              type: "reaction",
              range: "10 feet",
              save: "Constitution",
              damage: {
                base: "1d4 necrotic",
                scaling: {
                  6: "1d6",
                  10: "1d8",
                  14: "1d10",
                },
              },
            },
          ],
        },
        choices: [],
      },
      {
        level: 6,
        name: "Brew Glory",
        description:
          "Gain proficiency in Herbology or Potion-Making (or expertise if already proficient) in both. Choose one specialization feature.",
        benefits: {
          skillProficiencies: [
            {
              type: "choice",
              skills: ["Herbology", "Potion-Making"],
              expertise: "if already proficient in both",
            },
          ],
        },
        choices: [
          {
            name: "Plant Veil",
            description:
              "Requires Green Thumb. Create camouflage in 1 minute for +10 Stealth bonus when pressed against solid surfaces. Plant companion gains Defend (opportunity attacks against you at disadvantage) and Deflect (+4 AC against subsequent attacks from same creature).",
            requirements: ["Green Thumb"],
            benefits: {
              specialAbilities: [
                {
                  name: "Natural Camouflage",
                  type: "active",
                  time: "1 minute",
                  bonus: "+10 Stealth near surfaces",
                },
                {
                  name: "Companion Defense",
                  type: "companion enhancement",
                  abilities: [
                    "Defend: OA against you at disadvantage",
                    "Deflect: +4 AC vs repeat attacker",
                  ],
                },
              ],
            },
          },
          {
            name: "Don't Waste a Drop",
            description:
              "Once per day, extend brewing time by 1 minute to dilute successful potions into multiple lower-quality versions. Potions achieve superior quality on 19-20. Dilution yields: Common (1d3+1), Uncommon (1d2+1), Rare (1d2), Very Rare+ (impossible).",
            benefits: {
              specialAbilities: [
                {
                  name: "Potion Dilution",
                  type: "daily",
                  uses: "1 per day",
                  yields: {
                    common: "1d3+1",
                    uncommon: "1d2+1",
                    rare: "1d2",
                    veryRare: "impossible",
                  },
                },
                {
                  name: "Superior Brewing",
                  type: "passive",
                  description: "Superior quality on 19-20",
                },
              ],
            },
          },
          {
            name: "Herbivify",
            description:
              "Channel plant energy for healing. Gain d6s equal to your level. As bonus action, choose ally within 120 feet and spend up to half your level in dice. Target regains HP equal to total rolled plus 1 temporary HP per die. Regain dice on long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Plant Healing",
                  type: "bonus action",
                  range: "120 feet",
                  resource: "d6s equal to level",
                  healing: "dice total + 1 temp HP per die",
                  limit: "half level dice per use",
                  refresh: "long rest",
                },
              ],
            },
          },
        ],
      },
      {
        level: 9,
        name: "Delayed Sorcery",
        description:
          "Finally tap into innate magical abilities like your peers. Gain Sorcery Points and Metamagic options starting with 5 points and 1 metamagic, scaling up to 10 points and 2 metamagics at 20th level.",
        benefits: {
          specialAbilities: [
            {
              name: "Late Bloomer",
              type: "resource",
              sorceryPoints: {
                9: 5,
                20: 10,
              },
              metamagics: {
                9: 1,
                20: 2,
              },
            },
          ],
        },
        choices: [],
      },
      {
        level: 10,
        name: "Asphodel and Wormwood",
        description:
          "Gain Expertise in Herbology or Potion-Making. Choose one advanced technique.",
        benefits: {
          skillProficiencies: [
            {
              type: "expertise",
              skills: ["Herbology or Potion-Making"],
            },
          ],
        },
        choices: [
          {
            name: "Entangle",
            description:
              "Requires Green Thumb. As bonus action, create entangled dome. You and allies within 5 feet have full cover, allies within 10 feet have half cover. Lasts 1 minute or until dedication lost.",
            requirements: ["Green Thumb"],
            benefits: {
              specialAbilities: [
                {
                  name: "Protective Dome",
                  type: "bonus action",
                  duration: "1 minute or until dedication lost",
                  effects: [
                    "Full cover within 5 feet",
                    "Half cover within 10 feet",
                  ],
                },
              ],
            },
          },
          {
            name: "Whirlwind",
            description:
              "Requires Green Thumb. Plant uses your action to attack all creatures within 5 feet. Separate attack rolls using your Str/Dex modifier (whichever higher), dealing 1d8 + modifier damage on hit.",
            requirements: ["Green Thumb"],
            benefits: {
              specialAbilities: [
                {
                  name: "Plant Whirlwind",
                  type: "action",
                  area: "5 feet",
                  attack: "Str/Dex modifier (higher)",
                  damage: "1d8 + modifier",
                },
              ],
            },
          },
          {
            name: "Designated Taste Tester",
            description:
              "Automatically succeed on checks to identify harmful ingestibles. Resistance to natural toxins grants immunity to blinded, deafened, frightened, and poisoned conditions.",
            benefits: {
              immunities: ["blinded", "deafened", "frightened", "poisoned"],
              specialAbilities: [
                {
                  name: "Toxin Expert",
                  type: "passive",
                  description: "Auto-succeed identifying harmful ingestibles",
                },
              ],
            },
          },
          {
            name: "Quick-Brew Mastery",
            description:
              "Requires Metapotions. Reduce Mastery Point costs for quick-brewing: Common (1 round: 2 MP, bonus action: 4 MP), Uncommon (1 round: 4 MP, bonus action: 8 MP), Rare (1 round: 8 MP, bonus action: 12 MP). Once per short rest.",
            requirements: ["Metapotions"],
            benefits: {
              specialAbilities: [
                {
                  name: "Speed Brewing",
                  type: "resource reduction",
                  uses: "1 per short rest",
                  costs: {
                    common: "1 round: 2 MP, bonus: 4 MP",
                    uncommon: "1 round: 4 MP, bonus: 8 MP",
                    rare: "1 round: 8 MP, bonus: 12 MP",
                  },
                },
              ],
            },
          },
        ],
      },
      {
        level: 14,
        name: "The Delicate Power of Liquids",
        description:
          "Choose one feature representing mastery of your chosen path.",
        choices: [
          {
            name: "Metapotion Prodigy",
            description:
              "Requires Metapotions. Remove limit on metapotion effects per potion (contradictory effects still forbidden).",
            requirements: ["Metapotions"],
            benefits: {
              specialAbilities: [
                {
                  name: "Unlimited Effects",
                  type: "enhancement",
                  description: "No limit on metapotion effects per potion",
                },
              ],
            },
          },
          {
            name: "My Friend Felix",
            description:
              "Learn to brew Felicity's Gold (lesser Felix Felicis) once per semester. Grants 3 luck points for one month. Spend for advantage on attack/ability/save rolls, or force reroll of attacks against you/allies within 15 feet.",
            benefits: {
              potionRecipes: ["Felicity's Gold"],
              specialAbilities: [
                {
                  name: "Lucky Brew",
                  type: "item creation",
                  uses: "1 per semester",
                  duration: "1 month",
                  luckPoints: 3,
                  effects: [
                    "Advantage on rolls",
                    "Force attack rerolls within 15ft",
                  ],
                },
              ],
            },
          },
          {
            name: "Nature's Sanctuary",
            description:
              "Requires Green Thumb. Beast and plant creatures must make Wisdom save or choose different target when attacking you. Plant companion gains Dodge reaction to halve incoming attack damage.",
            requirements: ["Green Thumb"],
            benefits: {
              specialAbilities: [
                {
                  name: "Natural Protection",
                  type: "passive",
                  save: "Wisdom",
                  description: "Beasts/plants must save or can't attack you",
                },
                {
                  name: "Companion Dodge",
                  type: "companion enhancement",
                  description: "Plant can Dodge to halve damage",
                },
              ],
            },
          },
        ],
      },
      {
        level: 18,
        name: "Mind and Body",
        description:
          "Choose one feature representing your ultimate mastery of toxic/natural forces.",
        choices: [
          {
            name: "Snape's Greasy Hair",
            description:
              "Exposure to toxins grants immunity to disease and resistance to acid, necrotic, and poison damage.",
            benefits: {
              immunities: ["disease"],
              resistances: ["acid", "necrotic", "poison"],
              specialAbilities: [
                {
                  name: "Toxic Immunity",
                  type: "passive",
                  description: "Immune to disease, resist acid/necrotic/poison",
                },
              ],
            },
          },
          {
            name: "Plant Aspect",
            description:
              "Requires Green Thumb. Become one with plants, gaining immunity to acid, necrotic, poison damage and disease, but vulnerability to fire damage.",
            requirements: ["Green Thumb"],
            benefits: {
              immunities: [
                "acid damage",
                "necrotic damage",
                "poison damage",
                "disease",
              ],
              vulnerabilities: ["fire"],
              specialAbilities: [
                {
                  name: "Plant Form",
                  type: "passive",
                  description: "Plant immunities but vulnerable to fire",
                },
              ],
            },
          },
        ],
      },
    ],
  },
  "Arithmancy & Runes": {
    name: "Arithmancy & Runes",
    description:
      "Academic spellcasters who master ancient magical theory through mathematical precision and runic symbols, specializing in alternate spellcasting methods and scholarly research",
    higherLevelFeatures: [
      {
        level: 1,
        name: "Alternate Spellcaster",
        description:
          "At 1st level, you learn Flagrate as a free action subtle spell and gain access to the Ancient Spellbook. Choose your specialization approach to magical study.",
        benefits: {
          spells: ["Flagrate (free action, subtle)"],
          specialAbilities: [
            {
              name: "Ancient Spellbook Access",
              type: "passive",
              description: "Access to unique Arithmantic and Runic spells",
            },
          ],
        },
        choices: [],
      },
      {
        level: 1,
        name: "Ancient Spellbook",
        description:
          "Access to unique Arithmantic and Runic spells that can be cast subtly without sorcery points. Spells can be shared with other subclasses through downtime or free time. All spells have either Runic or Arithmantic tags for enhanced casting.",
        benefits: {
          specialAbilities: [
            {
              name: "Ancient Spellbook",
              type: "spellbook",
              description:
                "Unique spells with Runic/Arithmantic tags, cast subtly without SP",
            },
            {
              name: "Spell Sharing",
              type: "downtime",
              description:
                "Share spells with other subclasses through downtime",
            },
          ],
        },
        choices: [],
      },
      {
        level: 1,
        name: "Level 1 Specialization",
        description: "Choose your initial specialization approach.",
        choices: [
          {
            name: "School of Magic Expert",
            description:
              "Choose one school of magic specialization (+1 to that school required). Each school grants unique abilities: Divinations (reroll attacks/checks twice per long rest), Charms (charm creatures within 5 feet), Transfigurations (alter weight of Large or smaller objects), Healing (magical ward with 2x level + modifier HP), or JHC (Dark Empowerment with AC/speed/concentration bonuses).",
            benefits: {
              specialAbilities: [
                {
                  name: "School Specialization",
                  type: "choice",
                  requirement: "+1 to chosen school",
                  options: [
                    "Divinations: Reroll attacks/checks 2/long rest",
                    "Charms: Charm creatures within 5 feet",
                    "Transfigurations: Alter weight of Large or smaller objects",
                    "Healing: Ward with 2×level+modifier HP",
                    "JHC: Dark Empowerment (AC/speed/concentration bonuses)",
                  ],
                },
              ],
            },
          },
          {
            name: "Researcher",
            description:
              "Extensive spell study allows casting more difficult spells early. Add Devicto to spellbook with both tags, add half Wisdom modifier to spell research checks, and all successfully researched spells gain both Arithmantic and Runic tags.",
            benefits: {
              spells: ["Devicto (both tags)"],
              specialAbilities: [
                {
                  name: "Research Expertise",
                  type: "passive",
                  bonus: "Half Wisdom modifier to spell research",
                },
                {
                  name: "Dual Tagging",
                  type: "passive",
                  description:
                    "Researched spells gain both Arithmantic and Runic tags",
                },
              ],
            },
          },
        ],
      },
      {
        level: 4,
        name: "Extended Downtime (Optional)",
        description:
          "Can take instead of ASI/Feat. +1 Intelligence or Wisdom (max 20) and gain one additional downtime slot for spell research, practice (two attempts), or teaching Ancient Spellbook spells.",
        benefits: {
          abilityScoreIncrease: {
            type: "choice",
            abilities: ["intelligence", "wisdom"],
            amount: 1,
            max: 20,
          },
          specialAbilities: [
            {
              name: "Extra Downtime",
              type: "resource",
              slots: "+1 downtime slot",
              uses: ["spell research", "practice (2 attempts)", "teaching"],
            },
          ],
        },
        choices: [],
      },
      {
        level: 6,
        name: "Exhaustive Studies",
        description:
          "Choose one feature that represents your deepening understanding of magical theory.",
        choices: [
          {
            name: "Enhanced Spellwork",
            description:
              "Spells cast in Ancient Runes class gain Runic tag, spells cast in Arithmancy class gain Arithmantic tag. Runic spells: dedication extends duration by 1 minute, 1d6 psychic damage once per round. Arithmantic spells: +10 feet range, reduce Dedication to Concentration.",
            benefits: {
              specialAbilities: [
                {
                  name: "Class Tagging",
                  type: "passive",
                  description: "Spells gain tags based on class cast in",
                },
                {
                  name: "Runic Enhancement",
                  type: "spell enhancement",
                  effects: [
                    "Duration +1 minute with dedication",
                    "1d6 psychic damage/round",
                  ],
                },
                {
                  name: "Arithmantic Enhancement",
                  type: "spell enhancement",
                  effects: [
                    "+10 feet range",
                    "Dedication becomes Concentration",
                  ],
                },
              ],
            },
          },
          {
            name: "Private Lessons",
            description:
              "During Ancient Runes, Arithmancy, and downtime: attempt one additional spell per class, DC reduced by 2, all locked spells gain both tags. Gain access to one Professional spell list (Charms, Elemental, Healing, Magizoo, Forbidden, Diviner's Curse, or Astronomic).",
            benefits: {
              spellList: {
                type: "choice",
                options: [
                  "Charms",
                  "Elemental",
                  "Healing",
                  "Magizoo",
                  "Forbidden",
                  "Diviner's Curse",
                  "Astronomic",
                ],
              },
              specialAbilities: [
                {
                  name: "Extra Attempts",
                  type: "class benefit",
                  bonus: "+1 spell attempt per class",
                },
                {
                  name: "Easier Learning",
                  type: "passive",
                  bonus: "DC -2 for spell attempts",
                },
                {
                  name: "Dual Tagged Spells",
                  type: "passive",
                  description: "Locked spells gain both tags",
                },
              ],
            },
          },
        ],
      },
      {
        level: 9,
        name: "Resilient Mind",
        description:
          "Honed ability to resist mental effects grants proficiency in Wisdom saving throws (or Intelligence/Charisma if already proficient in Wisdom).",
        benefits: {
          savingThrows: {
            proficiency: ["Wisdom"],
            alternative: "Intelligence/Charisma if already have Wisdom",
          },
        },
        choices: [],
      },
      {
        level: 10,
        name: "Distinctive Approach",
        description:
          "Choose one feature representing your unique approach to magical study.",
        choices: [
          {
            name: "Spellmaker",
            description:
              "Created spells cost only 2 downtime slots (completed in 1 slot on 19-20 roll). Created spells gain Arithmantic or Runic tags. Spells with both tags cast using 1 lower spell slot (cannot exceed highest available level).",
            benefits: {
              specialAbilities: [
                {
                  name: "Efficient Creation",
                  type: "downtime enhancement",
                  cost: "2 slots (1 slot on 19-20)",
                },
                {
                  name: "Tag Assignment",
                  type: "passive",
                  description: "Created spells gain chosen tag",
                },
                {
                  name: "Dual Tag Casting",
                  type: "spell enhancement",
                  description: "Spells with both tags use -1 spell slot level",
                },
              ],
            },
          },
          {
            name: "Metamagical Application",
            description:
              "Gain 5 Sorcery Points and unique metamagics: Converted Spell (change damage type, 1 SP), Controlled Spell (change area of effect, 2 SP), Triggered Spell (delayed activation with conditions, 3 SP), Continued Spell (reduce Dedication to Concentration or Concentration to Instantaneous).",
            benefits: {
              sorceryPoints: 5,
              metamagic: [
                {
                  name: "Converted Spell",
                  cost: "1 SP",
                  effect: "Change damage type",
                },
                {
                  name: "Controlled Spell",
                  cost: "2 SP",
                  effect: "Change area of effect",
                },
                {
                  name: "Triggered Spell",
                  cost: "3 SP",
                  effect: "Delayed activation with conditions",
                },
                {
                  name: "Continued Spell",
                  cost: "varies",
                  effect:
                    "Reduce Dedication to Concentration or Concentration to Instantaneous",
                },
              ],
            },
          },
        ],
      },
      {
        level: 14,
        name: "Rare Talents",
        description:
          "Choose one feature representing your rare mastery of magical arts.",
        choices: [
          {
            name: "Nimble Fingers",
            description:
              "Gain proficiency in Sleight of Hand (or expertise if already proficient). Spells with both Runic and Arithmantic tags: add half Dexterity modifier to spell attack rolls (rounded up) and spell save DC (rounded down).",
            benefits: {
              skillProficiencies: [
                {
                  type: "fixed",
                  skills: ["Sleight of Hand"],
                  expertise: "if already proficient",
                },
              ],
              specialAbilities: [
                {
                  name: "Dexterous Casting",
                  type: "passive",
                  condition: "Spells with both tags",
                  bonuses: [
                    "Spell attack: +half Dex (rounded up)",
                    "Spell save DC: +half Dex (rounded down)",
                  ],
                },
              ],
            },
          },
          {
            name: "School of Magic Prodigy",
            description:
              "Enhanced version of your chosen school (+4 to that school required). Divinations: decide exact roll result once per long rest. Charms: target second creature with single-target charms. Transfigurations: gravity field (2d10 force damage, speed 0 on fail). Healing: advantage on spell saves and resistance to spell damage while ward active. JHC: extra Dark Empowerment use and Extra Action feature twice per short rest.",
            requirements: ["+4 to chosen school"],
            benefits: {
              specialAbilities: [
                {
                  name: "School Mastery",
                  type: "choice enhancement",
                  options: [
                    "Divinations: Decide exact roll 1/long rest",
                    "Charms: Target 2 creatures with single-target",
                    "Transfigurations: Gravity field (2d10 force, speed 0)",
                    "Healing: Advantage on spell saves + resistance with ward",
                    "JHC: Extra Dark Empowerment + Extra Action 2/short rest",
                  ],
                },
              ],
            },
          },
        ],
      },
      {
        level: 18,
        name: "Practiced and Prepared",
        description:
          "Choose one feature representing your ultimate mastery of magical theory.",
        choices: [
          {
            name: "Perfected Spellwork",
            description:
              "Requires Enhanced Spellwork. Once per round, use maximum possible dice results instead of rolling. Runic spells: maximum damage dice. Arithmantic spells: maximum healing dice.",
            requirements: ["Enhanced Spellwork"],
            benefits: {
              specialAbilities: [
                {
                  name: "Perfect Execution",
                  type: "passive",
                  frequency: "once per round",
                  effects: [
                    "Runic: maximize damage dice",
                    "Arithmantic: maximize healing dice",
                  ],
                },
              ],
            },
          },
          {
            name: "Spell Tome",
            description:
              "Requires Private Lessons. Spells cast during Ancient Runes, Arithmancy, or downtime lock in after one successful attempt. Gain access to one additional Professional spell list.",
            requirements: ["Private Lessons"],
            benefits: {
              spellList: {
                type: "choice",
                count: 1,
                additional: true,
              },
              specialAbilities: [
                {
                  name: "Instant Mastery",
                  type: "passive",
                  description: "Spells lock after 1 success in class/downtime",
                },
              ],
            },
          },
        ],
      },
    ],
  },

  Artisan: {
    name: "Artisan",
    description:
      "Creative spellcasters who blend magical theory with artistic expression, specializing in either magical item creation through imbuements or performance magic through harmonancy",
    higherLevelFeatures: [
      {
        level: 1,
        name: "Skill Monkey",
        description:
          "At 1st level, you gain proficiency in Performance and choose one approach to skill mastery that defines your artisan expertise.",
        benefits: {
          skillProficiencies: [
            {
              type: "fixed",
              skills: ["Performance"],
            },
          ],
        },
        choices: [],
      },
      {
        level: 1,
        name: "Level 1 Specialization",
        description: "Choose your initial specialization approach.",
        choices: [
          {
            name: "Practice Makes Perfect",
            description:
              "Gain proficiency in one skill of your choice. Choose one skill you're proficient in to gain expertise (double proficiency bonus for ability checks with that skill).",
            benefits: {
              skillProficiencies: [
                {
                  type: "choice",
                  count: 1,
                },
              ],
              skillExpertise: [
                {
                  type: "choice",
                  count: 1,
                  from: "proficient skills",
                },
              ],
            },
          },
          {
            name: "Master of None",
            description:
              "Add half your proficiency bonus (rounded down) to any ability check that doesn't already include your proficiency bonus.",
            benefits: {
              specialAbilities: [
                {
                  name: "Jack of All Trades",
                  type: "passive",
                  bonus: "Half proficiency to non-proficient checks",
                },
              ],
            },
          },
        ],
      },
      {
        level: 2,
        name: "Call to the Arts",
        description:
          "Choose your primary artistic specialization that determines your magical approach.",
        choices: [
          {
            name: "Imbuement",
            description:
              "Gain proficiency with one Artisan's Tool (usable as spellcasting focus). Learn 4 Artisanal Imbuements, gaining more at 12th, 14th, and 16th levels. After long rests, craft and enchant items with imbuements. Can have imbued items equal to spellcasting ability modifier. Each imbuement can only be in one object at a time.",
            benefits: {
              toolProficiencies: [
                {
                  type: "choice",
                  count: 1,
                  category: "Artisan's Tools",
                },
              ],
              specialAbilities: [
                {
                  name: "Artisanal Imbuements",
                  type: "resource",
                  known: {
                    2: 4,
                    12: "+more",
                    14: "+more",
                    16: "+more",
                  },
                  limit: "spellcasting modifier active items",
                  description:
                    "Craft and enchant items with magical imbuements",
                },
              ],
            },
          },
          {
            name: "Harmonancy",
            description:
              "Gain proficiency with one Musical Instrument (usable as spellcasting focus). Performance for 1+ minute can charm humanoids within 60 feet (Wisdom save or charmed for 1 hour, idolize you, speak glowingly, hinder opponents, advantage on Persuasion). Once per short/long rest.",
            benefits: {
              toolProficiencies: [
                {
                  type: "choice",
                  count: 1,
                  category: "Musical Instruments",
                },
              ],
              specialAbilities: [
                {
                  name: "Enthralling Performance",
                  type: "action",
                  time: "1+ minute",
                  range: "60 feet",
                  save: "Wisdom",
                  duration: "1 hour",
                  uses: "1 per short rest",
                  effects: [
                    "Charmed",
                    "Idolize performer",
                    "Speak glowingly",
                    "Hinder opponents",
                    "Advantage on Persuasion",
                  ],
                },
              ],
            },
          },
        ],
      },
      {
        level: 4,
        name: "Crafty (Optional)",
        description:
          "Can take instead of ASI/Feat. Magically create artisan's tools in 1 hour (vanish when used again). Double proficiency bonus for all tool-based ability checks.",
        benefits: {
          specialAbilities: [
            {
              name: "Conjure Tools",
              type: "ritual",
              time: "1 hour",
              description: "Create temporary artisan's tools",
            },
            {
              name: "Tool Expertise",
              type: "passive",
              bonus: "Double proficiency for all tool checks",
            },
          ],
        },
        choices: [],
      },
      {
        level: 6,
        name: "Creative Muse",
        description:
          "Learn Animatus Locomotor spell (familiar) and choose one feature based on your artistic path.",
        benefits: {
          spells: ["Animatus Locomotor (familiar)"],
        },
        choices: [
          {
            name: "Flash of Genius",
            description:
              "Requires Imbuement. When you or creature within 30 feet makes ability check or saving throw, use reaction to add spellcasting modifier. Use spellcasting modifier times per long rest.",
            requirements: ["Imbuement"],
            benefits: {
              specialAbilities: [
                {
                  name: "Flash of Genius",
                  type: "reaction",
                  range: "30 feet",
                  bonus: "spellcasting modifier",
                  uses: "spellcasting modifier per long rest",
                  applies: "ability checks or saving throws",
                },
              ],
            },
          },
          {
            name: "Beguiling Performance",
            description:
              "Requires Harmonancy. Learn 6 Harmonic Tunes powered by 5 d8 Harmonic dice (regain on short/long rest). Learn 2 more tunes at 13th and 16th levels. Gain 6th die at 15th level.",
            requirements: ["Harmonancy"],
            benefits: {
              specialAbilities: [
                {
                  name: "Harmonic Tunes",
                  type: "resource",
                  known: {
                    6: 6,
                    13: 8,
                    16: 10,
                  },
                  dice: {
                    6: "5d8",
                    15: "6d8",
                  },
                  refresh: "short rest",
                },
              ],
            },
          },
        ],
      },
      {
        level: 8,
        name: "Advanced Imbuement (Optional)",
        description:
          "Can take instead of ASI/Feat. Attune to 4 magic items at once. Craft common/uncommon magic items in 1/4 time for 1/2 cost.",
        benefits: {
          specialAbilities: [
            {
              name: "Increased Attunement",
              type: "passive",
              slots: "4 magic items",
            },
            {
              name: "Efficient Crafting",
              type: "passive",
              description: "Common/uncommon items: 1/4 time, 1/2 cost",
            },
          ],
        },
        choices: [],
      },
      {
        level: 9,
        name: "Art & Soul",
        description:
          "Choose one feature that enhances your artistic abilities.",
        choices: [
          {
            name: "Song of Rest",
            description:
              "Requires Harmonancy. During short rest, allies regain extra hit points when spending Hit Dice: +1d6 (becomes 1d8 at 9th, 1d10 at 13th, 1d12 at 17th level).",
            requirements: ["Harmonancy"],
            benefits: {
              specialAbilities: [
                {
                  name: "Song of Rest",
                  type: "short rest",
                  healing: {
                    9: "1d6",
                    13: "1d10",
                    17: "1d12",
                  },
                  description: "Allies gain bonus HP when spending Hit Dice",
                },
              ],
            },
          },
          {
            name: "Magic Jolt",
            description:
              "Requires Imbuement (Familiar). When familiar hits with attack, channel energy for 2d6 force damage OR heal creature within 30 feet for 2d6 HP. Use spellcasting modifier times per long rest, once per turn.",
            requirements: ["Imbuement", "Familiar"],
            benefits: {
              specialAbilities: [
                {
                  name: "Magic Jolt",
                  type: "trigger",
                  trigger: "Familiar hits",
                  options: ["2d6 force damage", "Heal 2d6 HP within 30ft"],
                  uses: "spellcasting modifier per long rest",
                  frequency: "once per turn",
                },
              ],
            },
          },
        ],
      },
      {
        level: 10,
        name: "Pure Talent",
        description:
          "Choose one feature representing your refined artistic mastery.",
        choices: [
          {
            name: "Bombastic Rizz",
            description:
              "Gain otherworldly beauty. As bonus action, assume majestic presence for 1 minute. First-time attackers each turn make Charisma save or can't attack you (must choose new target). Success allows attack but disadvantage on saves against your spells next turn. Once per short/long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Majestic Presence",
                  type: "bonus action",
                  duration: "1 minute",
                  save: "Charisma",
                  uses: "1 per short rest",
                  effects: [
                    "Fail: Can't attack you",
                    "Success: Attack allowed but disadvantage on saves vs your spells",
                  ],
                },
              ],
            },
          },
          {
            name: "Reliable Talent",
            description:
              "Gain proficiency in one skill. For ability checks with proficiency bonus, treat d20 rolls of 9 or lower as 10.",
            benefits: {
              skillProficiencies: [
                {
                  type: "choice",
                  count: 1,
                },
              ],
              specialAbilities: [
                {
                  name: "Reliable Talent",
                  type: "passive",
                  description: "Minimum roll of 10 on proficient checks",
                },
              ],
            },
          },
          {
            name: "Spell-Storing Item",
            description:
              "Requires Imbuement. After long rest, store 1st or 2nd level spell (1 action cast time) in weapon or item. Holder can cast using your spellcasting modifier. Usable 2x Intelligence modifier times. No concentration required from you.",
            requirements: ["Imbuement"],
            benefits: {
              specialAbilities: [
                {
                  name: "Spell-Storing Item",
                  type: "item creation",
                  spellLevel: "1st or 2nd",
                  requirement: "1 action cast time",
                  uses: "2 × Intelligence modifier",
                  description: "Store spell in item, no concentration needed",
                },
              ],
            },
          },
          {
            name: "Magical Secrets",
            description:
              "Requires Harmonancy. Choose 2 spells from Professional spell lists (don't count against spells known). Learn 2 more at 14th and 18th levels.",
            requirements: ["Harmonancy"],
            benefits: {
              spells: {
                10: "2 from Professional lists",
                14: "+2 from Professional lists",
                18: "+2 from Professional lists",
              },
            },
          },
        ],
      },
      {
        level: 14,
        name: "Avant-Garde",
        description:
          "Choose one feature representing cutting-edge artistic innovation.",
        choices: [
          {
            name: "Augmented Healer",
            description:
              "Requires Imbuement. Creatures attuned to your items can gain 2d6 + spellcasting modifier temporary HP twice per long rest. Cast Reparifors without spell slot using artisan tools, spellcasting modifier times per long rest.",
            requirements: ["Imbuement"],
            benefits: {
              specialAbilities: [
                {
                  name: "Healing Items",
                  type: "item benefit",
                  tempHP: "2d6 + spellcasting modifier",
                  uses: "2 per long rest",
                },
                {
                  name: "Tool Casting",
                  type: "spell-like",
                  spell: "Reparifors",
                  uses: "spellcasting modifier per long rest",
                },
              ],
            },
          },
          {
            name: "Imbuement Expert",
            description:
              "Requires Advanced Imbuement. Attune to 5 magic items at once. Ignore all special requirements for attuning to or using magic items.",
            requirements: ["Advanced Imbuement"],
            benefits: {
              specialAbilities: [
                {
                  name: "Enhanced Attunement",
                  type: "passive",
                  slots: "5 magic items",
                },
                {
                  name: "Universal Attunement",
                  type: "passive",
                  description: "Ignore all attunement/use requirements",
                },
              ],
            },
          },
          {
            name: "Improved Performance",
            description:
              "Requires Harmonancy. Harmonic dice become d10s (d12s at 18th level).",
            requirements: ["Harmonancy"],
            benefits: {
              specialAbilities: [
                {
                  name: "Enhanced Harmonics",
                  type: "dice upgrade",
                  dice: {
                    14: "d10s",
                    18: "d12s",
                  },
                },
              ],
            },
          },
        ],
      },
      {
        level: 18,
        name: "Virtuoso",
        description:
          "Choose one feature representing your ultimate artistic mastery.",
        choices: [
          {
            name: "Crafter's Spirit",
            description:
              "Requires Imbuement. +1 bonus to all saves per attuned magic item. When reduced to 0 HP, use reaction to end one imbuement and drop to 1 HP instead.",
            requirements: ["Imbuement"],
            benefits: {
              savingThrows: {
                bonus: "+1 per attuned item",
              },
              specialAbilities: [
                {
                  name: "Life Bond",
                  type: "reaction",
                  trigger: "Reduced to 0 HP",
                  effect: "End one imbuement to drop to 1 HP instead",
                },
              ],
            },
          },
          {
            name: "Imbuement Master",
            description:
              "Requires Imbuement Expert. Attune to 7 magic items at once.",
            requirements: ["Imbuement Expert"],
            benefits: {
              specialAbilities: [
                {
                  name: "Master Attunement",
                  type: "passive",
                  slots: "7 magic items",
                },
              ],
            },
          },
          {
            name: "Epic Performer",
            description:
              "Requires Harmonancy. When rolling initiative with no harmonic dice remaining, regain 1 harmonic die.",
            requirements: ["Harmonancy"],
            benefits: {
              specialAbilities: [
                {
                  name: "Encore",
                  type: "trigger",
                  trigger: "Roll initiative with no harmonic dice",
                  effect: "Regain 1 harmonic die",
                },
              ],
            },
          },
        ],
      },
    ],
  },

  "Obscurial Magic": {
    name: "Obscurial Magic",
    description:
      "Dark magic users who harness the chaotic power of an Obscurus within them, gaining devastating abilities at the cost of personal harm and exhaustion",
    higherLevelFeatures: [
      {
        level: 1,
        name: "The Afflicted",
        description:
          "At 1st level, you gain Obscurial Summoning and choose one manifestation of your Obscurial power that defines your dark magical approach.",
        choices: [],
      },
      {
        level: 1,
        name: "Obscurial Summoning",
        description:
          "Core feature for all Obscurial users. When casting a spell, sacrifice life force (take 1d4 damage) to make your next spell deal extra necrotic damage. Damage scales: 1d6 (1st), 1d8 (6th), 1d10 (10th), 1d12 (17th level). Once per turn.",
        benefits: {
          specialAbilities: [
            {
              name: "Obscurial Summoning",
              type: "spell enhancement",
              cost: "1d4 self damage",
              damage: {
                1: "1d6 necrotic",
                6: "1d8 necrotic",
                10: "1d10 necrotic",
                17: "1d12 necrotic",
              },
              frequency: "once per turn",
            },
          ],
        },
        choices: [],
      },
      {
        level: 1,
        name: "Level 1 Specialization",
        description: "Choose your initial specialization approach.",
        choices: [
          {
            name: "Decaying Touch",
            description:
              "Siphon life force through touch. Melee spell attack deals Obscurial die + 2x level damage. Constitution save or take half damage yourself. Twice per long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Decaying Touch",
                  type: "melee spell attack",
                  damage: "Obscurial die + 2×level",
                  save: "Constitution or take half damage",
                  uses: "2 per long rest",
                },
              ],
            },
          },
          {
            name: "Icy Grasp",
            description:
              "Create Obscurial orb at point within 60 feet lasting 1 minute. Bonus action to attack creatures within 10 feet for 1d8 cold/necrotic damage and -10 speed (2d8 at 10th level). Move orb 30 feet and attack as bonus action. Uses equal to spellcasting modifier per long rest. Speed halved while orb active.",
            benefits: {
              speeds: {
                penalty: "halved while orb active",
              },
              specialAbilities: [
                {
                  name: "Obscurial Orb",
                  type: "bonus action",
                  range: "60 feet creation, 30 feet movement",
                  duration: "1 minute",
                  damage: {
                    1: "1d8 cold/necrotic",
                    10: "2d8 cold/necrotic",
                  },
                  effect: "-10 speed to hit creatures",
                  uses: "spellcasting modifier per long rest",
                },
              ],
            },
          },
          {
            name: "Eyes of Blight",
            description:
              "Eyes turn black, gain 120-foot darkvision and immunity to blindness as bonus action. Disadvantage on attacks and Perception in sunlight. Learn Ater spell at 3rd level (cast with 2 sorcery points or spell slot, see through the darkness created).",
            benefits: {
              vision: {
                darkvision: "120 feet",
              },
              immunities: ["blindness"],
              weaknesses: ["Disadvantage on attacks/Perception in sunlight"],
              spells: {
                3: ["Ater"],
              },
              specialAbilities: [
                {
                  name: "Dark Sight",
                  type: "bonus action",
                  description: "Activate dark vision and blindness immunity",
                },
                {
                  name: "Ater Mastery",
                  type: "passive",
                  description: "See through Ater darkness",
                },
              ],
            },
          },
        ],
      },
      {
        level: 6,
        name: "The Cursed",
        description:
          "Obscurial power becomes more potent. Necrotic damage from spells and features ignores resistance. Choose one advanced manifestation.",
        benefits: {
          specialAbilities: [
            {
              name: "Piercing Necrosis",
              type: "passive",
              description: "Necrotic damage ignores resistance",
            },
          ],
        },
        choices: [
          {
            name: "Obscurial Maledict",
            description:
              "As action, curse creatures within 30 feet (suffer 1 exhaustion). Intelligence save or take 2d6 psychic damage and perceive allies as enemies, must attack random ally (or self if none) on next turn using same attack type they'd use against you.",
            benefits: {
              specialAbilities: [
                {
                  name: "Mass Curse",
                  type: "action",
                  range: "30 feet",
                  save: "Intelligence",
                  damage: "2d6 psychic",
                  effects: [
                    "All targets: 1 exhaustion",
                    "Failed save: Attack ally/self next turn",
                  ],
                },
              ],
            },
          },
          {
            name: "Beast of the Obscurus",
            description:
              "Requires Eyes of Blight or Decaying Touch. Summon shadow beast (based on house affiliation) to harass target within 120 feet. Beast has temp HP = half your level, moves through objects, gives target disadvantage on saves against your spells within 5 feet. Take 1d4 necrotic damage per turn. Lasts 5 minutes.",
            requirements: ["Eyes of Blight", "Decaying Touch"],
            benefits: {
              specialAbilities: [
                {
                  name: "Shadow Beast",
                  type: "summon",
                  range: "120 feet",
                  duration: "5 minutes",
                  cost: "1d4 necrotic per turn",
                  summon: {
                    hp: "half level temp HP",
                    abilities: [
                      "Move through objects",
                      "Target has disadvantage on saves within 5ft",
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Obscurial Guardian",
            description:
              "Requires Icy Grasp. Orb can defend others. When creature within 10 feet of orb takes damage, use reaction to halve damage to chosen creature and take the rest yourself. Orb vanishes after use.",
            requirements: ["Icy Grasp"],
            benefits: {
              specialAbilities: [
                {
                  name: "Protective Orb",
                  type: "reaction",
                  range: "10 feet from orb",
                  effect: "Halve ally damage, take remainder",
                  cost: "Orb vanishes",
                },
              ],
            },
          },
        ],
      },
      {
        level: 9,
        name: "Shadow Walk",
        description:
          "When in dim light or darkness, teleport up to 120 feet as bonus action to another dim/dark location you can see.",
        benefits: {
          specialAbilities: [
            {
              name: "Shadow Walk",
              type: "bonus action",
              range: "120 feet",
              requirement: "In dim light/darkness to dim light/darkness",
            },
          ],
        },
        choices: [],
      },
      {
        level: 10,
        name: "The Beset",
        description:
          "Choose one feature representing your growing mastery over Obscurial power.",
        choices: [
          {
            name: "Debilitating Magic",
            description:
              "Once per turn when hitting with spell attack, force Constitution save or target is paralyzed until start of your next turn. Success grants them advantage against you and you disadvantage against them until end of their next turn.",
            benefits: {
              specialAbilities: [
                {
                  name: "Paralyzing Strike",
                  type: "trigger",
                  trigger: "Hit with spell attack",
                  save: "Constitution",
                  frequency: "once per turn",
                  effects: [
                    "Fail: Paralyzed until your next turn",
                    "Success: They get advantage, you get disadvantage",
                  ],
                },
              ],
            },
          },
          {
            name: "Obscurial Malice",
            description:
              "Requires Eyes of Blight or Decaying Touch. As action, grant allies (= spellcasting modifier) advantages and abilities for 1 minute: advantage vs grouped enemies, redirect missed attacks 3 times. Hostiles within 10 feet take 3d8 necrotic damage per turn (Wisdom save half). Gain 3 exhaustion when ends. Once per short/long rest.",
            requirements: ["Eyes of Blight", "Decaying Touch"],
            benefits: {
              specialAbilities: [
                {
                  name: "Dark Empowerment",
                  type: "action",
                  duration: "1 minute",
                  targets: "spellcasting modifier allies",
                  uses: "1 per short rest",
                  cost: "3 exhaustion when ends",
                  effects: [
                    "Allies: Advantage vs grouped enemies",
                    "Allies: Redirect 3 missed attacks",
                    "Enemies within 10ft: 3d8 necrotic/turn (Wis save half)",
                  ],
                },
              ],
            },
          },
          {
            name: "Devour",
            description:
              "Requires Icy Grasp. Create 10-foot radius Obscurial manifestation at point within 60 feet for 1 minute. Creatures in area make Strength save or be restrained, take 3d6 cold/necrotic damage per turn. Gain temp HP = your level if creature in area at start of turn. Stunned until end of next turn after use. Once per short/long rest.",
            requirements: ["Icy Grasp"],
            benefits: {
              specialAbilities: [
                {
                  name: "Devouring Void",
                  type: "action",
                  range: "60 feet",
                  area: "10-foot radius",
                  duration: "1 minute",
                  save: "Strength",
                  damage: "3d6 cold/necrotic per turn",
                  tempHP: "level if creature in area",
                  cost: "Stunned until end of next turn",
                  uses: "1 per short rest",
                },
              ],
            },
          },
        ],
      },
      {
        level: 14,
        name: "The Madness",
        description:
          "Choose one feature representing the dangerous depths of Obscurial power.",
        choices: [
          {
            name: "Obscurial Frenzy",
            description:
              "Bonus action to enter 1-minute frenzy: advantage on attacks/checks, can't cast spells, 3 melee spell attacks per action, Obscurial damage becomes 2d12, +10 speed, advantage on Dex saves. Must attack nearest creature (Wisdom save vs spell DC or attack ally), take 1d6 necrotic per turn. Once per long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Obscurial Frenzy",
                  type: "bonus action",
                  duration: "1 minute",
                  uses: "1 per long rest",
                  benefits: [
                    "Advantage on attacks/checks",
                    "3 melee spell attacks per action",
                    "Obscurial damage: 2d12",
                    "+10 speed",
                    "Advantage on Dex saves",
                  ],
                  drawbacks: [
                    "Can't cast spells",
                    "Must attack nearest (Wis save or attack ally)",
                    "Take 1d6 necrotic per turn",
                  ],
                },
              ],
            },
          },
          {
            name: "Obscurial Consumption",
            description:
              "Consume unconscious/slain creature within 5 feet: gain temp HP = half their max HP, can't be healed until temp HP gone. If spellcaster, regain their highest spell slot level (not exceeding yours), they lose leveled casting until slot used. Can only cast cantrips until end of next turn after using siphoned slot. Once per short/long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Consume Essence",
                  type: "action",
                  range: "5 feet",
                  target: "unconscious/slain creature",
                  uses: "1 per short rest",
                  effects: [
                    "Gain temp HP = half target's max",
                    "Can't be healed while temp HP remains",
                    "If caster: steal highest spell slot",
                    "Cantrips only after using stolen slot",
                  ],
                },
              ],
            },
          },
        ],
      },
      {
        level: 18,
        name: "The Malevolent",
        description:
          "Choose one feature representing your ultimate mastery of Obscurial power.",
        choices: [
          {
            name: "Annihilate",
            description:
              "Unleash devastating wave of dark magic. All enemies within 30 feet take 8d6 necrotic damage and are knocked prone. Once per long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Annihilation Wave",
                  type: "action",
                  area: "30 feet",
                  damage: "8d6 necrotic",
                  effect: "Knocked prone",
                  uses: "1 per long rest",
                },
              ],
            },
          },
          {
            name: "Obscurial Assimilation",
            description:
              "Bonus action to become shadowy Obscurial form for 1 minute. Resistance to all damage except force/radiant, move through creatures/objects as difficult terrain, creatures you hit can't regain HP. Once per long rest.",
            benefits: {
              resistances: ["all damage except force/radiant"],
              specialAbilities: [
                {
                  name: "Shadow Form",
                  type: "bonus action",
                  duration: "1 minute",
                  uses: "1 per long rest",
                  abilities: [
                    "Move through creatures/objects as difficult terrain",
                    "Hits prevent HP regeneration",
                  ],
                },
              ],
            },
          },
        ],
      },
    ],
  },
  Defender: {
    name: "Defender",
    description:
      "Protective spellcasters who specialize in shielding allies and controlling battlefield positioning, focusing on defensive magic and tactical support to keep their companions safe from harm",
    higherLevelFeatures: [
      {
        level: 1,
        name: "Mitigating Defense",
        description:
          "At 1st level, you gain access to the Justice Spell List and choose one of the following defensive specializations.",
        benefits: {
          spellList: "Justice",
        },
        choices: [
          {
            name: "Critical Deflection",
            description:
              "As a reaction when you or an ally that you can see within 30 feet of you suffers a critical hit, you can turn that attack into a normal hit. Any effects triggered by a critical hit are canceled. You can use this feature a number of times equal to your spellcasting ability modifier (minimum of once). You regain all expended uses when you finish a long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Critical Deflection",
                  type: "reaction",
                  range: "30 feet",
                  uses: "spellcasting modifier per long rest (minimum 1)",
                  description:
                    "Turn critical hit into normal hit, cancel crit effects",
                },
              ],
            },
          },
          {
            name: "Shielding Presence",
            description:
              "When your allies are within 10 feet of you, they gain a +1 bonus to their Armor Class. This bonus increases to +2 at 6th level, and +3 at 12th level.",
            benefits: {
              specialAbilities: [
                {
                  name: "Shielding Aura",
                  type: "aura",
                  range: "10 feet",
                  bonus: {
                    1: "+1 AC to allies",
                    6: "+2 AC to allies",
                    12: "+3 AC to allies",
                  },
                },
              ],
            },
          },
        ],
      },
      {
        level: 6,
        name: "Defender's Promise",
        description:
          "You gain the ability to bestow Promises upon your allies imbued with magical power. You start with two such effects of your choice. When you bestow a Promise, you choose which effect to create. You must then finish a short or long rest to bestow Promises again. Some Promises require saving throws. When you use such an effect the DC equals your spell save DC.",
        benefits: {
          specialAbilities: [
            {
              name: "Defender's Promise",
              type: "resource",
              uses: "1 per short rest",
              known: "2 promises",
            },
          ],
        },
        choices: [
          {
            name: "Shining Promise",
            description:
              "As an action, you channel shimmering energy into an ally that you can see within 30 feet of you. The first time that ally is hit by an attack within the next minute, the attacker takes radiant damage equal to 2d10 + your level.",
            benefits: {
              specialAbilities: [
                {
                  name: "Shining Promise",
                  type: "action",
                  range: "30 feet",
                  duration: "1 minute",
                  damage: "2d10 + level radiant to attacker",
                },
              ],
            },
          },
          {
            name: "Promise of Valor",
            description:
              "When a creature within 30 feet of you makes an attack roll, ability check, or saving throw using Strength, you can use your reaction to grant that creature a +10 bonus to the roll, using your Defender's Promise. You make this choice after you see the roll, but before the DM says whether the roll succeeds or fails.",
            benefits: {
              specialAbilities: [
                {
                  name: "Promise of Valor",
                  type: "reaction",
                  range: "30 feet",
                  bonus: "+10 to Strength-based rolls",
                  timing: "after roll, before result",
                },
              ],
            },
          },
          {
            name: "Healing Promise",
            description:
              "You can use your Defender's Promise to heal the badly injured. As an action, you evoke healing energy that can restore a number of hit points equal to five times your level. Choose any creatures within 30 feet of you, and divide those hit points among them. This feature can restore a creature to no more than half of its hit point maximum. You can't use this feature on an undead or a construct.",
            benefits: {
              specialAbilities: [
                {
                  name: "Healing Promise",
                  type: "action",
                  range: "30 feet",
                  healing: "5 × level total HP",
                  limitation: "max half HP per creature, no undead/constructs",
                },
              ],
            },
          },
          {
            name: "Promise of Will",
            description:
              "You can use your Defender's Promise to invest your presence with warding power. As an action, you can choose a number of creatures you can see within 30 feet of you, up to a number equal to your spellcasting ability modifier (minimum of one creature). For 1 minute, you and the chosen creatures have advantage on Intelligence, Wisdom, and Charisma saving throws.",
            benefits: {
              specialAbilities: [
                {
                  name: "Promise of Will",
                  type: "action",
                  range: "30 feet",
                  targets: "spellcasting modifier creatures",
                  duration: "1 minute",
                  effect: "Advantage on Int/Wis/Cha saves",
                },
              ],
            },
          },
          {
            name: "Rebuking Promise",
            description:
              "You can use your Channel Divinity to castigate unworldly beings. As an action, you speak seething words and each Ghost, Ghoul, Poltergeist, Inferi, Undead or other dark creature within 30 feet of you that can hear you must make a Wisdom saving throw. On a failed save, the creature is turned for 1 minute or until it takes damage.",
            benefits: {
              specialAbilities: [
                {
                  name: "Rebuking Promise",
                  type: "action",
                  range: "30 feet",
                  save: "Wisdom",
                  targets:
                    "Ghost, Ghoul, Poltergeist, Inferi, Undead, dark creatures",
                  effect: "Turned for 1 minute or until damaged",
                },
              ],
            },
          },
        ],
      },
      {
        level: 9,
        name: "Constant Vigilance",
        description:
          "You emit an aura of alertness while you aren't incapacitated. When you and any creature of your choice within 10 feet of you rolls initiative, you each gain a bonus to initiative equal to your Spellcasting Ability modifier (minimum of +1). At 18th level, the range of this aura increases to 30 feet.",
        benefits: {
          specialAbilities: [
            {
              name: "Vigilance Aura",
              type: "aura",
              range: {
                9: "10 feet",
                18: "30 feet",
              },
              bonus: "spellcasting modifier to initiative (minimum +1)",
            },
          ],
        },
        choices: [],
      },
      {
        level: 10,
        name: "Sturdy",
        description:
          "You may bestow 2 Promises per rest. Additionally, choose one of the following defensive enhancements.",
        benefits: {
          specialAbilities: [
            {
              name: "Enhanced Promises",
              type: "resource enhancement",
              uses: "2 Promises per rest",
            },
          ],
        },
        choices: [
          {
            name: "Damage Deflection",
            description:
              "When you take damage, you can use your reaction to roll a number of d12 equal to your spellcasting ability modifier. Add your Constitution modifier to the number rolled and reduce the damage by that total. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Damage Deflection",
                  type: "reaction",
                  damageReduction: "spellcasting modifier d12 + Con modifier",
                  uses: "proficiency bonus per long rest",
                },
              ],
            },
          },
          {
            name: "Magical Constitution",
            description:
              "Hit Point maximum increases by an amount equal to your spellcasting ability modifier when you gain this feature. Whenever you gain a character level thereafter, your Hit Point maximum increases by your spellcasting ability modifier.",
            benefits: {
              hitPoints: {
                immediate: "spellcasting modifier",
                perLevel: "spellcasting modifier",
              },
            },
          },
          {
            name: "Mystical Body",
            description:
              "Your magic wards your body from harm. Your armor class equals 12 + your Dexterity modifier + your spellcasting ability modifier. You gain no benefit from wearing cloaks, but if you are using a shield, you apply its bonus as normal.",
            benefits: {
              armorClass: {
                calculation: "12 + Dex modifier + spellcasting modifier",
                restrictions: "No cloak benefit, shield allowed",
              },
            },
          },
        ],
      },
      {
        level: 14,
        name: "Warding Promise",
        description:
          "You may bestow 3 Promises per rest. Additionally, you gain one additional Promise from the Defender's Promise list and one from the enhanced Promises below.",
        benefits: {
          specialAbilities: [
            {
              name: "Master Promises",
              type: "resource enhancement",
              uses: "3 Promises per rest",
              known: "+1 basic Promise, +1 enhanced Promise",
            },
          ],
        },
        choices: [
          {
            name: "Promise of Sanctuary",
            description:
              "As an action, you designate yourself or an ally within 30 feet. Until the start of your next turn, the chosen creature is immune to all damage and conditions except for exhaustion and unconscious. Spells and magical effects cannot force the creature to move or change shape.",
            benefits: {
              specialAbilities: [
                {
                  name: "Promise of Sanctuary",
                  type: "action",
                  range: "30 feet",
                  duration: "until start of next turn",
                  effect:
                    "Immunity to damage/conditions (except exhaustion/unconscious), no forced movement",
                },
              ],
            },
          },
          {
            name: "Brilliant Promise",
            description:
              "As an action you can bless up to three creatures of your choice within 30 feet with an aura of burning light. For 1 minute, these creatures gain the following benefits: Their attacks do an additional 1d10 + your spellcasting modifier radiant damage. When a creature ends their turn within 5 feet of them they take 1d6 + your spellcasting modifier radiant damage. If they are reduced to 0 hit points, the aura bursts. Every enemy within 15 feet must make a constitution saving throw or take 3d10 radiant damage and be blinded.",
            benefits: {
              specialAbilities: [
                {
                  name: "Brilliant Promise",
                  type: "action",
                  range: "30 feet",
                  targets: "up to 3 creatures",
                  duration: "1 minute",
                  effects: [
                    "Attacks +1d10 + spellcasting modifier radiant",
                    "5ft aura: 1d6 + spellcasting modifier radiant",
                    "Death burst: 3d10 radiant + blind (Con save)",
                  ],
                },
              ],
            },
          },
          {
            name: "Promise of Revival",
            description:
              "When an ally within 30 feet drops to 0 hit points, you can use your reaction to invoke this promise. The ally immediately stands up with hit points equal to your level. Additionally, they may immediately cast a spell of a level up to half your proficiency bonus, rounded down, targeting the creature or source that reduced them to 0 hit points.",
            benefits: {
              specialAbilities: [
                {
                  name: "Promise of Revival",
                  type: "reaction",
                  range: "30 feet",
                  trigger: "Ally drops to 0 HP",
                  healing: "level HP",
                  bonus: "Cast spell ≤ half proficiency bonus at attacker",
                },
              ],
            },
          },
        ],
      },
      {
        level: 18,
        name: "Defensive Being",
        description:
          "You achieve the pinnacle of defensive mastery. Choose one of the following ultimate defensive abilities.",
        choices: [
          {
            name: "Bolstered Bravery",
            description:
              "When you are subjected to an effect that allows you to make a saving throw to take only half damage, you instead take no damage if you succeed on the saving throw and only half damage if you fail. If the spell has additional effects from failing the saving throw, those effects are automatically negated, whether you succeed or fail on the save. Additionally, you may use your reaction to transfer the benefits of this feature onto an ally within 30 feet of you. The benefits of this feature return to you at the beginning of your next turn.",
            benefits: {
              specialAbilities: [
                {
                  name: "Evasion Plus",
                  type: "passive",
                  description:
                    "No damage on successful saves, half on fail, negate additional effects",
                },
                {
                  name: "Share Evasion",
                  type: "reaction",
                  range: "30 feet",
                  duration: "until your next turn",
                },
              ],
            },
          },
          {
            name: "Life Blessing",
            description:
              "As an action, you can touch the corpse of a creature that died within the past 24 hours and expend 15 sorcery points. The creature then returns to life, regaining a number of hit points equal to 4d10 + your spellcasting ability modifier. If the creature died while subject to any of the following conditions, it revives with them removed: blinded, deafened, paralyzed, poisoned, and stunned. Once you use this feature, you can't use it again until you finish a long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Life Blessing",
                  type: "action",
                  cost: "15 sorcery points",
                  range: "touch",
                  target: "corpse dead ≤ 24 hours",
                  healing: "4d10 + spellcasting modifier",
                  cleanse: [
                    "blinded",
                    "deafened",
                    "paralyzed",
                    "poisoned",
                    "stunned",
                  ],
                  uses: "1 per long rest",
                },
              ],
            },
          },
        ],
      },
    ],
  },

  "Grim Diviner": {
    name: "Grim Diviner",
    description:
      "Dark practitioners who blend divination magic with sinister influences, specializing in glimpsing futures, manipulating minds, and wielding forbidden knowledge to control fate and fear",
    higherLevelFeatures: [
      {
        level: 1,
        name: "Grim Presence",
        description:
          "At 1st level, you gain a Diviner's Kit and proficiency in using it. Choose one approach to dark divination that defines your grim abilities.",
        benefits: {
          toolProficiencies: ["Diviner's kit"],
        },
        choices: [],
      },
      {
        level: 1,
        name: "Level 1 Specialization",
        description: "Choose your initial specialization approach.",
        choices: [
          {
            name: "Dark Visionary",
            description:
              "Roll a d20 and note the result as your Visionary Roll. Once per day, replace any attack roll, saving throw, or ability check with this roll. At 6th level, use on other creatures you can see. At 10th level, gain a second Visionary Roll. At 14th level, make three rolls and keep any two.",
            benefits: {
              specialAbilities: [
                {
                  name: "Visionary Roll",
                  type: "resource",
                  rolls: {
                    1: "1 d20",
                    10: "2 d20",
                    14: "3 d20 (keep 2)",
                  },
                  uses: "1 per day",
                  scaling: {
                    6: "Can use on others",
                  },
                },
              ],
            },
          },
          {
            name: "Shadowy Influences",
            description:
              "Gain Fraudemo spell, cast wandless and wordless, creating both sound and image with one casting. At 6th level, gain Fraudemo Maxima and can change illusion nature with an action if you can see it.",
            benefits: {
              spells: ["Fraudemo (wandless/wordless)"],
              specialAbilities: [
                {
                  name: "Enhanced Illusions",
                  type: "spell enhancement",
                  description:
                    "Fraudemo creates sound and image simultaneously",
                },
                {
                  name: "Illusion Control",
                  type: "action",
                  level: 6,
                  description: "Change illusion nature if you can see it",
                },
              ],
              spells: {
                6: ["Fraudemo Maxima"],
              },
            },
          },
        ],
      },
      {
        level: 6,
        name: "Grim Sight",
        description:
          "Gain Dark Legilimens and choose an additional dark ability.",
        benefits: {
          spells: ["Dark Legilimens"],
        },
        choices: [
          {
            name: "Foresight Glimpse",
            description:
              "As a bonus action, gain advantage on your next attack roll, saving throw, or ability check before end of next turn. Use a number of times equal to half proficiency bonus per long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Foresight Glimpse",
                  type: "bonus action",
                  effect: "Advantage on next roll",
                  duration: "until end of next turn",
                  uses: "half proficiency bonus per long rest",
                },
              ],
            },
          },
          {
            name: "Soul Tether",
            description:
              "When you deal damage with a spell containing the dark tag, regain hit points equal to half the damage dealt.",
            benefits: {
              specialAbilities: [
                {
                  name: "Soul Tether",
                  type: "passive",
                  healing: "half damage dealt with dark spells",
                },
              ],
            },
          },
        ],
      },
      {
        level: 9,
        name: "Grim Psychometry",
        description:
          "Gain supernatural talent for discerning secrets of evil relics and places. Advantage on Intelligence (History) checks about sinister/tragic history of objects you're touching or current location. High rolls may trigger visions of the past.",
        benefits: {
          specialAbilities: [
            {
              name: "Grim Psychometry",
              type: "passive",
              advantage: "Intelligence (History) for sinister/tragic history",
              bonus: "May trigger visions on high rolls",
            },
          ],
        },
        choices: [],
      },
      {
        level: 10,
        name: "Grim Control",
        description:
          "Gain forbidden knowledge and choose a method of mental manipulation.",
        benefits: {
          specialAbilities: [
            {
              name: "Forbidden Knowledge",
              type: "passive",
              description: "Access to dark mental manipulation",
            },
          ],
        },
        choices: [
          {
            name: "Emotional Manipulation",
            description:
              "As an action, target creature within 60 feet makes Charisma save or you control their emotions for 1 minute. Gain advantage on Charisma checks against them. Very creative applications possible. Once per long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Emotional Control",
                  type: "action",
                  range: "60 feet",
                  save: "Charisma",
                  duration: "1 minute",
                  effect: "Control emotions, advantage on Charisma checks",
                  uses: "1 per long rest",
                },
              ],
            },
          },
          {
            name: "Mind of the Grave",
            description:
              "As an action, target dead creature or Inferius within 30 feet makes Wisdom save or obeys commands for 24 hours. Immune if CR/level equals or exceeds yours. Twice per long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Command Undead",
                  type: "action",
                  range: "30 feet",
                  save: "Wisdom",
                  duration: "24 hours",
                  immunity: "CR/level ≥ yours",
                  uses: "2 per long rest",
                },
              ],
            },
          },
          {
            name: "Illusion of Self",
            description:
              "When attacked, use reaction to interpose illusory duplicate. Attack automatically misses, illusion dissipates. Once per short/long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Illusory Dodge",
                  type: "reaction",
                  trigger: "When attacked",
                  effect: "Attack auto-misses",
                  uses: "1 per short rest",
                },
              ],
            },
          },
        ],
      },
      {
        level: 14,
        name: "Grim Mastery",
        description: "Choose a method of ultimate dark power manipulation.",
        choices: [
          {
            name: "Death Wish",
            description:
              "As an action, curse creature within 30 feet until end of next turn. Next hit against them has vulnerability to all damage, then curse ends. Use half spellcasting modifier times. Also auto-succeed one save/check per long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Death Curse",
                  type: "action",
                  range: "30 feet",
                  duration: "until end of next turn",
                  effect: "Next hit has vulnerability",
                  uses: "half spellcasting modifier",
                },
                {
                  name: "Fate's Favor",
                  type: "passive",
                  uses: "1 auto-success per long rest",
                },
              ],
            },
          },
          {
            name: "Shadow Infusion",
            description:
              "When dealing spell damage, target takes additional 2d8 psychic damage at start of next turn and disadvantage on next save before your next turn. Once per short/long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Shadow Infusion",
                  type: "trigger",
                  trigger: "Deal spell damage",
                  damage: "2d8 psychic next turn",
                  effect: "Disadvantage on next save",
                  uses: "1 per short rest",
                },
              ],
            },
          },
          {
            name: "Path of Rot",
            description:
              "Requires Mind of the Grave. Inferius or creatures under Mind of the Grave control gain bonus to damage rolls equal to your Divinations modifier.",
            requirements: ["Mind of the Grave"],
            benefits: {
              specialAbilities: [
                {
                  name: "Undead Empowerment",
                  type: "passive",
                  bonus: "Divinations modifier to controlled undead damage",
                },
              ],
            },
          },
        ],
      },
      {
        level: 18,
        name: "Grim Being",
        description: "Choose the ultimate expression of your dark mastery.",
        choices: [
          {
            name: "Dreadful Aspect",
            description:
              "As an action, create 30-foot aura for 1 minute. Reduces bright light to dim, creatures make Wisdom save or frightened. Frightened creatures take 4d10 psychic damage when starting turn in aura. You and allies have shadow concealment (disadvantage on attacks against you). Bonus action shadow attack: 3d10 + spellcasting modifier necrotic. Once per long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Dreadful Aura",
                  type: "action",
                  area: "30 feet",
                  duration: "1 minute",
                  save: "Wisdom or frightened",
                  damage: "4d10 psychic per turn (frightened)",
                  uses: "1 per long rest",
                  effects: [
                    "Bright light becomes dim",
                    "Allies gain shadow concealment",
                  ],
                },
                {
                  name: "Shadow Strike",
                  type: "bonus action",
                  damage: "3d10 + spellcasting modifier necrotic",
                },
              ],
            },
          },
          {
            name: "Mind Mastery",
            description:
              "Thoughts can't be read unless you allow. Resistance to psychic damage, reflect psychic damage back to attacker. Touch incapacitated creature to charm until healed by specific spells/effects. Telepathic communication with charmed creature regardless of distance.",
            benefits: {
              immunities: ["thought reading (unless allowed)"],
              resistances: ["psychic"],
              specialAbilities: [
                {
                  name: "Psychic Reflection",
                  type: "passive",
                  description: "Reflect psychic damage to attacker",
                },
                {
                  name: "Permanent Charm",
                  type: "action",
                  range: "touch",
                  target: "incapacitated creature",
                  effect: "Charm until magically healed",
                },
                {
                  name: "Telepathic Bond",
                  type: "passive",
                  description:
                    "Telepathy with charmed creatures at any distance",
                },
              ],
            },
          },
        ],
      },
    ],
  },

  Astronomy: {
    name: "Astronomy",
    description:
      "Celestial spellcasters who draw power from stars, moons, and cosmic forces, specializing in radiant magic, divination through stellar phenomena, and transformative starry manifestations",
    higherLevelFeatures: [
      {
        level: 1,
        name: "Astronomer's Curiosity",
        description:
          "At 1st level, you gain proficiency with Astronomer's tools, access to the Astronomic Spell list, and proficiency in either Perception or Insight. Choose one approach to celestial magic.",
        benefits: {
          toolProficiencies: ["Astronomer's tools"],
          spellList: "Astronomic",
          skillProficiencies: [
            {
              type: "choice",
              skills: ["Perception", "Insight"],
              count: 1,
            },
          ],
        },
        choices: [],
      },
      {
        level: 1,
        name: "Level 1 Specialization",
        description: "Choose your initial specialization approach.",
        choices: [
          {
            name: "Astrologer",
            description:
              "Gain a magical Star Map (Tiny object, spellcasting focus). While holding it, all Astronomic spells are considered locked in (always prepared).",
            benefits: {
              equipment: ["Star Map (spellcasting focus)"],
              specialAbilities: [
                {
                  name: "Star Map",
                  type: "passive",
                  description:
                    "All Astronomic spells always prepared while holding",
                },
              ],
            },
          },
          {
            name: "I'm Not Afraid of the Dark",
            description:
              "Gain 80-foot darkvision. As an action, share darkvision with willing creatures within 10 feet (up to Wisdom modifier) for 1 hour. Once per long rest, or expend spell slot to use again.",
            benefits: {
              vision: {
                darkvision: "80 feet",
              },
              specialAbilities: [
                {
                  name: "Share Darkvision",
                  type: "action",
                  range: "10 feet",
                  targets: "Wisdom modifier creatures",
                  duration: "1 hour",
                  uses: "1 per long rest (or spell slot)",
                },
              ],
            },
          },
          {
            name: "Moonlit Enchantment",
            description:
              "Your spells are imbued with moonlight essence. When you cast a spell requiring a saving throw, the DC increases by 2.",
            benefits: {
              specialAbilities: [
                {
                  name: "Lunar Power",
                  type: "passive",
                  bonus: "+2 spell save DC",
                },
              ],
            },
          },
        ],
      },
      {
        level: 5,
        name: "Star Mapper",
        description: "Requires Astrologer. Enhanced Star Map abilities.",
        requirements: ["Astrologer"],
        benefits: {
          specialAbilities: [
            {
              name: "Enhanced Star Map",
              type: "passive",
              description: "Advanced star map capabilities",
            },
          ],
        },
        choices: [],
      },
      {
        level: 6,
        name: "Astrological Presence",
        description:
          "Choose how you manifest your connection to celestial forces.",
        choices: [
          {
            name: "Centaur's Vision",
            description:
              "Requires Astrologer. After long rest, roll die for omens. Even = Weal (add d6 to rolls), Odd = Woe (subtract d6 from rolls). Use reaction on creatures within 30 feet, proficiency bonus times per long rest.",
            requirements: ["Astrologer"],
            benefits: {
              specialAbilities: [
                {
                  name: "Omens",
                  type: "reaction",
                  range: "30 feet",
                  uses: "proficiency bonus per long rest",
                  effect: "Add/subtract d6 based on daily omen",
                },
              ],
            },
          },
          {
            name: "Astronomic Self",
            description:
              "As bonus action, assume starry form for 10 minutes (bright light 10 feet, dim 10 feet). Choose constellation: Archer (ranged spell attacks 1d8+Wis), Chalice (healing spell bonus 1d8+Wis), Dragon (treat 9 or lower as 10 on Int/Wis checks and concentration saves), Shield (temp HP + AC bonus).",
            benefits: {
              specialAbilities: [
                {
                  name: "Starry Form",
                  type: "bonus action",
                  duration: "10 minutes",
                  light: "bright 10ft, dim 10ft",
                  constellations: [
                    "Archer: +1d8+Wis to ranged spell attacks",
                    "Chalice: +1d8+Wis to healing spells",
                    "Dragon: Min 10 on Int/Wis checks & concentration",
                    "Shield: Temp HP + AC bonus",
                  ],
                },
              ],
            },
          },
        ],
      },
      {
        level: 8,
        name: "Celestial Harmony (Optional)",
        description:
          "Can take instead of ASI/Feat. Increase Wisdom or Intelligence by 1. Add spellcasting modifier to spell damage proficiency bonus times per day.",
        benefits: {
          abilityScoreIncrease: {
            type: "choice",
            abilities: ["wisdom", "intelligence"],
            amount: 1,
          },
          specialAbilities: [
            {
              name: "Celestial Damage",
              type: "passive",
              bonus: "spellcasting modifier to spell damage",
              uses: "proficiency bonus per day",
            },
          ],
        },
        choices: [],
      },
      {
        level: 9,
        name: "Blessing of the Stars",
        description:
          "While wearing no cloak and not wielding defensive item, AC equals 10 + Dex modifier + Wisdom modifier.",
        benefits: {
          armorClass: {
            calculation: "10 + Dex modifier + Wisdom modifier",
            restrictions: "No cloak or defensive items",
          },
        },
        choices: [],
      },
      {
        level: 10,
        name: "Heaven's Fortitude",
        description: "Choose an advanced celestial ability.",
        choices: [
          {
            name: "Astronomic Power",
            description:
              "Requires Astronomic Self. Enhanced constellations: Archer/Chalice become 2d8, Dragon gains 20-foot fly speed, Shield creates advantage zone. Change constellations each turn. Initiative bonus aura (10 feet, 30 feet at 18th level).",
            requirements: ["Astronomic Self"],
            benefits: {
              specialAbilities: [
                {
                  name: "Enhanced Constellations",
                  type: "enhancement",
                  improvements: [
                    "Archer/Chalice: 2d8",
                    "Dragon: +20ft fly speed",
                    "Shield: Creates advantage zone",
                  ],
                },
                {
                  name: "Constellation Shifting",
                  type: "passive",
                  description: "Change constellation each turn",
                },
                {
                  name: "Initiative Aura",
                  type: "aura",
                  range: {
                    10: "10 feet",
                    18: "30 feet",
                  },
                  bonus: "Initiative bonus to allies",
                },
              ],
            },
          },
          {
            name: "Cosmic Blast",
            description:
              "When you or creature within 30 feet succeeds on save against attack, use reaction to deal 2d8 + Wisdom modifier radiant damage to attacker.",
            benefits: {
              specialAbilities: [
                {
                  name: "Cosmic Blast",
                  type: "reaction",
                  trigger: "You or ally succeeds on save",
                  range: "30 feet",
                  damage: "2d8 + Wisdom modifier radiant",
                },
              ],
            },
          },
          {
            name: "Cosmic Insight",
            description:
              "Once per short rest, reroll any d20 roll made by you or creature you can see, forcing use of new result.",
            benefits: {
              specialAbilities: [
                {
                  name: "Cosmic Insight",
                  type: "special",
                  uses: "1 per short rest",
                  description: "Force reroll of any visible d20",
                },
              ],
            },
          },
        ],
      },
      {
        level: 14,
        name: "Volatile Astronomy",
        description: "Choose a method of advanced cosmic manipulation.",
        choices: [
          {
            name: "Gift of the Stars",
            description:
              "Add Wisdom modifier to damage of spells 3rd level or lower. Gain resistance to radiant and fire damage.",
            benefits: {
              resistances: ["radiant", "fire"],
              specialAbilities: [
                {
                  name: "Stellar Damage",
                  type: "passive",
                  bonus: "Wisdom modifier to spells ≤3rd level",
                },
              ],
            },
          },
          {
            name: "Gift of the Moon",
            description:
              "Requires Astronomic Self. While in starry form, gain lunar phase benefits: Full Moon (Investigation/Perception advantage in your light), New Moon (Stealth advantage, disadvantage on attacks in darkness), Crescent Moon (necrotic/radiant resistance).",
            requirements: ["Astronomic Self"],
            benefits: {
              specialAbilities: [
                {
                  name: "Lunar Phases",
                  type: "conditional",
                  condition: "While in starry form",
                  phases: [
                    "Full Moon: Investigation/Perception advantage in light",
                    "New Moon: Stealth advantage, attack disadvantage in dark",
                    "Crescent Moon: Necrotic/radiant resistance",
                  ],
                },
              ],
            },
          },
          {
            name: "Fate Unbound",
            description:
              "Once per day, target within 60 feet makes Wisdom save or chosen ability score becomes 1 for 1 minute (save each turn to end).",
            benefits: {
              specialAbilities: [
                {
                  name: "Fate Unbound",
                  type: "action",
                  range: "60 feet",
                  save: "Wisdom",
                  duration: "1 minute",
                  effect: "Reduce one ability score to 1",
                  uses: "1 per day",
                },
              ],
            },
          },
          {
            name: "Celestial Resistance",
            description:
              "Once per day, for 1 minute your spells ignore damage resistance, treating it as nonexistent.",
            benefits: {
              specialAbilities: [
                {
                  name: "Pierce Resistance",
                  type: "action",
                  duration: "1 minute",
                  effect: "Spells ignore damage resistance",
                  uses: "1 per day",
                },
              ],
            },
          },
        ],
      },
      {
        level: 18,
        name: "Cosmic Perfection",
        description: "Choose the ultimate expression of cosmic mastery.",
        choices: [
          {
            name: "Gift of the Sun",
            description:
              "Requires Gift of the Moon. Bonus action to enhance lunar phases: Full Moon (blind enemies, heal ally 3d8), New Moon (3d10 necrotic + speed 0, become invisible), Crescent Moon (teleport with ally + damage resistance). Once per long rest each unless spending 5 sorcery points.",
            requirements: ["Gift of the Moon"],
            benefits: {
              specialAbilities: [
                {
                  name: "Solar Enhancement",
                  type: "bonus action",
                  uses: "1 per long rest each (or 5 SP)",
                  enhancements: [
                    "Full Moon: Blind enemies, heal ally 3d8",
                    "New Moon: 3d10 necrotic + speed 0, invisibility",
                    "Crescent Moon: Teleport with ally + damage resistance",
                  ],
                },
              ],
            },
          },
          {
            name: "Starry Desperation",
            description:
              "Deal maximum damage with spells. 1st-3rd level: no penalty first use. Additional uses or 4th+ level: take 1d12 radiant per spell level (increasing by 1d12 each use). Damage ignores resistance/immunity.",
            benefits: {
              specialAbilities: [
                {
                  name: "Desperate Power",
                  type: "passive",
                  description: "Maximize spell damage",
                  cost: {
                    "1st-3rd first use": "Free",
                    "Additional uses":
                      "1d12 radiant per spell level (+1d12 per use)",
                  },
                  bonus: "Damage ignores resistance/immunity",
                },
              ],
            },
          },
        ],
      },
    ],
  },

  Historian: {
    name: "Historian",
    description:
      "Scholarly spellcasters who draw power from extensive research and intellectual mastery, specializing in knowledge manipulation, tactical analysis, and uncovering secrets through academic study",
    higherLevelFeatures: [
      {
        level: 1,
        name: "Scholar's Mind",
        description:
          "At 1st level, choose how your scholarly pursuits have shaped your magical abilities.",
        choices: [],
      },
      {
        level: 1,
        name: "Level 1 Specialization",
        description: "Choose your initial specialization approach.",
        choices: [
          {
            name: "Study Buddy",
            description:
              "After 1 hour studying, automatically improve one subject grade by one category. Can help others with homework instead. Choose: Herbology or History of Magic or Investigation or Magical Theory or Muggle Studies to gain proficiency in (expertise if already proficient).",
            benefits: {
              skillProficiencies: [
                {
                  type: "choice",
                  skills: [
                    "Herbology",
                    "History of Magic",
                    "Investigation",
                    "Magical Theory",
                    "Muggle Studies",
                  ],
                  count: 1,
                  expertise: "if already proficient",
                },
              ],
              specialAbilities: [
                {
                  name: "Academic Excellence",
                  type: "downtime",
                  time: "1 hour",
                  effect: "Improve grade by one category or help others",
                },
              ],
            },
          },
          {
            name: "Quick Skim",
            description:
              "Once per short/long rest, choose one skill or tool to gain proficiency with for 1 hour (expertise if already proficient). Master the art of rapid knowledge absorption.",
            benefits: {
              specialAbilities: [
                {
                  name: "Quick Study",
                  type: "action",
                  duration: "1 hour",
                  effect: "Gain proficiency/expertise in one skill/tool",
                  uses: "1 per short rest",
                },
              ],
            },
          },
        ],
      },
      {
        level: 6,
        name: "Intellect Advantage",
        description:
          "Choose how you apply your superior intellect in challenging situations.",
        choices: [
          {
            name: "Um, Actually?",
            description:
              "When creature within 60 feet makes attack roll, ability check, or damage roll, use reaction for Intelligence contest. On success, reduce their roll by proficiency bonus. Use after roll but before results. Half Intelligence modifier (rounded up) times per long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Intellectual Correction",
                  type: "reaction",
                  range: "60 feet",
                  contest: "Intelligence",
                  effect: "Reduce roll by proficiency bonus",
                  timing: "After roll, before result",
                  uses: "half Intelligence modifier per long rest",
                },
              ],
            },
          },
          {
            name: "Battle Studies",
            description:
              "When you hit with cantrip, analyze creature to learn all damage vulnerabilities, resistances, immunities, and condition immunities. When analyzed creature misses you, use reaction to cast cantrip at them. Lasts until short/long rest. Half proficiency bonus uses per long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Creature Analysis",
                  type: "trigger",
                  trigger: "Hit with cantrip",
                  effect: "Learn all resistances/immunities",
                  duration: "until short/long rest",
                  uses: "half proficiency bonus per long rest",
                },
                {
                  name: "Analytical Counter",
                  type: "reaction",
                  trigger: "Analyzed creature misses",
                  effect: "Cast cantrip at attacker",
                },
              ],
            },
          },
        ],
      },
      {
        level: 9,
        name: "I Was in the Library...",
        description:
          "Your extensive research grants access to specialized knowledge. Automatically lock in two spells of your choice from the Elemental, Magizoo, Diviner's Curse, Forbidden, or Astronomic spell lists.",
        benefits: {
          spells: {
            type: "choice",
            count: 2,
            lists: [
              "Elemental",
              "Magizoo",
              "Diviner's Curse",
              "Forbidden",
              "Astronomic",
            ],
          },
        },
        choices: [],
      },
      {
        level: 10,
        name: "Dueling Tactics",
        description: "Choose an advanced intellectual combat technique.",
        choices: [
          {
            name: "Intelligent Maneuver",
            description:
              "Once per round, if you've already used your reaction, you can take an additional reaction. Use twice per long rest. Honed awareness through mental aptitude and pattern recognition.",
            benefits: {
              specialAbilities: [
                {
                  name: "Extra Reaction",
                  type: "special",
                  frequency: "once per round",
                  uses: "2 per long rest",
                  description: "Take additional reaction if already used",
                },
              ],
            },
          },
          {
            name: "Wait... Hold on.",
            description:
              "When making skill check, use reaction to reroll and add half Intelligence modifier (rounded up). Must use new roll. Choose after rolling but before learning success/failure.",
            benefits: {
              specialAbilities: [
                {
                  name: "Second Thoughts",
                  type: "reaction",
                  trigger: "Making skill check",
                  effect: "Reroll + half Int modifier",
                  timing: "After roll, before result",
                },
              ],
            },
          },
        ],
      },
      {
        level: 14,
        name: "Path of History",
        description:
          "Choose how your historical mastery manifests in advanced abilities.",
        choices: [
          {
            name: "Intelligent Casting",
            description:
              "Add Intelligence modifier to damage of spells 3rd level or lower. Gain resistance to being charmed. In-depth knowledge of magical mechanics boosts spell potency.",
            benefits: {
              resistances: ["charmed"],
              specialAbilities: [
                {
                  name: "Scholarly Power",
                  type: "passive",
                  bonus: "Intelligence modifier to spells ≤3rd level",
                },
              ],
            },
          },
          {
            name: "Super Sleuth",
            description:
              "Spend 1+ minutes in contemplation (up to Intelligence score minutes, concentration required). Object Reading: learn acquisition, loss, and recent significant events of held objects and previous owners. Area Reading: see recent significant events in 50-foot cube going back Intelligence score days. Once per short/long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Psychometric Investigation",
                  type: "ritual",
                  time: "1-Intelligence score minutes",
                  concentration: true,
                  uses: "1 per short rest",
                  abilities: [
                    "Object Reading: History and owners",
                    "Area Reading: Events in 50ft cube, Int score days back",
                  ],
                },
              ],
            },
          },
        ],
      },
      {
        level: 18,
        name: "Enlightened Mind",
        description: "Choose the ultimate expression of intellectual mastery.",
        choices: [
          {
            name: "Battle Expert",
            description:
              "Requires Battle Studies. When hitting with cantrip, cause vulnerability to chosen damage type for 1 minute (suppresses resistance instead if present, no effect on immunity). Once per long rest.",
            requirements: ["Battle Studies"],
            benefits: {
              specialAbilities: [
                {
                  name: "Expose Weakness",
                  type: "trigger",
                  trigger: "Hit with cantrip",
                  duration: "1 minute",
                  effect: "Create vulnerability (or suppress resistance)",
                  uses: "1 per long rest",
                },
              ],
            },
          },
          {
            name: "Perfected Communication",
            description:
              "Understand all spoken languages. Any creature that can understand a language can understand what you say. Universal linguistic mastery through cultural study.",
            benefits: {
              languages: ["all spoken languages (understand)"],
              specialAbilities: [
                {
                  name: "Universal Speech",
                  type: "passive",
                  description: "All creatures with language can understand you",
                },
              ],
            },
          },
        ],
      },
    ],
  },
  "Ghoul Studies & Ancient Studies": {
    name: "Ghoul Studies and Ancient Studies",
    description:
      "Specialized scholars who study either ghoulish creatures and their terrifying abilities or ancient spirits and historical guardians, developing powers that mirror their subjects of study through transformation or spiritual communion",
    higherLevelFeatures: [
      {
        level: 1,
        name: "Outward Expressions",
        description:
          "At 1st level, you gain proficiency in Magical Creatures or History of Magic and choose your primary area of study. Note: Intellect casters do not gain the opposite ability at 3rd level, instead receiving an ASI or Feat.",
        benefits: {
          skillProficiencies: [
            {
              type: "choice",
              skills: ["Magical Creatures", "History of Magic"],
              count: 1,
            },
          ],
        },
        choices: [],
      },
      {
        level: 1,
        name: "Level 1 Specialization",
        description: "Choose your initial specialization approach.",
        choices: [
          {
            name: "Ghoulish Trick",
            description:
              "Use illusion to take ghoulish form as bonus action for 1 minute. Gain 1d10 + level temporary HP, force Intelligence saves on attacks to avoid being frightened until end of next turn, immunity to frightened condition. Use proficiency bonus times per long rest.",
            benefits: {
              immunities: ["frightened (while in ghoulish form)"],
              specialAbilities: [
                {
                  name: "Ghoulish Form",
                  type: "bonus action",
                  duration: "1 minute",
                  tempHP: "1d10 + level",
                  save: "Intelligence or frightened",
                  uses: "proficiency bonus per long rest",
                },
              ],
            },
          },
          {
            name: "Ancestral Call",
            description:
              "As action, target creature becomes hindered by Ancient spirits until start of next turn. When target attacks or casts spell, must make Intelligence save or attack/spell hits Ancients and is wasted.",
            benefits: {
              specialAbilities: [
                {
                  name: "Spirit Hindrance",
                  type: "action",
                  duration: "until start of next turn",
                  save: "Intelligence or waste attack/spell",
                },
              ],
            },
          },
        ],
      },
      {
        level: 6,
        name: "Inner Reflections",
        description:
          "Your studies deepen, granting enhanced abilities based on your chosen path.",
        choices: [
          {
            name: "Inner Ghoul",
            description:
              "Requires Ghoulish Trick. Gain 60-foot darkvision (+30 feet if already have), invisible to darkvision while in darkness, replace spell damage with psychic once per turn (+1 damage die while using Ghoulish Trick).",
            requirements: ["Ghoulish Trick"],
            benefits: {
              vision: {
                darkvision: "60 feet (+30 if already have)",
              },
              specialAbilities: [
                {
                  name: "Shadow Invisibility",
                  type: "passive",
                  description: "Invisible to darkvision while in darkness",
                },
                {
                  name: "Psychic Conversion",
                  type: "passive",
                  description:
                    "Replace spell damage with psychic once per turn (+1 die with Ghoulish Trick)",
                },
              ],
            },
          },
          {
            name: "Ancient Guardian",
            description:
              "Requires Ancestral Call. When creature within 30 feet takes damage, use reaction to reduce by 1d6 + spellcasting modifier (2d6 at 10th, 4d6 at 14th level).",
            requirements: ["Ancestral Call"],
            benefits: {
              specialAbilities: [
                {
                  name: "Protective Spirits",
                  type: "reaction",
                  range: "30 feet",
                  damageReduction: {
                    6: "1d6 + spellcasting modifier",
                    10: "2d6 + spellcasting modifier",
                    14: "4d6 + spellcasting modifier",
                  },
                },
              ],
            },
          },
        ],
      },
      {
        level: 9,
        name: "Dark Shield",
        description:
          "Your connection to ghouls or spirits grants protection. Gain advantage on death saving throws and resistance to necrotic damage.",
        benefits: {
          resistances: ["necrotic"],
          savingThrows: {
            advantage: ["death saves"],
          },
        },
        choices: [],
      },
      {
        level: 10,
        name: "Arcane Body",
        description:
          "Choose how your supernatural studies have transformed your physical form.",
        choices: [
          {
            name: "Warped Mind",
            description:
              "Requires Inner Ghoul. Resistance to psychic damage (immunity while using Ghoulish Trick). When reduced to 0 HP, reaction to drop to 1 HP and release wail: 30-foot radius, 2d10 + level psychic damage, gain 2 exhaustion levels. Once per long rest.",
            requirements: ["Inner Ghoul"],
            benefits: {
              resistances: ["psychic"],
              immunities: ["psychic (while using Ghoulish Trick)"],
              specialAbilities: [
                {
                  name: "Death Wail",
                  type: "reaction",
                  trigger: "Reduced to 0 HP",
                  area: "30-foot radius",
                  damage: "2d10 + level psychic",
                  cost: "2 exhaustion levels",
                  effect: "Drop to 1 HP instead",
                  uses: "1 per long rest",
                },
              ],
            },
          },
          {
            name: "Ancestral Guidance",
            description:
              "Requires Ancient Guardian. Free action at turn start: move through creatures/objects as difficult terrain, see/affect Unseen Realm. 1d10 force damage if ending turn in object. Lasts Intelligence modifier rounds. Once per short/long rest (twice at 14th level).",
            requirements: ["Ancient Guardian"],
            benefits: {
              specialAbilities: [
                {
                  name: "Spirit Walk",
                  type: "free action",
                  duration: "Intelligence modifier rounds",
                  uses: {
                    10: "1 per short rest",
                    14: "2 per short rest",
                  },
                  abilities: [
                    "Move through creatures/objects as difficult terrain",
                    "See/affect Unseen Realm",
                    "1d10 force damage if ending in object",
                  ],
                },
              ],
            },
          },
        ],
      },
      {
        level: 14,
        name: "Talented Mind",
        description:
          "Choose an advanced manifestation of your supernatural knowledge.",
        choices: [
          {
            name: "Spook",
            description:
              "Requires Warped Mind. When attacked without advantage, reaction to impose disadvantage and force Intelligence save or frighten. Immune if seen through Ghoulish trick in last 24 hours.",
            requirements: ["Warped Mind"],
            benefits: {
              specialAbilities: [
                {
                  name: "Frightening Defense",
                  type: "reaction",
                  trigger: "Attacked without advantage",
                  save: "Intelligence or frightened",
                  effect: "Impose disadvantage on attack",
                  immunity: "24 hours after seeing Ghoulish Trick",
                },
              ],
            },
          },
          {
            name: "Ancient Rebuke",
            description:
              "Requires Ancestral Guidance. When using Ancient Guardian to reduce damage, the prevented damage rebounds to the attacker.",
            requirements: ["Ancestral Guidance"],
            benefits: {
              specialAbilities: [
                {
                  name: "Damage Reflection",
                  type: "passive",
                  description:
                    "Ancient Guardian damage reduction rebounds to attacker",
                },
              ],
            },
          },
        ],
      },
      {
        level: 18,
        name: "Fearful Soul",
        description:
          "Choose the ultimate expression of your supernatural mastery.",
        choices: [
          {
            name: "Ghoulish Existence",
            description:
              "Requires Spook. Enhanced Ghoulish Trick: regain 10 temp HP each turn, cast action spells as bonus action, touch attack spending 1-10 sorcery points for 1d10 psychic per point (Int save for half), enemies within 10 feet have disadvantage on saves. Once per long rest.",
            requirements: ["Spook"],
            benefits: {
              specialAbilities: [
                {
                  name: "True Ghoul Form",
                  type: "enhancement",
                  uses: "1 per long rest",
                  effects: [
                    "10 temp HP per turn",
                    "Cast action spells as bonus action",
                    "Touch: 1-10 SP for 1d10 psychic each (Int save half)",
                    "Enemies within 10ft have disadvantage on saves",
                  ],
                },
              ],
            },
          },
          {
            name: "Ancient Secrets",
            description:
              "Requires Ancient Rebuke. Ask Ancients one question per year (truthful answer from their lifetime knowledge). Action to detect illusions, shapechangers, and deception magic within 30 feet, advantage on dispelling detected effects.",
            requirements: ["Ancient Rebuke"],
            benefits: {
              specialAbilities: [
                {
                  name: "Ancient Wisdom",
                  type: "yearly",
                  uses: "1 per year",
                  description:
                    "Ask one question, get truthful answer from ancient knowledge",
                },
                {
                  name: "Truth Sight",
                  type: "action",
                  range: "30 feet",
                  detection: ["illusions", "shapechangers", "deception magic"],
                  bonus: "Advantage on dispelling detected effects",
                },
              ],
            },
          },
        ],
      },
    ],
  },

  Quidditch: {
    name: "Quidditch",
    description:
      "Athletic spellcasters who channel their magical abilities through the sport of Quidditch, specializing in aerial combat, team coordination, and position-specific magical techniques inspired by the legendary wizarding sport",
    higherLevelFeatures: [
      {
        level: 1,
        name: "Quidditch Initiate",
        description:
          "At 1st level, you gain Vehicles (Broomstick) proficiency (expertise if already proficient). Summon magical broom as bonus action. Choose your primary Quidditch position specialty.",
        benefits: {
          vehicleProficiencies: ["Broomstick"],
          specialAbilities: [
            {
              name: "Summon Broom",
              type: "bonus action",
              description: "Summon magical broomstick",
            },
          ],
        },
        choices: [],
      },
      {
        level: 1,
        name: "Level 1 Specialization",
        description: "Choose your initial specialization approach.",
        choices: [
          {
            name: "Batter Up!",
            description:
              "Beater specialization. Gain Athletics proficiency (expertise if already proficient). Weapon proficiency with Beater's Bats (1d4/1d6 versatile) and Bludgers (1d6 ranged, scaling to 4d6 at 17th level). Use Strength for attack and damage rolls.",
            benefits: {
              skillProficiencies: [
                {
                  type: "fixed",
                  skills: ["Athletics"],
                  expertise: "if already proficient",
                },
              ],
              weaponProficiencies: ["Beater's Bats", "Bludgers"],
              specialAbilities: [
                {
                  name: "Beater Weapons",
                  type: "weapon",
                  weapons: {
                    bat: "1d4/1d6 versatile",
                    bludger: {
                      1: "1d6",
                      17: "4d6",
                    },
                  },
                  modifier: "Strength for attack/damage",
                },
              ],
            },
          },
          {
            name: "Think Fast!",
            description:
              "Chaser specialization. Gain Acrobatics proficiency (expertise if already proficient). As bonus action, target within 30 feet holding item must make Wisdom save or drop item to catch your Quaffle.",
            benefits: {
              skillProficiencies: [
                {
                  type: "fixed",
                  skills: ["Acrobatics"],
                  expertise: "if already proficient",
                },
              ],
              specialAbilities: [
                {
                  name: "Quaffle Toss",
                  type: "bonus action",
                  range: "30 feet",
                  save: "Wisdom",
                  effect: "Target drops held item",
                },
              ],
            },
          },
        ],
      },
      {
        level: 4,
        name: "Get Your Head In The Game (Optional)",
        description:
          "Can take instead of ASI/Feat. Choose a team support specialization.",
        choices: [
          {
            name: "Cheer",
            description:
              "As bonus action, inspire proficiency bonus allies within 30 feet with 1d4 to add to one ability check, attack roll, or saving throw before end of next turn. Twice per long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Team Cheer",
                  type: "bonus action",
                  range: "30 feet",
                  targets: "proficiency bonus allies",
                  bonus: "1d4 to one roll",
                  duration: "until end of next turn",
                  uses: "2 per long rest",
                },
              ],
            },
          },
          {
            name: "Chirp",
            description:
              "As bonus action, discourage proficiency bonus enemies within 30 feet to subtract 1d4 from next ability check, attack roll, or saving throw before end of your next turn. Twice per long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Taunt",
                  type: "bonus action",
                  range: "30 feet",
                  targets: "proficiency bonus enemies",
                  penalty: "-1d4 to next roll",
                  duration: "until end of your next turn",
                  uses: "2 per long rest",
                },
              ],
            },
          },
        ],
      },
      {
        level: 6,
        name: "We're All In This Together",
        description: "Choose an advanced Quidditch position specialization.",
        choices: [
          {
            name: "Goalkeeper",
            description:
              "Keeper specialization. Gain Athletics or Acrobatics proficiency, +2 AC bonus. As reaction, force enemy within 15 feet to reroll attack (take lower). Use proficiency bonus times per short rest.",
            benefits: {
              combatBonuses: {
                acBonus: "+2",
              },
              skillProficiencies: [
                {
                  type: "choice",
                  skills: ["Athletics", "Acrobatics"],
                  count: 1,
                },
              ],
              specialAbilities: [
                {
                  name: "Goal Defense",
                  type: "reaction",
                  range: "15 feet",
                  effect: "Force attack reroll, take lower",
                  uses: "proficiency bonus per short rest",
                },
              ],
            },
          },
          {
            name: "Eagle Eyes",
            description:
              "Seeker specialization. Gain Perception or Sleight of Hand proficiency. Add half Wisdom modifier to Dexterity saves, advantage on sight-based Perception checks.",
            benefits: {
              savingThrows: {
                bonus: "half Wisdom modifier to Dexterity saves",
              },
              skillProficiencies: [
                {
                  type: "choice",
                  skills: ["Perception", "Sleight of Hand"],
                  count: 1,
                },
              ],
              specialAbilities: [
                {
                  name: "Seeker's Sight",
                  type: "passive",
                  advantage: "sight-based Perception checks",
                },
              ],
            },
          },
        ],
      },
      {
        level: 8,
        name: "I'm Ok! (Optional)",
        description:
          "Can take instead of ASI/Feat. Dexterity +1 (max 20). Advantage on Acrobatics while flying/mid-air. Reaction to reduce fall damage by 3×(Dex mod + Str mod).",
        benefits: {
          abilityScoreIncrease: {
            type: "fixed",
            ability: "dexterity",
            amount: 1,
            max: 20,
          },
          specialAbilities: [
            {
              name: "Aerial Acrobat",
              type: "passive",
              advantage: "Acrobatics while flying/mid-air",
            },
            {
              name: "Safe Landing",
              type: "reaction",
              damageReduction: "3 × (Dex mod + Str mod) fall damage",
            },
          ],
        },
        choices: [],
      },
      {
        level: 9,
        name: "Quidditch Robe",
        description:
          "While not wearing cloak or wielding defensive item, AC equals 10 + Dex modifier + Str modifier.",
        benefits: {
          armorClass: {
            calculation: "10 + Dex modifier + Str modifier",
            restrictions: "No cloak or defensive items",
          },
        },
        choices: [],
      },
      {
        level: 10,
        name: "You Can't Catch Me!",
        description: "Choose an advanced aerial maneuver technique.",
        choices: [
          {
            name: "Zoomies!",
            description:
              "While on broom or flying, teleport up to 60 feet as part of movement, passing through walls/barriers without opportunity attacks. Half proficiency bonus uses per long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Blink Flight",
                  type: "movement",
                  condition: "While flying",
                  distance: "60 feet teleport",
                  abilities: [
                    "Pass through walls/barriers",
                    "No opportunity attacks",
                  ],
                  uses: "half proficiency bonus per long rest",
                },
              ],
            },
          },
          {
            name: "I Am Speed",
            description:
              "As action while on broom, fly 60 feet in straight line creating 60×20 foot wind tunnel for 1 minute. Creatures entering or starting turn inside make Strength save or take 5d6 force damage and be pulled 15 feet toward center. Various environmental effects. Once per long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Wind Tunnel",
                  type: "action",
                  requirement: "On broom",
                  movement: "60 feet straight line",
                  area: "60×20 foot tunnel",
                  duration: "1 minute",
                  save: "Strength",
                  damage: "5d6 force",
                  effect: "Pull 15 feet toward center",
                  uses: "1 per long rest",
                },
              ],
            },
          },
        ],
      },
      {
        level: 14,
        name: "Best Of The Best",
        description:
          "Choose a master-level position ability based on your specialization.",
        choices: [
          {
            name: "Slugger",
            description:
              "Requires Batter Up!. Bludger and Beater's Bat attacks count as magical. Bludger hits can deal 4d8 additional force damage (Strength modifier uses per long rest) and force Strength save for knockback/prone.",
            requirements: ["Batter Up!"],
            benefits: {
              specialAbilities: [
                {
                  name: "Magical Strikes",
                  type: "passive",
                  description: "Bludger and Bat attacks count as magical",
                },
                {
                  name: "Power Hit",
                  type: "enhancement",
                  damage: "+4d8 force",
                  save: "Strength or knockback/prone",
                  uses: "Strength modifier per long rest",
                },
              ],
            },
          },
          {
            name: "Chaser's Strategy",
            description:
              "Requires Think Fast!. As action, command ally within 30 feet to use reaction for attack or spell with advantage.",
            requirements: ["Think Fast!"],
            benefits: {
              specialAbilities: [
                {
                  name: "Tactical Command",
                  type: "action",
                  range: "30 feet",
                  target: "one ally",
                  effect: "Ally uses reaction for attack/spell with advantage",
                },
              ],
            },
          },
          {
            name: "Keeper's Wall",
            description:
              "Requires Goalkeeper. As reaction, create ethereal barrier for ally within 30 feet (+5 AC or +3 saves until next turn, Dedication extends to 1 minute). Can affect two allies if within 5 feet of each other. Dexterity modifier uses per long rest.",
            requirements: ["Goalkeeper"],
            benefits: {
              specialAbilities: [
                {
                  name: "Ethereal Barrier",
                  type: "reaction",
                  range: "30 feet",
                  targets: "1-2 allies (if within 5ft)",
                  bonus: "+5 AC or +3 saves",
                  duration: "until next turn (1 min with Dedication)",
                  uses: "Dexterity modifier per long rest",
                },
              ],
            },
          },
          {
            name: "Seeker's Sight",
            description:
              "Requires Eagle Eyes. Treat d20 rolls of 9 or lower as 10 for Acrobatics, Sleight of Hand, or Perception. Automatically detect invisible creatures/objects within 30 feet unless behind total cover.",
            requirements: ["Eagle Eyes"],
            benefits: {
              specialAbilities: [
                {
                  name: "Reliable Skills",
                  type: "passive",
                  description:
                    "Minimum 10 on Acrobatics/Sleight of Hand/Perception",
                },
                {
                  name: "True Sight",
                  type: "passive",
                  range: "30 feet",
                  description:
                    "Auto-detect invisible unless behind total cover",
                },
              ],
            },
          },
        ],
      },
      {
        level: 18,
        name: "Quidditch Team Captain",
        description:
          "Choose the ultimate expression of your Quidditch mastery.",
        choices: [
          {
            name: "All For One!",
            description:
              "Requires Get Your Head in the Game. Gain additional use of Cheer/Chirp. Cheer: add die to damage/AC, temp HP equal to 10 + 2×spellcasting modifier. Chirp: Wisdom save or 2d4 psychic damage + d4 penalty for two rounds.",
            requirements: ["Get Your Head in the Game"],
            benefits: {
              specialAbilities: [
                {
                  name: "Enhanced Rally",
                  type: "enhancement",
                  uses: "+1 use of Cheer/Chirp",
                  cheer: "Add die to damage/AC, 10+2×spell mod temp HP",
                  chirp: "Wis save or 2d4 psychic + d4 penalty for 2 rounds",
                },
              ],
            },
          },
          {
            name: "Bombs Away!",
            description:
              "Gain permanent 30-foot magical flying speed. While flying, advantage on attack rolls against creatures in 30-foot cone directly below you.",
            benefits: {
              speeds: {
                fly: "30 feet (magical)",
              },
              specialAbilities: [
                {
                  name: "Aerial Supremacy",
                  type: "passive",
                  condition: "While flying",
                  advantage: "attacks vs creatures in 30ft cone below",
                },
              ],
            },
          },
          {
            name: "All Rounder",
            description:
              "Gain expertise in Athletics, Acrobatics, Perception, and Sleight of Hand (if already proficient). Choose one additional feature from Best Of The Best section.",
            benefits: {
              skillExpertise: [
                {
                  type: "fixed",
                  skills: [
                    "Athletics",
                    "Acrobatics",
                    "Perception",
                    "Sleight of Hand",
                  ],
                  condition: "if proficient",
                },
              ],
              specialAbilities: [
                {
                  name: "Master Athlete",
                  type: "choice",
                  description: "Choose one additional Best Of The Best feature",
                },
              ],
            },
          },
        ],
      },
    ],
  },

  Trickery: {
    name: "Trickery",
    description:
      "Deceptive spellcasters who specialize in illusion, manipulation, and stealth magic, using subtle enchantments, false memories, and duplicity to control situations and misdirect opponents through cunning rather than force",
    higherLevelFeatures: [
      {
        level: 1,
        name: "Scoundrel",
        description:
          "At 1st level, you learn the Manus spell (all castings considered subtle) and gain access to the Trickery spellbook. Choose your primary approach to deception.",
        benefits: {
          spells: ["Manus (always subtle)"],
          spellbook: "Trickery",
        },
        choices: [],
      },
      {
        level: 1,
        name: "Level 1 Specialization",
        description: "Choose your initial specialization approach.",
        choices: [
          {
            name: "Insidious Rumor",
            description:
              "After speaking alone with a creature for 1 minute, target makes Wisdom save or becomes frightened of you or chosen creature for 1 hour (ends if attacked/damaged or sees allies attacked). No hint on successful save. Once per short/long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Fearful Whispers",
                  type: "social",
                  time: "1 minute conversation",
                  save: "Wisdom",
                  duration: "1 hour",
                  effect: "Frightened of you or chosen creature",
                  uses: "1 per short rest",
                },
              ],
            },
          },
          {
            name: "Sticky Fingers",
            description:
              "When casting Manus, make spectral hand invisible. With contested Sleight of Hand vs Perception: stow objects in others' containers, retrieve objects from others, use thieves' tools at range. Control hand with bonus action.",
            benefits: {
              specialAbilities: [
                {
                  name: "Invisible Manus",
                  type: "spell enhancement",
                  description: "Manus hand is invisible",
                  abilities: [
                    "Plant objects on others",
                    "Steal from others",
                    "Use thieves' tools at range",
                  ],
                  control: "Bonus action",
                },
              ],
            },
          },
        ],
      },
      {
        level: 4,
        name: "Silver Tongue (Optional)",
        description:
          "Can take instead of ASI/Feat. Master of saying the right thing. Treat d20 rolls of 7 or lower as 8 for Charisma (Persuasion) and Charisma (Deception) checks.",
        benefits: {
          specialAbilities: [
            {
              name: "Smooth Talker",
              type: "passive",
              description: "Minimum 8 on Persuasion and Deception",
            },
          ],
        },
        choices: [],
      },
      {
        level: 6,
        name: "Perjurer",
        description:
          "Gain stealth expertise and choose an advanced deception technique.",
        benefits: {
          skillExpertise: [
            {
              type: "fixed",
              skills: ["Stealth"],
            },
          ],
        },
        choices: [
          {
            name: "Duplicate",
            description:
              "As action, create perfect illusion of yourself for 1 minute within 30 feet (120-foot max range). Move 30 feet as bonus action. Cast spells through illusion space. Advantage on attacks when both you and illusion within 5 feet of target. Once per long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Illusory Double",
                  type: "action",
                  duration: "1 minute",
                  range: "30 feet creation, 120 feet max",
                  movement: "30 feet as bonus action",
                  abilities: [
                    "Cast spells through illusion",
                    "Advantage when flanking",
                  ],
                  uses: "1 per long rest",
                },
              ],
            },
          },
          {
            name: "Make Nice",
            description:
              "After 1+ minutes observing/interacting outside combat, learn if creature is equal/superior/inferior in Intelligence/Wisdom/Charisma scores or their subclass (choose 2). May learn history/personality traits.",
            benefits: {
              specialAbilities: [
                {
                  name: "Social Analysis",
                  type: "social",
                  time: "1+ minutes",
                  learn:
                    "2 of: Int/Wis/Cha comparison, subclass, history, traits",
                },
              ],
            },
          },
          {
            name: "Deep Pockets",
            description:
              "One garment gains 1-foot diameter compartment visible only to you, permanently affected by Capacious Extremis charm. Temporarily inaccessible in magically extended spaces.",
            benefits: {
              equipment: [
                "Hidden compartment (1-foot diameter, Capacious Extremis)",
              ],
              specialAbilities: [
                {
                  name: "Secret Storage",
                  type: "passive",
                  description: "Hidden magical compartment in garment",
                },
              ],
            },
          },
        ],
      },
      {
        level: 8,
        name: "Obliviator (Optional)",
        description:
          "Can take instead of ASI/Feat. When casting obliviate, can implant detailed false memories instead of erasing. Undetectable to target but might be detected by external memory examination.",
        benefits: {
          specialAbilities: [
            {
              name: "Memory Manipulation",
              type: "spell enhancement",
              spell: "Obliviate",
              description: "Implant false memories instead of erasing",
            },
          ],
        },
        choices: [],
      },
      {
        level: 9,
        name: "Sneaky Bitch",
        description:
          "On your turn, take one additional bonus action. Can use bonus actions for Dash, Disengage, or Hide actions.",
        benefits: {
          specialAbilities: [
            {
              name: "Extra Cunning",
              type: "passive",
              description: "Extra bonus action per turn",
              abilities: ["Bonus action for Dash/Disengage/Hide"],
            },
          ],
        },
        choices: [],
      },
      {
        level: 10,
        name: "Manipulative Motives",
        description: "Choose an advanced method of mental manipulation.",
        choices: [
          {
            name: "Look at me",
            description:
              "As action, Persuasion vs Insight contest. Success on hostile: disadvantage on attacks vs others, no opportunity attacks vs others (1 minute, various end conditions). Success on non-hostile: charmed for 1 minute (ends if harmed).",
            benefits: {
              specialAbilities: [
                {
                  name: "Compelling Gaze",
                  type: "action",
                  contest: "Persuasion vs Insight",
                  duration: "1 minute",
                  hostile: "Disadvantage on attacks/no OA vs others",
                  nonHostile: "Charmed (ends if harmed)",
                },
              ],
            },
          },
          {
            name: "Mirrored Memories",
            description:
              "Once per long rest, as action tell vivid story to creatures within 60 feet. Intelligence save or charmed and believe they experienced the story until completing long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "False Experience",
                  type: "action",
                  range: "60 feet",
                  save: "Intelligence",
                  effect: "Charmed + believe story as memory",
                  duration: "until long rest",
                  uses: "1 per long rest",
                },
              ],
            },
          },
        ],
      },
      {
        level: 14,
        name: "False Witness",
        description: "Choose a master-level deception technique.",
        choices: [
          {
            name: "Misdirection",
            description:
              "When targeted by attack while creature within 5 feet, use reaction to redirect attack to that creature instead.",
            benefits: {
              specialAbilities: [
                {
                  name: "Attack Redirect",
                  type: "reaction",
                  trigger: "Targeted by attack",
                  range: "5 feet",
                  effect: "Redirect to adjacent creature",
                },
              ],
            },
          },
          {
            name: "Veiled Influence",
            description:
              "After 10-minute conversation, gain 24-hour advantage on Charisma checks vs target. Can implant suggestion: Wisdom save or take 4d10 psychic damage when acting counter to instructions (max 3 times per 24 hours). No suicidal commands.",
            benefits: {
              specialAbilities: [
                {
                  name: "Deep Suggestion",
                  type: "social",
                  time: "10-minute conversation",
                  duration: "24 hours",
                  advantage: "Charisma checks vs target",
                  suggestion:
                    "Wis save or 4d10 psychic for disobedience (max 3/day)",
                },
              ],
            },
          },
        ],
      },
      {
        level: 18,
        name: "Blatant Exploitation",
        description: "Choose the ultimate expression of your trickery mastery.",
        choices: [
          {
            name: "Quintuplicate",
            description:
              "Requires Duplicate. Create up to 4 duplicates instead of 1. Bonus action to move any number up to 30 feet (120-foot max). When targeted by spell/attack, reaction to swap places with duplicate within 60 feet.",
            requirements: ["Duplicate"],
            benefits: {
              specialAbilities: [
                {
                  name: "Multiple Illusions",
                  type: "enhancement",
                  duplicates: "up to 4",
                  movement: "30 feet each as bonus action",
                  swap: "Reaction to swap with duplicate within 60ft",
                },
              ],
            },
          },
          {
            name: "Yoink!",
            description:
              "When creature casts spell targeting you or including you in area, reaction to force spellcasting ability save (DC = your spell save DC). Success negates effect on you and steals spell knowledge for 8 hours if 1st+ level and you can cast it. Caster can't use spell for 8 hours. Proficiency bonus uses per long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Spell Theft",
                  type: "reaction",
                  trigger: "Targeted by spell",
                  save: "Spellcasting ability",
                  duration: "8 hours",
                  effect: "Negate spell, steal if 1st+ level",
                  uses: "proficiency bonus per long rest",
                },
              ],
            },
          },
        ],
      },
    ],
  },

  "Necromantic Healer": {
    name: "Necromantic Healer",
    description:
      "Dark healers who walk the line between life and death, using forbidden necromantic arts to both harm enemies and heal allies through unconventional means",
    higherLevelFeatures: [
      {
        level: 1,
        name: "Profane Studies",
        description:
          "At 1st level, you gain access to the Gravetouched Spell List and choose one of the following necromantic specializations.",
        benefits: {
          spellList: "Gravetouched",
        },
        choices: [
          {
            name: "Shadowmend",
            description:
              "You lock in one dark spell of 2nd level or lower of your choice from any spell list. When you cast a cantrip with the dark tag that normally targets only one creature, you can choose to do one of the following: Target two creatures within range and within 10 feet of each other, OR Target one creature and one ally within 10 feet of each other. The creature takes damage as normal, and the ally regains hit points equal to the damage die of the spell.",
            benefits: {
              spells: ["One dark spell ≤2nd level (any list)"],
              specialAbilities: [
                {
                  name: "Dark Cantrip Split",
                  type: "spell enhancement",
                  applies: "Dark cantrips",
                  options: [
                    "Target 2 creatures within 10ft",
                    "Damage enemy + heal ally (damage die HP)",
                  ],
                },
              ],
            },
          },
          {
            name: "Shared Agony",
            description:
              "You can link the life force of your enemies into a shared conduit of suffering. As an action you may force a number of creatures you can see within 60 feet equal to your Healing Modifier (minimum of 1 creature) to succeed on a Constitution saving throw against your spell save DC or become Tethered for 1 minute. A Tethered creature suffers the following effects: Whenever a tethered creature takes damage from your spells or subclass bonuses, all other tethered creatures take necrotic damage equal to your proficiency bonus. A tethered creature regains only half the normal amount of hit points from healing. You may use this feature once per long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Life Tether",
                  type: "action",
                  range: "60 feet",
                  targets: "Healing modifier creatures (min 1)",
                  save: "Constitution",
                  duration: "1 minute",
                  uses: "1 per long rest",
                  effects: [
                    "Share proficiency bonus necrotic damage",
                    "Half healing received",
                  ],
                },
              ],
            },
          },
        ],
      },
      {
        level: 4,
        name: "Marrowbound (Optional)",
        description:
          "At 4th level, you can optionally take this feature in place of an Ability Score Improvement or Feat.",
        choices: [
          {
            name: "Reanimate Remains",
            description:
              "You have mastered the forbidden art of reanimating the dead. You learn the ritual of assembling a Marrowbound, a twisted undead servant crafted from scavenged bones and other remains. The Marrowbound is friendly to you and your companions and obeys your commands. See this creature's game statistics in the Marrowbound stat block, which uses your proficiency bonus (PB) in several places. You determine the Marrowbound's appearance. In combat, the Marrowbound shares your initiative count, but it takes its turn immediately after yours. The only action it takes on its turn is the Dodge action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. If you are incapacitated, the spirit can take any action of its choice, not just Dodge. If the Marrowbound is reduced to 0 hit points, it crumbles into inert bone fragments. You can restore it during a long rest by performing an hour of necromantic reconstruction using small bones, grave soil, or animal remains worth 25 Galleons.",
            benefits: {
              specialAbilities: [
                {
                  name: "Marrowbound Servant",
                  type: "companion",
                  description: "Undead servant with custom stats",
                  control: "Bonus action to command",
                  restoration: "1 hour ritual + 25 Galleons materials",
                },
              ],
            },
          },
        ],
      },
      {
        level: 6,
        name: "Brand of Death",
        description:
          "At 6th level, choose one of the following dark empowerments.",
        choices: [
          {
            name: "Undead Thralls",
            description:
              "You lock in the Gehennus Conjurus spell. When you cast Gehennus Conjurus, you summon one more Inferius than usual. Whenever you cast Gehennus Conjurus spell, the Inferi have these additional benefits: The creature's hit point maximum is increased by an amount equal to your level. The creature adds your proficiency bonus to its weapon damage rolls.",
            benefits: {
              spells: ["Gehennus Conjurus"],
              specialAbilities: [
                {
                  name: "Enhanced Inferi",
                  type: "spell enhancement",
                  spell: "Gehennus Conjurus",
                  bonuses: [
                    "+1 Inferius summoned",
                    "+level HP to each",
                    "+proficiency bonus to damage",
                  ],
                },
              ],
            },
          },
          {
            name: "Defy Death",
            description:
              "You can give yourself vitality when you cheat death or when you help someone else cheat it. You can regain hit points equal to 1d8 + your Healing modifier (minimum of 1 hit point) when you succeed on a death saving throw or when you stabilize a creature with a spell. Once you use this feature, you can't use it again until you finish a long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Death Defiance",
                  type: "trigger",
                  trigger: "Succeed death save or stabilize with spell",
                  healing: "1d8 + Healing modifier (min 1)",
                  uses: "1 per long rest",
                },
              ],
            },
          },
          {
            name: "Anguish",
            description:
              "When you hit a creature with a spell attack, you may deal an additional 1d8 necrotic damage and force the target to make a constitution saving throw against your spell save DC or be stunned until the end of your next turn. This damage increases to 2d8 at 14th Level. You may use this feature a number of times equal to your proficiency bonus per long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Stunning Anguish",
                  type: "trigger",
                  trigger: "Hit with spell attack",
                  damage: {
                    6: "1d8 necrotic",
                    14: "2d8 necrotic",
                  },
                  save: "Constitution or stunned",
                  uses: "proficiency bonus per long rest",
                },
              ],
            },
          },
        ],
      },
      {
        level: 6,
        name: "Curse Cleanser",
        description:
          "When you use a healing spell of 1st level or higher on a creature, you can end one condition or magical effect on them. The condition must be one of the following: charmed, frightened, poisoned, blinded, deafened, or cursed. The level of the curse must be equal to or lower than the level of the healing spell. You can do this a number of times equal to your spellcasting modifier per long rest.",
        benefits: {
          specialAbilities: [
            {
              name: "Cleansing Touch",
              type: "spell enhancement",
              applies: "Healing spells ≥1st level",
              cleanse: [
                "charmed",
                "frightened",
                "poisoned",
                "blinded",
                "deafened",
                "cursed",
              ],
              limitation: "Curse level ≤ spell level",
              uses: "spellcasting modifier per long rest",
            },
          ],
        },
        choices: [],
      },
      {
        level: 10,
        name: "Salvaged Remains",
        description:
          "At 10th level, choose one of the following advanced necromantic techniques.",
        choices: [
          {
            name: "Curse Chain",
            description:
              "Shared Agony Required. When a creature Tethered by your Shared Agony feature fails a saving throw and becomes affected by a condition (such as charmed, frightened, paralyzed, stunned, blinded, deafened, poisoned, or similar), all other tethered creatures must make the same saving throw at the end of their next turn or suffer the same condition for its remaining duration.",
            requirements: ["Shared Agony"],
            benefits: {
              specialAbilities: [
                {
                  name: "Contagious Conditions",
                  type: "passive",
                  trigger: "Tethered creature gains condition",
                  effect: "All tethered must save or share condition",
                },
              ],
            },
          },
          {
            name: "Harvest the Fallen",
            description:
              "You gain the ability to reap life energy from creatures you kill with your spells. Once per turn when you kill one or more creatures with a spell of 1st level or higher, you regain hit points equal to twice the spell's level, or three times its level if the spell has the dark tag. When you kill a creature this way, you may regain one expended spell slot of the same level as the spell used to kill it.",
            benefits: {
              specialAbilities: [
                {
                  name: "Death Harvest",
                  type: "trigger",
                  trigger: "Kill with spell ≥1st level",
                  frequency: "once per turn",
                  healing: "2× spell level (3× if dark)",
                  bonus: "Regain same level spell slot",
                },
              ],
            },
          },
          {
            name: "Siphoned Vitality",
            description:
              "Once per turn, when you hit with a spell of 1st level or higher that deals damage, you can choose one ally within 30 feet to regain hit points equal to the spell's level + your spellcasting ability modifier. Additionally, when a creature within 15 feet of you drops to 0 hit points you can use your reaction to regain hit points equal to half of that creature's hitpoint maximum.",
            benefits: {
              specialAbilities: [
                {
                  name: "Life Transfer",
                  type: "trigger",
                  trigger: "Hit with damaging spell ≥1st",
                  frequency: "once per turn",
                  range: "30 feet",
                  healing: "spell level + spellcasting modifier",
                },
                {
                  name: "Death Absorption",
                  type: "reaction",
                  trigger: "Creature within 15ft drops to 0 HP",
                  healing: "half creature's max HP",
                },
              ],
            },
          },
          {
            name: "Whispers of Mending",
            description:
              "Shadowmend Required. Your healing magic weaves through shadow and unseen spaces, reaching those beyond the limits of sight. The range of all healing spells you cast is increased by 5 feet. If a healing spell normally requires touch, it can instead target a creature within 10 feet. You can cast healing spells on creatures even if you cannot see them. In dim light or darkness, all healing spells you cast have double their normal range.",
            requirements: ["Shadowmend"],
            benefits: {
              specialAbilities: [
                {
                  name: "Shadow Healing",
                  type: "spell enhancement",
                  rangeBonus: "+5 feet all healing spells",
                  touchSpells: "10 feet instead",
                  abilities: [
                    "Heal without sight",
                    "Double range in dim light/darkness",
                  ],
                },
              ],
            },
          },
        ],
      },
      {
        level: 14,
        name: "Curse of Rot",
        description:
          "At 14th level, choose one of the following ultimate necromantic powers.",
        choices: [
          {
            name: "Touch of Blight",
            description:
              "Your touch can channel the energy of death into a creature. As an action, you touch one creature within 5 feet of you, and you expend 1 to 10 sorcery points. The target must make a Constitution saving throw, and it takes 2d10 necrotic damage per sorcery point spent on a failed save, or half as much damage on a successful one.",
            benefits: {
              specialAbilities: [
                {
                  name: "Blight Touch",
                  type: "action",
                  range: "touch",
                  cost: "1-10 sorcery points",
                  save: "Constitution",
                  damage: "2d10 necrotic per SP (half on success)",
                },
              ],
            },
          },
          {
            name: "Command Undead",
            description:
              "You can use magic to bring undead under your control, even those created by other wizards. As an action, you can choose one undead that you can see within 60 feet of you. That creature must make a Charisma saving throw against your spell save DC. If it succeeds, you can't use this feature on it again. If it fails, it becomes friendly to you and obeys your commands until you use this feature again. Intelligent undead are harder to control in this way. If the target has an Intelligence of 8 or higher, it has advantage on the saving throw. If it fails the saving throw and has an Intelligence of 12 or higher, it can repeat the saving throw at the end of every hour until it succeeds and breaks free.",
            benefits: {
              specialAbilities: [
                {
                  name: "Undead Domination",
                  type: "action",
                  range: "60 feet",
                  save: "Charisma",
                  duration: "until used again",
                  limitations: [
                    "Int 8+: advantage on save",
                    "Int 12+: hourly saves",
                  ],
                },
              ],
            },
          },
          {
            name: "Hex Surge",
            description:
              "Once per turn you may add twice your Healing modifier to the damage of one target of a dark spell.",
            benefits: {
              specialAbilities: [
                {
                  name: "Dark Empowerment",
                  type: "passive",
                  frequency: "once per turn",
                  damage: "+2× Healing modifier to dark spell target",
                },
              ],
            },
          },
        ],
      },
      {
        level: 18,
        name: "Life and Death",
        description:
          "At 18th level, you master the ultimate balance between life and death. Choose one of the following capstone abilities.",
        choices: [
          {
            name: "Continual Casting",
            description:
              "Whenever you reduce a creature to 0 hit points with a spell of 1st level or higher, you can immediately cast a spell of 3rd level or lower without expending a spell slot. The spell must have a casting time of 1 action or 1 bonus action. You can use this feature a number of times equal to your proficiency bonus per long rest.",
            benefits: {
              specialAbilities: [
                {
                  name: "Death Cascade",
                  type: "trigger",
                  trigger: "Reduce creature to 0 HP with spell ≥1st",
                  effect: "Free cast spell ≤3rd level",
                  limitation: "1 action or bonus action spells",
                  uses: "proficiency bonus per long rest",
                },
              ],
            },
          },
          {
            name: "Gravewalk",
            description:
              "Shared Agony Required. You become immune to necrotic damage and cannot be reduced below 1 hit point by damage from any creature that is Tethered by your Shared Agony feature. Additionally, you can cast all locked in spells that have the dark tag or restore hit points wordlessly and wandlessly.",
            requirements: ["Shared Agony"],
            benefits: {
              immunities: ["necrotic damage"],
              specialAbilities: [
                {
                  name: "Tether Protection",
                  type: "passive",
                  description:
                    "Cannot be reduced below 1 HP by tethered creatures",
                },
                {
                  name: "Silent Dark Magic",
                  type: "passive",
                  description:
                    "Cast dark/healing spells wordlessly and wandlessly",
                },
              ],
            },
          },
          {
            name: "Covenant of Ruin",
            description:
              "Your presence corrodes the boundary between life and death. At the start of each of your turns, each enemy within 10 feet of you takes necrotic damage equal to your Healing modifier (minimum of 1). If a creature affected by this damage is also under the effects of one of your spells, conditions or subclass features, it instead takes double that amount. This aura bypasses resistance to necrotic damage.",
            benefits: {
              specialAbilities: [
                {
                  name: "Aura of Decay",
                  type: "aura",
                  range: "10 feet",
                  trigger: "Start of your turn",
                  damage: "Healing modifier necrotic (min 1)",
                  bonus: "Double if affected by your abilities",
                  special: "Bypasses necrotic resistance",
                },
              ],
            },
          },
        ],
      },
    ],
  },
  Alchemy: {
    name: "Alchemy",
    description:
      "Masters of alchemical transformation, potion brewing, and metallurgical arts with three distinct paths: Simple Elixir creation, Spagyrics plant magic, and Smith's armor enhancement.",
    higherLevelFeatures: [
      {
        level: 1,
        name: "Alchemical Focus",
        description:
          "At 1st level choose one of the following features that defines your approach to alchemy.",
        choices: [
          {
            name: "Simple Elixir",
            description:
              "You gain proficiency in potion making, alchemist's supplies, and potion making kits. Whenever you finish a long rest, you can magically produce a simple elixir in an empty phial you touch. Roll on the table for the elixir's effect, which is triggered when someone drinks the elixir. As a bonus action, a creature can drink the elixir or administer it to a creature. You can create additional elixirs by expending a spell slot of 1st level or higher for each one. When you reach certain levels, you can make more elixirs at the end of a long rest: two at 6th level and three at 15th level.",
            benefits: {
              proficiencies: [
                "Potion making",
                "Alchemist's supplies",
                "Potion making kits",
              ],
              specialAbilities: [
                {
                  name: "Daily Elixir Creation",
                  type: "long rest",
                  description:
                    "Create 1 elixir per long rest (2 at 6th, 3 at 15th level)",
                  elixirTable: [
                    "Healing: Regains 2d4 + Potions modifier hit points",
                    "Swiftness: +10 feet walking speed for 1 hour",
                    "Resilience: +1 AC for 10 minutes",
                    "Boldness: +1d4 to attack rolls and saves for 1 minute",
                    "Flight: 10 feet flying speed for 10 minutes",
                    "Transformation: Alter Self spell effects for 10 minutes",
                  ],
                },
                {
                  name: "Spell Slot Elixirs",
                  type: "action",
                  description:
                    "Expend spell slots to create additional elixirs",
                },
              ],
            },
          },
          {
            name: "Spagyricist",
            description:
              "Your alchemical knowledge veers towards the rarer form of Spagyrics, focusing on plants. You gain proficiency in Medicine, Herbology and Herbology kits. Additionally, your study of herbs and their properties has caused you to learn how to mix their innate magic with yours. As a bonus action, you can touch a creature that has less than its full hit points and heal or harm them. The die rolled increases as you level up: 1d6 at 5th level, 1d8 at 11th level, and 1d10 at 17th level.",
            benefits: {
              proficiencies: ["Medicine", "Herbology", "Herbology kits"],
              specialAbilities: [
                {
                  name: "Herbal Alchemy",
                  type: "bonus action",
                  uses: "Proficiency bonus per long rest",
                  healing:
                    "1d4 + Medicine/Herbology modifier (whichever is higher)",
                  damage: "1d4 + Medicine/Herbology modifier necrotic",
                  scaling: {
                    5: "1d6",
                    11: "1d8",
                    17: "1d10",
                  },
                },
              ],
            },
          },
          {
            name: "The Smith",
            description:
              "Your metallurgical pursuits have led to you making armor a conduit for your magic. You gain proficiency with heavy armor and smith's tools, and gain a set of alchemical armor with an AC of 17. Additionally, you learn how to use your artisan's tools as a spellcasting focus in place of a wand. Whenever you use your tool to cast a spell that either deals damage or heals a creature you gain a bonus to the damage or healing equal to your intelligence modifier (minimum of +1).",
            benefits: {
              proficiencies: ["Heavy armor", "Smith's tools"],
              equipment: ["Alchemical armor (AC 17)"],
              specialAbilities: [
                {
                  name: "Tool Focus",
                  type: "passive",
                  description:
                    "Use artisan's tools as spellcasting focus instead of wand",
                },
                {
                  name: "Enhanced Magic",
                  type: "passive",
                  description:
                    "Add Intelligence modifier to damage/healing when using tool focus",
                },
              ],
            },
          },
        ],
      },
      {
        level: 9,
        name: "Alchemist Stone",
        description:
          "At 9th level you can spend 8 hours creating an Alchemist's stone that stores transfiguration magic. You can benefit from the stone yourself or give it to another creature. When you create the stone, choose the benefit from the available options. Each time you cast a transfiguration spell of 1st level or higher you can change the effect of your stone if the stone is on your person.",
        benefits: {
          specialAbilities: [
            {
              name: "Alchemist's Stone",
              type: "item creation",
              duration: "8 hours to create",
              options: [
                "Darkvision out to 60 feet",
                "Speed increase of 10 feet while unencumbered",
                "Proficiency in one saving throw",
                "Resistance to acid, cold, fire, lightning, or thunder damage",
              ],
              special: "Change effect when casting transfiguration spells",
            },
          ],
        },
        choices: [],
      },
      {
        level: 10,
        name: "Triaprima",
        description:
          "At 10th level choose one of the following features based on your 1st level choice.",
        choices: [
          {
            name: "Powerful Elixir",
            description:
              "Simple Elixir Required. You gain expertise in potion making, alchemist's supplies, or potion making kits. Whenever a creature drinks an elixir or potion you created, the creature gains temporary hit points equal to 2d6 + your Potions modifier (minimum of 1 temporary hit point) or takes additional acid damage equal to the same amount. You can cast Reparifors without expending a spell slot, provided you use alchemist's supplies as the spellcasting focus. You can do so a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a long rest.",
            requirements: ["Simple Elixir"],
            benefits: {
              expertise: [
                "Potion making",
                "Alchemist's supplies",
                "Potion making kits",
              ],
              specialAbilities: [
                {
                  name: "Enhanced Potions",
                  type: "passive",
                  description:
                    "Potions grant 2d6 + Potions modifier temp HP or bonus acid damage",
                },
                {
                  name: "Free Reparifors",
                  type: "spell",
                  uses: "Wisdom modifier per long rest",
                  focus: "Alchemist's supplies required",
                },
              ],
            },
          },
          {
            name: "Swift Hands",
            description:
              "Spagyricist Required. You gain proficiency in sleight of hand. Your ability to add herbal alchemy to your magic doubles. Whenever you use your bonus action to heal or harm with Spagyrics, you can do so twice.",
            requirements: ["Spagyricist"],
            benefits: {
              proficiencies: ["Sleight of hand"],
              specialAbilities: [
                {
                  name: "Double Spagyrics",
                  type: "bonus action enhancement",
                  description: "Use Herbal Alchemy twice per bonus action",
                },
              ],
            },
          },
          {
            name: "Bewitched Weaponry",
            description:
              "The Smith Required. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 fire or radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8. Additionally, you gain resistance to fire and radiant damage.",
            requirements: ["The Smith"],
            benefits: {
              resistances: ["fire", "radiant"],
              specialAbilities: [
                {
                  name: "Elemental Weapon",
                  type: "weapon enhancement",
                  damage: "1d8 fire or radiant",
                  scaling: {
                    14: "2d8",
                  },
                  frequency: "Once per turn",
                },
              ],
            },
          },
        ],
      },
      {
        level: 14,
        name: "Chemistry and Metallurgy",
        description: "At 14th level choose one of the following features.",
        choices: [
          {
            name: "Chemist",
            description:
              "Spagyricist or Simple Elixir Required. You have been exposed to so many chemicals that they pose little risk to you, and you can use them to quickly end certain ailments. You gain resistance to acid damage and poison damage, and you are now immune to the poisoned condition. You can cast Animatem and Brackium Emendo without expending a spell slot, and without having to have the spell mastered, provided you use alchemist's supplies as the spellcasting focus. Once you cast either spell with this feature, you can't cast that spell with it again until you finish a long rest.",
            requirements: ["Spagyricist", "Simple Elixir"],
            benefits: {
              resistances: ["acid", "poison"],
              immunities: ["poisoned condition"],
              specialAbilities: [
                {
                  name: "Chemical Immunity",
                  type: "passive",
                  description: "Resistance to acid/poison, immune to poisoned",
                },
                {
                  name: "Healing Mastery",
                  type: "spell",
                  spells: ["Animatem", "Brackium Emendo"],
                  uses: "1 per spell per long rest",
                  focus: "Alchemist's supplies required",
                },
              ],
            },
          },
          {
            name: "Master Blacksmith",
            description:
              "The Smith Required. When a Huge or smaller creature you can see ends its turn within 30 feet of you, you can use your reaction to magically force it to make a Strength saving throw against your spell save DC. On a failed save, you pull the creature up to 25 feet directly to an unoccupied space. If you pull the target to a space within 5 feet of you, you can make a melee weapon attack against it as part of this reaction. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses of it when you finish a long rest.",
            requirements: ["The Smith"],
            benefits: {
              specialAbilities: [
                {
                  name: "Magnetic Pull",
                  type: "reaction",
                  range: "30 feet",
                  save: "Strength vs spell save DC",
                  effect:
                    "Pull creature 25 feet, bonus attack if within 5 feet",
                  uses: "Proficiency bonus per long rest",
                },
              ],
            },
          },
        ],
      },
      {
        level: 18,
        name: "Everlasting Life",
        description: "At 18th level choose one of the following features.",
        choices: [
          {
            name: "True Alchemist",
            description:
              "Your lifelong study of Flamel's and Dumbledore's writings has finally come to fruition. You can create a Philosopher's Stone, turning any metal into gold and producing the Elixir of Life. You cannot die of natural causes, you age at a slower rate, and you cannot be aged magically. After reaching the age of 25, for every 10 years that pass, your body ages only 1 year. Only one Philosopher's Stone may exist at one time. Additionally, you cannot be paralyzed, petrified, poisoned, stunned, incapacitated, or rendered unconscious by magical means.",
            benefits: {
              immunities: [
                "natural death",
                "magical aging",
                "paralyzed (magical)",
                "petrified (magical)",
                "poisoned (magical)",
                "stunned (magical)",
                "incapacitated (magical)",
                "unconscious (magical)",
              ],
              specialAbilities: [
                {
                  name: "Philosopher's Stone",
                  type: "legendary item creation",
                  description:
                    "Create unique Philosopher's Stone - transmute metals to gold, produce Elixir of Life",
                },
                {
                  name: "Ageless",
                  type: "passive",
                  description: "Age 1 year for every 10 years after age 25",
                },
              ],
            },
          },
          {
            name: "Heart of the Smith",
            description:
              "The Smith Required. You gain immunity to fire and radiant damage. While wearing heavy armor, you have resistance to bludgeoning, piercing, and slashing damage, and immunity to those types of damage if they are nonmagical.",
            requirements: ["The Smith"],
            benefits: {
              immunities: ["fire", "radiant"],
              conditionalResistances: [
                {
                  condition: "wearing heavy armor",
                  resistances: ["bludgeoning", "piercing", "slashing"],
                  immunities: [
                    "nonmagical bludgeoning",
                    "nonmagical piercing",
                    "nonmagical slashing",
                  ],
                },
              ],
            },
          },
        ],
      },
    ],
  },
};
export const subclasses = Object.keys(subclassesData);
