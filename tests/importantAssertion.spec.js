import{test , expect} from '@playwright/test'

test('important Assertion' ,async({page})=>{
    await page.goto('https://www.demoblaze.com/');
    await expect(page).toHaveURL('https://www.demoblaze.com/');
    const titleCheck = await page.title();
    await expect(page).toHaveTitle(titleCheck);
    console.log(titleCheck);

    await expect(await page.getByText('Phones')).toBeVisible();
    await expect(await page.getByAltText('First slide')).toBeVisible();
    
})