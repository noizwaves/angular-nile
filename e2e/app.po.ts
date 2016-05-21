export class NilePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('nile-app h1')).getText();
  }
}
