import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  timeout: 30_000,
  retries: 0,
  reporter: [['list'], ['html']],
  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'on',
    screenshot: 'on',
    video: 'retain-on-failure'

  },
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] }
    },
  ]
});



