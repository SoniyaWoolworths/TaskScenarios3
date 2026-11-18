import { test, expect } from '@playwright/test';
const allCredentials = [
  { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//AR Team Member
  { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },////AR Team Manager
];
const usersToTest = [1, 2]; 
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
for (const cred of credentials) {
test(`testBP_M_${cred.name}`, async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Accounts Receivable' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Maintain Business Partner Tile' }).click();
  await page.locator('iframe[name="application-BusinessPartner-create-iframe"]').contentFrame().getByRole('button', { name: 'Start' }).click();
  await page.locator('iframe[name="application-BusinessPartner-create-iframe"]').contentFrame().getByText('1000188603').dblclick();
  await page.locator('iframe[name="application-BusinessPartner-create-iframe"]').contentFrame().getByRole('button', { name: 'Continue' }).click();
  await page.locator('iframe[name="application-BusinessPartner-create-iframe"]').contentFrame().getByRole('button', { name: 'Business Partner' }).click();
  await page.locator('iframe[name="application-BusinessPartner-create-iframe"]').contentFrame().getByText('Display <-> Change').click();
  await page.locator('iframe[name="application-BusinessPartner-create-iframe"]').contentFrame().getByRole('textbox', { name: 'Name 2' }).click();
  await page.locator('iframe[name="application-BusinessPartner-create-iframe"]').contentFrame().getByRole('textbox', { name: 'Name 2' }).fill('Test');
  await page.locator('iframe[name="application-BusinessPartner-create-iframe"]').contentFrame().getByRole('textbox', { name: 'Name 2' }).press('Enter');
  await page.locator('iframe[name="application-BusinessPartner-create-iframe"]').contentFrame().getByRole('button', { name: 'Save  Emphasized' }).click();
  await page.waitForTimeout(10000);
});
}