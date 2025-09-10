import { Page, Locator, expect } from '@playwright/test';

export abstract class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Navigate to a specific path (defaults to root '/')
  async goto(path: string = '/') {
    await this.page.goto(path);
  }

  // Returns a Locator for the given selector
  locator(selector: string): Locator {
    return this.page.locator(selector);
  }

  // Clicks an element specified by the selector
  async click(selector: string) {
    await this.page.click(selector);
  }

  // Asserts that the current URL contains the specified fragment
  async expectUrlContains(fragment: string) {
    await expect(this.page).toHaveURL(new RegExp(fragment));
  }
}
