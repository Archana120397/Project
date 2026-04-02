import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { page } from '../support/world';

let loginPage: LoginPage;

Given('user is on login page', async function () {
  console.log("Opening login page...");
  loginPage = new LoginPage(page);
  await loginPage.navigate();
});

When('user enters valid username and password', async function () {
  await loginPage.login('Admin', 'admin123');
});

When('user enters only username', async function () {
  await loginPage.onlyUsername('Admin');
});

When('user enters only password', async function () {
  await loginPage.onlyPassword('admin123');
});

Then('user should navigate to dashboard', async function () {
  await expect(page).toHaveURL(/dashboard/);
});

Then('error message should be displayed', async function () {
  await expect(loginPage.errorMsg).toBeVisible();
});