  import { test, expect } from '@playwright/test';
   const allCredentials = [
     { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//AR Team Member
     { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },////AR Team Manager
   ];
   
   const usersToTest = [1, 2];
   const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
   for (const cred of credentials) {
  test(`testF2366_C_${cred.name}`, async ({ page }) => {
   await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
   await page.getByRole('textbox', { name: 'User' }).click();
     await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
     await page.getByRole('textbox', { name: 'Password' }).click();
     await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Accounts Receivable' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Transaction' }).click();
  await page.getByRole('link', { name: 'Schedule Accounts Receivable' }).click();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: 'Step' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Step' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'Company Code' }).click();
  await page.getByRole('textbox', { name: 'Company Code' }).fill('1000');
  await page.getByRole('textbox', { name: 'Company Code' }).press('Enter');
  await page.getByRole('textbox', { name: 'Fiscal Year' }).click();
  await page.getByRole('textbox', { name: 'Fiscal Year' }).fill('2027');
  await page.getByRole('textbox', { name: 'Fiscal Year' }).press('Enter');
  await page.getByRole('textbox', { name: 'Posting Date' }).click();
  await page.getByRole('textbox', { name: 'Posting Date' }).fill('16.10.2026');
  await page.getByRole('textbox', { name: 'Posting Date' }).press('Enter');
  await page.getByRole('button', { name: 'Schedule' }).click();
});
   }