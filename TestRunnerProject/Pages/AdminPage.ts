import { BasePage } from '../utils/BasePage';

export class AdminPage extends BasePage {

  async verifyPage(): Promise<void> {
    await this.page.waitForSelector('h6:has-text("Admin")');
  }

  async searchUser(username: string) {

  // Username
  const usernameInput = this.page.locator('.oxd-form input').first();
  await usernameInput.fill(username);

  // Status dropdown
  const drop = this.page.locator('.oxd-select-text').nth(1);
  await drop.click();

  
  await this.page.locator('.oxd-select-dropdown >> text=Enabled').click();

  
  await this.page.getByRole('button', { name: 'Search' }).click();

  // wait for results
  await this.page.locator('.oxd-table-row').first().waitFor();
}

  async clickEditFirstRecord() {
  const firstRow = this.page.locator('div.oxd-table-body div.oxd-table-row').first();

  await firstRow.locator('button').nth(1).click();

  // Wait for Edit page to load
  await this.page.waitForSelector('h6:has-text("Edit User")');
}

  async clickSaveAndValidate() {
  // wait for Save button
  await this.page.waitForSelector('button:has-text("Save")');

  await this.page.click('button:has-text("Save")');

  // wait for success message
  const successMsg = this.page.locator('text=Successfully Updated');

  await successMsg.waitFor({ state: 'visible' });

  console.log('User saved successfully');
}
}