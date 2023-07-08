import { test as base } from '@playwright/test';

import { HomePage } from './home.page';
import { LoginPage } from '../login/login.page';

interface IHomePage {
  homePage: HomePage;
}

export const test = base.extend<IHomePage>({
  homePage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    const homePage = new HomePage(page);
    await homePage.goto();
    await use(homePage);
  },
});

export * from '@playwright/test';
