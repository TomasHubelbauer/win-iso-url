const puppeteer = require('puppeteer');
const fs = require('fs-extra');

// Crash the process in case of an unhandled promise rejection
process.once('unhandledRejection', error => { throw error; });

void async function () {
  const browser = await puppeteer.launch({ headless: false });
  const [page] = await browser.pages();

  // Set Firefox Linux user agent to avoid getting the Windows Media Creation Tool page
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent/Firefox#Linux
  await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20100101 Firefox/10.0');

  // Go to the Windows 10 ISO page (ISO download configurator)
  await page.goto('https://www.microsoft.com/en-us/software-download/windows10ISO');

  // Select the edition (last of the available [probably only] option(s))
  await page.$eval('#product-edition', select => select.value = select.options[select.options.length - 1].value);

  // Click the *Confirm* button beneath the edition selector
  await page.click('#submit-product-edition');

  // Select English International among the language selector options
  await page.waitForSelector('#product-languages');
  await page.$eval('#product-languages', select => select.value = '{"id":"9030","language":"English International"}');

  // Click the *Confirm* button beneath the language selector
  await page.click('#submit-sku');

  // Wait for the link with the ISO download URL to appear on the page
  await page.waitForSelector('a[href^="https://software-download"][href*="x64"]');

  // Obtain the URL of the x64 bitness ISO download link
  const href = await page.$eval('a[href^="https://software-download"][href*="x64"]', a => a.href);

  // Write the URL to a file as well as to the console to be able to use it in scripts
  await fs.writeFile('win.url', href);
  console.log(href);

  await browser.close();
}()
