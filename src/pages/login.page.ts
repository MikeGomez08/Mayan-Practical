import { expect, Page } from '@playwright/test';
import { BasePage } from './base.page';
import { dataTestId } from '../utils/test-ids';

export class LoginPage extends BasePage {

  // Locators
  private usernameInput = this.locator(dataTestId('user-name'));
  private passwordInput = this.locator(dataTestId('password'));
  private loginButton = this.locator(dataTestId('login-button'));
  private errorMessage = this.locator('[data-test="error"]');

  constructor(page: Page) {
    super(page);
  }

  // Methods
  async open() {
    await this.goto('/');
    await expect(this.usernameInput).toBeVisible();
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async expectLoginError(messagePart: string) {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toContainText(messagePart);
  }
}


