import{test, expect} from '@playwright/test';
test('Practice1', async({page}) =>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForTimeout(5000);
    await page.locator('input[placeholder="Username"]').fill('Admin');
    await page.locator('input[placeholder="Password"]').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    const logo = await page.getByAltText('client brand banner');
    await expect(logo).toBeVisible();
    
});