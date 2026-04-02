import{test, expect} from '@playwright/test';
test('Handling Rows', async({page}) => {
    await page.goto('https://leafground.com/table.xhtml;jsessionid=node01uutg358p6ccxywokqgvel2p713983693.node0');
    const rows = await page.locator('tbody tr');
    const count = await rows.count();
    console.log('No of Rows:', count);
//    --------------------------------------------
    const allRows = await rows.allTextContents();
console.log(allRows); //or using for loop
 for(let i=0; i<count; i++) {
        const text = await rows.nth(i).textContent();
        console.log(text);
    }
})
// --------------------------------------------------------
test('Handling Columns', async({page}) => {
       await page.goto('https://leafground.com/table.xhtml;jsessionid=node01uutg358p6ccxywokqgvel2p713983693.node0');
       const columns = await page.locator('tbody tr td');
       const count = await columns.count();
       console.log('no of columns:', count);

       for(let i=0; i<count; i++) {
        const text1 = await columns.nth(i).textContent();
        console.log(text1);
       }
    })

    test.only('No of rows & columns', async({page}) => {
            await page.goto('https://leafground.com/table.xhtml;jsessionid=node01uutg358p6ccxywokqgvel2p713983693.node0');
           const rows = await page.locator('table tbody tr').count();
           console.log(rows);
           const column = await page.locator('table tbody tr:nth-child(2) td').count();
           console.log(column);
          
           for(let i=1; i<=rows; i++){
            for(let j=1; j<=column; j++) {
            const texts = await page.locator(`table tbody tr:nth-child(${i}) td:nth-child(${j}`).textContent();
            console.log(`rows(${i}) column(${j}):`, texts);
            }
           }

    })