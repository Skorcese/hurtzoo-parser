import puppeteer from 'puppeteer';

export const init = async ({ headless }) => {
  const browser = await puppeteer.launch({
    headless,
    args: ['--remote-debugging-port=9222'],
  });
  const page = await browser.newPage();

  await page.setViewport({ width: 1400, height: 800 });

  return { browser, page };
};

export const close = async (browser) => {
  browser.close();
};
