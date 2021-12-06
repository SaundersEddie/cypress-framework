// Scenario
// Given I am on the Sauce Labs Login Page
// When I login with a valid username and password
// Then I will be taken to the store front page

///<reference types = "cypress" />

import LoginPage from '../../pageObjects/loginPage';
import userCredentials from '../../fixtures/users.json';

describe ('User login success', () => {
    const loginPage = new LoginPage();

    beforeEach(() => {
        cy.openSauceDemoSite();
    })

    // afterEach(() => {
    //     loginPage.getLoginError().should('not.be', 'visible');
    //     loginPage.getUsernameInput().should('not.be', 'visible');
    //     loginPage.getPasswordInput().should('not.be', 'visible');
    // })

   it ('Verify I can login when my username or password is correct', () => {
        loginPage.getUsernameInput().type(`${userCredentials.goodUsername[0]}`);
        loginPage.getPasswordInput().type(`${userCredentials.goodPassword}`);
        loginPage.getLoginButton().click();
        // const textSearch = "Products"
        // cy.get('.title').should('include.text', textSearch);

        cy.get('.shopping_cart_container').should('not.be','invisible')
    })
})