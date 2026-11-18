import { test, expect } from '@playwright/test';
const allCredentials = [
  { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//AR Team Member
  { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },////AR Team Manager
];

const usersToTest = [1, 2];
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
for (const cred of credentials) {
test(`testF4826_D_${cred.name}`, async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Accounts Receivable' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Manage Business Partner' }).click();
  await page.locator('iframe[name="application-BusinessPartner-displayCreditProfile-iframe"]').contentFrame().locator('[id="M0:46:1:1:1:2B262::0:51-btn"]').click();
  await page.locator('iframe[name="application-BusinessPartner-displayCreditProfile-iframe"]').contentFrame().getByRole('option', { name: 'Number', exact: true }).click();
  await page.locator('iframe[name="application-BusinessPartner-displayCreditProfile-iframe"]').contentFrame().getByRole('textbox', { name: 'Busn. Partner' }).click();
  await page.locator('iframe[name="application-BusinessPartner-displayCreditProfile-iframe"]').contentFrame().getByRole('textbox', { name: 'Busn. Partner' }).fill('1000044640');
  await page.locator('iframe[name="application-BusinessPartner-displayCreditProfile-iframe"]').contentFrame().getByRole('textbox', { name: 'Busn. Partner' }).press('Enter');
  await page.locator('iframe[name="application-BusinessPartner-displayCreditProfile-iframe"]').contentFrame().getByRole('textbox', { name: 'Partner', exact: true }).dblclick();
  await page.locator('iframe[name="application-BusinessPartner-displayCreditProfile-iframe"]').contentFrame().getByRole('tab', { name: 'Address Overview' }).locator('span').click();
  await page.locator('iframe[name="application-BusinessPartner-displayCreditProfile-iframe"]').contentFrame().getByRole('tab', { name: 'Identification', exact: true }).locator('span').click();
  await page.locator('iframe[name="application-BusinessPartner-displayCreditProfile-iframe"]').contentFrame().getByRole('tab', { name: 'Control' }).locator('span').click();
  await page.locator('iframe[name="application-BusinessPartner-displayCreditProfile-iframe"]').contentFrame().getByRole('tab', { name: 'Payment Transactions' }).locator('span').click();
  await page.locator('iframe[name="application-BusinessPartner-displayCreditProfile-iframe"]').contentFrame().getByRole('tab', { name: 'Status' }).locator('span').click();
  await page.locator('iframe[name="application-BusinessPartner-displayCreditProfile-iframe"]').contentFrame().getByRole('tab', { name: 'Technical Identification' }).locator('span').click();
});
}