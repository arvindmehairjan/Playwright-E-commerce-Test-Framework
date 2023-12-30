import { test, expect } from '@playwright/test';
import { ProductPage } from '../../page-objects/ProductPage';
import { LoginPage } from '../../page-objects/LoginPage';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('/');
  await loginPage.enterCredentials();
});

test('Full Customer Journey', async ({ page }) => {
  const productPage = new ProductPage(page);

  await expect(page).toHaveTitle(/Swag Labs/);
  await productPage.addToCart(0, 'Sauce Labs Backpack', '$29.99');
  await productPage.clickOnCart(1);
  // TODO:
  // Add to cartpage
  // Add Checkoutpage
  // add confirmation page
});
