import { BasePage } from "./BasePage";
import {testdata1} from '../testData/testdata1.json';
import {logindata} from '../Interfaces/logindata.interface';

 const dashboard1 : testdata1 = logindata;
export class DashboardPage extends BasePage{

   

    async verifyDashBoard(){
        await this.page.locator().isVisible();
    }

}