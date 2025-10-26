
import { healer_alchemist } from "./CustomClasses/Healer-Alchemist";
import { spellwright } from "./CustomClasses/Spellwright";
import { naturalist } from "./CustomClasses/Naturalist";
import { auror } from "./CustomClasses/Auror";
import { wordsmith } from "./CustomClasses/Wordsmith";
import { hitwizard } from "./CustomClasses/Hit-Wizard";
import { field_hunter } from "./CustomClasses/Field-Hunter";
import { muggle_liaison } from "./CustomClasses/Muggle-Liaison";
import { arcanist } from "./CustomClasses/Arcanist";
import { obscurial } from "./CustomClasses/Obscurial";
import { spellbrawler } from "./CustomClasses/SpellBrawler";
import { professor } from "./CustomClasses/Professor";

export const customClassesData = {
  base_witch_wizard: {
    id: "base_witch_wizard",
    name: "Witch / Wizard",
    type: "Base Class",
    description:
      "Every trained witch or wizard begins here. A magical investigator, duelist, or scholar who channels their will through structured spellcraft. This base class provides core magical training before advancing into specialized subclasses such as Auror, Healer-Alchemist, or Naturalist.",
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
      ritual_casting: true,
      ritual_notes:
        "You can cast a spell as a ritual if you have it prepared and it has the ritual tag.",
      cantrips_known: { 1: 3, 5: 4 },
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
    class_resources: [],
    level_features: [
      {
        level: 1,
        features: [
          {
            name: "Academic Foundation",
            description:
              "Choose a casting ability (Intelligence, Wisdom, or Charisma) to serve as your magical focus for this class. You gain proficiency in one language or one of the following tools: Alchemist's Supplies or Calligrapher's Tools (your choice). When you make an Intelligence (Arcana) check directly related to a spell you have prepared, you have advantage.",
          },
          {
            name: "Magical Specialty",
            description: "Choose a focus that defines your magical training.",
            options: [
              {
                name: "Charms",
                effect:
                  "+1 to spell attack rolls and your spell save DC for charm and enchantment effects you cast. You learn Mage Hand if you don’t already know it.",
              },
              {
                name: "Defense",
                effect:
                  "When you cast a defensive spell (such as Shield, Protego, Counterspell, or Finite Incantatem that ends an effect) you gain +2 AC until the start of your next turn.",
              },
              {
                name: "Transfiguration",
                effect:
                  "As an action, you can cosmetically alter a Small or smaller nonliving object (size no greater than a 1-foot cube) for 1 hour. You can also mend or reshape a minor break or warp in a nonmagical object (simple hinges, clasps, cracked glass) with a DC 10 Arcana check.",
              },
              {
                name: "Potions & Alchemy",
                effect:
                  "During a long rest, you can brew one Common restorative or investigative concoction without a lab (e.g., minor healing draught that restores 1d4 + your proficiency bonus HP, basic antitoxin advantage vs poison for 1 hour, or a tracing tincture granting advantage on one Investigation check). Unused concoctions spoil at the next dawn.",
              },
              {
                name: "Dark Arts Studies",
                effect:
                  "You have advantage on saving throws against being frightened. You can identify hexes, curses, and dark marks on sight with a DC 10 Arcana check, learning whether they are active, dormant, or residual.",
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
              "As an action, focus on a 30-foot area to detect magical traces cast there in the past hour, learning school, relative strength, and emotional residue. If a spell of 3rd level or higher was cast there, you can sense traces up to the past 24 hours. The DM may describe visible auras or motes indicating type and intensity. Uses per long rest = your proficiency bonus.",
          },
          {
            name: "Magical Theory",
            description:
              "When witnessing a creature begin casting a spell, you may use your reaction to make an Intelligence (Arcana) check (DC 10 + spell level) to identify it before it takes effect.",
          },
        ],
      },
      {
        level: 3,
        features: [
          {
            name: "Countercurse",
            description:
              "When you or a creature you can see within 30 ft is affected by a spell, you may use your reaction to make a spellcasting ability check (DC 10 + the spell’s level). On a success, the effect on that target ends. Uses per long rest = your proficiency bonus.",
          },
          {
            name: "Focus Recovery",
            description:
              "Once per short rest, as a bonus action, you regain expended spell slots whose combined levels are equal to or less than your proficiency bonus (no slot recovered can be higher than 2nd level).",
          },
        ],
      },
      {
        level: 4,
        features: [
          {
            name: "Ability Score Improvement or Magical Feat",
            description:
              "Increase one ability score by +2 or two abilities by +1, or choose a magical feat.",
            feat_examples: [
              {
                name: "Duelist's Reflex",
                effect:
                  "You can use Countercurse as a bonus action 1/long rest (still consumes a Countercurse use).",
              },
              {
                name: "Forensic Focus",
                effect:
                  "Detect Residual Magic additionally reveals whether the casting imprint matches a wand signature you've previously studied.",
              },
              {
                name: "Efficient Channeling",
                effect:
                  "Gain one additional 2nd-level spell slot. This slot refreshes on a long rest.",
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
              "Choose one spell you know or have prepared of 2nd level or lower. You can cast it once per short or long rest without expending a spell slot. You may change this choice when you gain a level in this class.",
          },
          {
            name: "Magical Strain",
            description:
              "If you cast three or more leveled spells during a single combat, make a DC 10 Constitution saving throw at the end of your turn. On a failure, until you finish a short or long rest, you have disadvantage on concentration checks you make to maintain spells you cast. This effect ends early if you finish a short rest.",
          },
        ],
      },
    ],
    design_notes: {
      concept:
        "Shared magical base for all player characters before branching into specialized subclasses.",
      tone: "Wizard World Noir — investigative, morally gray, psychologically intense.",
      balance_notes: [
        "Half-caster progression keeps the base from overshadowing specialized subclasses at higher tiers while preserving meaningful spellcasting.",
        "Ritual casting and Focus Recovery add investigative and pacing tools without slot bloat.",
        "Countercurse scaling by proficiency bonus keeps it relevant across tiers but bounded.",
        "Magical Strain remains a flavorful limiter without crippling exhaustion mechanics.",
      ],
    },
  },

  
  healer_alchemist,
  spellwright,
  naturalist,
  auror,
  wordsmith,
  hitwizard,
  field_hunter,
  muggle_liaison,
  arcanist,
  obscurial,
  spellbrawler,
  professor,
};

export const getCustomClasses = () => {
  return Object.values(customClassesData).map((classData) => ({
    index: classData.id,
    name: classData.name,
    type: classData.type,
    isCustom: true,
  }));
};

export const getCustomClassDetails = (classId) => {
  return customClassesData[classId] || null;
};

export const isCustomClass = (classId) => {
  return classId in customClassesData;
};

export default customClassesData;
