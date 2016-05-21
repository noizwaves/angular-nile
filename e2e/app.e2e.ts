import { NilePage } from './app.po';

describe('nile App', function() {
  let page: NilePage;

  beforeEach(() => {
    page = new NilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('nile works!');
  });
});
