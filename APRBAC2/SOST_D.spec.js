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

  await page.waitForTimeout(10000);
  await page.screenshot({ path: path.join(screenshotDir, `${test_name}_final_timeout.png`), fullPage: true });
});

for (const cred of credentials) {

  test(`test_SOST_D_${cred.name}`, async ({ page }, testInfo) => {
  const test_name = testInfo.title.replace(/[^a-zA-Z0-9_-]+/g, '_');
  const screenshotDir = path.join(__dirname, '..', 'screenshots', test_name);

  fs.mkdirSync(screenshotDir, { recursive: true });

  await page.goto('');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
    await page.screenshot({ path: path.join(screenshotDir, `${test_name}_01_login.png`), fullPage: true });
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.screenshot({ path: path.join(screenshotDir, `${test_name}_02_more_clicked.png`), fullPage: true });
    await page.getByRole('menuitem', { name: 'Generic' }).click();
  await page.screenshot({ path: path.join(screenshotDir, `${test_name}_03_generic_clicked.png`), fullPage: true });
  await page.getByRole('link', { name: 'SAPconnect Send Requests SOST' }).click();
  await page.screenshot({ path: path.join(screenshotDir, `${test_name}_04_sost_opened.png`), fullPage: true });
  await page.locator('iframe[name="application-ZGUI-SOST-iframe"]').contentFrame().getByRole('tablist').getByText('Send Status').click();
  await page.screenshot({ path: path.join(screenshotDir, `${test_name}_05_send_status.png`), fullPage: true });
  await page.locator('iframe[name="application-ZGUI-SOST-iframe"]').contentFrame().getByRole('tablist').getByText('Sender').click();
  await page.screenshot({ path: path.join(screenshotDir, `${test_name}_06_sender.png`), fullPage: true });
  await page.locator('iframe[name="application-ZGUI-SOST-iframe"]').contentFrame().getByRole('tablist').getByText('Options').click();
  await page.screenshot({ path: path.join(screenshotDir, `${test_name}_07_options.png`), fullPage: true });
  await page.locator('iframe[name="application-ZGUI-SOST-iframe"]').contentFrame().getByRole('tablist').getByText('Attribs.').click();
  await page.screenshot({ path: path.join(screenshotDir, `${test_name}_08_attribs.png`), fullPage: true });
  await page.waitForTimeout(10000);
  await page.screenshot({ path: path.join(screenshotDir, `${test_name}_final_timeout.png`), fullPage: true });
  });
}