import {test , expect } from '@playwright/test'
//const {test , expect} = require('@playwright/test')

test('first test run', async({page})=>{
   
   //check url 
   await page.goto('https://playwright.dev/');
   const pageURL = await page.url();
    await expect(page).toHaveURL(pageURL)
   console.log(pageURL);
   

    //check title 
    const titleOfThePage = await page.title();
    console.log(titleOfThePage);
    await expect(page).toHaveTitle(titleOfThePage)



})