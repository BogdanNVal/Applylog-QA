# Smoke checklist

Quick check before a demo or after a deploy. About 10 minutes.

Env: Live demo https://applylog-or59.onrender.com/  Build: main (Sep 2026)

| # | Check | Pass | Fail | Notes |
|---|-------|------|------|-------|
| 1 | Auth view loads (brand + Sign in / Create account) | ☒ | ☐ | Cold start ~30–60s on Render |
| 2 | Can create a new account (password ≥8) | ☒ | ☐ | `qa.portfolio.20260909@example.com` |
| 3 | Empty dashboard + stats at 0 | ☒ | ☐ | |
| 4 | Add application (company, role, today) | ☒ | ☐ | Northwind Labs / Junior QA Engineer |
| 5 | Edit status → stats update | ☐ | ☐ | Skipped this pass |
| 6 | Filter by status works | ☐ | ☐ | Skipped this pass |
| 7 | Search narrows the list | ☐ | ☐ | Skipped this pass |
| 8 | Export CSV downloads | ☐ | ☐ | Skipped this pass |
| 9 | Sign out returns to auth view | ☒ | ☐ | |
| 10 | `npm test` in `automation/` is green | ☒ | ☐ | Green on live demo after I fixed the logout assert |

Bugs from this pass: BUG-001…007.

Signed: Bogdan  Date: 2026-09-09
