const {test , expect} = require('@playwright/test');
const exp = require('constants');

test('locator using locator function', async({page})=>{

    await page.goto('https://www.demoblaze.com/')
    await page.locator('id=login2').click()
    await page.locator('#loginusername').fill('ansari');
    await page.locator('#loginpassword').fill('test123123');
    const loginBtn =  await page.locator("//button[text()='Log in']");
    await loginBtn.click();
    await expect(loginBtn).toBeVisible();

})

test('locator using action function', async({page})=>{

    await page.goto('https://www.demoblaze.com/')
    await page.click('id=login2')
    await page.fill('#loginusername', 'ansari');
    await page.fill('#loginpassword','test123213');
    await page.click("//button[text()='Log in']");
})

test('multiple webelement capture' , async({page})=>{
    await page.goto('https://www.demoblaze.com/')
    const elements = await page.$$('//a');
    for(const link of elements){
        console.log(await link.textContent());
        const linkOfpage = await link.textContent();
        console.log(linkOfpage);
    }
})