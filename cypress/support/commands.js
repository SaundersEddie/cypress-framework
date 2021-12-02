// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('openBBCSite', () => {
    cy.visit("https://www.bbc.co.uk");
    cy.get('.orb-nav-blocks', { timeout: 5000 })
        .should('be.visible');
})

Cypress.Commands.add('bbcSearch', (searchText) => {
    cy.get('#orb-search-q')
        .clear()
        .type(`${searchText}{enter}`)
    cy.get('[data-testid=test-search-input]')
        .should('have.value', searchText, {timeout: 30000 });
    cy.get('*[width="compact"] > ul').should('not.equal', 0);
})


Cypress.Commands.add('searchFromSearch', (searchText) => {
    cy.get('[data-testid=test-search-input]')
        .clear()
        .type(`${searchText}{enter}`)
})

Cypress.Commands.add('checkSearchResults', (element, searchText) => {
    cy.get(element).should('have.text', searchText);
})

Cypress.Commands.add('checkElementLength', (element, validateLegth) => {
    cy.get(element).should('have.length', validateLegth);
})

Cypress.Commands.add('openBBCSportPage', () => {
    cy.contains('a', 'Sport').click()
    cy.get('.sp-c-global-header__logo[href="/sport"]')
        .should("contain.text", "Sport")
        .should("be.visible")
})

Cypress.Commands.add('allSportsButtonVisible', () => {
    cy.get('#sp-nav-all-sport-button').should('be.visible').click()

})

Cypress.Commands.add('allSportsFlyOutVerification', (searchText) => {
    cy.get('#sp-nav-flyout').should ('contain.text', searchText);
})

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
