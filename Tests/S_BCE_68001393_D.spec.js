import { test, expect } from '@playwright/test';
const allCredentials = [
  { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//AR Team Member
  { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },//AR Team Manager
];

const usersToTest = [1, 2]; 
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
for (const cred of credentials) {
test(`testS_BCE_68001393_${cred.name}`, async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Accounts Receivable' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Generic' }).click();
  await page.getByRole('link', { name: 'Users by address data' }).click();
  await page.locator('iframe[name="application-ZGUI-S_BCE_68001393-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
  await page.locator('iframe[name="application-ZGUI-S_BCE_68001393-iframe"]').contentFrame().getByRole('button', { name: 'Display Details' }).click();
  await page.locator('iframe[name="application-ZGUI-S_BCE_68001393-iframe"]').contentFrame().getByRole('tab', { name: 'Logon Data' }).locator('span').click();
  await page.locator('iframe[name="application-ZGUI-S_BCE_68001393-iframe"]').contentFrame().getByRole('tab', { name: 'SNC' }).locator('span').click();
  await page.locator('iframe[name="application-ZGUI-S_BCE_68001393-iframe"]').contentFrame().getByRole('tab', { name: 'Defaults' }).locator('span').click();
  await page.locator('iframe[name="application-ZGUI-S_BCE_68001393-iframe"]').contentFrame().getByRole('tab', { name: 'Parameters' }).locator('span').click();
  await page.locator('iframe[name="application-ZGUI-S_BCE_68001393-iframe"]').contentFrame().getByRole('tab', { name: 'Roles' }).locator('span').click();
  await page.locator('iframe[name="application-ZGUI-S_BCE_68001393-iframe"]').contentFrame().getByRole('tab', { name: 'Profiles' }).locator('span').click();
  await page.locator('iframe[name="application-ZGUI-S_BCE_68001393-iframe"]').contentFrame().getByRole('tab', { name: 'Groups' }).locator('span').click();
  await page.locator('iframe[name="application-ZGUI-S_BCE_68001393-iframe"]').contentFrame().getByRole('tab', { name: 'Personalization' }).locator('span').click();
  await page.locator('iframe[name="application-ZGUI-S_BCE_68001393-iframe"]').contentFrame().getByRole('tab', { name: 'Lic. Data' }).locator('span').click();
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('S_BCE_68001393');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
  await page.getByRole('link', { name: 'Users by address data' }).click();
  await page.waitForTimeout(5000);
});
}