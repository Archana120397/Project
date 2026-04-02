import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
  const logo = await page.getByAltText('Rediff.com logo');
  await expect(logo).toBeVisible();
 


})