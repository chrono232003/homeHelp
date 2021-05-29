const { TestScheduler } = require('@jest/core');
const createCustomer = require('../api/createCustomer');

test('check create customer query', () => {

    const reqBody = {
        "user": "chrono232003",
        "pass": "Mayafit23!",
        "email": "test@test.com",
        "zipCode": "80401"
    }
    
    expect(createCustomer.createDBQuery(reqBody)).toBe(`INSERT INTO customer_info (User, Password, Email, ZipCode) VALUES ('chrono232003','Mayafit23!','test@test.com','80401')`);
});


// test('store customer information in DB', done => {

//     const reqBody = {
//             "firstName": "Lance",
//             "lastName": "Test",
//             "email": "test@test.com",
//             "zipCode": "80401"
//     }
//     return createCustomer.storeInformationToDB(reqBody).then(data => {
//         expect(data).toBe(true);
//     });
// });