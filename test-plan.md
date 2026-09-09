# Test plan — ApplyLog

| | |
|--|--|
| App | ApplyLog (job application tracker) |
| Build | Current `main` on GitHub / local + live demo |
| Base URL | http://127.0.0.1:8000 (local) or https://applylog-or59.onrender.com/ |
| Tester | Bogdan |

## Goal

Make sure the important stuff works: sign up / sign in / sign out, add-edit-delete applications, filter and search, stats, CSV export, and that users only see their own data. Write bugs clearly so a developer can fix them. Keep a small Playwright smoke pack I can re-run.

## In scope

- Email + password register / login / logout / session restore via `/api/auth/me`
- Client-side auth validation (empty fields, password &lt; 8 chars)
- Application CRUD (company, role, link, location, notes, status, applied date)
- Status values: `applied`, `interview`, `offer`, `rejected`
- Filters: status, applied-from / applied-to, full-text search (`q`)
- Clear filters; empty states
- Summary stats (totals, response rate, last 7 days)
- CSV export respecting current filters
- Ownership / isolation (API 401 unauthenticated, 404 for other user’s id)
- Delete confirm / cancel in the UI
- Basic accessibility and responsive checks (see dedicated checklists)
- Smoke automation in `automation/`

## Out of scope

- Load / performance (beyond “Render took a minute to wake up”)
- Full security pen test (I still filed obvious UI/docs issues)
- Every browser (automation is Chromium only)
- Pixel-perfect UI polish
- Native mobile apps (responsive web only)
- Payments / emails (not in the app)

## How I tested

- Wrote manual cases in `test-cases/`
- Clicked around and filed what I found in `bug-reports/`
- Filled smoke + regression checklists; also a11y and mobile ones
- Ran Playwright smoke under `automation/`
- Used AI to draft cases, then I edited them after looking at the real UI (`ai-testing/`)

## Test data

| Role | Account | Notes |
|------|---------|-------|
| New user | Unique email each run | e.g. `qa.tester+{timestamp}@example.com` / `testpass1` (≥8 chars) |
| Second user | Another unique email | For isolation checks via API or two browser profiles |
| Sample apps | Varied status + dates | Company/role pairs; one with notes containing search terms |

Optional seed (inside ApplyLog repo):

```bash
python scripts/seed_demo.py --email you@example.com --reset
```

## Entry / exit

**Start when:** the app is up (Compose + uvicorn, or the demo finished waking), I can open the auth page and register.

**Done when:** I have a plan + cases, bugs filed, checklists filled (including a11y/mobile), AI notes written, and `npm test` in `automation/` is green (local or live demo).

## Risks I watched

| Risk | Why it matters | What I did |
|------|----------------|------------|
| Render cold start | Looks broken at first | Wait / retry; noted on smoke checklist |
| Secret key changes on restart | Everyone gets logged out | Prefer a fixed `APPLYLOG_SECRET_KEY` locally |
| Future `applied_on` | Confusing errors / bad dates | Cases + BUG-002/003 |
| Filter + export mismatch | Wrong CSV for someone | Explicit export cases |
| Ownership bugs | One user sees another’s apps | SECURITY cases |
| Auth hint says SQLite | I almost believed the wrong DB | BUG-001 |
| UTC default date | “Today” can be wrong | BUG-005 |

Still open on current main / live demo: **BUG-001…007** (see `bug-reports/`).

## Tools

Browser (Chromium), Playwright, Network tab / curl for a few API checks, Cursor AI for first drafts (`ai-testing/`).
