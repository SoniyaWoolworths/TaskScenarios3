import { test, expect } from '@playwright/test';
 const allCredentials = [
   { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//AR Team Member
   { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },////AR Team Manager
 ];
 
 const usersToTest = [1];
 const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
 for (const cred of credentials) {
 test(`testZFIUPLOAD_NEW_C_${cred.name}`, async ({ page }) => {
 await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
 await page.getByRole('textbox', { name: 'User' }).click();
   await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
   await page.getByRole('textbox', { name: 'Password' }).click();
   await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
   await page.getByRole('button', { name: 'Log On' }).click();
     await page.getByRole('tab', { name: 'Accounts Receivable' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Transaction' }).click();
  await page.getByRole('link', { name: 'Mass FI documents upload facility ZFIUPLOAD_NEW Tile' }).click();
  await page.locator('iframe[name="application-ZGUI-ZFIUPLOAD_NEW-iframe"]').contentFrame().getByRole('textbox', { name: 'Presentation server file' }).click();
  await page.locator('iframe[name="application-ZGUI-ZFIUPLOAD_NEW-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-ZGUI-ZFIUPLOAD_NEW-iframe"]').contentFrame().getByRole('button', { name: 'OK' }).click();
  await page.locator('iframe[name="application-ZGUI-ZFIUPLOAD_NEW-iframe"]').contentFrame().locator('input[type="file"]').setInputFiles('testdata/ZFIUploadNew.txt');
  await page.locator('iframe[name="application-ZGUI-ZFIUPLOAD_NEW-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
  await page.waitForTimeout(10000);
});
}