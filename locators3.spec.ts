import{expect, test} from '@playwright/test';
test('Practice3', async({page}) => {
    await page.goto("https://demoblaze.com");
  
    const image = await page.getByAltText('Third slide');

    await expect(image).toBeVisible();
    
})
test('Practice4', async({page}) => {
    await page.goto("https://www.facebook.com");
  
await page.getByLabel('Email address or mobile number').fill('John');

  //  await expect(image).toBeVisible();
    
})