var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliveryMan: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var signup = {
            name: `${firstName} ${lastName}`,
            document: cpf.generate(),
            email: faker.internet.email(firstName, lastName),
            phone: '43998786785',
            address: {
                postalCode: '21011020',
                addressName: 'Rua da Batata',
                addressNumber: '868',
                addrresLine: 'Casa',
                addressDistrict: 'Penha Circular',
                addressCity: 'Rio de Janeiro/RJ'
            }
        }

        return signup

    }

}