import InvalidSignupPage from '../page-objects/InvalidSignupPage' 
import SignupFactory from '../factories/SignupFactory'

describe('Invalid Deliveryman SignUp', () => {

    // Não é mais necessário o uso do beforeEach, pois não vai ser utilziado mais a fixture e sim a library fake para gerar a massa de testes randomicamente.
    // beforeEach(function () {
    //     cy.fixture('deliveryMan').then((d) => {
    //         this.deliveryMan = d
    //     })
    // })

    it('Data fill with invalid Document', function () {

        var deliveryMan = SignupFactory.deliveryMan()
        deliveryMan.document = '101088678aa'

        //Test mass for invalid filling in the deliveryman person's data
        InvalidSignupPage.go()
        InvalidSignupPage.fillForm(deliveryMan)
        InvalidSignupPage.submit()
        const alertMessage = 'Oops! CPF inválido'
        InvalidSignupPage.alertMessageShouldBe(alertMessage)

    })

    it('Data fill with invalid Email', function () {

        var deliveryMan = SignupFactory.deliveryMan()
        deliveryMan.email = 'teste.com.br'

        //Test mass for invalid filling in the deliveryman person's data
        InvalidSignupPage.go()
        InvalidSignupPage.fillForm(deliveryMan)
        InvalidSignupPage.submit()
        const alertMessage = 'Oops! Email com formato inválido.'
        InvalidSignupPage.alertMessageShouldBe(alertMessage)

    })

    it('Signup without fill the fields', function () {

        InvalidSignupPage.go()
        InvalidSignupPage.submit()
        const expectedMessage = {
            messageName: 'É necessário informar o nome',
            messageDocument: 'É necessário informar o CPF',
            messageEmail: 'É necessário informar o email',
            messagePostalCode: 'É necessário informar o CEP',
            messageAddressNumber: 'É necessário informar o número do endereço',
            messageDeliveryMethod: 'Selecione o método de entrega',
            messageDrivingLicense: 'Adicione uma foto da sua CNH'
        }
        InvalidSignupPage.alertMessageError(expectedMessage)

    })

})