import { test, expect } from '@playwright/test';
const allCredentials = [
  { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//AR Team Member
  { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },////AR Team Manager
];
const usersToTest = [1, 2]; 
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
for (const cred of credentials) {
test(`testW0079_${cred.name}`, async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Accounts Receivable' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Reporting Financial' }).click();
  await page.getByRole('link', { name: 'Profit Centers Plan/Actual' }).click();
  await page.locator('iframe[name="application-ProfitCenter-analyzePlanActualPC-iframe"]').contentFrame().locator('#WD5E-icon').click();
  //await page.locator('iframe[name="application-ProfitCenter-analyzePlanActualPC-iframe"]').contentFrame().locator('#WD03C1-icon').click();
  await page.locator('iframe[name="application-ProfitCenter-analyzePlanActualPC-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year of Ledger Required' }).click();
  await page.locator('iframe[name="application-ProfitCenter-analyzePlanActualPC-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year of Ledger Required' }).fill('2027');
  await page.locator('iframe[name="application-ProfitCenter-analyzePlanActualPC-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year of Ledger Required' }).press('Enter');
  await page.locator('iframe[name="application-ProfitCenter-analyzePlanActualPC-iframe"]').contentFrame().getByRole('textbox', { name: 'Plan Category Required' }).click();
  await page.locator('iframe[name="application-ProfitCenter-analyzePlanActualPC-iframe"]').contentFrame().getByRole('textbox', { name: 'Plan Category Required' }).fill('1');
  await page.locator('iframe[name="application-ProfitCenter-analyzePlanActualPC-iframe"]').contentFrame().getByRole('textbox', { name: 'Plan Category Required' }).press('Enter');
  await page.locator('iframe[name="application-ProfitCenter-analyzePlanActualPC-iframe"]').contentFrame().getByRole('button', { name: 'Go Emphasized' }).click();
  await page.locator('iframe[name="application-ProfitCenter-analyzePlanActualPC-iframe"]').contentFrame().getByRole('tab', { name: 'Graphical Display' }).click();
  await page.locator('iframe[name="application-ProfitCenter-analyzePlanActualPC-iframe"]').contentFrame().getByRole('tab', { name: 'Query Information' }).click();
  await page.waitForTimeout(10000);
});
}