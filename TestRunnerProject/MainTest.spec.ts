// tests/window.spec.ts
import { test } from '@playwright/test';
import { WindowPage } from './Pages/WindowPage';

test.describe('LeafGround Window Tests @smoke', () => {

  test('Handle new tab @smoke', async ({ page }) => {
    const windowPage = new WindowPage(page);

    await windowPage.navigate('https://leafground.com/window.xhtml');
    await windowPage.verifyPage();

    await test.step('Open new tab and switch', async () => {
      const newTab = await windowPage.openNewTabAndSwitch();
      await newTab.screenshot({ path: 'screenshots/new-tab.png' });
    });

    await windowPage.takeScreenshot('main-page');
  });

  test('Handle multiple windows @regression', async ({ page }) => {
    const windowPage = new WindowPage(page);

    await windowPage.navigate('https://leafground.com/window.xhtml');

    await test.step('Open multiple windows', async () => {
      const pages = await windowPage.openMultipleWindows();
      console.log(`Total pages: ${pages.length}`);
    });

    await test.step('Close all child windows', async () => {
      await windowPage.closeAllExceptParent();
    });

    await windowPage.takeScreenshot('after-close');
  });

  test.skip('Skip example @smoke', async ({ page }) => {
    const windowPage = new WindowPage(page);
    await windowPage.navigate('https://leafground.com/window.xhtml');
  });

  test.only('High priority window test @critical', async ({ page }) => {
    const windowPage = new WindowPage(page);

    await windowPage.navigate('https://leafground.com/window.xhtml');

    const newTab = await windowPage.openNewTabAndSwitch();
    await newTab.screenshot({ path: 'screenshots/high-priority.png' });
  });

});