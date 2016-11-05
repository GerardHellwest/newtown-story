import { NewtownStoryPage } from './app.po';

describe('newtown-story App', function() {
  let page: NewtownStoryPage;

  beforeEach(() => {
    page = new NewtownStoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ns works!');
  });
});
