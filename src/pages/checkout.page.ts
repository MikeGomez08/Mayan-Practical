import { expect, Page } from '@playwright/test';
import { BasePage } from './base.page';
import { dataTestId } from '../utils/test-ids';

export class CheckoutPage extends BasePage {
  private firstName = this.locator(dataTestId('firstName'));
  private lastName = this.locator(dataTestId('lastName'));
  private postalCode = this.locator(dataTestId('postalCode'));
  private continueButton = this.locator(dataTestId('continue'));
  private finishButton = this.locator(dataTestId('finish'));
  private completeHeader = this.locator('.complete-header');

  constructor(page: Page) {
    super(page);
  }

  async fillInformation(first: string, last: string, zip: string) {
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.postalCode.fill(zip);
    await this.continueButton.click();
  }

  async finish() {
    await this.finishButton.click();
  }

  async expectOrderComplete() {
    await expect(this.completeHeader).toHaveText('Thank you for your order!');
  }
}


