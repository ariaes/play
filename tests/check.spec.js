// @ts-check
const { test, webkit } = require("@playwright/test");

test.describe("navigation", () => {

    test("main navigation", async () => {
        const browser = await webkit.launch({ headless: false, slowMo: 300 });
        const page = await browser.newPage()

        // Go to the starting url before each test.
        await page.goto("https://www.w3schools.com/howto/howto_css_custom_checkbox.asp");

        // Check the second checkbox
        const checks = await page.$$('#main  div :nth-child(1) > input[type="checkbox"]');

        await checks[1].check();
        await checks[0].check();

        // Select radio button
        const radios = await page.$$('#main  div :nth-child(1) > input[type="radio"]')

        await radios[1].check()

        await browser.close();
    });
});