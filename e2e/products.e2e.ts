import {ProductsPage} from './products.po';

describe('Products', () => {
  let page:ProductsPage;

  beforeEach(() => {
    page = new ProductsPage();
  });

  it('should load the page for listing products', () => {
    page.navigateTo();
    expect(page.getHeadingText()).toEqual('Products');
    expect(page.getProductsSize()).toBe(5);
  })
});
