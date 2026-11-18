import fs from 'fs';
import path from 'path';
import { test, expect } from '@playwright/test';
const allCredentials = [
  { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//P2P PO Raiser - SS
  { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },//P2P PO Raiser Supervisor - SS
  { username: process.env.USERNAME03, password: process.env.PASSWORD03, name: 'User3' },//P2P Processor - SS
  { username: process.env.USERNAME04, password: process.env.PASSWORD04, name: 'User4' },//P2P Payments Supervisor - SS
  { username: process.env.USERNAME05, password: process.env.PASSWORD05, name: 'User5' },//P2P Payments Processor - SS
];

const usersToTest = [3]; 
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));

test.afterEach(async ({ page }, testInfo) => {
  const test_name = testInfo.title.replace(/[^a-zA-Z0-9_-]+/g, '_');
  const screenshotDir = path.join(__dirname, '..', 'screenshots', test_name);

  fs.mkdirSync(screenshotDir, { recursive: true });

});

for (const cred of credentials) {

  test(`test_FBU8_C_${cred.name}`, async ({ page }, testInfo) => {
  const test_name = testInfo.title.replace(/[^a-zA-Z0-9_-]+/g, '_');
  const screenshotDir = path.join(__dirname, '..', 'screenshots', test_name);

  fs.mkdirSync(screenshotDir, { recursive: true });

  await page.goto('');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('FBU8');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter'); 
  await page.screenshot({ path: path.join(screenshotDir, `${test_name}_after_save.png`), fullPage: true });
    await page.getByRole('link', { name: 'Reverse Journal Entries Cross' }).click();
  await page.locator('iframe[name="application-AccountingDocument-reverseJournalEntryCrossCompany-iframe"]').contentFrame().getByRole('textbox', { name: 'Cross-Comp.Code No.' }).click();
  await page.locator('iframe[name="application-AccountingDocument-reverseJournalEntryCrossCompany-iframe"]').contentFrame().getByRole('textbox', { name: 'Cross-Comp.Code No.' }).fill('1605899481141027');
  await page.locator('iframe[name="application-AccountingDocument-reverseJournalEntryCrossCompany-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).click();
  await page.locator('iframe[name="application-AccountingDocument-reverseJournalEntryCrossCompany-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).fill('1000');
  await page.locator('iframe[name="application-AccountingDocument-reverseJournalEntryCrossCompany-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year' }).click();
  await page.locator('iframe[name="application-AccountingDocument-reverseJournalEntryCrossCompany-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year' }).fill('2027');
  await page.locator('iframe[name="application-AccountingDocument-reverseJournalEntryCrossCompany-iframe"]').contentFrame().getByRole('textbox', { name: 'Reversal Reason Required' }).click();
  await page.locator('iframe[name="application-AccountingDocument-reverseJournalEntryCrossCompany-iframe"]').contentFrame().getByRole('textbox', { name: 'Reversal Reason Required' }).fill('01');
  await page.locator('iframe[name="application-AccountingDocument-reverseJournalEntryCrossCompany-iframe"]').contentFrame().getByRole('button', { name: 'Post  Emphasized' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: path.join(screenshotDir, `${test_name}_final_timeout.png`), fullPage: true });
  });
  }; 