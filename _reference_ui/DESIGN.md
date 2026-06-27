---
name: Academic Excellence
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#434653'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#737784'
  outline-variant: '#c3c6d5'
  surface-tint: '#2559bf'
  primary: '#00317e'
  on-primary: '#ffffff'
  primary-container: '#0046ad'
  on-primary-container: '#a5bdff'
  inverse-primary: '#b2c5ff'
  secondary: '#495f84'
  on-secondary: '#ffffff'
  secondary-container: '#bcd2fe'
  on-secondary-container: '#445a7f'
  tertiary: '#003b49'
  on-tertiary: '#ffffff'
  tertiary-container: '#005467'
  on-tertiary-container: '#00cef8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b2c5ff'
  on-primary-fixed: '#001847'
  on-primary-fixed-variant: '#0040a0'
  secondary-fixed: '#d6e3ff'
  secondary-fixed-dim: '#b1c7f2'
  on-secondary-fixed: '#001b3d'
  on-secondary-fixed-variant: '#31476b'
  tertiary-fixed: '#b4ebff'
  tertiary-fixed-dim: '#3cd7ff'
  on-tertiary-fixed: '#001f27'
  on-tertiary-fixed-variant: '#004e5f'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: IBM Plex Serif
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: IBM Plex Serif
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: IBM Plex Serif
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  headline-lg-mobile:
    fontFamily: IBM Plex Serif
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1200px
---

## Brand & Style

The brand personality is **authoritative, intellectual, and accessible**. It bridges the gap between elite engineering academia and community-driven NGO initiatives. The UI evokes a sense of trust and precision, moving away from high-contrast playfulness toward a disciplined, editorial aesthetic.

The design style is **Corporate / Modern with an Academic Tilt**. It utilizes a rigorous grid system, generous whitespace, and a focus on typographic hierarchy. It adopts elements of **Minimalism** to ensure clarity of information, while using sophisticated containers to house dynamic, "collage-style" imagery, grounding the energy of community projects within a professional framework.

## Colors

The palette is anchored by the heritage **Royal Blue**, refined for digital legibility. It is supported by a **Deep Navy** (secondary) to provide depth and an academic, "Ivy League" feel. **Slate Gray** serves as the neutral foundation for text and borders, ensuring high readability without the harshness of pure black.

An **Innovation Cyan** (tertiary) is used sparingly as an accent for call-to-actions and progress indicators, representing the "spark" of engineering creativity. 

- **Primary:** Core brand identity and navigation.
- **Secondary (Navy):** Headers, footers, and high-level structural containers.
- **Tertiary (Cyan):** Actionable items and highlights.
- **Neutral (Slate):** Body text, metadata, and subtle borders.

## Typography

The typography strategy employs a "Serif-on-Sans" pairing to achieve an academic but modern look. **IBM Plex Serif** is used for headlines to convey tradition, prestige, and the literary nature of engineering research. **Inter** is used for all body and UI elements, providing a neutral, systematic, and highly legible counter-balance.

- **Headlines:** Use Serif for all H1-H3 levels. Set with tighter line heights to maintain a strong visual block.
- **Body:** Use Inter with a generous 1.6x line height to ensure comfortable long-form reading on technical subjects.
- **Labels:** Use uppercase Inter with slight letter spacing for categories and metadata to distinguish them from prose.

## Layout & Spacing

This design system uses a **Fixed Grid** model for desktop to maintain the organized, "journal" feel of an academic publication. 

- **Grid:** A 12-column grid with 24px gutters. Elements should align strictly to these columns to evoke engineering precision.
- **Margins:** Generous side margins (64px+) prevent content from feeling "bubbly" or cramped.
- **Vertical Rhythm:** Spacing between sections should be significant (80px to 120px) to allow the "whitespace" to act as a separator rather than using heavy background colors.
- **Mobile:** Reflows to a single column with 16px margins, maintaining the same 8px base unit for all padding and internal element spacing.

## Elevation & Depth

To maintain a professional and flat academic aesthetic, the design system avoids heavy shadows and skeuomorphism. Depth is communicated through **Low-contrast outlines** and **Tonal layers**.

- **Surfaces:** Most containers are flat white or very light gray (#F8FAFC).
- **Borders:** Use a subtle 1px border (#E2E8F0) to define sections instead of dropshadows.
- **Overlays:** When depth is required (e.g., modals), use a soft, 15% opacity Navy backdrop blur rather than a pure black overlay. 
- **Active States:** Subtle tonal shifts (e.g., a background moving from white to a 2% blue tint) indicate interactivity.

## Shapes

The shape language is **Soft (0.25rem)**. This provides just enough approachable warmth to indicate community focus while maintaining the crisp, structural lines expected of an engineering organization.

- **Primary Radius:** 4px (0.25rem) for buttons, inputs, and small cards.
- **Large Components:** 8px (0.5rem) for main image containers or featured sections.
- **Image Treatment:** Photos should be cropped to precise aspect ratios (16:9 or 1:1) within these rounded containers to keep the "collage" feel organized and intentional.

## Components

### Buttons
- **Primary:** Solid Primary Blue with white Inter Bold text. 4px radius. No shadow.
- **Secondary:** Transparent with a 1px Navy border. High-precision hover state (slight blue tint background).
- **Academic Link:** Text-only with a 2px underline in Innovation Cyan, providing a "citation" feel.

### Cards & Containers
- **Information Cards:** White background, 1px Slate border, 4px corner radius. Headlines in Serif.
- **Collage Grids:** Group multiple images in a strict bento-style grid. Each image has an 8px radius. Use consistent padding (24px) between the images to maintain the organized NGO look.

### Input Fields
- Understated style: 1px Slate-200 border, white background. Labels are small, uppercase Inter. 

### Lists & Citations
- Use bulleted lists with custom geometric icons (small squares or arrows in Primary Blue) rather than standard circles.
- Include a "Reference" component for academic sources or partner logos, styled with reduced opacity and smaller text.