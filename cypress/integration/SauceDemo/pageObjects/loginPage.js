export default class LoginPage
{
    getUsernameInput() {
        return cy.get('[data-test=username]')
    }
    getPasswordInput() {
        return cy.get('[data-test=password]')
    }
}