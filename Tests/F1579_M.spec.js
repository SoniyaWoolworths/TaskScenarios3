import { test, expect } from '@playwright/test';
 const allCredentials = [
   { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//AR Team Member
   { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },////AR Team Manager
 ];
 
 const usersToTest = [1, 2];
 const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
 for (const cred of credentials) {
 test(`testF1579_M_${cred.name}`, async ({ page }) => {
 await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
 await page.getByRole('textbox', { name: 'User' }).click();
   await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
   await page.getByRole('textbox', { name: 'Password' }).click();
   await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
   await page.getByRole('button', { name: 'Log On' }).click();
     await page.getByRole('tab', { name: 'Accounts Receivable' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Transaction' }).click();
  await page.getByRole('link', { name: 'Clear G/L Accounts Manual' }).click();
  await page.getByRole('textbox', { name: 'Posted By:' }).click();
  await page.getByRole('textbox', { name: 'Posted By:' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Posted By:' }).fill('06.08.2026');
  await page.getByRole('textbox', { name: 'Posted By:' }).press('Enter');
  await page.locator('[id="application-AccountingDocument-manageManualclearing-component---fullscreen--fin.gl.manualclearing.RowAction-__clone362-icon0"]').click();
  await page.locator('[id="application-AccountingDocument-manageManualclearing-component---GlClearing--gl.addIconToggleButton-__clone581"]').click();
  await page.locator('[id="application-AccountingDocument-manageManualclearing-component---GlClearing--gl.addIconToggleButton-__clone536"]').click();
  await page.pause();
  await page.getByRole('button', { name: 'Post' }).click();
  await page.waitForTimeout(10000);
});
 }

 /*Once the manual clearing is posted,
 click on display 
 click on edit
 click on reference and fill text 
 then click on save
 manually working fine*/