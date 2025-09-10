import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';
import { standardUser } from '../data/users';
import { checkoutInfo } from '../data/checkout';

test.describe('SauceDemo - Add to Cart and Checkout (Grouped)', () => {

  // Page objects
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;
  const productName = 'Sauce Labs Backpack';

  // Before each test
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
  });

  // Login test
  test.describe('Login', () => {
    test('User can login successfully', async ({ page }) => {
      await loginPage.open();
      await loginPage.login(standardUser.username, standardUser.password);
      await inventoryPage.expectLoaded();
    });
  });

  // Add to Cart test
  test.describe('Add to Cart', () => {
    test.beforeEach(async ({ page }) => {
      await loginPage.open();
      await loginPage.login(standardUser.username, standardUser.password);
      await inventoryPage.expectLoaded();
    });

    // Add product to cart and verify it is in the cart
    test('User adds a product and verifies it is in the cart', async ({ page }) => {
      await inventoryPage.addProductByName(productName);
      await inventoryPage.expectCartCount(1);
      await inventoryPage.openCart();
      await cartPage.expectItemInCart(productName);
    });

    // Add to cart multiple products and verify cart count
    test('User adds multiple products and verifies cart count', async ({ page }) => {
      const productsToAdd = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt'];
      for (const product of productsToAdd) {
        await inventoryPage.addProductByName(product);
      }
      await inventoryPage.expectCartCount(productsToAdd.length);
      await inventoryPage.openCart();
      for (const product of productsToAdd) {
        await cartPage.expectItemInCart(product);
      }
    });
  });
  
  // Checkout test
  test.describe('Checkout', () => {
    test.beforeEach(async ({ page }) => {
      await loginPage.open();
      await loginPage.login(standardUser.username, standardUser.password);
      await inventoryPage.expectLoaded();
      await inventoryPage.addProductByName(productName);
      await inventoryPage.expectCartCount(1);
      await inventoryPage.openCart();
      await cartPage.expectItemInCart(productName);
    });

    // Complete checkout and verify order completion
    test('User completes checkout', async ({ page }) => {
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
});
