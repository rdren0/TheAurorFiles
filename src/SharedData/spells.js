import { SUBJECT_TO_MODIFIER_MAP } from "./data";

export const cardTitles = {
  // ===== INVESTIGATOR TOOLKIT CATEGORIES =====
  "Combat Operations-Cantrips": true, // First card expanded by default
  "Combat Operations-1st Level": false,
  "Combat Operations-2nd Level": false,
  "Combat Operations-3rd Level": false,
  "Combat Operations-4th Level": false,
  "Combat Operations-5th Level": false,
  "Combat Operations-6th Level": false,
  "Combat Operations-7th Level": false,
  "Combat Operations-8th Level": false,
  "Combat Operations-9th Level": false,
  "Crime Scene Analysis-Cantrips": false,
  "Crime Scene Analysis-1st Level": false,
  "Crime Scene Analysis-2nd Level": false,
  "Crime Scene Analysis-3rd Level": false,
  "Crime Scene Analysis-4th Level": false,
  "Crime Scene Analysis-5th Level": false,
  "Crime Scene Analysis-6th Level": false,
  "Crime Scene Analysis-7th Level": false,
  "Crime Scene Analysis-8th Level": false,
  "Crime Scene Analysis-9th Level": false,
  "Surveillance & Tracking-Cantrips": false,
  "Surveillance & Tracking-1st Level": false,
  "Surveillance & Tracking-2nd Level": false,
  "Surveillance & Tracking-3rd Level": false,
  "Surveillance & Tracking-4th Level": false,
  "Surveillance & Tracking-5th Level": false,
  "Surveillance & Tracking-6th Level": false,
  "Surveillance & Tracking-7th Level": false,
  "Surveillance & Tracking-8th Level": false,
  "Surveillance & Tracking-9th Level": false,
  "Interrogation Techniques-Cantrips": false,
  "Interrogation Techniques-1st Level": false,
  "Interrogation Techniques-2nd Level": false,
  "Interrogation Techniques-3rd Level": false,
  "Interrogation Techniques-4th Level": false,
  "Interrogation Techniques-5th Level": false,
  "Interrogation Techniques-6th Level": false,
  "Interrogation Techniques-7th Level": false,
  "Interrogation Techniques-8th Level": false,
  "Interrogation Techniques-9th Level": false,
  "Field Medicine-Cantrips": false,
  "Field Medicine-1st Level": false,
  "Field Medicine-2nd Level": false,
  "Field Medicine-3rd Level": false,
  "Field Medicine-4th Level": false,
  "Field Medicine-5th Level": false,
  "Field Medicine-6th Level": false,
  "Field Medicine-7th Level": false,
  "Field Medicine-8th Level": false,
  "Field Medicine-9th Level": false,
  "Specialized Arsenal-Cantrips": false,
  "Specialized Arsenal-1st Level": false,
  "Specialized Arsenal-2nd Level": false,
  "Specialized Arsenal-3rd Level": false,
  "Specialized Arsenal-4th Level": false,
  "Specialized Arsenal-5th Level": false,
  "Specialized Arsenal-6th Level": false,
  "Specialized Arsenal-7th Level": false,
  "Specialized Arsenal-8th Level": false,
  "Specialized Arsenal-9th Level": false,
  "Unforgivable Curses-Cantrips": false,
  "Unforgivable Curses-1st Level": false,
  "Unforgivable Curses-2nd Level": false,
  "Unforgivable Curses-3rd Level": false,
  "Unforgivable Curses-4th Level": false,
  "Unforgivable Curses-5th Level": false,
  "Unforgivable Curses-6th Level": false,
  "Unforgivable Curses-7th Level": false,
  "Unforgivable Curses-8th Level": false,
  "Unforgivable Curses-9th Level": false,

  // ===== LEGACY CATEGORIES =====
  "Charms-Cantrips": false,
  "Charms-1st Level": false,
  "Charms-3rd Level": false,
  "Charms-4th Level": false,
  "Charms-5th Level": false,
  "Charms-6th Level": false,
  "Charms-9th Level": false,
  "Jinxes, Hexes & Curses-Cantrips": false,
  "Jinxes, Hexes & Curses-1st Level": false,
  "Jinxes, Hexes & Curses-2nd Level": false,
  "Jinxes, Hexes & Curses-3rd Level": false,
  "Jinxes, Hexes & Curses-4th Level": false,
  "Jinxes, Hexes & Curses-5th Level": false,
  "Jinxes, Hexes & Curses-7th Level": false,
  "Jinxes, Hexes & Curses-8th Level": false,
  "Transfigurations-Cantrips": false,
  "Transfigurations-1st Level": false,
  "Transfigurations-2nd Level": false,
  "Transfigurations-3rd Level": false,
  "Transfigurations-4th Level": false,
  "Transfigurations-5th Level": false,
  "Transfigurations-6th Level": false,
  "Elemental-Cantrips": false,
  "Elemental-1st Level": false,
  "Elemental-3rd Level": false,
  "Elemental-4th Level": false,
  "Elemental-8th Level": false,
  "Elemental-9th Level": false,
  "Valiant-Cantrips": false,
  "Valiant-1st Level": false,
  "Valiant-2nd Level": false,
  "Valiant-3rd Level": false,
  "Valiant-4th Level": false,
  "Valiant-5th Level": false,
  "Divinations-Cantrips": false,
  "Divinations-1st Level": false,
  "Divinations-2nd Level": false,
  "Divinations-3rd Level": false,
  "Divinations-4th Level": false,
  "Divinations-5th Level": false,
  "Divinations-6th Level": false,
  "Divinations-9th Level": false,
  "Healing-Cantrips": false,
  "Healing-1st Level": false,
  "Healing-2nd Level": false,
  "Healing-3rd Level": false,
  "Healing-4th Level": false,
  "Healing-5th Level": false,
  "Healing-6th Level": false,
  "Healing-7th Level": false,
  "Magizoo-Cantrips": false,
  "Magizoo-1st Level": false,
  "Magizoo-2nd Level": false,
  "Magizoo-3rd Level": false,
  "Magizoo-4th Level": false,
  "Magizoo-5th Level": false,
  "Magizoo-6th Level": false,
  "Magizoo-7th Level": false,
  "Magizoo-8th Level": false,
  "Grim-Cantrips": false,
  "Grim-1st Level": false,
  "Grim-2nd Level": false,
  "Grim-3rd Level": false,
  "Grim-4th Level": false,
  "Grim-6th Level": false,
  "Grim-9th Level": false,
  "Justice-Cantrips": false,
  "Justice-1st Level": false,
  "Justice-2nd Level": false,
  "Justice-4th Level": false,
  "Justice-8th Level": false,
  "Justice-9th Level": false,
  "Gravetouched-Cantrips": false,
  "Gravetouched-1st Level": false,
  "Gravetouched-2nd Level": false,
  "Gravetouched-3rd Level": false,
  "Gravetouched-5th Level": false,
  "Gravetouched-8th Level": false,
};

export const getModifierForCombinedSchool = (schoolString) => {
  const schools = schoolString.toLowerCase().split("/");

  for (const school of schools) {
    const cleanSchool = school.trim();
    if (
      standardSchools.includes(cleanSchool) &&
      SUBJECT_TO_MODIFIER_MAP[cleanSchool]
    ) {
      return SUBJECT_TO_MODIFIER_MAP[cleanSchool];
    }
  }

  return null;
};

// Investigator Toolkit - Core Categories (always visible in spellbook)
export const standardSchools = [
  "combatOperations",
  "crimeSceneAnalysis",
  "surveillanceTracking",
  "interrogationTechniques",
  "fieldMedicine",
  "specializedArsenal",
  "unforgivableCurses", // Separate category for the three Unforgivables
];

// Legacy school names (for backward compatibility)
export const legacySchools = [
  "charms",
  "jhc",
  "transfiguration",
  "healing",
  "divinations",
];

