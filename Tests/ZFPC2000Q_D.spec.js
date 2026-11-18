import { test, expect } from '@playwright/test';
const allCredentials = [
  { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//AR Team Member
  { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },////AR Team Manager
];
const usersToTest = [1, 2]; 
const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
for (const cred of credentials) {
test(`testZFPC2000Q_${cred.name}`, async ({ page }) => {
      await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
        await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
        await page.getByRole('button', { name: 'Log On' }).click();
        await page.getByRole('tab', { name: 'Accounts Receivable' }).getByLabel('More').click();
        await page.getByRole('menuitem', { name: 'Reporting Financial' }).click();  
        await page.getByRole('link', { name: 'NZ Divisional Reporting (Current Year)' }).click();
        await page.waitForTimeout(500);
        await page.locator('iframe[name="application-ProfitCenter-DisplayWOWNZDivisionalReportCY-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year Required' }).click();
        await page.locator('iframe[name="application-ProfitCenter-DisplayWOWNZDivisionalReportCY-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year Required' }).fill('2026');
        await page.locator('iframe[name="application-ProfitCenter-DisplayWOWNZDivisionalReportCY-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Year Required' }).press('Enter');
        await page.waitForTimeout(500);
        await page.locator('iframe[name="application-ProfitCenter-DisplayWOWNZDivisionalReportCY-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Period Required' }).click();
        await page.locator('iframe[name="application-ProfitCenter-DisplayWOWNZDivisionalReportCY-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Period Required' }).fill('010');
        await page.locator('iframe[name="application-ProfitCenter-DisplayWOWNZDivisionalReportCY-iframe"]').contentFrame().getByRole('textbox', { name: 'Fiscal Period Required' }).press('Enter');
        await page.waitForTimeout(500);
        await page.locator('iframe[name="application-ProfitCenter-DisplayWOWNZDivisionalReportCY-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).click();
        await page.locator('iframe[name="application-ProfitCenter-DisplayWOWNZDivisionalReportCY-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).fill('1000');
        await page.locator('iframe[name="application-ProfitCenter-DisplayWOWNZDivisionalReportCY-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code' }).press('Enter');
        await page.waitForTimeout(500);
        await page.locator('iframe[name="application-ProfitCenter-DisplayWOWNZDivisionalReportCY-iframe"]').contentFrame().getByRole('textbox', { name: 'Plan Category' }).click();
        await page.locator('iframe[name="application-ProfitCenter-DisplayWOWNZDivisionalReportCY-iframe"]').contentFrame().getByRole('textbox', { name: 'Plan Category' }).fill('0');
        await page.locator('iframe[name="application-ProfitCenter-DisplayWOWNZDivisionalReportCY-iframe"]').contentFrame().getByRole('textbox', { name: 'Plan Category' }).press('Enter');
        await page.waitForTimeout(500);
        await page.locator('iframe[name="application-ProfitCenter-DisplayWOWNZDivisionalReportCY-iframe"]').contentFrame().getByRole('button', { name: 'Go Emphasized' }).click();
        await page.waitForTimeout(7000);

    });
}