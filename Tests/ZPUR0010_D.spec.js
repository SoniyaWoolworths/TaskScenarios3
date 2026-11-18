       import { test, expect } from '@playwright/test';
       const allCredentials = [
         { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//AR Team Member
         { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },////AR Team Manager
       ];
       
       const usersToTest = [1, 2];
       const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
       for (const cred of credentials) {
       test(`testZPUR0010_${cred.name}`, async ({ page }) => {
       await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
       await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
        await page.getByRole('button', { name: 'Log On' }).click();
        await page.getByRole('tab', { name: 'Accounts Receivable' }).getByLabel('More').click();
        await page.getByRole('menuitem', { name: 'Reporting Review and Analysis' }).click();
        await page.getByRole('link', { name: 'Details of Off-Remittance' }).click();
        await page.locator('iframe[name="application-ZGUI-ZPUR0010-iframe"]').contentFrame().getByRole('textbox', { name: 'Company Code Required' }).fill('1000');
        await page.locator('iframe[name="application-ZGUI-ZPUR0010-iframe"]').contentFrame().getByRole('textbox', { name: 'Payment Document No' }).click();
        await page.locator('iframe[name="application-ZGUI-ZPUR0010-iframe"]').contentFrame().getByRole('textbox', { name: 'Payment Document No' }).fill('2016310101');
        await page.locator('iframe[name="application-ZGUI-ZPUR0010-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
        await page.locator('iframe[name="application-ZGUI-ZPUR0010-iframe"]').contentFrame().getByRole('textbox', { name: 'Output Device Required' }).click();
        await page.locator('iframe[name="application-ZGUI-ZPUR0010-iframe"]').contentFrame().getByRole('textbox', { name: 'Output Device Required' }).fill('LOCL');
        await page.locator('iframe[name="application-ZGUI-ZPUR0010-iframe"]').contentFrame().getByRole('button', { name: 'Print preview', exact: true }).click();
    });
}