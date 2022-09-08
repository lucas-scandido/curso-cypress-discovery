describe('Home Page', () => {
    it('Home Page Validation', () => {
        cy.visit('https://buger-eats.vercel.app/')
    
        const homePageMessage = 'Seja um parceiro entregador pela Buger Eats'
        cy.contains(homePageMessage).should('be.visible')

        //cy.get('a').click()
        cy.get('a').should('be.visible')

    })

})