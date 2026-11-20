const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  
  try {
    await page.goto('https://hireahuman.ca', {
      waitUntil: 'networkidle0',
      timeout: 30000
    });
    
    // Wait a bit for any animations
    await page.waitForTimeout(2000);
    
    await page.screenshot({
      path: 'hireahuman-desktop.png',
      fullPage: false
    });
    
    console.log('Screenshot saved: hireahuman-desktop.png');
  } catch (error) {
    console.error('Error:', error.message);
  }
  
  await browser.close();
})();
