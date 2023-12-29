// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Swag Labs/);

  await expect(page.locator('.login_logo')).toHaveText("Swag Labs")});
