import { Eveo7Page } from './app.po';

describe('eveo7 App', function() {
  let page: Eveo7Page;

  beforeEach(() => {
    page = new Eveo7Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
