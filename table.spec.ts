import{expect, test} from '@playwright/test';
test('Practice3', async({page}) => {
    await page.goto("https://www.tutorialspoint.com/selenium/practice/webtables.php");

   //const links = await page.locator("a").all();
///await page.getByLabel('Yes').check();
//await expect(page.getByLabel('Yes')).toBeChecked();  
//await page.getByRole('radio',{name:'Yes'}).check();

const rows = await page.locator('table tbody tr').count();
console.log(rows);
   const column = await page.locator('table tbody tr:first-child td').count();
   console.log(column);

   for(let i=1;i<=rows;i++){
    for(let j=1;j<=column;j++){
      const cell = await page.locator(`table tbody tr:nth-child(${i}) td:nth-child(${j})`).textContent();
        console.log(`Row ${i} Column ${j}`,cell);
    }
   }
    
});