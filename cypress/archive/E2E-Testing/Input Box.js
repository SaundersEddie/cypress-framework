// Scenario: When I enter a number in an input field I can change it's value using the down arrow key
// Given I am on a web page with a number input box
// Then I can enter the number 25
// When I then press the down arrow 5 times
// Then I expect and verify the number has changed to 25

// Scenario: When I enter a number in an input field I can change it's value using the up arrow key
// Given I am on a web page with a number input box
// Then I can enter the number 25
// When I then press the up arrow 5 times
// Then I expect and verify the number has changed to 30

///<reference types="Cypress" />

describe('Utilizng Input Boxes', () => {
    it('Scenario: When I enter a number in an input field I can change its value using the down arrow key', () => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.contains('Inputs').click()
        cy.get('input').click().type('25')
        for (let i = 0; i < 5; i++) { cy.get('input').type('{downarrow}') }
        cy.get('input').should(($input) => { expect($input.val()).to.equal('20') })
    })

    it('Scenario: When I enter a number in an input field I can change its value using the up arrow key', () => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.contains('Inputs').click()
        cy.get('input').click().type('25')
        for (let i = 0; i < 5; i++) { cy.get('input').type('{uparrow}') }
        cy.get('input').should(($input) => { expect($input.val()).to.equal('30') })
    })
})