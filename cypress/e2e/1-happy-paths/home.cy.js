import HomePage from '../page-objects/HomePage'

describe('Home Page', () => {

    it('Application should be online', () => {

        HomePage.go()
        const homePageMessage = 'Seja um parceiro entregador pela Buger Eats'
        HomePage.welcomeMessage(homePageMessage)
        HomePage.buttonSignUp()

    })

})