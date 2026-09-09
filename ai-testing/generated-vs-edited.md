# Generated vs edited

A couple of times AI gave me something useful but wrong — here’s what I changed.

## Case draft — future applied date

**AI draft (too vague):**

| ID | Title | Steps | Expected |
|----|-------|-------|----------|
| APP-07 | Invalid date | Enter bad date | Error |

**What I kept (in `test-cases/APPLICATIONS.md`):**

| ID | Title | Preconditions | Steps | Expected | Priority | Type |
|----|-------|---------------|-------|----------|----------|------|
| APP-07 | Future applied_on rejected | Dialog open | Set applied date to tomorrow; save | Error (cannot be in the future) | High | Negative |

“Bad date” isn’t something I can re-run the same way. “Tomorrow” is. Also the expected result should match the real rule.

## Defect draft — wrong database in UI hint

**AI draft:**

> Critical security issue: app claims SQLite but uses Postgres — data may be exposed.

**What I filed:**

> Medium / docs: signed-out hint says SQLite while the app uses Postgres. Confusing, not a data leak. See `bug-reports/BUG-001.md`.

AI went straight to “security.” I dialed it down — it’s a wrong hint, not an exploit.

## What I learned

AI is quick at structure. I still own clear steps and honest severity.
