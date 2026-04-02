import{test} from '@playwright/test';
test('screenshot', async({page}) => {
      await page.goto('https://demoblaze.com/');
      await page.screenshot({ path: 'screenshots/home.png'});
    
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('khashvi');
    await page.locator('#loginpassword').fill('May@1905');
   
    await page.getByRole('button', {name: 'Log in'}).screenshot({ path: 'button.png' });  //button ss
    // or
    const loginBtn = page.getByRole('button', { name: 'Log in' });

await loginBtn.screenshot({ path: 'button.png' }); //button ss

await loginBtn.click();
   await page.screenshot({ path: 'screenshots/after-login.png' });
   await page.screenshot({path: 'fullpage.png', fullPage: true}); //full page ss
   await page.screenshot({path: 'visible.png'}); //only visible page ss
  
})

//failure time ss