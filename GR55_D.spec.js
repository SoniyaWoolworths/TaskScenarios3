import { test, expect } from '@playwright/test';
const allCredentials = [
  { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//P2P PO Raiser - SS
  { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },//P2P PO Raiser Supervisor - SS
  { username: process.env.USERNAME03, password: process.env.PASSWORD03, name: 'User3' },//P2P Processor - SS
  { username: process.env.USERNAME04, password: process.env.PASSWORD04, name: 'User4' },//P2P Payments Supervisor - SS
  { username: process.env.USERNAME05, password: process.env.PASSWORD05, name: 'User5' },//P2P Payments Processor - SS
];

const usersToTest = [3]; 
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
for (const cred of credentials) {
test(`testGR55_${cred.name}`, async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('menuitem', { name: 'Reporting - Financial' }).click();
  await page.getByRole('link', { name: 'GR55 Execute Group Report' }).click();
  await page.locator('iframe[name="application-ZGUI-displayFactSheet-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-ZGUI-displayFactSheet-iframe"]').contentFrame().locator('#SHresultgrid1-mrss-cont-left-Row-1').getByRole('gridcell', { name: 'To select a row, press the' }).locator('div').click();
  await page.locator('iframe[name="application-ZGUI-displayFactSheet-iframe"]').contentFrame().getByRole('button', { name: 'OK  Emphasized' }).click();
  await page.locator('iframe[name="application-ZGUI-displayFactSheet-iframe"]').contentFrame().getByRole('textbox', { name: 'Report Group' }).click();
  await page.locator('iframe[name="application-ZGUI-displayFactSheet-iframe"]').contentFrame().getByRole('button', { name: 'Execute' }).click();
  await page.locator('iframe[name="application-ZGUI-displayFactSheet-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
  await page.waitForTimeout(10000);
});
}