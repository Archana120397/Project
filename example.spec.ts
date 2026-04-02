import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');


  const title =- await page.title();
  console.log("Page Title: ", title);

 // page.goto()=> Open Url
//page,title() => Get Title
//expect() => Assertion

page.reload(), 
page.goBack(),
page.goForward()

console.log(page.url());

//page.close()

//browser.close()

page.setViewportSize({width : 1280, height: 720});



  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
