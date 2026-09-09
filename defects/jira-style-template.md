# Bug fields I use (Jira-style)

When I log a bug (here as `bug-reports/BUG-NNN.md`, or later in Jira), I try to fill these so a developer doesn’t have to guess.

## Fields

| Field | What I write |
|-------|----------------|
| **Summary** | One line: what’s wrong and where |
| **Severity** | Blocker / Critical / High / Medium / Low (how bad for the user) |
| **Priority** | Highest / High / Medium / Low (fix order — ask the team) |
| **Status** | Open / In Progress / Fixed / Verified / Won’t Fix |
| **Environment** | Local or demo URL, browser, OS |
| **Build** | Branch / commit / deploy if I know it |
| **Component / Area** | Auth, Applications, Filters, Stats, Export, Security, Docs, A11y |
| **Labels** | e.g. `regression`, `a11y`, `security`, `docs` |
| **Steps to Reproduce** | Numbered, from a clean start |
| **Expected Result** | What should happen |
| **Actual Result** | What happened instead |
| **Attachments** | Screenshots, etc. |
| **Workaround** | If any |

## Severity (simple)

- **Blocker** — can’t continue testing / data loss / real security issue
- **High** — a main flow is broken for many users
- **Medium** — annoying or partial break, usually with a workaround
- **Low** — cosmetic, docs, small UX

## Example summaries

- Auth: duplicate email returns a confusing error
- Applications: future Applied on date is allowed in the picker
- Docs: login hint says SQLite but the app uses Postgres
