import{test, expect} from '@playwright/test';
test('Login functionality', async({page}) => {
    page.pause();
    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/web-form.html');
    await page.getByLabel('Text input').fill('Test123');
    await page.getByLabel('Password').fill('Password@123');
    await page.getByLabel('Textarea').fill('Playwright');
    await page.locator('select').selectOption({label: 'One'});
    await page.getByPlaceholder('Type to search...').fill('New York');
    await page.locator('input[type="file"]').setInputFiles('tests/Alert/sample1.pdf');
    await page.getByText('Default Radio').check();
    await page.locator('input[type="color"]').fill('#ffffff'); // colour code from online

    await page.getByLabel('Date').fill('03/29/2026');
    await page.locator('input[type="range"]').fill('2');
    //  await page.getByRole('button', {name: 'Submit'}).click();
     const slider = await page.locator('input[type="range"]');
     await slider.click();
     await slider.press('ArrowLeft')
  })

test('https://demoqa.com/', async({page}) => {
    page.pause();
    await page.goto('https://demoqa.com/text-box');
    await page.getByPlaceholder('Full Name').fill('Khashvi');
    await page.getByPlaceholder('name@example.com').fill('Khashvi@example.com');
    await page.getByPlaceholder('Current Address').fill('Abc');
    await page.locator('#permanentAddress').fill('Xyz');
    await page.locator('#submit').click();
    // ---------------------checkbox----------------------------
    await page.getByText('Check box').click();
    await page.getByRole('checkbox').check();
    await expect(page.getByRole('checkbox')).toBeChecked();
    await page.getByRole('checkbox').uncheck();
    // --------------------------Radiobutton----------------------------
    await page.getByText('Radio Button').click();
    await page.locator('#yesRadio').click();
    // ---------------------------Button------------------------------------
    await page.getByText('Buttons').click();
    await page.locator('#TnNat').click();
})
    //---------------------rows-----------------------------------------
    test.only('Rows', async({page}) => {
    await page.goto('https://demoqa.com/webtables');
    const rows = await page.locator('table tbody tr').allTextContents();
    console.log(rows);
   
    


})