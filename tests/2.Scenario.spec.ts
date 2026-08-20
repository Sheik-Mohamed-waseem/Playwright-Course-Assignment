import { test, expect } from '@playwright/test';

test('Validate Default value 15 slider can be dragged to 95', async ({ page }) => {
    
    //open the application
    await page.goto('https://www.testmuai.com/selenium-playground/');
   
    //open the drag and drop sliders
    await page.getByRole('link', { name: 'Drag & Drop Sliders' }).click();
 
    //validate the expected page
    await expect(page).toHaveURL("https://www.testmuai.com/selenium-playground/drag-drop-range-sliders-demo/");

    const slider = page.getByText('Default value 15')
        .locator('..')
        .locator('input[type="range"]');

    await expect(slider).toHaveValue('15');

    const box = await slider.boundingBox();

    if (!box) {
        throw new Error('Slider not found');
    }

    const centerY = box.y + box.height / 2;

    // Drag the slider to the right
    await page.mouse.move(box.x, centerY);
    await page.mouse.down();
    await page.mouse.move(box.x + box.width, centerY, { steps: 20 });
    await page.mouse.up();


    await slider.focus();

    while (Number(await slider.inputValue()) > 95) {
        await slider.press('ArrowLeft');
    }

    while (Number(await slider.inputValue()) < 95) {
        await slider.press('ArrowRight');
    }
    
    //verify the slider value
    await expect(slider).toHaveValue('95');
    await expect(page.getByText('95', { exact: true })).toBeVisible();
});