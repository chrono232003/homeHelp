const { TestScheduler } = require('@jest/core');
const getDealsByZip = require('../api/getDealsByZip');

test('check get deals by zip query', () => {

    const reqBody = {
        "zip": "80401",
    }
    
    expect(getDealsByZip.createDBQuery(reqBody)).toBe(`SELECT * FROM deals WHERE Zip = '80401'`);
});