import { WeatherNowPage } from './app.po';

describe('weather-now App', () => {
  let page: WeatherNowPage;

  beforeEach(() => {
    page = new WeatherNowPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
