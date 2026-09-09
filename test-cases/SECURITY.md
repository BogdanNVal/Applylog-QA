# Security & isolation

Manual cases so one account can’t see another’s data (and a few basic auth checks).

| ID | Title | Preconditions | Steps | Expected | Priority | Type |
|----|-------|---------------|-------|----------|----------|------|
| SEC-01 | Unauthenticated list blocked | Signed out | `GET /api/applications` | 401 | High | Security |
| SEC-02 | Unauthenticated create blocked | Signed out | `POST /api/applications` | 401 | High | Security |
| SEC-03 | Unauthenticated stats blocked | Signed out | `GET /api/applications/stats` | 401 | High | Security |
| SEC-04 | Health is public | Any | `GET /health` | 200 `{"status":"ok"}` | Low | Positive |
| SEC-05 | User A cannot read User B app | Two accounts; B has app id N | As A: `GET /api/applications/N` | 404 Application not found (no leak) | High | Security |
| SEC-06 | User A cannot update User B app | As above | As A: `PUT /api/applications/N` | 404 | High | Security |
| SEC-07 | User A cannot delete User B app | As above | As A: `DELETE /api/applications/N` | 404 | High | Security |
| SEC-08 | List only returns own rows | Both users have apps | As A: list applications | Only A’s companies/roles | High | Security |
| SEC-09 | Session cookie flags | Signed in | Inspect Set-Cookie for session | HttpOnly present; Secure when HTTPS-only env set | High | Security |
| SEC-10 | Generic login failure message | Known vs unknown email | Fail login both ways | Same “Email or password is incorrect” (no user enumeration) | High | Security |
| SEC-11 | Password not returned in API | Register/login/me | Inspect JSON | No password / hash fields | High | Security |
| SEC-12 | XSS in company/notes display | Create app with `<script>alert(1)</script>` in company | View table / edit | Rendered as text, not executed | High | Security |
| SEC-13 | Auth page hint accuracy | Signed-out view | Read footer hint under form | Must not claim wrong DB technology (see bug reports if SQLite mentioned on Postgres app) | Med | Docs |
