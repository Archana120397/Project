import {test, expect} from '@playwright/test';
import {LoginPage} from "./Practice01";


test('Log-in', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();

await loginPage.login("Admin", "admin123");
await page.waitForTimeout(5000);

});


