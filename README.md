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

### Run API tests only
```bash
npx playwright test SauceDemo/src/api/tests/ -c SauceDemo/playwright.config.ts
```

### Run specific API test categories
```bash
# Users API tests only
npx playwright test -g "Users API" -c SauceDemo/playwright.config.ts

# Posts API tests only  
npx playwright test -g "Posts API" -c SauceDemo/playwright.config.ts

# API flow tests only
npx playwright test -g "API Flow Tests" -c SauceDemo/playwright.config.ts
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
    pages/                    # UI Page Object Models
      base.page.ts
      login.page.ts
      inventory.page.ts
      cart.page.ts
      checkout.page.ts
    tests/                    # UI Test Specifications
      LoginTest.spec.ts
      addToCartCheckout.spec.ts
    api/                      # API Testing Structure
      base/
        api-base.ts          # Base API class (REST Assured-style)
      services/
        jsonplaceholder-api.ts # API service methods
      models/
        jsonplaceholder-models.ts # TypeScript interfaces
      test-data/
        jsonplaceholder-data.ts   # Test data constants
      tests/
        jsonplaceholder-api.spec.ts # API test specifications
    data/                    # UI Test Data
      users.ts
      checkout.ts
    utils/                    # Shared Utilities
      test-ids.ts
  playwright.config.ts
  tsconfig.json
```

### Scenarios Covered
- **UI Tests (Playwright)**
  - Positive
    - Login with valid credentials
    - Add a product to the cart and verify it is present
    - Complete checkout and verify order confirmation
  - Negative
    - Invalid login displays an appropriate error message

- **API Tests (REST Assured-style)**
  - CRUD operations for Users, Posts, Comments
  - Relationship validation (user posts, post comments)
  - Complete API flow testing
  - Schema validation and response assertions

### Notes
- `BasePage.goto('/')` uses the configured `baseURL` from `playwright.config.ts`.
- Default browser projects: Chromium, Firefox, WebKit. You can target one using `--project=Chromium`.

