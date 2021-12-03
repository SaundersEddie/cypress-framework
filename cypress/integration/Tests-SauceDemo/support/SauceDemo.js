// SwagLabs site commands for testing

Cypress.Commands.add('openSauceDemoSite', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('.bot_column')
        .should('have.css', 'background')
        .and('contain', 'Login_Bot_graphic.20658452.png');
    cy.title().should ('eq', 'Swag Labs');
    cy.url().should('eq','https://www.saucedemo.com/')
})

Cypress.Commands.add('loginUsers', (users, password) => {
    console.log (users);
    console.log (password);
} )