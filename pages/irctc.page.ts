import { Page } from '@playwright/test';

export class IrctcPage {

  constructor(private page: Page) {}

  englishBtn = () =>
    this.page.getByText('English');

  fromStation = () =>
    this.page.getByRole('searchbox', {
      name: 'Enter From station. Input is'
    });

  toStation = () =>
    this.page.getByRole('searchbox', {
      name: 'Enter To station. Input is'
    });

  searchButton = () =>
    this.page.getByRole('button', {
      name: 'Search Trains'
    });

  async navigate() {
    await this.page.goto(
      'https://www.irctc.co.in/nget/train-search'
    );
  }

  async selectFromStation(station: string) {

    await this.fromStation().fill(station);

    await this.page
      .getByText('PUNE JN. - PUNE (PUNE)')
      .click();
  }

  async selectToStation(station: string) {

    await this.toStation().fill(station);

    await this.page
      .getByRole('option', {
        name: 'DELHI JN. - DLI (NEW DELHI)'
      })
      .click();
  }

  async selectDate(date: string) {
    await this.page.getByRole('textbox').click();
    await this.page.getByText(date).click();
  }

  async selectClass() {
    await this.page.getByText('All Classes').click();

    await this.page
      .getByRole('option', {
        name: 'AC First Class (1A)'
      })
      .click();
  }

  async selectQuota() {
    await this.page
      .locator('div')
      .filter({ hasText: /GENERAL$/ })
      .nth(3)
      .click();

    await this.page
      .getByRole('option', {
        name: 'LADIES'
      })
      .click();
  }

  async searchTrain() {
    await this.searchButton().click();
  }
}