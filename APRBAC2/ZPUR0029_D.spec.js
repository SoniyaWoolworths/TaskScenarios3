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

  test(`test_ZPUR0029_D_${cred.name}`, async ({ page }, testInfo) => {
    const test_name = testInfo.title.replace(/[^a-zA-Z0-9_-]+/g, '_');
    const screenshotDir = path.join(__dirname, '..', 'screenshots', test_name);

    fs.mkdirSync(screenshotDir, { recursive: true });

    await page.goto('');
    await page.screenshot({ path: path.join(screenshotDir, `${test_name}_01_login_page.png`), fullPage: true });
    await page.getByRole('textbox', { name: 'User' }).click();
    await page.screenshot({ path: path.join(screenshotDir, `${test_name}_02_user_clicked.png`), fullPage: true });
    await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
    await page.screenshot({ path: path.join(screenshotDir, `${test_name}_03_user_filled.png`), fullPage: true });
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.screenshot({ path: path.join(screenshotDir, `${test_name}_04_password_clicked.png`), fullPage: true });
    await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
    await page.screenshot({ path: path.join(screenshotDir, `${test_name}_05_password_filled.png`), fullPage: true });
    await page.getByRole('button', { name: 'Log On' }).click();
    await page.getByRole('button', { name: 'Open Search' }).click();
    await page.screenshot({ path: path.join(screenshotDir, `${test_name}_06_search_opened.png`), fullPage: true });

    await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).click();
    await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('ZPUR0029');
    await page.keyboard.press('Enter');
    await page.screenshot({ path: path.join(screenshotDir, `${test_name}_07_app_searched.png`), fullPage: true });
    await page.getByRole('link', { name: 'Detailed Levy Report for' }).click();
    await page.screenshot({ path: path.join(screenshotDir, `${test_name}_08_tile_opened.png`), fullPage: true });
    await page.locator('iframe[name="application-ZGUI-ZPUR0029-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
    await page.screenshot({ path: path.join(screenshotDir, `${test_name}_09_help_opened.png`), fullPage: true });

    await page.locator('iframe[name="application-ZGUI-ZPUR0029-iframe"]').contentFrame().getByRole('button', { name: 'OK  Emphasized' }).click();
    await page.screenshot({ path: path.join(screenshotDir, `${test_name}_10_ok_clicked.png`), fullPage: true });

    await page.locator('iframe[name="application-ZGUI-ZPUR0029-iframe"]').contentFrame().getByRole('textbox', { name: 'Payment Document No' }).click();
    await page.locator('iframe[name="application-ZGUI-ZPUR0029-iframe"]').contentFrame().getByRole('textbox', { name: 'Payment Document No' }).fill('1');
    await page.screenshot({ path: path.join(screenshotDir, `${test_name}_11_payment_doc_filled.png`), fullPage: true });

    await page.locator('iframe[name="application-ZGUI-ZPUR0029-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
    await page.screenshot({ path: path.join(screenshotDir, `${test_name}_12_execute_clicked.png`), fullPage: true });

  });
}

