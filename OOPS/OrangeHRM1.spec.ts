import test, { chromium } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { DashboardPage } from "./DashboadPage";



test("Open_URL",async ({page})=>{
   
        const login = new  LoginPage(page); 
        const dashboard = new DashboardPage(page);

       await login.navigate();
       await login.LoginClick("Admin", "admin123");
       await page.waitForTimeout(5000);

       await login.getTtile();
       await page.waitForTimeout(5000);

       await dashboard.verifyDashBoard();
       await page.waitForTimeout(5000);



})
