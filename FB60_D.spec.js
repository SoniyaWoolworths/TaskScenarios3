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
test(`testFB60_D_${cred.name}`, async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Acconts Payable' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Transaction' }).click();
  await page.getByRole('link', { name: 'Create Incoming Invoices Tile' }).click();
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().getByRole('textbox', { name: 'Supplier' }).fill('2580001');
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().getByRole('textbox', { name: 'Supplier' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-FB65-iframe"]').contentFrame().getByRole('textbox', { name: 'Posting Date' }).click();
  await page.locator('iframe[name="application-ZGUI-FB65-iframe"]').contentFrame().getByRole('textbox', { name: 'Posting Date' }).press('ControlOrMeta+a');
  await page.locator('iframe[name="application-ZGUI-FB65-iframe"]').contentFrame().getByRole('textbox', { name: 'Posting Date' }).press('ControlOrMeta+c');
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().getByRole('textbox', { name: 'Invoice date' }).fill('17.08.2026');
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().getByRole('textbox', { name: 'Invoice date' }).press('Enter');
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().getByRole('textbox', { name: 'Reference' }).fill('Test00');
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().getByRole('textbox', { name: 'Reference' }).press('Enter');
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().getByRole('textbox', { name: 'HeaderText' }).fill('Test00');
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().getByRole('textbox', { name: 'HeaderText' }).press('Enter');
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().locator('[id="M0:46:4:1[1,2]_c"]').click();
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().getByRole('button', { name: 'Go  Emphasized' }).click();
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().locator('#SHresultgrid1-mrss-cont-left-Row-2').getByRole('gridcell', { name: 'To select a row, press the' }).locator('div').click();
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().getByRole('button', { name: 'OK  Emphasized' }).click();
  await page.pause();
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().getByRole('button', { name: 'Post  Emphasized' }).click();
  await page.waitForTimeout(10000);
});
}