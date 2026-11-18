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
  await page.getByRole('link', { name: 'Create - Trade Debtors card' }).click();
  await page.locator('iframe[name="application-ZGUI-ZFIARTD001C-iframe"]').contentFrame().locator('input[name="InputField"]').click();
  await page.locator('iframe[name="application-ZGUI-ZFIARTD001C-iframe"]').contentFrame().locator('input[name="InputField"]').fill('AU');
  await page.locator('iframe[name="application-ZGUI-ZFIARTD001C-iframe"]').contentFrame().locator('input[name="InputField"]').press('Enter');
  await page.locator('iframe[name="application-ZGUI-ZFIARTD001C-iframe"]').contentFrame().locator('#C102-mrss-cont-left-Row-0').getByRole('textbox', { name: 'CoCode' }).click();
  await page.locator('iframe[name="application-ZGUI-ZFIARTD001C-iframe"]').contentFrame().locator('#C102-mrss-cont-left-Row-0').getByRole('textbox', { name: 'CoCode' }).fill('1000');
  await page.locator('iframe[name="application-ZGUI-ZFIARTD001C-iframe"]').contentFrame().locator('#C102-mrss-cont-left-Row-0').getByRole('textbox', { name: 'CoCode' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-ZFIARTD001C-iframe"]').contentFrame().locator('#C102-mrss-cont-none-Row-0').getByRole('textbox', { name: 'Card Type' }).click();
    await page.locator('iframe[name="application-ZGUI-ZFIARTD001C-iframe"]').contentFrame().locator('#C102-mrss-cont-none-Row-0').getByRole('textbox', { name: 'Card Type' }).fill('1');
 await page.locator('iframe[name="application-ZGUI-ZFIARTD001C-iframe"]').contentFrame().locator('#C102-mrss-cont-none-Row-0').getByRole('textbox', { name: 'Account Type' }).click();
  await page.locator('iframe[name="application-ZGUI-ZFIARTD001C-iframe"]').contentFrame().locator('#C102-mrss-cont-none-Row-0').getByRole('textbox', { name: 'Account Type' }).fill('P');
 await page.locator('iframe[name="application-ZGUI-ZFIARTD001C-iframe"]').contentFrame().locator('#C102-mrss-cont-none-Row-0').getByRole('textbox', { name: 'Card No.' }).click();
   await page.locator('iframe[name="application-ZGUI-ZFIARTD001C-iframe"]').contentFrame().locator('#C102-mrss-cont-none-Row-0').getByRole('textbox', { name: 'Card No.' }).fill('123456234');
  await page.locator('iframe[name="application-ZGUI-ZFIARTD001C-iframe"]').contentFrame().locator('#C102-mrss-cont-none-Row-0').getByRole('textbox', { name: 'Sequence no' }).click();
  await page.locator('iframe[name="application-ZGUI-ZFIARTD001C-iframe"]').contentFrame().locator('#C102-mrss-cont-none-Row-0').getByRole('textbox', { name: 'Sequence no' }).fill('1');
  await page.locator('iframe[name="application-ZGUI-ZFIARTD001C-iframe"]').contentFrame().locator('#C102-mrss-cont-none-Row-0').getByRole('textbox', { name: 'Card holder First name' }).click();
  await page.locator('iframe[name="application-ZGUI-ZFIARTD001C-iframe"]').contentFrame().locator('#C102-mrss-cont-none-Row-0').getByRole('textbox', { name: 'Card holder First name' }).fill('Michelle');
  await page.locator('iframe[name="application-ZGUI-ZFIARTD001C-iframe"]').contentFrame().locator('#C102-mrss-cont-none-Row-0').getByRole('textbox', { name: 'Card holder Last Name' }).click();
  await page.locator('iframe[name="application-ZGUI-ZFIARTD001C-iframe"]').contentFrame().locator('#C102-mrss-cont-none-Row-0').getByRole('textbox', { name: 'Card holder Last Name' }).fill('Anton');
  await page.locator('iframe[name="application-ZGUI-ZFIARTD001C-iframe"]').contentFrame().locator('#C102-mrss-cont-none-Row-0').getByRole('textbox', { name: 'Card Stat.' }).click();
  await page.locator('iframe[name="application-ZGUI-ZFIARTD001C-iframe"]').contentFrame().locator('#C102-mrss-cont-none-Row-0').getByRole('textbox', { name: 'Card Stat.' }).fill('1');
await page.locator('iframe[name="application-ZGUI-ZFIARTD001C-iframe"]').contentFrame().getByRole('button', { name: 'Save  Emphasized' }).click();
  await page.waitForTimeout(50000);
});
}