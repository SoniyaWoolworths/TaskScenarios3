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

  test(`test_ZFI_VEND_CRDR_CM_${cred.name}`, async ({ page }, testInfo) => {
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
    await page.getByRole('menuitem', { name: 'Transaction' }).click();
    await page.getByRole('link', { name: 'Print program for Vendor' }).click();
  await page.locator('iframe[name="application-ZGUI-ZFI_VEND_CRDR-iframe"]').contentFrame().getByRole('button', { name: 'Get Variant...' }).click();
  await page.locator('iframe[name="application-ZGUI-ZFI_VEND_CRDR-iframe"]').contentFrame().getByRole('textbox', { name: 'Variant name' }).click();
  await page.locator('iframe[name="application-ZGUI-ZFI_VEND_CRDR-iframe"]').contentFrame().getByRole('button', { name: 'Choose' }).click();
  await page.locator('iframe[name="application-ZGUI-ZFI_VEND_CRDR-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
  await page.locator('iframe[name="application-ZGUI-ZFI_VEND_CRDR-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-ZGUI-ZFI_VEND_CRDR-iframe"]').contentFrame().getByRole('button', { name: 'Go  Emphasized' }).click();
   await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
   await page.keyboard.press('ArrowDown');
   await page.keyboard.press('ArrowDown');
  await page.locator('iframe[name="application-ZGUI-ZFI_VEND_CRDR-iframe"]').contentFrame().locator('div').filter({ hasText: /^CHARM$/ }).click();
  await page.locator('iframe[name="application-ZGUI-ZFI_VEND_CRDR-iframe"]').contentFrame().getByRole('button', { name: 'OK  Emphasized' }).click();
  await page.locator('iframe[name="application-ZGUI-ZFI_VEND_CRDR-iframe"]').contentFrame().getByRole('button', { name: 'Print preview' }).click();
  await page.waitForTimeout(10000);
  await page.screenshot({ path: path.join(screenshotDir, `${test_name}_final_timeout.png`), fullPage: true });
  });
}