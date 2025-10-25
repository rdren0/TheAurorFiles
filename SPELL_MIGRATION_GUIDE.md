# Spell Migration Guide - Legacy to Investigator Toolkit

## Migration Progress

### ✅ COMPLETED (90 spells):
- **Combat Operations**: 48 spells (JHC + Charms combat spells)
- **Crime Scene Analysis**: 24 spells (Charms investigation/utility)
- **Interrogation Techniques**: 9 spells (Charms + Grim mind magic)
- **Field Medicine**: 13 spells (All Healing spells)
- **Unforgivable Curses**: 3 spells (Imperio, Crucio, Avada Kedavra)

### 📋 REMAINING TO MIGRATE (~110 spells):

---

## DIVINATIONS → SURVEILLANCE & TRACKING (36 spells)

**Line Range**: 3257-3640

**All spells in Divinations** should go to **Surveillance & Tracking**

**Steps**:
1. Copy the entire `levels` object from Divinations (line ~3261 to ~3640)
2. Paste into Surveillance & Tracking `levels` (currently empty at line ~960)
3. Find/Replace: `class: []` → `class: ["Surveillance & Tracking"]` within that section
4. Find/Replace: `class: ["Divinations"]` → `class: ["Surveillance & Tracking"]`

---

## MAGIZOO → SURVEILLANCE & TRACKING (12 spells)

**Line Range**: 3941-4118

**All spells in Magizoo** should go to **Surveillance & Tracking**

