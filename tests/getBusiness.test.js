const { TestScheduler } = require('@jest/core');
const getBusiness = require('../api/getBusiness');

test('check get business query', () => {

    const reqBody = {
        "email": "test@test.com",
    }
    
    expect(getBusiness.createDBQuery(reqBody)).toBe(`SELECT * FROM business_info WHERE Email = 'test@test.com'`);
});