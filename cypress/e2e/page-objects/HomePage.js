class HomePage{

    go() {
        cy.visit('/')
    }

    welcomeMessage(homePageMessage){
        cy.contains(homePageMessage).should('be.visible')
    }

    buttonSignUp(){
        cy.get('a').should('be.visible') 
    }

}

export default new HomePage;