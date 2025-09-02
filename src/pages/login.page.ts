import { expect, Page } from '@playwright/test';
import { BasePage } from './base.page';
import { dataTestId } from '../utils/test-ids';

export class LoginPage extends BasePage {
  private usernameInput = this.locator(dataTestId('username'));
  private passwordInput = this.locator(dataTestId('password'));
  private loginButton = this.locator(dataTestId('login-button'));

  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.goto('/');
    await expect(this.usernameInput).toBeVisible();
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}


