import { test, expect } from '@playwright/test';
const allCredentials = [
  { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//AR Team Member
  { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },////AR Team Manager
];

const usersToTest = [1, 2];
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
for (const cred of credentials) {
test(`testF4596_C_${cred.name}`, async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Accounts Receivable' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Manage Credit Accounts Tile' }).click();
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.locator('[id="fin.fscm.cr.creditaccounts.manage::sap.suite.ui.generic.template.ListReport.view.ListReport::CrdtMBusinessPartner--template:::ListReportTable:::ColumnListItem-__clone350-imgNav"]').getByTitle('Navigation').click();
  await page.getByRole('toolbar', { name: 'Segments (2)' }).getByLabel('Create').click();
  await page.getByRole('textbox', { name: 'Credit Segment' }).click();
  await page.getByRole('textbox', { name: 'Credit Segment' }).fill('0001');
  await page.getByRole('textbox', { name: 'Credit Segment' }).press('Enter');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.waitForTimeout(10000);
});
}