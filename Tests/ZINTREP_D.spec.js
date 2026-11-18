import { test, expect } from '@playwright/test';
 const allCredentials = [
   { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//AR Team Member
   { uisername: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },////AR Team Manager
 ];
 
 const usersToTest = [1, 2];
 const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
 for (const cred of credentials) {
test(`testZINTREP_D_${cred.name}`, async ({ page }) => {
 await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
 await page.getByRole('textbox', { name: 'User' }).click();
   await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
   await page.getByRole('textbox', { name: 'Password' }).click();
   await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
   await page.getByRole('button', { name: 'Log On' }).click();
     await page.getByRole('tab', { name: 'Accounts Receivable' }).getByLabel('More').click();
await page.getByRole('menuitem', { name: 'Transaction' }).click();
  await page.getByRole('link', { name: 'Interface Report ZINTREP Tile' }).click();
  await page.locator('iframe[name="application-ZGUI-zintrep-iframe"]').contentFrame().getByRole('textbox', { name: 'Interface Identifier' }).fill('WPAYFEES');
  await page.locator('iframe[name="application-ZGUI-zintrep-iframe"]').contentFrame().getByRole('textbox', { name: 'Layout' }).click();
  await page.locator('iframe[name="application-ZGUI-zintrep-iframe"]').contentFrame().getByRole('textbox', { name: 'Layout' }).fill('/ZXLREP');
  await page.locator('iframe[name="application-ZGUI-zintrep-iframe"]').contentFrame().getByRole('textbox', { name: 'Start Date' }).click();
  await page.locator('iframe[name="application-ZGUI-zintrep-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-ZGUI-zintrep-iframe"]').contentFrame().getByLabel('14 October 2026 Wednesday').getByText('14').click();
  //await page.locator('iframe[name="application-ZGUI-zintrep-iframe"]').contentFrame().getByRole('button', { name: 'Continue' }).click();
  await page.locator('iframe[name="application-ZGUI-zintrep-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
  await page.waitForTimeout(5000);
});
 }