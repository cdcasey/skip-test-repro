import { test, expect } from './home.fixture';

test('home test 1', async ({ homePage }) => {
  await expect(homePage.page.getByText('This')).toBeVisible();
});

test('home test 2', async ({ homePage }) => {
  await expect(homePage.page.getByText('is')).toBeVisible();
});

test('home test 3', async ({ homePage }) => {
  await expect(homePage.page.getByText('This is the home page')).toBeVisible();
});

test('home test 4', async ({ homePage }) => {
  await expect(homePage.page.getByText('This is the home page')).toBeVisible();
});

test('home test 5', async ({ homePage }) => {
  await expect(homePage.page.getByText('This is the home page')).toBeVisible();
});
