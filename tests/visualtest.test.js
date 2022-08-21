const { chromium } = require('@playwright/test');
const { ClassicRunner, Eyes, Target, RectangleSize } = require('@applitools/eyes-playwright');

describe(`UI tests for dynamic content using playwright and applitools`, () => {
    // jest timeout is by default 5000ms to run tests, with this we override this value
    jest.setTimeout(50000);

    let browser = null;
    let page = null;
    let context = null;
    const eyes = new Eyes(new ClassicRunner());

    // runs before all tests
    beforeAll(async () => {
        browser = await chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://the-internet.herokuapp.com/dynamic_content');
    });

    // runs after all tests
    afterAll(async () => {
        await browser.close();
    });

    test(`Should look ok`, async () => {
        await page.waitForSelector('h3', { state: 'attached' });
        await eyes.open(page, 'The internet', 'Dynamic content', new RectangleSize(800, 800));
        await eyes.check(Target.window().fully());
        await eyes.close();

    });
});
