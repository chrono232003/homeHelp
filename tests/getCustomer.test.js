const { TestScheduler } = require('@jest/core');
const getCustomer = require('../api/getCustomer');

test('check create customer query', () => {

    const reqBody = {
        "email": "test@test.com",
    }
    
    expect(getCustomer.createDBQuery(reqBody)).toBe(`SELECT * FROM customer_info WHERE Email = 'test@test.com'`);
});