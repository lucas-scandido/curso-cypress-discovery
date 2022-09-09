import HomePage from '../page-objects/HomePage'

describe('Home Page', () => {

    it('Home Page Validation', () => {

        HomePage.go()
        const homePageMessage = 'Seja um parceiro entregador pela Buger Eats'
        HomePage.welcomeMessage(homePageMessage)
        HomePage.buttonSignUp()

    })

})