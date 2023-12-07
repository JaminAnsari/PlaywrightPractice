import{test , expect , chromium} from '@playwright/test'

test.only('browser context ' , async()=>{

    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://playwright.dev/');


    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    await page1.goto('https://www.google.com/')
})