// Test IDs or Locators for the page
export const dataTestId = (id: string) => `[data-test="${id}"]`;
export const ariaLabel = (label: string) => `[aria-label="${label}"]`;
export const text = (text: string) => `:text("${text}")`;
export const hasText = (text: string) => `:has-text("${text}")`;
export const containsText = (text: string) => `:contains-text("${text}")`;
export const hasAttribute = (attribute: string, value: string) => `[${attribute}="${value}"]`;
export const hasClass = (className: string) => `:has-class("${className}")`;
export const hasId = (id: string) => `[id="${id}"]`;
export const hasName = (name: string) => `[name="${name}"]`;
export const hasValue = (value: string) => `[value="${value}"]`;
export const xpath = (path: string) => `xpath=${path}`;