export const spellsData = {
  // ===== INVESTIGATOR TOOLKIT CATEGORIES =====
  "Combat Operations": {
    icon: "Sword",
    color: "#EF4444", // Red - Combat/danger
    description: "Offensive and defensive combat magic for field operations",
    levels: {
      Cantrips: [
        {
          name: "Bombarda",
          class: ["Combat Operations"],
          level: "Cantrip",
          castingTime: "1 action",
          range: "60 feet",
          duration: "Instantaneous",
          year: 3,
          description:
            "The spell blasts whatever it hits, creating a localized concussive explosion upon impact. Make a ranged spell attack against a target within range. On a hit, the target takes 1d10 bludgeoning damage.",
          higherLevels:
            "This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).",
        },
        {
          name: "Cantis",
          class: ["Combat Operations"],
          level: "Cantrip",
          castingTime: "Action",
          range: "60 Feet",
          duration: "1 Round",
          year: 1,
          description:
            "When struck by this spell, a being can't help but belt out a couple of lines from the first song that comes to mind. Make a ranged spell attack against a being within range. On a hit, the target must cast all other spells non-verbally until the end of its next turn. If it tries to cast a spell verbally, it must first succeed on an Intelligence saving throw, or the casting fails and the spell is wasted.",
        },
        {
          name: "Devicto",
          class: ["Combat Operations"],
          level: "Cantrip",
          castingTime: "1 action",
          range: "60 feet",
          duration: "Instantaneous",
          year: 4,
          description:
            "This weak jinx is a classic training spell between duelists, a startling sting on impact. Make a ranged spell attack against a creature within range. On a hit, it takes 1d6 force damage, and it can't take reactions until the start of its next turn.",
          higherLevels:
            "The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
        },
        {
          name: "Furnunculus",
          class: ["Combat Operations"],
          level: "Cantrip",
          castingTime: "Action",
          range: "60 Feet",
          duration: "Instantaneous",
          year: 2,
          checkType: "spellAttack",
          attackType: "ranged",
          damage: {
            dice: "1d4",
            type: "psychic",
          },
          description:
            "Outbreaks of this jinx is a common occurrence when students get in fights, resulting in grotesque pimples covering the victims face. Make a ranged spell attack against a being within range. On a hit, it takes 1d4 psychic damage and has disadvantage on the next attack roll it makes before the end of its next turn. Additionally, it has disadvantage on the next Charisma ability check it makes.",
          higherLevels:
            "This spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4).",
        },
        {
          name: "Genu Recurvatum",
          class: ["Combat Operations"],
          level: "Cantrip",
          castingTime: "Action",
          range: "60 Feet",
          duration: "1 Minute",
          year: 1,
          description:
            "This hex flips around a beast or being's knees, forcing them to take awkward, uncoordinated steps. Make a ranged spell attack against a creature within range. On a hit, the target's speed is halved for the duration of the spell.",
        },
        {
          name: "Infirma Cerebra",
          class: ["Combat Operations"],
          level: "Cantrip",
          castingTime: "1 Action",
          range: "60 Feet",
          duration: "1 Round",
          year: 2,
          description:
            "This jinxes a target's mind, giving them a brief moment of disorientation. Make a ranged spell attack against a creature within range. On a hit, the target takes 1d6 psychic damage, and the first time it makes a saving throw before the end of your next turn, it must roll a d4 and subtract the number rolled from the save.",
          higherLevels:
            "This spell's damage increases by 1d6 when you reach certain levels: 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
        },
        {
          name: "Locomotor Wibbly",
          class: ["Combat Operations"],
          level: "Cantrip",
          castingTime: "Action",
          range: "60 Feet",
          duration: "Instantaneous",
          year: 1,
          description:
            "This will make a person's legs so unsteady and weak that they aren't able to keep their balance. Make a ranged spell attack against a being within range. On a hit, the target is knocked prone.",
        },
        {
          name: "Carpe Retractum",
          class: ["Combat Operations"],
          level: "Cantrip",
          castingTime: "Action",
          range: "60 Feet",
          duration: "1 Round",
          year: 2,
          description:
            "A bond of light shoots out from the caster and attaches to anything you can see within range, and then retracts, pulling caster and target each 10 feet closer. If the caster or target doesn't move or would easily resist the force of the other being pulled, the other moves 20 feet. If the target is an unwilling creature that is able to be moved, it must make a Strength saving throw to resist being moved. The bond of light keeps the caster and target attached for the duration.",
          higherLevels:
            "When you cast this spell using a spell slot of 1st level or higher, the range and pulling effect both increase by 5 feet for each slot level above 0.",
        },
        {
          name: "Spongify",
          class: ["Combat Operations"],
          level: "Cantrip",
          castingTime:
            "1 action or reaction, which you take when a collision occurs within 30 feet",
          range: "30 Feet",
          duration: "1 Minute",
          year: 1,
          description:
            "This spell makes an object become soft and bouncy, like a sponge or mattress. Any damage from falling on or colliding with this object is nullified. This spell can be cast as a reaction to a collision affecting a creature you can see within range or between two objects within range.",
        },
        {
          name: "Periculum/Verdimillious",
          class: ["Combat Operations"],
          level: "Cantrip",
          castingTime: "Action",
          range: "Self",
          duration: "Instantaneous",
          year: 1,
          description:
            "This spell sends red (periculum) or green (verdimillious) sparks shooting from the casters wand for signaling purposes. It may also appear as a flare, traveling a desired distance before exploding in light and hovering in the air.",
        },
        {
          name: "Magno",
          class: ["Combat Operations"],
          level: "Cantrip",
          castingTime: "Action",
          range: "Self (5 Foot Radius)",
          duration: "1 Round",
          year: 1,
          restriction: true,
          description:
            "You brandish your Transfigured Armament in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects and then becomes sheathed in booming magic until the start of your next turn. If the target willingly moves 5 feet or more before then, the target takes 1d8 thunder damage, and the spell ends.",
          higherLevels:
            "At 5th level, the melee attack deals an extra 1d8 thunder damage to the target on a hit, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level (2d8 and 3d8) and again at 17th level (3d8 and 4d8).",
        },
      ],
      "1st Level": [
        {
          name: "Colloshoo",
          class: ["Combat Operations"],
          level: "1st Level",
          castingTime: "Action",
          range: "90 Feet",
          duration: "Concentration, 1 Minute",
          year: 1,
          description:
            "This creative hex sticks a being's shoes to the ground, rooting them in place. Choose a being you can see within range that is wearing shoes to make a Dexterity saving throw. On a failed save, the target is restrained for the duration. If the saving throw fails by 5 or more, the target is knocked prone as well. The target can use its action to take off its shoes, or make a Strength check against your spell save DC. On a success, it pulls its shoes free.",
        },
        {
          name: "Densaugeo",
          class: ["Combat Operations"],
          level: "1st Level",
          castingTime: "1 Action",
          range: "60 Feet",
          duration: "Instantaneous",
          year: 2,
          description:
            "A target's front two teeth grow abnormally long, protruding downwards past its chin. Make a ranged spell attack against a creature within range. On a hit, it takes 2d8 psychic damage and has disadvantage on the next attack roll it makes before the end of its next turn.",
          higherLevels:
            "When you cast this spell using a spell slot of 2nd level or higher, the damage is increased by 1d8 for each slot level above 1st.",
        },
        {
          name: "Digitus Wibbly",
          class: ["Combat Operations"],
          level: "1st Level",
          castingTime: "Action",
          range: "60 Feet",
          duration: "1 Minute",
          year: 1,
          description:
            "This jinx makes fingers numb and relaxed. Make a ranged spell attack against a being within range. On a hit, the target has disadvantage on attack rolls for the duration. At the end of each of its turns, the target can make a Dexterity saving throw. On a success, the spell ends.",
        },
        {
          name: "Flipendo",
          class: ["Combat Operations"],
          level: "1st Level",
          castingTime: "1 action",
          range: "60 feet",
          duration: "Instantaneous",
          year: 3,
          description:
            "The spell feels like a very heavy blow, sharply throwing a creature from its standing position to the ground. Choose a being you can see within range to make a Strength saving throw. On a failed save, a creature takes 1d10 bludgeoning damage, is knocked back a number of feet equal to five times your spellcasting ability modifier, and is knocked prone. On a successful save, the creature takes half as much damage, is knocked back 5 feet, and isn't knocked prone.",
          higherLevels:
            "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 and the knockback on a failed save increases by 5 feet for each slot level above 1st.",
        },
        {
          name: "Locomotor Mortis",
          class: ["Combat Operations"],
          level: "1st Level",
          castingTime: "1 Action",
          range: "90 Feet",
          duration: "1 Minute",
          year: 2,
          description:
            "A common tool among bullies, this 'curse' binds a creature's legs as if they were tied together with rope. A creature you can see within range must succeed on a Wisdom saving throw or have its speed halved and suffer disadvantage on Dexterity saving throws. Additionally, each time it moves within the duration, it must succeed on a Dexterity saving throw without disadvantage from this spell, or be knocked prone and take 2d4 bludgeoning damage.",
        },
        {
          name: "Mimblewimble",
          class: ["Combat Operations"],
          level: "1st Level",
          castingTime: "Action",
          range: "90 Feet",
          duration: "1 Round",
          year: 1,
          description:
            "If you're hit with this spell, this produces the strange sensation of your tongue being rolled up into the back of your mouth. Choose one being you can see within range. If it tries to cast a spell verbally before the end of its next turn, it must first succeed on a Dexterity saving throw, or the casting fails and the spell is wasted.",
        },
        {
          name: "Petrificus Totalus",
          class: ["Combat Operations"],
          level: "1st Level",
          castingTime: "1 action",
          range: "60 feet",
          duration: "Dedication, up to 1 minute",
          year: 3,
          description:
            "This spell makes a being's arms and legs snap together, and it will fall down, stiff as a board. Make a ranged spell attack against a being within range. On a hit, the target is knocked prone and paralyzed for the duration.",
          higherLevels:
            "When you cast this spell using a spell slot of 3rd level or higher, you can target a beast instead of a being.",
        },
        {
          name: "Arresto Momentum",
          class: ["Combat Operations"],
          level: "1st Level",
          castingTime:
            "1 reaction, which you take when you or a creature within 60 feet of you falls",
          range: "60 Feet",
          duration: "1 minute",
          year: 2,
          description:
            "Choose up to five falling creatures within range. A falling creature's rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature. This spell is particularly useful for preventing fall damage from great heights or during aerial combat situations.",
          higherLevels:
            "When you cast this spell using a spell slot of 2nd level or higher, you can target two additional falling creatures for each slot level above 1st, and the duration increases by 1 minute for each slot level above 1st.",
        },
        {
          name: "Protego",
          class: ["Combat Operations"],
          level: "1st Level",
          castingTime:
            "1 action or reaction, which you take when you are hit by an attack",
          range: "Self",
          duration: "Dedication, up to 10 minutes",
          year: 3,
          description:
            "An invisible barrier of magical force appears in front of you and protects you. For the duration, you have a +5 bonus to AC, including against the triggering attack. If you are targeted by a spell that requires an attack roll and the spell's level is equal to or lower than half your proficiency bonus, the spell has no effect on you. You can use a bonus action to change which direction the shield is facing. If you are attacked from either of your sides or from behind while casting this spell, you must use your reaction to redirect the shield to point towards the threat. Otherwise, this spell doesn't protect you.",
        },
        {
          name: "Riddikulus",
          class: ["Combat Operations"],
          level: "1st Level",
          castingTime: "Action",
          range: "30 Feet",
          duration: "Instantaneous",
          year: 3,
          description:
            "This spell has a very specific application: forcing a boggart to transform into a comedic version of its current form. Only a boggart may be targeted by this spell.",
        },
        {
          name: "Clario",
          class: ["Combat Operations"],
          level: "1st Level",
          castingTime: "Bonus Action",
          range: "Self",
          duration: "1 Minute",
          year: 1,
          restriction: true,
          description:
            "Your Transfigured Armament shines with radiance. Until the spell ends, your weapon attacks deal an extra 1d4 radiant damage on a hit.",
        },
        {
          name: "Ignis Ictus",
          class: ["Combat Operations"],
          level: "1st Level",
          castingTime: "Bonus Action",
          range: "Self",
          duration: "Dedication, up to 1 minute",
          year: 2,
          restriction: true,
          description: "Fire strike spell",
        },
        {
          name: "Irus Ictus",
          class: ["Combat Operations"],
          level: "1st Level",
          castingTime: "Bonus Action",
          range: "Self",
          duration: "Concentration, up to 1 minute",
          year: 2,
          restriction: true,
          description:
            "The next time you hit with your Transfigured Armament during this spell's duration, your attack deals an extra 1d6 psychic damage. Additionally, if the target is a creature, it must make a Wisdom saving throw or be frightened of you until the spell ends. As an action, the creature can make a Wisdom check against your spell save DC to steel its resolve and end this spell.",
        },
        {
          name: "Pererro",
          class: ["Combat Operations"],
          level: "1st Level",
          castingTime: "Bonus Action",
          range: "Touch",
          duration: "Dedication, up to 1 hour",
          year: 1,
          restriction: true,
          description:
            "You touch your Transfigured Armament. Until the spell ends, that weapon becomes a magic weapon with a +1 bonus to attack rolls and damage rolls.",
          higherLevels:
            "When you cast this spell using a spell slot of 4th level or higher, the bonus increases to +2. When you use a spell slot of 6th level or higher, the bonus increases to +3.",
        },
        {
          name: "Tonitrus Ictus",
          class: ["Combat Operations"],
          level: "1st Level",
          castingTime: "Bonus Action",
          range: "Self",
          duration: "Concentration, up to 1 minute",
          year: 3,
          restriction: true,
          description:
            "The first time you hit with your Transfigured Armament during this spell's duration, your weapon rings with thunder that is audible within 300 feet of you, and the attack deals an extra 2d6 thunder damage to the target. Additionally, if the target is a creature, it must succeed on a Strength saving throw or be pushed 10 feet away from you and knocked prone.",
        },
      ],
      "2nd Level": [
        {
          name: "Arania Exumai",
          class: ["Combat Operations"],
          level: "2nd Level",
          castingTime: "1 action",
          range: "Self (15 foot cube)",
          duration: "Instantaneous",
          year: 3,
          description:
            "This spell blasts away spiders, Acromantulas, or arachnids with a cone of bright scorching light. Each spider-like creature in a 30-foot cone must make a Constitution saving throw. On a failed save, a creature takes 4d6 radiant damage and is knocked back 5 feet plus a number of feet equal to five times your spellcasting ability modifier. On a successful save, it takes half as much damage and isn't knocked back. Any non-arachnid creatures within the area of the spell are unaffected.",
          higherLevels:
            "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 and the shove distance increases by 10 feet for each slot level above 2nd.",
        },
        {
          name: "Oppugno",
          class: ["Combat Operations"],
          level: "2nd Level",
          castingTime: "1 action",
          range: "30 feet",
          duration: "Concentration, up to 1 minute",
          year: 4,
          description:
            "You cast this jinx on a group of tiny objects or a group of birds within range. The targets start swarming in the air in a 5-foot-diameter sphere in an unoccupied space of your choice. Any creature that starts its turn within 5 feet of the swarm or enters the swarm's area for the first time on a turn must make a Dexterity saving throw. The creature takes 4d4 slashing damage on a failed save, or half as much damage on a successful one. As a bonus action, you can move the sphere up to 30 feet. While the swarm shares the same space with a creature, that creature has disadvantage on attack rolls. The swarm's space counts as difficult terrain.",
          higherLevels:
            "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d4 for each slot level above 2nd.",
        },
        {
          name: "Relashio",
          class: ["Combat Operations"],
          level: "2nd Level",
          castingTime: "1 Action",
          range: "60 Feet",
          duration: "Instantaneous",
          year: 2,
          description:
            "This spell forces both living and inanimate targets to release their grip. Choose an object or creature that you can see within range. The object can be a set of manacles, a padlock, chains, or another object that is wrapped around or restraining something. If the target is a creature, it must make a Wisdom saving throw. On a failed save, it must let go of whatever it is restraining. This effect ends any grappled or restrained condition that is being imposed by the target. An object that is secured by a mundane or magical lock or that is stuck becomes unlocked, unstuck, or unbarred. When you cast the spell on an object, a loud rattling or clanking, audible from as far away as 100 feet, emanates from the target object. A creature is not forced to drop any object that it is holding. The creature must be restraining the object in some way, like holding onto an object that has had accio cast upon it.",
        },
        {
          name: "Slugulus Eructo",
          class: ["Combat Operations"],
          level: "2nd Level",
          castingTime: "1 action",
          range: "60 feet",
          duration: "1 round",
          year: 5,
          description:
            "This particularly nasty hex causes one to spit up slugs for the duration. Make a ranged spell attack against a creature within range. On a hit, it takes 3d8 psychic damage and gains one level of exhaustion. This spell cannot cause it to reach more than 5 levels of exhaustion. If it tries to cast a spell verbally before the end of its next turn, it must first succeed on a Constitution saving throw, or the casting fails and the spell is wasted.",
          higherLevels:
            "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.",
        },
        {
          name: "Tarantallegra",
          class: ["Combat Operations"],
          level: "2nd Level",
          castingTime: "1 Action",
          range: "60 Feet",
          duration: "Concentration, up to 1 minute",
          year: 2,
          description:
            "This entertaining jinx forces its victim to do a comic dance in place: shuffling, tapping its feet, and capering. Make a ranged spell attack against a target within range. On a hit, a dancing creature must use all its movement to dance without leaving its space until the end of your next turn. While the creature is affected by this spell, it has disadvantage on Dexterity saving throws and attack rolls and other creatures have advantage on attack rolls against it. As an action, a dancing creature can make a Wisdom saving throw to regain control of itself. On a successful save, the spell ends.",
        },
        {
          name: "Ventus",
          class: ["Combat Operations"],
          level: "2nd Level",
          castingTime: "1 action",
          range: "60 feet",
          duration: "Concentration, up to 1 minute",
          year: 3,
          description:
            "A strong gust of air flows out from the tip of your wand, and creates one of the following effects at a point you can see within range: One Medium or smaller creature that you choose must succeed on a Strength saving throw or be instantaneously pushed up to 5 feet away from you and be rendered unable to move closer to you for the duration. You create a small blast of air capable of moving one object that is neither held nor carried and that weighs no more than 5 pounds. The object is pushed up to 10 feet away from you per round, for the duration of the spell. It isn't pushed with enough force to cause damage. You create a harmless sensory effect using air, such as causing leaves to rustle, wind to slam shutters shut, or your clothing to ripple in a breeze. If desired, the air can be hot and function like a blow dryer.",
          higherLevels:
            "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd. The creatures must be within 30 feet of each other when you target them.",
        },
        {
          name: "Expelliarmus",
          class: ["Combat Operations"],
          level: "2nd Level",
          castingTime: "Action",
          range: "60 Feet",
          duration: "Instantaneous",
          year: 3,
          checkType: "spellAttack",
          attackType: "ranged",
          description:
            "Famous for being the spell that finally defeated Voldemort in the Second Wizarding War, this spell can harmlessly end duels by disarming a wizard of his wand. Make a ranged spell attack against a being within range. On a hit, you disarm the target, forcing it to drop one item of your choice that it's holding. The object lands 10 feet away from it in a random direction.",
          higherLevels:
            "When you cast this spell using a spell slot of 3rd level or higher, you can choose the direction the object travels and the object's distance increases by 10 feet for each slot level above 2nd.",
        },
        {
          name: "Protego Maxima",
          class: ["Combat Operations"],
          level: "2nd Level",
          castingTime:
            "1 action or reaction, which you take when you are hit by an attack",
          range: "Self",
          duration: "Dedication, up to 10 minutes",
          year: 4,
          description:
            "You cast a fully encompassing protego around yourself, sacrificing durability for coverage. For the duration, you have a +3 bonus to AC, including against the triggering attack. If you are subjected to an effect that allows you to make a Strength or Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw and only half damage if you fail.",
        },
        {
          name: "Stupefy",
          class: ["Combat Operations"],
          level: "2nd Level",
          castingTime: "Action",
          range: "60 Feet",
          duration: "10 Minutes",
          year: 3,
          checkType: "spellAttack",
          attackType: "ranged",
          description:
            "This charm is the most common dueling spell in the wizarding world, harmlessly ending a duel between two wizards. Make a ranged spell attack against a being within range. On a hit, the target falls unconscious for the duration, or until they are revived with rennervate.",
          higherLevels:
            "If you cast this spell using a spell slot of 3rd level or higher, the duration increases to 1 hour (3rd level) or 8 hours (4th level). Alternatively, when you cast this spell using a spell slot of 4th level or higher, you can target a beast instead of a being, for a duration of 10 minutes (4th level), 1 hour (5th level) or 8 hours (6th level).",
        },
        {
          name: "Fumos",
          class: ["Combat Operations"],
          level: "2nd Level",
          castingTime: "1 action",
          range: "Self (15 foot cube)",
          duration: "Concentration, up to 1 minute",
          year: 3,
          tags: ["C"],
          description:
            "A thick spray of smoke billows out from your wand, filling a 15-foot cube originating from you. This smoke spreads around corners. It lasts for the duration or until strong wind disperses the smoke, ending the spell. Its area is heavily obscured. When a creature enters the spell's area for the first time on a turn or starts its turn there, that creature must make a Constitution saving throw. The creature takes 3d6 poison damage on a failed save, or half as much damage on a successful one. Constructs and undead are immune to this damage.",
          higherLevels:
            "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 2d6 and the area increases by 5 feet for each slot level above 2nd.",
        },
        {
          name: "Silencio",
          level: "2nd Level",
          class: ["Combat Operations"],
          castingTime: "Action",
          range: "90 Feet",
          duration: "1 Minute",
          year: 4,
          tags: ["R"],
          description:
            "This charm is extremely effective against wizards unpracticed in non-verbal magic. Choose one target that you can see within range. If it's a creature, it must make a Wisdom saving throw. If it fails or if it's an object, all sound created by the target is made completely silent. Casting a spell that includes a verbal component is impossible while under the effect of this spell.",
        },
        {
          name: "Notam Ictus",
          class: ["Combat Operations"],
          level: "2nd Level",
          castingTime: "Bonus Action",
          range: "Self",
          duration: "Concentration, up to 1 minute",
          year: 4,
          restriction: true,
          description: "Mark strike spell",
        },
      ],
      "3rd Level": [
        {
          name: "Confringo",
          class: ["Combat Operations"],
          level: "3rd Level",
          castingTime: "1 action",
          range: "90 feet",
          duration: "Instantaneous",
          year: 5,
          checkType: "savingThrow",
          savingThrow: {
            ability: "dexterity",
            effect: "halfDamage",
          },
          damage: {
            dice: "8d6",
            type: "fire",
          },
          description:
            "A tiny ball of fire flashes from your wand to a point you choose within range and then explodes into a fiery blast on impact. Each creature in a 10-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one. The fire spreads around corners. It ignites flammable objects in the area that aren't worn or carried.",
          higherLevels:
            "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 and the radius increases by 5 feet for each slot level above 3rd.",
        },
        {
          name: "Conjunctivia",
          class: ["Combat Operations"],
          level: "3rd Level",
          castingTime: "1 action",
          range: "60 feet",
          duration: "1 minute",
          year: 5,
          description:
            "When struck by this curse, a creature's eyes to become irritated and painful, swelling shut. Make a ranged spell attack against a creature within range. On a hit, the target takes 4d8 necrotic damage and is blinded for the duration. At the end of each of its turns, the target can make a Constitution saving throw. On a success, the spell ends. Creatures that are normally magically resistant are vulnerable to this spell.",
          higherLevels:
            "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd.",
        },
        {
          name: "Expulso",
          class: ["Combat Operations"],
          level: "3rd Level",
          castingTime: "1 action",
          range: "90 feet",
          duration: "Instantaneous",
          year: 3,
          description:
            "The spell shoots out from your wand and a wave of thunderous force sweeps out from a point of your choice within range. Each creature in a 10-foot-radius sphere centered on that point must make a Constitution saving throw. On a failed save, a creature takes 4d8 thunder damage and is pushed 10 feet away from that point. On a successful save, the creature takes half as much damage and isn't pushed. In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from that point by the spell's effect, and the spell emits a thunderous boom audible out to 100 feet.",
          higherLevels:
            "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd.",
        },
        {
          name: "Impedimenta",
          class: ["Combat Operations"],
          level: "3rd Level",
          castingTime: "1 action",
          range: "60 feet",
          duration: "1 minute",
          year: 6,
          description:
            "A powerful dueling spell, this jinx alters time around one creature you can see within range, severely inhibiting its ability in combat. The target must succeed on a Wisdom saving throw or be affected by this spell for the duration. An affected target's speed is halved, it takes a -2 penalty to AC and Dexterity saving throws, and it can't use reactions. On its turn, it can use either an action or a bonus action, not both. Regardless of the creature's abilities or magic items, it can't make more than one melee or ranged attack during its turn. If the creature attempts to cast a spell with a casting time of 1 action, roll a d20. On an 11 or higher, the spell doesn't take effect until the creature's next turn, and the creature must use its action on that turn to complete the spell. If it can't, the spell is wasted. A creature affected by this spell makes another Wisdom saving throw at the end of its turn. On a successful save, the effect ends for it.",
        },
        {
          name: "Langlock",
          class: ["Combat Operations"],
          level: "3rd Level",
          castingTime:
            "1 action or reaction, which you take when you see a creature within 60 feet of you casting a spell",
          range: "60 feet",
          duration: "1 round",
          year: 4,
          restriction: true,
          description:
            "You attempt to interrupt a being you can see in the process of casting a spell. If the creature is verbally casting a spell of 3rd level or lower, its spell fails and has no effect. If it is verbally casting a spell of 4th level or higher, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a success, the creature's spell fails and has no effect. On a success or if the being was casting the spell non-verbally, the target must cast all other spells non-verbally until the end of its next turn. If it tries to cast a spell verbally, it must first succeed on an Intelligence saving throw, or the casting fails and the spell is wasted.",
          higherLevels:
            "When you cast this spell using a spell slot of 4th level or higher, the interrupted spell has no effect if its level is less than or equal to the level of the spell slot you used.",
        },
        {
          name: "Deprimo",
          level: "3rd Level",
          class: ["Combat Operations"],
          castingTime: "Action",
          range: "120 Feet",
          duration: "Instantaneous",
          year: 5,
          tags: ["R"],
          description:
            "You place immense downward pressure on a target. If the target is a creature, it must make a Strength saving throw. On a failed save, a creature takes 5d8 bludgeoning damage and is knocked prone. On a successful save, the creature takes half as much damage and isn't knocked prone. If the target is a flat surface, this will either create a crater or collapse the surface.",
          higherLevels:
            "When you cast this spell using a spell slot of 4th level or higher, the damage is increased by 1d8 for each slot level above 3rd.",
        },
        {
          name: "Depulso",
          level: "3rd Level",
          castingTime: "Action",
          class: ["Combat Operations"],
          range: "60 Feet",
          duration: "Instantaneous",
          year: 4,
          description:
            "You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 20-foot cube. The image appears at a spot that you can see within range and lasts for the duration. It seems completely real, including sounds, smells, and temperature appropriate to the thing depicted. Physical interaction with the image reveals it to be an illusion, because things can pass through it.",
          higherLevels:
            "When you cast this spell using a spell slot of 4th level or higher, the shove distance is increased by 10 feet for each slot level above 3rd.",
        },
        {
          name: "Expecto Patronum",
          level: "3rd Level",
          class: ["Combat Operations"],
          castingTime: "Action",
          range: "10 Feet",
          duration: "Concentration, up to 1 minute",
          year: 5,
          tags: ["R"],
          description:
            "A Patronus Charm is a special bit of magic that requires a wizard to envision one of their happiest memories while casting the spell. The feeling of happiness must be genuine or strong enough to produce a radiant, ethereal beast, the embodiment of that wizard's positive emotions that serves as their protector. When you cast this spell, you can choose to conjure an incorporeal or corporeal patronus. If you attempt to cast this spell while frightened or within 60 feet of a dementor, you must make an ability check using your spellcasting ability. The DC equals 10 + the number of dementors within 60 feet of you. A roll of 19-20 on the die automatically succeeds. On a success, you cast the spell. On a failure, you can only conjure an incorporeal patronus, but if you fail the check by 5 or more, the spell fails entirely. At the end of your turn, if you are frightened or there are one or more dementors within 60 feet of you while concentrating on this spell, you must repeat the ability check. On a failure, your patronus vanishes and the spell ends. A patronus sheds light in a radius around it. You and friendly creatures can't be frightened while in your patronus's light. A dementor that starts its turn within this light or enters the light for the first time on a turn must succeed on a Wisdom saving throw or become frightened of the patronus until the start of its next turn. Incorporeal Patronus: Your patronus takes the form of a 5-foot burst of glowing mist in an unoccupied space adjacent to you, shedding bright light in its space and dim light in a 5-foot radius. Corporeal Patronus: Your patronus takes the form of a wispy silver animal in an unoccupied space that you can see within range, shedding bright light in a 10-foot radius and dim light for an additional 10 feet. When you cast the spell and as a bonus action on subsequent turns, you can move the patronus up to 60 feet (Medium or smaller), 45 feet (Large), or 30 feet (Huge). At any time during the patronus's movement, you can direct it to charge into a dementor within 5 feet of it. Make a melee spell attack for the patronus. On a hit, the target takes 5d10 radiant damage and the patronus pushes the target up to 5 feet plus a number of feet equal to five times your spellcasting ability modifier.",
          higherLevels:
            "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d10 and the radius of the dim light increases by 5 feet for each slot level above 3rd.",
        },
        {
          name: "Inanus Ictus",
          class: ["Combat Operations"],
          level: "3rd Level",
          castingTime: "Bonus Action",
          range: "Self",
          duration: "Concentration, up to 1 minute",
          year: 5,
          restriction: true,
          description: "Void or empty strike spell",
        },
      ],
      "4th Level": [
        {
          name: "Levicorpus/Liberacorpus",
          class: ["Combat Operations"],
          level: "4th Level",
          castingTime: "1 action",
          range: "30 feet",
          duration: "1 minute",
          year: 4,
          description:
            "One of the few spells that are a non-verbal spell by design, this jinx yanks a being's feet out from under it and dangles it in the air, hanging by its ankle. This spell always is cast with the effects of the Subtle Spell metamagic, at no sorcery point cost and whether you have Subtle Spell or not. A creature you can see within range must make a Wisdom saving throw or take 3d10 psychic damage and be restrained. Additionally, if the target tries to cast a spell, it must first succeed on a Wisdom saving throw, or the casting fails and the spell is wasted.",
        },
        {
          name: "Muco Volatilis",
          class: ["Combat Operations"],
          level: "4th Level",
          castingTime: "1 action",
          range: "60 feet",
          duration: "Concentration, up to 1 minute",
          year: 5,
          description:
            "This terrifying spell transforms the victim's bogies (or boogers) into nasty green bats that crawl out of their nose and attack. Make a ranged spell attack against a being within range. On a hit, the target and any hostile creatures within 5 feet of the target take 6d4 slashing damage. At the start of the target's turn and when any hostile creature starts its turn within 5 feet of the target, it takes 3d4 slashing damage. If any creature has to make a saving throw to maintain concentration because of this spell's damage, the saving throw is made at disadvantage.",
          higherLevels:
            "When you cast this spell using a spell slot of 5th level or higher, the initial damage increases by 2d4 for each slot level above 4th.",
        },
        {
          name: "Reducto",
          class: ["Combat Operations"],
          level: "4th Level",
          castingTime: "1 action",
          range: "30 feet",
          duration: "Instantaneous",
          year: 4,
          description:
            "This spell disintegrates a Large or smaller nonmagical object or transfigured/conjured construct you can see within range. If the target is a Huge or larger object or construct, this spell disintegrates a 10-foot-cube portion of it.",
        },
        {
          name: "Sectumsempra",
          class: ["Combat Operations"],
          level: "4th Level",
          castingTime: "1 action",
          range: "60 feet",
          duration: "Instantaneous",
          year: 6,
          restriction: true,
          description:
            "Make a ranged spell attack against a target within range. On a hit, the target must make a Constitution saving throw. On a failed save, a creature takes 10d6 slashing damage and another 5d6 slashing damage at the end of its next turn. On a successful save, a creature takes half the initial damage and half the damage at the end of its next turn.",
          higherLevels:
            "When you cast this spell using a spell slot of 5th level or higher, the initial damage increases by 2d6 for each slot level above 4th.",
        },
        {
          name: "Titubo Ictus",
          class: ["Combat Operations"],
          level: "4th Level",
          castingTime: "Bonus Action",
          range: "Self",
          duration: "Concentration, up to 1 minute",
          year: 6,
          restriction: true,
          description: "Staggering strike spell",
        },
      ],
      "5th Level": [
        {
          name: "Nullum Effugium",
          class: ["Combat Operations"],
          level: "5th Level",
          castingTime: "10 minutes",
          range: "Self (60-foot-radius sphere)",
          duration: "8 hours",
          year: 7,
          restriction: true,
          description:
            "Commonly used by the Department of Magical Law enforcement, this wards an area against apparition or disapparition. No one may arrive in the warded area via apparition, nor may any creatures within the warded area cast the spell. Any attempt to do so results in the typical apparition effect, except the creature stays exactly where they are.",
          higherLevels:
            "When you cast this spell using a spell slot of 6th level or higher, the radius of the sphere increases by 60 feet for each slot level above 5th.",
        },
        {
          name: "Omnifracto",
          class: ["Combat Operations"],
          level: "5th Level",
          castingTime: "1 action",
          range: "90 feet",
          duration: "Instantaneous",
          year: 7,
          restriction: true,
          description:
            "A piercing beam of light shoots out from the tip of your wand, shattering any defensive magic it passes through. Choose a target within range. Protego totalum, repello inimicum, and all defensive spells that are improving that creature's AC or granting it temporary hit points are dispelled.",
        },
        {
          name: "Clario Maxima",
          class: ["Combat Operations"],
          level: "5th Level",
          castingTime: "Bonus Action",
          range: "Touch",
          duration: "Dedication, up to 1 hour",
          year: 7,
          restriction: true,
          description:
            "You imbue a weapon you touch with power. Until the spell ends, the weapon emits bright light in a 30-foot radius and dim light for an additional 30 feet. In addition, weapon attacks made with it deal an extra 2d8 radiant damage on a hit. If the weapon isn't already a magic weapon, it becomes one for the duration. As a bonus action on your turn, you can dismiss this spell and cause the weapon to emit a burst of radiance. Each creature of your choice that you can see within 30 feet of the weapon must make a Constitution saving throw. On a failed save, a creature takes 4d8 radiant damage, and it is blinded for 1 minute. On a successful save, a creature takes half as much damage and isn't blinded. At the end of each of its turns, a blinded creature can make a Constitution saving throw, ending the effect on itself on a success.",
        },
      ],
      "6th Level": [],
      "7th Level": [
        {
          name: "Azreth",
          class: ["Combat Operations"],
          level: "7th Level",
          castingTime: "1 action",
          range: "60 feet",
          duration: "Instantaneous",
          year: null,
          restriction: true,
          description:
            "Fiendfyre - A cursed fire that takes the shape of fantastic beasts and is extremely difficult to control. The fire spreads rapidly and can destroy almost anything in its path, including Horcruxes. Only the most skilled dark wizards dare attempt this spell.",
        },
      ],
      "8th Level": [],
      "9th Level": [],
    },
  },
  "Crime Scene Analysis": {
    icon: "Search",
    color: "#3B82F6", // Blue - Investigation/intelligence
    description: "Investigation, detection, and evidence collection magic",
    levels: {
      Cantrips: [
        {
          name: "Accio",
          class: ["Crime Scene Analysis"],
          level: "Cantrip",
          castingTime: "Action",
          range: "30 Feet",
          duration: "Instantaneous",
          year: 2,
          checkType: "none",
          description:
            "A target object is pulled directly to the caster as if carried by an invisible hand. The object is selected by pointing at it with a wand or by naming it, Accio broom. An object heavier than 20 pounds may not be summoned.",
          higherLevels:
            "When you cast this spell using a spell slot of 1st level or higher, you may select or stack one of the following effects for each slot level above 0: Increase spell range by 100 feet, Increase weight limit by 20 pounds, Increase the number of targetable objects by 5.",
        },
        {
          name: "Alohomora",
          class: ["Crime Scene Analysis"],
          level: "Cantrip",
          castingTime: "Action",
          range: "60 Feet",
          duration: "Instantaneous",
          year: 1,
          description:
            "Choose a door or window that you can see within range, that uses mundane or magical means to prevent access. A target that is held shut by a mundane lock or that is stuck or barred becomes unlocked, unstuck, or unbarred. If the object has multiple locks, only one of them is unlocked. If you choose a target that is held shut with Colloportus, that spell is removed. When you cast the spell, the mechanism noisily turns and unlocks. This noise emanates from the target object and is audible from as far away as 100 feet.",
        },
        {
          name: "Cistem Aperio",
          class: ["Crime Scene Analysis"],
          level: "Cantrip",
          castingTime: "Action",
          range: "60 Feet",
          duration: "Instantaneous",
          year: 1,
          description:
            "Choose a box, chest, or another container that you can see within range that uses mundane or magical means to prevent access. A target that is held shut by a mundane lock or that is stuck or chained becomes unlocked, unstuck, or unchained. If the object has multiple locks, only one of them is unlocked. If you choose a target that is held shut with Colloportus, that spell is dispelled. When you cast the spell, the mechanism noisily turns and unlocks. This noise emanates from the target object and is audible from as far away as 100 feet.",
        },
        {
          name: "Colloportus",
          class: ["Crime Scene Analysis"],
          level: "Cantrip",
          castingTime: "Action",
          range: "Touch",
          duration: "Until Dispelled",
          year: 1,
          description:
            "You touch a closed door, window, gate, chest, or other entryway, and it becomes locked for the duration. It is impassable until it is broken or the spell is dispelled or suppressed. While affected by this spell, the object is more difficult to break or force open; the DC to break it or pick any locks on it increases by 10.",
        },
        {
          name: "Colovaria",
          class: ["Crime Scene Analysis"],
          level: "Cantrip",
          castingTime: "Action",
          range: "30 Feet",
          duration: "1 Hour",
          year: 1,
          description:
            "You change the color of any target within range that lasts for the duration, to any desired complexity. The color may only be reverted by dispelling the charm. Physical interaction with the object reveals that the object has retained its original texture and material, but its color has truly changed.",
        },
        {
          name: "Defodio",
          class: ["Crime Scene Analysis"],
          level: "Cantrip",
          castingTime: "Action",
          range: "30 Feet (5 Foot Cube)",
          duration: "Instantaneous",
          year: 2,
          description:
            "You choose a portion of dirt or stone that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways: If you target an area of stone or earth, you can instantaneously excavate it, move it along the ground, and deposit it up to 5 feet away. This movement doesn't have enough force to cause damage. If the dirt or stone you target is on the ground, you cause it to become difficult terrain.",
          higherLevels:
            "When you cast this spell using a spell slot of 1st level or higher, the cube's size and distance the earth can be moved are each increased by 5 feet and the number of active normal/difficult terrain effects increase by 1 for each slot level above 0.",
        },
        {
          name: "Finestra",
          class: ["Crime Scene Analysis"],
          level: "Cantrip",
          castingTime: "1 Action",
          range: "10 Feet",
          duration: "Instantaneous",
          year: 1,
          description:
            "A pane of glass you can see within range turns to powder, discreetly turning it into an open entryway.",
        },
        {
          name: "Flagrate",
          class: ["Crime Scene Analysis"],
          level: "Cantrip",
          castingTime: "Action",
          range: "10 Feet",
          duration: "Instantaneous",
          year: 1,
          description:
            "You trace your wand in the air or over an object, leaving fiery marks in that position. You may write any letters or depict any shapes, as if you were writing with a quill. Although the glowing letters appear to be made of fire, it is just an illusion and it cannot burn anything.",
        },
        {
          name: "Illegibilus",
          class: ["Crime Scene Analysis"],
          level: "Cantrip",
          castingTime: "Action",
          range: "10 Feet",
          duration: "1 Hour",
          year: 1,
          description:
            "For the duration, no one can understand any written language that the spell is cast upon. The pieces of all the letters are separated and scrambled, rendering it impossible to try to decode.",
        },
        {
          name: "Lumos/Nox",
          class: ["Crime Scene Analysis"],
          level: "Cantrip",
          castingTime: "Action",
          range: "Self",
          duration: "Until Dispelled",
          year: 2,
          description:
            "Upon muttering the incantation, the tip of your wand sheds bright light in a narrow 15-foot cone and dim light for an additional 15 feet, much like a flashlight. The light is a bright white with a slight bluish tint. Completely covering the tip of your wand with something opaque blocks the light. The spell ends if you dismiss it with the nox incantation, as a bonus action.",
        },
        {
          name: "Scourgify",
          class: ["Crime Scene Analysis"],
          level: "Cantrip",
          castingTime: "Action",
          range: "10 Feet",
          duration: "Instantaneous",
          year: 2,
          description:
            "An object no larger than 5 cubic feet is flawlessly cleaned.",
        },
        {
          name: "Tergeo",
          class: ["Crime Scene Analysis"],
          level: "Cantrip",
          castingTime: "Action",
          range: "Touch",
          duration: "Concentration, up to 1 minute",
          year: 2,
          description:
            "You choose an specific liquid that you can see within range and that fits within a 5-foot cube. The liquid gathers up into a blob floating at the tip of your wand, and you can direct it to form into simple shapes, animate, or flow into a container.",
        },
        {
          name: "Accio",
          class: ["Crime Scene Analysis"],
          level: "Cantrip",
          castingTime: "Action",
          range: "30 Feet",
          duration: "Instantaneous",
          year: 2,
          checkType: "none",
          description:
            "A target object is pulled directly to the caster as if carried by an invisible hand. The object is selected by pointing at it with a wand or by naming it, Accio broom. An object heavier than 20 pounds may not be summoned.",
          higherLevels:
            "When you cast this spell using a spell slot of 1st level or higher, you may select or stack one of the following effects for each slot level above 0: Increase spell range by 100 feet, Increase weight limit by 20 pounds, Increase the number of targetable objects by 5.",
        },
        {
          name: "Alohomora",
          class: ["Crime Scene Analysis"],
          level: "Cantrip",
          castingTime: "Action",
          range: "60 Feet",
          duration: "Instantaneous",
          year: 1,
          description:
            "Choose a door or window that you can see within range, that uses mundane or magical means to prevent access. A target that is held shut by a mundane lock or that is stuck or barred becomes unlocked, unstuck, or unbarred. If the object has multiple locks, only one of them is unlocked. If you choose a target that is held shut with Colloportus, that spell is removed. When you cast the spell, the mechanism noisily turns and unlocks. This noise emanates from the target object and is audible from as far away as 100 feet.",
        },
        {
          name: "Cistem Aperio",
          class: ["Crime Scene Analysis"],
          level: "Cantrip",
          castingTime: "Action",
          range: "60 Feet",
          duration: "Instantaneous",
          year: 1,
          description:
            "Choose a box, chest, or another container that you can see within range that uses mundane or magical means to prevent access. A target that is held shut by a mundane lock or that is stuck or chained becomes unlocked, unstuck, or unchained. If the object has multiple locks, only one of them is unlocked. If you choose a target that is held shut with Colloportus, that spell is dispelled. When you cast the spell, the mechanism noisily turns and unlocks. This noise emanates from the target object and is audible from as far away as 100 feet.",
        },
        {
          name: "Colloportus",
          class: ["Crime Scene Analysis"],
          level: "Cantrip",
          castingTime: "Action",
          range: "Touch",
          duration: "Until Dispelled",
          year: 1,
          description:
            "You touch a closed door, window, gate, chest, or other entryway, and it becomes locked for the duration. It is impassable until it is broken or the spell is dispelled or suppressed. While affected by this spell, the object is more difficult to break or force open; the DC to break it or pick any locks on it increases by 10.",
        },
        {
          name: "Defodio",
          class: ["Crime Scene Analysis"],
          level: "Cantrip",
          castingTime: "Action",
          range: "30 Feet (5 Foot Cube)",
          duration: "Instantaneous",
          year: 2,
          description:
            "You choose a portion of dirt or stone that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways: If you target an area of stone or earth, you can instantaneously excavate it, move it along the ground, and deposit it up to 5 feet away. This movement doesn't have enough force to cause damage. If the dirt or stone you target is on the ground, you cause it to become difficult terrain.",
          higherLevels:
            "When you cast this spell using a spell slot of 1st level or higher, the cube's size and distance the earth can be moved are each increased by 5 feet and the number of active normal/difficult terrain effects increase by 1 for each slot level above 0.",
        },
        {
          name: "Finestra",
          class: ["Crime Scene Analysis"],
          level: "Cantrip",
          castingTime: "1 Action",
          range: "10 Feet",
          duration: "Instantaneous",
          year: 1,
          description:
            "A pane of glass you can see within range turns to powder, discreetly turning it into an open entryway.",
        },
      ],
      "1st Level": [
        {
          name: "Diffindo",
          class: ["Crime Scene Analysis"],
          level: "1st Level",
          castingTime: "Action",
          range: "30 Feet",
          duration: "Instantaneous",
          year: 2,
          checkType: "savingThrow",
          savingThrow: {
            ability: "dexterity",
            effect: "halfDamage",
          },
          damage: {
            dice: "4d4",
            type: "slashing",
          },
          description:
            "An object is precisely torn or cut, as if a magical blade extended from the tip of your wand. This spell was not designed to be used on creatures and only makes very shallow cuts. Choose a target you can see within range that fits within a 5-foot cube. If the target is a creature, it must make a Dexterity saving throw. It takes 4d4 slashing damage on a failed save or half as much damage on a successful one. This is the counterspell to incarcerous, immediately ending that spell's effects.",
          higherLevels:
            "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature or the cube's size increases by 5 feet for each slot level above 1st.",
        },
        {
          name: "Glacius",
          class: ["Crime Scene Analysis"],
          level: "1st Level",
          castingTime: "Action",
          range: "60 Feet",
          duration: "1 Hour",
          year: 1,
          checkType: "savingThrow",
          savingThrow: {
            ability: "constitution",
            effect: "halfDamage",
          },
          damage: {
            dice: "3d8",
            type: "cold",
          },
          description:
            "You freeze an area of water that you can see within range and that fits within a 5-foot cube. The area becomes difficult terrain for the duration. Each Medium or smaller creature that is covered, submerged or partially submerged in the affected water has its speed halved and must make a Constitution saving throw. On a failed save, a creature takes 3d8 cold damage, or half as much damage on a successful one.",
          higherLevels:
            "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 and the cube's size increases by 5 feet for each slot level above 1st.",
        },
        {
          name: "Locomotor",
          class: ["Crime Scene Analysis"],
          level: "1st Level",
          castingTime: "Action",
          range: "30 Feet",
          duration: "1 Hour",
          year: 2,
          description:
            "One object that isn't being worn or carried of your choice that you can see within range rises 3 feet off the ground, and remains suspended there for the duration. The spell can levitate a target that weighs up to 500 pounds. If more weight than the limit is placed on top of the object, the spell ends, and it falls to the ground. The object is immobile while you are within 20 feet of it. If you move more than 20 feet away from it, the object follows you so that it remains within 20 feet of you.",
        },
        {
          name: "Mobilicorpus",
          class: ["Crime Scene Analysis"],
          level: "1st Level",
          castingTime: "1 action",
          range: "30 feet",
          duration: "1 hour",
          year: 3,
          description:
            "You animate a corpse or unconscious creature to move under your control for the duration.",
        },
        {
          name: "Reducio",
          class: ["Crime Scene Analysis"],
          level: "1st Level",
          castingTime: "1 action",
          range: "30 feet",
          duration: "1 hour",
          year: 3,
          description:
            "You cause an object that isn't being worn or carried and that you can see within range to shrink in size for the duration. The target's size is halved in all dimensions, and its weight is reduced to one-eighth of normal. This reduction decreases its size by one category – from Medium to Small, for example.",
        },
        {
          name: "Vigilatus",
          class: ["Crime Scene Analysis"],
          level: "1st Level",
          castingTime: "1 Minute",
          range: "30 Feet",
          duration: "8 Hours",
          year: 2,
          description:
            "You set a mental alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, a ping in your mind alerts you whenever a Tiny or larger creature touches or enters the warded area, if you are within 1 mile of the warded area. This ping awakens you if you are sleeping. When you cast the spell, you can designate creatures that won't set off the alarm.",
        },
      ],
      "2nd Level": [
        {
          name: "Abscondi",
          class: ["Crime Scene Analysis"],
          level: "2nd Level",
          castingTime: "1 action",
          range: "Self",
          duration: "Concentration, up to 1 hour",
          year: 4,
          tags: ["R"],
          description:
            "A magical aura makes your impact on your surroundings unseen, masking you and your companions from detection. For the duration, each creature you choose within 30 feet of you (including you) has a +10 bonus to Dexterity (Stealth) checks and can't be tracked except by magical means. A creature that receives this bonus leaves behind no tracks or other traces of its passage.",
        },
        {
          name: "Finite Incantatem",
          class: ["Crime Scene Analysis"],
          level: "2nd Level",
          castingTime: "1 action",
          range: "30 feet",
          duration: "instantaneous",
          year: 3,
          description:
            "Choose any creature, object, or magical effect within range. One non-Transfiguration spell of 2nd level or lower on the target ends. If you are aware of at least one spell affecting the target, you can specify that spell in your mind. If you are unaware of what spells are affecting the target, one randomly selected spell ends. For a spell of a higher level on the target, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level.",
          higherLevels:
            "When you cast this spell using a spell slot of 3rd level or higher, you automatically end the effects of a non-Transfiguration spell on the target if the spell's level is equal to or less than the level of the spell slot you used.",
        },
        {
          name: "Geminio",
          class: ["Crime Scene Analysis"],
          level: "2nd Level",
          castingTime: "1 action",
          range: "30 feet",
          duration: "10 days",
          year: 3,
          description:
            "You tap an object that fits within a 1-foot cube with your wand and a perfect duplicate of it pops out from the object. The duplicate is indistinguishable from the object by normal means, but does not share any of its magical qualities or functions. The duplicate has one quarter of the original object's hit points and vanishes at the end of the spell's duration.",
          higherLevels:
            "When you cast this spell using a spell slot of 3rd level or higher, the cube's size increases by 1 foot for each slot level above 2nd.",
        },
        {
          name: "Muffliato",
          class: ["Crime Scene Analysis"],
          level: "2nd Level",
          castingTime: "1 action",
          range: "Self",
          duration: "Concentration, up to 1 hour",
          year: 3,
          restriction: true,
          description:
            "For the duration, each creature you choose within 30 feet of you (including you) are able to converse with each other without anyone or anything else hearing. Instead of the voices, nearby creatures hear a faint buzzing, like white noise. If a creature is within 15 feet of you and sees your mouth move when you speak, it is aware that your voice is being magically masked.",
        },
        {
          name: "Reparo",
          class: ["Crime Scene Analysis"],
          level: "2nd Level",
          castingTime: "1 action",
          range: "30 feet",
          duration: "Instantaneous",
          year: 3,
          description:
            "This spell magically reverses any damage done to any objects or structures within a 5-foot cube, collecting all the pieces or components and reassembling them. Anything previously contained by the broken target, like a spilled liquid, is not placed back inside it. This spell can physically repair a magic item, but the spell can't restore magic to such an object.",
          higherLevels:
            "When you cast this spell using a spell slot of 3rd level or higher, the cube's size increases by 10 feet for each slot level above 2nd.",
        },
      ],
      "3rd Level": [
        {
          name: "Dissonus Ululatus",
          level: "3rd Level",
          class: ["Crime Scene Analysis"],
          castingTime: "10 minutes",
          range: "Self (30-foot-radius hemisphere)",
          duration: "8 hours",
          year: 5,
          description:
            "You set an alarm to emit a piercing shriek when an unauthorized person enters the area. Until the spell ends, an alarm sounds whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures or areas within the hemisphere that won't set off the alarm. The alarm produces an unpleasant screaming sound for as long as the intruding creature is in the area of the spell, audible from as far away as 300 feet.",
        },
        {
          name: "Lumos Maxima",
          class: ["Crime Scene Analysis"],
          level: "3rd Level",
          castingTime: "1 action",
          range: "90 feet",
          duration: "1 hour",
          year: 3,
          description:
            "A 60-foot-radius sphere of light spreads out from a small floating ball of light that hovers in place. The sphere is bright light and sheds dim light for an additional 60 feet. As a bonus action, you can direct the ball of light to a new position within range.",
        },
      ],
      "4th Level": [],
      "5th Level": [],
      "6th Level": [],
      "7th Level": [],
      "8th Level": [],
      "9th Level": [],
    },
  },
  "Surveillance & Tracking": {
    icon: "Eye",
    color: "#8B5CF6", // Purple - Perception/wisdom
    description:
      "Detection, pursuit, and monitoring magic for tracking targets",
    levels: {
      Cantrips: [
        {
          name: "Ignis Lunalis",
          class: ["Surveillance & Tracking"],
          level: "Cantrip",
          castingTime: "Action",
          range: "60 Feet",
          duration: "Instantaneous",
          restriction: true,
          year: 3,
          description:
            "Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw.",
          higherLevels:
            "The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
        },
        {
          name: "Lux",
          class: ["Surveillance & Tracking"],
          level: "Cantrip",
          castingTime: "Action",
          restriction: true,
          range: "Touch",
          duration: "Concentration, up to 1 minute",
          year: 3,
          description:
            "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends.",
        },
        {
          name: "Mumblio",
          class: ["Surveillance & Tracking"],
          level: "Cantrip",
          castingTime: "Action",
          range: "120 Feet",
          duration: "1 Round",
          year: 3,
          restriction: true,
          description:
            "You point your wand toward a being within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear.",
        },
        {
          name: "Point Me",
          class: ["Surveillance & Tracking"],
          level: "Cantrip",
          castingTime: "Action",
          range: "Self",
          duration: "Instantaneous",
          year: 3,
          description:
            "Placing your wand flat in your open palm, this spell picks up the wand and points north, much like a compass. The spell's usefulness is situational, but often grants advantage on Wisdom (Survival) checks to not get lost outdoors.",
        },
        {
          name: "Prior Incantato",
          class: ["Surveillance & Tracking"],
          level: "Cantrip",
          castingTime: "Action",
          range: "Self",
          duration: "Instantaneous",
          year: 3,
          description:
            "Often used as an investigative tool in wizarding crimes, this spell produces a ghostly recreation of the previous spell cast by the currently used wand. If the previously cast spell cannot be represented visually, you learn the incantation that was used. This spell can be cast a total of three consecutive times on a single wand, revealing the three most recently cast spells.",
        },
        {
          name: "Insectum",
          class: ["Surveillance & Tracking"],
          level: "Cantrip",
          castingTime: "Action",
          range: "30 Feet",
          duration: "Instantaneous",
          year: 1,
          restriction: true,
          description:
            "You cause a cloud of mites, fleas, and other parasites to appear momentarily on one creature you can see within range. The target must succeed on a Constitution saving throw, or it takes 1d6 poison damage and moves 5 feet in a random direction if it can move and its speed is at least 5 feet. Roll a d4 for the direction: 1, north; 2, south; 3, east; or 4, west. This movement doesn't provoke opportunity attacks, and if the direction rolled is blocked, the target doesn't move.",
          higherLevels:
            "The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
        },
      ],
      "1st Level": [
        {
          name: "Bestia Vinculum",
          class: ["Surveillance & Tracking"],
          level: "1st Level",
          castingTime: "Action",
          range: "Touch",
          restriction: true,
          duration: "Concentration, up to 10 minutes",
          year: 3,
          description:
            "You establish a telepathic link with one beast you touch that is friendly to you or charmed by you. The spell fails if the beast's Intelligence is 4 or higher. Until the spell ends, the link is active while you and the beast are within line of sight of each other.",
        },
        {
          name: "Formidulosus",
          class: ["Surveillance & Tracking"],
          level: "1st Level",
          castingTime: "Action",
          range: "60 Feet",
          restriction: true,
          duration: "Instantaneous",
          year: 3,
          description:
            "You whisper a discordant melody that only one creature of your choice within range can hear, wracking it with terrible pain. The target must make a Wisdom saving throw. On a failed save, it takes 3d6 psychic damage and must immediately use its reaction, if available, to move as far as its speed allows away from you.",
          higherLevels:
            "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.",
        },
        {
          name: "Linguarium",
          class: ["Surveillance & Tracking"],
          level: "1st Level",
          castingTime: "Action",
          range: "Self",
          duration: "1 Hour",
          year: 3,
          description:
            "For the duration, you understand the literal meaning of any spoken language that you hear. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text.",
        },
        {
          name: "Lux Maxima",
          class: ["Surveillance & Tracking"],
          level: "1st Level",
          castingTime: "Action",
          range: "120 Feet",
          duration: "1 Round",
          restriction: true,
          year: 3,
          description:
            "A flash of light streaks toward a creature of your choice within range. Make a ranged spell attack against the target. On a hit, the target takes 2d6 radiant damage, and the next attack roll made against this target before the end of your next turn has advantage.",
          higherLevels:
            "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.",
        },
        {
          name: "Luxus Manus",
          class: ["Surveillance & Tracking"],
          level: "1st Level",
          castingTime: "1 Minute",
          range: "5 Feet",
          duration: "Concentration, 8 Hours",
          restriction: true,
          year: 4,
          description:
            "You create a Tiny incorporeal hand of shimmering light in an unoccupied space you can see within range. The hand exists for the duration, but it disappears if you apparate or use a portkey. When the hand appears, you name one major landmark, and the hand moves in the direction of the landmark.",
        },
        {
          name: "Martem",
          class: ["Surveillance & Tracking"],
          level: "1st Level",
          castingTime: "1 Minute",
          range: "Touch",
          duration: "8 Hours",
          year: 3,
          restriction: true,
          description:
            "You touch a willing creature. For the duration, the target can add 1d8 to its initiative rolls.",
        },
        {
          name: "Motus Revelio",
          class: ["Surveillance & Tracking"],
          level: "1st Level",
          castingTime: "Action",
          range: "Self",
          duration: "Concentration, 1 Minute",
          year: 3,
          description:
            "You attune your senses to pick up the emotions of others for the duration. When you cast the spell, and as your action on each turn until the spell ends, you can focus your senses on one being you can see within 30 feet of you. You instantly learn the target's prevailing emotion.",
        },
        {
          name: "Specialis Revelio",
          class: ["Surveillance & Tracking"],
          level: "1st Level",
          castingTime: "Action",
          range: "Touch",
          duration: "Instantaneous",
          year: 4,
          description:
            "You tap your wand on an object or area, revealing magical influences. If it is a magic item or some other magic-imbued object, you learn its properties and how to use them, whether it requires attunement to use, and how many charges it has, if any.",
        },
        {
          name: "Venenum Revelio",
          class: ["Surveillance & Tracking"],
          level: "1st Level",
          castingTime: "Action",
          range: "Self",
          duration: "Concentration, 10 Minutes",
          year: 3,
          description:
            "For the duration, you can sense the presence and location of poisons, poisonous creatures, and diseases within 30 feet of you. You also identify the kind of poison, poisonous creature, or disease in each case.",
        },
        {
          name: "Beastia Vinculum",
          level: "1st Level",
          year: 1,
          class: ["Surveillance & Tracking"],
          castingTime: "Action",
          range: "Touch",
          duration: "Concentration, up to 10 minutes",
          restriction: true,
          description:
            "You establish a telepathic link with one beast you touch that is friendly to you or charmed by you. The spell fails if the beast's Intelligence is 4 or higher. Until the spell ends, the link is active while you and the beast are within line of sight of each other. Through the link, the beast can understand your telepathic messages to it, and it can telepathically communicate simple emotions and concepts back to you. While the link is active, the beast gains advantage on attack rolls against any creature within 5 feet of you that you can see.",
        },
        {
          name: "Beastia Amicatum",
          class: ["Surveillance & Tracking"],
          level: "1st Level",
          castingTime: "Action",
          range: "30 Feet",
          duration: "24 Hours",
          year: 2,
          restriction: true,
          description:
            "This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast's Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a Wisdom saving throw or be charmed by you for the spell's duration. If you or one of your companions harms the target, the spell ends.",
          higherLevels:
            "When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional beast for each slot level above 1st.",
        },
      ],
      "2nd Level": [
        {
          name: "Absconditus Revelio",
          class: ["Surveillance & Tracking"],
          level: "2nd Level",
          castingTime: "Action",
          range: "Self",
          duration: "1 Hour",
          year: 4,
          description:
            "For the duration, you see invisible creatures (excluding beings) and objects as if they were visible.",
        },

        {
          name: "Facultatem",
          class: ["Surveillance & Tracking"],
          level: "2nd Level",
          castingTime: "Action",
          range: "Self",
          duration: "1 Hour",
          year: 4,
          restriction: true,
          description:
            "You temporarily gain knowledge by using your divination magic to guide you. Choose one skill in which you lack proficiency. For the spell's duration, you have proficiency in the chosen skill. The spell ends early if you cast it again.",
        },
        {
          name: "Inanimatus Revelio",
          class: ["Surveillance & Tracking"],
          level: "2nd Level",
          castingTime: "Action",
          range: "Self",
          duration: "Concentration, 10 Minutes",
          year: 4,
          description:
            "Describe or name an object that is familiar to you. You sense the direction to the object's location, as long as that object is within 1,000 feet of you. If the object is in motion, you know the direction of its movement.",
        },
        {
          name: "Secundio",
          class: ["Surveillance & Tracking"],
          level: "2nd Level",
          castingTime: "1 Minute",
          range: "60 Feet",
          duration: "1 Hour",
          year: 4,
          description:
            "You impart latent luck to yourself or one willing creature you can see within range. When the chosen creature makes an attack roll, an ability check, or a saving throw before the spell ends, it can dismiss this spell on itself to roll an additional d20 and choose which of the d20s to use.",
          higherLevels:
            "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.",
        },
        {
          name: "Trabem",
          class: ["Surveillance & Tracking"],
          level: "2nd Level",
          castingTime: "Action",
          restriction: true,
          range: "120 Feet",
          duration: "Concentration, up to 1 minute",
          year: 4,
          description:
            "A silvery beam of pale light shines down in a 5-foot radius, 40-foot-high cylinder centered on a point within range. Until the spell ends, dim light fills the cylinder. When a creature enters the spell's area for the first time on a turn or starts its turn there, it takes 2d10 radiant damage on a failed Constitution save, or half as much on a successful one.",
        },
        {
          name: "Beastia Nuntium",
          class: ["Surveillance & Tracking"],
          level: "2nd Level",
          castingTime: "Action",
          range: "30 Feet",
          duration: "24 Hours",
          year: 3,
          restriction: true,
          description:
            'By means of this spell, you use an animal to deliver a message. Choose a Tiny beast you can see within range, such as a squirrel, a blue jay, or a bat. You specify a location, which you must have visited, and a recipient who matches a general description, such as "a man or woman dressed in the uniform of the town guard" or "a red-haired dwarf wearing a pointed hat." You also speak a message of up to twenty-five words. The target beast travels for the duration of the spell toward the specified location, covering about 50 miles per 24 hours for a flying messenger, or 25 miles for other animals.',
        },
        {
          name: "Beastia Sensibus",
          class: ["Surveillance & Tracking"],
          level: "2nd Level",
          castingTime: "Action",
          restriction: true,
          range: "Touch",
          duration: "Concentration, up to 1 hour",
          year: 4,
          description:
            "You touch a willing beast. For the duration of the spell, you can use your action to see through the beast's eyes and hear what it hears, and continue to do so until you use your action to return to your normal senses.",
        },
      ],
      "3rd Level": [
        {
          name: "Annotatem",
          class: ["Surveillance & Tracking"],
          level: "3rd Level",
          castingTime: "10 Minutes",
          range: "1 Mile",
          duration: "Concentration, 10 Minutes",
          year: 5,
          description:
            "You create an invisible sensor within range in a location familiar to you (a place you have visited or seen before) or in an obvious location that is unfamiliar to you. The sensor remains in place for the duration, and it can't be attacked or otherwise interacted with.",
        },
        {
          name: "Legilimens",
          class: ["Surveillance & Tracking"],
          level: "3rd Level",
          castingTime: "Action",
          range: "60 Feet",
          duration: "Concentration, up to 1 minute",
          year: 5,
          restriction: true,
          description:
            "The Legilimency Spell - With legilimency, a being's eyes become windows to their mind, showing you a vision of their thoughts. For the duration, you can read the thoughts of the being you've targeted with the spell, as soon as eye contact can be made. After the spell effects begin, eye contact does not need to be maintained. You initially learn the surface thoughts of the being - what is most on its mind in that moment. As an action, you can attempt to probe deeper into its mind. If you probe deeper, the target must make a Wisdom saving throw. If it fails, you gain insight into its reasoning (if any), its emotional state, and something that looms large in its mind (such as something it worries over, loves, or hates). If it succeeds, the spell ends. You can probe deeper a second time, forcefully pulling memories from the being's mind if it fails the second Wisdom saving throw. Questions verbally directed at the target naturally shape the course of its thoughts, so this spell is particularly effective as part of an interrogation. If you cast the spell verbally and the target can hear you, it knows you are probing into its mind and the creature can use its action on its turn to make an Intelligence check contested by your Intelligence check. If it succeeds, the spell ends.",
          higherLevels:
            "When you cast this spell using a spell slot of 4th level or higher, the DC of the Wisdom saving throws increases by 1 for each slot level above 3rd.",
        },
        {
          name: "Linguarium Maxima",
          class: ["Surveillance & Tracking"],
          level: "3rd Level",
          castingTime: "Action",
          range: "Touch",
          duration: "1 Hour",
          year: 5,
          description:
            "This spell grants the being you touch the ability to understand any spoken language it hears. Moreover, when the target speaks, any creature that knows at least one language and can hear the target understands what it says.",
        },
        {
          name: "Mumblio Maxima",
          class: ["Surveillance & Tracking"],
          level: "3rd Level",
          castingTime: "Action",
          range: "Unlimited",
          duration: "1 Round",
          year: 5,
          restriction: true,
          description:
            "You send a short message of twenty-five words or less to a creature with which you are familiar. The creature hears the message in its mind, recognizes you as the sender if it knows you, and can answer in a like manner immediately.",
        },
        {
          name: "Revelio",
          class: ["Surveillance & Tracking"],
          level: "3rd Level",
          castingTime: "Action",
          range: "10 Feet",
          duration: "Instantaneous",
          year: 5,
          description:
            "With a twist of your wand, the true appearance of a creature or object is revealed. A disguised, hidden, invisible or otherwise magically concealed target is made visible, dispelling any spell producing such effects and magically removing physical alterations.",
        },
        {
          name: "Stellaro",
          class: ["Surveillance & Tracking"],
          level: "3rd Level",
          castingTime: "Action",
          restriction: true,
          range: "Self (15 Foot Radius)",
          duration: "Concentration, up to 10 minutes",
          year: 5,
          description:
            "You call forth Constellations to protect you. Tiny Stars flit around you to a distance of 15 feet for the duration. An affected creature's speed is halved in the area, and when the creature enters the area for the first time on a turn or starts its turn there, it must make a Wisdom saving throw. On a failed save, the creature takes 3d8 radiant damage (if you are good or neutral) or 3d8 necrotic damage (if you are evil).",
          higherLevels:
            "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd.",
        },
        {
          name: "Obtestor",
          class: ["Surveillance & Tracking"],
          level: "3rd Level",
          castingTime: "Action",
          range: "60 Feet",
          duration: "Concentration, up to 1 hour",
          year: 4,
          restriction: true,
          description:
            "You summon spirits that take the form of beasts and appear in unoccupied spaces that you can see within range. Choose one of the following options for what appears: One beast of challenge rating 2 or lower, Two beasts of challenge rating 1 or lower, Four beasts of challenge rating 1/2 or lower, Eight beasts of challenge rating 1/4 or lower. Each beast spirit disappears when it drops to 0 hit points or when the spell ends. The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which has its own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions. The DM has the creatures' statistics.",
          higherLevels:
            "When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: twice as many with a 5th-level slot, three times as many with a 7th-level slot, and four times as many with a 9th-level slot.",
        },
      ],
      "4th Level": [
        {
          name: "Appare Vestigium",
          class: ["Surveillance & Tracking"],
          level: "4th Level",
          castingTime: "1 Minute",
          range: "Self (30 Foot Radius Hemisphere)",
          duration: "Concentration, 10 Minutes",
          year: 7,
          description:
            "With a spin and a spray of golden mist, recent magical activity is revealed and illuminated through ghostly images hanging in the air, recreating the magical beings, magical creatures, or magical events that have been in the area within the last 10 minutes.",
          higherLevels:
            "When you cast this spell using a spell slot of a higher level, the historical window extends to 1 hour (5th level), 24 hours (6th level), or a week (7th level).",
        },
        {
          name: "Creatura Revelio",
          class: ["Surveillance & Tracking"],
          level: "4th Level",
          castingTime: "Action",
          range: "Self",
          duration: "Dedication, 1 Hour",
          year: 6,
          description:
            "Describe or name a creature that is familiar to you. You sense the direction to the creature's location, as long as that creature is within 1,000 feet of you. If the creature is moving, you know the direction of its movement.",
        },
        {
          name: "Homenum Revelio",
          class: ["Surveillance & Tracking"],
          level: "4th Level",
          castingTime: "1 Action",
          range: "Self (60 Foot Sphere)",
          duration: "Instantaneous",
          year: 7,
          description:
            "You sense the presence and general direction of each human or magical being within range. If any being is moving, you know its direction. A being is alerted to being detected by this spell, as the spell produces an odd feeling of something standing right behind you or over you.",
        },
        {
          name: "Oculus Speculatem",
          class: ["Surveillance & Tracking"],
          level: "4th Level",
          castingTime: "Action",
          range: "30 Feet",
          duration: "Dedication, 1 Hour",
          year: 6,
          description:
            "You create an invisible, magical eye within range that hovers in the air for the duration. You mentally receive visual information from the eye, which has normal vision and darkvision out to 30 feet. The eye can look in every direction.",
        },
        {
          name: "Relicuum",
          class: ["Surveillance & Tracking"],
          level: "4th Level",
          castingTime: "Action",
          range: "Self",
          duration: "Instantaneous",
          year: 6,
          restriction: true,
          description:
            "Your magic can put you in contact with arcanum to help divine the future. You ask a single question concerning a specific goal, event, or activity to occur within 7 days. The GM offers a truthful reply. The reply might be a short phrase, a cryptic rhyme, or an omen.",
        },
        {
          name: "Imperio Creatura",
          class: ["Surveillance & Tracking"],
          level: "4th Level",
          castingTime: "Action",
          range: "60 Feet",
          duration: "Concentration, up to 1 minute",
          year: 6,
          restriction: true,
          description:
            "You attempt to beguile a beast that you can see within range. It must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw. While the beast is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence.",
          higherLevels:
            "When you cast this spell with a 5th-level spell slot, the duration is concentration, up to 10 minutes. When you use a 6th-level spell slot, the duration is concentration, up to 1 hour. When you use a spell slot of 7th level or higher, the duration is concentration, up to 8 hours.",
        },
        {
          name: "Engorgio Insectum",
          class: ["Surveillance & Tracking"],
          level: "4th Level",
          castingTime: "1 Action",
          range: "30 Feet",
          duration: "Concentration, up to 10 minutes",
          year: 6,
          restriction: true,
          description:
            "You transform up to ten centipedes, three spiders, five wasps, or one scorpion within range into giant versions of their natural forms for the duration. A centipede becomes a giant centipede, a spider becomes a giant spider, a wasp becomes a giant wasp, and a scorpion becomes a giant scorpion.",
        },
      ],
      "5th Level": [
        {
          name: "Annotatem Maxima",
          class: ["Surveillance & Tracking"],
          level: "5th Level",
          castingTime: "10 Minutes",
          range: "Self",
          duration: "Dedication, 10 Minutes",
          year: 6,
          restriction: true,
          description:
            "You can see and hear a particular creature you choose that is on the same plane of existence as you. The target must make a Wisdom saving throw, which is modified by how well you know the target and the sort of physical connection you have to it.",
        },
        {
          name: "Augurium",
          class: ["Surveillance & Tracking"],
          level: "5th Level",
          castingTime: "1 Minute",
          range: "Self",
          duration: "1 Minute",
          year: 6,
          description:
            "You wave your wand and connect with your third eye, asking up to three questions that can be answered with a yes or no. You must ask your questions before the spell ends. You receive a correct answer for each question.",
        },

        {
          name: "Mumblio Totalum",
          class: ["Surveillance & Tracking"],
          level: "5th Level",
          castingTime: "Action",
          range: "30 Feet",
          duration: "1 Hour",
          year: 6,
          restriction: true,
          description:
            "You forge a telepathic link among up to eight willing creatures of your choice within range, psychically linking each creature to all the others for the duration. Creatures with Intelligence scores of 2 or less aren't affected by this spell.",
        },
        {
          name: "Insectum Maxima",
          class: ["Surveillance & Tracking"],
          level: "5th Level",
          castingTime: "Action",
          range: "300 Feet",
          duration: "Concentration, up to 10 minutes",
          year: 6,
          restriction: true,
          description:
            "Swarming, biting locusts fill a 20-foot-radius sphere centered on a point you choose within range. The sphere spreads around corners. The sphere remains for the duration, and its area is lightly obscured. The sphere's area is difficult terrain. When the area appears, each creature in it must make a Constitution saving throw. A creature takes 4d10 piercing damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw when it enters the spell's area for the first time on a turn or ends its turn there.",
          higherLevels:
            "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d10 for each slot level above 5th.",
        },
      ],
      "6th Level": [
        {
          name: "Invenire Viam",
          class: ["Surveillance & Tracking"],
          level: "6th Level",
          castingTime: "1 Minute",
          range: "Self",
          duration: "Concentration, 1 Day",
          year: 7,
          restriction: true,
          description:
            "This spell allows you to find the shortest, most direct physical route to a specific fixed location that you are familiar with on the same plane of existence. If you name a destination that moves (such as a mobile fortress), or a destination that isn't specific (such as 'a green dragon's lair'), the spell fails.",
        },

        {
          name: "Verum Aspectum",
          class: ["Surveillance & Tracking"],
          level: "6th Level",
          castingTime: "Action",
          range: "Touch",
          duration: "1 Hour",
          year: 7,
          description:
            "This spell gives the willing creature you touch the ability to see things as they actually are. For the duration, the creature has truesight and notices secret doors hidden by magic out to a range of 120 feet.",
        },
        {
          name: "Natura Incantatem",
          class: ["Surveillance & Tracking"],
          level: "6th Level",
          castingTime: "1 Minute",
          range: "Self",
          restriction: true,
          duration: "Instantaneous",
          year: 7,
          description:
            "You briefly become one with nature and gain knowledge of the surrounding territory. In the outdoors, the spell gives you knowledge of the land within 3 miles of you. In caves and other natural underground settings, the radius is limited to 300 feet.",
        },
      ],
      "7th Level": [
        {
          name: "Draconiverto",
          class: ["Surveillance & Tracking"],
          level: "7th Level",
          castingTime: "Bonus Action",
          range: "Self",
          duration: "Concentration, up to 1 minute",
          year: 7,
          restriction: true,
          description:
            "With a roar, you transform yourself, taking on draconic features. You gain the following benefits until the spell ends: Blindsight: You have blindsight with a range of 30 feet. Within that range, you can effectively see anything that isn't behind total cover, even if you're blinded or in darkness. Moreover, you can see an invisible creature, unless the creature successfully hides from you. Breath Weapon: When you cast this spell, and as a bonus action on subsequent turns for the duration, you can exhale shimmering energy in a 60-foot cone. Each creature in that area must make a Dexterity saving throw, taking 6d8 force damage on a failed save, or half as much damage on a successful one. Wings: Incorporeal wings sprout from your back, giving you a flying speed of 60 feet.",
        },
      ],
      "8th Level": [
        {
          name: "Animato Maxima",
          class: ["Surveillance & Tracking"],
          level: "8th Level",
          castingTime: "Action",
          range: "30 Feet",
          duration: "Concentration, up to 24 hours",
          year: 7,
          restriction: true,
          description:
            "Your magic turns others into beasts. Choose any number of willing creatures that you can see within range. You transfigure each target into the form of a large or smaller beast with a challenge rating of 4 or lower. On subsequent turns, you can use your actions to transform affected creatures into new forms. The transformation lasts for the duration for each target, or until the target drops to 0 hit points or dies. You can choose a different form for each target. A target's game statistics are replaced by the statistics of the chosen beast, though the target retains its alignment and Intelligence, Wisdom, and Charisma scores. The target assumes the hit points of its new form, and when it reverts to its normal form, it returns to the number of hit point it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn't reduce the creature's normal form to 0 hit points, it isn't knocked unconscious. The creature is limited in the actions it can perform by the nature of its new form, and it can't speak or cast spells. The target's gear melds into the new form. The target can't activate, wield, or otherwise benefit from any of its equipment.",
        },
      ],
      "9th Level": [
        {
          name: "Providentium",
          class: ["Surveillance & Tracking"],
          level: "9th Level",
          castingTime: "1 Minute",
          range: "Touch",
          duration: "8 Hours",
          year: 7,
          restriction: true,
          description:
            "You touch a willing creature and bestow a limited ability to see into the immediate future. For the duration, the target can't be surprised and has advantage on attack rolls, ability checks, and saving throws. Additionally, other creatures have disadvantage on attack rolls against the target for the duration.",
        },
      ],
    },
  },
  "Interrogation Techniques": {
    icon: "MessageSquare",
    color: "#F59E0B", // Amber - Persuasion/intimidation
    description:
      "Mind magic, intimidation, and truth-seeking for interrogations",
    levels: {
      Cantrips: [
        {
          name: "Sonorus/Quietus",
          class: ["Interrogation Techniques"],
          level: "Cantrip",
          castingTime: "Action",
          range: "Self",
          duration: "Until Dispelled",
          year: 2,
          description:
            "When you hold the tip of your wand to your neck and cast this spell, your voice booms up to three times as loud as normal. Your voice is loud enough to fill a large stadium, but won't cause any hearing damage. Casting quietus with your wand to your throat is the counter-charm and ends the effect.",
        },
        {
          name: "Fraudemo",
          class: ["Interrogation Techniques"],
          level: "Cantrip",
          castingTime: "Action",
          range: "30 Feet",
          duration: "1 Minute",
          year: 1,
          restriction: true,
          description:
            "You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again. If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else's voice, a lion's roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends. If you create an image of an object—such as a chair, muddy footprints, or a small chest—it must be no larger than a 5-foot cube. The image can't create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, because things can pass through it. If a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature.",
        },
      ],
      "1st Level": [
        {
          name: "Exhilaro",
          class: ["Interrogation Techniques"],
          level: "1st Level",
          castingTime: "Action",
          range: "30 Feet",
          duration: "Concentration, up to 1 minute",
          year: 2,
          tags: ["R"],
          description:
            "A creature of your choice that you can see within range becomes quite cheerful. For the next 10 minutes, the target creature has advantage on any saving throw against becoming frightened. If concentration is maintained for one whole round, the creature perceives everything as hilariously funny and falls into fits of laughter if this spell affects it. The target must succeed on a Wisdom saving throw or fall prone, becoming incapacitated and unable to stand up for the duration. A creature with an Intelligence score of 5 or less isn't affected. At the end of each of its turns, and each time it takes damage, the target can make another Wisdom saving throw. The target has advantage on the saving throw if it's triggered by damage. On a success, the spell ends.",
        },
        {
          name: "Rictusempra",
          class: ["Interrogation Techniques"],
          level: "1st Level",
          castingTime: "Action",
          range: "60 Feet",
          duration: "1 Round",
          year: 1,
          description:
            "This low-level dueling spell gives the recipient an intense tickling sensation. Make a ranged spell attack against a being within range. On a hit, the target will double over in laughter and become incapacitated with its speed halved until the start of your next turn.",
        },
        {
          name: "Formidulosus",
          class: ["Interrogation Techniques"],
          level: "1st Level",
          castingTime: "Action",
          range: "60 Feet",
          duration: "Instantaneous",
          year: 3,
          restriction: true,
          tags: ["Dark"],
          description:
            "You whisper a discordant melody that only one creature of your choice within range can hear, wracking it with terrible pain. The target must make a Wisdom saving throw. On a failed save, it takes 3d6 psychic damage and must immediately use its reaction, if available, to move as far as its speed allows away from you. The creature doesn't move into obviously dangerous ground, such as a fire or a pit. On a successful save, the target takes half as much damage and doesn't have to move away. A deafened creature automatically succeeds on the save.",
          higherLevels:
            "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.",
        },
      ],
      "2nd Level": [
        {
          name: "Exspiravit",
          class: ["Interrogation Techniques"],
          level: "2nd Level",
          castingTime: "Action",
          range: "60 Feet",
          restriction: true,
          duration: "Concentration, Up to 1 minute",
          year: 4,
          description:
            "You craft an illusion that takes root in the mind of a creature that you can see within range. The target must make an Intelligence saving throw. On a failed save, you create a phantasmal object, creature, or other visible phenomenon of your choice that is no larger than a 10-foot cube.",
        },
      ],
      "3rd Level": [
        {
          name: "Fraudemo Maxima",
          class: ["Interrogation Techniques"],
          level: "3rd Level",
          castingTime: "Action",
          range: "120 Feet",
          duration: "Concentration, up to 10 Minutes",
          year: 5,
          restriction: true,
          description:
            "You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 20-foot cube. The image appears at a spot that you can see within range and lasts for the duration. It seems completely real, including sounds, smells, and temperature appropriate to the thing depicted.",
        },
      ],
      "4th Level": [
        {
          name: "Confundo",
          class: ["Interrogation Techniques"],
          level: "4th Level",
          castingTime: "1 action",
          range: "90 feet",
          duration: "Concentration, up to 1 minute",
          year: 6,
          description:
            "The Confundus Charm is a particularly powerful charm that leaves anything confused, forgetful, and impressionable, often causing people to wander off absent-mindedly. If the target is an object you can see within range that operates or functions on its own, it will operate erratically, malfunction, or completely shut down. If the target is a creature you can see within range, it must succeed on a Wisdom saving throw when you cast this spell or be affected by it.",
          higherLevels:
            "When you cast this spell using a spell slot of 5th level or higher, you can target one additional target for each slot level above 4th.",
        },
        {
          name: "Expello",
          class: ["Interrogation Techniques"],
          level: "4th Level",
          castingTime: "Action",
          range: "60 Feet",
          restriction: true,
          duration: "Concentration, up to 1 minute",
          restriction: true,
          description:
            "You attempt to force one creature that you can see within range to apparate away. The target must succeed on a Charisma saving throw or be banished. While banished, the target is incapacitated. The target remains there until the spell ends, at which point the target reappears in the space it left or in the nearest unoccupied space if that space is occupied.",
          higherLevels:
            "When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th.",
        },
      ],
      "5th Level": [
        {
          name: "Obliviate",
          class: ["Interrogation Techniques"],
          level: "5th Level",
          castingTime: "1 action",
          range: "30 feet",
          duration: "Concentration, up to 1 minute",
          year: 5,
          restriction: true,
          description:
            "You attempt to reshape another being's memories. One being you can see within range must make a Wisdom saving throw. If you are fighting the creature, it has advantage on the saving throw. On a failed save, the target becomes charmed by you for the duration. You can eliminate the target's memory of an event or detail that it experienced or perceived within the last 24 hours and that lasted no more than 10 minutes.",
          higherLevels:
            "If you cast this spell using a spell slot of 6th level or higher, you can eliminate the target's memories of an event that took place up to 7 days ago (6th level), 30 days ago (7th level), 1 year ago (8th level), or any time in the creature's past (9th level).",
        },
      ],
      "6th Level": [],
      "7th Level": [],
      "8th Level": [],
      "9th Level": [
        {
          name: "Incarcerous Maxima",
          class: ["Interrogation Techniques"],
          level: "9th Level",
          castingTime: "1 Minute",
          range: "30 Feet",
          duration: "Until Dispelled",
          restriction: true,
          description:
            "You create a magical restraint to hold a creature that you can see within range. The target must succeed on a Wisdom saving throw or be bound by the spell; if it succeeds, it is immune to this spell if you cast it again. While affected by this spell, the creature doesn't need to breathe, eat, or drink, and it doesn't age. Divination spells can't locate or perceive the target. During the casting of the spell, you can specify a condition that will cause the spell to end and release the target. The condition can be as specific or as elaborate as you choose, but the DM must agree that the condition is reasonable and has a likelihood of coming to pass. A Finite Incantatem spell can end the spell only if it is cast as a 9th-level spell, targeting the prison. When you cast the spell, you choose one of the following forms of imprisonment. Burial: The target is entombed far beneath the earth in a sphere of magical force that is just large enough to contain the target. Nothing can pass through the sphere, nor can any creature apparate to get into or out of it. Chaining: Heavy chains, firmly rooted in the ground, hold the target in place. The target is restrained until the spell ends, and it can't move or be moved by any means until then. Minimus Containment: The target shrinks to a height of 1 inch and is imprisoned inside a gemstone or similar object. Light can pass through the gemstone normally (allowing the target to see out and other creatures to see in), but nothing else can pass through, even by means of Apparition. The gemstone can't be cut or broken while the spell remains in effect. Slumber: The target falls asleep and can't be awoken.",
        },
      ],
    },
  },
  "Field Medicine": {
    icon: "Heart",
    color: "#10B981", // Green - Healing/medicine
    description: "Medical magic for healing and stabilization in the field",
    levels: {
      Cantrips: [
        {
          name: "Anapneo",
          class: ["Field Medicine"],
          level: "Cantrip",
          castingTime: "Action",
          range: "30 Feet",
          duration: "Instantaneous",
          year: 1,
          restriction: true,
          description:
            "The Airway Clearing Spell - A being's airway is cleared and they are assisted in breathing. If used on a living being that has 0 hit points, the being becomes stable.",
        },
        {
          name: "Rennervate",
          class: ["Field Medicine"],
          level: "Cantrip",
          castingTime: "Action",
          range: "10 Feet",
          duration: "Instantaneous",
          year: 1,
          restriction: false,
          description:
            "The Reviving Spell - The counterspell to stupefy, this incantation is invaluable in extended combat or team dueling. Magically induced unconsciousness is ended for a being of your choice you can see within range.",
        },
      ],
      "1st Level": [
        {
          name: "Episkey",
          class: ["Field Medicine"],
          level: "1st Level",
          castingTime: "Bonus Action",
          range: "10 Feet",
          duration: "Instantaneous",
          year: 2,
          restriction: false,
          description:
            "The Fast-Healing Spell - A being of your choice that you can see within range regains hit points equal to 2d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs.",
          higherLevels:
            "When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d4 for each slot level above 1st.",
        },
        {
          name: "Ferula",
          class: ["Field Medicine"],
          level: "1st Level",
          castingTime: "Action",
          range: "30 Feet",
          duration: "10 Minutes",
          year: 2,
          restriction: false,
          description:
            "The Bandaging Charm - Bandages and splints are conjured on a being with no more than half of its hit point maximum, and it gains hit points equal to two times your spellcasting ability modifier. Additionally, any Wisdom (Medicine) checks to stabilize that target within the duration are made at advantage, and if the target is successfully stabilized, it regains 1 hit point.",
        },
        {
          name: "Reparifors",
          class: ["Field Medicine"],
          level: "1st Level",
          castingTime: "Action",
          range: "Touch",
          duration: "Instantaneous",
          year: 2,
          restriction: false,
          description:
            "The Curing Spell - A being you tap with your wand regains a 1d8 hit points. You can also end either one disease or one condition afflicting it. The condition can be blinded, deafened, paralyzed, or poisoned.",
          higherLevels:
            "When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st.",
        },
      ],
      "2nd Level": [
        {
          name: "Adversus Interitus",
          class: ["Field Medicine"],
          level: "2nd Level",
          castingTime: "Action",
          range: "Touch",
          duration: "10 Days",
          year: 3,
          restriction: false,
          description:
            "You touch a corpse or other remains. For the duration, the target is protected from decay and can't become undead. The spell also effectively extends the time limit on raising the target from the dead, since days spent under the influence of this spell don't count against the time limit of spells such as raise dead.",
        },
      ],
      "3rd Level": [
        {
          name: "Aculeo Sanentur",
          class: ["Field Medicine"],
          level: "3rd Level",
          castingTime: "Action",
          range: "30 Feet",
          duration: "Instantaneous",
          year: 4,
          restriction: true,
          description:
            "You sacrifice some of your health to mend another creature's injuries. You take 4d8 necrotic damage, which can't be reduced in any way, and one creature of your choice that you can see within range regains a number of hit points equal to twice the necrotic damage you take.",
          higherLevels:
            "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd.",
        },
        {
          name: "Animatem",
          class: ["Field Medicine"],
          level: "3rd Level",
          castingTime: "Action",
          range: "Touch",
          duration: "Instantaneous",
          year: 4,
          restriction: true,
          description:
            "You touch a creature that has died within the last minute. That creature returns to life with 1 hit point. This spell can't return to life a creature that has died of old age, nor can it restore any missing body parts.",
        },
        {
          name: "Intus Sunt",
          class: ["Field Medicine"],
          level: "3rd Level",
          castingTime: "Action",
          range: "30 Feet",
          duration: "Concentration, up to 1 minute",
          year: 4,
          restriction: true,
          ritual: true,
          description:
            "The Entrail-Expelling Curse - Invented by Urquhart Rackharrow, this medieval remedy causes the recipient to purge and experience great abdominal pain. Choose one being that you can see within range to make a Constitution saving throw. If it fails, the target's exhaustion is set to 2 levels for the duration. At the end of each of its turns, the target can make a Constitution saving throw, without disadvantage from exhaustion. On a success, the spell ends. If the target has higher levels of exhaustion than the spell's effect, the spell does not change its levels of exhaustion. If the target gains any levels of exhaustion within the duration of this spell, it stacks with this spell's effect. Additionally, if the target is suffering any condition or negative effects from something it ingested, such as drinking a poison, this spell ends those effects.",
          higherLevels:
            "If you cast this spell using a spell slot of 6th level or higher, the target's exhaustion is set to 3 levels (6th level), 4 levels (7th level), or 5 levels (8th level).",
        },
      ],
      "4th Level": [
        {
          name: "Brackium Emendo",
          class: ["Field Medicine"],
          level: "4th Level",
          castingTime: "Action",
          range: "Touch",
          duration: "Instantaneous",
          year: 5,
          restriction: false,
          description:
            "The Bone Mending Spell - This spell heals a being's broken bones immediately, although the process is quite painful. A being you tap with your wand regains a number of hit points equal to 5d10 + your spellcasting ability modifier, and gains a level of exhaustion.",
          higherLevels:
            "When you cast this spell using a spell slot of 5th level or higher, the healing increases by 1d10 for each slot level above 4th.",
        },
      ],
      "5th Level": [
        {
          name: "Pervivo",
          class: ["Field Medicine"],
          level: "5th Level",
          castingTime: "1 Hour",
          range: "Touch",
          duration: "Instantaneous",
          year: 6,
          restriction: true,
          description:
            "You return a dead creature you touch to life, provided that it has been dead no longer than 10 days. If the creature's soul is both willing and at liberty to rejoin the body, the creature returns to life with 1 hit point. This spell also neutralizes any poison and cures non-magical diseases that affected the creature at the time it died. This spell doesn't, however, remove magical diseases, curses, or similar effects; if these aren't first removed prior to casting the spell, they take effect when the creature returns to life. The spell can't return an undead creature to life. This spell closes all mortal wounds, but it doesn't restore missing body parts. If the creature is lacking body parts or organs integral for its survival – its head, for instance – the spell automatically fails. Coming back from the dead is an ordeal. The target takes a -4 penalty to all attack rolls, saving throws, and ability checks. Every time the target finishes a long rest, the penalty is reduced by 1 until it disappears.",
        },
      ],
      "6th Level": [
        {
          name: "Protego Totalum",
          level: "6th Level",
          class: ["Field Medicine"],
          castingTime: "Action",
          range: "Self (10-foot-radius sphere)",
          duration: "Concentration, up to 1 minute",
          year: 7,
          restriction: true,
          description:
            "An immobile, faintly shimmering barrier springs into existence in a 10-foot radius around you and remains for the duration. Any attack or spell of 5th level or lower cast from outside the barrier can't affect creatures or objects within it, even if the spell is cast using a higher level spell slot. Such a spell can target creatures and objects within the barrier, but the spell has no effect on them. Similarly, the area within the barrier is excluded from the areas affected by such spells.",
          higherLevels:
            "When you cast this spell using a spell slot of 7th level or higher, the barrier blocks spells of one level higher for each slot level above 6th.",
        },
        {
          name: "Vulnera Sanentur",
          class: ["Field Medicine"],
          level: "6th Level",
          castingTime: "Action",
          range: "Touch",
          duration: "Concentration, up to 1 minute",
          year: 6,
          restriction: false,
          description:
            "The Regenerating Spell - Tracing your wand over a being's wounds, you weave a complex counter-curse that undoes the damage dealt to a being. The target regains four times your spellcasting ability modifier + 4d8 hit points instantaneously, and then 4d4 hit points for every following turn for the duration of the spell. If the target has lost body members (fingers, legs, and so on) and the severed part is held to its place throughout the entire duration of the spell, the spell causes the limb to heal back on after 1 minute of casting.",
          higherLevels:
            "When you cast this spell using a spell slot of 7th level or higher, the instantaneous healing increases by 1d8 and the subsequent healing increases by 3d4 for each slot level above 6th.",
        },
      ],
      "7th Level": [],
      "8th Level": [],
      "9th Level": [],
    },
  },
  "Specialized Arsenal": {
    icon: "Flame",
    color: "#6B7280", // Gray - Advanced/restricted
    description:
      "Advanced and restricted magic requiring special authorization",
    levels: {
      // Spells will be migrated here from Transfiguration, Elemental, Forbidden, Gravetouched
      Cantrips: [
        {
          name: "Aguamenti",
          class: ["Specialized Arsenal"],
          level: "Cantrip",
          castingTime: "Action",
          range: "Self (30 Foot Cone)",
          duration: "Dedication, 1 Minute",
          year: 1,
          description:
            "A cone of clear, pure water shoots from the tip of the caster's wand with the desired force. The water doesn't go bad and extinguishes exposed flames in the area.",
        },
        {
          name: "Crinus Muto",
          class: ["Specialized Arsenal"],
          level: "Cantrip",
          castingTime: "1 Action",
          range: "Self",
          duration: "1 Hour",
          year: 1,
          description:
            "Your hair is magically lengthened, shortened, styled, or colored. This may also be applied to eyebrows and facial hair. If your appearance is drastically changed, you may be hard to recognize. To discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on an Intelligence (Investigation) check against your spell save DC.",
        },
        {
          name: "Epoximise",
          class: ["Specialized Arsenal"],
          level: "Cantrip",
          castingTime: "Action",
          range: "30 Feet",
          duration: "Instantaneous",
          year: 1,
          description:
            "This spell transfigures the surface of an object to become extremely sticky. One object of your choice that you can see within range and that fits within a 1-foot cube adheres to anything it touches for the duration. If a creature wants to overcome the sticking effect, it can use its action to make a Strength check against your spell save DC. On a success, it can pull the target object free or remove one thing from the target object's surface.",
          higherLevels:
            "When you cast this spell using a spell slot of 1st level or higher, the cube's size increases by 1 foot for each slot level above 0.",
        },
        {
          name: "Incendio Glacia",
          class: ["Specialized Arsenal"],
          level: "Cantrip",
          castingTime: "Action",
          range: "Touch",
          duration: "1 Hour",
          year: 1,
          description:
            "A flickering blue flame flows out from the tip of your wand, condensing on an object, in a container, or in your hand. The flame remains there for the duration and only emanates heat directly upwards. It doesn't harm anything beneath or around it, and seems to hover slightly above whatever it's resting upon. If placed beneath a flammable object, a natural fire may be started from the heat. The flame sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The spell ends if you dismiss it as a bonus action.",
        },
        {
          name: "Orchideous",
          class: ["Specialized Arsenal"],
          level: "Cantrip",
          castingTime: "Action",
          range: "10 Feet",
          duration: "Instantaneous",
          year: 1,
          description:
            "You conjure a blooming flower, bouquet, or wreath in the desired location within range.",
        },
        {
          name: "Vera Verto",
          class: ["Specialized Arsenal"],
          level: "Cantrip",
          castingTime: "Action",
          range: "Touch",
          duration: "Until Dispelled",
          year: 2,
          description:
            "This universal incantation is taught to Hogwarts students in their first Transfiguration class. You transfigure one nonmagical object that you can see within range and that fits within a 1-foot cube into another nonmagical object of similar size and mass and of equal or lesser value.",
          higherLevels:
            "When you cast this spell using a spell slot of 1st level or higher, you may select or stack one of the following effects for each slot level above 0.",
        },
        {
          name: "Incendio Ruptis",
          class: ["Specialized Arsenal"],
          level: "Cantrip",
          castingTime: "Action",
          range: "120 Feet",
          duration: "1 Round",
          year: 1,
          restriction: true,
          tags: ["Dark"],
          description:
            "You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn't being worn or carried.",
          higherLevels:
            "This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).",
        },
        {
          name: "Umbrus Notatem",
          class: ["Specialized Arsenal"],
          level: "Cantrip",
          castingTime: "Bonus Action",
          restriction: true,
          range: "30 Feet",
          duration: "1 Round",
          tags: ["Dark"],
          restriction: true,
          description:
            "You brand a willing creature with a mark of shadow. Until the end of its next turn, the target's movement speed increases by 5 feet, and its next attack deals an additional 2d4 necrotic damage. The effect ends early if the attack hits. If the target casts a spell that incorporates this additional damage, that spell gains the Dark tag for the purpose of effects, resistances, and synergies.",
        },
      ],
      "1st Level": [
        {
          name: "Inanimatus Conjurus",
          class: ["Specialized Arsenal"],
          level: "1st Level",
          castingTime: "Action",
          range: "10 Feet",
          duration: "1 Hour",
          year: 2,
          description:
            "You conjure up an inanimate object in your hand or in an unoccupied space within range that you can see. This object can be no larger than 2 feet on a side and weigh no more than 10 pounds, and its form must be that of a nonmagical object that you have seen. The object disappears at the end of the spell's duration or if it takes any damage.",
          higherLevels:
            "When you cast this spell using a spell slot of 2nd level or higher, you may select or stack one of the following effects for each slot level above 1st: Increase the side length by 2 feet. Increase the weight limit by 10 pounds.",
        },
        {
          name: "Incendio",
          class: ["Specialized Arsenal"],
          level: "1st Level",
          castingTime: "Action",
          range: "90 Feet",
          duration: "Concentration, up to 1 minute",
          year: 2,
          tags: ["Dark"],
          description:
            "You create a bonfire on ground that you can see within range. Until the spell ends, the bonfire fills a 5-foot cube. Any creature in the bonfire's space when you cast the spell must succeed on a Dexterity saving throw. It takes 3d6 fire damage on a failed save, or half as much damage on a successful one. A creature must also make the saving throw when it moves into the bonfire's space for the first time on a turn or ends its turn there. The bonfire ignites flammable objects in its area that aren't being worn or carried. If there is adequate fuel for the bonfire to burn, it will continue burning after the spell ends.",
          higherLevels:
            "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 2d6 for each slot level above 2nd.",
        },
        {
          name: "Obscuro",
          class: ["Specialized Arsenal"],
          level: "1st Level",
          castingTime: "Action",
          range: "60 Feet",
          duration: "Until Dispelled",
          year: 2,
          description:
            "You can conjure a black blindfold that magically wraps itself around a foe's head. Choose one creature that you can see within range to make a Dexterity saving throw. If it fails, the target is blinded for the duration. The creature can remove the blindfold as an action.",
        },
        {
          name: "Sagittario",
          class: ["Specialized Arsenal"],
          level: "1st Level",
          castingTime: "1 action",
          range: "150 feet",
          duration: "Instantaneous",
          year: 4,
          tags: ["Dark"],
          description:
            "A conjured arrow streaks toward a designated target. Make a ranged spell attack against a target within range. On a hit, the target takes piercing damage equal to 1d8 + your spellcasting ability modifier.",
          higherLevels:
            "When you cast this spell using a spell slot of 2nd level or higher, you conjure one additional arrow for each slot level above 1st. You can direct the arrows at the same target or at different ones. Make a separate attack roll for each arrow.",
        },
        {
          name: "Nebulus",
          class: ["Specialized Arsenal"],
          level: "1st Level",
          castingTime: "1 action",
          range: "120 feet",
          duration: "Concentration, up to 1 hour",
          year: 3,
          description:
            "You create a 20-foot-radius sphere of fog centered on a point within range. The sphere spreads around corners, and its area is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.",
          higherLevels:
            "When you cast this spell using a spell slot of 2nd level or higher, the radius of the fog increases by 20 feet for each slot level above 1st.",
        },
        {
          name: "Diffindo Glacia",
          class: ["Specialized Arsenal"],
          level: "1st Level",
          castingTime: "Action",
          range: "60 Feet",
          duration: "Instantaneous",
          year: 2,
          restriction: true,
          description:
            "Ice-cutting spell that combines slicing and freezing effects",
        },
        {
          name: "Intonuit Fluctus",
          class: ["Specialized Arsenal"],
          level: "1st Level",
          castingTime: "Action",
          range: "Self",
          duration: "Instantaneous",
          year: 3,
          restriction: true,
          description:
            "A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed. In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell's effect, and the spell emits a thunderous boom audible out to 300 feet.",
          higherLevels:
            "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.",
        },
        {
          name: "Ictus Vitalus",
          class: ["Specialized Arsenal"],
          level: "1st Level",
          castingTime: "Action",
          restriction: true,
          range: "Self",
          duration: "1 Hour",
          restriction: true,
          description:
            "Bolstering yourself with a necromantic facsimile of life, you gain 1d4 + 4 temporary hit points for the duration.",
          higherLevels:
            "When you cast this spell using a spell slot of 2nd level or higher, you gain 5 additional temporary hit points for each slot level above 1st.",
        },
      ],
      "2nd Level": [
        {
          name: "Incarcerous",
          class: ["Specialized Arsenal"],
          level: "2nd Level",
          castingTime: "1 action",
          range: "30 feet",
          duration: "24 hours",
          ritual: true,
          year: 3,
          description:
            "Black cords and ropes are conjured and wrap themselves forcefully around a target you can see within range. If the target is an unwilling creature, it must make a Strength saving throw. On a failed save, the creature is restrained for the duration. Upon casting, you can choose to anchor the ropes to the ground, preventing the target from being moved by external forces. The restrained creature or someone else who can reach it can use an action to make a Strength check against your spell save DC. On a success, the restrained effect ends.",
          higherLevels:
            "When you cast this spell using a spell slot of 4th level or higher, the creature is also incapacitated, rendering it unable make a Strength check to escape.",
        },
        {
          name: "Orbis",
          class: ["Specialized Arsenal"],
          level: "2nd Level",
          castingTime: "1 action",
          range: "60 feet",
          duration: "Concentration, up to 1 minute",
          year: 3,
          restriction: true,
          description:
            "You choose a space on the ground that is currently occupied by a Large or smaller creature you can see within range. The ground becomes a thick liquid and swirls out from under the creature in an orb-like shape. The material then slams back down and regains its solidity in an attempt to partially bury the creature. The target must make a Dexterity saving throw. On a failed save, the target takes 3d6 bludgeoning damage and is restrained for the spell's duration. As an action, you can cause the earth to crush the restrained target, who must make a Strength saving throw. It takes 3d6 bludgeoning damage on a failed save, or half as much damage on a successful one. To break out, the restrained target can use its action to make a Strength check against your spell save DC. On a success, the target pulls its legs free and is no longer restrained.",
          higherLevels:
            "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd.",
        },
        {
          name: "Reparifarge",
          class: ["Specialized Arsenal"],
          level: "2nd Level",
          castingTime: "1 action",
          range: "90 feet",
          duration: "Instantaneous",
          year: 3,
          tags: ["Defensive"],
          restriction: true,
          description:
            "Choose any creature, object, or magical effect within range. One Transfiguration spell of 2nd level or lower on the target ends. If you are aware of at least one spell affecting the target, you can specify that spell in your mind. If you are unaware of what spells are affecting the target, one randomly selected spell ends. For a spell of a higher level on the target, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a successful check, the spell ends.",
          higherLevels:
            "When you cast this spell using a spell slot of 3rd level or higher, you automatically end the effects of a Transfiguration spell on the target if the spell's level is equal to or less than the level of the spell slot you used.",
        },
        {
          name: "Serpensortia",
          class: ["Specialized Arsenal"],
          level: "2nd Level",
          castingTime: "1 action",
          range: "30 feet",
          duration: "Instantaneous",
          year: 4,
          tags: ["Dark"],
          description:
            "You conjure a venomous snake from thin air. A pit viper appears in an unoccupied space that you can see within range. Roll initiative for the summoned creature, which has its own turns. Although the pit viper won't willingly attack the caster, you cannot control the actions or targets of the pit viper. It is possible for the pit viper to be turned against you through magical means.",
          higherLevels:
            "When you cast this spell using a higher level spell slot, multiple pit vipers are conjured in unoccupied spaces that you can see within range. Choose from the following options: two pit vipers (4th level), three pit vipers (6th level), or four pit vipers (8th level). Initiative is rolled as a group.",
        },
        {
          name: "Destruunt",
          class: ["Specialized Arsenal"],
          level: "2nd Level",
          castingTime:
            "1 reaction, when you see a creature cast a Healing spell",
          range: "60 Feet",
          duration: "Instantaneous",
          restriction: true,
          restriction: true,
          description:
            "You lash out with a thread of dark magic that severs the connection between body and life. When a creature within range attempts to cast a Healing spell, you can use your reaction to disrupt the flow of healing energy. The spell is halted, and no hit points or other effects are restored. The target still expends the spell slot and sorcery points used. If the healing spell is of 3rd level or higher, the caster must succeed on a Intelligence saving throw (DC equals 10 + the level of the spell) or the spell fails.",
        },
        {
          name: "Quo Flora",
          class: ["Specialized Arsenal"],
          level: "2nd Level",
          castingTime: "Action",
          range: "60 Feet",
          duration: "Instantaneous",
          restriction: true,
          tags: ["Dark"],
          description:
            "You invoke both death and life upon a 10-foot-radius sphere centered on a point within range. Each creature of your choice in that area must make a Constitution saving throw, taking 2d6 necrotic damage on a failed save, or half as much damage on a successful one. Nonmagical vegetation in that area withers. In addition, one creature of your choice in that area can spend and roll one of its unspent Hit Dice and regain a number of hit points equal to the roll plus your spellcasting ability modifier.",
          higherLevels:
            "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot above 2nd, and the number of Hit Dice that can be spent and added to the healing roll increases by one for each slot above 2nd.",
        },
      ],
      "3rd Level": [
        {
          name: "Avis",
          class: ["Specialized Arsenal"],
          level: "3rd Level",
          castingTime: "1 action",
          range: "60 feet",
          duration: "Concentration, up to 1 hour",
          year: 5,
          description:
            "You conjure either a Swarm of Small Birds or two Swarms of Tiny Birds that are a species of your choice. The swarm disappears when it drops to 0 hit points or when the spell ends. The conjured birds are friendly to you and your companions. Roll initiative for the summoned swarms as a group, which has its own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions. The HM has the creatures' statistics.",
          higherLevels:
            "When you cast this spell using certain higher-level spell slots, more creatures appear - twice as many with a 5th-level slot, three times as many with a 7th-level slot, and four times as many with a 9th-level slot.",
        },
        {
          name: "Evanesco",
          class: ["Specialized Arsenal"],
          level: "3rd Level",
          castingTime: "1 action",
          range: "30 ft",
          duration: "Instantaneous",
          year: 5,
          description:
            "One non-magical object or magical construct of your choice that you can see within range and that fits within a 1-foot cube is vanished. Vanished objects have been described as being transfigured to go 'into non-being, which is to say, everything.' Vanishing is often seen as the magical inverse of conjuration.",
          higherLevels:
            "When you cast this spell using a spell slot of 4th level or higher, the cube's size increases by 1 foot for each slot level above 3rd.",
        },
        {
          name: "Ignis Laquis",
          class: ["Specialized Arsenal"],
          level: "3rd Level",
          castingTime: "1 action",
          range: "60 feet",
          duration: "Dedication, up to 1 minute",
          year: 5,
          restriction: true,
          description:
            "You create a long, snaking whip of fire from the tip of your wand, lashing out and coiling around a creature in range. Make a melee spell attack against the target. On a hit, the creature takes 4d10 fire damage and is grappled for the duration. As an action, the target can make a Strength or Dexterity saving throw to end the spell's effects. On each of your following turns spent maintaining dedication, the whip tightens and you deal 4d10 fire damage to the target automatically. If the creature is Large or smaller, you can use a bonus action to pull the creature up to 10 feet closer to you.",
          higherLevels:
            "When you cast this spell using a spell slot of 4th level or higher, the initial damage and subsequent turn damage increases by 1d10 for each slot level above 3rd.",
        },
        {
          name: "Melofors",
          class: ["Specialized Arsenal"],
          level: "3rd Level",
          castingTime: "1 action",
          range: "60 feet",
          duration: "1 minute",
          year: 4,
          description:
            "You conjure a pumpkin around a target's head, blinding and deafening it. Choose one creature that you can see within range to make a Wisdom saving throw. If it fails, the target is blinded and deafened for the duration. At the end of each of its turns, the target can make a Wisdom saving throw. On a success, the spell's effect ends for that target.",
          higherLevels:
            "When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd.",
        },
        {
          name: "Fulgur",
          class: ["Specialized Arsenal"],
          level: "3rd Level",
          castingTime: "Action",
          range: "120 Feet",
          duration: "Concentration, up to 10 minutes",
          year: 5,
          restriction: true,
          description:
            "A storm cloud appears in the shape of a cylinder that is 10 feet tall with a 60-foot radius, centered on a point you can see within range directly above you. The spell fails if you can't see a point in the air where the storm cloud could appear (for example, if you are in a room that can't accommodate the cloud). When you cast the spell, choose a point you can see under the cloud. A bolt of lightning flashes down from the cloud to that point. Each creature within 5 feet of that point must make a Dexterity saving throw. A creature takes 3d10 lightning damage on a failed save, or half as much damage on a successful one. On each of your turns until the spell ends, you can use your action to call down lightning in this way again, targeting the same point or a different one. If you are outdoors in stormy conditions when you cast this spell, the spell gives you control over the existing storm instead of creating a new one. Under such conditions, the spell's damage increases by 1d10.",
          higherLevels:
            "When you cast this spell using a spell slot of 4th or higher level, the damage increases by 1d10 for each slot level above 3rd.",
        },
        {
          name: "Respersio",
          class: ["Specialized Arsenal"],
          level: "3rd Level",
          castingTime: "Action",
          range: "120 Feet",
          duration: "Instantaneous",
          year: 4,
          restriction: true,
          description:
            "You conjure up a wave of water that crashes down on an area within range. The area can be up to 30 feet long, up to 10 feet wide, and up to 10 feet tall. Each creature in that area must make a Dexterity saving throw. On a failure, a creature takes 4d8 bludgeoning damage and is knocked prone. On a success, a creature takes half as much damage and isn't knocked prone. The water then spreads out across the ground in all directions, extinguishing unprotected flames in its area and within 30 feet of it.",
        },
        {
          name: "Gehennus Conjurus",
          class: ["Specialized Arsenal"],
          level: "3rd Level",
          castingTime: "Action",
          range: "60 Feet",
          duration: "Concentration, up to 1 hour",
          tags: ["Dark"],
          restriction: true,
          description:
            "You utter foul words, summoning an Inferius from the land of the dead. You choose the unoccupied spaces you can see within range where they appear. A summoned Inferi disappears when it drops to 0 hit points or when the spell ends. The Inferi are hostile to all creatures, including you. Roll initiative for the summoned Inferi which has its own turn(s). The Inferi pursue and attack the nearest non-Inferi to the best of their ability. As part of casting the spell, you can form a magical circle on the ground that is large enough to encompass your space. While the spell lasts, the summoned Inferi can't cross the circle or harm it, and they can't target anyone within it.",
          higherLevels:
            "When you cast this spell using a spell slot of 6th or 7th level, you summon an Inferi Swarm. If you cast it using a spell slot of 8th or 9th level, you summon an Inferi Horde.",
        },
        {
          name: "Mortus Oratio",
          class: ["Specialized Arsenal"],
          level: "3rd Level",
          castingTime: "Action",
          restriction: true,
          range: "10 Feet",
          duration: "10 Minutes",
          restriction: true,
          description:
            "You grant the semblance of life and intelligence to a corpse of your choice within range, allowing it to answer the questions you pose. The corpse must still have a mouth and can't be undead. The spell fails if the corpse was the target of this spell within the last 10 days. Until the spell ends, you can ask the corpse up to five questions. The corpse knows only what it knew in life, including the languages it knew. Answers are usually brief, cryptic, or repetitive, and the corpse is under no compulsion to offer a truthful answer if you are hostile to it or it recognizes you as an enemy. This spell doesn't return the creature's soul to its body, only its animating spirit. Thus, the corpse can't learn new information, doesn't comprehend anything that has happened since it died, and can't speculate about future events.",
        },
      ],
      "4th Level": [
        {
          name: "Ebublio",
          class: ["Specialized Arsenal"],
          level: "4th Level",
          castingTime: "1 action",
          range: "90 feet",
          duration: "Concentration, up to 1 minute",
          ritual: true,
          year: 6,
          description:
            "You conjure up a swirling sphere of water with a 5-foot radius at a point you can see within range. The sphere can hover but no more than 10 feet off the ground. The sphere remains for the spell's duration. Any creature in the sphere's space must make a Strength saving throw. On a successful save, a creature is ejected from that space to the nearest unoccupied space of the creature's choice outside the sphere. A Huge or larger creature succeeds on the saving throw automatically, and a Large or smaller creature can choose to fail it. On a failed save, a creature is restrained by the sphere and is engulfed by the swirling bubble of water. At the end of each of its turns, a restrained target can repeat the saving throw, ending the effect on itself on a success. The sphere can restrain as many as four Medium or smaller creatures or one Large creature. If the sphere restrains a creature that causes it to exceed this capacity, a random creature that was already restrained by the sphere falls out of it and lands prone in a space within 5 feet of it. As an action, you can move the sphere up to 30 feet in a straight line. If it moves over a pit, a cliff, or other drop-off, it safely descends until it is hovering 10 feet above the ground. Any creature restrained by the sphere moves with it. You can ram the sphere into creatures, forcing them to make the saving throw. When the spell ends, the sphere falls to the ground and extinguishes all normal flames within 30 feet of it. Any creature restrained by the sphere is knocked prone in the space where it falls. The water then vanishes.",
        },
        {
          name: "Lapifors",
          class: ["Specialized Arsenal"],
          level: "4th Level",
          castingTime: "1 action",
          range: "60 feet",
          duration: "Concentration, up to 1 hour",
          ritual: true,
          year: 6,
          restriction: true,
          description:
            "This spell transforms a creature with at least 1 hit point that you can see within range into the form of a rabbit. An unwilling creature must make a Wisdom saving throw to avoid the effect. The transformation lasts for the duration, or until the target drops to 0 hit points or dies. The target's game statistics, including mental ability scores, are replaced by the statistics of a rabbit. It retains its alignment and personality. The HM has the creature's statistics. The target assumes the hit points of its new form. When it reverts to its normal form, the creature returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn't reduce the creature's normal form to 0 hit points, it isn't knocked unconscious. The creature is limited in the actions it can perform by the nature of its new form, and it can't speak, cast spells, or take any other action that requires hands or speech. The target's gear melds into the new form. The creature can't activate, use, wield, or otherwise benefit from any of its equipment.",
        },
        {
          name: "Glacius Maxima",
          class: ["Specialized Arsenal"],
          level: "4th Level",
          castingTime: "Action",
          range: "300 Feet",
          duration: "Instantaneous",
          year: 6,
          restriction: true,
          tags: ["Dark"],
          description:
            "A hail of rock-hard ice pounds to the ground in a 20-foot-radius, 40-foot-high cylinder centered on a point within range. Each creature in the cylinder must make a Dexterity saving throw. A creature takes 2d8 bludgeoning damage and 4d6 cold damage on a failed save, or half as much damage on a successful one. Hailstones turn the storm's area of effect into difficult terrain until the end of your next turn.",
          higherLevels:
            "When you cast this spell using a spell slot of 5th level or higher, the bludgeoning damage increases by 1d8 for each slot level above 4th.",
        },
      ],
      "5th Level": [
        {
          name: "Draconifors",
          class: ["Specialized Arsenal"],
          level: "5th Level",
          castingTime: "1 action",
          range: "30 feet",
          duration: "Concentration, up to 10 minutes",
          year: 7,
          description:
            "A particularly intimidating display of transfiguration, this spell turns a desk-sized object into a miniature version of an adult dragon. Choose either one or two inanimate, nonmagical objects you can see within range that each fill a 5-foot cube and choose one of the following options: One dragon wyrmling of challenge rating 4 or lower, or Two dragon wyrmlings of challenge rating 2 or lower. The object becomes a Medium-sized dragon construct with the chosen wyrmling's statistics, which is untransfigured when it drops to 0 hit points or when the spell ends. The dragon construct is friendly to you and your companions for the duration. Roll initiative for the dragon construct, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you). If you don't issue any commands to it, it defends itself from hostile creatures, but otherwise takes no actions. If your concentration is broken, the dragon construct doesn't disappear. Instead, you lose control of the construct, it becomes hostile toward you and your companions, and it might attack. An uncontrolled dragon construct can't be dismissed by you, and it untransfigures 10 minutes after you transfigured it. The HM has the creature's statistics.",
          higherLevels:
            "When you cast this spell using a spell slot of 7th level, choose one of the following options: Two dragon wyrmlings of challenge rating 3 or lower, or Three dragon wyrmlings of challenge rating 2 or lower. When you cast this spell using a spell slot of 9th level, choose one of the following options: Two dragon wyrmlings of challenge rating 4 or lower, or Four dragon wyrmlings of challenge rating 2 or lower.",
        },
        {
          name: "Morbus",
          class: ["Specialized Arsenal"],
          level: "5th Level",
          castingTime: "Action",
          range: "Touch",
          duration: "7 Days",
          restriction: true,
          restriction: true,
          tags: ["Dark"],
          description:
            "Your touch inflicts disease. Make a melee spell attack against a creature within your reach. On a hit, the target is poisoned. At the end of each of the poisoned target's turns, the target must make a Constitution saving throw. If the target succeeds on three of these saves, it is no longer poisoned, and the spell ends. If the target fails three of these saves, the target is no longer poisoned, but choose one of the diseases below. The target is subjected to the chosen disease for the spell's duration. Since this spell induces a natural disease in its target, any effect that removes a disease or otherwise ameliorates a disease's effects apply to it. Blinding Sickness: Pain grips the creature's mind, and its eyes turn milky white. The creature has disadvantage on Wisdom checks and Wisdom saving throws and is blinded. Filth Fever: A raging fever sweeps through the creature's body. The creature has disadvantage on Strength checks, Strength saving throws, and attack rolls that use Strength. Flesh Rot: The creature's flesh decays. The creature has disadvantage on Charisma checks and vulnerability to all damage. Mindfire: The creature's mind becomes feverish. The creature has disadvantage on Intelligence checks and Intelligence saving throws, and the creature behaves as if under the effects of the confusion spell during combat. Seizure: The creature is overcome with shaking. The creature has disadvantage on Dexterity checks, Dexterity saving throws, and attack rolls that use Dexterity. Slimy Doom: The creature begins to bleed uncontrollably. The creature has disadvantage on Constitution checks and Constitution saving throws. In addition, whenever the creature takes damage, it is stunned until the end of its next turn.",
        },
      ],
      "6th Level": [
        {
          name: "Ignis Furore",
          class: ["Specialized Arsenal"],
          level: "6th Level",
          castingTime: "1 action",
          range: "60 feet",
          duration: "Concentration, up to 1 minute",
          year: 7,
          tags: ["Dark"],
          description:
            "You create a ringed wall of fire within range up to 20 feet in diameter, 20 feet high, and 10 feet thick choosing whether it's touching the ground or in the air. The wall is opaque and lasts for the duration. When the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 4d8 fire damage, or half as much damage on a successful save. A creature takes the same damage when it enters the wall for the first time on a turn or ends its turn there. As an action, you can send a tendril of flames lashing out at any point within 60 feet of the center of the ring. Each creature within 5 feet of that point must make a Dexterity saving throw. A creature takes 4d8 fire damage on a failed save, or half as much damage on a successful one. A creature in the area of the wall and fiery burst is affected only once. The spell damages objects in the area and ignites flammable objects that aren't being worn or carried.",
          higherLevels:
            "When you cast this spell using a spell slot of 7th level or higher, the damage increases by 1d8 and the ring's radius increases by 5 feet for each slot level above 6th.",
        },
      ],
      "7th Level": [],
      "8th Level": [
        {
          name: "Tempestus",
          class: ["Specialized Arsenal"],
          level: "8th Level",
          castingTime: "1 Minute",
          range: "Sight",
          duration: "Concentration, up to 6 rounds",
          year: 7,
          restriction: true,
          description:
            "A wall of water springs into existence at a point you choose within range. You can make the wall up to 300 feet long, 300 feet high, and 50 feet thick. The wall lasts for the duration. When the wall appears, each creature within its area must make a Strength saving throw. On a failed save, a creature takes 6d10 bludgeoning damage, or half as much damage on a successful save. At the start of each of your turns after the wall appears, the wall, along with any creatures in it, moves 50 feet away from you. Any Huge or smaller creature inside the wall or whose space the wall enters when it moves must succeed on a Strength saving throw or take 5d10 bludgeoning damage. A creature can take this damage only once per round. At the end of the turn, the wall's height is reduced by 50 feet, and the damage creatures take from the spell on subsequent rounds is reduced by 1d10. When the wall reaches 0 feet in height, the spell ends. A creature caught in the wall can move by swimming. Because of the force of the wave, though, the creature must make a successful Strength (Athletics) check against your spell save DC in order to move at all. If it fails the check, it can't move. A creature that moves out of the area falls to the ground.",
        },
        {
          name: "Pati",
          class: ["Specialized Arsenal"],
          level: "8th Level",
          castingTime: "Action",
          range: "150 Feet",
          duration: "Instantaneous",
          restriction: true,
          tags: ["Dark"],
          restriction: true,
          description:
            "You draw the moisture from every creature in a 30-foot cube centered on a point you choose within range. Each creature in that area must make a Constitution saving throw. Constructs and undead aren't affected, and plants and aquatic creatures make this saving throw with disadvantage. A creature takes 12d8 necrotic damage on a failed save, or half as much damage on a successful one. Nonmagical plants in the area that aren't creatures, such as trees and shrubs, wither and die instantly.",
        },
      ],
      "9th Level": [
        {
          name: "Fulgur Maxima",
          class: ["Specialized Arsenal"],
          level: "9th Level",
          castingTime: "Action",
          range: "Sight",
          duration: "Concentration, up to 1 minute",
          year: 7,
          restriction: true,
          tags: ["Dark"],
          description:
            "A churning storm cloud forms, centered on a point you can see and spreading to a radius of 360 feet. Lightning flashes in the area, thunder booms, and strong winds roar. Each creature under the cloud (no more than 5,000 feet beneath the cloud) when it appears must make a Constitution saving throw. On a failed save, a creature takes 2d6 thunder damage and becomes deafened for 5 minutes. Each round you maintain concentration on this spell, the storm produces different effects on your turn. Round 2 - Acidic rain falls from the cloud. Each creature and object under the cloud takes 1d6 acid damage. Round 3 - You call six bolts of lightning from the cloud to strike six creatures or objects of your choice beneath the cloud. A given creature or object can't be struck by more than one bolt. A struck creature must make a Dexterity saving throw. The creature takes 10d6 lightning damage on a failed save, or half as much damage on a successful one. Round 4 - Hailstones rain down from the cloud. Each creature under the cloud takes 2d6 bludgeoning damage. Rounds 5-10 - Gusts and freezing rain assail the area under the cloud. The area becomes difficult terrain and is heavily obscured. Each creature there takes 1d6 cold damage. Ranged weapon attacks in the area are impossible. The wind and rain count as a severe distraction for the purposes of maintaining concentration on spells. Finally, gusts of strong wind (ranging from 20 to 50 miles per hour) automatically disperse fog, mists, and similar phenomena in the area whether mundane or magical.",
        },
      ],
    },
  },
  "Unforgivable Curses": {
    icon: "Skull",
    color: "#000000", // Black - Forbidden/deadly
    description:
      "The three Unforgivable Curses - use punishable by life imprisonment in Azkaban",
    levels: {
      Cantrips: [],
      "1st Level": [],
      "2nd Level": [],
      "3rd Level": [],
      "4th Level": [],
      "5th Level": [
        {
          name: "Imperio",
          class: ["Unforgivable Curses"],
          level: "5th Level",
          castingTime: "Action",
          range: "60 feet",
          duration: "Concentration, up to 1 minute",
          year: null,
          checkType: "savingThrow",
          savingThrow: {
            ability: "wisdom",
            effect: "negates",
          },
          restriction: true,
          description:
            "The Imperius Curse - One of the three Unforgivable Curses. You attempt to beguile a humanoid that you can see within range. It must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw. While the target is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as 'Attack that creature,' 'Run over there,' or 'Fetch that object.' If the creature completes the order and doesn't receive further direction from you, it defends and preserves itself to the best of its ability. You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn't do anything that you don't allow it to do. During this time, you can also cause the creature to use a reaction, but this requires you to use your own reaction as well. Each time the target takes damage, it makes a new Wisdom saving throw against the spell. If the saving throw succeeds, the spell ends. Using this curse is punishable by a life sentence in Azkaban.",
        },
      ],
      "6th Level": [],
      "7th Level": [
        {
          name: "Crucio",
          class: ["Unforgivable Curses"],
          level: "7th Level",
          castingTime: "1 action",
          range: "60 feet",
          duration: "Concentration, up to 1 minute",
          year: null,
          restriction: true,
          description:
            "The Cruciatus Curse - One of the three Unforgivable Curses. Causes intense, excruciating pain to the victim. Prolonged use can cause permanent insanity. Using this curse on another human being is punishable by a life sentence in Azkaban.",
        },
      ],
      "8th Level": [
        {
          name: "Avada Kedavra",
          class: ["Unforgivable Curses"],
          level: "8th Level",
          castingTime: "1 action",
          range: "60 feet",
          duration: "Instantaneous",
          year: null,
          restriction: true,
          description:
            "The Killing Curse - One of the three Unforgivable Curses. Causes instant death with no known counter-curse. There is no way to block it except with physical barriers or sacrificial protection. Using this curse is punishable by a life sentence in Azkaban. Known to leave no trace of physical damage on the victim.",
        },
      ],
      "9th Level": [],
    },
  },
};

