## Overview
- Build a single-page pink-themed web app asking "Will you be my Valentine?"
- Two buttons: `Yes` and `No`. Each `No` click enlarges `Yes` until it fills the screen.
- Add a cute center animation (an inline SVG cat hugging a heart with a subtle heartbeat).

## File Structure
- `index.html`: Semantic layout (header, animation, controls, success overlay).
- `styles.css`: Pink palette, gradient background, button styles, animations.
- `script.js`: Button interactions, growth logic, overlay handling, simple heart-confetti.
- No external libraries to keep it portable and easy to host.

## UI Details
- Header text: "Will you be my Valentine?"
- Center animation: inline SVG cat + heart, heart pulsates via CSS keyframes.
- Buttons row: `Yes` (primary, pink) and `No` (outline/secondary). Rounded, playful shadows.
- Success overlay: full-screen message after `Yes` wins or when `Yes` is clicked.

## Theme & Styling
- Palette: light pink background (`#ffe4f1`), accents hot pink (`#ff4fa5`) and rose (`#ff8ec9`).
- Background: soft pink gradient + floating hearts (CSS pseudo-elements, low opacity).
- Typography: system `ui-rounded, system-ui, sans-serif` for reliability (no remote fonts).
- Buttons: transitions, hover/active scale, accessible focus rings.

## Animation
- Inline SVG cat with simple shapes (face, ears, whiskers) holding a heart.
- Heartbeat: `@keyframes beat` scaling 1 → 1.12 → 1.
- Optional floating mini-hearts around cat via CSS.

## Behavior Logic
- Track `yesScale` starting at 1.
- On `No` click: increase `yesScale` (multiply by 1.25), apply `transform: scale(yesScale)` to `Yes`.
- Fade/shrink `No` slightly on each click.
- When `Yes` visually exceeds viewport (button’s bounding box × scale ≥ viewport), switch to success overlay covering page.
- On `Yes` click: immediately show success overlay and trigger heart-confetti (a few animated hearts falling).

## Accessibility & Responsiveness
- Buttons are real `<button>` elements; keyboard and screen-reader friendly.
- High-contrast focus styles, meaningful aria labels.
- Responsive layout: stacks vertically on small screens; minimum tap targets.

## Implementation & Verification Steps
1. Create `index.html` with layout and inline SVG.
2. Add `styles.css` for theme, heartbeat, floating background hearts.
3. Add `script.js` for growth logic and overlay/confetti.
4. Run locally and verify:
   - `No` grows `Yes` progressively until full-page.
   - `Yes` shows overlay immediately.
   - Mobile tap targets and animations feel smooth.
5. Provide a shareable build (static files) you can deploy anywhere.

## After Approval
- I will implement the files, launch a local preview, and validate behavior. Then share the preview link and the deliverables.