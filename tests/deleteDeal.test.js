const { TestScheduler } = require('@jest/core');
const deleteDeal = require('../api/deleteDeal');

test('check delete deal query', () => {

    const reqBody = {
        "dealID": "1"
    }
    
    expect(deleteDeal.createDBQuery(reqBody)).toBe(`DELETE FROM deals WHERE ID = '1'`);
});