# Design System Strategy: The Obsidian Vault

## 1. Overview & Creative North Star
**The Creative North Star: "The Sovereign Archive"**

This design system transcends standard legal-tech interfaces by adopting a high-end editorial aesthetic. We are not building a dashboard; we are crafting a digital vault. The experience must feel authoritative, permanent, and meticulously curated. 

To achieve this, we move away from "boxed" layouts. We use **intentional asymmetry**, where text heavy blocks are balanced by expansive negative space, and **tonal layering**, where depth is communicated through the physical properties of light and surface rather than artificial lines. The goal is a "Quiet Luxury" interface—one that doesn't shout for attention but commands it through precision.

---

## 2. Colors & Surface Architecture
The palette is rooted in deep obsidian tones and metallic highlights, designed to reduce eye strain while projecting an image of premium security.

### The "No-Line" Rule
**Prohibited:** 1px solid borders for sectioning or container definition. 
**The Standard:** Boundaries must be defined through background color shifts. For example, a `surface-container-low` (#1C1B1B) section sitting on a `surface-container-lowest` (#0E0E0E) background. Use negative space (Spacing-20 to 24) to signal the transition between content blocks.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of materials.
*   **Base Layer:** `surface-container-lowest` (#0E0E0E) for the global background.
*   **Sectional Layer:** `surface-container-low` (#1C1B1B) for major content blocks.
*   **Component Layer:** `surface-container` (#201F1F) or `surface-container-high` (#2A2A2A) for cards and interactive elements.
*   **Highlight Layer:** `surface-bright` (#3A3939) for hover states or active selection indicators.

### Glass & Gradient Rule
To prevent the dark theme from feeling "flat," use **Backdrop Blur (20px - 40px)** on floating navigation bars or modal overlays using a semi-transparent `surface-container-high`.
*   **Signature CTA Gradient:** All primary actions must use a linear gradient (135°) from `primary` (#F4BD5E) to `primary-container` (#B9882E). This mimics the sheen of brushed gold.

---

## 3. Typography: The Editorial Voice
We use a high-contrast typographic scale to establish a clear information hierarchy.

*   **Display & Headlines (Manrope):** Use **Bold (700)** for Display levels and **Semi-Bold (600)** for Headlines. The tight tracking of Manrope provides a "locked-in," professional feel. Always use `on-surface` (#E5E2E1) for these.
*   **Body & UI (Inter):** Use **Regular (400)** for long-form reading and **Medium (500)** for UI labels. Inter’s high x-height ensures legibility against dark backgrounds.
*   **The Metadata Layer:** Use `on-surface-variant` (#938F8D) for secondary info, captions, and timestamps. This 30% reduction in contrast focuses the eye on primary content.

---

## 4. Elevation & Depth

### The Layering Principle
Depth is achieved by "stacking" tones. Place a `surface-container-lowest` card inside a `surface-container-low` section to create a "recessed" look, or a `surface-container-high` card on a `surface-container` background to create "lift."

### Ambient Shadows
Shadows are rarely used. When a floating element (like a dropdown) is required:
*   **Opacity:** Max 6%.
*   **Spread:** High (20px - 40px).
*   **Tint:** Use a dark amber or the background color (#000000), never a generic grey.

### The "Ghost Border" Fallback
If a border is required for accessibility in complex forms:
*   Use `outline-variant` (#4F4537) at **15% opacity**. It should be felt, not seen.

### Signature Divider
To break long editorial flows, use the **Signature Divider**: A 24px x 2px block in `primary` gold, aligned left. It acts as a visual "anchor" for new chapters of content.

---

## 5. Component Guidelines

### Buttons
*   **Primary:** Gold gradient background, `on-primary` (#1A1200) text. Radius: 4px.
*   **Secondary:** Ghost style. No background, `outline-variant` at 20% opacity border, `primary` text.
*   **Tertiary/Pill:** For categories/metadata. Use `surface-bright` background, 9999px radius, `body-sm` Inter typography.

### Input Fields
*   **Structure:** No background or a very subtle `surface-container-low`. 
*   **Bottom-Line Only:** Instead of a box, use a 1px `outline-variant` (20% opacity) on the bottom edge only to maintain the editorial feel.
*   **Active State:** The bottom line transitions to `primary` gold.

### Cards & Lists
*   **Forbidden:** Divider lines between list items.
*   **Execution:** Use `spacing-4` (1.4rem) between list items. Use tonal shifts on hover (`surface-bright`) to indicate interactivity.
*   **Radius:** Always 4px (`0.25rem`) for structural containers to maintain a sharp, architectural look.

### The Legal Timeline (Contextual Component)
For contract history, use a vertical line in `outline-variant` (10% opacity) with `primary` gold nodes. This maintains the "vault" aesthetic of a chronological record.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use `spacing-24` (8.5rem) for section breathing room. High-end design requires "wasted" space.
*   **Do** use `on-surface` (#E5E2E1) for all main text. Pure white (#FFFFFF) is too harsh for this palette and vibrates against the obsidian background.
*   **Do** align all signature dividers to the same vertical axis as your headlines.

### Don't:
*   **Don't** use standard "drop shadows." They look "cheap" in a high-end editorial context. Use tonal shifts.
*   **Don't** use large border-radii. Anything above 4px (except for pills) breaks the professional, rigid legal aesthetic.
*   **Don't** use high-contrast lines. If you can see the line from 2 meters away, it’s too bright. Use tonal backgrounds instead.