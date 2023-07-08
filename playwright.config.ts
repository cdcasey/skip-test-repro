import { PlaywrightTestConfig, defineConfig } from '@playwright/test';

const baseURL = 'http://localhost:3000/';
// const baseURL = process.env.NX_APP_ORIGIN || 'http://localhost:3000/'
console.log({ baseURL });

export const baseConfig: PlaywrightTestConfig = {
  retries: 3,
  maxFailures: 2,
  workers: 1,
  timeout: 45000,
  use: {
    baseURL,
  },
  reporter: [
    [process.env.CI ? 'github' : 'list'],
    // ['junit', { outputFile: '../../dist/playwright/reports/test-results.xml' }],
    // ['json', { outputFile: '../../dist/playwright/reports/test-results.json' }],
  ],
};

export default defineConfig({
  retries: 3,
  maxFailures: 2,
  workers: 1,
  timeout: 45000,
  use: {
    baseURL,
  },
  reporter: [
    [process.env.CI ? 'github' : 'list'],
    // ['junit', { outputFile: '../../dist/playwright/reports/test-results.xml' }],
    // ['json', { outputFile: '../../dist/playwright/reports/test-results.json' }],
  ],
});
