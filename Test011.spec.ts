import{test, expect} from '@playwright/test';
test.only('Launch Google browser', async({page}) => {
    await page.goto('https://www.google.com/');
    await page.screenshot({ path: 'homepage.png' });
});


test('Print the items', async({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.locator('#login-button').click();
    const products = page.locator('.inventory_item'); //. to identify and count all product elements
    const count = await products.count();
    console.log('Total products:', count);
    await expect(products).toHaveCount(6);
    
})

test('Swiggy', async({page}) => {
   
      await page.goto('https://www.swiggy.com/');


  await page.locator('input[type="text"]').fill('biryani');
  await page.keyboard.press('Enter');
  const dishes = page.locator('h3');

  const count = await restaurants.count();
  console.log('Restaurant Count:', count);

  // Print names
  for (let i = 0; i < count; i++) {
    const name = await restaurants.nth(i).textContent();
    console.log(name);
  }
    
})