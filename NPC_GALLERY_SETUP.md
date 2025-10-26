# NPC Gallery System Setup Guide

## Overview
The NPC Gallery system allows admins to manage which NPCs (Non-Player Characters) are visible to each character. This provides granular control for story progression and character-specific reveals.

---

## 1. Database Setup

### Run the Migration
1. Go to your Supabase Dashboard
2. Navigate to **SQL Editor**
3. Open the file: `supabase_migrations/001_character_npc_visibility.sql`
4. Copy and paste the entire contents into the SQL Editor
5. Click **Run** to execute the migration

This will create:
- `character_npc_visibility` table
- Indexes for fast lookups
- Row Level Security policies
- Proper permissions

---

## 2. Storage Bucket Setup

### Create the NPCs Bucket
1. Go to Supabase Dashboard → **Storage**
2. Click **New Bucket**
3. Name: `NPCs`
4. Set as **Public Bucket** (so images are accessible)
5. Click **Create Bucket**

### Set Bucket Policies
The bucket should be:
- **Read**: Public (anyone can view images)
- **Upload**: Only authenticated users (or admins only)
- **Delete**: Only admins

Example policy for public read:
```sql
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING ( bucket_id = 'NPCs' );
```

---

## 3. Adding NPCs

### Step 1: Add NPC Data
Edit `src/SharedData/charactersData.js`:

```javascript
export const ALL_CHARACTERS = [
  createNPC({
    id: 1,
    name: "Professor McGonagall",
    type: "Faculty",
    school: "Hogwarts",
    subjects: "Transfiguration",
  }),
  createNPC({
    id: 2,
    name: "Hermione Granger",
    type: "Classmate",
    school: "Hogwarts",
    house: "Gryffindor",
  }),
  // Add more NPCs...
];
```

### Step 2: Upload NPC Images
1. Go to Supabase Dashboard → **Storage** → **NPCs bucket**
2. Click **Upload Files**
3. Name your image files using the NPC's name with underscores:
   - `Professor_McGonagall.png` (for "Professor McGonagall")
   - `Hermione_Granger.png` (for "Hermione Granger")
   - `Harry_Potter.png` (for "Harry Potter")

**Image Naming Rules:**
- Replace spaces with underscores (`_`)
- Remove special characters (keep letters, numbers, hyphens, underscores)
- Use `.png` extension (or update `getNPCImageUrl()` for other formats)

**Example Conversions:**
- `"Albus Dumbledore"` → `Albus_Dumbledore.png`
- `"Mad-Eye Moody"` → `Mad-Eye_Moody.png`
- `"Neville Longbottom"` → `Neville_Longbottom.png`

---

## 4. Revealing NPCs to Characters

### Using the Admin Dashboard
1. Log in as an admin
2. Go to **Admin Dashboard** → **NPC Gallery** tab
3. Select one or more characters from the left panel
4. Browse NPCs in the right panel
5. Click **Reveal** to make an NPC visible to selected characters
6. Click **Hide** to remove visibility

### Two Modes Available:

**Reveal NPCs Mode:**
- Select multiple characters
- Bulk reveal/hide NPCs
- Filter by school and type
- Search for specific NPCs

**View Character NPCs Mode:**
- Select a single character
- See all NPCs visible to that character
- Useful for auditing what each player can see

---

## 5. Player Experience

### What Players See:
- **NPC Gallery**: Only shows NPCs that have been revealed to their character
- **NPC Cards**: Display the NPC's image from Supabase storage
- **Notes & Tags**: Players can add their own notes, tags, and relationships to visible NPCs
- **Search**: Works across all visible NPCs

### What Players Can Do:
- View revealed NPCs
- Add personal notes
- Tag NPCs (Study Buddy, Rival, Suspicious, etc.)
- Track relationships (Friend, Enemy, Neutral, Suspicious)
- Record last interaction details
- Create character connections

---

## 6. NPC Image URL Structure

Images are served from Supabase Storage with this URL format:
```
https://[YOUR_PROJECT].supabase.co/storage/v1/object/public/NPCs/[NPC_Name].png
```

Example:
```
https://yourproject.supabase.co/storage/v1/object/public/NPCs/Professor_McGonagall.png
```

The `getNPCImageUrl()` utility function automatically generates these URLs based on the NPC's name.

---

## 7. Troubleshooting

### Images Not Loading?
1. Check the image file name matches the NPC name (with underscores)
2. Verify the NPCs bucket is set to **Public**
3. Check browser console for 404 errors
4. Ensure `REACT_APP_SUPABASE_URL` is set in your `.env` file

### NPCs Not Appearing?
1. Verify you've revealed the NPC via Admin Dashboard
2. Check `character_npc_visibility` table in Supabase
3. Ensure the character ID matches
4. Refresh the page

### Can't Reveal NPCs?
1. Verify you're logged in as an admin
2. Check `user_roles` table contains your admin role
3. Verify RLS policies are correctly set up

---

## 8. Advanced: Bulk Upload NPCs

If you have many NPCs to upload:

### Option 1: Using Supabase CLI
```bash
supabase storage upload NPCs Professor_McGonagall.png
supabase storage upload NPCs Hermione_Granger.png
# ... etc
```

### Option 2: Programmatic Upload
```javascript
import { generateNPCFilenameList } from './utils/npcImageUtils';
import { ALL_CHARACTERS } from './SharedData/charactersData';

// Get list of expected filenames
const filenames = generateNPCFilenameList(ALL_CHARACTERS);
console.log(filenames);
// Output: [{ npcName: "Professor McGonagall", filename: "Professor_McGonagall.png" }, ...]
```

---

## 9. System Architecture

```
┌─────────────────────┐
│  charactersData.js  │  ← NPC definitions with auto-generated URLs
└──────────┬──────────┘
           │
           ↓
┌─────────────────────┐
│  getNPCImageUrl()   │  ← Generates Supabase storage URLs
└──────────┬──────────┘
           │
           ↓
┌─────────────────────┐
│ Supabase Storage    │  ← NPCs bucket (public read)
│    NPCs/            │
│      ├─ NPC_1.png   │
│      ├─ NPC_2.png   │
│      └─ ...         │
└─────────────────────┘

┌──────────────────────────────────────────────┐
│  character_npc_visibility table              │
│  ┌────────┬──────────┬──────────┬─────────┐  │
│  │ char_id│ npc_name │ revealed │ admin   │  │
│  ├────────┼──────────┼──────────┼─────────┤  │
│  │   123  │ McGon... │ 2024-... │ admin_1 │  │
│  └────────┴──────────┴──────────┴─────────┘  │
└──────────────────────────────────────────────┘
           │
           ↓
┌─────────────────────┐
│  CharacterGallery   │  ← Filters NPCs by visibility
└─────────────────────┘
```

---

## Summary

1. ✅ Run database migration
2. ✅ Create public NPCs storage bucket
3. ✅ Add NPC definitions to `charactersData.js`
4. ✅ Upload images to Supabase Storage (matching NPC names)
5. ✅ Use Admin Dashboard to reveal NPCs to characters
6. ✅ Players can now see and interact with revealed NPCs

That's it! The system is ready to use.
