const {test, expect} = require('@playwright/test');

test.beforeEach(async ({page}) => {
    await page.goto('?controller=authentication&back=my-account');
    await page.locator('#email').fill('todov80574@eosbuzz.com');
    await page.locator('#passwd').fill('tester');
    await page.locator('#SubmitLogin').click();
    await page.goto('');
    await page.locator('//div/a[@title="Faded Short Sleeve T-shirts"]').first().click();
    await page.locator('//button[@class="exclusive"]').click();
    await page.locator('//span[@class="cross"]').click();
    await page.goto('?controller=order');
})

test('Checkout', async ({page}) => {
    await page.pause();
    await expect(page).toHaveURL('http://automationpractice.com/index.php?controller=order');
    await page.locator('//a[@class="button btn btn-default standard-checkout button-medium"]').click();
    await expect(page).toHaveURL('http://automationpractice.com/index.php?controller=order&step=1');
    await expect(page.locator('#addressesAreEquals')).toBeChecked();
    await page.locator('//button[@class="button btn btn-default button-medium"]').click();
    await expect(page).toHaveURL('http://automationpractice.com/index.php?controller=order');
    await expect(page.locator('//input[@class="delivery_option_radio"]')).toBeChecked();
    await expect(page.locator('#cgv')).not.toBeChecked();
    await page.locator('#cgv').check();
    await expect(page.locator('#cgv')).toBeChecked();
    await page.locator('//button[@class="button btn btn-default standard-checkout button-medium"]').click();
    await expect(page).toHaveURL('http://automationpractice.com/index.php?controller=order&multi-shipping=');
    await page.locator('//a[@class="bankwire"]').click();
    await expect(page).toHaveURL('http://automationpractice.com/index.php?fc=module&module=bankwire&controller=payment');    
    await page.locator('//button[@class="button btn btn-default button-medium"]').click();
    await expect(page.locator('//div[@class="box"]')).toBeVisible();
});
