import { expect, Page } from '@playwright/test';
import { BasePage } from './base.page';
import { dataTestId } from '../utils/test-ids';

export class InventoryPage extends BasePage {
  private pageTitle = this.locator('.title');
  private cartBadge = this.locator('.shopping_cart_badge');
  private cartLink = this.locator('.shopping_cart_link');

  constructor(page: Page) {
    super(page);
  }

  async expectLoaded() {
    await expect(this.pageTitle).toHaveText('Products');
  }

  async addProductByName(productName: string) {
    const item = this.locator('.inventory_item').filter({ hasText: productName });
    await expect(item).toBeVisible();
    await item.locator('button:has-text("Add to cart")').click();
  }

  async expectCartCount(count: number) {
    await expect(this.cartBadge).toHaveText(String(count));
  }

  async openCart() {
    await this.cartLink.click();
  }
}


