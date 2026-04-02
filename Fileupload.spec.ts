import { test,expect } from '@playwright/test';

test('File Upload', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/upload');
  await page.setInputFiles('#file-upload', 'tests/Alert/sample.pdf');
  await page.click('#file-submit');

});
// ------------------------------------------------------------------------
test('upload', async({page}) => {
    await page.goto('https://demoqa.com/upload-download');
    await page.setInputFiles('#uploadFile', 'tests/Alert/sample1.pdf');
  
})
// ---------------------------------------------------------------------------\
test.only('Fileupload', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.setInputFiles('#file-upload','tests/Alert/sample1.pdf');
    await page.click('#file-submit');
})

// --------------------------------------------------------------------
test('Fileupload1', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
   await page.setInputFiles('#singleFileInput','tests/Alert/sample1.pdf');
   
    await expect(page.locator('#singleFileStatus')).toBeVisible();
})
