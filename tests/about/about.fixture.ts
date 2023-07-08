import { test as base } from '@playwright/test';

import { AboutPage } from './about.page';
import { LoginPage } from '../login/login.page';

interface IAboutePage {
  aboutPage: AboutPage;
}

export const test = base.extend<IAboutePage>({
  aboutPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    const aboutPage = new AboutPage(page);
    await aboutPage.goto();
    await use(aboutPage);
  },
});

export * from '@playwright/test';
