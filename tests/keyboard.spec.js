// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("navigation", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto("https://the-internet.herokuapp.com/key_presses");
  });

  test("main navigation", async ({ page }) => {
    // Assertions use the expect API.
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/key_presses");

    //virtual keyboard
    await page.click('#target');
    await page.keyboard.type('here is the text');
    await page.keyboard.down('Shift');
    /**
     // for (let i = 0; i < ' text'.length; i++) {
     // await page.keyboard.press('ArrowLeft');
    }
     */
    for (const i of ' text') {
      await page.keyboard.press('ArrowLeft');
    }

    await page.keyboard.up('Shift');
    await page.keyboard.up('Backspace');
    await page.keyboard.type(' number');
  });
});