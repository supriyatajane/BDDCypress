
import { Given } from "cypress-cucumber-preprocessor/steps";

const url ='https://www.facebook.com'
Given('I open Facebook Login page',()=>{

    cy.visit(url)
})
Then(`I see {string} in title`, (title) => {
    cy.title().should('include', title)
  
})