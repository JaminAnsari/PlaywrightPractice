import {test , expext } from '@playwright/test'
//const {test , expect} = require('@playwright/test')

test('first test run', async({page})=>{
   
   //check url 
   await page.goto('https://playwright.dev/');
   const pageURL = await page.url();
   console.log(pageURL);
   await expect(page).toHaveURL(pageURL);

    //check title 
    const titleOfThePage = await page.title();
    console.log(titleOfThePage);
    await expect(page).toHaveTitle(titleOfThePage)



})