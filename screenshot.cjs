const puppeteer = require('puppeteer');
const path = require('path');

const SCREENSHOTS = [
  { name: 'home', path: '/' },
  { name: 'survey', path: '/survey' }
];

// iPhone 6.5" display: 1284 x 2778
const WIDTH = 1284;
const HEIGHT = 2778;

async function takeScreenshots() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: WIDTH,
    height: HEIGHT,
    deviceScaleFactor: 1
  });

  for (const screen of SCREENSHOTS) {
    try {
      await page.goto(`http://localhost:4173${screen.path}`, {
        waitUntil: 'networkidle0',
        timeout: 30000
      });

      await new Promise(r => setTimeout(r, 1000));

      const filename = `screenshot_${screen.name}_${WIDTH}x${HEIGHT}.png`;
      await page.screenshot({
        path: path.join(__dirname, 'screenshots', filename),
        fullPage: false
      });

      console.log(`✓ ${filename}`);
    } catch (err) {
      console.log(`✗ ${screen.name}: ${err.message}`);
    }
  }

  await browser.close();
  console.log('\nDone!');
}

takeScreenshots();
