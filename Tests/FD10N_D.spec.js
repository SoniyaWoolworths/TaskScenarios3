import { test, expect } from '@playwright/test';
const allCredentials = [
  { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//AR Team Member
  { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },////AR Team Manager
];

const usersToTest = [1, 2];
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
for (const cred of credentials) {
test(`testFD10N_D_${cred.name}`, async ({ page }) => {
await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Accounts Receivable' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Reporting Review and Analysis' }).click();
  await page.getByRole('link', { name: 'Customer Balance Display' }).click();
  await page.locator('iframe[name="application-ZGUI-FD10N-iframe"]').contentFrame().getByRole('textbox', { name: 'Customer' }).click();
  await page.locator('iframe[name="application-ZGUI-FD10N-iframe"]').contentFrame().getByRole('textbox', { name: 'Customer' }).fill('121930');
  await page.locator('iframe[name="application-ZGUI-FD10N-iframe"]').contentFrame().getByRole('textbox', { name: 'Customer' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-FD10N-iframe"]').contentFrame().getByRole('textbox', { name: 'Company code' }).click();
  await page.locator('iframe[name="application-ZGUI-FD10N-iframe"]').contentFrame().getByRole('textbox', { name: 'Company code' }).fill('1000');
  await page.locator('iframe[name="application-ZGUI-FD10N-iframe"]').contentFrame().getByRole('textbox', { name: 'Company code' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-FD10N-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal year' }).click();
  await page.locator('iframe[name="application-ZGUI-FD10N-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal year' }).fill('2025');
  await page.locator('iframe[name="application-ZGUI-FD10N-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal year' }).press('Enter');
    await page.locator('iframe[name="application-ZGUI-FD10N-iframe"]').contentFrame().getByRole('button', { name: 'Execute Emphasized' }).click();
 await page.waitForTimeout(10000);
});
}