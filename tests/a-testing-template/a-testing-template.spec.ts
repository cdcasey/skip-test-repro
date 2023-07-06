import { test, expect } from './a-testing-template.fixture'

test('edit text', async ({ testingTemplatePage }) => {
  await expect(testingTemplatePage.page.getByText('Edit src/App.tsx and save to reload.')).toBeVisible()
})

test('fail link text', async ({ testingTemplatePage }) => {
  await expect(testingTemplatePage.page.getByRole('link', { name: 'Learn React' })).not.toBeVisible()
})

test('link text', async ({ testingTemplatePage }) => {
  await expect(testingTemplatePage.page.getByRole('link', { name: 'Learn React' })).toBeVisible()
})