export const INDIVIDUAL_SPELL_MODIFIERS = {
  Ferio: SUBJECT_TO_MODIFIER_MAP.jhc,
  Tenebris: SUBJECT_TO_MODIFIER_MAP.jhc,
  "Ferio Maxima": SUBJECT_TO_MODIFIER_MAP.jhc,
  "Sagittario Virius": SUBJECT_TO_MODIFIER_MAP.transfiguration,
  "Gehennus Conjurus": SUBJECT_TO_MODIFIER_MAP.transfiguration,
  Combustio: SUBJECT_TO_MODIFIER_MAP.jhc,
  Inmoritatem: SUBJECT_TO_MODIFIER_MAP.jhc,
  Undanem: SUBJECT_TO_MODIFIER_MAP.jhc,
  "Tenebris Maxima": SUBJECT_TO_MODIFIER_MAP.jhc,
  Insanio: SUBJECT_TO_MODIFIER_MAP.jhc,

  Utilitatem: SUBJECT_TO_MODIFIER_MAP.charms,
  "Facias Infirmitatem": SUBJECT_TO_MODIFIER_MAP.charms,
  Exagitatus: SUBJECT_TO_MODIFIER_MAP.divinations,
  Impulso: SUBJECT_TO_MODIFIER_MAP.charms,
  Maledicto: SUBJECT_TO_MODIFIER_MAP.jhc,
  "Sagittario Maxima": SUBJECT_TO_MODIFIER_MAP.transfiguration,
  Sanitatem: SUBJECT_TO_MODIFIER_MAP.healing,
  "Portentia Spiculum": SUBJECT_TO_MODIFIER_MAP.transfiguration,

  Lux: SUBJECT_TO_MODIFIER_MAP.divinations,
  "Ignis Lunalis": SUBJECT_TO_MODIFIER_MAP.divinations,
  "Lux Maxima": SUBJECT_TO_MODIFIER_MAP.divinations,
  Trabem: SUBJECT_TO_MODIFIER_MAP.divinations,
  Stellaro: SUBJECT_TO_MODIFIER_MAP.divinations,
  Lunativia: SUBJECT_TO_MODIFIER_MAP.divinations,
  Solativia: SUBJECT_TO_MODIFIER_MAP.divinations,

  Insectum: SUBJECT_TO_MODIFIER_MAP.jhc,
  "Beastia Vinculum": SUBJECT_TO_MODIFIER_MAP.divinations,
  "Beastia Amicatum": SUBJECT_TO_MODIFIER_MAP.charms,
  "Beastia Nuntium R": SUBJECT_TO_MODIFIER_MAP.charms,
  "Beastia Sensibus R": SUBJECT_TO_MODIFIER_MAP.divinations,
  Obtestor: SUBJECT_TO_MODIFIER_MAP.charms,
  "Imperio Creatura": SUBJECT_TO_MODIFIER_MAP.charms,
  "Engorgio Insectum": SUBJECT_TO_MODIFIER_MAP.charms,
  "Insectum Maxima": SUBJECT_TO_MODIFIER_MAP.jhc,
  "Natura Incantatem R": SUBJECT_TO_MODIFIER_MAP.divinations,
  Draconiverto: SUBJECT_TO_MODIFIER_MAP.transfiguration,
  "Animato Maxima": SUBJECT_TO_MODIFIER_MAP.transfiguration,

  Fraudemo: SUBJECT_TO_MODIFIER_MAP.charms,
  Formidulosus: SUBJECT_TO_MODIFIER_MAP.divinations,
  Exspiravit: SUBJECT_TO_MODIFIER_MAP.divinations,
  "Fraudemo Maxima": SUBJECT_TO_MODIFIER_MAP.divinations,
  Timor: SUBJECT_TO_MODIFIER_MAP.charms,
  "Relicuum R": SUBJECT_TO_MODIFIER_MAP.divinations,
  "Oculus Malus": SUBJECT_TO_MODIFIER_MAP.jhc,
  "Menus Eruptus": SUBJECT_TO_MODIFIER_MAP.divinations,

  Magno: SUBJECT_TO_MODIFIER_MAP.transfiguration,
  Clario: SUBJECT_TO_MODIFIER_MAP.transfiguration,
  "Ignis Ictus": SUBJECT_TO_MODIFIER_MAP.transfiguration,
  "Irus Ictus": SUBJECT_TO_MODIFIER_MAP.transfiguration,
  Pererro: SUBJECT_TO_MODIFIER_MAP.transfiguration,
  "Tonitrus Ictus": SUBJECT_TO_MODIFIER_MAP.transfiguration,
  "Notam Ictus": SUBJECT_TO_MODIFIER_MAP.transfiguration,
  "Inanus Ictus": SUBJECT_TO_MODIFIER_MAP.transfiguration,
  "Titubo Ictus": SUBJECT_TO_MODIFIER_MAP.transfiguration,
  "Clario Maxima": SUBJECT_TO_MODIFIER_MAP.transfiguration,

  "Incendio Ruptis": SUBJECT_TO_MODIFIER_MAP.transfiguration,
  "Diffindo Glacia": SUBJECT_TO_MODIFIER_MAP.transfiguration,
  "Intonuit Fluctus": SUBJECT_TO_MODIFIER_MAP.transfiguration,
  Fulgur: SUBJECT_TO_MODIFIER_MAP.transfiguration,
  Respersio: SUBJECT_TO_MODIFIER_MAP.transfiguration,
  "Glacius Maxima": SUBJECT_TO_MODIFIER_MAP.charms,
  Tempestus: SUBJECT_TO_MODIFIER_MAP.transfiguration,
  "Fulgur Maxima": SUBJECT_TO_MODIFIER_MAP.transfiguration,
};

