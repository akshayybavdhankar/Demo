import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('fortune su');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('ArrowDown');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('fortune sunflower oil 15');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('ArrowDown');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('ArrowDown');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Delight Fortune Sun Lite' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Delight Fortune Sun Lite' }).click();
  await page1.getByRole('button', { name: 'Close' }).click();
  await page1.getByRole('button', { name: 'Add to cart', exact: true }).click();
});