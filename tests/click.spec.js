// @ts-check
const { test,  firefox } = require("@playwright/test");

test.describe("navigation", () => {

  test("main navigation", async () => {
    const browser = await firefox.launch({ headless: false, slowMo: 300 }); 
    const page = await browser.newPage()

    // Go to the starting url before each test.
    await page.goto("https://www.apronus.com/music/lessons/unit01.htm");

    //Scale C mayor
    await page.click('body > div:nth-child(34) > p:nth-child(16) > input[type=button]:nth-child(1)')
    await page.click('body > div:nth-child(34) > p:nth-child(16) > input[type=button]:nth-child(2)')
    await page.click('body > div:nth-child(34) > p:nth-child(16) > input[type=button]:nth-child(3)')
    await page.click('body > div:nth-child(34) > p:nth-child(16) > input[type=button]:nth-child(4)')
    await page.click('body > div:nth-child(34) > p:nth-child(16) > input[type=button]:nth-child(5)')
    await page.click('body > div:nth-child(34) > p:nth-child(16) > input[type=button]:nth-child(6)')
    await page.click('body > div:nth-child(34) > p:nth-child(16) > input[type=button]:nth-child(7)')
    await page.click('body > div:nth-child(34) > p:nth-child(16) > input[type=button]:nth-child(8)')

    await page.click('body > div:nth-child(34) > p:nth-child(16) > input[type=button]:nth-child(8)')
    await page.click('body > div:nth-child(34) > p:nth-child(16) > input[type=button]:nth-child(7)')
    await page.click('body > div:nth-child(34) > p:nth-child(16) > input[type=button]:nth-child(6)')
    await page.click('body > div:nth-child(34) > p:nth-child(16) > input[type=button]:nth-child(5)')
    await page.click('body > div:nth-child(34) > p:nth-child(16) > input[type=button]:nth-child(4)')
    await page.click('body > div:nth-child(34) > p:nth-child(16) > input[type=button]:nth-child(3)')
    await page.click('body > div:nth-child(34) > p:nth-child(16) > input[type=button]:nth-child(2)')
    await page.click('body > div:nth-child(34) > p:nth-child(16) > input[type=button]:nth-child(1)')
    
    await browser.close();
  });
});