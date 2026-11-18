import { test, expect } from '@playwright/test';
const allCredentials = [
  { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//AR Team Member
  { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },////AR Team Manager
];

const usersToTest = [1, 2];
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
for (const cred of credentials) {
test(`testF4023_${cred.name}`, async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Accounts Receivable' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Reporting Financial' }).click();
  await page.getByRole('link', { name: 'Cost Accounting' }).click();
  await page.getByRole('textbox', { name: 'Company Code:' }).click();
  await page.getByRole('textbox', { name: 'Company Code:' }).fill('1000');
  await page.getByRole('textbox', { name: 'Company Code:' }).press('Enter');
  await page.getByRole('textbox', { name: 'Cost Center:' }).click();
  await page.getByRole('textbox', { name: 'Cost Center:' }).fill('6600');
  await page.getByRole('textbox', { name: 'Cost Center:' }).press('Enter');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.getByText('Cost Center: 6600 - HO').click();
  // The previous locator used a hardcoded UI5 auto-generated clone ID (e.g. "__clone372"),
  // which is regenerated on every session/render and is not a stable selector.
  // The "Journal Entry" column is a smart link, so target it by role/name instead.
  await page.getByRole('link', { name: /^Journal Entry/ }).first().click();
  await page.getByRole('link', { name: 'Manage Journal Entries - New' }).click();
  // The object page anchor bar smooth-scrolls to each section when a tab is clicked.
  // Clicking the next tab before that scroll animation finishes makes the tab
  // unstable and the click times out, so wait for each section to come into
  // view before moving to the next tab.
  await page.getByRole('option', { name: 'Line Items' }).click();
  await expect(page.getByRole('heading', { name: /^Line Items/ })).toBeInViewport();
  await page.getByRole('option', { name: 'Related Documents' }).click();
  await expect(page.getByRole('heading', { name: /^Related Documents/ })).toBeInViewport();
  await page.getByRole('option', { name: 'Notes' }).click();
  await expect(page.getByRole('heading', { name: /^Notes/ })).toBeInViewport();
  await page.getByRole('option', { name: 'Attachments' }).click();
  await expect(page.getByRole('heading', { name: /^Attachments/ })).toBeInViewport();
});
}
