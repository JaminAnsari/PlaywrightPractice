import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('playwright');
  await page.getByRole('link', { name: 'Playwright: Fast and reliable' }).click();
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.getByRole('link', { name: 'Playwright Test' }).click();
  await page.getByRole('link', { name: 'Playwright Test' }).click();
  await page.getByRole('link', { name: 'Annotations' }).click();
});