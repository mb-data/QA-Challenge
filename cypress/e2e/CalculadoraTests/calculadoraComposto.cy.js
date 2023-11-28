describe('calcular juro composto', () => {

    it('Deve preencher os campos requisitados e calcular os juros compostos', () => {

        cy.fixture('elementsCalculator').then((el) => {
            cy.calculoComposto(el.valorInicial);
        })
    })

    it('Deve preencher os campos requisitados com dados ficticios e ao calcular deve retornar NAN', () => {

        cy.fixture('elementsCalculator').then((el) => {
            cy.calculoCompostoDadosFicticios(el.valorInicial);
            cy.get('[style="display: flex; gap: 5px;"] > :nth-child(2)').invoke('text').then ((elementText)=>{
            expect(elementText).to.contain('NaN');
            })
        })
    })

    it('Deve preencher os campos requisitados com dados zerados e ao calcular deve retornar o valor 0', () => {

        cy.fixture('elementsCalculator').then((el) => {
            cy.calculoCompostoDadosZerados(el.valorInicial);
            cy.get('[style="display: flex; gap: 5px;"] > :nth-child(2)').invoke('text').then ((elementText)=>{
            expect(elementText).to.contain(0);
            })
        })
    })
})
