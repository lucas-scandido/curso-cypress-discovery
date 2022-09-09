import SignupPage from '../page-objects/SignupPage'
import SignupFactory from '../factories/SignupFactory'

describe('Deliveryman SignUp', () => {

    // Não é mais necessário o uso do beforeEach, pois não vai ser utilziado mais a fixture e sim a library faker para gerar a massa de testes randomicamente.
    // beforeEach(function () {
    //     cy.fixture('deliveryMan').then((d) => {
    //         this.deliveryMan = d
    //     })
    // })

    it('Data fill', function () {

        var deliveryMan = SignupFactory.deliveryMan()

        //Test mass for filling in the deliveryman person's data
        SignupPage.go()
        SignupPage.fillForm(deliveryMan)
        SignupPage.submit()
        const signupSuccessMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        SignupPage.modalContentShouldBe(signupSuccessMessage)
        
    })

})