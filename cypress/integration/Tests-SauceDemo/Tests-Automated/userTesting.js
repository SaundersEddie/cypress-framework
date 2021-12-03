// User Story
// Given I am on the Sauce Labs Login Page
// Verify I can Login as a standard user

// Accepted usernames are:
// standard_user
// locked_out_user
// problem_user
// performance_glitch_user

// PAssword for all is secret_sauce

///<reference types = "cypress" />

import LoginPage from '../pageObjects/loginPage';

describe ('Basic End to End Testing', () => {
    it ('Given I am on the Sauce Demo Login Page', () => {
        cy.openSauceDemoSite();
    })

    it ('Verify I can login as the standard user', () => {
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
