import { expect, Page } from '@playwright/test';
import { BasePage } from './base.page';
import { dataTestId } from '../utils/test-ids';

export class CartPage extends BasePage {
  // Locator for the checkout button
  private checkoutButton = this.locator(dataTestId('checkout'));

  constructor(page: Page) {
    super(page);
  }

  async expectItemInCart(productName: string) {
    const item = this.locator('.cart_item').filter({ hasText: productName });
    await expect(item).toBeVisible();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}
