import { test, expect } from '@playwright/test';
 const allCredentials = [
   { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//AR Team Member
   { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },////AR Team Manager
 ];
 
 const usersToTest = [1, 2];
 const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
 for (const cred of credentials) {
test(`testWZR3_D_${cred.name}`, async ({ page }) => {
 await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
   await page.getByRole('textbox', { name: 'User' }).click();
   await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
   await page.getByRole('textbox', { name: 'Password' }).click();
   await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
   await page.getByRole('button', { name: 'Log On' }).click();
   await page.getByRole('tab', { name: 'Accounts Receivable' }).getByLabel('More').click();
  await page.getByRole('menuitem', { name: 'Transaction' }).click();
await page.getByRole('link', { name: 'Display Settlement Document Tile' }).click();
        await page.locator('iframe[name="application-SettlementDocument-display-iframe"]').contentFrame().getByRole('textbox', { name: 'Settlement Document Required' }).fill('98351784');
        await page.locator('iframe[name="application-SettlementDocument-display-iframe"]').contentFrame().getByRole('button', { name: 'Continue  Emphasized' }).click();
        await page.locator('iframe[name="application-SettlementDocument-display-iframe"]').contentFrame().getByRole('tablist').getByText('Item Overview').click();
        await page.locator('iframe[name="application-SettlementDocument-display-iframe"]').contentFrame().getByRole('tab', { name: 'Additional Data', exact: true }).click();
        await page.locator('iframe[name="application-SettlementDocument-display-iframe"]').contentFrame().getByRole('tablist').getByText('Activity Reasons').click();
        await page.locator('iframe[name="application-SettlementDocument-display-iframe"]').contentFrame().getByRole('tablist').getByText('Additional Data B').click();
        await page.locator('iframe[name="application-SettlementDocument-display-iframe"]').contentFrame().getByRole('tablist').getByText('Flexible Overview').click();
        await page.waitForTimeout(10000);
});
 }
