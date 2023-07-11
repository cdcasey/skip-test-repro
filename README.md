# Playwright test fails and then the rest of the tests are skipped

UPDATE: This was because I had `maxFailures: 2` in the config. Not sure how/why I put it there to begin with, but it made it such that after there were two test failures in the whole suit, the test run would be stopped.

docs: https://playwright.dev/docs/test-parallel#limit-failures-and-fail-fast

This is an example of how one failing test causes the rest to be skipped.

I assume I am using fixtures correctly, although there are plans to soon use storage state to manage logins.

To run:

```
npm i
npm start
npm run e2e
```
