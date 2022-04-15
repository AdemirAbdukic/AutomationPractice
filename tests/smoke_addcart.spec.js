const { test, expect } = require('@playwright/test');

test('Add to cart', async ({ page }) => {
  await page.goto('');
  await page.locator('#search_query_top').fill("Faded Short Sleeve T-shirts");
  await page.locator('//button[@class="btn btn-default button-search"]').click();
  await expect(page).toHaveURL('http://automationpractice.com/index.php?controller=search&orderby=position&orderway=desc&search_query=Faded+Short+Sleeve+T-shirts&submit_search=');
  await page.locator('//h5/a[@title="Faded Short Sleeve T-shirts"]').click();
  await expect(page).toHaveURL('http://automationpractice.com/index.php?id_product=1&controller=product&search_query=Faded+Short+Sleeve+T-shirts&results=1');
  await page.locator('//button[@class="exclusive"]').click();
  await page.locator('//span[@class="cross"]').click();
  await page.locator('//a[@title="View my shopping cart"]').click();
  await expect(page).toHaveURL('http://automationpractice.com/index.php?controller=order');
  await expect(page.locator('#summary_products_quantity')).toBeVisible();
 }
)
