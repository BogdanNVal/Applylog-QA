import { test, expect, type Page } from '@playwright/test';

function uniqueEmail(prefix: string) {
  return `${prefix}.${Date.now()}@example.com`;
}

async function register(page: Page, email: string, password: string) {
  await page.goto('/');
  await page.getByRole('tab', { name: 'Create account' }).click();
  await page.getByLabel('Email').fill(email);
  await page.getByLabel('Password').fill(password);
  await page.getByRole('button', { name: 'Create account' }).click();
  await expect(page.getByRole('button', { name: 'Sign out' })).toBeVisible();
}

async function addApplication(page: Page, company: string, role: string) {
  await page.getByRole('button', { name: 'Add application' }).click();
  const dialog = page.locator('#app-dialog');
  await expect(dialog).toBeVisible();
  await dialog.getByLabel('Company *').fill(company);
  await dialog.getByLabel('Role *').fill(role);
  // Keep default Applied on (today in most timezones).
  await dialog.getByRole('button', { name: 'Save' }).click();
  await expect(dialog).toBeHidden();
}

test.describe('ApplyLog — smoke', () => {
  test('auth view loads', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'ApplyLog' })).toBeVisible();
    await expect(page.getByRole('tab', { name: 'Sign in' })).toBeVisible();
    await expect(page.getByRole('tab', { name: 'Create account' })).toBeVisible();
  });

  test('user can create an account', async ({ page }) => {
    const email = uniqueEmail('smoke');
    await register(page, email, 'testpass1');
    await expect(page.locator('#user-email')).toHaveText(email.toLowerCase());
    await expect(page.locator('#empty-state')).toContainText('No applications yet');
  });

  test('user can add an application and see it in the table', async ({ page }) => {
    const email = uniqueEmail('add');
    await register(page, email, 'testpass1');
    await addApplication(page, 'Northwind Labs', 'Junior QA Engineer');
    await expect(page.locator('#rows tr')).toHaveCount(1);
    await expect(page.locator('#rows')).toContainText('Northwind Labs');
    await expect(page.locator('#stat-total')).toHaveText('1');
  });

  test('status filter narrows the list', async ({ page }) => {
    const email = uniqueEmail('filter');
    await register(page, email, 'testpass1');
    await addApplication(page, 'Litware', 'Associate Engineer');

    await page.getByRole('button', { name: 'Add application' }).click();
    const dialog = page.locator('#app-dialog');
    await dialog.getByLabel('Company *').fill('Contoso');
    await dialog.getByLabel('Role *').fill('Graduate Engineer');
    await dialog.getByLabel('Status').selectOption('interview');
    await dialog.getByRole('button', { name: 'Save' }).click();
    await expect(dialog).toBeHidden();

    await page.getByLabel('Filter by status').selectOption('interview');
    await expect(page.locator('#rows tr')).toHaveCount(1);
    await expect(page.locator('#rows')).toContainText('Contoso');
  });

  test('sign out returns to auth view', async ({ page }) => {
    const email = uniqueEmail('logout');
    await register(page, email, 'testpass1');
    await page.getByRole('button', { name: 'Sign out' }).click();
    // After register, authMode can stay on "Create account" (BUG-007) — don't require a Sign in button.
    await expect(page.locator('#auth-view')).toBeVisible();
    await expect(page.getByLabel('Email')).toBeVisible();
    await expect(page.getByRole('tab', { name: 'Sign in' })).toBeVisible();
  });
});
