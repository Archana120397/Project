import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser } from 'playwright';
import { setPage } from './world';

let browser: Browser;

// Increase timeout (VERY IMPORTANT)
setDefaultTimeout(60 * 1000);

Before(async () => {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const newPage = await context.newPage();
  setPage(newPage);
});

After(async () => {
  if (browser) {
    await browser.close();
  }
});