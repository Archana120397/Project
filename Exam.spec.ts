import{test, expect} from '@playwright/test';
test('Saucedemo login', async({page}) => {
    page.pause();
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    // -------------Count number of products---------------------
    const products = await page.locator('.inventory_item');
    const count = await products.count();
  await expect(count).toBe(6);
  await expect(products).toHaveCount(6);
  console.log('count of items:', count);
//   -------------------Print all product names --------------------------------
  const names = await page.locator('.inventory_item_name').allTextContents(); // .inventory_item_name is used to print only names without other info 
  console.log(names); // we can use for each also
  // forEach -- does loop for each name
//   ----------------------Add to cart------------------------------------
  const Prodname = 'Sauce Labs Bike Light';
  await page.locator('.inventory_item').filter({hasText: Prodname}).getByRole('button', {name: 'Add to cart'}).click();
  const Prodname1 = 'Sauce Labs Backpack';
  await page.locator('.inventory_item').filter({hasText: Prodname1}).getByRole('button', {name: 'Add to cart'}).click();
//   -----------------------Validate Cart Itema---------------------------------
const CartItems = await page.locator('.shopping_cart_badge');
await expect(CartItems).toHaveText('2');
console.log(Prodname);
console.log(Prodname);
// // ------------------------sort itms------------------------------------------------------
await page.locator('.product_sort_container').selectOption('lohi'); 
const price = await page.locator('.inventory_item_price').allTextContents();
const pricevalues = price.map(p => parseFloat(p.replace('$', ''))); //replace('$', -- remove $
const sortedvalue = [...pricevalues].sort((a,b) => a-b);
expect(pricevalues).toEqual(sortedvalue);
console.log('Product prices are from low to high:', pricevalues);
// // ----------------------------------------------------------------------------------------
await page.locator('.product_sort_container').selectOption('hilo');
const price1 = await page.locator('.inventory_item_price').allTextContents();
const pricevalue1 = price1.map(page => parseFloat(page.replace('$', '')));
const sortedvalue1 = [...pricevalue1].sort((a,b) => a +b);
expect(pricevalue1).toEqual(sortedvalue1);
console.log(pricevalue1);
})
