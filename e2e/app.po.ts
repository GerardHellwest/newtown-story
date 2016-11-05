import { browser, element, by } from 'protractor';

export class NewtownStoryPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ns-root h1')).getText();
  }
}
