# Applications (CRUD)

Manual cases for adding, editing, and deleting applications.

| ID | Title | Preconditions | Steps | Expected | Priority | Type |
|----|-------|---------------|-------|----------|----------|------|
| APP-01 | Empty state for new account | Fresh account, no apps | Open dashboard | Empty message: no applications yet; stats total 0 | High | Positive |
| APP-02 | Add application — happy path | Signed in | Add application → company, role, applied date today, status Applied → Save | Dialog closes; row appears; total increments | High | Positive |
| APP-03 | Add with all optional fields | Signed in | Fill location, link, notes | Saved and visible on edit; link usable | Med | Positive |
| APP-04 | Company required | Dialog open | Clear company; save | Validation / error; dialog stays open | High | Negative |
| APP-05 | Role required | Dialog open | Clear role; save | Validation / error; dialog stays open | High | Negative |
| APP-06 | Applied on required | Dialog open | Clear applied date; save | Validation / error | High | Negative |
| APP-07 | Future applied_on rejected | Dialog open | Set applied date to tomorrow; save | Error (cannot be in the future) | High | Negative |
| APP-08 | Status options | Dialog open | Choose each status | Applied / Interview / Offer / Rejected all selectable | Med | Positive |
| APP-09 | Cancel closes dialog without save | Dialog open with data | Cancel | Dialog closed; no new row | Med | Positive |
| APP-10 | Edit updates row and stats | One app exists | Edit → change status to Interview → Save | Row shows Interview; interview stat updates | High | Positive |
| APP-11 | Edit dialog title | Existing app | Click Edit | Title “Edit application” | Low | UX |
| APP-12 | Delete requires confirm | Existing app | Click Delete → Cancel in confirm | Row still present | High | Negative |
| APP-13 | Delete removes row | Existing app | Delete → Confirm | Row gone; stats decrease; toast | High | Positive |
| APP-14 | Company/role max length 120 | Dialog open | Paste 121 chars into company | Browser maxlength or API 422 | Med | Boundary |
| APP-15 | Notes max length 2000 | Dialog open | Notes at/over 2000 | maxlength or API 422 | Low | Boundary |
| APP-16 | Whitespace stripped on text fields | Dialog open | Company `  Acme  ` | Stored/displayed as `Acme` | Med | Boundary |
| APP-17 | Job link type=url | Dialog open | Enter non-URL text in link | Browser or server validation behavior noted | Low | Negative |
| APP-18 | List order | Several apps with different dates | View table | Ordered by applied_on DESC, then id | Med | Positive |
