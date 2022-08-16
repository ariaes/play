// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("navigation", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto("https://demoqa.com/automation-practice-form");
  });

  test("main navigation", async ({ page }) => {
    // Assertions use the expect API.
    await expect(page).toHaveURL("https://demoqa.com/automation-practice-form");

    //print element state
    const firstName = await page.$('#firstName');
    const hobbies = await page.$('#hobbies-checkbox-1');
    const submitButton = await page.$('#submit');

    console.log(await firstName?.isDisabled());
    console.log(await firstName?.isEnabled());
    console.log(await firstName?.isEditable());
    console.log(await hobbies?.isChecked());
    console.log(await hobbies?.isVisible());
    console.log(await submitButton?.isHidden());
    console.log(await submitButton?.isVisible());

  });
});