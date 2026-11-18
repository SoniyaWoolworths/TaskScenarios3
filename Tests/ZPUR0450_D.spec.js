 import { test, expect } from '@playwright/test';
 const allCredentials = [
   { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//AR Team Member
   { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },////AR Team Manager
 ];
 
 const usersToTest = [1, 2];
 const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
 for (const cred of credentials) {
 test(`testZPUR0201_D_${cred.name}`, async ({ page }) => {
 await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
   await page.getByRole('textbox', { name: 'User' }).click();
   await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
   await page.getByRole('textbox', { name: 'Password' }).click();
   await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
   await page.getByRole('button', { name: 'Log On' }).click();
     await page.getByRole('tab', { name: 'Accounts Receivable' }).getByLabel('More').click();
 await page.getByRole('menuitem', { name: 'Reporting Review and Analysis' }).click();
  await page.getByRole('link', { name: 'GR IR Unmatched TD wise' }).click();
  await page.locator('iframe[name="application-ZGUI-zpur0450-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).click();
  await page.locator('iframe[name="application-ZGUI-zpur0450-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).fill('1000');
  await page.locator('iframe[name="application-ZGUI-zpur0450-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-zpur0450-iframe"]').contentFrame().getByRole('textbox', { name: 'Posting Date Required' }).click();
  await page.locator('iframe[name="application-ZGUI-zpur0450-iframe"]').contentFrame().getByRole('textbox', { name: 'Posting Date Required' }).press('ControlOrMeta+a');
  await page.locator('iframe[name="application-ZGUI-zpur0450-iframe"]').contentFrame().getByRole('textbox', { name: 'Posting Date Required' }).fill('22.10.2025');
  await page.locator('iframe[name="application-ZGUI-zpur0450-iframe"]').contentFrame().getByRole('textbox', { name: 'Last GR mvmt. date' }).click();
  await page.locator('iframe[name="application-ZGUI-zpur0450-iframe"]').contentFrame().getByRole('textbox', { name: 'Last GR mvmt. date' }).fill('01.01.2021');
  await page.locator('iframe[name="application-ZGUI-zpur0450-iframe"]').contentFrame().getByTitle('Posting Date in the Document').nth(1).click();
  await page.locator('iframe[name="application-ZGUI-zpur0450-iframe"]').contentFrame().getByTitle('Posting Date in the Document').nth(1).fill('03.11.2024');
  await page.locator('iframe[name="application-ZGUI-zpur0450-iframe"]').contentFrame().getByRole('textbox', { name: 'Layout Required' }).click();
  await page.locator('iframe[name="application-ZGUI-zpur0450-iframe"]').contentFrame().getByRole('textbox', { name: 'Layout Required' }).fill('/GRIRCLEAR_S');
  await page.locator('iframe[name="application-ZGUI-zpur0450-iframe"]').contentFrame().getByRole('button', { name: 'Execute' }).click();
  await page.waitForTimeout(5000);
  await page.locator('iframe[name="application-ZGUI-zpur0450-iframe"]').contentFrame().getByText('102909790').dblclick();
  await page.waitForTimeout(5000);
    });
}