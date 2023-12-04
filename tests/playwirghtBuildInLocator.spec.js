const{test , expect}= require('@playwright/test');

test('build locator practice ', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByAltText('company-branding');
})