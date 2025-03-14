import { test, expect } from '@playwright/test';

test('Visit Google, search \'switch from java to kotlin\' and click link from linkedin', async ({ page }) => {
  await page.goto('https://google.com');
  await page.waitForTimeout(100);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(100);
  await page.waitForSelector('#W0wltc', { state: 'visible' });
  await page.locator('#W0wltc').click();
  await page.waitForTimeout(100);
  await page.fill('[name="q"]', 'switch from java to kotlin');
  await page.waitForTimeout(100);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(17000);
  await expect(page).toHaveTitle(/switch from java to kotlin/);
  await page.click('text="Why to switch from Java to Kotlin?"');
  expect(page.url()).toContain('linkedin.com');
  await expect(page).toHaveTitle(/Why to switch from Java to Kotlin?/);
  await page.waitForTimeout(1000);
});