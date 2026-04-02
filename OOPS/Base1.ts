import { Page } from '@playwright/test'

export class Base1 {
    page: Page;


constructor(page: Page){
    this.page = page;

}
 async navigate(){
    await this.page.goto('https://demoblaze.com/');
   
  
 }
}