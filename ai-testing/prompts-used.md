# Prompts used (examples)

A few prompts I used with Cursor while testing. Paths and secrets left out.

## 1) First draft of manual cases

> ApplyLog is a FastAPI + Postgres job tracker with email/password auth, application CRUD (company, role, link, location, notes, status, applied_on), filters (status, q, from, to), stats, and CSV export. Draft a markdown test-case table for Auth and Applications: ID, Title, Preconditions, Steps, Expected, Priority, Type. Prefer concrete steps over vague ones. Password minimum is 8. Statuses: applied, interview, offer, rejected. applied_on cannot be in the future.

## 2) Gaps after I pasted the HTML

> Here is the signed-out and signed-in HTML for ApplyLog. Which accessibility and UX checks are missing from my AUTH and APPLICATIONS cases? List only additions, as new case rows.

## 3) Is this a real bug?

> I observed: the auth card footer says “Data stays in your own SQLite database” but the README and docker-compose use Postgres. Is that a docs defect or a product bug? Suggest Severity/Priority and a Jira-style summary using fields: Summary, Severity, Priority, Environment, Steps, Expected, Actual.

## 4) Smoke automation outline

> Write a Playwright TypeScript smoke suite against BASE_URL for ApplyLog: load auth, register unique email, add application, filter by status, sign out. Use getByRole / getByLabel where possible. Do not invent selectors — use ids from this HTML snippet: …

## Habit

After every answer I checked the running app (or the source) and deleted anything I couldn’t verify.
