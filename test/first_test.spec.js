const { test, expect } = require('@playwright/test');

test.describe('test suite', () => {
    test('basic test', async ({ page }) => {
        await page.goto('https://playwright.dev/');
        const title = page.locator('.navbar__inner .navbar__title');
        await expect(title).toHaveText('Playwright');
    });

    test('Open Glovo app and navigate to the login page', async ({ page }) => {
        //node_modules/.bin/playwright test -g "Open Glovo app"  test/first_test.spec.js
        await page.goto('https://glovoapp.com/');
        await page.click('#user-register');
        const title = page.locator('.title.mt-0.mb-4');
        await expect(title).toHaveText('Sign up to Glovo');
    });

});