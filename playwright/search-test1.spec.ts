import { test, expect } from '@playwright/test';

test('Visit Google, search \'where is AI\' and click article from Medium.com', async ({ page }) => {
  await page.goto('https://google.com');
  await page.waitForTimeout(100);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(100);
  await page.waitForSelector('#W0wltc', { state: 'visible' });
  await page.locator('#W0wltc').click();
  await page.waitForTimeout(100);
  await page.fill('[name="q"]', 'where is AI');
  await page.waitForTimeout(100);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(17000);
  await expect(page).toHaveTitle(/where is AI/);
  await page.waitForTimeout(200);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(100);
  await page.click('[aria-label="Page 3"]');
  await page.waitForTimeout(100);
  await page.click('text="Where is AI, where am I?"');
  expect(page.url()).toContain('medium.com');
  await expect(page).toHaveTitle(/Where is AI, where am I?/);
  await page.waitForTimeout(1000);
});