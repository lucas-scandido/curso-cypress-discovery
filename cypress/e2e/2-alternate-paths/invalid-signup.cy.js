import InvalidSignupPage from '../page-objects/InvalidSignupPage' 

describe('Invalid Deliveryman SignUp', () => {
    it('Data fill with invalid Document', () => {

        //Test mass for filling in the deliveryman person's data
        var deliveryMan = {
            name: 'Lucas S Candido',
            document: '909888777AA',
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

        var invalidSignupPage = new InvalidSignupPage()

        invalidSignupPage.go()
        invalidSignupPage.fillForm(deliveryMan)
        invalidSignupPage.submit()
        const invalidDocument = 'Oops! CPF inválido'
        invalidSignupPage.alertDocumentError(invalidDocument)

    })

    it('Signup without fill the fields', () => {

        var invalidSignupPage = new InvalidSignupPage()

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