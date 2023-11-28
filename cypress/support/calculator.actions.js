Cypress.Commands.add('calculoComposto', (username) => {
    cy.fixture('elementsCalculator').then((el)=> {
        cy.get(el.valorInicial).should('be.visible').type('100')
         cy.get(el.taxaJuros).should('be.visible').type('5')
         cy.get(el.tempo).should('be.visible').type('1')
         cy.get(el.botaoCalcular).should('be.visible').click();
         
    })
})

Cypress.Commands.add('calculoSimples', (username) => {
    cy.fixture('elementsCalculator').then((el)=> {
        cy.get('[style="background-color: rgb(26, 26, 26); padding: 0px;"]').should('be.visible').click();

        cy.get(el.valorInicial).should('be.visible').type('100')
        cy.get(el.taxaJuros).should('be.visible').type('5')
        cy.get(el.tempo).should('be.visible').type('1')
        cy.get(el.botaoCalcular).should('be.visible').click();
    })
})

Cypress.Commands.add('calculoCompostoDadosFicticios', (username) => {
    cy.fixture('elementsCalculator').then((el)=> {
        cy.get(el.valorInicial).should('be.visible').type('texto')
         cy.get(el.taxaJuros).should('be.visible').type('0')
         cy.get(el.tempo).should('be.visible').type('1')
         cy.get(el.botaoCalcular).should('be.visible').click();
         
    })
})


Cypress.Commands.add('calculoSimplesDadosFicticios', (username) => {
    cy.fixture('elementsCalculator').then((el)=> {
        cy.get('[style="background-color: rgb(26, 26, 26); padding: 0px;"]').should('be.visible').click();
        cy.get(el.valorInicial).should('be.visible').type('dadoemtexto')
         cy.get(el.taxaJuros).should('be.visible').type('0')
         cy.get(el.tempo).should('be.visible').type('1')
         cy.get(el.botaoCalcular).should('be.visible').click();
         
    })
})


Cypress.Commands.add('calculoSimplesDadosZerados', (username) => {
    cy.get('[style="background-color: rgb(26, 26, 26); padding: 0px;"]').should('be.visible').click();
    cy.fixture('elementsCalculator').then((el)=> {
        cy.get(el.valorInicial).should('be.visible').type('0')
         cy.get(el.taxaJuros).should('be.visible').type('0')
         cy.get(el.tempo).should('be.visible').type('0')
         cy.get(el.botaoCalcular).should('be.visible').click();
         
    })
})

Cypress.Commands.add('calculoCompostoDadosZerados', (username) => {
    cy.fixture('elementsCalculator').then((el)=> {
        cy.get(el.valorInicial).should('be.visible').type('0')
         cy.get(el.taxaJuros).should('be.visible').type('0')
         cy.get(el.tempo).should('be.visible').type('0')
         cy.get(el.botaoCalcular).should('be.visible').click();
         
    })
})