import { test, expect } from '@playwright/test';
  const allCredentials = [
    { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//AR Team Member
    { uisername: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },////AR Team Manager
  ];
  
  const usersToTest = [1];
  const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
  for (const cred of credentials) {
test(`testZFIBDCF32_D_${cred.name}`, async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
   await page.getByRole('button', { name: 'Log On' }).click();
        await page.getByRole('tab', { name: 'Accounts Receivable' }).getByLabel('More').click();
await page.getByRole('menuitem', { name: 'Transaction' }).click();
  await page.getByRole('link', { name: 'Tcode for auto clearance on' }).click();
  await page.locator('iframe[name="application-ZGUI-ZFIBDCF32-iframe"]').contentFrame().getByRole('textbox', { name: 'Customer Number' }).click();
  await page.locator('iframe[name="application-ZGUI-ZFIBDCF32-iframe"]').contentFrame().getByRole('textbox', { name: 'Customer Number' }).fill('1');
  await page.locator('iframe[name="application-ZGUI-ZFIBDCF32-iframe"]').contentFrame().getByRole('textbox', { name: 'Customer Number' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-ZFIBDCF32-iframe"]').contentFrame().getByRole('textbox', { name: 'to', exact: true }).click();
  await page.locator('iframe[name="application-ZGUI-ZFIBDCF32-iframe"]').contentFrame().getByRole('textbox', { name: 'to', exact: true }).fill('9999');
  await page.locator('iframe[name="application-ZGUI-ZFIBDCF32-iframe"]').contentFrame().getByRole('textbox', { name: 'to', exact: true }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-ZFIBDCF32-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
});
  }