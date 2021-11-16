

///<reference types="Cypress" />

describe('The Internet Authentication Tests', () => {
    it('Basic Auth', () => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')

        // , {
        // auth: {
        // username: admin,
        // password: admin
        // }
        // })

    })
})