import{test, expect} from '@playwright/test';
test('DemoQA', async({page}) => {
    await page.goto('https://demoqa.com/text-box');
    await page.getByPlaceholder('Full Name').fill('Khashvi');
    await page.getByPlaceholder('name@example.com').fill('Khas123@example.com');
    await page.getByPlaceholder('Current Address').fill('Abcdef');
    await page.locator('#permanentAddress').fill('wxyz');
    await page.getByRole('button', {name: 'Submit'}).click();
    // --------------Checkbox → select specific options-------------------
    await page.getByText('Check Box').click();
    await page.getByRole('checkbox').check();
    await expect(page.getByRole('checkbox')).toBeChecked();
     await page.getByRole('checkbox').uncheck();
    //  -----------------------Radio button----------------------------
     await page.getByText('Radio Button').click();
     await page.locator('#yesRadio').check();
     await expect(page.locator('#yesRadio')).toBeChecked();
 await page.locator('#impressiveRadio').check();
})
// ----------------Alerts------------------------------
test('DemoQA Alerts', async({page}) => {
await page.goto('https://demoqa.com/alerts');
page.once('dialog', async(dialog) => {
    console.log('Alert: ', dialog.message());
    dialog.dismiss();
        })
        await page.getByRole('button', {name: 'Click Me'}).nth(2).click();
})
// ------------------------Drag---------------------------------------
test('Draganddrop', async({page}) => {
    await page.goto('https://demoqa.com/dragabble');
    const source = await page.locator('#dragBox');
    const target = await page.locator('#draggableExample-tabpane-simple');
    await source.dragTo(target);
})
// ----------------------Drop----------------------------------------------
test('drop', async({page}) => {
    await page.goto('https://demoqa.com/droppable');
    const dragfrom = await page.locator('#draggable');
    const dropat = await page.locator('#droppable');
         await dragfrom.waitFor();
         await dropat.waitFor();
        await dragfrom.dragTo(dropat, {force: true});

})
// ---------------------buttons--------------------------------
test('Buttons', async({page}) => {
    await page.goto('https://demoqa.com/buttons');
    const text = await page.getByRole('button', {name: 'Double Click Me'}).textContent();
    console.log(text);
    
})
// -----------------------rows-------------------------------------
test('Rows', async({page}) => {
    await page.goto('https://demoqa.com/webtables');
    const rows = await page.locator('Table tbody tr').allTextContents();
    console.log(rows);
     const rowcount = await page.locator('Table tbody tr').count();
     console.log(rowcount);
})
// -------------------------columns-----------------------------------------
test('columns', async({page}) => {
    await page.goto('https://demoqa.com/webtables');
    const column = await page.locator('Table tbody tr:nth-child(2) td').allTextContents();
    console.log(column);
    const columncount = await page.locator('Table tbody tr:nth-child(2) td').count();
    console.log(columncount);
})
// --------------------rows and column----------------------------------------------
test('rows-columns', async({page}) => {
    await page.goto('https://demoqa.com/webtables');
    const row = await page.locator('table tbody tr').count();
    console.log(row);
    const column = await page.locator('table tbody tr:nth-child(2) td').count();
    console.log(column);
   
    for(let i=0; i<=row; i++){
        for(let j=0; j<=column; j++) {
            const webtable = await page.locator(`table tbody tr:nth-child(${i}) td:nth-child(${j})`).allTextContents();
            console.log(`rows(${i}) column(${j}):`, webtable);
        }
    }

})
// ----------------------ss-----------------------------------
test.only('ss', async({page}) => {
    await page.goto('https://demoqa.com/webtables');
    await page.screenshot({path: 'screenshots/home.png'});
    await page.screenshot({path: 'screenshots/visible.png'});
    await page.getByRole('button', {name: 'Add'}).screenshot({path: 'button.png'});
})