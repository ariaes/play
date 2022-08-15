// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("navigation", () => {

  test("main navigation", async ({ page }) => {
    // Assertions use the expect API.
    await page.goto("https://the-internet.herokuapp.com/dropdown");
    const dropdown = await page.$('#dropdown')
    // value
    await dropdown?.selectOption({ value: '1' })
    //label
    await dropdown?.selectOption({ label: 'Option 2' })

    //index
    await dropdown?.selectOption({ index: 1 })

  });
});