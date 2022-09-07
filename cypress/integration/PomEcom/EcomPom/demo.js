import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps"
import product from '../../POM/homePage'

let productLst = new product()

Given('Open E-Commerce Site with POM', () => {

    cy.log('test1')
})

And('Search product which is starts from br with POM', () => {
    cy.log('test2')
})

And('Add to cart Brinjal with POM', () => {
    cy.log('test2')
})

When('Place order and select country with POM', () => {
    cy.log('test3')
})

Then('Validate the Thank you message with POM', () => {
    cy.log('test4')
})