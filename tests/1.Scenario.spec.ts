import { test, expect, Page} from '@playwright/test';

test('Validate simple form message', async ({ page }) => {
   // Test data
    const message = 'Welcome to TestMu AI';

    //open the application
    await page.goto('https://www.testmuai.com/selenium-playground/');
   
    //open simple form demo
    await page.getByRole('link', { name: 'Simple Form Demo' }).click();

    //validate the expected page
    await expect(page).toHaveURL("https://www.testmuai.com/selenium-playground/simple-form-demo/");
 
    //Enter and submit the message
    await page.getByPlaceholder('Please enter your Message').fill(message);
    await page.getByRole('button', { name: 'Get Checked Value' }).click();
    
    //validate the submitted message
    await expect(page.locator('#message')).toHaveText(message);
});