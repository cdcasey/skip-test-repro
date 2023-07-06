import { test as base } from '@playwright/test'

import { TestingTemplatePage } from './a-testing-template.page'

interface ITestingTemplatePage {
  testingTemplatePage: TestingTemplatePage
}

export const test = base.extend<ITestingTemplatePage>({
  testingTemplatePage: async ({ page }, use) => {


    const testingTemplatePage = new TestingTemplatePage(page)
    await testingTemplatePage.goto()
    await use(testingTemplatePage)
  },
})

export * from '@playwright/test'
