import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).fill('T_AR_TM_MGR');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Welcome@123');
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'More' }).click();
  await page.getByRole('menuitem', { name: 'Transaction' }).click();
  await page.getByRole('link', { name: 'Clear Open Items' }).click();
  await page.locator('iframe[name="application-GLAccount-clearAutomatically-iframe"]').contentFrame().getByRole('button', { name: 'Get Variant...' }).click();
  await page.locator('iframe[name="application-GLAccount-clearAutomatically-iframe"]').contentFrame().getByRole('textbox', { name: 'Created By' }).click();
  await page.locator('iframe[name="application-GLAccount-clearAutomatically-iframe"]').contentFrame().getByRole('textbox', { name: 'Created By' }).press('ControlOrMeta+a');
  await page.locator('iframe[name="application-GLAccount-clearAutomatically-iframe"]').contentFrame().getByRole('textbox', { name: 'Created By' }).fill('');
  await page.locator('iframe[name="application-GLAccount-clearAutomatically-iframe"]').contentFrame().getByRole('button', { name: 'Execute (F8)' }).click();
  await page.locator('iframe[name="application-GLAccount-clearAutomatically-iframe"]').contentFrame().getByRole('button', { name: 'Find...' }).click();
  await page.locator('iframe[name="application-GLAccount-clearAutomatically-iframe"]').contentFrame().getByRole('textbox', { name: 'Search Term' }).fill('WOWNZ');
  await page.locator('iframe[name="application-GLAccount-clearAutomatically-iframe"]').contentFrame().getByRole('textbox', { name: 'Search Term' }).press('Enter');
  await page.locator('iframe[name="application-GLAccount-clearAutomatically-iframe"]').contentFrame().getByRole('textbox', { name: 'Search Term' }).click();
  await page.locator('iframe[name="application-GLAccount-clearAutomatically-iframe"]').contentFrame().getByRole('textbox', { name: 'Search Term' }).press('Enter');
  await page.locator('iframe[name="application-GLAccount-clearAutomatically-iframe"]').contentFrame().getByRole('dialog', { name: 'Find' }).getByLabel('Close').click();
  await page.locator('iframe[name="application-GLAccount-clearAutomatically-iframe"]').contentFrame().getByText('WOWNZ').click();
  await page.locator('iframe[name="application-GLAccount-clearAutomatically-iframe"]').contentFrame().getByRole('button', { name: 'Choose' }).click();
  await page.locator('iframe[name="application-GLAccount-clearAutomatically-iframe"]').contentFrame().getByRole('button', { name: 'Execute Emphasized' }).click();
 await page.waitForTimeout(5000);
});