# Playwright smoke — ApplyLog

Small Chromium smoke pack I run when ApplyLog is already up (local is best).

## Setup

```bash
cd automation
npm install
npx playwright install chromium
```

## Run

```bash
npm test
```

Another host:

```bash
# Windows PowerShell
$env:BASE_URL="http://127.0.0.1:8000"; npm test

# Live demo (can be slow on cold start)
$env:BASE_URL="https://applylog-or59.onrender.com"; npm test
```

## What it covers

- Auth view loads
- Register
- Add application
- Status filter
- Sign out

This is not meant to replace ApplyLog’s own `tests_e2e/` suite — just a quick green/red check from this QA folder.
