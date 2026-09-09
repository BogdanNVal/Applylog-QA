# Stats & CSV export

Manual cases for the summary numbers and CSV download.

| ID | Title | Preconditions | Steps | Expected | Priority | Type |
|----|-------|---------------|-------|----------|----------|------|
| STA-01 | Stats zero on empty account | New account | View stats bar | All counts 0; response rate 0% | High | Positive |
| STA-02 | Total increments on add | Empty account | Add one Applied app | Applications = 1; Waiting = 1 | High | Positive |
| STA-03 | Status buckets | Apps in each status | Refresh | Waiting/Interviews/Offers match counts; Rejected counted in response math | High | Positive |
| STA-04 | Response rate | 2 Applied, 1 Interview, 1 Rejected (total 4) | View Response rate | (4-2)/4 = 50% (answered = total − applied) | High | Positive |
| STA-05 | Response rate with only applied | 3 Applied only | View rate | 0% | Med | Boundary |
| STA-06 | Last 7 days | One app applied today; one applied 10 days ago | View Last 7 days | Counts only the recent one | High | Positive |
| STA-07 | Stats ignore filters | Filters narrow the table | Change status filter | Stats stay global (not filtered) — document actual behavior | Med | Positive |
| EXP-01 | Export CSV all | ≥1 app; no filters | Export CSV | Download `applylog-YYYY-MM-DD.csv` with header + all rows | High | Positive |
| EXP-02 | Export respects status filter | Mixed statuses; filter Offer | Export CSV | Only offer rows in file | High | Positive |
| EXP-03 | Export respects search | Search narrows list | Export CSV | CSV matches filtered set | High | Positive |
| EXP-04 | Export respects date range | Date filters set | Export CSV | Only in-range applied_on values | Med | Positive |
| EXP-05 | CSV columns | Any export | Open file | company, role, status, applied_on, location, link, notes | Med | Positive |
| EXP-06 | Export while signed out | Sign out; hit export URL if possible | Open `/api/applications/export.csv` | 401 / not a silent data dump | High | Security |
