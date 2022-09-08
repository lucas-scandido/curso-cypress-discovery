class HomePage{

    go() {
        cy.visit('https://buger-eats.vercel.app/')
    }

    welcomeMessage(homePageMessage){
        cy.contains(homePageMessage).should('be.visible')
    }

    buttonSignUp(){
        cy.get('a').should('be.visible') 
    }

}

export default HomePage;