// ===== INVESTIGATOR TOOLKIT MAPPINGS =====
export const TRADITIONAL_SCHOOL_MAPPINGS = {
  // New Investigator Toolkit Categories
  "Combat Operations": SUBJECT_TO_MODIFIER_MAP.combatOperations,
  "Crime Scene Analysis": SUBJECT_TO_MODIFIER_MAP.crimeSceneAnalysis,
  "Surveillance & Tracking": SUBJECT_TO_MODIFIER_MAP.surveillanceTracking,
  "Interrogation Techniques": SUBJECT_TO_MODIFIER_MAP.interrogationTechniques,
  "Field Medicine": SUBJECT_TO_MODIFIER_MAP.fieldMedicine,
  "Specialized Arsenal": SUBJECT_TO_MODIFIER_MAP.specializedArsenal,
  "Unforgivable Curses": SUBJECT_TO_MODIFIER_MAP.unforgivableCurses,

  // Legacy school mappings (backward compatibility)
  Charms: SUBJECT_TO_MODIFIER_MAP.crimeSceneAnalysis,
  "Jinxes, Hexes & Curses": SUBJECT_TO_MODIFIER_MAP.combatOperations,
  JHC: SUBJECT_TO_MODIFIER_MAP.combatOperations,
  Transfigurations: SUBJECT_TO_MODIFIER_MAP.specializedArsenal,
  Transfiguration: SUBJECT_TO_MODIFIER_MAP.specializedArsenal,
  Healing: SUBJECT_TO_MODIFIER_MAP.fieldMedicine,
  Divinations: SUBJECT_TO_MODIFIER_MAP.surveillanceTracking,
  "Defense Against the Dark Arts": SUBJECT_TO_MODIFIER_MAP.combatOperations,
};

export const CATEGORY_DEFAULT_MAPPINGS = {
  // Specialized categories mapped to Investigator Toolkit
  Valiant: SUBJECT_TO_MODIFIER_MAP.combatOperations, // Combat-focused
  Forbidden: SUBJECT_TO_MODIFIER_MAP.specializedArsenal, // Restricted magic
  Astronomic: SUBJECT_TO_MODIFIER_MAP.surveillanceTracking, // Detection/divination
  Ancient: SUBJECT_TO_MODIFIER_MAP.specializedArsenal, // Rare/powerful magic
  Magizoo: SUBJECT_TO_MODIFIER_MAP.surveillanceTracking, // Animal tracking/handling
  Grim: SUBJECT_TO_MODIFIER_MAP.interrogationTechniques, // Fear/mind magic
  Elemental: SUBJECT_TO_MODIFIER_MAP.specializedArsenal, // Elemental magic
  "Defense Against the Dark Arts": SUBJECT_TO_MODIFIER_MAP.combatOperations,
  Justice: SUBJECT_TO_MODIFIER_MAP.interrogationTechniques, // Truth-seeking
  Gravetouched: SUBJECT_TO_MODIFIER_MAP.specializedArsenal, // Death/necromancy
};
