import { Page } from "@playwright/test";
import {testdata1} from '../testData/testdata1.json';
import {logindata} from '../Interfaces/logindata.interface';

const mainurl : testdata1 = logindata ;
export class BasePage {
    protected page: Page;

    constructor(page: Page){
        this.page=page;
    }

    async navigate(){
        await this.page.goto(mainurl.url);
    }
}