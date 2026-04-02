import{test, expect} from '@playwright/test';

test.beforeEach(async({page}) => {
    page.pause();
    await page.goto('https://www.demoblaze.com/');

})
test('Demo Blaze - url', async({page}) => {
    // await expect(page).toHaveURL('https://www.demoblaze.com')
const url = page.url();
  console.log(url);
} )
test('Demo Blaze Title', async({page}) => {
// await expect(page).toHaveTitle('STORE');
  const title = await page.title();
  console.log(title);
})
test('Login', async({page}) => {
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('khashvi');
    await page.locator('#loginpassword').fill('May@1905');
    await page.getByRole('button', {name:'Log in'}).click();
})
test('count products', async({page}) => {
    const products= await page.locator('.hrefch').allTextContents();
    console.log(products);
    const countproducts = await products.length;
    console.log(countproducts);
})
test('Laptops', async({page}) => {
    await page.locator('#itemc').filter({hasText: 'Laptop'}).click();
    const laptopnames = await page.locator('.hrefch').allTextContents();
    console.log('List of Laptop Names:', laptopnames);
    const laptopcount = await laptopnames.length;
    console.log('No of Laptops:', laptopcount);
})
test('Monitors', async({page}) => {
    await page.locator('#itemc').filter({hasText: 'Monitors'}).click();
    const Monitornames = await page.locator('.hrefch').allTextContents();
    console.log(Monitornames);
    const Monitorcount = await Monitornames.length;
    console.log(Monitorcount);

})