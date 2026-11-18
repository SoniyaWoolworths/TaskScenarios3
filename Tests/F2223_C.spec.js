import { test, expect } from '@playwright/test';
 const allCredentials = [
   { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//AR Team Member
   { uisername: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },////AR Team Manager
 ];
 
 const usersToTest = [1, 2];
 const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
 for (const cred of credentials) {
test(`testF2223_C_${cred.name}`, async ({ page }) => {
 await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
 await page.getByRole('textbox', { name: 'User' }).click();
   await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
   await page.getByRole('textbox', { name: 'Password' }).click();
   await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
   await page.getByRole('button', { name: 'Log On' }).click();
     await page.getByRole('tab', { name: 'Accounts Receivable' }).getByLabel('More').click();
await page.getByRole('menuitem', { name: 'Transaction' }).click();
  await page.getByRole('link', { name: 'Reset Cleared Items Tile' }).click();
  await page.getByRole('textbox', { name: 'Company Code:' }).click();
  await page.getByRole('textbox', { name: 'Company Code:' }).fill('1000');
  await page.getByRole('textbox', { name: 'Company Code:' }).press('Enter');
  await page.getByRole('textbox', { name: 'Fiscal Year of Clearing' }).click();
  await page.getByRole('textbox', { name: 'Fiscal Year of Clearing' }).fill('=2027');
  await page.getByRole('textbox', { name: 'Fiscal Year of Clearing' }).press('Enter');
  await page.locator('[id="fin.acc.clearing.reset::sap.suite.ui.generic.template.ListReport.view.ListReport::C_ClearingDocument--template:::ListReportTable:::ColumnListItem-__clone358-imgNav"]').getByTitle('Navigation').click();
await page.getByRole('gridcell', { name: '1402199869' }).getByLabel('1402199869').click();
await page.getByRole('button', { name: 'Reset and Reverse' }).click();
await page.getByRole('textbox', { name: 'Posting Date' }).click();
await page.getByRole('textbox', { name: 'Posting Date' }).fill('13.10.2026');
await page.getByRole('textbox', { name: 'Posting Date' }).press('Enter');
await page.getByRole('button', { name: 'OK' }).click();
await page.waitForTimeout(10000);
});
}