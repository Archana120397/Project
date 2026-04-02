import{expect, test} from '@playwright/test';
test('Practice3', async({page}) => {
    await page.goto("https://demo.guru99.com/test/radio.html");

  await page.locator('#vfb-7-1').check();

  await expect(page.locator('#vfb-7-1')).toBeChecked();
  
   
    
})