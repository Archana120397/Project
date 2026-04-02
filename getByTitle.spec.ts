import{expect, test} from '@playwright/test';
test('Practice3', async({page}) => {
    await page.goto("https://www.tutorialspoint.com/selenium/practice/radio-button.php");

   //const links = await page.locator("a").all();
await page.getByLabel('Yes').check();
//await expect(page.getByLabel('Yes')).toBeChecked();  
//await page.getByRole('radio',{name:'Yes'}).click();
   
    
});