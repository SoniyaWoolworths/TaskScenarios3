import { test, expect } from '@playwright/test';
 const allCredentials = [
   { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//AR Team Member
   { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },////AR Team Manager
 ];
 
 const usersToTest = [1, 2];
 const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
 for (const cred of credentials) {
test(`testZARCARD_D_${cred.name}`, async ({ page }) => {
 await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
 await page.getByRole('textbox', { name: 'User' }).click();
   await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
   await page.getByRole('textbox', { name: 'Password' }).click();
   await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
   await page.getByRole('button', { name: 'Log On' }).click();
     await page.getByRole('tab', { name: 'Accounts Receivable' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Masters Trade Debtors menu' }).click();
  await page.locator('iframe[name="application-ZGUI-ZARCARD-iframe"]').contentFrame().getByLabel('Customer master maintenance').getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.locator('iframe[name="application-ZGUI-ZARCARD-iframe"]').contentFrame().getByLabel('Customer master maintenance').getByRole('button', { name: 'Change' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.locator('iframe[name="application-ZGUI-ZARCARD-iframe"]').contentFrame().getByLabel('Customer master maintenance').getByRole('button', { name: 'Display' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.locator('iframe[name="application-ZGUI-ZARCARD-iframe"]').contentFrame().getByLabel('Customer cardholder').getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.locator('iframe[name="application-ZGUI-ZARCARD-iframe"]').contentFrame().getByLabel('Customer cardholder').getByRole('button', { name: 'Change' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.getByRole('link', { name: 'Masters Trade Debtors menu' }).click();
  await page.locator('iframe[name="application-ZGUI-ZARCARD-iframe"]').contentFrame().getByLabel('Customer cardholder').getByRole('button', { name: 'Display' }).click();
  await page.locator('iframe[name="application-ZGUI-ZARCARD-iframe"]').contentFrame().getByRole('button', { name: 'Mass Upload' }).click();
  await page.locator('iframe[name="application-ZGUI-ZARCARD-iframe"]').contentFrame().getByRole('button', { name: 'Credit Management - Mass' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.getByRole('link', { name: 'Masters Trade Debtors menu' }).click();
  await page.locator('iframe[name="application-ZGUI-ZARCARD-iframe"]').contentFrame().getByRole('button', { name: 'Credit Management - Change' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.locator('iframe[name="application-ZGUI-ZARCARD-iframe"]').contentFrame().getByRole('button', { name: 'Credit Management - Display' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.locator('iframe[name="application-ZGUI-ZARCARD-iframe"]').contentFrame().getByRole('button', { name: 'Credit Management - Master' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.getByRole('link', { name: 'Masters Trade Debtors menu' }).click();
  await page.locator('iframe[name="application-ZGUI-ZARCARD-iframe"]').contentFrame().getByRole('button', { name: 'Customer Line Items' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.locator('iframe[name="application-ZGUI-ZARCARD-iframe"]').contentFrame().getByRole('button', { name: 'Customer Balance Display' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
});
 }
 