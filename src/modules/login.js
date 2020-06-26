import { BASE_URL } from '../config.js';

export const login = async (page) => {
  await page.goto(`${BASE_URL}_login/index`);
  await page.waitForSelector('#login');
  await page.type('#login', process.env.LOGIN);
  await page.type('#pass', process.env.PASSWORD);
  await page.click('#login_bt');
};
