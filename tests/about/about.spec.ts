import { test, expect } from './about.fixture';

test('about test 1', async ({ aboutPage }) => {
  await expect(aboutPage.page.getByText('This')).toBeVisible();
});

test('about test 2', async ({ aboutPage }) => {
  await expect(aboutPage.page.getByText('is')).toBeVisible();
});

test('about test 3', async ({ aboutPage }) => {
  await expect(aboutPage.page.getByText('This is the home page')).toBeVisible();
});

test('about test 4', async ({ aboutPage }) => {
  await expect(aboutPage.page.getByText('This is the home page')).toBeVisible();
});

test('about test 5', async ({ aboutPage }) => {
  await expect(aboutPage.page.getByText('This is the home page')).toBeVisible();
});
