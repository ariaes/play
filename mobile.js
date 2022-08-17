const { chromium, devices } = require('@playwright/test');
const samsung = devices['Galaxy Note II'];

(async () =>{
  //mobile code
  const browser = await chromium.launch({headless: false, slowMo: 300});
  const context = await browser.newContext({
    ...samsung,
    permissions: ['geolocation'],
    gelocation: {latitude: 19.432608, longitude:-99.133209},
    lcoale: 'fr-FR'
  });
  const page = await context.newPage();
  await page.goto('https://maps.google.com');
  
  await browser.close();
})();

/*
List of devices
https://github.com/microsoft/playwright/blob/main/packages/playwright-core/src/server/deviceDescriptorsSource.json*/