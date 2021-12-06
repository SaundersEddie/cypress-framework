// Scenario
// Given I am on the Sauce Labs Login Page
// When I try to login with a bad username or password
// Then I expect to see an error notification

///<reference types = "cypress" />

import LoginPage from '../../pageObjects/loginPage';
import userCredentials from '../../fixtures/users.json';

describe ('User login failure due to bad credentials', () => {
    const loginPage = new LoginPage();

    beforeEach(() => {
        cy.openSauceDemoSite();
    })

    afterEach(() => {
        loginPage.getLoginError().should('not.be', 'visible');
        loginPage.getUsernameInput().clear()
        loginPage.getPasswordInput().clear()
    })

    it ('Verify I recieve a bad login notification when I enter a good username and bad password', () => {
        userCredentials.goodUsername.forEach(function(userName) {
            loginPage.getUsernameInput().type(`${userName}`);
            loginPage.getPasswordInput().type(`${userCredentials.badPassword}`);
            loginPage.getLoginButton().click();
            loginPage.getLoginError().should('contain', 'Epic sadface:');
            loginPage.getLoginErrorCloseButton().click();
            loginPage.getLoginError().should('not.be', 'visible');
            loginPage.getUsernameInput().clear()
            loginPage.getPasswordInput().clear()
        })
    })

    it ('Verify I recieve a bad login notification when I enter a bad username and good password', () => {
        userCredentials.badUsername.forEach(function(userName) {
            loginPage.getUsernameInput().type(`${userName}`);
            loginPage.getPasswordInput().type(`${userCredentials.goodPassword}`);
            loginPage.getLoginButton().click();
            loginPage.getLoginError().should('contain', 'Epic sadface:');
            loginPage.getLoginErrorCloseButton().click();
            loginPage.getLoginError().should('not.be', 'visible');
            loginPage.getUsernameInput().clear()
            loginPage.getPasswordInput().clear()
        })
    })

    it ('Verify I recieve a bad login notification when I enter a bad username and bad password', () => {
        userCredentials.badUsername.forEach(function(userName) {
            loginPage.getUsernameInput().type(`${userName}`);
            loginPage.getPasswordInput().type(`${userCredentials.badPassword}`);
            loginPage.getLoginButton().click();
            loginPage.getLoginError().should('contain', 'Epic sadface:');
            loginPage.getLoginErrorCloseButton().click();
            loginPage.getLoginError().should('not.be', 'visible');
            loginPage.getUsernameInput().clear()
            loginPage.getPasswordInput().clear()
        })
    })
})
