import { test } from '@playwright/test';
import { IrctcPage } from '../pages/irctc.page';
import { Assertions } from '../utils/assertions';
import { irctcData } from '../test-data/irctcData';

test('IRCTC Train Search', async ({ page }) => {

  const irctc = new IrctcPage(page);

  await irctc.navigate();

  await Assertions.verifyURL(
    page,
    'train-search'
  );

  await Assertions.verifyVisible(
    irctc.englishBtn()
  );

  await irctc.englishBtn().click();

  await Assertions.verifyVisible(
    irctc.fromStation()
  );

  await irctc.selectFromStation(
    irctcData.fromStation
  );

  await Assertions.verifyVisible(
    irctc.toStation()
  );

  await irctc.selectToStation(
    irctcData.toStation
  );

  await irctc.selectDate('19');

  await irctc.selectClass();

  await irctc.selectQuota();

  await Assertions.verifyEnabled(
    irctc.searchButton()
  );

  await irctc.searchTrain();

  await Assertions.verifyVisible(
    page.getByText('AC First Class (1A)')
  );

  await page.screenshot({
    path: 'irctc-search-result.png',
    fullPage: true
  });
});