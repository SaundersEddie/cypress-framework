// Scenario: Click checkboxes and validate clicked or unclicked status
// Given I am on the checkboxes page
// When I click Checkbox 1 it should be selected
// When I click Checkbox 2 it should be unselected
// Then we should validate checkbox status

// Scenario: Select Option 1 then Option 2 on dropdown
// Given I am on the dropdown page
// When I select the dropdown I should see two options
// Then I select Option 1
// Then I select Option 2
// Then I should validate Option 2 is displayed in Dropdown

///<reference types="Cypress" />

describe('Testing checkboxes and dropdowns', function () {
    it('Scenario: Click checkboxes and validate clicked or unclicked status', function () {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.contains('Checkboxes').click()
        cy.get('[type="checkbox"]').eq(0).check()
        cy.get('[type="checkbox"]').eq(1).uncheck()
    })
    it('Scenario: Select Option 1 then Option 2 on dropdown', function () {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.contains('Dropdown').click()
        cy.get('select').select('Option 2')
    })
})



