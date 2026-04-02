import{test, expect} from '@playwright/test';
test.skip('Saucedemo', async({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.locator('#login-button').click();

   


  const url = page.url();

  console.log(url);
   await expect(page.locator('.inventory_item')).toBeVisible();
  const tit = await page.title();
  console.log(tit);
  const products = await page.locator('.inventory_item');
  const count = await products.count();
  console.log('No of products:', count);
  const names = await page.locator('.inventory_item_name').allTextContents();
  console.log(names);
})
// ---------------------------------------------------------------------
test('amazon', async({page}) => {
    page.pause;
    await page.goto('https://www.amazon.in/');
    await page.getByPlaceholder('Search Amazon.in').fill('iphone');
    await page.locator('#nav-search-submit-button').click();
   await page.locator('[data-component-type="s-search-result"]').first().waitFor();

  const products = page.locator('[data-component-type="s-search-result"] h2 span');

  const count = await products.count();

  for (let i = 0; i < count; i++) {
    const name = await products.nth(i).innerText();

    // ✅ Filter only iPhone names
    if (name.toLowerCase().includes('iphone')) {
      console.log(name);
    }
  }
})
// ---------------------------------------------------------------------------
test('Sauce demo:', async({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.locator('#login-button').click();
    // const prodname = page.locator('.inventory_item',{hasText:'Sauce Labs Backpack'});
//     await page.locator('#add-to-cart-sauce-labs-backpack').click();
//     await page.locator('#add-to-cart-sauce-labs-bike-light').click();
//     const cartitems=await page.locator('.shopping_cart_badge').innerText();
//     console.log('No of items:', cartitems);
//     await page.locator('#remove-sauce-labs-backpack').click();

//    const cartitems1=await page.locator('.shopping_cart_badge').innerText();
//     console.log('No of items:', cartitems1);
    await page.locator('.product_sort_container').selectOption('lohi');
    const price = await page.locator('.inventory_item_price').allTextContents();
    console.log('low to high:', price);

})
// --------------------------------------------------------
test('myntra', async({page}) => {
    await page.goto('https://www.flipkart.com/');
    await page.getByPlaceholder('Search for Products, Brands and More').fill('laptop');
    await page.keyboard.press('Enter');
    await page.locator('#COMH9499ZGGSBUHQ').click();
  
    
   
})

// -----------------------------------------------------
test('saucedemo', async({page}) => {
    page.pause;
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', {name: 'Login'}).click();
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.locator('#add-to-cart-sauce-labs-bike-light').click();
     await page.locator('#add-to-cart-sauce-labs-bolt-t-shirt').click();
       await page.locator('#add-to-cart-sauce-labs-fleece-jacket').click();
       await page.locator('#add-to-cart-sauce-labs-onesie').click();
       await page.locator('#add-to-cart-test.allthethings()-t-shirt-(red)').click();
     const cartcount = await page.locator('shopping_cart_badge').count();
     await expect(cartcount).toBe(6);
     console.log(cartcount);
await page.locator('#remove-test.allthethings()-t-shirt-(red)').click();
     const cartcount1 = await page.locator('shopping_cart_badge').count();
     await expect(cartcount1).toBe(5);
     console.log(cartcount1);
})

test('Add all products and validate cart', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // ✅ Get all "Add to cart" buttons
  const addButtons = page.locator('button:has-text("Add to cart")');

  const count = await addButtons.count();

  // ✅ Loop to add all products
  for (let i = 0; i < count; i++) {
    await addButtons.first().click();
  }

  // ✅ Validate cart count
  await expect(page.locator('.shopping_cart_badge')).toHaveText(String(count));

  // ✅ Remove one product
  await page.locator('button:has-text("Remove")').first().click();

  // ✅ Validate updated count
  await expect(page.locator('.shopping_cart_badge')).toHaveText(String(count - 1));

});

test('Add all products and validate cart1', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  
await page.locator('#add-to-cart-sauce-labs-backpack').click();
 await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
 
 await page.locator('#remove-sauce-labs-backpack').click();
 const cart = await expect(page.locator('.shopping_cart_link')).not.toBeVisible();
 console.log('Empty Crt:', cart);

})

test.only('Add all product names ', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

const productnames = await page.locator('.inventory_item_name ').allTextContents();
console.log('List of products:', productnames);
const productcount = await page.locator('.inventory_item_name ').count();
await expect(productnames.length).toBe(productcount);
console.log(productcount);
})
 
  