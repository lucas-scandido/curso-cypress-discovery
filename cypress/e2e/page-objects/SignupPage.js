class SignUpPage{

    go() {
        cy.visit('https://buger-eats.vercel.app/deliver')
        cy.get('h1').should('be.visible')   
    }

    fillForm(deliveryMan) {

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

    }

    submit() {
        cy.get('.button-success').click()
    }

    modalContentShouldBe(signupSuccessMessage) {
        cy.contains(signupSuccessMessage).should('be.visible')

    }

}

export default SignUpPage;