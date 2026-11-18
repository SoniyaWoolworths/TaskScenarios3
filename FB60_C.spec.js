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
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('menuitem', { name: 'Transaction' }).click();
  await page.getByRole('link', { name: 'Create Incoming Invoices Tile' }).click();
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).click();
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).fill('1000');
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().getByRole('button', { name: 'Continue' }).click();
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().getByRole('textbox', { name: 'Supplier' }).fill('2580001');
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().getByRole('textbox', { name: 'Supplier' }).press('Enter');
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().getByLabel('August 2026 Thursday Week 33').getByText('13').click();
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().locator('#u1449 div').filter({ hasText: 'Items ( No entry variant selected ) 0 Items ( No entry variant selected ) 0' }).first().click();
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().getByRole('textbox', { name: 'Trans.type' }).nth(2).press('Enter');
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().getByRole('textbox', { name: 'Reference' }).click();
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().getByRole('textbox', { name: 'Reference' }).fill('TEST01');
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().getByRole('textbox', { name: 'Reference' }).press('Enter');
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().getByRole('textbox', { name: 'HeaderText' }).fill('TEST001');
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().getByRole('textbox', { name: 'HeaderText' }).press('Enter');
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().locator('[id="M0:46:4:1[1,2]_c"]').click();
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().getByRole('button', { name: 'Go  Emphasized' }).click();
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().locator('#u2CE0-hdl > .urSCBBtn').click();
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().getByText('200625').click();
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().getByRole('button', { name: 'OK  Emphasized' }).click();
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().locator('[id="M0:46:4:1[1,7]_c"]').click();
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().getByLabel('0 Items ( No entry variant').locator('tbody').filter({ hasText: 'Debit0,001000 EmptyEmpty' }).locator('input[name="InputField"]').fill('10');
  await page.locator('iframe[name="application-Supplier-createIncomingInvoice-iframe"]').contentFrame().getByLabel('0 Items ( No entry variant').locator('tbody').filter({ hasText: 'Debit0,001000 EmptyEmpty' }).locator('input[name="InputField"]').press('Enter');
  await page.waitForTimeout(10000);
});
}