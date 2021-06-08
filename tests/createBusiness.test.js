const { TestScheduler } = require('@jest/core');
const createBusiness = require('../api/createBusiness');

test('check create customer query', () => {

    const reqBody = {
        "businessName":"ABC Biz",
        "typeOfProduct":"Makeup",
        "logoPath":"",
        "rating":"0.0",
        "description":"We sell makeup products.",
        "email":"chrono232003@yahoo.com",
        "password":"testpass"
    }
    
    expect(createBusiness.createDBQuery(reqBody)).toBe(`INSERT INTO business_info (BusinessName, TypeOfProduct, LogoPath, Rating, Description, Email, Password) VALUES ('ABC Biz','Makeup','','0.0','We sell makeup products.','chrono232003@yahoo.com','testpass')`);
});