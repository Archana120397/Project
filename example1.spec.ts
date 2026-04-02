import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  console.log(await page.title());
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('iphone');
  await page.getByRole('button', { name: 'iphone 17 pro', exact: true }).click();
   console.log(await page.title());
});

test.only('Items on Home Page', async({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test = "username"]').fill('problem_user');
    await page.locator('[data-test = "password"]').fill('secret_sauce');
    await page.locator('#login-button').click();
    const products = page.locator('.inventory_item');
    const count = await products.count();
    console.log('Prodcuts List: ', count);
    await expect(products).toHaveCount(6);
    for(let i=0; i<count; i++){
       const name = await products.nth(i).textContent();
    console.log(name);
    }
   
   
})