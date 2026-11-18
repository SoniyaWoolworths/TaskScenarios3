import { test, expect } from '@playwright/test';
const allCredentials = [
  { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//P2P PO Raiser - SS
  { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },//P2P PO Raiser Supervisor - SS
  { username: process.env.USERNAME03, password: process.env.PASSWORD03, name: 'User3' },//P2P Processor - SS
  { username: process.env.USERNAME04, password: process.env.PASSWORD04, name: 'User4' },//P2P Payments Supervisor - SS
  { username: process.env.USERNAME05, password: process.env.PASSWORD05, name: 'User5' },//P2P Payments Processor - SS
];

const usersToTest = [1, 2, 3, 4, 5];
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
for (const cred of credentials) {
test(`testBP_${cred.name}`, async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('menuitem', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Maintain Business Partner Tile' }).click();
  await page.locator('iframe[name="application-BusinessPartner-create-iframe"]').contentFrame().getByRole('button', { name: 'Open BP' }).click();
  await page.locator('iframe[name="application-BusinessPartner-create-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-BusinessPartner-create-iframe"]').contentFrame().getByRole('button', { name: 'Go  Emphasized' }).click();
  await page.locator('iframe[name="application-BusinessPartner-create-iframe"]').contentFrame().getByText('AITKENVALE').click();
  await page.locator('iframe[name="application-BusinessPartner-create-iframe"]').contentFrame().getByRole('button', { name: 'OK  Emphasized' }).click();
  await page.locator('iframe[name="application-BusinessPartner-create-iframe"]').contentFrame().getByRole('button', { name: 'Enter', exact: true }).click();
  await page.locator('iframe[name="application-BusinessPartner-create-iframe"]').contentFrame().getByRole('tab', { name: 'Address Overview' }).locator('span').click();
  await page.locator('iframe[name="application-BusinessPartner-create-iframe"]').contentFrame().getByRole('textbox', { name: 'Display in BP role Required' }).click();
  await page.locator('iframe[name="application-BusinessPartner-create-iframe"]').contentFrame().locator('[id="M0:46"]').click();
  await page.locator('iframe[name="application-BusinessPartner-create-iframe"]').contentFrame().getByRole('tab', { name: 'Address', exact: true }).locator('span').click();
  await page.locator('iframe[name="application-BusinessPartner-create-iframe"]').contentFrame().getByRole('tab', { name: 'Address Overview' }).locator('span').click();
  await page.locator('iframe[name="application-BusinessPartner-create-iframe"]').contentFrame().getByRole('tab', { name: 'Identification', exact: true }).locator('span').click();
  await page.locator('iframe[name="application-BusinessPartner-create-iframe"]').contentFrame().getByRole('tab', { name: 'Control' }).locator('span').click();
  await page.locator('iframe[name="application-BusinessPartner-create-iframe"]').contentFrame().getByRole('tab', { name: 'Payment Transactions' }).locator('span').click();
  await page.locator('iframe[name="application-BusinessPartner-create-iframe"]').contentFrame().getByRole('tab', { name: 'Status' }).locator('span').click();
  await page.locator('iframe[name="application-BusinessPartner-create-iframe"]').contentFrame().getByRole('tab', { name: 'Technical Identification' }).locator('span').click();
  await page.waitForTimeout(20000);
});
}