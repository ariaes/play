// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("navigation", () => {
    test.beforeEach(async ({ page }) => {
        // Go to the starting url before each test.
        await page.goto("https://www.w3schools.com/howto/howto_css_custom_checkbox.asp");
      });
    
      test("main navigation", async ({ page }) => {
        // Assertions use the expect API.
        await expect(page).toHaveURL("https://www.w3schools.com/howto/howto_css_custom_checkbox.asp");

        // Check the second checkbox
        const checks = await page.$$('#main  div :nth-child(1) > input[type="checkbox"]');

        await checks[1].check();
        await checks[0].check();

        // Select radio button
        const radios = await page.$$('#main  div :nth-child(1) > input[type="radio"]')

        await radios[1].check()

    });
});