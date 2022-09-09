import signup from '../page-objects/SignupPage'

describe('Deliveryman SignUp', () => {

    beforeEach(function () {
        cy.fixture('deliveryMan').then((d) => {
            this.deliveryMan = d
        })
    })


    it('Data fill', function () {
        //Test mass for filling in the deliveryman person's data
        signup.go()
        signup.fillForm(this.deliveryMan.signup)
        signup.submit()
        const signupSuccessMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(signupSuccessMessage)
        
    })

})