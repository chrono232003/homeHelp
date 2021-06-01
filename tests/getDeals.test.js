const { TestScheduler } = require('@jest/core');
const getDeals = require('../api/getDeals');

test('check get deals query', () => {

    const reqBody = {}
    
    expect(getDeals.createDBQuery(reqBody)).toBe(`SELECT * FROM deals`);
});