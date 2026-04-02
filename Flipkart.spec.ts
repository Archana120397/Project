import{test, expect} from'@playwright/test';
test('Count no of products', async({page}) => {
    await page.goto('https://www.flipkart.com/');
//    const Itemsincart = await page.locator('.SXucWY').first().textContent();
//    console.log('No of items:', Itemsincart);

   await page.getByPlaceholder('Search for Products, Brands and More').fill('iphone');
   await page.getByLabel('iphone 15 128gb').click();
   const suggestionitems = await page.$$('iphone 15 128gb');
   console.log(suggestionitems);



})