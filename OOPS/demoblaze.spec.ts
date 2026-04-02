import {test, expect} from '@playwright/test';
import { Base1 } from './Base1';
import { Login1 } from './Login1';
import { CartPage } from './Cartpage';


test ("DemoBlaze_site", async({page}) => {
    
    const login = new Login1(page);
    const cartpage = new CartPage(page);
    const base = new Base1(page);

   await base.navigate();//AAA
   await page.pause();
   await login.Login1("Khashvi", "May@1905");
   await page.waitForTimeout(2000);
   await login.gettitle();
   await page.waitForTimeout(3000);
   await cartpage.verifycartpage();
   await page.waitForTimeout(5000);



} );