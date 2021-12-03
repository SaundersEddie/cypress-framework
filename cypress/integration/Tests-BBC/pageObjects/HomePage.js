export default class HomePage 
{
    getNavBlocks()
    {
        return cy.get('.orb-nav-blocks', { timeout: 30000 });
    }
    getNavBar()
    {
        return cy.get('#orb-header');
    }

    getFrontPageSearch()
    {
        return cy.get('#orb-search-q')
    }

    getSearchInput() 
    {
        return cy.get('[data-testid=test-search-input]');
    }

    getSearchUL()
    {
        return cy.get('*[width="compact"] > ul', {timeout: 30000});
    }

    getNoResults()
    {
        return  cy.contains('p','Sorry, there are no results');
    }
    getSearchStrong()
    {
        return cy.get('strong');
    }

    getSportLink() 
    {
        return cy.contains('a', 'Sport');
    }
}
