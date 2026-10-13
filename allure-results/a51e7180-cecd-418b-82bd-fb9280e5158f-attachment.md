# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: irctcnew.spec.ts >> IRCTC Train Search
- Location: tests\irctcnew.spec.ts:3:5

# Error details

```
Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.irctc.co.in/nget/train-search
Call log:
  - navigating to "https://www.irctc.co.in/nget/train-search", waiting until "load"

```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test('IRCTC Train Search', async ({ page }) => {
  4   | 
  5   |   // Navigate to IRCTC
> 6   |   await page.goto('https://www.irctc.co.in/nget/train-search');
      |              ^ Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.irctc.co.in/nget/train-search
  7   | 
  8   |   // Verify page loaded
  9   |   await expect(page).toHaveURL(/train-search/);
  10  |   await expect(page.getByText('English')).toBeVisible();
  11  | 
  12  |   // Language selection
  13  |   await page.getByText('English').click();
  14  | 
  15  |   // From Station
  16  |   const fromStation = page.getByRole('searchbox', {
  17  |     name: 'Enter From station. Input is'
  18  |   });
  19  | 
  20  |   await expect(fromStation).toBeVisible();
  21  |   await fromStation.click();
  22  |   await fromStation.fill('pune');
  23  | 
  24  |   const puneStation = page.getByText('PUNE JN. - PUNE (PUNE)');
  25  |   await expect(puneStation).toBeVisible();
  26  |   await puneStation.click();
  27  | 
  28  |   // To Station
  29  |   const toStation = page.getByRole('searchbox', {
  30  |     name: 'Enter To station. Input is'
  31  |   });
  32  | 
  33  |   await expect(toStation).toBeVisible();
  34  |   await toStation.click();
  35  |   await toStation.fill('Delhi');
  36  | 
  37  |   const delhiStation = page.getByRole('option', {
  38  |     name: 'DELHI JN. - DLI (NEW DELHI)'
  39  |   });
  40  | 
  41  |   await expect(delhiStation).toBeVisible();
  42  |   await delhiStation.click();
  43  | 
  44  |   // Date Selection
  45  |   const dateField = page.getByRole('textbox');
  46  |   await expect(dateField).toBeVisible();
  47  |   await dateField.click();
  48  | 
  49  |   await expect(page.getByText('19')).toBeVisible();
  50  |   await page.getByText('19').click();
  51  | 
  52  |   // Class Selection
  53  |   const classDropdown = page.getByText('All Classes');
  54  |   await expect(classDropdown).toBeVisible();
  55  |   await classDropdown.click();
  56  | 
  57  |   const firstClass = page.getByRole('option', {
  58  |     name: 'AC First Class (1A)'
  59  |   });
  60  | 
  61  |   await expect(firstClass).toBeVisible();
  62  |   await firstClass.click();
  63  | 
  64  |   // Quota Selection
  65  |   const quotaDropdown = page
  66  |     .locator('div')
  67  |     .filter({ hasText: /GENERAL$/ })
  68  |     .nth(3);
  69  | 
  70  |   await expect(quotaDropdown).toBeVisible();
  71  |   await quotaDropdown.click();
  72  | 
  73  |   const ladiesQuota = page.getByRole('option', {
  74  |     name: 'LADIES'
  75  |   });
  76  | 
  77  |   await expect(ladiesQuota).toBeVisible();
  78  |   await ladiesQuota.click();
  79  | 
  80  |   // Search Button
  81  |   const searchButton = page.getByRole('button', {
  82  |     name: 'Search Trains'
  83  |   });
  84  | 
  85  |   await expect(searchButton).toBeVisible();
  86  |   await expect(searchButton).toBeEnabled();
  87  | 
  88  |   await searchButton.click();
  89  | 
  90  |   // Results validation
  91  |   await expect(
  92  |     page.getByText('AC First Class (1A)')
  93  |   ).toBeVisible();
  94  | 
  95  |   // Alternative validation
  96  |   await expect(page.locator('body')).toContainText('Refresh');
  97  | 
  98  |   // Screenshot
  99  |   await page.screenshot({
  100 |     path: 'irctc-search-result.png',
  101 |     fullPage: true
  102 |   });
  103 | });
```