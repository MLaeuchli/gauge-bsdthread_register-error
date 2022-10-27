/* beforeScenario, afterScenario, step, gauge */
const path = require('node:path');
const {
  goto,
  openBrowser,
  closeBrowser
} = require('taiko');

const headless = process.env.headless_chrome.toLowerCase() === 'true';

gauge.screenshotFn = async function () {
  return await screenshot({ encoding: 'base64' });
};

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

step('Go to <url>', async url => {
  await goto(url);
});
