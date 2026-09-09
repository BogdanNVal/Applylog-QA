# ApplyLog — QA notes

I tested [ApplyLog](https://github.com/BogdanNVal/Applylog), a job application tracker (FastAPI + Postgres + plain HTML/JS). You can create an account, log applications, filter/search them, check stats, and export a CSV.

This repo is my QA work on that app — not the app itself. ApplyLog lives in its own repository. Here I keep the plan, test cases, bugs I found, checklists, a small Playwright smoke pack, plus notes on accessibility, mobile, UAT, and how I used AI while testing.

## Folder layout

| Path | What it is |
|------|------------|
| [test-plan.md](test-plan.md) | What I covered / skipped |
| [test-cases/](test-cases/) | Manual cases by area |
| [bug-reports/](bug-reports/) | Bugs I logged |
| [checklists/](checklists/) | Smoke, regression, a11y, mobile |
| [automation/](automation/) | Playwright smoke (TypeScript) |
| [ai-testing/](ai-testing/) | How I used AI to draft cases and think about defects |
| [uat/](uat/) | How I’d walk a business user through a short UAT |
| [defects/](defects/) | Fields I use when writing a bug (Jira-style) |

## App under test

- Source: https://github.com/BogdanNVal/Applylog
- Local URL: http://127.0.0.1:8000
- Live demo: https://applylog-or59.onrender.com/ (Render free tier — first load after idle can take 30–60s)
- Stack: FastAPI, Postgres, session cookie auth, static HTML/CSS/JS

## Run the app

Clone ApplyLog somewhere else, then from that repo:

```bash
docker compose up -d
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements-dev.txt
python -c "import secrets; print(secrets.token_hex(32))"
```

Put the secret in `APPLYLOG_SECRET_KEY` (see ApplyLog `.env.example`). Default `APPLYLOG_DATABASE_URL` matches Compose (`127.0.0.1:5433`).

```bash
uvicorn app.main:app --reload
```

Open http://127.0.0.1:8000. API docs: http://127.0.0.1:8000/docs.

## Run the smoke tests

App should be up first (local is nicer than the sleepy demo).

```bash
cd automation
npm install
npx playwright install chromium
npm test
```

Optional: `BASE_URL=http://127.0.0.1:8000 npm test`

## What I covered

- Manual testing — plan, cases, and checklists I actually ran
- Defect logging — steps, expected vs actual, severity (see `bug-reports/` and the Jira-style template)
- AI-assisted testing — drafts I asked for, then edited myself (`ai-testing/`)
- Accessibility and mobile interest — dedicated checklists
- UAT — a short guide for guiding a non-technical user
- A bit of automation — Playwright smoke when the build is up

## Note on ApplyLog’s own tests

ApplyLog already has API tests and browser tests in its own repo. That’s fine — I still wanted a small smoke pack here that I can run against a running build without digging through the app’s CI setup.
