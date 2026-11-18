import { test, expect } from '@playwright/test';
const allCredentials = [
  { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//AR Team Member
  { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },////AR Team Manager
];
const usersToTest = [1, 2]; 
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
for (const cred of credentials) {
test(`testVF31_D_${cred.name}`, async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Accounts Receivable' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Transaction' }).click();
  await page.getByRole('link', { name: 'Output from Billing Documents' }).click();
  await page.locator('iframe[name="application-Invoice-viewBillingOutput-iframe"]').contentFrame().getByRole('button', { name: 'Get Variant...' }).click();
  await page.locator('iframe[name="application-Invoice-viewBillingOutput-iframe"]').contentFrame().getByText('NZ MEAT', { exact: true }).click();
  await page.locator('iframe[name="application-Invoice-viewBillingOutput-iframe"]').contentFrame().getByRole('button', { name: 'Choose' }).click();
  await page.locator('iframe[name="application-Invoice-viewBillingOutput-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
 // await page.locator('iframe[name="application-Invoice-viewBillingOutput-iframe"]').contentFrame().locator('[id="M0:46:::3:1"]').click();
  await page.locator('iframe[name="application-Invoice-viewBillingOutput-iframe"]').contentFrame().getByRole('button', { name: 'Process  Emphasized' }).click();
 await page.waitForTimeout(10000);
});
}