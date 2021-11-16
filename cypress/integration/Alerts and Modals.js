// #### Scenario: When I enter a web page I close a modal popup
// > Given I am on a web page with an on entry modal  
// > When I click the modal  
// > Then I expect it to close  
// > Then I verify the modal is closed  

// #### Scenario: When I exit a web page I close a modal popup
// > Given I am on a web page with an on exit intent modal  
// > When I attempt to leave the page  
// > Then I expect to see a modal popup    
// > Then I close the modal popup  
// > Then verify the modal popup is closed  


///<reference types="Cypress" />


describe('Scenario: When I enter a web page I close a modal popup', () => {
    it('Scenario: When I enter a web page I close a modal popup', () => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.contains('Entry Ad').click()
        cy.contains('Close').click()
        cy.get('.modal').should('not.be.visible')
    })
    it('Scenario: When I exit a web page I close a modal popup', () => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.contains('Exit Intent').click()
        cy.get("#flash-messages").trigger("mouseover");
        cy.get("#flash-messages").trigger("mouseleave");
        cy.get(".modal").should('be.visible');
        cy.contains('Close').click()
        cy.get('.modal').should('not.be.visible')
    })
    it('Checking JavaScript Alert', () => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.contains('JavaScript Alerts').click()
        cy.contains('Click for JS Alert').click()
    })

    it('Checking JavaScript Confirm', () => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.contains('JavaScript Alerts').click()

    })
    it('Checking JavaScript Prompt', () => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.contains('JavaScript Alerts').click()
    })
})



