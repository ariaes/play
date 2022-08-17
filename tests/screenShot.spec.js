// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("navigation", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto("https://applitools.com/");
  });

  test("main navigation", async ({ page }) => {
    // Assertions use the expect API.
    await expect(page).toHaveURL("https://applitools.com/");

    await page.screenshot({path: './test-results/screenShot.png'});
    const logo = await page.$('.logo');
    await logo?.screenshot({path: './test-results/logo.png'});
    await page.screenshot({path: './test-results/fullPage.png', fullPage: true});

  });
});