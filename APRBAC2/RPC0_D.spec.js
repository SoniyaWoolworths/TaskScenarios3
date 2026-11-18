            import fs from 'fs';
            import path from 'path';
            import { test, expect } from '@playwright/test';
            const allCredentials = [
            { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//P2P PO Raiser - SS
            { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },//P2P PO Raiser Supervisor - SS
            { username: process.env.USERNAME03, password: process.env.PASSWORD03, name: 'User3' },//P2P Processor - SS
            { username: process.env.USERNAME04, password: process.env.PASSWORD04, name: 'User4' },//P2P Payments Supervisor - SS
            { username: process.env.USERNAME05, password: process.env.PASSWORD05, name: 'User5' },//P2P Payments Processor - SS
            ];

            const usersToTest = [3]; 
            const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));

            test.afterEach(async ({ page }, testInfo) => {
            const test_name = testInfo.title.replace(/[^a-zA-Z0-9_-]+/g, '_');
            const screenshotDir = path.join(__dirname, '..', 'screenshots', test_name);

            fs.mkdirSync(screenshotDir, { recursive: true });

            });

            for (const cred of credentials) {

            test(`test_RPC0_D_${cred.name}`, async ({ page }, testInfo) => {
            const test_name = testInfo.title.replace(/[^a-zA-Z0-9_-]+/g, '_');
            const screenshotDir = path.join(__dirname, '..', 'screenshots', test_name);

            fs.mkdirSync(screenshotDir, { recursive: true });

            await page.goto('');
            await page.getByRole('textbox', { name: 'User' }).click();
            await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
            await page.getByRole('textbox', { name: 'Password' }).click();
            await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
            await page.screenshot({ path: path.join(screenshotDir, `${test_name}_01_step.png`), fullPage: true });
            await page.getByRole('button', { name: 'Log On' }).click();
            await page.getByRole('button', { name: 'Open Search' }).click();
            await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).click();
            await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('RPC0');
            await page.getByText('RPC0').click();
            await page.locator('iframe[name="application-ZGUI-RPC0-iframe"]').contentFrame().getByRole('tablist').getByText('Planning Period').click();
            await page.locator('iframe[name="application-ZGUI-RPC0-iframe"]').contentFrame().getByRole('radio', { name: 'Current', description: 'User Setting: Options for Fiscal Year' }).click();
            await page.locator('iframe[name="application-ZGUI-RPC0-iframe"]').contentFrame().getByRole('button', { name: 'Check' }).click();
            await page.locator('iframe[name="application-ZGUI-RPC0-iframe"]').contentFrame().getByRole('button', { name: 'Save' }).click();
            await page.waitForTimeout(10000);
            await page.screenshot({ path: path.join(screenshotDir, `${test_name}_final_timeout.png`), fullPage: true });

            });
            }

