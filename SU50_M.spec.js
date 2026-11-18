import { test, expect } from '@playwright/test';
const allCredentials = [
  { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//P2P PO Raiser - SS
  { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },//P2P PO Raiser Supervisor - SS
  { username: process.env.USERNAME03, password: process.env.PASSWORD03, name: 'User3' },//P2P Processor - SS
  { username: process.env.USERNAME04, password: process.env.PASSWORD04, name: 'User4' },//P2P Payments Supervisor - SS
  { username: process.env.USERNAME05, password: process.env.PASSWORD05, name: 'User5' },//P2P Payments Processor - SS
];

const usersToTest = [1, 2, 3, 4, 5];
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
for (const cred of credentials) {
test(`testSU50_M_${cred.name}`, async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Accounts Payable' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Generic' }).click();
  await page.getByRole('link', { name: 'Own data SU50 Tile' }).click();
  await page.locator('iframe[name="application-ZGUI-SU50-iframe"]').contentFrame().getByRole('tab', { name: 'Defaults' }).locator('span').click();
  await page.locator('iframe[name="application-ZGUI-SU50-iframe"]').contentFrame().locator('[id="M0:46:1:2B271::2:25-btn"]').click();
  await page.locator('iframe[name="application-ZGUI-SU50-iframe"]').contentFrame().getByRole('option', { name: '1,234,567.89' }).click();
  await page.locator('iframe[name="application-ZGUI-SU50-iframe"]').contentFrame().getByRole('button', { name: 'Save  Emphasized' }).click();
  await page.locator('iframe[name="application-ZGUI-SU50-iframe"]').contentFrame().getByRole('button', { name: 'Exit' }).click();
  await page.waitForTimeout(10000);
});
}