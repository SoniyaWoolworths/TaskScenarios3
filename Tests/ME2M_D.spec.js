import { test, expect } from '@playwright/test';
 const allCredentials = [
   { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//AR Team Member
   { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },////AR Team Manager
 ];
 
 const usersToTest = [1, 2];
 const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
 for (const cred of credentials) {
test(`testME2M_D_${cred.name}`, async ({ page }) => {
 await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
   await page.getByRole('textbox', { name: 'User' }).click();
   await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
   await page.getByRole('textbox', { name: 'Password' }).click();
   await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
   await page.getByRole('button', { name: 'Log On' }).click();
   await page.getByRole('tab', { name: 'Accounts Receivable' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Reporting Review and Analysis' }).click();
await page.getByLabel('Display Purchasing Documents by Article Tile').click();
  await page.locator('iframe[name="application-PurchaseOrder-displayByMaterial-iframe"]').contentFrame().getByRole('textbox', { name: 'Article', exact: true }).click();
  await page.locator('iframe[name="application-PurchaseOrder-displayByMaterial-iframe"]').contentFrame().getByRole('textbox', { name: 'Article', exact: true }).fill('CC00009');
  await page.locator('iframe[name="application-PurchaseOrder-displayByMaterial-iframe"]').contentFrame().getByRole('textbox', { name: 'Article', exact: true }).press('Enter');
  await page.locator('iframe[name="application-PurchaseOrder-displayByMaterial-iframe"]').contentFrame().getByRole('textbox', { name: 'Purchasing Organization' }).click();
  await page.locator('iframe[name="application-PurchaseOrder-displayByMaterial-iframe"]').contentFrame().getByRole('textbox', { name: 'Purchasing Organization' }).fill('1000');
  await page.locator('iframe[name="application-PurchaseOrder-displayByMaterial-iframe"]').contentFrame().getByRole('textbox', { name: 'Purchasing Organization' }).press('Enter');
  const frame = await page.frameLocator('iframe[name="application-PurchaseOrder-displayByMaterial-iframe"]');
  await frame.getByRole('button', { name: 'Execute' }).waitFor({ state: 'visible' });
  await frame.getByRole('button', { name: 'Execute' }).click();
  await page.waitForTimeout(10000);
});
 }