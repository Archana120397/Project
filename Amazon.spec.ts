import{test,expect} from '@playwright/test';
test('Amazon', async({page}) => {
    await page.goto('https://www.amazon.in/');
    await page.getByPlaceholder('Search Amazon.in').fill('iphone');
    await page.locator('#nav-search-submit-button').click();
    const iphone = await page.locator('[data-component-type="s-search-result"]');
    const count = await iphone.count();
    console.log('No. of Iphone:', count);
})
// ------------------------------------------------------
test('Iphone 17pro', async({page}) => {
await page.goto('https://www.amazon.in/');
    await page.getByPlaceholder('Search Amazon.in').fill('iphone 17 pro');
    await page.locator('#nav-search-submit-button').click();
    const iphone17= await page.locator('[data-component-type="s-search-result"]');
    const count17pro = await iphone17.count();
    console.log('Iphone 17 pro:', count17pro);
const prodname = 'iPhone 17 Pro';
const Items = await page.locator('[data-component-type="s-search-result"]').filter({hasText: prodname});
await Items.first().waitFor();
await Items.getByRole('button', {name: /add to cart/i}).click();
const cartcount =  await page.locator('#nav-cart-text-container').count();
console.log('Add to Cart:', cartcount);
})
// ------------------------------------------------------------------
test('suggestion box', async({page}) => {
    await page.goto('https://www.amazon.in/');
     await page.getByPlaceholder('Search Amazon.in').fill('iphone');
   await page.getByLabel('iphone 15 128gb').click();
  const Iphone15 = await page.locator('[data-component-type="s-search-result"]');
const count = await Iphone15.count();
  console.log('Iphone15:', count);
  const product = page.locator('div[data-component-type="s-search-result"]').first();

// await product.locator('button:has-text("Add to Cart")').click();
const cart = await page.locator('#nav-cart-count').count();
console.log('No.of items:', cart);


// const price = await page.locator('.a-price-whole').count();
// console.log(price);

const prices = await page.locator('.a-price-whole').all();
let count2 = 0;

for (const priceElement of prices) {
  const text = await priceElement.textContent();
  const price = Number(text?.replace(/,/g, '').trim());

  if (price === 69900) {
    count2++;
  }
}

console.log('Number of times 69900 appears:', count);
})

test('Amazon scroll example', async ({ page }) => {

  await page.goto('https://www.amazon.in');

  await page.locator('#twotabsearchtextbox').fill('iphone 15 128+gb');

  await page.locator('#nav-search-submit-button').click()

  // Scroll down
 const prices = await page.locator('.a-price-whole').all();
let count = 0;

for (const priceElement of prices) {
  const text = await priceElement.textContent();
  const price = Number(text?.replace(/,/g, '').trim()); 

  if (price === 69900) {
    count++;
  }
}

console.log('Number of times 69900 appears:', count);

});

test.only('Add to cart', async({page}) => {
    page.pause;
await page.goto('https://www.amazon.in/');
await page.getByPlaceholder('Search Amazon.in').fill('iphone 15 128gb');
await page.locator('#nav-search-submit-button').click();
// -------------------count--------------------------------------------
const Phonecount = await page.locator('[data-component-type="s-search-result"]');
const count = await Phonecount.count();
console.log('No of phones:', count);
// ---------------------names-------------------------------------------------
const names = await page.locator('div[data-component-type="s-search-result"] h2 a span');
const count1 = await names.count();
for(let i=0; i<count; i++){
    const name = await names.nth(i).innerText();
    console.log(name);
}
})
