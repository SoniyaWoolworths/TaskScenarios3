import { test, expect } from '@playwright/test';
const allCredentials = [
  { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//AR Team Member
  { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },////AR Team Manager
];
const usersToTest = [1, 2]; 
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
for (const cred of credentials) {
test(`testZFPC7000CB_${cred.name}`, async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Accounts Receivable' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Reporting Financial' }).click();
  await page.getByRole('link', { name: 'Profit Centre Balance Sheet Tile' }).click();
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWPCBSRange-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).click();
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWPCBSRange-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).fill('1000');
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWPCBSRange-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).press('Enter');
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWPCBSRange-iframe"]').contentFrame().getByText('Contains 1 item2027').click();
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWPCBSRange-iframe"]').contentFrame().getByRole('listitem', { name: '2027' }).press('ControlOrMeta+a');
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWPCBSRange-iframe"]').contentFrame().locator('#WD87-icon').click();
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWPCBSRange-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year' }).fill('2027');
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWPCBSRange-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year' }).press('Enter');
  await page.locator('iframe[name="application-ProfitCenter-DisplayWOWPCBSRange-iframe"]').contentFrame().getByRole('tab', { name: 'Data Analysis' }).click();
  await page.waitForTimeout(30000);
});
}