/* beforeScenario, afterScenario, step */
const path = require('node:path');
const {
  goto
} = require('taiko');

beforeScenario(async () => {
  await openBrowser({
    headless,
    ignoreCertificateErrors: true,
    args: ['--disable-gpu', '--disable-dev-shm-usage', '--disable-setuid-sandbox', '--no-first-run', '--no-sandbox', '--no-zygote'],
  });
});

afterScenario(async () => {
  await closeBrowser();
});

step('Go to <url>', url => {
  goto(url);
});