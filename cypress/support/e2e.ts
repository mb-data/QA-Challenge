import './commands'
import './calculator.actions'


beforeEach(()=>{
    Cypress.on('uncaught:exception',()=> {
        return false;
    })
    cy.visit('/')
})