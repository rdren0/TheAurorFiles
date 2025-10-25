/**
 * Spell Migration Script
 * Redistributes spells from legacy categories to new Investigator Toolkit categories
 */

const fs = require('fs');
const path = require('path');

// Read the current spells.js file
const spellsPath = path.join(__dirname, 'src', 'SharedData', 'spells.js');
const spellsContent = fs.readFileSync(spellsPath, 'utf8');

// Extract spellsData object (we'll need to do this carefully)
// For now, let's create the mapping manually

const categoryMapping = {
  // Combat Operations - gets JHC, DADA, Valiant
  'Combat Operations': {
    from: ['Jinxes, Hexes & Curses', 'Defense Against the Dark Arts', 'Valiant'],
    description: 'Offensive and defensive combat magic for field operations'
  },
  // Crime Scene Analysis - gets Charms (utility focus)
  'Crime Scene Analysis': {
    from: ['Charms'],
    description: 'Investigation, detection, and evidence collection magic',
    filter: (spell) => {
      // Utility spells from Charms
      const utilityKeywords = ['unlock', 'lock', 'summon', 'color', 'repair', 'clean', 'organize', 'light', 'detect'];
      const desc = spell.description?.toLowerCase() || '';
      const name = spell.name?.toLowerCase() || '';
      return utilityKeywords.some(kw => desc.includes(kw) || name.includes(kw));
    }
  },
  // Surveillance & Tracking - gets Divinations, Magizoo
  'Surveillance & Tracking': {
    from: ['Divinations', 'Magizoo'],
    description: 'Detection, pursuit, and monitoring magic for tracking targets'
  },
  // Interrogation Techniques - gets Grim, Justice
  'Interrogation Techniques': {
    from: ['Grim', 'Justice'],
    description: 'Mind magic, intimidation, and truth-seeking for interrogations'
  },
  // Field Medicine - gets Healing
  'Field Medicine': {
    from: ['Healing'],
    description: 'Medical magic for healing and stabilization in the field'
  },
  // Specialized Arsenal - gets Transfiguration, Elemental, Forbidden, Gravetouched, Ancient
  'Specialized Arsenal': {
    from: ['Transfigurations', 'Transfiguration', 'Elemental', 'Forbidden', 'Gravetouched', 'Ancient', 'Astronomic'],
    description: 'Advanced and restricted magic requiring special authorization'
  }
};

console.log('Spell Migration Mapping:');
console.log('========================');
for (const [newCat, config] of Object.entries(categoryMapping)) {
  console.log(`\n${newCat}:`);
  console.log(`  Sources: ${config.from.join(', ')}`);
}

console.log('\n\nTo complete migration:');
console.log('1. We need to copy spell arrays from legacy categories to new ones');
console.log('2. Update spell.class arrays to reference new category names');
console.log('3. Keep legacy categories for backward compatibility but hide from UI');

module.exports = { categoryMapping };
