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

            const usersToTest = [2]; 
            const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));

            test.afterEach(async ({ page }, testInfo) => {
            const test_name = testInfo.title.replace(/[^a-zA-Z0-9_-]+/g, '_');
            const screenshotDir = path.join(__dirname, '..', 'screenshots', test_name);

            fs.mkdirSync(screenshotDir, { recursive: true });

            });

            for (const cred of credentials) {

            test(`test_MM01_C_${cred.name}`, async ({ page }, testInfo) => {
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
              await page.getByRole('menuitem', { name: 'Master Data' }).click();
              await page.getByRole('link', { name: 'Create Article Tile' }).click();
            await page.screenshot({ path: path.join(screenshotDir, `${test_name}_02_step.png`), fullPage: true });
            await page.locator('iframe[name="application-Material-create-iframe"]').contentFrame().locator('[id="M0:46:::2:17-btn"]').click();
            await page.locator('iframe[name="application-Material-create-iframe"]').contentFrame().getByRole('option', { name: 'Chemical industry' }).click();
            await page.locator('iframe[name="application-Material-create-iframe"]').contentFrame().locator('[id="M0:46:::3:17-btn"]').click();
            await page.locator('iframe[name="application-Material-create-iframe"]').contentFrame().getByRole('option', { name: 'Apparel (seasonal)' }).click();
            await page.locator('iframe[name="application-Material-create-iframe"]').contentFrame().getByRole('textbox', { name: 'Article', description: 'Value help available Reference Material' }).click();
            await page.locator('iframe[name="application-Material-create-iframe"]').contentFrame().getByRole('textbox', { name: 'Article', description: 'Value help available Reference Material' }).fill('167381');
            await page.locator('iframe[name="application-Material-create-iframe"]').contentFrame().getByRole('button', { name: 'Continue  Emphasized' }).click();
            await page.locator('iframe[name="application-Material-create-iframe"]').contentFrame().locator('[id="M1:46:1[2,0]"] > .urBorderBox > .urST5SCMetricInner').click();
            await page.locator('iframe[name="application-Material-create-iframe"]').contentFrame().getByRole('button', { name: 'Continue (Enter)' }).click();
            await page.screenshot({ path: path.join(screenshotDir, `${test_name}_03_step.png`), fullPage: true });
            await page.locator('iframe[name="application-Material-create-iframe"]').contentFrame().getByRole('button', { name: 'Save  Emphasized' }).click();
            await page.waitForTimeout(10000);
            await page.screenshot({ path: path.join(screenshotDir, `${test_name}_04_step.png`), fullPage: true });

            });
            }

