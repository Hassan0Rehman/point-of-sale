import { PointOfSalePage } from './app.po';

describe('point-of-sale App', () => {
  let page: PointOfSalePage;

  beforeEach(() => {
    page = new PointOfSalePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
