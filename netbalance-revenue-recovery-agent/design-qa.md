# Design QA — Guided Demo Story

- Source visual truth: `/Users/deviram/Downloads/image (1).png`
- Implementation screenshot: `/Users/deviram/Desktop/Hackathon/demo-implementation.png`
- Route: `/demo`
- Desktop viewport: 1265 × 712 CSS px at device pixel ratio 2
- Source pixels: 1536 × 1024
- Implementation pixels: 1265 × 712 (browser capture normalized by the browser output)
- State: Step 1, remittance received

## Findings

No actionable P0, P1, or P2 issues remain.

- Typography: the implementation uses the product's existing system type stack, hierarchy, weights, and compact UI scale. The walkthrough title and small interface copy remain readable without clipping.
- Spacing and layout: the reference's nine-scene sequence is preserved as a horizontal chapter rail and one focused stage. The rendered desktop page has no horizontal overflow (`scrollWidth` equals viewport width). The 375 px mobile check also has no horizontal page overflow; the chapter rail scrolls independently.
- Colors and tokens: the implementation deliberately reuses Netbalance's existing blue, green, amber, red, canvas, and border tokens. PRISM and GIDE switch to the dark diagnostic surface shown in the reference.
- Image and icon fidelity: the source is entirely product UI with no photography or custom raster artwork. Matching Phosphor icons are used consistently with the existing application; no image placeholder is present.
- Copy and content: all requested beats are represented: email, case creation, investigation, discrepancy, claim submission, initial stop, PRISM, GIDE, and verified final recovery.

## Full-view comparison evidence

The reference presents all nine states simultaneously in a 3 × 3 explanatory board. The implementation intentionally converts that board into a presenter-friendly walkthrough: the same nine labels are visible at once in the rail, while each state receives a large, readable stage. This is an intentional product adaptation, not a fidelity miss.

## Focused region comparison evidence

The first-state implementation was checked against the source's first panel: sender, timestamp, invoice reference, PDF attachment, and intake framing are all retained. The PRISM/GIDE/final states were also reviewed in code and are represented by dedicated high-contrast diagnostic and success surfaces. No further focused raster comparison was needed because the source contains no custom visual assets.

## Responsive and interaction checks

- Desktop render captured successfully.
- Mobile viewport checked at 375 CSS px; stage width is 345 px and the document card remains within the viewport.
- Chapter buttons, previous/next controls, autoplay control, and disabled endpoint states are present with semantic button labels.
- Browser console: no errors.
- Automated click dispatch in the in-app browser focused controls but did not dispatch the React handler; static state transitions and the production build were verified separately. This browser-driver limitation does not indicate a visible product defect.

## Comparison history

1. Initial implementation: chapter labels imposed intrinsic minimum widths, creating horizontal overflow at the desktop breakpoint.
2. Fix: changed the rail to `repeat(9, minmax(0, 1fr))`, added `min-width: 0`, and constrained/ellipsized chapter labels.
3. Post-fix evidence: desktop `scrollWidth` equals viewport width (1265 px); mobile `scrollWidth` equals viewport width (375 px).

## Follow-up polish

- P3: Add a reduced-motion preference that disables autoplay transitions for users who request it.

final result: passed
