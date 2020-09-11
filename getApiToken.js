import webdriver from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';

export const getApiToken = async () => {
  let options = new chrome.Options();
  options.addArguments("--headless");
  options.addArguments("--disable-gpu");
  options.addArguments("--no-sandbox");
  let driver = await new webdriver.Builder().forBrowser('chrome').setChromeOptions(options).build();
  let token = '';
  try {
    await driver.get('https://www.nfl.com/scores');
    token = await driver.executeScript('return api_token');

  } finally {
    try{
      await driver.quit();
    } catch(err) {
      console.log(err)
    }
    
    return token.access_token;
  }
};