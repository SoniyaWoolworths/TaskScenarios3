import { test, expect } from '@playwright/test';
const allCredentials = [
  { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//AR Team Member
  { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },////AR Team Manager
];

const usersToTest = [1, 2];
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
for (const cred of credentials) {
test(`testF0731A_C_${cred.name}`, async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Accounts Receivable' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Manage G/L Account Master' }).click();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('textbox', { name: 'G/L Account', exact: true }).click();
  await page.getByRole('textbox', { name: 'G/L Account', exact: true }).fill('409002');
  await page.getByRole('textbox', { name: 'G/L Account', exact: true }).press('Enter');
  await page.getByRole('textbox', { name: 'Chart of Accounts' }).click();
  await page.getByRole('textbox', { name: 'Chart of Accounts' }).fill('1000');
  await page.getByRole('textbox', { name: 'Chart of Accounts' }).press('Enter');
  await page.getByRole('form', { name: 'Control' }).getByLabel('Select Options').click();
  await page.getByText('Nonoperating Expense or Income').click();
  await page.getByRole('textbox', { name: 'Account Group' }).click();
  await page.getByRole('textbox', { name: 'Account Group' }).fill('P&L');
  await page.getByRole('textbox', { name: 'Account Group' }).press('Enter');    
  await page.getByRole('form', { name: 'Description in Maintenance' }).getByLabel('Short Text').click();
  await page.getByRole('form', { name: 'Description in Maintenance' }).getByLabel('Short Text').fill('Test');
  await page.getByRole('form', { name: 'Description in Maintenance' }).getByLabel('Short Text').press('Enter');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(10000);
});
}