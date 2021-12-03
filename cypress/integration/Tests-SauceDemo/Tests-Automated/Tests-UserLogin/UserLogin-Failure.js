// Scenario
// Given I am on the Sauce Labs Login Page
// When I try to login with a bad username or password
// Then I expect to see an error notification

///<reference types = "cypress" />

import LoginPage from '../../pageObjects/loginPage';
import users from './fixtures/users.json';

describe ('Basic End to End Testing', () => {
    it ('Given I am on the Sauce Demo Login Page', () => {
        cy.openSauceDemoSite();
    })

    it ('Verify I recieve a bad login notification when my username or password is bad', () => {
        const loginPage = new LoginPage();
        const userName = 'standard_user'
        const password = 'secret_sauce'
        loginPage.getUsernameInput()
            .clear()
            .type(`${userName}`)
        loginPage.getPasswordInput()
            .clear()
            .type(`${password}{enter}`)
    })
})