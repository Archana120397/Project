import{test, expect} from '@playwright/test';
test('Grid tables', async({page}) => {
    await page.goto('https://leafground.com/table.xhtml');
    const rows = await page.locator('[role="row"]').count();
    console.log(rows);
    const column = await page.locator('[role="row"]').nth(1).locator('[role="gridcell"]').count();
    console.log(column);

    for(let i=0; i<rows; i++){
        for(let j=0; j<column; j++){
const tabletext = await page.locator('[role="row"]').nth(i).locator('[role="gridcell"]').nth(j).textContent();
console.log(`rows{$(i)} column{$(j)}:`, tabletext)
        }
    }
})

// -------------------------------checkbox--------------------------------
test.only('checkbox', async({page}) => {
    await page.goto('https://leafground.com/checkbox.xhtml');
   await page.getByLabel('Basic').click({ force: true });
})