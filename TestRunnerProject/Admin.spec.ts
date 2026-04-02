import { test } from '@playwright/test';
import { LoginPage } from './Pages/LoginPage';
import { AdminPage } from './Pages/AdminPage';

test.describe('Admin Suite @regression', () => {

  let suiteStart: number;

  //Script stared
  test.beforeAll(() => {
    suiteStart = Date.now();
  });

  test('Admin E2E Flow @high @e2e', async ({ page }) => {

    const login = new LoginPage(page);
    const admin = new AdminPage(page);

    await page.goto('/web/index.php/auth/login');
    await login.login('Admin', 'admin123');

    await page.locator('span:has-text("Admin")').click();

    await admin.verifyPage();
    await admin.searchUser('Admin');
    await admin.clickEditFirstRecord();
    await admin.clickSaveAndValidate();
  });

  
  test.afterAll(() => {
    const totalTime = (Date.now() - suiteStart) / 1000;

    console.log('Total Execution Time: ${totalTime} seconds');

    if (totalTime > 1500) {
      throw new Error('Execution exceeded 1500 seconds');
    } else {
      console.log('Execution within limit');
    }
  });

});