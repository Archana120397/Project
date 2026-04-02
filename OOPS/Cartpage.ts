import { Page } from "@playwright/test";
import { Base1 } from "./Base1"; 
import {CartPage1} from "../Interfaces/Cartpage1.interface";
import locators12 from "../Locators/Locators1.json";

const cartbut : CartPage1 = locators12;

export class CartPage extends Base1 {

    constructor(page: Page) {
        super(page);
    }
 
    async verifycartpage() {
        await this.page.locator(cartbut.cartbutton).click();
    }

}