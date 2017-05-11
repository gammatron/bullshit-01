import { BullshitO1Page } from './app.po';

describe('bullshit-o1 App', () => {
  let page: BullshitO1Page;

  beforeEach(() => {
    page = new BullshitO1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
