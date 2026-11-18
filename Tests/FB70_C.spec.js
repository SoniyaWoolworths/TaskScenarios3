import { test, expect } from '@playwright/test';
const allCredentials = [
  { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//AR Team Member
  { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },////AR Team Manager
];
const usersToTest = [2]; 
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
for (const cred of credentials) {
test(`testFB70_C_${cred.name}`, async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  await page.getByRole('button', { name: 'Log On' }).click();
await page.getByRole('tab', { name: 'Accounts Receivable' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Transaction' }).click();
  await page.getByRole('link', { name: 'Create Outgoing Invoices Tile' }).click();
  await page.locator('iframe[name="application-Customer-createOutgoingInvoice-iframe"]').contentFrame().getByRole('textbox', { name: 'Customer' }).fill('1864');
  await page.locator('iframe[name="application-Customer-createOutgoingInvoice-iframe"]').contentFrame().getByRole('textbox', { name: 'Customer' }).press('Enter');
  await page.locator('iframe[name="application-Customer-createOutgoingInvoice-iframe"]').contentFrame().getByRole('textbox', { name: 'Invoice date' }).click();
  await page.locator('iframe[name="application-Customer-createOutgoingInvoice-iframe"]').contentFrame().getByRole('textbox', { name: 'Invoice date' }).fill('06.10.2026');
  await page.locator('iframe[name="application-Customer-createOutgoingInvoice-iframe"]').contentFrame().getByRole('textbox', { name: 'Invoice date' }).press('Enter');
  await page.locator('iframe[name="application-Customer-createOutgoingInvoice-iframe"]').contentFrame().getByRole('textbox', { name: 'HeaderText' }).fill('Test');
  await page.locator('iframe[name="application-Customer-createOutgoingInvoice-iframe"]').contentFrame().getByRole('textbox', { name: 'HeaderText' }).press('Enter');
  await page.locator('iframe[name="application-Customer-createOutgoingInvoice-iframe"]').contentFrame().locator('[id="M0:46:4:1[1,2]_c"]').click();
  await page.locator('iframe[name="application-Customer-createOutgoingInvoice-iframe"]').contentFrame().getByRole('grid', { name: '0 Items ( Screen Variant : WW' }).locator('input[name="InputField"]').fill('486880');
  await page.locator('iframe[name="application-Customer-createOutgoingInvoice-iframe"]').contentFrame().getByRole('grid', { name: '0 Items ( Screen Variant : WW' }).locator('input[name="InputField"]').press('Enter');
  await page.locator('iframe[name="application-Customer-createOutgoingInvoice-iframe"]').contentFrame().getByRole('grid', { name: '0 Items ( Screen Variant : WW' }).locator('input[name="InputField"]').fill('10');
  await page.locator('iframe[name="application-Customer-createOutgoingInvoice-iframe"]').contentFrame().getByRole('grid', { name: '0 Items ( Screen Variant : WW' }).locator('input[name="InputField"]').press('Enter');
  await page.locator('iframe[name="application-Customer-createOutgoingInvoice-iframe"]').contentFrame().locator('[id="M0:46:4:1[1,7]_c"]').click();
  await page.locator('iframe[name="application-Customer-createOutgoingInvoice-iframe"]').contentFrame().getByRole('grid', { name: '0 Items ( Screen Variant : WW' }).locator('input[name="InputField"]').nth(1).fill('1447');
  await page.locator('iframe[name="application-Customer-createOutgoingInvoice-iframe"]').contentFrame().getByRole('grid', { name: '0 Items ( Screen Variant : WW' }).locator('input[name="InputField"]').nth(1).press('Enter');
  await page.locator('iframe[name="application-Customer-createOutgoingInvoice-iframe"]').contentFrame().locator('[id="M0:46:4:1[1,4]_c"]').click();
  await page.locator('iframe[name="application-Customer-createOutgoingInvoice-iframe"]').contentFrame().getByLabel('1 Items ( Screen Variant : WW').locator('tbody').filter({ hasText: 'Credit0.001014471447 1000' }).locator('input[name="InputField"]').fill('100');
  await page.locator('iframe[name="application-Customer-createOutgoingInvoice-iframe"]').contentFrame().getByLabel('1 Items ( Screen Variant : WW').locator('tbody').filter({ hasText: 'Credit0.001014471447 1000' }).locator('input[name="InputField"]').press('Enter')
   await page.locator('iframe[name="application-Customer-createOutgoingInvoice-iframe"]').contentFrame().getByRole('tab', { name: 'Basic data' }).locator('span').click();
  await page.locator('iframe[name="application-Customer-createOutgoingInvoice-iframe"]').contentFrame().getByRole('textbox', { name: 'Amount', exact: true }).click();
  await page.locator('iframe[name="application-Customer-createOutgoingInvoice-iframe"]').contentFrame().getByRole('textbox', { name: 'Amount', exact: true }).fill('100');
  await page.locator('iframe[name="application-Customer-createOutgoingInvoice-iframe"]').contentFrame().getByRole('textbox', { name: 'Amount', exact: true }).press('Enter');
  await page.locator('iframe[name="application-Customer-createOutgoingInvoice-iframe"]').contentFrame().getByRole('button', { name: 'Post  Emphasized' }).click();
 await page.waitforTimeout(10000);
});
}