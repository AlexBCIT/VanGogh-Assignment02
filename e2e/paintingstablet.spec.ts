import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['Ipad Air'],
    viewport: {width: 820, height: 1180}
})

test.describe("Testing for paintings tablet", () => {
    test('Testing for font size on Tablet', async ({ page }) => {
        await page.goto('http://localhost:3000/paintings')

        const decriptionText = page.locator('div:nth-child(3) > #descText');

        const checkingFontSize2 = await decriptionText.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("font-size")
        })

        console.log(checkingFontSize2)
        expect(checkingFontSize2).toBe("16px");
    })
})