import { test, expect } from '@playwright/test';
const allCredentials = [
  { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//P2P PO Raiser - SS
  { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },//P2P PO Raiser Supervisor - SS
  { username: process.env.USERNAME03, password: process.env.PASSWORD03, name: 'User3' },//P2P Processor - SS
  { username: process.env.USERNAME04, password: process.env.PASSWORD04, name: 'User4' },//P2P Payments Supervisor - SS
  { username: process.env.USERNAME05, password: process.env.PASSWORD05, name: 'User5' },//P2P Payments Processor - SS
];

const usersToTest = [1, 2, 3]; 
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
for (const cred of credentials) {
test(`testF0335A_${cred.name}`, async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('menuitem', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Site Tile' }).click();
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.getByRole('row', { name: 'Big W Town Hall 0101 Store' }).getByRole('gridcell').nth(3).click();
  await page.getByRole('option', { name: 'Promotions' }).click();
  await page.getByRole('option', { name: 'Product Groups' }).click();
  await page.getByRole('option', { name: 'Assortments' }).click();
  await page.getByRole('option', { name: 'Supplying Sites' }).click();
  await page.getByRole('option', { name: 'Allocation Tables' }).click();
  await page.getByRole('option', { name: 'Purchase Orders' }).click();
  await page.getByRole('option', { name: 'Receiving Points' }).click();
  await page.waitForTimeout(10000);
});
}