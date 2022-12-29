// @ts-check
const { test, expect } = require('@playwright/test');


class webActions
{
    constructor(page) 
    {
        this.page = page;
    }

    async sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }
}

module.exports={webActions}