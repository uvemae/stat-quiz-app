import { test, expect } from '@playwright/test';

test.describe('Quiz Application', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should load quiz and show first question', async ({ page }) => {
        await expect(page.locator('h1')).toContainText('Statistikaameti Viktoriin');
        await expect(page.locator('h2')).toContainText('Küsimus 1/10');
    });

    test('should answer question and move to next', async ({ page }) => {
        await page.locator('.option-button').first().click();
        await expect(page.locator('h2')).toContainText('Küsimus 2/10');
    });

    test('should complete quiz and show results', async ({ page }) => {
        for (let i = 0; i < 10; i++) {
            await page.locator('.option-button').first().click();
        }
        await expect(page.locator('h2')).toContainText('Viktoriin lõpetatud');
        await expect(page.locator('.results-table')).toBeVisible();
    });

    test('should restart quiz', async ({ page }) => {
        for (let i = 0; i < 10; i++) {
            await page.locator('.option-button').first().click();
        }
        await page.locator('text=Alusta uuesti').click();
        await expect(page.locator('h2')).toContainText('Küsimus 1/10');
    });

    test('should show score after completing quiz', async ({ page }) => {
        for (let i = 0; i < 10; i++) {
            await page.locator('.option-button').first().click();
        }
        await expect(page.locator('.score')).toContainText(/\d+\/10/);
    });
});
