import{test, expect} from '@playwright/test';
test.afterEach( ({}) => {
    console.log('Test Finished');

})
test('Example website', async({page}) => {
    await page.goto('https://www.example.com/');
})

test('GoogleChrome', async({page}) => {
    await page.goto('https://www.google.com/');
})
test('DemoBlaze', async({page}) => {
    await page.goto('https://www.demoblaze.com/');
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('khashvi');
    await page.locator('#loginpassword').fill('May@1905');
    await page.getByRole('button', {name:'Log in'}).click();
})