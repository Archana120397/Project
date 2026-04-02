import { Page } from "@playwright/test";
import { Base1 } from "./Base1";


export class Login1 extends Base1 {

    constructor(page: Page) {
        super(page);   //super - identify particular parent class.
    }
  

async Login1(user: string, pass: string)  {
    await this.page.locator("#login2").click();   // this - present function or class

    await this.page.waitForSelector("#loginusername");
 await this.page.locator("#loginusername").fill(user);
 await this.page.locator("#loginpassword").fill(pass);
 await this.page.locator('button[onclick="logIn()"]').click();
   }

    async gettitle() {
    const title = await this.page.title();
    console.log("Page title is: ", title);
    
   }



   }

