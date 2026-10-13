# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: irctc.spec.ts >> test
- Location: tests\irctc.spec.ts:5:5

# Error details

```
Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.irctc.co.in/nget/train-search
Call log:
  - navigating to "https://www.irctc.co.in/nget/train-search", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | //npx playwright test tests/irctc.spec.ts --project=chromium --headed
  3  | //npx playwright codegen https://www.irctc.co.in/nget/train-search
  4  | 
  5  | test('test', async ({ page }) => {
> 6  |   await page.goto('https://www.irctc.co.in/nget/train-search');
     |              ^ Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.irctc.co.in/nget/train-search
  7  |   await page.getByText('English').click();
  8  |   await page.getByRole('searchbox', { name: 'Enter From station. Input is' }).click();
  9  |   await page.getByRole('searchbox', { name: 'Enter From station. Input is' }).fill('pune');
  10 |   await page.getByText('PUNE JN. - PUNE (PUNE)').click();
  11 |   await page.getByRole('searchbox', { name: 'Enter To station. Input is' }).click();
  12 |   await page.getByRole('searchbox', { name: 'Enter To station. Input is' }).fill('Delhi');
  13 |   await page.getByRole('option', { name: 'DELHI JN. - DLI (NEW DELHI)' }).click();
  14 |   await page.getByRole('textbox').click();
  15 |   await page.getByText('19').click();
  16 |   await page.getByText('All Classes').click();
  17 |   await page.getByRole('option', { name: 'AC First Class (1A)' }).click();
  18 |   await page.locator('div').filter({ hasText: /^GENERAL$/ }).nth(3).click();
  19 |   await page.getByRole('option', { name: 'LADIES' }).click();
  20 |   await page.getByRole('button', { name: 'Search Trains' }).click();
  21 |   await page.getByText('AC First Class (1A) Refresh').click();
  22 | });
```