const { TestScheduler } = require('@jest/core');
const deleteEntity = require('../api/deleteEntity');

test('check delete customer query', () => {

    const reqBody = {
        "entityType": "customer",
        "email": "test@test.com"
    }
    
    expect(deleteEntity.createDBQuery(reqBody)).toBe(`DELETE FROM customer_info WHERE Email = 'test@test.com'`);
});

test('check delete business query', () => {

    const reqBody = {
        "entityType": "business",
        "email": "test@test.com"
    }
    
    expect(deleteEntity.createDBQuery(reqBody)).toBe(`DELETE FROM business_info WHERE Email = 'test@test.com'`);
});
