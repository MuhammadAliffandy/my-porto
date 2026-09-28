# Design Direction

**Dial:** ENERGY 3 / RHYTHM 3 / MOTION 2

## Identity & Personality
- **Vibe:** Awwwards-Style Modern Editorial Luxury, Executive/Senior Developer Portfolio
- **Mood:** Sophisticated, refined, confident, and slightly mysterious. It feels like an exhibition of high-end craft rather than a standard resume.
- **Audience:** Clients, recruiters, and other developers looking for premium work.

## Typography
- **Primary Display (Headlines):** High-contrast, elegant Serif (e.g., Playfair Display, Lora, or a premium equivalent) for dramatic impact.
- **Body Text:** Clean, highly legible Geometric Sans-serif (e.g., Inter, Plus Jakarta Sans, or Outfit).
- **Metadata & Accents:** Uppercase Monospace for "technical" accents and eyebrows, wide tracking (letter-spacing).

## Color Palette
- **Background:** True Dark (`#050505` to `#0A0A0A`). The theme is fixed dark mode to maintain the cinematic feel.
- **Primary Text:** Off-white / very light gray (`#EFEFEF` or `#D4D4D4`) to reduce eye strain against the dark background while keeping high contrast.
- **Accent:** Warm Gold / Amber (e.g., `#d4af37` or `#f5c518`). Used sparingly for key interactions, outlines, or specific focal points.
- **Muted Elements:** Deep gray for secondary text and subtle borders.

## Layout & Composition
- **Whitespace as Structure:** Generous whitespace. Elements should feel like they have plenty of room to breathe.
- **Asymmetry & Rhythm:** Asymmetrical grid layouts to break monotony. Sections should visually vary (RHYTHM 3).
- **Borders & Separation:** Very thin, subtle 1px borders (barely visible gray) to separate cards or sections without adding heavy UI boxes.
- **Focal Point:** One clear focal point per screen. The typography does the heavy lifting for hierarchy.

## Motion & Effects (3D)
- **Background Canvas:** A subtle, fine-grained particle or starfield effect (using Three.js / R3F) that adds depth without distracting from the content. It should be slow-moving or react very subtly to the mouse.
- **Interactions:** Smooth, refined hover states on buttons (e.g., fill color transitions, slight scaling).
- **Scroll:** Elements can have subtle fade-up or parallax transitions on scroll (MOTION 2), but avoid aggressive scroll-jacking.
