import test, { chromium } from "@playwright/test";
//import { LoginPage } from "./Login";



// test("Open_URL",async ({page})=>{
   
//    await page.goto("https://www.greenstechnologys.com");

//    await page.getByText('Online Courses').hover();

//    await page.locator("//span[text()='Software Testing']").click();


// });
test("Open_URL1",async ({page})=>{

       await page.goto("https://demo.guru99.com/test/drag_drop.html");

     const source =  await page.locator("//a[text()='BANK']");
     const target = await page.locator("(//li[@class='placeholder'])[1]");

     await source.waitFor();
     await target.waitFor();

     await source.dragTo(target);



});