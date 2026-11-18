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

const usersToTest = [1,2]; 
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));

test.afterEach(async ({ page }, testInfo) => {
  const test_name = testInfo.title.replace(/[^a-zA-Z0-9_-]+/g, '_');
  const screenshotDir = path.join(__dirname, '..', 'screenshots', test_name);

  fs.mkdirSync(screenshotDir, { recursive: true });

});

for (const cred of credentials) {

  test(`test_FMZ1_C_${cred.name}`, async ({ page }, testInfo) => {
  const test_name = testInfo.title.replace(/[^a-zA-Z0-9_-]+/g, '_');
  const screenshotDir = path.join(__dirname, '..', 'screenshots', test_name);

  fs.mkdirSync(screenshotDir, { recursive: true });

  await page.goto('');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.screenshot({ path: path.join(screenshotDir, `${test_name}_01_login.png`), fullPage: true });
  await page.getByRole('button', { name: 'More' }).click();
   await page.getByRole('menuitem', { name: 'Open Text' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('menuitem', { name: 'Projects' }).click();
  await page.getByRole('link', { name: 'Create Funds Commitment Tile' }).click();
  await page.locator('iframe[name="application-EarmarkedFundsDocument-createFundsCommitment-iframe"]').contentFrame().getByRole('textbox', { name: 'Document Type Required' }).click();
  await page.locator('iframe[name="application-EarmarkedFundsDocument-createFundsCommitment-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-EarmarkedFundsDocument-createFundsCommitment-iframe"]').contentFrame().getByRole('textbox', { name: 'Find expression' }).click();
  await page.locator('iframe[name="application-EarmarkedFundsDocument-createFundsCommitment-iframe"]').contentFrame().getByRole('textbox', { name: 'Find expression' }).fill('CO');
  await page.locator('iframe[name="application-EarmarkedFundsDocument-createFundsCommitment-iframe"]').contentFrame().getByRole('textbox', { name: 'Find expression' }).press('Enter');
  await page.locator('iframe[name="application-EarmarkedFundsDocument-createFundsCommitment-iframe"]').contentFrame().getByText('CO funds commitment').click();
  await page.locator('iframe[name="application-EarmarkedFundsDocument-createFundsCommitment-iframe"]').contentFrame().getByRole('button', { name: 'OK  Emphasized' }).click();
  await page.locator('iframe[name="application-EarmarkedFundsDocument-createFundsCommitment-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).click();
  await page.locator('iframe[name="application-EarmarkedFundsDocument-createFundsCommitment-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-EarmarkedFundsDocument-createFundsCommitment-iframe"]').contentFrame().getByRole('button', { name: 'OK  Emphasized' }).click();
  await page.locator('iframe[name="application-EarmarkedFundsDocument-createFundsCommitment-iframe"]').contentFrame().getByRole('textbox', { name: 'Currency/rate Required', description: 'Value help available Transaction Currency' }).click();
  await page.locator('iframe[name="application-EarmarkedFundsDocument-createFundsCommitment-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-EarmarkedFundsDocument-createFundsCommitment-iframe"]').contentFrame().getByRole('textbox', { name: 'Currency', exact: true }).click();
  await page.locator('iframe[name="application-EarmarkedFundsDocument-createFundsCommitment-iframe"]').contentFrame().getByRole('textbox', { name: 'Currency', exact: true }).fill('AUD');
  await page.locator('iframe[name="application-EarmarkedFundsDocument-createFundsCommitment-iframe"]').contentFrame().getByRole('button', { name: 'Go  Emphasized' }).click();
  await page.locator('iframe[name="application-EarmarkedFundsDocument-createFundsCommitment-iframe"]').contentFrame().getByRole('button', { name: 'OK  Emphasized' }).click();
  await page.locator('iframe[name="application-EarmarkedFundsDocument-createFundsCommitment-iframe"]').contentFrame().getByRole('textbox', { name: 'Reference Document' }).click();
  await page.locator('iframe[name="application-EarmarkedFundsDocument-createFundsCommitment-iframe"]').contentFrame().getByRole('textbox', { name: 'Reference Document' }).press('CapsLock');
  await page.locator('iframe[name="application-EarmarkedFundsDocument-createFundsCommitment-iframe"]').contentFrame().getByRole('textbox', { name: 'Reference Document' }).fill('3400005000');
  await page.locator('iframe[name="application-EarmarkedFundsDocument-createFundsCommitment-iframe"]').contentFrame().getByRole('button', { name: 'Continue  Emphasized' }).click();
  await page.locator('iframe[name="application-EarmarkedFundsDocument-createFundsCommitment-iframe"]').contentFrame().getByRole('textbox', { name: 'Total Amount' }).first().click();
  await page.locator('iframe[name="application-EarmarkedFundsDocument-createFundsCommitment-iframe"]').contentFrame().getByRole('textbox', { name: 'Total Amount' }).first().fill('20');
  await page.locator('iframe[name="application-EarmarkedFundsDocument-createFundsCommitment-iframe"]').contentFrame().getByRole('textbox', { name: 'Supplier' }).first().click();
    for (let pressCount = 0; pressCount < 5; pressCount += 1) {
  await page.keyboard.press('ArrowRight');
}
  await page.locator('iframe[name="application-EarmarkedFundsDocument-createFundsCommitment-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  for (let pressCount = 0; pressCount < 2; pressCount += 1) {
  await page.keyboard.press('ArrowRight');
}
   await page.locator('iframe[name="application-EarmarkedFundsDocument-createFundsCommitment-iframe"]').contentFrame().getByRole('button', { name: 'Check' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: path.join(screenshotDir, `${test_name}_final_timeout.png`), fullPage: true });
  });
}

