// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("navigation", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto("https://paint.js.org/");
  });

  test("main navigation", async ({ page }) => {
    // Assertions use the expect API.
    await expect(page).toHaveURL("https://paint.js.org/");

    //draw a rectangle
    await page.mouse.move(200,200);
    await page.mouse.down();
    await page.mouse.move(400,200);
    await page.mouse.move(400,400);
    await page.mouse.move(200,400);
    await page.mouse.move(200,200);
    await page.mouse.up();
    

  });
});