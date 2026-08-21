import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

const LT_USERNAME = process.env.LT_USERNAME;
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY;

function getWsEndpoint(browserName: string) {
  const capabilities = {
    browserName,
    browserVersion: 'latest',
    'LT:Options': {
      platform: 'Windows 10',
      build: 'Playwright 101 Assignment',
      name: `Playwright Test - ${browserName}`,
      user: LT_USERNAME,
      accessKey: LT_ACCESS_KEY,
      network: true,
      video: true,
      console: true,
    },
  };
  return `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
    JSON.stringify(capabilities)
  )}`;
}

export default defineConfig({
  testDir: './tests',
  workers: 6,
  projects: [
    {
      name: 'Chrome',
      use: { connectOptions: { wsEndpoint: getWsEndpoint('Chrome') } },
    },
    {
      name: 'MicrosoftEdge',
      use: { connectOptions: { wsEndpoint: getWsEndpoint('MicrosoftEdge') } },
    },
  ],
});