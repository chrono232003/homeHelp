const { TestScheduler } = require('@jest/core');
const createBusiness = require('../api/createBusiness');

test('check create customer query', () => {

    const reqBody = {
        "businessName":"ABC Biz",
        "addressLine1":"1255 Youngfield Street",
        "city":"Golden",
        "state":"CO",
        "zip":"80401",
        "services":"Tire Rotation,Engine Repair",
        "logoPath":"",
        "rating":"0.0",
        "description":"A very cool mechanics shop",
        "hours":"M-F-8AM-5PM"
    }
    
    expect(createBusiness.createDBQuery(reqBody)).toBe(`INSERT INTO business_info (BusinessName, AddressLine1, City, State, Zip, Services, LogoPath, Rating, Description, Hours) VALUES ('ABC Biz','1255 Youngfield Street','Golden','CO','80401','Tire Rotation,Engine Repair','','','A very cool mechanics shop','M-F-8AM-5PM')`);
});