import { Page, Locator } from '@playwright/test';

export class HomePage {
  private readonly homeButton: Locator;

  constructor(public page: Page) {
    this.homeButton = page.getByRole('link', { name: 'Home' });
  }

  async goto(): Promise<void> {
    await this.homeButton.click();
  }
}
