import test, { chromium } from "@playwright/test";
import { LoginPage } from "./Login";



test("Open_URL",async ({page})=>{
   
    const loginpage = new LoginPage(page);
    loginpage.gotoLoginPage
   // loginpage.User();
   loginpage.login("Admin", "Admin123");

})