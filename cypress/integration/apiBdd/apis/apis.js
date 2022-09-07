


import { expect } from "chai"
import { Given, Then } from "cypress-cucumber-preprocessor/steps"

let id

Given("user sent request for get multiple user", () => {
    cy.request({
        method: "GET",
        url: `https://reqres.in/api/users?page=2`

    }).as('getuser')


    //cy.log('test1')
})

Then('user list should be displayed', () => {
    cy.get('@getuser').then((response) => {
        cy.log(response)

        expect(response.status).eq(200)
        expect(response.statusText).eq("OK")
        expect(response.body.page).eq(2)
        expect(response.body.total).eq(12)
    })

})

Given(`user sent request create new user with {word} and {word}`, (name, job) => {
    cy.request({
        method: "POST",
        url: `https://reqres.in/api/users`,
        body: {
            "name": name,
            "job": job
        }
    }).as('createuser')

})


Then(`user should be created {word} and {word}`, (name, job) => {

    cy.get('@createuser').then((response) => {
        cy.log(response)

        expect(response.status).eq(201)
        expect(response.statusText).eq("Created")
        expect(response.isOkStatusCode).eq(true)
        expect(response.body.name).eq(name)
        expect(response.body.job).eq(job)
        id=response.body.id
    })
})

Given(`user sent request the existing user update with {word} and {word}`,(name,job)=>{
cy.request({
    method:"PUT",
    url:`https://reqres.in/api/users/2https://reqres.in/api/users/${id}`,
    body:{
        "name": name,
        "job": job
    }
}).as('updateuser')
   
})

Then(`user should be updated {word} and {word}`,(name,job)=>{
    cy.get('@updateuser').then((response)=>{
        cy.log(response)
        expect(response.status).eq(200)
        expect(response.statusText).eq("OK")
        expect(response.isOkStatusCode).eq(true)
        expect(response.body.name).eq(name)
        expect(response.body.job).eq(job)
    })
})

Given(`user sent request the existing data one single update with {word} and {word}`,(name,job)=>{
    cy.request({
        method:"PATCH",
        url:`https://reqres.in/api/users/${id}`,
        body:{
            "name": name,
            "job": job
        }
    }).as('upuser')
})

Then(`user should be update particular field {word} and {word}`,(name,job)=>{
    cy.get('@upuser').then((response)=>{
        cy.log(response)
        expect(response.status).eq(200)
        expect(response.statusText).eq("OK")
        expect(response.body.name).eq(name)
        expect(response.body.job).eq(job)
    })
})