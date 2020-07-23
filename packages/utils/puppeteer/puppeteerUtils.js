import dotenv from 'dotenv';
import puppeteer from 'puppeteer';

dotenv.config();

export const initBrowser = async () => {
  const browser = await puppeteer.launch({
    headless: process.env.HEADLESS,
    args: [
      '--remote-debugging-port=9222',
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
  });

  const page = await browser.newPage();

  await page.setViewport({ width: 1400, height: 800 });

  return { browser, page };
};

export const close = async (browser) => {
  browser.close();
};
