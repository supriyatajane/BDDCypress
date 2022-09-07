
import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps"


Given('visit Ecommerce site', () => {
    cy.log('a1')
    cy.visit('https://practicetestautomation.com/practice-test-login/')
})

And('enter the username', (datatable) => {

    datatable.hashes().forEach(element => {
        cy.get('#username').type(element.username)
        cy.log('a2')

    })
})

And('enter the password', (datatable) => {
    datatable.hashes().forEach(element => {
        cy.get('#password').type(element.password)
    })

})

And('click on login button', () => {
    cy.get('#submit').click()
    cy.log('a4')
})
Then('Vallidate Dashboard', () => {
    cy.get('.post-title').should('have.text', 'Logged In Successfully')
    cy.log('a4')
})

Given('Visit practice Automation site', () => {
    cy.visit('https://practice.automationtesting.in/my-account/')
    cy.log('demo1')
})

When('user login with {string} and {string}', (Username, Password) => {
     cy.get('#username').type(Username)
     cy.get('#password').type(Password)
    cy.log('demo2')
})

And('Click on login button', () => {
    cy.get('[name="login"]').click()
    cy.log('demo3')
})

Then('Dashboard should be visible', () => {
    cy.get('.is-active> a').should('have.text', 'Dashboard')
    cy.log('demo4')
})