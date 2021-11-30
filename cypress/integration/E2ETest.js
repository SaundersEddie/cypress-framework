///<reference types = "cypress" />

describe("Basic E2E User Test on BBC Website", () => {

    beforeEach(() => {
        cy.openBBCSite();
    })

    xit('Ensure BBC Search is returning results', () => {
        cy.bbcSearch('Harlow');
        cy.get('[data-testid=test-search-input]').should('have.value', 'Harlow');
        cy.get('*[width="compact"] > ul').should('not.equal', 0);
    })

    xit('Confirm BBC correctly states no results', () => {
        cy.bbcSearch('sdfgsfsdfsdf');
        cy.get('strong').should('have.text', 'sdfgsfsdfsdf');
        cy.get('*[spacing="responsive"] > ul > li').should('have.length', 3);
    })
})

describe("Open BBC and navigate to sports pages", () => {
    before(() => {
        cy.openBBCSite();
    })

    it('Open BBC sport page', () => {
        cy.get('.orb-nav-section > ul > .orb-nav-sport').click()
        cy.get('.sp-c-global-header__logo[href="/sport"]')
            .should("contain.text", "Sport")
            .should("be.visible")
    })
    it('Verify the All Sport drop down is visible', () => {
        cy.get('#sp-nav-all-sport-button').should("be.visible");
        cy.get('#sp-nav-all-sport-button').click();
        cy.get('#sp-nav-all-sport-button').click();
        cy.scrollTo('top');
    })
})
