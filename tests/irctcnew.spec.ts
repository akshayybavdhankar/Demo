import { test, expect } from '@playwright/test';

test('IRCTC Train Search', async ({ page }) => {

  // Navigate to IRCTC
  await page.goto('https://www.irctc.co.in/nget/train-search');

  // Verify page loaded
  await expect(page).toHaveURL(/train-search/);
  await expect(page.getByText('English')).toBeVisible();

  // Language selection
  await page.getByText('English').click();

  // From Station
  const fromStation = page.getByRole('searchbox', {
    name: 'Enter From station. Input is'
  });

  await expect(fromStation).toBeVisible();
  await fromStation.click();
  await fromStation.fill('pune');

  const puneStation = page.getByText('PUNE JN. - PUNE (PUNE)');
  await expect(puneStation).toBeVisible();
  await puneStation.click();

  // To Station
  const toStation = page.getByRole('searchbox', {
    name: 'Enter To station. Input is'
  });

  await expect(toStation).toBeVisible();
  await toStation.click();
  await toStation.fill('Delhi');

  const delhiStation = page.getByRole('option', {
    name: 'DELHI JN. - DLI (NEW DELHI)'
  });

  await expect(delhiStation).toBeVisible();
  await delhiStation.click();

  // Date Selection
  const dateField = page.getByRole('textbox');
  await expect(dateField).toBeVisible();
  await dateField.click();

  await expect(page.getByText('19')).toBeVisible();
  await page.getByText('19').click();

  // Class Selection
  const classDropdown = page.getByText('All Classes');
  await expect(classDropdown).toBeVisible();
  await classDropdown.click();

  const firstClass = page.getByRole('option', {
    name: 'AC First Class (1A)'
  });

  await expect(firstClass).toBeVisible();
  await firstClass.click();

  // Quota Selection
  const quotaDropdown = page
    .locator('div')
    .filter({ hasText: /GENERAL$/ })
    .nth(3);

  await expect(quotaDropdown).toBeVisible();
  await quotaDropdown.click();

  const ladiesQuota = page.getByRole('option', {
    name: 'LADIES'
  });

  await expect(ladiesQuota).toBeVisible();
  await ladiesQuota.click();

  // Search Button
  const searchButton = page.getByRole('button', {
    name: 'Search Trains'
  });

  await expect(searchButton).toBeVisible();
  await expect(searchButton).toBeEnabled();

  await searchButton.click();

  // Results validation
  await expect(
    page.getByText('AC First Class (1A)')
  ).toBeVisible();

  // Alternative validation
  await expect(page.locator('body')).toContainText('Refresh');

  // Screenshot
  await page.screenshot({
    path: 'irctc-search-result.png',
    fullPage: true
  });
});