import { test, expect } from '@playwright/test';
const allCredentials = [
  { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//AR Team Member
  { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },////AR Team Manager
];

const usersToTest = [1, 2];
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
for (const cred of credentials) {
test(`testZFIARTD001E_M_${cred.name}`, async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Accounts Receivable' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Master Data' }).click();
  await page.getByRole('link', { name: 'Change - Trade Debtors card' }).click();
  await page.locator('iframe[name="application-ZGUI-ZFIARTD001E-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).click();
  await page.locator('iframe[name="application-ZGUI-ZFIARTD001E-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).fill('1000');
  await page.locator('iframe[name="application-ZGUI-ZFIARTD001E-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-ZFIARTD001E-iframe"]').contentFrame().getByRole('textbox', { name: 'Card Type' }).click();
  await page.locator('iframe[name="application-ZGUI-ZFIARTD001E-iframe"]').contentFrame().getByRole('textbox', { name: 'Card Type' }).fill('0001');
  await page.locator('iframe[name="application-ZGUI-ZFIARTD001E-iframe"]').contentFrame().getByRole('textbox', { name: 'Card Type' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-ZFIARTD001E-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
 // await page.locator('iframe[name="application-ZGUI-ZFIARTD001E-iframe"]').contentFrame().getByText('test1', { exact: true }).click();
 await page.pause();
 await page.locator('iframe[name="application-ZGUI-ZFIARTD001E-iframe"]').contentFrame().getByText('test1', { exact: true }).click();
 await page.locator('iframe[name="application-ZGUI-ZFIARTD001E-iframe"]').contentFrame().getByText('test1', { exact: true }).press('ControlOrMeta+a');
   await page.locator('iframe[name="application-ZGUI-ZFIARTD001E-iframe"]').contentFrame().getByText('test1', { exact: true }).fill('test2');
await page.locator('iframe[name="application-ZGUI-ZFIARTD001E-iframe"]').contentFrame().getByRole('button', { name: 'Save  Emphasized' }).click();


//await page.locator('iframe[name="application-ZGUI-ZFIARTD001E-iframe"]').contentFrame().getByRole('textbox', { name: 'Card holder First name' }).press('ControlOrMeta+a');
    //await page.locator('iframe[name="application-ZGUI-ZFIARTD001E-iframe"]').contentFrame().getByRole('textbox', { name: 'Card holder First name' }).fill('test2');
//await page.locator('iframe[name="application-ZGUI-ZFIARTD001E-iframe"]').contentFrame().getByRole('button', { name: 'Save  Emphasized' }).click();
await page.waitForTimeout(50000);
});
}