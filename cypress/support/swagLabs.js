// SwagLabs site commands for testing

Cypress.Commands.add('openSwagLabsSite', () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('.orb-nav-blocks', { timeout: 5000 })
        .should('be.visible');
})