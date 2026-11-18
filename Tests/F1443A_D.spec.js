import { test, expect } from '@playwright/test';
const allCredentials = [
  { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//AR Team Member
  { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },////AR Team Manager
];

const usersToTest = [1, 2];
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
for (const cred of credentials) {
test(`testF1443A_D_${cred.name}`, async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Accounts Receivable' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Manage Cost Centers Tile' }).click();
  await page.getByRole('textbox', { name: 'Controlling Area:' }).click();
  await page.getByRole('textbox', { name: 'Controlling Area:' }).fill('1000');
  await page.getByRole('textbox', { name: 'Controlling Area:' }).press('Enter');
  await page.getByRole('textbox', { name: 'Cost Center:' }).click();
  await page.getByRole('textbox', { name: 'Cost Center:' }).fill('6600');
  await page.getByRole('textbox', { name: 'Cost Center:' }).press('Enter');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.getByRole('gridcell', { name: 'Navigation' }).click();
  await page.waitForTimeout(5000);
});
}