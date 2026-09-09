# Mobile / responsive checklist

I checked the responsive CSS and the layout on desktop; full device-lab pass still to do. Web only — not a native app.

Env: Live demo  Viewports: CSS `@media` at 860px / 560px + desktop

| # | Check | 375 | 768 | Notes |
|---|-------|-----|-----|-------|
| 1 | Auth card fits without horizontal scroll | ☒ | ☒ | Card max-width 380px |
| 2 | Email/password fields usable | ☐ | ☐ | Not on a real phone yet |
| 3 | Top bar: brand + email + Sign out readable | ☐ | ☐ | Long emails might get tight |
| 4 | Stats wrap / stack without overflow | ☒ | ☒ | 2 cols ≤560, 3 cols ≤860 |
| 5 | Toolbar filters usable | ☐ | ☐ | Stays in a row — might need scroll |
| 6 | Add application button reachable | ☒ | ☒ | |
| 7 | Table scrolls in `.table-wrap` | ☒ | ☒ | overflow-x: auto |
| 8 | Dialog fits; Save/Cancel visible | ☐ | ☐ | grid goes to 1 col under 560 |
| 9 | Touch targets roughly ≥44px | ☐ | ☐ | Buttons look a bit small |
| 10 | No overlapping controls at 375 | ☐ | ☐ | Need a proper device pass |

Signed: Bogdan  Date: 2026-09-09
