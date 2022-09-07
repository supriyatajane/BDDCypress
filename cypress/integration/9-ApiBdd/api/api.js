import { expect } from "chai"
import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps"

Given('User sent requset multiple user',()=>{
    cy.request({
        method:"GET",
        url:`https://reqres.in/api/users?page=2`
    }).as('getUser')

    //cy.log('block1')
})

Then('User list should be displayed',()=>{
    cy.get('@getUser').then(function(res){
        expect(res.status).eq(200)
        expect(res.statusText).eq("OK")
    })
    //cy.log('block2')
})


Given(`User sent the request to create new user with {word} and job {string}`,(name,job)=>{
cy.request({
    method:"POST",
    url:`https://reqres.in/api/users`,
    body:{
        "name": name,
        "job": job
    }
}).as('postUser')
})


Then(`User should be created with {string} and job {string}`,(name,job)=>{
//cy.log('block5')
cy.get('@postUser').then(function(res){
    cy.log(res)
     expect(res.status).eq(201)
     expect(res.statusText).eq("Created")
    //  expect(res.body.name).eq(name)
    // expect(res.body.job).eq(job)
})
})