const { test, expect } = require('@playwright/test');

test.describe('test suite', () => {
    test('basic test', async ({ page }) => {
        await page.goto('https://playwright.dev/');
        const title = page.locator('.navbar__inner .navbar__title');
        await expect(title).toHaveText('Playwright');
    });

    test('Open Glovo app', async ({ page }) => {
        //node_modules/.bin/playwright test -g "Open Glovo app"  test/first_test.spec.js
        await page.goto('https://glovoapp.com/');
        //   page.waitForURL(1000)
        const title = page.locator('#user-register');
        console.log(title)
        await expect(title).toHaveText('Get started');
        
    })

})