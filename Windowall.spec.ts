import { test, expect } from "@playwright/test";

test("Handle multiple windows in Amazon", async ({ page, context }) => {
  await page.goto("https://www.amazon.in/Blackt-Electrotech-Microwave-Occupancy-Detector/dp/B07FDVY9HR");

  for(let i=0; i<4; i++) {
   // await page.click("#add-to-cart-button");
    await page.waitForTimeout(2000);
   // page.pause();
  //await page.click("//button[@type='submit']");
 await page.click("(//div[@class='sponsored-products-truncator-afo-4  sponsored-products-truncator-truncated'])[2]");

  }

  const allPages = context.pages();

console.log("Total pages: " + allPages.length);

if (allPages[3]) {
  await allPages[3].bringToFront();
  console.log(await allPages[3].title());
//  await allPages[3].waitForTimeout(5000);
}

if (allPages[1]) {
  await allPages[1].bringToFront();
  console.log(await allPages[1].title());
  //await allPages[1].waitForTimeout(5000);
}

if (allPages[4]) {
  await allPages[4].bringToFront();
  console.log(await allPages[4].title());
 // await allPages[4].waitForTimeout(5000);
}
});

// --------------------------------------------------------------------------
import { test, expect } from "@playwright/test";

test("Handle multiple Refridgerator windows in Amazon", async ({ page, context }) => {
  await page.goto("https://www.amazon.in/s?bbn=81107433031&rh=n%3A81107433031%2Cp_85%3A10440599031&_encoding=UTF8&content-id=amzn1.sym.58c90a12-100b-4a2f-8e15-7c06f1abe2be&pd_rd_r=5fd68668-33c7-4ff8-9ab8-d6bd90901724&pd_rd_w=E1SNh&pd_rd_wg=vWnBY&pf_rd_p=58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_r=6KCHSF0GPNBDAGDNTKTV&ref=pd_hp_d_atf_unk");

  for(let i=0; i<4; i++) {
   
    await page.waitForTimeout(2000);
   page.pause();
 
 await page.click('(//div[@class=a-size-base-plus a-spacing-none a-color-base a-text-normal]');

  }

  const allPages = context.pages();

console.log("Total pages: " + allPages.length);

if (allPages[3]) {
  await allPages[3].bringToFront();
  console.log(await allPages[3].title());
//  await allPages[3].waitForTimeout(5000);
}

if (allPages[1]) {
  await allPages[1].bringToFront();
  console.log(await allPages[1].title());
  //await allPages[1].waitForTimeout(5000);
}

if (allPages[4]) {
  await allPages[4].bringToFront();
  console.log(await allPages[4].title());
 // await allPages[4].waitForTimeout(5000);
}
});