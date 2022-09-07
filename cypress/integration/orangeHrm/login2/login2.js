import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps"

Given('visit Practice Automation site', () => {
    cy.visit('http://practice.automationtesting.in/my-account/')

})

And('User log-in using Username and Password', (datables) => {
datables.hashes().forEach(element=>{
    cy.get('#username').type(element.username)
    cy.get('#password').type(element.password)

});
})


When('User click on submit button', () => {
    cy.get('[name="login"]').click()
    cy.wait(2000)
})

Then('Dashboard should be visible ', () => {
    cy.get('li.is-active a').should('have.text', 'Dashboard')
})

And('User log-in using <word> and <word>',(username,password)=>{
    cy.get('#username').type(username)
    cy.get('#password').type(password)


})

Then ('Dashboard should be visible',()=>{

    cy.get('li.is-active a').should('have.text', 'Dashboard')
    cy.get('.woocommerce-MyAccount-content').should('contain','supriya1')
})
