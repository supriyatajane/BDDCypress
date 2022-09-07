// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('login', (username, password) => { 
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('#txtUsername').type('Admin')
    cy.get('#txtPassword').type('admin123')
    cy.get('#btnLogin').click()
 })
//
        
        Cypress.Commands.add('validateContactUs',(first_name,last_name,email,message)=>{


            
            
            cy.contains('CONTACT US').should('be.visible')
        
            cy.get('input[name="first_name"]').type('supriya')
            cy.get('input[name="last_name"]').type('tajane')
            cy.get('input[name="email"]').type('supriyatajane2015@gmail.com')
            cy.get('textarea[name="message"]').type('hiii')
            
            

        })


        Cypress.Commands.add('validateTable',(tableId, expectedValue)=>{
            let sum = 0
            cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
            cy.get(`#t0${tableId}`).find('tr').each(function(el,index,arr){
                if(index != 0){
                 // cy.log(el.find('td').last().text())
                   sum = sum +  Number(el.find('td').last().text())
                }    
            }).then(function(){
                expect(sum).to.equals(expectedValue)
            }) 
        
        })
        
        
        
        
        //






        // Cypress.Commands.add('VerifyContactusform', (firstName, lastName, email, message)=> {
        //     if (firstName !== undefined) cy.get('[name="first_name"]').type(firstName)
        //     if (lastName !== undefined) cy.get('[name="last_name"]').type(lastName)
        //     if (email !== undefined) cy.get('[name="email"]').type(email)
        //     if (message !== undefined) cy.get('[name="message"]').type(message)
        // })


//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';