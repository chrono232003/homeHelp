const { TestScheduler } = require('@jest/core');
const updateDeal = require('../api/updateDeal');

test('check update customer password query', () => {

    const reqBody = {
        "businessID": "1",
        "title": "New title",
        "description": "This is the new description of the deal."
    }
    
    expect(updateDeal.createDBQuery(reqBody)).toBe(`UPDATE deals SET Title = 'New title', Description = 'This is the new description of the deal.' WHERE BusinessID = '1'`);
});
