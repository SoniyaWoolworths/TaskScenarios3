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

            const usersToTest = [1,2]; 
            const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));

            test.afterEach(async ({ page }, testInfo) => {
            const test_name = testInfo.title.replace(/[^a-zA-Z0-9_-]+/g, '_');
            const screenshotDir = path.join(__dirname, '..', 'screenshots', test_name);

            fs.mkdirSync(screenshotDir, { recursive: true });

            });

            for (const cred of credentials) {

            test(`test_FBV3_D_${cred.name}`, async ({ page }, testInfo) => {
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
             await page.getByRole('button', { name: 'More' }).click();
             await page.getByRole('menuitem', { name: 'Reporting - Review & Analysis' }).click();
             await page.getByRole('link', { name: '107MM - Invoice List &' }).click();
             await page.locator('iframe[name="application-ZGUI-ZMM090-iframe"]').contentFrame().getByRole('button', { name: 'Get Variant...' }).click();
             await page.locator('iframe[name="application-ZGUI-ZMM090-iframe"]').contentFrame().getByText('IT_INV_PROJ').click();
             await page.locator('iframe[name="application-ZGUI-ZMM090-iframe"]').contentFrame().getByRole('button', { name: 'Choose', description: 'Choose (F2)' }).click();
            await page.screenshot({ path: path.join(screenshotDir, `${test_name}_02_step.png`), fullPage: true });
            await page.locator('iframe[name="application-ZGUI-ZMM090-iframe"]').contentFrame().getByRole('button', { name: 'Execute  Emphasized' }).click();
            await page.screenshot({ path: path.join(screenshotDir, `${test_name}_03_step.png`), fullPage: true });
            await page.waitForTimeout(10000);
            });
            }

