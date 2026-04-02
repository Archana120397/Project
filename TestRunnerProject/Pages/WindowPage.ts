import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../utils/Basetest';

export class WindowPage extends BasePage {

  openNewTabBtn: Locator;
  openMultipleBtn: Locator;
  closeWindowsBtn: Locator;

  constructor(page: Page) {
    super(page);

    this.openNewTabBtn = this.page.getByRole('button', { name: 'Open' }).nth(0);
    this.openMultipleBtn = page.getByRole('button', { name: 'Open Multiple' }).nth(0);
this.closeWindowsBtn = page.getByRole('button', { name: 'Close Windows' }).nth(0);
  }

  async verifyPage(){
    await expect(this.openNewTabBtn).toBeVisible();
  }

  // Actions

  async openNewTabAndSwitch() {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.openNewTabBtn.click()
    ]);

    await newPage.waitForLoadState();
    console.log('Switched to new tab');

    return newPage;
  }

  async openMultipleWindows() {
    const pages: Page[] = [];

    this.page.context().on('page', p => pages.push(p));

    await this.openMultipleBtn.click();

    await this.page.waitForTimeout(2000); // wait for windows

    console.log(`Opened ${pages.length} windows`);

    return pages;
  }

  async closeAllExceptParent() {
    const pages = this.page.context().pages();

    for (const p of pages) {
      if (p !== this.page) {
        await p.close();
      }
    }

    console.log('Closed all child windows');
  }
}