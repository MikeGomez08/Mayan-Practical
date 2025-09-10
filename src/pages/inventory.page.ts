import { expect, Page } from '@playwright/test';
import { BasePage } from './base.page';
import { dataTestId } from '../utils/test-ids';

export class InventoryPage extends BasePage {
  // Locators
  private pageTitle = this.locator('.title');
  private cartBadge = this.locator('.shopping_cart_badge');
  private cartLink = this.locator('.shopping_cart_link');

  constructor(page: Page) {
    super(page);
  }

  // Assert the inventory page is loaded
  async expectLoaded() {
    await expect(this.pageTitle).toHaveText('Products');
  }

  // Add a product to cart by its name
  async addProductByName(productName: string) {
    const item = this.locator('.inventory_item').filter({ hasText: productName });
    await expect(item).toBeVisible();
    await item.locator('button:has-text("Add to cart")').click();
  }

  // Assert the cart badge shows the expected count
  async expectCartCount(count: number) {
    await expect(this.cartBadge).toHaveText(String(count));
  }

  // Click the cart icon to open the cart
  async openCart() {
    await this.cartLink.click();
  }

  async logout() {
    await this.click('[id="react-burger-menu-btn"]');
    await this.click('[id=:"logout_sidebar_link"]');
    await expect(this.page).toHaveURL('https://www.saucedemo.com/');
  }
}
