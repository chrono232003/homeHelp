const { TestScheduler } = require('@jest/core');
const updateBusiness = require('../api/updateBusiness');

test('check update business information query', () => {

    const reqBody = {
        "email": "test@test.com",
        "addressLine1": "8279 Jolene Circle",
        "city": "Thornton",
        "state": "CO",
        "zip": "80229",
        "services":"Tire Rotation,Engine Repair",
        "logoPath":"",
        "description":"A very cool mechanics shop",
        "hours":"M-F-8AM-5PM",
        "phone":"303-238-7785"
    }
    
    expect(updateBusiness.createDBQuery(reqBody)).toBe(`UPDATE business_info SET AddressLine1 = '8279 Jolene Circle', City = 'Thornton', State = 'CO', Zip = '80229', Services = 'Tire Rotation,Engine Repair', LogoPath = '', Description = 'A very cool mechanics shop', Hours = 'M-F-8AM-5PM', Phone = '303-238-7785' WHERE Email = 'test@test.com'`);
});
