const pages=
{

 "url" : "https://www.apiwebstore.org",
 "browseAll": "//*[@type='button' and @class='MuiButtonBase-root MuiButton-root MuiButton-contained ws-primary-button-no-border browseAll']",
 "pageWiseFilter1":"(//*[@class='coveo-pager-list-item'])[2]",
 "pageWiseFilter2":"(//*[@class='coveo-pager-list-item'])[3]",
 "searchIcon":"//*[@class='SearchIcon']",
 "standardProduct":"//*[@class='title' and @href='/standards/2554']",
 "pdfSelection":"(//*[@class='quantity-modifier modifier-right'])[1]",
 "digitalSelection":"(//*[@class='quantity-modifier modifier-right'])[2]",
 "pdfAndDigital":"(//*[@class='quantity-modifier modifier-right'])[3]",
 "addCart": "//*[@type='button' and @class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSecondary']",
 "addCartIframe" : "//*[@class='addtoCartButton']",
 "apiLogo": "//*[@alt='API Webstore Header Logo']",
 "dataSheet": "//*[@class='title' and @href='/datasheets/616']",
 "quantity":"(//*[@class='quantity-modifier modifier-right'])[1]",
 "cartButton": "(//*[@class='cartText'])[1]"

}

module.exports={pages}