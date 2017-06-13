import { SpWebsitePage } from './app.po';

describe('sp-website App', () => {
  let page: SpWebsitePage;

  beforeEach(() => {
    page = new SpWebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
