import webdriver from 'selenium-webdriver';

export const getApiToken = async () => {
  let driver = await new webdriver.Builder().forBrowser('chrome').build();
  let token = '';
  try {
    await driver.get('https://www.nfl.com/scores');
    token = await driver.executeScript('return api_token');

  } finally {
    await driver.quit();
    return token.access_token;
  }
};