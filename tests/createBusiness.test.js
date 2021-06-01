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
        "hours":"M-F-8AM-5PM",
        "phone":"303-238-7785",
        "email":"chrono232003@yahoo.com",
        "password":"Mayafit23!"
    }
    
    expect(createBusiness.createDBQuery(reqBody)).toBe(`INSERT INTO business_info (BusinessName, AddressLine1, City, State, Zip, Services, LogoPath, Rating, Description, Hours, Phone, Email, Password) VALUES ('ABC Biz','1255 Youngfield Street','Golden','CO','80401','Tire Rotation,Engine Repair','','0.0','A very cool mechanics shop','M-F-8AM-5PM','303-238-7785','chrono232003@yahoo.com','Mayafit23!')`);
});