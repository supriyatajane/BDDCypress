import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps"
 Given('I open Google page',()=>{
    cy.visit('https://www.google.com/')
 })

 Then('I see {string} in title',(title)=>{
    cy.title().should('include',title)

 })

 Then('I see {string} in url',(url)=>{
    cy.url().should('include',url)
 })