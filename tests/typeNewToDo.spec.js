// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("navigation", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto("https://demo.playwright.dev/todomvc/#/");
  });

  test("main navigation", async ({ page }) => {
    // Assertions use the expect API.
    await expect(page).toHaveURL("https://demo.playwright.dev/todomvc/#/");

    const new_todo = await page.$('.new-todo');
    await new_todo?.type('todo1');
    await page.keyboard.press('Enter');
  });
});