import { Page, Locator } from '@playwright/test'

export class TestingTemplatePage {
  private readonly exampleButton: Locator
  private readonly exampleInput: Locator

  constructor(public page: Page) {
    // Replace these with the actual selectors relevant to the page you want to test
    this.exampleButton = page.getByRole('button', { name: /example button/i })
    this.exampleButton = page.getByLabel(/example input/i)
  }

  async goto() {
    // Replace this with the actual navigation to the page you want to test
    await this.page.goto('http://localhost:3000/')
  }

  // Replace these with the actual actions relevant to the page you want to test
  async exampleInputFill(text: string) {
    await this.exampleInput.fill(text)
  }

  async exampleInputClear() {
    await this.exampleInput.clear()
  }

  async exampleButtonClick() {
    await this.exampleButton.click()
  }
}
