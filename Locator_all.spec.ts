import{expect, test} from '@playwright/test';
test('Practice3', async({page}) => {
    await page.goto("https://www.google.com");

   const links = await page.locator("a").all();

   console.log('Links: '+ (await links).length);
   for( const link of (await links) ){
            console.log("Links of all : "+ await link.getAttribute("href"))
   }
  
   
    
})