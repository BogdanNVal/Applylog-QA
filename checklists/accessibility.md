# Accessibility checklist

Basic web a11y checks — I’m still learning this, but I want to practice it.

Env: Live demo  Browser: Chromium

| # | Check | Pass | Fail | Notes |
|---|-------|------|------|-------|
| 1 | Page has a meaningful `<title>` | ☒ | ☐ | ApplyLog - job application tracker |
| 2 | Auth tabs expose `role="tab"` / tablist | ☒ | ☐ | Present; see BUG-004 for aria-selected |
| 3 | Form fields have associated `<label for=…>` | ☒ | ☐ | |
| 4 | Errors use `role="alert"` (auth + dialog) | ☒ | ☐ | Saw it on the future-date error |
| 5 | Toast uses `aria-live` / status | ☒ | ☐ | In the HTML |
| 6 | Keyboard: Tab reaches Sign in, fields, submit | ☐ | ☐ | Didn’t fully walk this yet |
| 7 | Keyboard: can open Add application and reach Save/Cancel | ☐ | ☐ | |
| 8 | Dialog focus does not leave user stranded | ☒ | ☐ | Focus went to Company * |
| 9 | Stats section has an accessible name | ☒ | ☐ | aria-label Summary |
| 10 | Search / status / date filters have aria-labels | ☒ | ☐ | |
| 11 | Visible focus outline on interactive controls | ☒ | ☐ | CSS outline on focus |
| 12 | Color alone is not the only status cue (text labels present) | ☒ | ☐ | Status text + badge |
| 13 | Zoom 200% — primary actions still usable | ☐ | ☐ | |
| 14 | Screen reader spot-check (optional): auth error announced | ☐ | ☐ | |

Related: BUG-004 (tabs missing aria-selected).

Signed: Bogdan  Date: 2026-09-09
