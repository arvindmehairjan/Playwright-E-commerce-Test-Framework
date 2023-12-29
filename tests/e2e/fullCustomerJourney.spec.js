// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('has title', async ({ page }) => {
  await expect(page).toHaveTitle(/Swag Labs/);
});

test('has url', async ({ page }) => {
  await expect(page).toHaveURL("https://www.saucedemo.com/");
});


test('has the name Swag Labs on login logo', async ({ page }) => {
  // Use the correct class name for the locator
  await expect(page.locator('.login_logo')).toHaveText('Swag Labs');
});
