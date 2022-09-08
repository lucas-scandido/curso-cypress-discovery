describe('Deliveryman SignUp', () => {
    it('Data fill', () => {
        cy.visit('https://buger-eats.vercel.app/deliver')
        cy.get('h1').should('be.visible')

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
       
        //Filling the fields
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type(deliveryMan.name)
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type(deliveryMan.document)
        cy.get(':nth-child(3) > :nth-child(1) > input').type(deliveryMan.email)
        cy.get(':nth-child(3) > :nth-child(2) > input').type(deliveryMan.phone)
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').type(deliveryMan.address.postalCode)
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click().wait(1000)
        cy.get(':nth-child(4) > :nth-child(1) > input').type(deliveryMan.address.addressNumber)
        cy.get(':nth-child(4) > :nth-child(2) > input').type(deliveryMan.address.addrresLine)

        //Checking that automatically searched fields are not empty
        cy.get(':nth-child(3) > input').should('have.value', deliveryMan.address.addressName)  
        cy.get(':nth-child(5) > :nth-child(1) > input').should('have.value', deliveryMan.address.addressDistrict)  
        cy.get(':nth-child(5) > :nth-child(2) > input').should('have.value', deliveryMan.address.addressCity)  
        
        //Selecting the delivery method and upload the driving licence by the library cypress-file-upload
        cy.get('.delivery-method > :nth-child(1)').click()
        cy.get('.dropzone').selectFile('cypress/fixtures/images/cnh-digital.jpg', {action: 'drag-drop',})

        const signupSuccessMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        
        cy.get('.button-success').click()
        cy.contains(signupSuccessMessage).should('be.visible')

    })

})