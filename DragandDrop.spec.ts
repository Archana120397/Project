import{test, expect} from '@playwright/test';
test('Drag and Drop', async({page}) => {
    page.pause();
    await page.goto('https://jqueryui.com/droppable/');
   const frame = page.frameLocator('.demo-frame');
   const source = frame.locator('#draggable');
   const target = frame.locator('#droppable');
   await source.dragTo(target);
   await expect(target).toHaveText('Dropped!');
})

test('Drag&Drop', async({page}) => {
    await page.goto('https://jqueryui.com/droppable/');
     
     const source = frame.locator('.placeholder');
     const target = frame.locator('#droppable');
     await source.dragTo(target);
     await expect(target).toHaveText('Dropped!');

    })

    test('Drag-Drop', async({page}) => {
        page.pause();
        await page.goto('https://demo.guru99.com/test/drag_drop.html');
    const Bank = await page.locator('#credit2'); //Bank list
    const Sales = await page.locator('#credit1'); //Sales list
    const DebAcc = await page.locator('#bank'); //Ded Acc
    const CedAcc = await page.locator('#loan'); //Ced Acc
    const amount = await page.locator('//li[text()=" 5000"]').first(); // amount -5000
    const amount1 = await page.locator('//li[text()=" 5000"]').last(); 
    const DebaAmt = await page.locator('#amt7');
    const CedAmt = await page.locator('#amt8');
    await Bank.dragTo(DebAcc);
    await Sales.dragTo(CedAcc);
    await amount.dragTo(DebaAmt);
    await amount1.dragTo(CedAmt);

    })

    test.only('DragDrop', async({page}) => {
        await page.goto('https://www.w3schools.com/html/html5_draganddrop.asp');
        const source = page.locator('#img1');
        const target = page.locator('#div2');
        await source.dragTo(target);
        await expect(target).toBeVisible();
        await page.screenshot({ path: 'fullpage.png', fullPage: true });
        await page.screenshot({ path: 'visible.png' });
        await page.screenshot({ path: 'screenshots/home.png' });
    })
   
    test('DemoQA DragDrop', async({page}) => {
        await page.goto('https://demoqa.com/droppable');
        const source = page.locator('#draggable');
        const target = page.locator('#droppable');
         await source.waitFor();
  await target.waitFor();
        await source.dragTo(target, {force: true});
      
    })