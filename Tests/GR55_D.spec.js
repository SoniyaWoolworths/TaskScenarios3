import { test, expect } from '@playwright/test';
const allCredentials = [
  { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//AR Team Member
  { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },////AR Team Manager
];

const usersToTest = [1, 2];
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
for (const cred of credentials) {
test(`testGR55_D_${cred.name}`, async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  await page.getByRole('button', { name: 'Log On' }).click();
   await page.getByRole('tab', { name: 'Accounts Receivable' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Reporting Financial' }).click();
  await page.getByRole('link', { name: 'GR55 Execute Group Report' }).click();
  await page.locator('iframe[name="application-ZGUI-displayFactSheet-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-ZGUI-displayFactSheet-iframe"]').contentFrame().locator('#SHresultgrid1-mrss-cont-left-Row-1').getByRole('gridcell', { name: 'To select a row, press the' }).locator('div').click();
  await page.locator('iframe[name="application-ZGUI-displayFactSheet-iframe"]').contentFrame().getByText('0B01').click();
  await page.locator('iframe[name="application-ZGUI-displayFactSheet-iframe"]').contentFrame().getByRole('button', { name: 'OK  Emphasized' }).click();
  await page.locator('iframe[name="application-ZGUI-displayFactSheet-iframe"]').contentFrame().getByRole('textbox', { name: 'Report Group' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-displayFactSheet-iframe"]').contentFrame().getByRole('button', { name: 'Execute' }).click();
  await page.locator('iframe[name="application-ZGUI-displayFactSheet-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).click();
  await page.locator('iframe[name="application-ZGUI-displayFactSheet-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).press('ControlOrMeta+a');
  await page.locator('iframe[name="application-ZGUI-displayFactSheet-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).fill('1000');
  await page.locator('iframe[name="application-ZGUI-displayFactSheet-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-displayFactSheet-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year' }).click();
  await page.locator('iframe[name="application-ZGUI-displayFactSheet-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year' }).press('ControlOrMeta+a');
  await page.locator('iframe[name="application-ZGUI-displayFactSheet-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year' }).fill('2026');
  await page.locator('iframe[name="application-ZGUI-displayFactSheet-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-displayFactSheet-iframe"]').contentFrame().getByRole('textbox', { name: 'From Currency' }).click();
  await page.locator('iframe[name="application-ZGUI-displayFactSheet-iframe"]').contentFrame().getByRole('textbox', { name: 'From Currency' }).press('ControlOrMeta+a');
  await page.locator('iframe[name="application-ZGUI-displayFactSheet-iframe"]').contentFrame().getByRole('textbox', { name: 'From Currency' }).fill('AUD');
  await page.locator('iframe[name="application-ZGUI-displayFactSheet-iframe"]').contentFrame().getByRole('textbox', { name: 'From Currency' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-displayFactSheet-iframe"]').contentFrame().getByRole('textbox', { name: 'To Currency' }).click();
  await page.locator('iframe[name="application-ZGUI-displayFactSheet-iframe"]').contentFrame().getByRole('textbox', { name: 'To Currency' }).press('ControlOrMeta+a');
  await page.locator('iframe[name="application-ZGUI-displayFactSheet-iframe"]').contentFrame().getByRole('textbox', { name: 'To Currency' }).fill('AUD');
  await page.locator('iframe[name="application-ZGUI-displayFactSheet-iframe"]').contentFrame().getByRole('textbox', { name: 'To Currency' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-displayFactSheet-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
  await page.waitForTimeout(10000);
});
}