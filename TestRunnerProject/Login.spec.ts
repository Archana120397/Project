import { test } from '@playwright/test';
import { LoginPage } from './Pages/LoginPage';
import { TimerUtil } from './utils/TimerUtil';

test.describe('Login Suite @smoke', () => {

  test.only('Valid Login @smoke @high', async ({ page }) => {
    const timer = new TimerUtil();
    timer.start();

    const login = new LoginPage(page);
    await page.goto('/web/index.php/auth/login');

    await login.verifyPage();
    await login.takeStepScreenshot('login-page');

    await login.login('Admin', 'admin123');
    await login.takeStepScreenshot('after-login');

    timer.end('Valid Login');
    console.log('only test.only executed');
  });

  test.skip('Invalid Login @regression', async ({ page }) => {
    // skipped test
  });

});
