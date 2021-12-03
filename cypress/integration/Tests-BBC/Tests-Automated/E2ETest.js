// User Stories
// When I visit the BBC website
// Then I confirm home page the navbar is visible
// Then I perform a search test and expect results
// Then I perform a search test and expect no results
// I then visit the Sport page and verify it opened
// And verify the All Sports option is aailable and working

///<reference types = "cypress" />

import HomePage from '../pageObjects/HomePage';
import SportPage from '../pageObjects/SportPage';

describe("Basic E2E User Test on BBC Website with no page objects or commands", () => {
    const goodSearch = "Harlow";
    const badSearch = "sdfgsfsdfsdf";

    xit('Open the BBC Website and confirm Navbar is Visible', () => {
        cy.visit("https://www.bbc.co.uk");
        cy.get('.orb-nav-blocks', { timeout: 5000 }).should('be.visible');
    })
    
    xit('Perform a Search and Expect More Than 0 Results', () => {
        cy.get('#orb-search-q').type(`${goodSearch}{enter}`)
        cy.get('[data-testid=test-search-input]').should('have.value', goodSearch, {timeout: 30000 });
        cy.get('*[width="compact"] > ul').should('not.equal', 0);
    })

    xit('Perform a Search and Expect More 0 Results', () => {
        cy.get('[data-testid=test-search-input]')
            .clear()
            .type(`${badSearch}{enter}`)
        cy.get('strong').should('have.text', badSearch, {timeout: 30000 });
        cy.get('*[spacing="responsive"] > ul > li').should('have.length', 3);
    })

    xit('Visit the Sport Page and Verify it Opened', () => {
        cy.contains('a', 'Sport').click()
        cy.get('.sp-c-global-header__logo[href="/sport"]')
            .should("contain.text", "Sport")
            .should("be.visible")
    })

    xit ('Confirm the All Sport Button is Visible and Functioning', () => {
        cy.get('#sp-nav-all-sport-button').should('be.visible').click()
        cy.get('#sp-nav-flyout').should ('contain.text', 'Gymnastics');
        cy.get('#sp-nav-all-sport-button').click()
        cy.scrollTo('top')
    })
})
//
// ***** Page Objects Only
//
describe("Basic E2E User Test on BBC Website with page objects only", () => {
    const homePage = new HomePage();
    const sportPage = new SportPage();

    xit('Open the BBC Website and confirm Navbar is Visible', () => {
        cy.visit("https://www.bbc.co.uk");
        homePage.getNavBlocks().should('be.visible');
    })

    xit('Perform a Search and Expect More Than 0 Results', () => {
        homePage.getFrontPageSearch().type('Harlow{enter}')
        homePage.getSearchInput().should('have.value', 'Harlow', {timeout: 30000 });
        homePage.getSearchUL().should('not.equal', 0);
    })

    xit('Perform a Search and Expect 0 Results', () => {
        homePage.getSearchInput().clear().type('sdfgsfsdfsdf{enter}')
        homePage.getSearchStrong().should('have.text', 'sdfgsfsdfsdf')
        homePage.getNoResults()
    })

    xit('Visit the Sport Page and Verify it Opened', () => {
        homePage.getSportLink().click()
        sportPage.getSportLogo()
            .should("be.visible")
            .and("contain.text", "Sport")
    })

    xit ('Confirm the All Sport Button is Visible and Functioning', () => {
        sportPage.getAllSportButton().should('be.visible').click()
        sportPage.getAllSportPopOut()
            .should('be.visible')
            .and ('contain.text', 'Gymnastics');
        sportPage.getAllSportButton().click()
        cy.scrollTo('top')
    })
})
//
// ***** Commands Only
//
describe("Basic E2E User Test on BBC Website with commands only", () => {
    xit('Open the BBC Website and confirm Navbar is Visible', () => {
        cy.openBBCSite();
    })

    xit('Perform a Search and Expect More Than 0 Results', () => {
        cy.bbcSearch('Harlow')
    })

    xit('Perform a Search and Expect 0 Results', () => {
        
        cy.searchFromSearch('sdfgsfsdfsdf')
        cy.checkSearchResults('strong', 'sdfgsfsdfsdf');
        cy.checkElementLength('*[spacing="responsive"] > ul > li', 3);
    })

    xit('Visit the Sport Page and Verify it Opened', () => {
        cy.openBBCSportPage()
    })

    xit ('Confirm the All Sport Button is Visible and Functioning', () => {
        cy.allSportsButtonVisible()
        cy.allSportsFlyOutVerification('Gymnastics')
        cy.allSportsButtonVisible()
        cy.scrollTo('top')
    })
})

describe("Basic E2E User Test on BBC Website with commands and page objecs", () => {
    const homePage = new HomePage();
    const sportPage = new SportPage();
    const goodSearch = "Harlow";
    const badSearch = "sdfgsfsdfsdf";

    before(() => {cy.openBBCSite();});

    it('Perform a Search and Expect More Than 0 Results', () => {
        homePage.getFrontPageSearch().type(`${goodSearch}{enter}`)
        homePage.getSearchInput().should('have.value', goodSearch, {timeout: 30000 });
        homePage.getSearchUL().should('not.equal', 0);
    })

    it('Perform a Search and Expect 0 Results', () => {
        homePage.getSearchInput().clear().type(`${badSearch}{enter}`)
        homePage.getSearchStrong().should('have.text', badSearch, {timeout: 30000 })
        homePage.getNoResults()
    })

    it('Visit the Sport Page and Verify it Opened', () => {
        cy.openBBCSportPage()
    })

    it ('Confirm the All Sport Button is Visible and Functioning', () => {
        sportPage.getAllSportButton().should('be.visible').click()
        sportPage.getAllSportPopOut()
            .should('be.visible')
            .and ('contain.text', 'Gymnastics');
        sportPage.getAllSportButton().click()
        cy.scrollTo('top')
    })
})


