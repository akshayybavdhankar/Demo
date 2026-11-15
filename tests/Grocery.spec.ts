import {expect, test} from '@playwright/test';

test.describe('Grocery tests', () => {
    test('Out of Stock Fruits Selection', async ({ page }) => {
        await page.setViewportSize({ width: 1240, height: 900 });
        const homeUrl = 'https://demo-grocery.myeasystore.in';

        await page.goto(homeUrl, { waitUntil: 'domcontentloaded', timeout: 15000 });
        await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => undefined);
        await expect(page).toHaveURL(/https:\/\/demo-grocery\.myeasystore\.in\/?$/);
        await page.locator('div.pointer.card').filter({ hasText: 'Fruits' }).scrollIntoViewIfNeeded();
    
        const fruits = page
        .locator('div.pointer.card > div > span:nth-child(2) > p > strong:nth-child(1)')
        .getByText('Fruits', { exact: true });
        await expect(fruits).toBeVisible();
        await fruits.click();

         // Scroll Mosambi into view
        const Mosambi = page
        .locator('div#productList>div>div>span')
        .getByText('Mosambi / मौसंबी', { exact: true });
        await expect(Mosambi).toBeVisible({ timeout: 15000 });
        await Mosambi.click();

        // Scroll popup container to view messege "Out of Stock" button
        const popup = page.locator('div.modal-content>div.modal-body');
        const outOfStockBtn = page
                    .locator('div#productList > div > div > span > div.card-body > .btn.btn-outline-primary.btn-block.btn-lg')
                    .filter({ hasText: 'Out of Stock'})
                    .nth(0);
        while (!(await outOfStockBtn.isVisible())) {
            await popup.evaluate(el => {
                el.scrollBy(0, 200);
            });
         await page.waitForTimeout(300);
        }
       await outOfStockBtn.isVisible();

   
        // Scroll popup container to bottom and click Hide button
        const hidebtn = page
                    .locator('div.col-12>button.btn.btn-link-secondary.btn-md')
                    .getByText('Hide', { exact: true });
        await expect(hidebtn).toBeVisible({ timeout: 15000 });
        await hidebtn.click();
    }),
    test('In of Stock Fruits Selection', async ({ page }) => {
        await page.setViewportSize({ width: 1240, height: 900 });
        const homeUrl = 'https://demo-grocery.myeasystore.in';

        await page.goto(homeUrl, { waitUntil: 'domcontentloaded', timeout: 15000 });
        await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => undefined);
        await expect(page).toHaveURL(/https:\/\/demo-grocery\.myeasystore\.in\/?$/);
        await page.locator('div.pointer.card').filter({ hasText: 'Fruits' }).scrollIntoViewIfNeeded();
    
        const fruits = page
        .locator('div.pointer.card > div > span:nth-child(2) > p > strong:nth-child(1)')
        .getByText('Fruits', { exact: true });
        await expect(fruits).toBeVisible();
        await fruits.click();

         // Scroll Mosambi into view
        const NagpurOrange = page
        .locator('div.container-fluid>div#productList>div:nth-child(14)>div>span:nth-child(2)')
        .getByText('Nagpur Orange', { exact: true });
        await expect(NagpurOrange).toBeVisible({ timeout: 15000 });
        await NagpurOrange.click();

        const popup = page.locator('div.modal-content > div.modal-body');

        await expect(popup).toBeVisible({ timeout: 15000 });

        // Validate fruit name inside popup
        const fruitName = popup.locator('h4.color-primary').first();

        //await expect(fruitName).toBeVisible();
        await expect(fruitName).toHaveText('Nagpur Orange');

        // Add To Cart
        const addToCartBtn = popup.getByRole('button', {
            name: 'Add To Cart',
            exact: true,
        });

        await expect(addToCartBtn).toBeVisible();
        await addToCartBtn.click();

        // Scroll popup container to view messege "Out of Stock" button
     //   const popup = page.locator('div.modal-content>div.modal-body');
    //     const outOfStockBtn = page
    //                 .locator('div.container-fluid>div#productList > div > div > span > div.card-body > .btn.btn-outline-primary.btn-block.btn-lg')
    //                 .filter({ hasText: 'Out of Stock'})
    //                 .nth(0);
    //     while (!(await outOfStockBtn.isVisible())) {
    //         await popup.evaluate(el => {
    //             el.scrollBy(0, 200);
    //         });
    //      await page.waitForTimeout(300);
    //     }
    //    await outOfStockBtn.isVisible();

   
        // Scroll popup container to bottom and click Hide button
        // const hidebtn = page
        //             .locator('div.col-12>button.btn.btn-link-secondary.btn-md')
        //             .getByText('Hide', { exact: true });
        // await expect(hidebtn).toBeVisible({ timeout: 15000 });
        // await hidebtn.click();
    })
    //     test('Discount Fruits Selection', async ({ page }) => {
    //     await page.setViewportSize({ width: 1240, height: 900 });
    //     const homeUrl = 'https://demo-grocery.myeasystore.in';

    //     await page.goto(homeUrl, { waitUntil: 'domcontentloaded', timeout: 15000 });
    //     await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => undefined);
    //     await expect(page).toHaveURL(/https:\/\/demo-grocery\.myeasystore\.in\/?$/);
    //     await page.locator('div.pointer.card').filter({ hasText: 'Fruits' }).scrollIntoViewIfNeeded();
    
    //     const fruits = page
    //     .locator('div.pointer.card > div > span:nth-child(2) > p > strong:nth-child(1)')
    //     .getByText('Fruits', { exact: true });
    //     await expect(fruits).toBeVisible();
    //     await fruits.click();

    //     const expectedFruit = [
    //                  'Pomegranate',
    //                   'Chikoo',
    //                   'Nagpur Orange'
    //                 ];

    //     const popup = page.locator('div.modal-content > div.modal-body');

    //     await expect(popup).toBeVisible({ timeout: 15000 });

    //     await expect(
    //         popup.locator('h4.color-primary')
    //     ).toHaveText(expectedFruit);

    //     await popup.getByRole('button', {
    //         name: 'Add To Cart',
    //         exact: true,
    //     }).click();
    //     })

});