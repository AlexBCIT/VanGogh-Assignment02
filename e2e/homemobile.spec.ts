import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPhone XR']
})

test.describe("the mobile viewport for iphone XR", () => {
    test('Testing for margin on iPhone XR', async ({ page }) => {
        await page.goto('http://localhost:3000/')

        const mainContainer = page.locator('#mainText');

        const checkingBackgroundColour = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("margin")
        })

        console.log(checkingBackgroundColour)
        expect(checkingBackgroundColour).toBe("48px 16px 16px");
    })
    test('Testing for button border color on Iphone XR', async ({ page }) => {
        await page.goto('http://localhost:3000/')

        const mainButton = page.locator('#buttonMain');

        const checkingBackgroundColour = await mainButton.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("border")
        })

        console.log(checkingBackgroundColour)
        expect(checkingBackgroundColour).toBe("2px solid rgb(255, 255, 255)");
    })
})