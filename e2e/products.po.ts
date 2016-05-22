export class ProductsPage {
  navigateTo() {
    return browser.get('/products');
  }

  getHeadingText() {
    return element(by.css('nile-app h2')).getText();
  }
}
