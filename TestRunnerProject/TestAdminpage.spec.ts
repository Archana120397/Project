import {test,expect}from "@playwright/test"
//mouseHover
test('verify mouse over test',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers");
    await page.locator('.oxd-input oxd-input--active').fill('Admin');
await page.locator('.oxd-select-option', { hasText: 'Enabled' }).click();
await page.getByRole('button', { name: 'Search' }).click();

});