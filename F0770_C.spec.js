import { test, expect } from '@playwright/test';
const allCredentials = [
  { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//P2P PO Raiser - SS
  { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },//P2P PO Raiser Supervisor - SS
  { username: process.env.USERNAME03, password: process.env.PASSWORD03, name: 'User3' },//P2P Processor - SS
  { username: process.env.USERNAME04, password: process.env.PASSWORD04, name: 'User4' },//P2P Payments Supervisor - SS
  { username: process.env.USERNAME05, password: process.env.PASSWORD05, name: 'User5' },//P2P Payments Processor - SS
];

const usersToTest = [3, 4, 5]; 
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
for (const cred of credentials) {
test(`testF0770_${cred.name}`, async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('menuitem', { name: 'Transaction' }).click();
  await page.getByRole('link', { name: 'Manage Automatic Payments Tile' }).click();
  await page.getByRole('button', { name: 'Create Parameter' }).click();
  await page.getByRole('textbox', { name: 'Identification', exact: true }).click();
  await page.getByRole('textbox', { name: 'Identification', exact: true }).fill('SMKT');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  await page.getByRole('textbox', { name: 'Company Code', exact: true }).click();
  await page.getByRole('textbox', { name: 'Company Code', exact: true }).fill('1000');
  await page.getByRole('textbox', { name: 'Company Code', exact: true }).press('Enter');
  await page.getByRole('textbox', { name: 'Next Payment Date' }).click();
  await page.locator('#application-AutomaticPayment-schedulePaymentProposal-component---EditView--nextPaymentDate-icon').click();
  await page.getByLabel('July 31,').getByText('31').click();
  await page.getByRole('textbox', { name: 'Payment Method' }).click();
  await page.getByRole('textbox', { name: 'Payment Method' }).fill('1');
  await page.getByRole('textbox', { name: 'Payment Method' }).press('Enter');
  /*await page.locator('#application-AutomaticPayment-schedulePaymentProposal-component---EditView--paymentMethod-vhi').click();
  await page.getByRole('searchbox', { name: 'Search' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('SMKT');
  await page.getByRole('searchbox', { name: 'Search' }).press('Enter');
  await page.locator('[id="__item21-__clone291-selectMulti"]').click();*/
   //await page.getByRole('button', { name: 'Select' }).click();
  await page.getByRole('textbox', { name: 'Supplier' }).click();
  await page.getByRole('textbox', { name: 'Supplier' }).fill('10101215');
  await page.getByRole('textbox', { name: 'Supplier' }).press('Enter');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(5000);
});
}