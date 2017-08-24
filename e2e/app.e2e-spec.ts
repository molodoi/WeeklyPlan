import { WeekplanPage } from './app.po';

describe('weekplan App', () => {
  let page: WeekplanPage;

  beforeEach(() => {
    page = new WeekplanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
