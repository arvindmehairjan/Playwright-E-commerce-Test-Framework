import { LoginPage } from '../../page-objects/LoginPage';
import  { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('/');
  await loginPage.enterCredentials();
});

test('Full Customer Journey', async ({ page }) => {
  await expect(page).toHaveTitle(/Swag Labs/);
});
