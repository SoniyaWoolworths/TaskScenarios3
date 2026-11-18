import { test, expect } from '@playwright/test';
 const allCredentials = [
   { username: process.env.USERNAME01, password: process.env.PASSWORD01, name: 'User1' },//AR Team Member
   { username: process.env.USERNAME02, password: process.env.PASSWORD02, name: 'User2' },////AR Team Manager
 ];
 
 const usersToTest = [2];
 const credentials = allCredentials.filter((_, index) => usersToTest.includes(index + 1));
 for (const cred of credentials) {
test(`testF0717A_C_${cred.name}`, async ({ page }) => {
 await page.goto('https://sapus4apps001.wowcorp.com.au:8443/sap/bc/ui2/flp?saml2=disabled');
  await page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill(cred.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(cred.password);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'Open Search' }).click();
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).fill('Manage Journal Entries');
  await page.getByRole('searchbox', { name: 'Search In: "Apps"' }).press('Enter');
   await page.getByRole('link', { name: 'Manage Journal Entries New' }).click();
  await page.getByRole('link', { name: '9417272287' }).click();
  await page.pause();
  await page.getByRole('link', { name: 'Manage Journal Entries' }).click();
  await page.getByRole('button', { name: 'New' }).click();
  await page.getByRole('button', { name: 'Journal Entry', exact: true }).click();
  await page.getByRole('textbox', { name: 'Journal Entry Date' }).click();
  await page.getByRole('textbox', { name: 'Journal Entry Date' }).fill('13.10.2026');
  await page.getByRole('textbox', { name: 'Journal Entry Date' }).press('Enter');
  await page.getByRole('tabpanel', { name: 'Header' }).getByLabel('Company Code').click();
  await page.getByRole('tabpanel', { name: 'Header' }).getByLabel('Company Code').fill('1000');
  await page.getByRole('tabpanel', { name: 'Header' }).getByLabel('Company Code').press('Enter');
  await page.getByRole('textbox', { name: 'Transaction Currency' }).click();
  await page.getByRole('textbox', { name: 'Transaction Currency' }).fill('AUD');
  await page.getByRole('textbox', { name: 'Transaction Currency' }).press('Enter');
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.GLAccount-__clone617-input-inner"]').click();
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.GLAccount-__clone617-input-inner"]').fill('100001');
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.GLAccount-__clone617-input-inner"]').press('Enter');
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.GLAccount-__clone618-input-inner"]').click();
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.GLAccount-__clone618-input-inner"]').fill('100001');
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.GLAccount-__clone618-input-inner"]').press('Enter');
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.DebitAmountInTransCrcy-__clone617-input-inner"]').click();
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.DebitAmountInTransCrcy-__clone617-input-inner"]').press('ControlOrMeta+a');
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.DebitAmountInTransCrcy-__clone617-input-inner"]').fill('10');
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.CreditAmountInTransCrcy-__clone618-input-inner"]').click();
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.CreditAmountInTransCrcy-__clone618-input-inner"]').press('ControlOrMeta+a');
  await page.locator('[id="application-AccountingDocument-postGLDocument-component---posting--sap.fin.gl.lib.posting.CreditAmountInTransCrcy-__clone618-input-inner"]').fill('10');
  //await page.getByRole('button', { name: 'Post' }).click();
  //await page.getByRole('button', { name: 'Post', exact: true }).click();
  await page.pause();
  await page.waitForTimeout(10000);
});
}
