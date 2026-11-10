import { test, expect } from '@playwright/test';

test('searches for T-shirts and shows Faded Short Sleeve T-Shirts @web', async ({ page }) => {
  await page.goto('http://automationpractice.pl/index.php');
  await page.locator('#search_query_top').fill('T-shirts');
  await page.locator('button[name="submit_search"]').click();

  await expect(page.getByText('Faded Short Sleeve T-Shirts', { exact: true })).toBeVisible();
});