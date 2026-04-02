import { Page } from '@playwright/test';
import * as fs from 'fs';

export abstract class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  abstract verifyPage(): Promise<void>;

  async takeStepScreenshot(stepName: string) {
    const dir = 'screenshots';

    // create folder if not exists
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    await this.page.screenshot({
      path: `${dir}/${stepName}-${Date.now()}.png`
    });
  }
}