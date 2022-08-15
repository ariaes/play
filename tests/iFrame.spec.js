// @ts-check
const { test, chromium } = require("@playwright/test");

test.describe("navigation", () => {

    test("main navigation", async () => {
        const browser = await chromium.launch({ headless: false, slowMo: 300 });
        const page = await browser.newPage()

        // Go to the starting url before each test.
        await page.goto("https://demoqa.com/frames");

        //Logic to handle the iframes
        const frame1 = await page.frame({url: /\/sample/});
        const heading1 = await frame1?.$('h1');
        console.log(await heading1?.innerText());
        
        await browser.close();
    });
});