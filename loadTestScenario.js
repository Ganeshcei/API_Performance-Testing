const { default: test } = require("@playwright/test");
const { webActions } = require("./tests/configSetting");
const { pages } = require("./webElements/pages");



async function apiEcommerceLoadTest(page) 
 {

     let webActionObj=new webActions(page);
    //Landing Page
    await page.goto(pages.url);
    console.log("Landing Page Done")

    //Search And Filter
   // await page.goto('https://www.apiwebstore.org');
    await page.locator(pages.browseAll).click();
    await page.locator(pages.pageWiseFilter1).click();
    await page.locator(pages.pageWiseFilter2).click();
    console.log("Search abd Filter Done")

    //Product page+standard
    await webActionObj.sleep(5000);
    await page.locator(pages.searchIcon).click();
    await page.locator(pages.standardProduct).click();
    await page.locator(pages.pdfSelection).click();
    await page.locator(pages.digitalSelection).click();
    await page.locator(pages.pdfAndDigital).click();
    await page.locator(pages.addCart).click()
    await page.locator(pages.addCartIframe).click();
    console.log("Add standard product add to cart")


    //Product page+Data sheets
    await page.locator(pages.apiLogo).click();
    await webActionObj.sleep(5000);
    await page.locator(pages.browseAll).click();
    await webActionObj.sleep(2000);
    await page.locator(pages.dataSheet).click();
    await page.locator(pages.quantity).click();
    await page.locator(pages.addCart).click()
    await webActionObj.sleep(2000);
    await page.locator(pages.addCartIframe).click();
    console.log("Add data sheets product add to cart")

    //Cart Page
    await webActionObj.sleep(2000);
    await page.locator(pages.cartButton).click();
    await webActionObj.sleep(2000);
    console.log("Cart page")
}


  module.exports = { apiEcommerceLoadTest};