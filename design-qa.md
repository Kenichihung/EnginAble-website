# Design QA: Team Location Markers

- Source visual truth: `design-qa-assets/team-locations-source.png`
- Desktop implementation: `design-qa-assets/team-locations-desktop.png`
- Mobile implementation: `design-qa-assets/team-locations-mobile.png`
- Source pixels: 1600 x 1034
- Desktop implementation pixels/CSS viewport: 1600 x 1034 at device scale 1
- Mobile implementation pixels/CSS viewport: 375 x 812 at device scale 1
- State: globe scene during the Jakarta-to-the-world scroll sequence

## Full-view comparison evidence

The existing globe crop, dark-space palette, navigation, type scale, copy, imagery, and primary Jakarta label remain visually unchanged. Six smaller pulsing markers were added around the globe, with Jakarta retaining the original larger dot and persistent pill label. The secondary markers are deliberately quieter so they do not compete with the headline or turn the Indonesia cluster into overlapping labels.

## Focused interaction evidence

A separate crop was not required because every marker is clearly visible in the full desktop and mobile captures. Secondary names were interaction-tested in the browser: hovering Trinidad showed only `Trinidad, Caribbean`, while the persistent Jakarta label faded to prevent overlap. All seven markers rendered on mobile, the Jakarta label remained visible, and the page width stayed at 375 px with no horizontal overflow.

## Required fidelity surfaces

- Typography: unchanged from the source; marker labels reuse the existing Jakarta pill typography.
- Spacing and layout: existing composition is preserved; dots are scaled down except for the primary Jakarta marker.
- Colors and tokens: markers reuse the existing yellow, white border, glow, and pulse treatment.
- Image quality: the existing Earth texture and crop are unchanged.
- Copy: all requested locations are present: Jakarta, Depok, Malang, Kuala Lumpur, Singapore, Chișinău, and Trinidad.

## Findings

No actionable P0, P1, or P2 differences. The additions preserve the original section while extending its meaning from one location to the full member network.

## Comparison history

- Initial implementation: a hovered secondary label could overlap the persistent Jakarta label.
- Fix: added a hover rule that temporarily fades the Jakarta label while another location label is displayed.
- Post-fix evidence: desktop hover inspection showed Trinidad at opacity 1 and all other labels, including Jakarta, at opacity 0.

## Browser verification

- Seven location markers rendered.
- Secondary hover labels work one at a time.
- Mobile viewport has no horizontal overflow.
- Browser console: no warnings or errors.

final result: passed
