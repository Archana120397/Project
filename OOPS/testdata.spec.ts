import { test, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { DashboardPage } from './DashboadPage';
import testdata1 from '../testData/testdata1.json';
import { logindata } from '../Interfaces/logindata.interface';
import { Dashboard } from '../Interfaces/Dashboard.interface';
import { Login1 } from './Login1';

const mainurl: logindata = testdata1;

test('OrangeHRM-Dashboard', async ({ page }) => {

  const login = new Login1(page);
  const dashboardText = new DashboardPage(page);

  await login.Login1(mainurl.username, mainurl.password);
  await dashboardText.verifyDashBoard();

});