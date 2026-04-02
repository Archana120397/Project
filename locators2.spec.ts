import{test, expect} from '@playwright/test';
test('Practice3', async({page}) => {
    await page.goto('https://demoblaze.com/');
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('Khashvi');
    await page.locator('#loginpassword').fill('May@1905');
    await page.getByRole('button', {name: 'Log in'}).click();
    const text = await page.getByText('Get in Touch').isVisible(); 
    console.log(text);  //true ---- booelean 
    const text1 = await page.getByText('Get in Touch').textContent();
    console.log(text1); // get in touch ---- textxontent
    const text2 = await page.getByText('About Us', {exact: true}).textContent();
    console.log(text2);
     console.log(await page.title());
})



test('Practice4', async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/login");
   
    await page.getByLabel('Username').fill('tomsmith');
    await page.getByLabel('Password').fill('SuperSecretPassword!');

    await page.getByRole('button', { name: 'Login'}).click();
        // console.log(await page.title());
    await page.getByText('')

     
});


test('Pratice5', async({page}) => {
    await page.goto("https://demoqa.com/text-box");
    await page.getByPlaceholder('Full Name').fill('Khashvi');
    await page.locator('#userEmail').fill('Khas123@example.com');  //id locator
    await page.getByPlaceholder('Current Address').fill('Abcdef');
    await page.locator('#permanentAddress').fill('wxyz');
    await page.getByRole('button', {name: 'Submit'}).click();
    const image = await page.getByAltText('ToolsQA').isVisible();
    console.log(image);
    console.log(await page.title());
    await page.getByText('Check Box').click();
    await page.getByRole('checkbox').click();
    await page.getByText('Radio Button').click();
    await page.getByLabel('Yes').click();
    await page.getByText('Buttons').click();
   await page.getByRole('button', { name: 'Click Me' });
   await page.getByText('Web Tables').click();

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
  
})



test.only('Pratice6', async({page}) => {
    page.pause;
    await page.goto("https://demoqa.com/text-box");
    // --------------------------TextBox--------------------------------------
    await page.getByPlaceholder('Full Name').fill('Khashvi');
    await page.locator('#userEmail').fill('Khas123@example.com');  //id locator
    await page.getByPlaceholder('Current Address').fill('Abcdef');
    await page.locator('#permanentAddress').fill('wxyz');
    await page.getByRole('button', {name: 'Submit'}).click();
    // ----------------------Text------------------------------------
    const image1 = await page.getByAltText('ToolsQA').isVisible();
    console.log(image1);
    // -------------------------Title------------------------------------
    console.log(await page.title());
    // -------------------------Checkbox----------------------------------------
    await page.getByText('Check Box').click();
    await page.getByRole('checkbox').check();
    await expect (page.getByRole('checkbox')).toBeChecked();
     await page.getByRole('checkbox').uncheck();
    // --------------------------Radiobutton-------------------------------------
    await page.getByText('Radio Button').click();
    await page.getByRole('radio', {name: 'impressive'}).click();
    await expect (page.getByRole('radio', {name: 'impressive'})).toBeChecked();
    // ------------------------------Button----------------------------------------
    await page.getByText('Buttons').click();
    await page.getByRole('button', {name: 'Double Click Me'}).dblclick();
    await expect(page.getByText('You have done a double click')).toBeVisible();
    const butt1 = await page.getByText('You have done a double click').isVisible();
    console.log(butt1);
    // ------------------------------------WebTables-------------------------------
    await page.getByText('Web Tables').click();

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
   
  
})
