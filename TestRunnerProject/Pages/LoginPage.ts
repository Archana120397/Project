import { BasePage } from '../utils/BasePage';

export class LoginPage extends BasePage {
  async verifyPage(): Promise<void> {
    await this.page.waitForSelector('input[name="username"]');
  }

  async login(username: string, password: string) {
    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[name="password"]', password);
    await this.page.click('button[type="submit"]');
  }
}