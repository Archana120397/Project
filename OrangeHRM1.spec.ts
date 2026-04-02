import{test, expect} from '@playwright/test';
test('login', async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.getByPlaceholder('Username').waitFor();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', {name:  'Login' }).click();
    
// -----------------------menu navigation-----------------------------
// await page.getByRole('link', {name: 'PIM'}).click();
// // await page.getByRole('link', {name: 'PIM'}).waitFor();
// // await page.getByRole('link', {name: 'PIM'}).click();
// await page.getByRole('link', {name: 'Maintenance'}).click();
// })
// -------------------------Table Handling--------------------------------
     await page.getByRole('link', {name: 'Admin'}).click();
    const Rows = await page.locator('table tbody tr').count();
    console.log("Rows");
})


