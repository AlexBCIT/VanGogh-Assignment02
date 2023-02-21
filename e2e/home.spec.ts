// e2e/example.spec.ts

import { test, expect } from '@playwright/test'

const indexPage = 'http://localhost:3000/'

test('should navigate to the paintings page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto(indexPage)
  await page.click('text=See Paintings')
  await expect(page).toHaveURL('http://localhost:3000/paintings')
  await expect(page.locator('h1')).toContainText('Paintings Page')
})


test.describe('Header area', () => {
    test('The title tag', async({ page }) => {
        await page.goto(indexPage)

        await expect(page).toHaveTitle('Van Gogh Experience');
    })

    test('The link tag', async ({ page }) => {
        await page.goto(indexPage)

        const linkTag = page.locator('link[rel="icon"]');
        await expect(linkTag).toHaveAttribute('href', '/myboy.png')
    })
})