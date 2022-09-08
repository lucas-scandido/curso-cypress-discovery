import homePage from '../page-objects/HomePage'

describe('Home Page', () => {

    it('Home Page Validation', () => {

        homePage.go()
        const homePageMessage = 'Seja um parceiro entregador pela Buger Eats'
        homePage.welcomeMessage(homePageMessage)
        homePage.buttonSignUp()

    })

})