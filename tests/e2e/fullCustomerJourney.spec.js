import  { test, expect } from '@playwright/test'
import { Homepage } from '../../page-objects/HomePage';
import { LoginPage } from '../../page-objects/LoginPage';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('/');
  await loginPage.enterCredentials();
});

test('Full Customer Journey', async ({ page }) => {
  const homePage = new Homepage(page);
  await expect(page).toHaveTitle(/Swag Labs/);
  await homePage.addToCart(0, "Sauce Labs Backpack", "$29.99");
  await homePage.addToCart(2, "Sauce Labs Bolt T-Shirt", "$15.99");
});
