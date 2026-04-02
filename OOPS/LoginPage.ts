import { BasePage } from "./BasePage";



export class LoginPage extends BasePage{

    async getTtile(){
        const title = await this.page.title();
        console.log("Login Page: ",title);
        return title;
    }

    async LoginClick(user: string,pass: string ){

        //  this.username = page.locator('input[name="username"]');
        // this.password = page.locator('input[name="password"]');
        // this.loginBtn = page.locator('button[type="submit"]');
        this.page.locator('input[name="username"]').fill(user);
        this.page.locator('input[name="password"]').fill(pass);
        this.page.locator('button[type="submit"]').click();

        //  await this.enterUsername(user);
        // await this.enterPassword(pass);
        // await this.clickLogin();

    }

    

}