
import { test, expect } from '@playwright/test';
const allCredentials = [
  { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//AR Team Member
  { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },////AR Team Manager
];
const usersToTest = [1, 2]; 
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
for (const cred of credentials) {
test(`testZFI240_D_${cred.name}`, async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
        await page.getByRole('button', { name: 'Log On' }).click();
       await page.getByRole('tab', { name: 'Accounts Receivable' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Reporting Financial' }).click();
  await page.getByRole('link', { name: 'Transaction List - Cost/Sell' }).click();
  await page.locator('iframe[name="application-ZGUI-zfi240-iframe"]').contentFrame().getByRole('textbox', { name: 'Profit Centre Group' }).click();
  await page.locator('iframe[name="application-ZGUI-zfi240-iframe"]').contentFrame().getByRole('textbox', { name: 'Profit Centre Group' }).fill('SMKT-OPS');
  await page.locator('iframe[name="application-ZGUI-zfi240-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).click();
  await page.locator('iframe[name="application-ZGUI-zfi240-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).fill('1000');
  await page.locator('iframe[name="application-ZGUI-zfi240-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).press('Enter')
  await page.locator('iframe[name="application-ZGUI-zfi240-iframe"]').contentFrame().getByRole('textbox', { name: 'or GL Account' }).click();
  await page.locator('iframe[name="application-ZGUI-zfi240-iframe"]').contentFrame().getByRole('textbox', { name: 'or GL Account' }).fill('650500');
  await page.locator('iframe[name="application-ZGUI-zfi240-iframe"]').contentFrame().getByRole('textbox', { name: 'or GL Account' }).press('Enter');
  await page.locator('iframe[name="application-ZGUI-zfi240-iframe"]').contentFrame().getByRole('textbox', { name: 'Posting Date Required' }).click();
  await page.locator('iframe[name="application-ZGUI-zfi240-iframe"]').contentFrame().getByRole('textbox', { name: 'Posting Date Required' }).fill('01.01.2025');
  await page.locator('iframe[name="application-ZGUI-zfi240-iframe"]').contentFrame().getByTitle('Posting Date in the Document').nth(1).click();
  await page.locator('iframe[name="application-ZGUI-zfi240-iframe"]').contentFrame().getByTitle('Posting Date in the Document').nth(1).fill('26.07.2026');
  await page.locator('iframe[name="application-ZGUI-zfi240-iframe"]').contentFrame().getByTitle('Posting Date in the Document').nth(1).press('Enter');
  await page.locator('iframe[name="application-ZGUI-zfi240-iframe"]').contentFrame().locator('#ls-inputfieldhelpbutton').click();
  await page.locator('iframe[name="application-ZGUI-zfi240-iframe"]').contentFrame().getByRole('button', { name: '//SMKTINDCGP' }).click();
  await page.waitForTimeout(10000);
});
}