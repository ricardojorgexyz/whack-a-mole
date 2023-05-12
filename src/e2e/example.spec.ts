import { test, expect } from '@playwright/test';

/**
 * NOTE: Running e2e tests on Chrome, Firefox, and Safari
 */

test('Runs on browser', async ({ page }) => {
  await page.goto('https://whack-a-mole-sigma.vercel.app/');
  await expect(page).toHaveTitle(/Whack-a-mole/);
});
