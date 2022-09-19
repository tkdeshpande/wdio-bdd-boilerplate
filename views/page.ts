/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  constructor() {
    (async () => {
      await this.pageDisplayedCorrectly();
    })();
  }
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */

  public get validations(): Array<string> {
    return [`//*[@text = ""]`];
  }

  public open(path: string) {
    return browser.url(`https://the-internet.herokuapp.com/${path}`);
  }

  private async pageDisplayedCorrectly() {
    try {
      await Promise.all(
        this.validations.map(
          async (validation) =>
            await (await $(validation)).waitForDisplayed({ timeout: 120000 })
        )
      );
    } catch (error) {
      console.log('error :>> ', error);
    }
  }
}
