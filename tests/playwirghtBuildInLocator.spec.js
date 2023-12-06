const{test , expect}= require('@playwright/test');

test('build locator practice ', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //getByAltText - 
    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    //getByplaceholder
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    //getByRole - any actionable tag such as link , button , checkbox we can use this method 
    await page.getByRole('button',{type: 'submit'}).click();

    const dashboradLogo = await page.getByAltText('client brand banner')
    await expect(dashboradLogo).toBeVisible();

    const text = await page.getByText(' Today')
    await expect(text).toBeVisible();

   await expect(await page.getByText(' Today')).toBeVisible()

})