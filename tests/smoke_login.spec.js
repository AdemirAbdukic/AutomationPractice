const { test, expect } = require('@playwright/test');

test('Login', async ({ page }) => {

  await page.goto('http://automationpractice.com/index.php?controller=authentication&back=my-account');
  await page.locator('#email').fill('todov80574@eosbuzz.com');
  await page.locator('#passwd').fill('tester');
  await page.locator('#SubmitLogin').click();
  await expect(page).toHaveURL('http://automationpractice.com/index.php?controller=my-account');
});