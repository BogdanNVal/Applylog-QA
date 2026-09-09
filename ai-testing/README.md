# AI-assisted testing

I used AI (Cursor) while testing ApplyLog — not to skip the work, but to get a faster first draft and then check everything myself.

## What I used it for

1. **Test ideas** — asked for a first pass of cases from the README / API surface, then rewrote them after I opened the real UI.
2. **Gaps** — asked what negative or boundary cases I might have missed (future dates, weird filter combos, CSV vs stats).
3. **Bug wording** — turned my rough notes into clearer reports (severity, expected/actual) and pushed back when it overrated severity.
4. **Smoke tests** — got a Playwright outline, then fixed selectors against the live page (`#auth-view`, `#app-dialog`, etc.).

## What I kept for myself

- Deciding pass / fail after I clicked through
- Only filing bugs I could reproduce
- Not pasting AI text I hadn’t checked against the app

## Files

| File | Purpose |
|------|---------|
| [prompts-used.md](prompts-used.md) | Example prompts I actually used |
| [generated-vs-edited.md](generated-vs-edited.md) | AI draft vs what I kept |

## Short note

AI helped me start faster. I still had to run the app, reproduce issues, and decide what mattered.
