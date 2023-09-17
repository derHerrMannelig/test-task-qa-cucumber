import { Given, When, Then } from '@wdio/cucumber-framework';
import loginPage from '../pageobjects/login.page.js';

const pages = {
    main: loginPage
}

Given(/^User is located on the (\w+) page of saucedemo website$/, async (page) => {
    await pages[page].open()
});

When(/^User click “Login” button$/, async () => {
    await loginPage.login()
});

Then(/^User should see “(.*)” error message$/, async (message) => {
    await expect(loginPage.errorMsg).toBeExisting();
    await expect(loginPage.errorMsg).toBeDisplayed();
    await expect(loginPage.errorMsg).toHaveTextContaining(message);
});
