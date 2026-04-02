import { test, expect } from '@playwright/test';

test('Drop Down', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/dropdown');

    const dropdown = await page.locator("#dropdown");

    await dropdown.selectOption({value : '2'}) //label(name), value( value), index(0,1,2) 

    // wait for content to load
    await page.waitForSelector('#dropdown');

    const selectoption = await dropdown.locator('option:checked').allTextContents();
    console.log(selectoption);

    const alloptions = await dropdown.locator('option').allTextContents();
    console.log(alloptions);

   
});
// ----------------------------------------------------------------
test('Dropdown1', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');
  const Drpdwn =  await page.locator('#dropdown');
  await Drpdwn.selectOption({value:'1'});
  const option = await Drpdwn.locator('option:checked').allTextContents();
  console.log(option);
  const AllOptions = await Drpdwn.locator('option').allTextContents();
  console.log(AllOptions);
})
// ------------------------------------------------------
test('Dropdown2', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    const DropDown = await page.locator('#dropdown');
    await DropDown.selectOption({value: '2'});
    const Option = await DropDown.locator('option:checked').allTextContents();
    console.log(Option);
    const AllOptions = await DropDown.locator('option').allTextContents();
    console.log(AllOptions);

})
// -----------------------------------------------------------


test('Select Value dropdown', async ({ page }) => {
    page.pause;
  await page.goto('https://demoqa.com/select-menu');

  await page.locator('#withOptGroup').click();
  await page.locator('text= A root option').click();
  await page.locator('#selectOne').click();
  await page.locator('text= Other').click();
await page.locator('#oldSelectMenu').selectOption('4');
  const selectedcar = await page.locator('#cars').selectOption('Audi');
  console.log(selectedcar);

});
// -------------------------------------------------------------
test.only('Dropdown11', async({page}) => {
    await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select');
    const dropdown = await page.locator('#cars');
    await dropdown.selectOption({label: 'Saab'});
    const selectoption = await dropdown.locator('option:selected').allTextContents();
    console.log(selectoption);
})