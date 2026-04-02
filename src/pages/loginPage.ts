import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  username = this.page.locator('input[name="username"]');
  password = this.page.locator('input[name="password"]');
  loginBtn = this.page.locator('button[type="submit"]');
  errorMsg = this.page.locator('.oxd-alert-content-text');

  async navigate() {
    await this.page.goto(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
      {
        waitUntil: 'domcontentloaded',
        timeout: 60000
      }
    );

    // Wait until username field is visible
    await this.username.waitFor({ state: 'visible', timeout: 60000 });
  }

  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();

    // Wait for dashboard page
    await this.page.waitForURL('**/dashboard', { timeout: 60000 });
  }

  async onlyUsername(user: string) {
    await this.username.fill(user);
    await this.loginBtn.click();

    // Wait for error message
    const usernameError = await this.page.locator('text=Required').first().textContent();
  console.log('Username Error:', usernameError);
 
  }

  async onlyPassword(pass: string) {
    await this.password.fill(pass);
    await this.loginBtn.click();

    // Wait for error message
const passwordError = await this.page.locator('text=Required').first().textContent();
  console.log('Password Error:', passwordError);
  }
}