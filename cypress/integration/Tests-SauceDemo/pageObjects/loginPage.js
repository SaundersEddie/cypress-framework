export default class LoginPage {
    getUsernameInput() {
        return cy.get('[data-test=username]')
    }
    getPasswordInput() {
        return cy.get('[data-test=password]')
    }

    getLoginButton() {
        return cy.get('[data-test=login-button]');
    }

    getLoginError() {
        return cy.get('[data-test=error]');
    }

    getLoginErrorCloseButton() {
        return cy.get('.error-button > .svg-inline--fa');
    }
}