import { test, expect } from '@playwright/test';
const allCredentials = [
  { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//AR Team Member
  { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },////AR Team Manager
];
const usersToTest = [1, 2]; 
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
for (const cred of credentials) {
test(`testF0712_D_${cred.name}`, async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('tab', { name: 'Accounts Receivable' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Reporting Review and Analysis' }).click();
        await page.getByRole('link', { name: 'Tcode for Cust / Vendor Doc' }).click();
        await page.locator('iframe[name="application-ZGUI-zsearch-iframe"]').contentFrame().getByRole('button', { name: 'Get Variant...' }).click();
        await page.locator('iframe[name="application-ZGUI-zsearch-iframe"]').contentFrame().getByRole('textbox', { name: 'Created By' }).click();
        await page.locator('iframe[name="application-ZGUI-zsearch-iframe"]').contentFrame().getByRole('textbox', { name: 'Created By' }).fill('');
        await page.locator('iframe[name="application-ZGUI-zsearch-iframe"]').contentFrame().getByRole('button', { name: 'Execute (F8)' }).click();
        await page.locator('iframe[name="application-ZGUI-zsearch-iframe"]').contentFrame().getByRole('button', { name: 'Find...' }).click();
        await page.locator('iframe[name="application-ZGUI-zsearch-iframe"]').contentFrame().getByRole('textbox', { name: 'Search Term' }).fill('WEEKLY PC');
        await page.locator('iframe[name="application-ZGUI-zsearch-iframe"]').contentFrame().getByRole('button', { name: 'OK' }).click();
        await page.locator('iframe[name="application-ZGUI-zsearch-iframe"]').contentFrame().getByRole('dialog', { name: 'Find' }).getByLabel('Close').click();
        await page.locator('iframe[name="application-ZGUI-zsearch-iframe"]').contentFrame().getByText('WEEKLY PC+ INV').dblclick();
        await page.locator('iframe[name="application-ZGUI-zsearch-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
        await page.waitForTimeout(5000);
    
    });
}