import { test, expect } from '@playwright/test';
const allCredentials = [
  { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//P2P PO Raiser - SS
  { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },//P2P PO Raiser Supervisor - SS
  { username: process.env.USERNAME03, password: process.env.PASSWORD03, name: 'User3' },//P2P Processor - SS
  { username: process.env.USERNAME04, password: process.env.PASSWORD04, name: 'User4' },//P2P Payments Supervisor - SS
  { username: process.env.USERNAME05, password: process.env.PASSWORD05, name: 'User5' },//P2P Payments Processor - SS
];

const usersToTest = [1, 2]; 
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
for (const cred of credentials) {
test(`testIQS1_C_${cred.name}`, async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('CJ20N');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
  await page.getByRole('link', { name: 'Project Builder Tile' }).click();
  await page.locator('iframe[name="application-Project-process-iframe"]').contentFrame().getByRole('button', { name: 'Menu' }).click();
  await page.locator('iframe[name="application-Project-process-iframe"]').contentFrame().getByRole('menuitem', { name: 'New' }).click();
  await page.locator('iframe[name="application-Project-process-iframe"]').contentFrame().getByLabel('New').getByRole('cell', { name: '' }).locator('span').click();
  await page.locator('iframe[name="application-Project-process-iframe"]').contentFrame().locator('#mnu0_0').getByText('Project', { exact: true }).click();
  await page.locator('iframe[name="application-Project-process-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-Project-process-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-Project-process-iframe"]').contentFrame().getByRole('button', { name: 'Go  Emphasized' }).click();
  await page.locator('iframe[name="application-Project-process-iframe"]').contentFrame().locator('#SHresultgrid2-mrss-cont-left-Row-1').getByRole('gridcell', { name: 'To select a row, press the' }).locator('div').click();
  await page.locator('iframe[name="application-Project-process-iframe"]').contentFrame().getByRole('button', { name: 'OK  Emphasized' }).click();
  await page.locator('iframe[name="application-Project-process-iframe"]').contentFrame().getByRole('button', { name: 'Find', exact: true }).click();
  await page.locator('iframe[name="application-Project-process-iframe"]').contentFrame().getByRole('button', { name: 'Copy (Enter)' }).click();
  await page.locator('iframe[name="application-Project-process-iframe"]').contentFrame().locator('[id="M0:46:1:4:1:2B257::0:21-btn"]').click();
  await page.locator('iframe[name="application-Project-process-iframe"]').contentFrame().getByRole('option', { name: 'IT - Capital Project', exact: true }).click();
  await page.locator('iframe[name="application-Project-process-iframe"]').contentFrame().getByRole('textbox', { name: 'Project Profile Required' }).press('Enter');
  await page.locator('iframe[name="application-Project-process-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-Project-process-iframe"]').contentFrame().locator('#SHresultgrid1-mrss-cont-left-Row-1').getByRole('gridcell', { name: 'To select a row, press the' }).locator('div').click();
  await page.locator('iframe[name="application-Project-process-iframe"]').contentFrame().getByRole('button', { name: 'OK  Emphasized' }).click();
  await page.locator('iframe[name="application-Project-process-iframe"]').contentFrame().getByRole('textbox', { name: 'Profit Center Required' }).click();
  await page.locator('iframe[name="application-Project-process-iframe"]').contentFrame().getByRole('textbox', { name: 'Profit Center Required' }).fill('6600');
  await page.locator('iframe[name="application-Project-process-iframe"]').contentFrame().getByRole('textbox', { name: 'Profit Center Required' }).press('Enter');
  await page.locator('iframe[name="application-Project-process-iframe"]').contentFrame().getByRole('button', { name: 'Save  Emphasized' }).click();
  await page.waitForTimeout(10000);
});
}