import { Page } from '@playwright/test'
import { BaseData } from '../Interfaces/Basedata.interface';
import testData from '../testData/testData.json';


const baseUrl : BaseData = testData

export class Base1 {
    page: Page;


constructor(page: Page){
    this.page = page;

}
 async navigate(){
    await this.page.goto(baseUrl.url);
   
  
 }
}