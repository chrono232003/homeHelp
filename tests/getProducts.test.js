const { TestScheduler } = require('@jest/core');
const getProducts = require('../api/getProducts');

test('check get deals query', () => {
    expect(getProducts.createDBQuery()).toBe(`SELECT * FROM products`);
});