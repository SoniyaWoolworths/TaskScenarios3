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

const usersToTest = [3,4,5]; 
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));

test.afterEach(async ({ page }, testInfo) => {
  const test_name = testInfo.title.replace(/[^a-zA-Z0-9_-]+/g, '_');
  const screenshotDir = path.join(__dirname, '..', 'screenshots', test_name);

  fs.mkdirSync(screenshotDir, { recursive: true });

});

for (const cred of credentials) {

  test(`test_ZREBATE_C_${cred.name}`, async ({ page }, testInfo) => {
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
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('ZREBATE');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
    await page.getByRole('link', { name: 'Invoice - Rebates-Online' }).click();
  await page.locator('iframe[name="application-ZGUI-ZREBATE-iframe"]').contentFrame().getByRole('textbox', { name: 'Supplier' }).click();
  await page.locator('iframe[name="application-ZGUI-ZREBATE-iframe"]').contentFrame().getByRole('textbox', { name: 'Supplier' }).fill('2580001HC');
  await page.locator('iframe[name="application-ZGUI-ZREBATE-iframe"]').contentFrame().getByRole('textbox', { name: 'Document Date' }).click();
  await page.locator('iframe[name="application-ZGUI-ZREBATE-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-ZGUI-ZREBATE-iframe"]').contentFrame().getByRole('button', { name: 'Continue' }).click();
  await page.locator('iframe[name="application-ZGUI-ZREBATE-iframe"]').contentFrame().getByRole('textbox', { name: 'Amount', description: 'Amount in local currency' }).click();
  await page.locator('iframe[name="application-ZGUI-ZREBATE-iframe"]').contentFrame().getByRole('textbox', { name: 'Amount', description: 'Amount in local currency' }).fill('100');
  await page.locator('iframe[name="application-ZGUI-ZREBATE-iframe"]').contentFrame().getByRole('textbox', { name: 'Ref/Document Number' }).click();
  await page.locator('iframe[name="application-ZGUI-ZREBATE-iframe"]').contentFrame().getByRole('textbox', { name: 'Ref/Document Number' }).fill('TEST');
  await page.locator('iframe[name="application-ZGUI-ZREBATE-iframe"]').contentFrame().getByRole('textbox', { name: 'Header text/Batch No' }).fill('TEST1');
  await page.locator('iframe[name="application-ZGUI-ZREBATE-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).click();
  await page.locator('iframe[name="application-ZGUI-ZREBATE-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).fill('1000');
  await page.locator('iframe[name="application-ZGUI-ZREBATE-iframe"]').contentFrame().getByRole('textbox', { name: 'GL A/C' }).first().click();
  await page.locator('iframe[name="application-ZGUI-ZREBATE-iframe"]').contentFrame().getByRole('textbox', { name: 'GL A/C' }).first().fill('486880');
  await page.locator('iframe[name="application-ZGUI-ZREBATE-iframe"]').contentFrame().getByRole('textbox', { name: 'Amount' }).nth(3).click();
  await page.locator('iframe[name="application-ZGUI-ZREBATE-iframe"]').contentFrame().getByRole('textbox', { name: 'Amount' }).nth(3).fill('100');
  await page.locator('iframe[name="application-ZGUI-ZREBATE-iframe"]').contentFrame().getByRole('textbox', { name: 'Tax Code' }).first().click();
  await page.locator('iframe[name="application-ZGUI-ZREBATE-iframe"]').contentFrame().getByRole('textbox', { name: 'Tax Code' }).first().fill('10');
  await page.locator('iframe[name="application-ZGUI-ZREBATE-iframe"]').contentFrame().getByRole('button', { name: 'Enter' }).click();
  await page.locator('iframe[name="application-ZGUI-ZREBATE-iframe"]').contentFrame().getByRole('textbox', { name: 'Cost Centre' }).first().click();
  await page.locator('iframe[name="application-ZGUI-ZREBATE-iframe"]').contentFrame().getByRole('textbox', { name: 'Cost Centre' }).first().fill('1447');
  await page.locator('iframe[name="application-ZGUI-ZREBATE-iframe"]').contentFrame().getByRole('button', { name: 'Enter' }).click();
  await page.locator('iframe[name="application-ZGUI-ZREBATE-iframe"]').contentFrame().getByRole('button', { name: 'Save  Emphasized' }).click(); 
  await page.waitForTimeout(10000);
  await page.screenshot({ path: path.join(screenshotDir, `${test_name}_final_timeout.png`), fullPage: true });
  });
}
