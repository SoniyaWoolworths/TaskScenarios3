import { test, expect } from '@playwright/test';
const allCredentials = [
  { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//AR Team Member
  { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },////AR Team Manager
];
const usersToTest = [1, 2]; 
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
for (const cred of credentials) {
test(`testZFPC1000_${cred.name}`, async ({ page }) => {
      await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
        await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
        await page.getByRole('button', { name: 'Log On' }).click();
        await page.getByRole('tab', { name: 'Accounts Receivable' }).getByLabel('More').click();
        await page.getByRole('menuitem', { name: 'Reporting Financial' }).click();
        await page.getByRole('link', { name: 'AU Divisional Reporting Tile' }).click();
        await page.locator('iframe[name="application-ProfitCenter-DisplayWOWAUDivisionalReport-iframe"]').contentFrame().getByRole('button', { name: 'Go Emphasized' }).click();
        await page.waitForTimeout(10000);
        await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled&sap-client=300&sap-language=EN#Shell-home');
        await page.getByRole('button', { name: 'Open Search' }).click();
        await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('AU Divisional');
        await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
        await page.getByRole('link', { name: 'AU Divisional Reporting Tile' }).click();

    });
}