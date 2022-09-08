import HomePage from '../page-objects/HomePage'

describe('Home Page', () => {
    it('Home Page Validation', () => {

        var homePage = new HomePage()

        homePage.go()
        const homePageMessage = 'Seja um parceiro entregador pela Buger Eats'
        homePage.welcomeMessage(homePageMessage)
        homePage.buttonSignUp()

    })

})