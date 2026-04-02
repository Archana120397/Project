import{expect, test} from '@playwright/test';
test('Practice3', async({page}) => {
    await page.goto("https://leafground.com/alert.xhtml");

    page.once("dialog", async (dialog)=>{
        console.log('Alert: ',dialog.message());
        dialog.accept();
    })
    
  await page.locator("(//span[@class='ui-button-text ui-c'])[1]").click(); //show inspect

//await expect(page.locator('#vfb-7-1')).toBeChecked();
  })

// ---------------------------------------------------------------------

test('Alerts', async({page}) => {
    page.pause;
    await page.goto('https://leafground.com/alert.xhtml');
    page.once("dialog", async (dialog) => {
          console.log('Alert: ',dialog.message());
        dialog.accept();
        })
        await page.locator("(//span[@class='ui-button-text ui-c'])[2]").click();
})

// --------------------------------------------------------------------------
test('Alert01', async({page}) => {
    page.pause
    await page.goto('https://demoqa.com/alerts');
    page.once('dialog', async (dialog) => {
        console.log('Alert: ', dialog.message());
        dialog.accept();
    })
    await page.getByRole('button', {name: 'Click me'}).nth(2).click();
})


// ------------------------------------------------------------------------
test('Alerts02', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.once('dialog', async (dialog) => {
        console.log('Alert: ', dialog.message());
        dialog.accept();
    })
    await page.getByRole('button', { name: 'Click for JS Alert'}).nth(1).click();
})
// -----------------------------------------------------------------------
test.only('Alerts03', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.once('dialog', async (dialog) => {
        console.log('Alert: ', dialog.message());
        dialog.accept();
    })
    await page.getByRole('button', { name: 'Prompt Alert'}).click();
})

// -----------------------------------------------------------------------------
