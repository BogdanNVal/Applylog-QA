# Auth

Manual cases I wrote for sign up / sign in / sign out on ApplyLog (`main`).

| ID | Title | Preconditions | Steps | Expected | Priority | Type |
|----|-------|---------------|-------|----------|----------|------|
| AUTH-01 | Register with valid data | Not signed in; email unused | 1. Open app 2. Tab **Create account** 3. Valid email + password ≥8 4. Submit | Account created; app view shown; toast “Account created” | High | Positive |
| AUTH-02 | Register rejects short password | On Create account | Password length 7 | Client error: need ≥8 characters; stay on auth view | High | Boundary |
| AUTH-03 | Register rejects empty email | On Create account | Empty email, valid password | Error shown; no account | High | Negative |
| AUTH-04 | Register rejects invalid email format | On Create account | Email `not-an-email`, password ≥8 | API/UI error (422 / validation message) | High | Negative |
| AUTH-05 | Register rejects duplicate email | User already exists | Register again with same email (any casing) | 409-style message: account already exists | High | Negative |
| AUTH-06 | Email is stored lowercased | Register `New@Example.com` | Sign in later with `new@example.com` | Login works; displayed email is lowercase | Med | Positive |
| AUTH-07 | Sign in success | Valid account exists | Sign in tab; correct email/password | App view; user email in top bar; toast “Welcome back” | High | Positive |
| AUTH-08 | Sign in wrong password | Known account | Correct email, wrong password | “Email or password is incorrect”; stay signed out | High | Negative |
| AUTH-09 | Sign in unknown email | On Sign in | Unregistered email | Same generic incorrect-credentials message | High | Negative |
| AUTH-10 | Sign in empty fields | On Sign in | Submit empty | Client message about email + password ≥8 | High | Negative |
| AUTH-11 | Tab switch Sign in / Create account | On auth view | Click each tab | Button label and active tab update; error cleared | Low | Positive |
| AUTH-12 | Sign out | Signed in | Click **Sign out** | Auth view; toast “Signed out”; protected API returns 401 | High | Positive |
| AUTH-13 | Session restores on reload | Signed in | Refresh page | Still in app view without signing in again | High | Positive |
| AUTH-14 | Session cleared after logout + reload | Signed out | Reload | Auth view shown | High | Positive |
| AUTH-15 | Password field is type=password | On auth view | Inspect password input | Masked input; autocomplete switches with tab | Med | Security |
