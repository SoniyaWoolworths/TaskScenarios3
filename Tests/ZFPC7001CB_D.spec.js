import { test, expect } from '@playwright/test';
const allCredentials = [
  { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//AR Team Member
  { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },////AR Team Manager
];
const usersToTest = [1, 2]; 
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
for (const cred of credentials) {
test(`testZFPC7001CB_${cred.name}`, async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Accounts Receivable' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Reporting Financial' }).click();
  await page.getByRole('link', { name: 'Profit Centre Profit & Loss Tile' }).click();
   await page.locator('iframe[name="application-ProfitCenter-DisplayWOWPCPLRange-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year Required' }).click();
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWPCPLRange-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year Required' }).fill('2027');
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWPCPLRange-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year Required' }).press('Enter');
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWPCPLRange-iframe"]').contentFrame().getByRole('textbox', { name: 'From Fiscal Period Required' }).click();
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWPCPLRange-iframe"]').contentFrame().getByRole('textbox', { name: 'From Fiscal Period Required' }).fill('001');
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWPCPLRange-iframe"]').contentFrame().getByRole('textbox', { name: 'From Fiscal Period Required' }).press('Enter');
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWPCPLRange-iframe"]').contentFrame().getByRole('textbox', { name: 'To Fiscal Period Required' }).click();
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWPCPLRange-iframe"]').contentFrame().getByRole('textbox', { name: 'To Fiscal Period Required' }).fill('001');
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWPCPLRange-iframe"]').contentFrame().getByRole('textbox', { name: 'To Fiscal Period Required' }).press('Enter');
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWPCPLRange-iframe"]').contentFrame().getByRole('textbox', { name: 'Plan Category Required' }).click();
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWPCPLRange-iframe"]').contentFrame().getByRole('textbox', { name: 'Plan Category Required' }).fill('1');
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWPCPLRange-iframe"]').contentFrame().getByRole('textbox', { name: 'Plan Category Required' }).press('Enter');
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWPCPLRange-iframe"]').contentFrame().getByRole('button', { name: 'Go Emphasized' }).click();
  await page.waitForTimeout(30000);
});
}