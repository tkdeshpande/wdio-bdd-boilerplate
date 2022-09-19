import { Given, When, Then } from '@wdio/cucumber-framework';

import {LoginPage} from '../../views/login.page';
import {SecurePage} from '../../views/secure.page';

const pages = {
    login: new LoginPage()
}

Given(/I am on the (\w+) page/, async (page) => {
    await pages[page].open()
});

When(/I login with (\w+) and (.+)/, async (username, password) => {
    const loginPage = new LoginPage();
    await loginPage.login(username, password)
});

Then(/I should see a flash message saying (.*)/, async (message) => {
    const securePage = new SecurePage()
    await expect(securePage.flashAlert).toBeExisting();
    await expect(securePage.flashAlert).toHaveTextContaining(message);
});

