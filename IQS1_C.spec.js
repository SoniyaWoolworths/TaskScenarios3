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
test(`testIQS1_C_${cred.name}`, async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('menuitem', { name: 'Office' }).click();
  await page.getByRole('link', { name: 'Create Notification Extended' }).click();
  await page.locator('iframe[name="application-GenericNotification-createExtendedView-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-GenericNotification-createExtendedView-iframe"]').contentFrame().locator('#SHresultgrid2-mrss-cont-left-Row-1').getByRole('gridcell', { name: 'To select a row, press the' }).locator('div').click();
  //await page.locator('iframe[name="application-GenericNotification-createExtendedView-iframe"]').contentFrame().getByLabel('Search and Select').locator('div').filter({ hasText: '<div id="uC6-container" class' }).first().click();
  await page.locator('iframe[name="application-GenericNotification-createExtendedView-iframe"]').contentFrame().getByRole('button', { name: 'OK  Emphasized' }).click();
  await page.locator('iframe[name="application-GenericNotification-createExtendedView-iframe"]').contentFrame().getByRole('textbox', { name: 'Notification Type Required' }).press('Enter');
  await page.locator('iframe[name="application-GenericNotification-createExtendedView-iframe"]').contentFrame().getByRole('textbox', { name: 'Description Required' }).click();
  await page.locator('iframe[name="application-GenericNotification-createExtendedView-iframe"]').contentFrame().getByRole('textbox', { name: 'Description Required' }).fill('TEST12');
  await page.locator('iframe[name="application-GenericNotification-createExtendedView-iframe"]').contentFrame().getByRole('textbox', { name: 'Description Required' }).press('Enter');
  await page.locator('iframe[name="application-GenericNotification-createExtendedView-iframe"]').contentFrame().getByRole('tab', { name: 'Costs' }).locator('span').click();
  await page.locator('iframe[name="application-GenericNotification-createExtendedView-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-GenericNotification-createExtendedView-iframe"]').contentFrame().getByRole('gridcell', { name: 'Row selected. To deselect the' }).locator('div').click();
  await page.locator('iframe[name="application-GenericNotification-createExtendedView-iframe"]').contentFrame().getByRole('button', { name: 'OK  Emphasized' }).click();
  await page.locator('iframe[name="application-GenericNotification-createExtendedView-iframe"]').contentFrame().getByRole('button', { name: 'Continue' }).click();
  await page.locator('iframe[name="application-GenericNotification-createExtendedView-iframe"]').contentFrame().getByRole('button', { name: 'Save  Emphasized' }).click();
  await page.waitForTimeout(10000);
});
}