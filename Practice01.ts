import { Locator, Page } from "@playwright/test";


export class LoginPage { //class-Locator,methods,actions for a page
 readonly page: Page; //page:name, type:Page, readonly cannot be changed.
 readonly username: Locator;
     readonly password: Locator;
     readonly loginBtn: Locator;
    
 
 constructor(page: Page) {
    this.page = page;
    this.username = page.locator("//input[@placeholder='Username']");
    this.password = page.locator("//input[@placeholder='Password']");
    this.loginBtn = page.locator(" //button[normalize-space()='Login']");
 }
 async navigate() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
 }
 async enterusername(user:string) {
    await this.username.fill(user);
 }
  async enterpassword(user:string) {
    await this.password.fill(user);
 }
  async clickloginbtn(user:string) {
    await this.loginBtn.click();
 }
 async login(user:string, pass: string) {
 
 await this.username.fill(user);
 await this.password.fill(pass);
 await this.loginBtn.click();
 await this.page.waitForTimeout(5000);

 }
}