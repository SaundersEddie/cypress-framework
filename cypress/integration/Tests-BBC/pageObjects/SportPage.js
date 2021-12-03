// I was tempted to extend homepage here, but the reulting test scripts were fugly
// import HomePage from './HomePage';
// export default class SportPage extends HomePage

export default class SportPage
{
    getSportLogo()
    {
        return cy.get('.sp-c-global-header__logo[href="/sport"]');
    }
    
    getAllSportButton() 
    {
        return cy.get('#sp-nav-all-sport-button');
    }

    getAllSportPopOut()
    {
        return cy.get('#sp-nav-flyout');
    }

}
