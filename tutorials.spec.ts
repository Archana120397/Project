import { test, expect, chromium } from '@playwright/test';

test('has title', async ({}) =>{

  const browser = await chromium.launch({
    headless: false,
    slowMo : 5000
  })
  const page = await browser.newPage();
  
  await  page.goto("https://www.tutorialspoint.com/selenium/practice/text-box.php");
 const namefield = await page.locator('#fullname');
namefield.fill('Archana');
console.log(await namefield.isVisible());
await namefield.clear();
await namefield.pressSequentially('TestUser');
console.log("Text: ",await namefield.inputValue());
await page.getByPlaceholder('name@example.com').fill('Test@gmail.com');

await page.getByRole('button', { name: 'Submit' }).click();



});
