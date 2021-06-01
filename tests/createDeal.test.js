const { TestScheduler } = require('@jest/core');
const createCustomer = require('../api/createDeal');

test('check create deal query', () => {

    const reqBody = {
        "businessID": "1",
        "title": "25% off all work!",
        "description": "limited time only, 25% off of all work",
        "zip": "80401"
    }
    
    expect(createCustomer.createDBQuery(reqBody, '80401')).toBe(`INSERT INTO deals (BusinessID, Title, Description, Zip) VALUES ('1','25% off all work!','limited time only, 25% off of all work','80401')`);
});