
import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps"
let file='API testing Interview Questions.pdf'

Given('I open Automation site',()=>{
    cy.visit('https://www.automationexercise.com/login')
    cy.get('[data-qa="login-email"]').type('supriyatajane2015@gmail.com')
    cy.get('[data-qa="login-password"]').type('supriya@123')
    cy.get('[data-qa="login-button"]').click()
    cy.log('block1')
})

Then('Vallidate the home page',()=>{
    cy.get('.active > :nth-child(1) > h2').should('have.text','Full-Fledged practice website for Automation Engineers')
    cy.log('block2')
})

Given('Open contact page',()=>{
    cy.get(' [href="/contact_us"]').click()
    cy.get('[class="title text-center"]').eq(1).should('have.text','Get In Touch')
    cy.log('block3')
})

When('Add the details',()=>{
    cy.get('[data-qa="name"]').type('supriya')
    cy.get('[data-qa="email"]').type('supriyatajane2015@gmail.com')
    cy.get('[data-qa="subject"]').type('javascript')
    cy.get('#message').type('i am tester')
    cy.get('[name="upload_file"]').attachFile(file)
    cy.get('[data-qa="submit-button"]').click()
    cy.log('block4')
})

Then('Vallidate the sucessful message',()=>{
    cy.get('[class="status alert alert-success"]').should('have.text','Success! Your details have been submitted successfully.')
    cy.log('block5')
    //cy.get('.status.alert.alert-success').should("have.text", "Success! Your details have been submitted successfully.")
})