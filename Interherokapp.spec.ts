import{test,expect} from '@playwright/test';
test('Checkbox', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    await page.locator('#checkbox input').waitFor();


await page.locator('#checkbox input').check();
})