# UAT guide — ApplyLog

How I’d help a non-technical person check that ApplyLog does what they need before a release. I drive the session; they say if it passes for them.

## Before we start

- Agree which URL we’re using (local or demo). Mention the demo can take a minute to wake up.
- Use a throwaway email they’re ok with.
- Share the scenario list below and leave space for their notes.

## What I try to do as QA

- Don’t argue for the product — write down what they struggle with.
- Ask what “good” looks like before we click.
- Log problems with enough detail for a developer (`defects/jira-style-template.md`).

## Scenarios (~30–40 minutes)

| # | What they care about | What they do | Pass if |
|---|----------------------|--------------|---------|
| 1 | I can get an account | Create account with their email | Empty tracker opens |
| 2 | I can log an application | Add company, role, date applied | Row shows up |
| 3 | I can update progress | Change status to Interview / Offer / Rejected | Status and numbers look right to them |
| 4 | I can find an old one | Search or filter by status | They find it without endless scrolling |
| 5 | I can take data offline | Export CSV | Spreadsheet has the rows they expect |
| 6 | I can leave safely | Sign out | Apps are gone until they sign in again |

## After

- Say what passed, what failed, what’s a nice-to-have.
- File bugs for fails; nice-to-haves go on a backlog list.
- Ask them which fails would block a release.
