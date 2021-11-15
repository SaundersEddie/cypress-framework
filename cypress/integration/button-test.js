// Scenario: Ensure the functionality to add/remove buttons is correct
//  Given I am on the button testing page
//  When I click the button labelled Add Button
//  Then the page should contain a button labelled Delete
//  When I click the button labelled Delete
//  The button labelled Delete will disappear

// Scenario: Ensure the functionality to add/remove multiple buttons is correct
//  Given I am on the button testing page
//  When I click the button labelled Add Button five times
//  Then the page should contain five buttons labelled Delete
//  When I click a button labelled Delete five times
//  The button labelled Delete will disappear

///<reference types="Cypress" />

describe("Testing Buttons", () => {
    it('Scenario: Ensure the functionality to add/remove button is correct', () => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.contains('Add/Remove Elements').click()
        cy.contains('Add Element').click()
        cy.contains('Delete').should('be.visible')
        cy.contains('Delete').click()
        cy.get('Delete').should('not.exist')
    })
    it('Scenario: Ensure the functionality to add/remove multiple buttons is correct', () => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.contains('Add/Remove Elements').click()
        for (let n = 0; n < 4; n++) { cy.contains('Add Element').click() }
        cy.contains('Delete').should('be.visible')
        for (let n = 0; n < 4; n++) { cy.contains('Delete').click() }
        cy.get('Delete').should('not.exist')
    })
})