import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPhone XR']
})

test.describe("the mobile viewport for iphone XR", () => {
    test('Testing for text-align on Iphone XR', async ({ page }) => {
        await page.goto('http://localhost:3000/paintings')

        const mainContainer = page.locator('#headerPaint');

        const checkingTextAlign = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("text-align")
        })

        console.log(checkingTextAlign)
        expect(checkingTextAlign).toBe("center");
    })
    test('Testing for font-size on Iphone XR', async ({ page }) => {
        await page.goto('http://localhost:3000/paintings')

        const textMain = page.locator('#textMain');

        const checkingFontSize = await textMain.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("font-size")
        })

        console.log(checkingFontSize)
        expect(checkingFontSize).toBe("18.72px");
    })
})