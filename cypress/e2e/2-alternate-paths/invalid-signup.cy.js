import invalidSignupPage from '../page-objects/InvalidSignupPage' 

describe('Invalid Deliveryman SignUp', () => {

    beforeEach(function () {
        cy.fixture('deliveryMan').then((d) => {
            this.deliveryMan = d
        })
    })

    it('Data fill with invalid Document', function () {
        //Test mass for invalid filling in the deliveryman person's data
        invalidSignupPage.go()
        invalidSignupPage.fillForm(this.deliveryMan.invalidDocument)
        invalidSignupPage.submit()
        const alertMessage = 'Oops! CPF inválido'
        invalidSignupPage.alertMessageShouldBe(alertMessage)

    })

    it('Data fill with invalid Email', function () {
        //Test mass for invalid filling in the deliveryman person's data
        invalidSignupPage.go()
        invalidSignupPage.fillForm(this.deliveryMan.invalidEmail)
        invalidSignupPage.submit()
        const alertMessage = 'Oops! Email com formato inválido.'
        invalidSignupPage.alertMessageShouldBe(alertMessage)

    })

    it('Signup without fill the fields', function () {

        invalidSignupPage.go()
        invalidSignupPage.submit()
        const expectedMessage = {
            messageName: 'É necessário informar o nome',
            messageDocument: 'É necessário informar o CPF',
            messageEmail: 'É necessário informar o email',
            messagePostalCode: 'É necessário informar o CEP',
            messageAddressNumber: 'É necessário informar o número do endereço',
            messageDeliveryMethod: 'Selecione o método de entrega',
            messageDrivingLicense: 'Adicione uma foto da sua CNH'
        }
        invalidSignupPage.alertMessageError(expectedMessage)

    })

})