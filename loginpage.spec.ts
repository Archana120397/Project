import{test} from '@playwright/test';
test('Create Account', async({page}) => {
    page.pause();
 await page.goto('https://shop.advanceautoparts.com/');
 await page.locator('//div[contains(text(), "Sign In")]').click();
 await page.locator('button', {hasText: 'Create Account'}).click();
 await page.getByPlaceholder('Enter Mobile Number').fill('8977112397');
 await page.locator('button', {hasText: 'Enter'}).click();

})