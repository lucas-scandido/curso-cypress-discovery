import signup from '../page-objects/SignupPage'

describe('Deliveryman SignUp', () => {

    it('Data fill', () => {
        //Test mass for filling in the deliveryman person's data
        var deliveryMan = {
            name: 'Lucas S Candido',
            document: '90988877766',
            email: 'email.test@outlook.com',
            phone: '43998899898',
            address: {
                postalCode: '21011020',
                addressName: 'Rua da Batata',
                addressNumber: '868',
                addrresLine: 'Casa',
                addressDistrict: 'Penha Circular',
                addressCity: 'Rio de Janeiro/RJ' 
            }
 
        }

        signup.go()
        signup.fillForm(deliveryMan)
        signup.submit()
        const signupSuccessMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(signupSuccessMessage)
        
    })

})