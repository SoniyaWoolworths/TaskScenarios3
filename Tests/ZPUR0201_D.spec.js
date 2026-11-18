import { test, expect } from '@playwright/test';
const allCredentials = [
  { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//AR Team Member
  { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },////AR Team Manager
];

const usersToTest = [1, 2];
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
for (const cred of credentials) {
test(`testZPUR0201_D_${cred.name}`, async ({ page }) => {
await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  await page.getByRole('button', { name: 'Log On' }).click();
    await page.getByRole('tab', { name: 'Accounts Receivable' }).getByLabel('More').click();
await page.getByRole('menuitem', { name: 'Reporting Review and Analysis' }).click();
  await page.getByRole('link', { name: 'LIV Enquiry ZPUR0201 Tile' }).click();
  await page.locator('iframe[name="application-ZGUI-ZPUR0201-iframe"]').contentFrame().getByRole('textbox', { name: 'Purchasing Document Required' }).fill('31780588');
  await page.locator('iframe[name="application-ZGUI-ZPUR0201-iframe"]').contentFrame().getByRole('textbox', { name: 'Purchasing Document Required' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-ZPUR0201-iframe"]').contentFrame().getByRole('textbox', { name: 'Posting date' }).click();
  await page.locator('iframe[name="application-ZGUI-ZPUR0201-iframe"]').contentFrame().getByRole('textbox', { name: 'Posting date' }).fill('10.10.2026');
  await page.locator('iframe[name="application-ZGUI-ZPUR0201-iframe"]').contentFrame().getByRole('textbox', { name: 'Posting date' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-ZPUR0201-iframe"]').contentFrame().getByRole('button', { name: 'Execute Emphasized' }).click();
  await page.waitForTimeout(5000);
});
}