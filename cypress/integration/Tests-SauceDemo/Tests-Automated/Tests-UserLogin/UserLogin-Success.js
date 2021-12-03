// Scenario
// Given I am on the Sauce Labs Login Page
// When I login with a valid username and password
// Then I will be taken to the store front page

///<reference types = "cypress" />

import LoginPage from '../../pageObjects/loginPage';
import users from './fixtures/users.json';

describe ('Basic End to End Testing', () => {
    it ('Given I am on the Sauce Demo Login Page', () => {
        cy.openSauceDemoSite();
    })

    it ('Verify I can login when my username or password is correct', () => {
        const loginPage = new LoginPage();
        // const userName = 'standard_user'
        const userName = users.testUser
        // const password = 'secret_sauce'
        const password = users.password
        cy.loginUsers(users.username, users.password);
        
        loginPage.getUsernameInput()
            .clear()
            .type(`${userName}`)
        loginPage.getPasswordInput()
            .clear()
            .type(`${password}{enter}`)
    })
})