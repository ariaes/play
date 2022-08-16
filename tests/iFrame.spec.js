// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("navigation", () => {
    test.beforeEach(async ({ page }) => {
        // Go to the starting url before each test.
            await page.goto("https://demoqa.com/frames");
        });

        test("main navigation", async ({ page }) => {
            // Assertions use the expect API.
            await expect(page).toHaveURL("https://demoqa.com/frames");

            //Logic to handle the iframes
            const frame1 = await page.frame({ url: /\/sample/ });
            const heading1 = await frame1?.$('h1');
            console.log(await heading1?.innerText());

        });
    });