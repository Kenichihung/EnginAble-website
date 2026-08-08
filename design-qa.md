# Design QA: Geographic marker alignment

- Source visual truth: `design-qa-assets/location-alignment-source.jpg`
- Desktop implementation: `design-qa-assets/location-alignment-desktop.png`
- Mobile implementation: `design-qa-assets/location-alignment-mobile.png`
- Source capture: 2558 x 1720 pixels; normalized proportionally to 1280 x 860 for desktop comparison
- Desktop implementation: 1280 x 837 CSS pixels at device scale 1
- Mobile implementation: 375 x 812 CSS pixels at device scale 1
- State: Earth fully revealed during the Jakarta-to-the-world scroll sequence

## Full-view comparison evidence

The source capture exposed a P1 geographic mismatch: the texture was cropped to Asia, but the Moldova and Trinidad markers were still rendered inside that crop on unrelated land or ocean. The corrected implementation widens the same Earth texture to the longitude span from Trinidad through Indonesia and calculates every marker from latitude and longitude. Typography, navigation, colors, imagery, glass treatment, and surrounding section layout remain unchanged. A darker upper-atmosphere overlay preserves headline contrast against the newly visible Arctic region.

## Focused marker evidence

- Trinidad is placed beside Trinidad and Venezuela at the western edge.
- Chișinău is placed at Moldova, northwest of the Black Sea.
- Kuala Lumpur and Singapore are placed on the Malay Peninsula.
- Jakarta and Depok share the Jakarta-area position on western Java; Malang appears farther east on Java.
- The primary Jakarta label opens inward so it stays readable near the eastern edge.

## Responsive and interaction evidence

- Desktop: all seven markers render within the visible geographic span.
- Mobile: the globe uses a 100vmin diameter so both western and eastern edge markers remain visible; page width remains 375 px with no horizontal overflow.
- Drag test: after a 105 CSS-pixel drag, the marker layer and texture returned together with a matched 67.97 px intermediate displacement, then settled to the 65% home position and zero marker offset.
- Secondary hover labels remain one-at-a-time; Jakarta remains the default persistent label.
- Browser console: no warnings or errors.

## Required fidelity surfaces

- Fonts and typography: unchanged; headline and marker-label styles match the existing design.
- Spacing and layout rhythm: desktop section geometry is unchanged; mobile Earth sizing was reduced only enough to keep the complete mapped span on-screen.
- Colors and visual tokens: existing navy, blue atmosphere, yellow marker, white border, and glow tokens are preserved.
- Image quality and asset fidelity: the existing 4096 x 2048 Earth texture is reused without regeneration or replacement.
- Copy and content: all seven requested member locations remain present with their original labels.

## Findings

No remaining actionable P0, P1, or P2 findings.

## Comparison history

- Initial P1: rough percentage coordinates placed Chișinău and Trinidad on unrelated parts of an Asia-only crop.
- Fix: switched to latitude/longitude projection, widened and centered the map span, synchronized markers with drag displacement, and added inward-facing labels for eastern markers.
- Initial mobile P1: the wider geographic span pushed the Indonesia markers beyond the viewport on the previous oversized mobile globe.
- Fix: fit the globe to 100vmin on mobile and adjusted its reveal translation so the full mapped span remains visible.
- Post-fix evidence: desktop and mobile captures show all locations on their corresponding geography with no horizontal overflow or console errors.

final result: passed
