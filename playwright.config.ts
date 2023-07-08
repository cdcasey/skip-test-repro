import { defineConfig } from '@playwright/test';

const baseURL = process.env.NX_APP_ORIGIN || 'http://localhost:3000/';

export default defineConfig({
  retries: 3,
  maxFailures: 2,
  workers: 1,
  timeout: 45000,
  use: {
    baseURL,
  },
});
