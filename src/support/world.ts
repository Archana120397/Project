import { Page } from 'playwright';

let page: Page;

export { page };

export function setPage(p: Page) {
  page = p;
}