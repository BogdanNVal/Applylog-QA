# Regression checklist

I use this after fixes or bigger changes. Case IDs live in `test-cases/`.

## Auth

| # | Check | Cases | Pass | Fail |
|---|-------|-------|------|------|
| 1 | Register validation (empty, bad email, short pwd) | AUTH-02–04 | ☐ | ☐ |
| 2 | Duplicate email blocked | AUTH-05 | ☐ | ☐ |
| 3 | Login success / wrong password | AUTH-07–08 | ☐ | ☐ |
| 4 | Logout + session restore | AUTH-12–14 | ☐ | ☐ |

## Applications

| # | Check | Cases | Pass | Fail |
|---|-------|-------|------|------|
| 5 | Add happy path + required fields | APP-02–06 | ☐ | ☐ |
| 6 | Future applied_on rejected | APP-07 | ☐ | ☐ |
| 7 | Edit + delete confirm/cancel | APP-10–13 | ☐ | ☐ |

## Filters / stats / export

| # | Check | Cases | Pass | Fail |
|---|-------|-------|------|------|
| 8 | Status + search + clear | FIL-01–08 | ☐ | ☐ |
| 9 | Date from/to | FIL-10–12 | ☐ | ☐ |
| 10 | Stats maths (response rate, last 7 days) | STA-02–06 | ☐ | ☐ |
| 11 | CSV respects filters | EXP-01–04 | ☐ | ☐ |

## Security

| # | Check | Cases | Pass | Fail |
|---|-------|-------|------|------|
| 12 | 401 when signed out | SEC-01–03 | ☐ | ☐ |
| 13 | Cross-user 404 isolation | SEC-05–08 | ☐ | ☐ |
| 14 | Stored XSS not executed in table | SEC-12 | ☐ | ☐ |

Signed: _____________  Date: _____________
