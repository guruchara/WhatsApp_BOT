const puppeteer = require("puppeteer");

async function scrape(url) {
  const browser = await puppeteer.launch({
     headless: false, 
     args: ['--start-maximized'],
     defaultViewport:null
  });

  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForSelector("span[title='Guru']",{delay:1000});
  const target = await page.$("span[title='Guru']");
  await target.click();
 

  await page.waitForSelector("div[class='p3_M1']")
  await page.click("div[class='p3_M1']")
  for (let i = 0; i < 1000; i++) {
    await page.type("div[class='p3_M1']",`Happy holi `,{delay:50});
    await page.keyboard.press("Enter");
  }
}

scrape("https://web.whatsapp.com");