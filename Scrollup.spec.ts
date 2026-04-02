import{chromium, expect} from '@playwright/test';
import {test as base} from '@playwright/test';

const test = base.extend({     //base - predefined keyword
    browser : async ({}, use) => {   //use ke
        const browser = await chromium.launch({
            headless: false,
            slowMo : 5000
        });
        await use(browser);
        await browser.close();
    }
})


test('Practice78', async({page}) => {
    await page.goto("https://www.amazon.in/");
    page.pause(); //debug
        await page.evaluate(()=> window.scrollBy(0,1500)); //down
        await page.evaluate(()=> window.scrollBy(0,-500));//up
        await page.evaluate(()=> window.scrollBy(0, document.body.scrollHeight));//
        await page.evaluate(()=> window.scrollBy(0, 0));
});

        //await page.getByAltText('Zebronics Wireless Keyboard & Mouse Combo, 104 UV-Printed Keys, ₹ Key, 12 Multimedia Keys, Retractable Stand, 4 Button Mouse, 1600 DPI, High Precision, USB Nano Receiver (Companion 304, Grey)').scrollIntoViewIfNeeded();  //stop till here
//await expect(page.locator('#vfb-7-1')).toBeChecked();

test.only('Scroll', async({page}) => {
    page.pause();
    await page.goto('https://www.flipkart.com/');
    await page.getByRole('button', { name: '✕' }).click();
    await page.evaluate(() => window.scrollBy(0,0));
})
  
   
    
