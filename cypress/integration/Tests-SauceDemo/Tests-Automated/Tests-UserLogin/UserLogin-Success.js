// Scenario
// Given I am on the Sauce Labs Login Page
// When I login with a valid username and password
// Then I will be taken to the store front page

///<reference types = "cypress" />

import LoginPage from '../../pageObjects/loginPage';
import ShopPage from '../../pageObjects/shopPage';
import userCredentials from '../../fixtures/users.json';

describe ('User login success', () => {
    const loginPage = new LoginPage();
    const shopPage = new ShopPage();

    beforeEach(() => {
        cy.openSauceDemoSite();
    })

    // afterEach(() => {
    //     loginPage.getLoginError().should('not.be', 'visible');
    //     loginPage.getUsernameInput().should('not.be', 'visible');
    //     loginPage.getPasswordInput().should('not.be', 'visible');
    // })

   it ('Verify I can login when my username or password is correct', () => {
        const textSearch = "Products"
        loginPage.getUsernameInput().type(`${userCredentials.goodUsername[0]}`);
        loginPage.getPasswordInput().type(`${userCredentials.goodPassword}`);
        loginPage.getLoginButton().click();
        shopPage.getShopPageTitle().should('include.text', textSearch);
        shopPage.getShoppingCart().should('be.visible')
    })
})