**Steps**:
1. Copy the entire `levels` object from Magizoo (line ~3945 to ~4118)
2. **APPEND** (don't replace) these spells to Surveillance & Tracking `levels` arrays
3. For each spell level (Cantrips, 1st Level, etc.), copy the spell objects into the corresponding level in Surveillance & Tracking
4. Find/Replace: `class: []` → `class: ["Surveillance & Tracking"]`
5. Find/Replace: `class: ["Charms"]` → `class: ["Surveillance & Tracking"]`
6. Find/Replace: `class: ["Transfigurations"]` → `class: ["Surveillance & Tracking"]`

---

## JUSTICE → INTERROGATION TECHNIQUES (10 spells)

**Line Range**: 4276-4516

**All spells in Justice** should go to **Interrogation Techniques**

**Steps**:
1. Copy the entire `levels` object from Justice
2. **APPEND** these spells to Interrogation Techniques `levels` arrays
3. Find/Replace: `class: []` → `class: ["Interrogation Techniques"]`

---

## GRIM (Remaining) → SPECIALIZED ARSENAL & INTERROGATION TECHNIQUES

**Line Range**: 4120-4275

**Already migrated to Interrogation**: Fraudemo (Cantrip), Formidulosus (1st), Exspiravit (2nd), Fraudemo Maxima (3rd)

**Remaining Grim spells** (4th level and above):

### → INTERROGATION TECHNIQUES:
- **4th Level**: Tenebris Obruens (fear-based, line ~4197)
- **6th Level**: Insidiator (fear/tracking, line ~4219)

### → SPECIALIZED ARSENAL:
- **9th Level**: Morsmordre (Dark Mark - advanced dark magic, line ~4257)

**Note**: Check each Grim spell individually:
- Fear/mind-affecting → Interrogation Techniques
- Dark/powerful magic → Specialized Arsenal

---

## TRANSFIGURATIONS → SPECIALIZED ARSENAL (24 spells)

**Line Range**: 2289-3256

**All spells in Transfigurations** should go to **Specialized Arsenal**

**Steps**:
1. Copy the entire `levels` object from Transfigurations (line ~2293 to ~3256)
2. Paste into Specialized Arsenal `levels` (currently empty)
3. Find/Replace: `class: []` → `class: ["Specialized Arsenal"]`
4. Find/Replace: `class: ["Transfigurations"]` → `class: ["Specialized Arsenal"]`
5. Find/Replace: `class: ["Transfiguration"]` → `class: ["Specialized Arsenal"]`

---

## ELEMENTAL → SPECIALIZED ARSENAL (8 spells)

**Line Range**: 3641-3746

**All spells in Elemental** should go to **Specialized Arsenal**

**Steps**:
1. Copy the entire `levels` object from Elemental
2. **APPEND** these spells to Specialized Arsenal `levels` arrays (merge with Transfigurations spells)
3. Find/Replace: `class: []` → `class: ["Specialized Arsenal"]`
4. Find/Replace: `class: ["Elemental"]` → `class: ["Specialized Arsenal"]`

---

## GRAVETOUCHED → SPECIALIZED ARSENAL (8 spells)

**Line Range**: 4517-4601

**All spells in Gravetouched** should go to **Specialized Arsenal**

**Steps**:
1. Copy the entire `levels` object from Gravetouched
2. **APPEND** these spells to Specialized Arsenal `levels` arrays
3. Find/Replace: `class: []` → `class: ["Specialized Arsenal"]`
4. Find/Replace: `class: ["Healing"]` → `class: ["Specialized Arsenal"]` (some healing-tagged dark spells)

---

## VALIANT → COMBAT OPERATIONS (10 spells)

**Line Range**: 2021-2288

**All spells in Valiant** should go to **Combat Operations**

**Steps**:
1. Copy the entire `levels` object from Valiant (line ~2025 to ~2288)
2. **APPEND** these spells to Combat Operations `levels` arrays (merge with existing combat spells)
3. Find/Replace: `class: []` → `class: ["Combat Operations"]`
4. Find/Replace: `class: ["Defense Against the Dark Arts"]` → `class: ["Combat Operations"]`

---

## REMAINING CHARMS → SPECIALIZED ARSENAL (~30 spells)

**Charms spells NOT yet migrated** (from lines 1666-2020):

These are the advanced/utility spells from Charms that haven't been moved to Crime Scene Analysis, Combat Operations, or Interrogation Techniques:

### Advanced Magic / Specialized spells to migrate:
- **Cantrips**: Duro, Glisseo, Impervius, Molliare, Pereo, Wingardium Leviosa, Capto
- **1st Level**: Perfusorius
- **2nd Level**: Diminuendo, Engorgio, Immobulus, Partis Temporus, Pelucidi Pellis
- **3rd Level**: Fianto Duri, Fortissimum, Herbivicus, Novum Spirare, Repello Inimicum
- **4th Level**: Capacious Extremis, Repello Muggletum
- **5th Level**: Cave Inimicum, Ne Ustio, Piertotum Locomotor, Salvio Hexia
- **7th Level**: Herbarifors

**Steps**:
1. Locate each spell in the legacy Charms section
2. Copy each spell object to the appropriate level in Specialized Arsenal
3. Update `class: ["Charms"]` → `class: ["Specialized Arsenal"]`
4. Update `class: ["Defense Against the Dark Arts"]` → `class: ["Specialized Arsenal"]` (for defensive charms)

---

## FINAL STEP: Delete Legacy Categories

Once ALL spells are migrated, delete these legacy category sections from spells.js:

1. **Charms** (lines 1666-2020) - DELETE ENTIRE SECTION
2. **Jinxes, Hexes & Curses** (lines 2638-3143) - DELETE ENTIRE SECTION
3. **Transfigurations** (lines 2289-3256) - DELETE ENTIRE SECTION
4. **Divinations** (lines 3257-3640) - DELETE ENTIRE SECTION
5. **Elemental** (lines 3641-3746) - DELETE ENTIRE SECTION
6. **Healing** (lines 3747-3940) - DELETE ENTIRE SECTION
7. **Magizoo** (lines 3941-4118) - DELETE ENTIRE SECTION
8. **Grim** (lines 4120-4275) - DELETE ENTIRE SECTION
9. **Justice** (lines 4276-4516) - DELETE ENTIRE SECTION
10. **Gravetouched** (lines 4517-4601) - DELETE ENTIRE SECTION
11. **Valiant** (lines 2021-2288) - DELETE ENTIRE SECTION

**Important**: Delete in reverse order (bottom to top) so line numbers don't shift!

---

## Migration Checklist

- [x] Combat Operations - Complete (48 spells)
- [x] Crime Scene Analysis - Complete (24 spells)
- [x] Interrogation Techniques - Partial (9/~26 spells)
- [x] Field Medicine - Complete (13 spells)
- [x] Unforgivable Curses - Complete (3 spells)
- [ ] Surveillance & Tracking - Needs Divinations (36) + Magizoo (12)
- [ ] Specialized Arsenal - Needs Transfigurations (24) + Elemental (8) + Gravetouched (8) + remaining Charms (~30)
- [ ] Combat Operations (additions) - Needs Valiant (10)
- [ ] Interrogation Techniques (additions) - Needs Justice (10) + remaining Grim (~2)
- [ ] Delete all legacy categories

---

## Quick Reference: New Category Mappings

| Legacy Category | New Category |
|----------------|--------------|
| Charms (investigation) | Crime Scene Analysis |
| Charms (combat) | Combat Operations |
| Charms (mind magic) | Interrogation Techniques |
| Charms (advanced) | Specialized Arsenal |
| JHC | Combat Operations |
| Valiant | Combat Operations |
| Healing | Field Medicine |
| Divinations | Surveillance & Tracking |
| Magizoo | Surveillance & Tracking |
| Grim (fear/illusion) | Interrogation Techniques |
| Grim (dark magic) | Specialized Arsenal |
| Justice | Interrogation Techniques |
| Transfigurations | Specialized Arsenal |
| Elemental | Specialized Arsenal |
| Gravetouched | Specialized Arsenal |
| Unforgivables | Unforgivable Curses |

---

## Expected Final Spell Counts

- **Combat Operations**: ~58 spells (48 current + 10 Valiant)
- **Crime Scene Analysis**: 24 spells ✓
- **Surveillance & Tracking**: ~48 spells (36 Divinations + 12 Magizoo)
- **Interrogation Techniques**: ~21 spells (9 current + 10 Justice + 2 Grim)
- **Field Medicine**: 13 spells ✓
- **Specialized Arsenal**: ~71 spells (24 Transfigurations + 8 Elemental + 8 Gravetouched + ~30 Charms + 1 Grim)
- **Unforgivable Curses**: 3 spells ✓

**Total**: ~238 spells (accounting for the spells we've already categorized)

---

## Notes

- Always update the `class` array in each spell object to reflect the new category
- Some spells may have multiple class designations - update ALL of them
- Be careful with spells that have `class: []` (empty array) - these need to be updated to the new category
- After migration, test the spellbook to ensure all spells appear correctly
- Legacy category sections can remain temporarily for reference, but should be deleted once migration is confirmed working
