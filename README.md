## SauceDemo E2E Tests (Playwright + POM)

End‑to‑end regression tests for `https://www.saucedemo.com/` implemented with Playwright Test and the Page Object Model (POM).

### Objectives
- Validate that a user can log in, add a product to the cart, and complete checkout.
- Provide reliable negative coverage for invalid login.

### Tech Stack
- Playwright Test (multi‑browser)
- TypeScript
- Page Object Model (POM)

### Test Environment
- URL: `https://www.saucedemo.com/`
- Credentials:
  - Username: `standard_user`
  - Password: `secret_sauce`

### Acceptance Criteria
- The user can add products to the cart.
- The user can proceed to checkout and complete the purchase.

---

## Getting Started

### Prerequisites
- Node.js 18+

### Install dependencies and browsers
From the `SauceDemo` directory:
```bash
npm install
npx playwright install
```

### Run all tests
```bash
npx playwright test -c SauceDemo/playwright.config.ts
```

### Run headed (watch the browser)
```bash
npx playwright test -c SauceDemo/playwright.config.ts --headed
```

### Open the Test UI
```bash
npx playwright test -c SauceDemo/playwright.config.ts --ui
```

### Open the HTML report
```bash
npx playwright show-report SauceDemo/playwright-report
```

### Run an individual spec
```bash
npx playwright test SauceDemo/src/tests/LoginTest.spec.ts -c SauceDemo/playwright.config.ts
npx playwright test SauceDemo/src/tests/addToCartCheckout.spec.ts -c SauceDemo/playwright.config.ts
```

### Debug a test
Windows PowerShell:
```powershell
$env:PWDEBUG=1; npx playwright test -c SauceDemo/playwright.config.ts
```

---

## Project Structure
```
SauceDemo/
  src/
    pages/
      base.page.ts
      login.page.ts
      inventory.page.ts
      cart.page.ts
      checkout.page.ts
    tests/
      LoginTest.spec.ts
      addToCartCheckout.spec.ts
    data/
      users.ts
      checkout.ts
    utils/
      test-ids.ts
  playwright.config.ts
  tsconfig.json
```

### Scenarios Covered
- Positive
  - Login with valid credentials
  - Add a product to the cart and verify it is present
  - Complete checkout and verify order confirmation
- Negative
  - Invalid login displays an appropriate error message

### Notes
- `BasePage.goto('/')` uses the configured `baseURL` from `playwright.config.ts`.
- Default browser projects: Chromium, Firefox, WebKit. You can target one using `--project=Chromium`.

