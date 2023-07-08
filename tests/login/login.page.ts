import { Page, Locator } from '@playwright/test';

export class LoginPage {
  private readonly loginButton: Locator;

  constructor(public page: Page) {
    this.loginButton = page.getByRole('button', { name: 'Log in' });
  }

  async goto(): Promise<void> {
    await this.page.goto('/');
    await this.page.reload();
    await this.loginButton.click();
  }
}
