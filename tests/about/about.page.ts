import { Page, Locator } from '@playwright/test';

export class AboutPage {
  private readonly aboutButton: Locator;

  constructor(public page: Page) {
    this.aboutButton = page.getByRole('link', { name: 'About' });
  }

  async goto(): Promise<void> {
    await this.aboutButton.click();
  }
}
