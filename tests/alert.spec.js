// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("navigation", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto("https://demoqa.com/alerts");
  });

  test("main navigation", async ({ page }) => {
    // Assertions use the expect API.
    await expect(page).toHaveURL("https://demoqa.com/alerts");

    //code to handle the alerts

    page.once('dialog', async dialog => {
      console.log(dialog.message());
      await dialog.accept();
    })
    await page.click('#alertButton')

    page.once('dialog', async dialog => {
      console.log(dialog.message());
      await dialog.accept();
    })
    await page.click('#timerAlertButton')
  });
});