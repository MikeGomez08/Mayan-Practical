## SauceDemo Playwright (POM) Test Suite

This repository contains end-to-end tests for `https://www.saucedemo.com/` using Playwright with the Page Object Model (POM) pattern.

### Scenario Covered
- Login with valid credentials
- Add a product to the cart
- Proceed to checkout and complete purchase

### Tech Stack
- Playwright Test
- TypeScript
- POM architecture

### Prerequisites
- Node.js 18+ installed

### Install Dependencies
```bash
npm install
```

### Install Playwright Browsers
```bash
npx playwright install
```

### Run Tests (headless)
```bash
npm run test
```

### Run Tests (headed)
```bash
npm run test:headed
```

### Open Playwright Test UI
```bash
npm run test:ui
```

### Open HTML Report
```bash
npm run report
```

### Default Test Data
- Username: `standard_user`
- Password: `secret_sauce`

### POM Structure (intended)
```
src/
  pages/
    base.page.ts
    login.page.ts
    inventory.page.ts
    cart.page.ts
    checkout.page.ts
  tests/
    add-to-cart-checkout.spec.ts
  data/
    users.ts
    checkout.ts
  utils/
    test-ids.ts
playwright.config.ts
tsconfig.json
```

### Notes
- Base URL is configured in `playwright.config.ts` as `https://www.saucedemo.com`.
- The acceptance criteria are validated by the end-to-end test `add-to-cart-checkout.spec.ts`.


