import { MarvinPage } from './app.po';

describe('marvin App', () => {
  let page: MarvinPage;

  beforeEach(() => {
    page = new MarvinPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
