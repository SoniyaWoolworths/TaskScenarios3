import { test, expect } from '@playwright/test';
const allCredentials = [
  { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//AR Team Member
  { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },////AR Team Manager
];
const usersToTest = [1, 2]; 
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
for (const cred of credentials) {
test(`testZAP913_C_${cred.name}`, async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  await page.getByRole('button', { name: 'Log On' }).click();
await page.getByRole('tab', { name: 'Accounts Receivable' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Transaction' }).click();
  await page.getByRole('link', { name: 'Request Multiple Customer' }).click();
  await page.locator('iframe[name="application-ZGUI-zarinv-iframe"]').contentFrame().getByRole('button', { name: 'Get Variant...' }).click();
  await page.locator('iframe[name="application-ZGUI-zarinv-iframe"]').contentFrame().getByRole('textbox', { name: 'Created By' }).click();
  await page.locator('iframe[name="application-ZGUI-zarinv-iframe"]').contentFrame().getByRole('textbox', { name: 'Created By' }).press('ControlOrMeta+a');
  await page.locator('iframe[name="application-ZGUI-zarinv-iframe"]').contentFrame().getByRole('textbox', { name: 'Created By' }).fill('');
  await page.locator('iframe[name="application-ZGUI-zarinv-iframe"]').contentFrame().getByRole('button', { name: 'Execute (F8)' }).click();
  await page.locator('iframe[name="application-ZGUI-zarinv-iframe"]').contentFrame().getByRole('button', { name: 'Find...' }).click();
  await page.locator('iframe[name="application-ZGUI-zarinv-iframe"]').contentFrame().getByRole('textbox', { name: 'Search Term' }).fill('TEST');
  await page.locator('iframe[name="application-ZGUI-zarinv-iframe"]').contentFrame().getByRole('textbox', { name: 'Search Term' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-zarinv-iframe"]').contentFrame().getByRole('textbox', { name: 'Search Term' }).click();
  await page.locator('iframe[name="application-ZGUI-zarinv-iframe"]').contentFrame().getByRole('textbox', { name: 'Search Term' }).fill('TEST_FORM');
  await page.locator('iframe[name="application-ZGUI-zarinv-iframe"]').contentFrame().getByRole('textbox', { name: 'Search Term' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-zarinv-iframe"]').contentFrame().getByRole('dialog', { name: 'Find' }).getByLabel('Close').click();
  await page.locator('iframe[name="application-ZGUI-zarinv-iframe"]').contentFrame().getByText('TEST_FORM').click();
  await page.locator('iframe[name="application-ZGUI-zarinv-iframe"]').contentFrame().getByRole('button', { name: 'Choose' }).click();
  await page.locator('iframe[name="application-ZGUI-zarinv-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
  await page.locator('iframe[name="application-ZGUI-zarinv-iframe"]').contentFrame().getByRole('textbox', { name: 'Output Device' }).click();
    await page.locator('iframe[name="application-ZGUI-zarinv-iframe"]').contentFrame().getByRole('textbox', { name: 'Output Device' }).fill('LOCL');
    await page.locator('iframe[name="application-ZGUI-zarinv-iframe"]').contentFrame().getByRole('button', { name: 'Continue' }).click();
    await page.waitForTimeout(10000);
});
}
