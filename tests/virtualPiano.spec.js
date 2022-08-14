// @ts-check
const { test, expect, chromium } = require("@playwright/test");

test.describe("navigation", () => {

    test("main navigation", async ({ page }) => {

        // Go to the starting url before each test.
        await page.goto("https://www.apronus.com/music/lessons/unit01.htm");

        // Assertions use the expect API.
        await expect(page).toHaveURL("https://www.apronus.com/music/lessons/unit01.htm");

        //Click  on the keynotes
        await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button');
        await page.click('#t1 > table > tr:nth-child(2) > td:nth-child(2) > button');
        await page.click('#t1 > table > tr:nth-child(3) > td:nth-child(3) > button');
        await page.click('#t1 > table > tr:nth-child(4) > td:nth-child(4) > button');
        await page.click('#t1 > table > tr:nth-child(5) > td:nth-child(6) > button');
        await page.click('#t1 > table > tr:nth-child(6) > td:nth-child(6) > button');
    });
});