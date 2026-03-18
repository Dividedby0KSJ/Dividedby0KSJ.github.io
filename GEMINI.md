# Website Theming Guidelines

This document outlines the theming and styling conventions for this website, as established in `index.html`. The goal is to maintain a cohesive, modern, and visually appealing dark theme across all pages.

## Overall Aesthetic

The website uses a dark theme with a clean, modern aesthetic. The design relies on a dark gradient background, vibrant accent colors, and interactive card elements with subtle animations.

## Color Palette

- **Primary Background Gradient:** A linear gradient is used for the main page background.
  - Start Color: `#1a1a2e` (a dark, slightly purple-blue)
  - End Color: `#16213e` (a dark navy blue)
  - Direction: `135deg`

- **Primary Accent Color:**
  - `#0066ff` (a vibrant blue). Used for main headings (`<h1>`) and as a starting point for gradients.

- **Card Border Gradient:** The cards feature a striking gradient border.
  - Start Color: `#0066ff` (vibrant blue)
  - End Color: `#ff0000` (bright red)
  - Direction: `135deg`

- **Text Colors:**
  - Main Headings (`h1`): `#0066ff` (same as accent blue), with a subtle text shadow.
  - Sub-headings / Card Titles (`h2`): `#fff` (white).
  - Main Body/Subtitle Text: `#e0e0e0` (a light, off-white).
  - Descriptive Text / Muted Text (`p.desc`): `#aaa` (a light gray).

## Typography

- **Font Family:** The primary font stack is `font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;`. This provides a clean, modern, and widely available sans-serif font.

## Key UI Components

### Cards

The primary navigation element is the `.card`.

- **Background:** The card background is a solid dark color that matches the start of the main background gradient: `#1a1a2e`.
- **Border:** `2px` solid, transparent, with the gradient applied to the `border-box`.
- **Shape:** `20px` border-radius for a soft, rounded look.
- **Shadow:** A noticeable `box-shadow` that intensifies on hover, creating a "lifted" effect.
- **Hover Effect:** Cards animate upwards (`transform: translateY(-10px);`) and their shadow becomes more pronounced on hover.

### Icons

- **Style:** Icons are represented by simple, clear emojis (e.g., 💻, 📄, 🎙️).
- **Animation:** On hovering over a card, the icon within it scales up slightly (`transform: scale(1.2);`).

## Layout

- **Structure:** The main layout is a responsive CSS Grid (`display: grid`).
- **Responsiveness:** The grid columns adjust automatically for smaller screens (`@media (max-width: 600px)`), collapsing to a single-column layout to ensure usability on mobile devices.
