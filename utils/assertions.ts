import { expect, Locator, Page } from '@playwright/test';

export class Assertions {

  static async verifyVisible(locator: Locator) {
    await expect(locator).toBeVisible();
  }

  static async verifyEnabled(locator: Locator) {
    await expect(locator).toBeEnabled();
  }

  static async verifyURL(page: Page, path: string) {
    await expect(page).toHaveURL(new RegExp(path));
  }

  static async verifyTextPresent(locator: Locator, text: string) {
    await expect(locator).toContainText(text);
  }

  static async verifyValue(locator: Locator, value: string) {
    await expect(locator).toHaveValue(new RegExp(value, 'i'));
  }
}