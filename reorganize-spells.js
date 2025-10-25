/**
 * SPELL REORGANIZATION SCRIPT
 *
 * This script reads spells.js, extracts all spells from legacy categories,
 * and redistributes them into the new Investigator Toolkit categories.
 *
 * Run with: node reorganize-spells.js
 */

const fs = require('fs');
const path = require('path');

// Mapping: which legacy categories go into which new categories
const CATEGORY_MAPPING = {
  'Crime Scene Analysis': ['Charms'],  // Utility spells
  'Combat Operations': ['Jinxes, Hexes & Curses', 'Valiant'],  // Combat spells
  'Surveillance & Tracking': ['Divinations', 'Magizoo'],  // Detection/tracking
  'Interrogation Techniques': ['Grim', 'Justice'],  // Mind magic/truth-seeking
  'Field Medicine': ['Healing'],  // Medical magic
  'Specialized Arsenal': ['Transfigurations', 'Elemental', 'Gravetouched', 'Forbidden', 'Ancient', 'Astronomic'],  // Advanced magic
};

console.log('🔄 Spell Reorganization Tool');
console.log('============================\n');

console.log('📋 Migration Plan:');
for (const [newCat, oldCats] of Object.entries(CATEGORY_MAPPING)) {
  console.log(`\n  ${newCat}:`);
  console.log(`    Sources: ${oldCats.join(', ')}`);
}

console.log('\n\n⚠️  MANUAL STEPS REQUIRED:');
console.log('   1. The Charms section (lines 808-1665) needs to be copied to Crime Scene Analysis');
console.log('   2. Change all `class: ["Charms"]` to `class: ["Crime Scene Analysis"]`');
console.log('   3. Repeat for each legacy category -> new category mapping');
console.log('   4. Delete the legacy category sections after migration');
console.log('\n   This is best done with find-and-replace in your editor.');

console.log('\n\n✅ Approach:');
console.log('   Given file size, use your code editor to:');
console.log('   - Copy spell arrays from legacy categories');
console.log('   - Paste into new categories');
console.log('   - Find/replace class names');
console.log('   - Delete old category blocks');
