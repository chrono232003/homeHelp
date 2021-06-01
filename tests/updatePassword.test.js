const { TestScheduler } = require('@jest/core');
const updatePassword = require('../api/updatePassword');

test('check update customer password query', () => {

    const reqBody = {
        "entityType": "customer", //customer, business
        "email": "test@test.com",
        "password": "Mayafit23@"
    }
    
    expect(updatePassword.createDBQuery(reqBody)).toBe(`UPDATE customer_info SET Password = 'Mayafit23@' WHERE Email = 'test@test.com'`);
});


test('check update business password query', () => {

    const reqBody = {
        "entityType": "business", //customer, business
        "email": "test@test.com",
        "password": "Mayafit23@"
    }
    
    expect(updatePassword.createDBQuery(reqBody)).toBe(`UPDATE business_info SET Password = 'Mayafit23@' WHERE Email = 'test@test.com'`);
});