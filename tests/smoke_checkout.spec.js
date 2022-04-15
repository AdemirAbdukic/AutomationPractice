const {test, expect} = require('@playwright/test');

test.use({
    storageState:('aut_login.json', 'localstorage.json')

})

test('Checkout', async ({page}) => {
    await page.goto('http://automationpractice.com');
   // await page.pause();

    await page.locator('//a[@title="View my shopping cart"]').click();
    await expect(page).toHaveURL('http://automationpractice.com/index.php?controller=order');
    await expect(page.locator('#summary_products_quantity')).toBeVisible();
    await expect(page.locator('//li[@class="step_current  first"]')).toBeVisible();

    await page.locator('//a[@class="button btn btn-default standard-checkout button-medium"]').click();
    await expect(page).toHaveURL('http://automationpractice.com/index.php?controller=order&step=1');
    // await expect(page.locator('//h1[@class="page-heading"]')).toHaveText("Addresses");
    await expect(page.locator('//li[@class="step_current third"]')).toBeVisible();
    await expect(page.locator('#id_address_delivery')).toBeVisible();
    // await expect(page.locator('#id_address_delivery')).toHaveProperty(selected, "selected); //provjerit hocel past kad bude unselected
    await expect(page.locator('#addressesAreEquals')).toBeChecked();
    await expect(page.locator('#address_delivery')).toBeVisible();
    await expect(page.locator('#address_invoice')).toBeVisible();

    await page.locator('//button[@class="button btn btn-default button-medium"]').click();
    await expect(page).toHaveURL('http://automationpractice.com/index.php?controller=order');
    await expect(page.locator('//li[@class="step_current four"]')).toBeVisible();
    await expect(page.locator('//input[@class="delivery_option_radio"]')).toBeChecked();
    await expect(page.locator('#cgv')).not.toBeChecked(); //provjerit to be checked
    await page.locator('#cgv').check();
    await expect(page.locator('#cgv')).toBeChecked();
    
    await page.locator('//button[@class="button btn btn-default standard-checkout button-medium"]').click();
    await expect(page).toHaveURL('http://automationpractice.com/index.php?controller=order&multi-shipping=');
    // await expect(page.locator('//h1[@class="page-heading"]')).toHaveText("Please choose your payment method");
    await expect(page.locator('//li[@class="step_current last"]')).toBeVisible();
    await expect(page.locator('//td[@class="cart_product"]')).toBeVisible();
    await expect(page.locator('//a[@class="bankwire"]')).toBeVisible();
    await expect(page.locator('//a[@class="cheque"]')).toBeVisible();

    await page.locator('//a[@class="bankwire"]').click();
    await expect(page).toHaveURL('http://automationpractice.com/index.php?fc=module&module=bankwire&controller=payment');
    await expect(page.locator('//h1[@class="page-heading"]')).toHaveText("Order summary");
    await expect(page.locator('//div[@class="box cheque-box"]')).toBeVisible();
    await expect(page.locator('//button[@class="button btn btn-default button-medium"]')).toBeVisible();
    
    await page.locator('//button[@class="button btn btn-default button-medium"]').click();
    // await expect(page.locator('//p[@class="cheque-indent"]')).toHaveText("Your order on My Store is complete.");
    await expect(page.locator('//div[@class="box"]')).toBeVisible();

});
