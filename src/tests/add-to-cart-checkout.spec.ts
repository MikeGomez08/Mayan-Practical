import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';
import { standardUser } from '../data/users';
import { checkoutInfo } from '../data/checkout';


test.describe('SauceDemo - Add to Cart and Checkout', () => {
  test('User adds a product and completes checkout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.open();
    await loginPage.login(standardUser.username, standardUser.password);

    await inventoryPage.expectLoaded();
    const productName = 'Sauce Labs Backpack';
    await inventoryPage.addProductByName(productName);
    await inventoryPage.expectCartCount(1);
    await inventoryPage.openCart();

    await cartPage.expectItemInCart(productName);
    await cartPage.proceedToCheckout();

    await checkoutPage.fillInformation(
      checkoutInfo.firstName,
      checkoutInfo.lastName,
      checkoutInfo.postalCode
    );
    await checkoutPage.finish();
    await checkoutPage.expectOrderComplete();
  });
});


