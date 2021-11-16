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

// #### Scenario: When I click on the OK button I close a JS Alert
// > Given I am on a web page with an alert button
// > When I click the 'Click for JS Alert' button
// > Then I expect to see a JavaScript alert box  
// > Then I accept the JavaScript alert by clicking OK  
// > Then verify the result field shows: You successfully clicked an alert

// #### Scenario: When I click on the alert request button I confirm a JS Alert
// > Given I am on a web page with an alert button
// > When I click the 'Click for JS Confirm' button
// > Then I expect to see a JavaScript confirm box  
// > Then I accept the JavaScript alert by clicking OK  
// > Then verify the result field shows: You clicked: Ok

// #### Scenario: When I click on the alert request button I cancel a JS Alert
// > Given I am on a web page with an alert button
// > When I click the 'Click for JS Confirm' button
// > Then I expect to see a JavaScript confirm box  
// > Then I cancel the JavaScript alert by clicking Cancel  
// > Then verify the result field shows: You clicked: Cancel

// #### Scenario: When I click on the alert request button I enter text in a prompt box
// > Given I am on a web page with an alert button
// > When I click the 'Click for JS Prompt' button
// > Then I expect to see a JavaScript prompt box  
// > Then I enter 'Testing Prompt Box' and click the Ok option
// > Then verify the result field shows: You entered: Testing Prompt Box

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
    it('Scenario: When I click on the OK button I close a JS Alert', () => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.contains('JavaScript Alerts').click()
        cy.contains('Click for JS Alert').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am a JS Alert')
        })
        cy.on('window:confirm', () => true);
        cy.get('#result').should('contain.text', 'You successfully clicked an alert')
    })
    it('Scenario: When I click on the alert request button I confirm a JS Alert', () => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.contains('JavaScript Alerts').click()
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal(`I am a JS Confirm`)
        })
        cy.on('window:confirm', () => true);
        cy.get('#result').should('contain.text', 'You clicked: Ok')
    })
    it('Scenario: When I click on the alert request button I cancel a JS Alert', () => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.contains('JavaScript Alerts').click()
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', () => false);
        cy.get('#result').should('contain.text', 'You clicked: Cancel')
    })
    it('Scenario: When I click on the alert request button I enter text in a prompt box', () => {
        cy.window().then(($win) => {
            cy.stub($win, 'prompt').returns('Testing Prompt Box')
            cy.contains('Click for JS Prompt').click()
        })
        cy.get('#result').contains('You entered: Testing Prompt Box')
    })
});
