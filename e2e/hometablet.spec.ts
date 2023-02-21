import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['Ipad Air'],
    viewport: {width: 820, height: 1180}
})

test.describe("Testing for home tablet", () => {
    test('Testing for margins on Tablet', async ({ page }) => {
        await page.goto('http://localhost:3000/')

        const mainContainer = page.locator('#mainText');

        const checkingBackgroundColour = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("margin")
        })

        console.log(checkingBackgroundColour)
        expect(checkingBackgroundColour).toBe("48px 16px 16px");
    })
})