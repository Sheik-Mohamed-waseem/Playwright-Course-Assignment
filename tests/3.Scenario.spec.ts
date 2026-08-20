import { test, expect } from '@playwright/test';

test('Validate Input Form Submit', async ({ page }) => {

    //open the application
    await page.goto('https://www.testmuai.com/selenium-playground/');

    //open the submit form
    await page.getByRole('link', { name: 'Input Form Submit' }).click();

    //valiate the expected page
    await expect(page).toHaveURL(/input-form-demo/);

    const submitButton = page.getByRole('button', { name: 'Submit' });
    const nameField = page.getByPlaceholder('Name', { exact: true });
    
    //validate the required field
    await submitButton.click();
    await expect(nameField).toHaveJSProperty('validity.valid', false);
   
    //fill in the form details
    await nameField.fill('Waseem');
    await page.getByPlaceholder('Email', { exact: true }).fill('waseem123@gmail.com');
    await page.getByLabel('Password*').fill('Test@123');
    await page.getByPlaceholder('Company', { exact: true }).fill('Testing Company');
    await page.getByPlaceholder('Website', { exact: true }).fill('https://testPL.com');
    await page.getByRole('combobox').selectOption('United States');
    await page.getByPlaceholder('City', { exact: true }).fill('New York');
    await page.getByRole('textbox', { name: 'Address 1' }).fill('123 Main St');
    await page.getByPlaceholder('Address 2', { exact: true }).fill('Apt 4B');
    await page.getByPlaceholder('State', { exact: true }).fill('NY');
    await page.locator("//input[@id='inputZip']").fill('10001');
    await submitButton.click();
  
    //validate the sucessfully submission 
    await expect(
        page.getByText(
            'Thanks for contacting us, we will get back to you shortly.',
            { exact: true }
        )
    ).toBeVisible();
});