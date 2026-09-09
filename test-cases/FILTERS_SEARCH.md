# Filters & search

Manual cases for status, search, dates, and Clear.

| ID | Title | Preconditions | Steps | Expected | Priority | Type |
|----|-------|---------------|-------|----------|----------|------|
| FIL-01 | Filter by status | ≥2 apps, different statuses | Select Interview | Only interview rows; empty state if none | High | Positive |
| FIL-02 | Filter All statuses | Status filter active | Choose All statuses | Full list restored | Med | Positive |
| FIL-03 | Search by company | Apps with distinct companies | Type company substring | Matching rows only (case-insensitive) | High | Positive |
| FIL-04 | Search by role | Known role text | Search role fragment | Matching rows | High | Positive |
| FIL-05 | Search by location | App with location set | Search location | Matching rows | Med | Positive |
| FIL-06 | Search by notes | App with unique note | Search note token | Matching rows | Med | Positive |
| FIL-07 | Search no matches | Any data | Search nonsense string | Empty: no applications match these filters | High | Negative |
| FIL-08 | Clear filters | Filters + search set | Click Clear | Inputs reset; full list | High | Positive |
| FIL-09 | Combined status + search | Mixed data | Status Interview + search that only matches Applied row | Empty / no match | High | Positive |
| FIL-10 | Date from | Apps on different dates | Set From to exclude older | Only apps on/after From | High | Positive |
| FIL-11 | Date to | Apps on different dates | Set To to exclude newer | Only apps on/before To | High | Positive |
| FIL-12 | Date range inclusive | App exactly on From and To | Set both dates to that day | App included | Med | Boundary |
| FIL-13 | From after To | Two dates inverted | From &gt; To | Empty list or documented behavior | Med | Negative |
| FIL-14 | LIKE special chars in search | App company contains `%` or `_` if possible | Search those chars | Escaped; no crash / wild unintended matches | Low | Security |
