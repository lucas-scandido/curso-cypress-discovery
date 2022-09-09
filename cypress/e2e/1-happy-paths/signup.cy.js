import signup from '../page-objects/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe('Deliveryman SignUp', () => {

    // Não é mais necessário o uso do beforeEach, pois não vai ser utilziado mais a fixture e sim a library fake para gerar a massa de testes randomicamente.
    // beforeEach(function () {
    //     cy.fixture('deliveryMan').then((d) => {
    //         this.deliveryMan = d
    //     })
    // })

    it('Data fill', function () {

        var deliveryMan = signupFactory.deliveryMan()

        //Test mass for filling in the deliveryman person's data
        signup.go()
        signup.fillForm(deliveryMan)
        signup.submit()
        const signupSuccessMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(signupSuccessMessage)
        
    })

})