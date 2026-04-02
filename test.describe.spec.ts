import{expect, test} from '@playwright/test';
import { it } from 'node:test';
test.describe('Test Describe', () => {

    test.skip('Validate Title', async({page}) => {
        await page.goto('https://www.google.com/');
        await expect(page).toHaveTitle;
        const title = await page.title();
        console.log(title);
    })
    test.skip('Validate URL', async({page}) => {
        await page.goto('https://www.google.com/');
        await expect(page).toHaveURL;
        const url = await page.url();
        console.log(url);
    })

    test('Saucelogin', async({page}) => {
        await page.goto('https://www.saucedemo.com/');
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', {name: 'Login'}).click();
        const title = await page.title();
        console.log(title);
        const url = await page.url();
        console.log(url);
    })
    test('Count the Items on hp', async({page}) => {
        // await page.goto('https://www.saucedemo.com/inventory.html');
         const products = page.locator('.inventory_item');
      //. to identify and count all product elements
    const count = await products.count();
    console.log('Total Products:', count);
    

    })
})
