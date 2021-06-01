const { TestScheduler } = require('@jest/core');
const getDeals = require('../api/getServices');

test('check get deals query', () => {
    expect(getDeals.createDBQuery()).toBe(`SELECT * FROM services`);
});