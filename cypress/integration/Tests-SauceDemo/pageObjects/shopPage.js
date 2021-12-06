export default class ShopPage {
    
    getShopPageTitle() {
        return cy.get('.title');
    }
    getShoppingCart() {
        return cy.get('.shopping_cart_container');
    }
    
}