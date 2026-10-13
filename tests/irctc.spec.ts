import { test, expect } from '@playwright/test';
//npx playwright test tests/irctc.spec.ts --project=chromium --headed
//npx playwright codegen https://www.irctc.co.in/nget/train-search

test('test', async ({ page }) => {
  await page.goto('https://www.irctc.co.in/nget/train-search');
  await page.getByText('English').click();
  await page.getByRole('searchbox', { name: 'Enter From station. Input is' }).click();
  await page.getByRole('searchbox', { name: 'Enter From station. Input is' }).fill('pune');
  await page.getByText('PUNE JN. - PUNE (PUNE)').click();
  await page.getByRole('searchbox', { name: 'Enter To station. Input is' }).click();
  await page.getByRole('searchbox', { name: 'Enter To station. Input is' }).fill('Delhi');
  await page.getByRole('option', { name: 'DELHI JN. - DLI (NEW DELHI)' }).click();
  await page.getByRole('textbox').click();
  await page.getByText('19').click();
  await page.getByText('All Classes').click();
  await page.getByRole('option', { name: 'AC First Class (1A)' }).click();
  await page.locator('div').filter({ hasText: /^GENERAL$/ }).nth(3).click();
  await page.getByRole('option', { name: 'LADIES' }).click();
  await page.getByRole('button', { name: 'Search Trains' }).click();
  await page.getByText('AC First Class (1A) Refresh').click();
});