import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { standardUser } from '../data/users';


test.describe('SauceDemo - Login', () => {
    test('User can login with valid credentials', async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.open();
      await loginPage.login(standardUser.username, standardUser.password);
    });
  });