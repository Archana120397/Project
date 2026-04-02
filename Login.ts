import { Page, Locator } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginBtn: Locator;
    readonly dashboardText: Locator;

    constructor(page: Page) { 

        this.page = page;

        this.username = page.locator('input[name="username"]');
        this.password = page.locator('input[name="password"]');
        this.loginBtn = page.locator('button[type="submit"]');

        this.dashboardText = page.locator('h6:has-text("Dashboard")');
    }

    async gotoLoginPage() {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }

    async enterUsername(user: string) {
        await this.username.fill(user);
    }

    async enterPassword(pass: string) {
        await this.password.fill(pass);
    }

    async clickLogin() {
        await this.loginBtn.click();
    }

    async login(user: string, pass: string) {
        await this.enterUsername(user);
        await this.enterPassword(pass);
        await this.clickLogin();
    }

    

}