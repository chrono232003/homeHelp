const { TestScheduler } = require('@jest/core');
const process = require('../process/processData');

test('check validate Success', () => {
    const sampleJson = {
        "firstName": "Lance",
        "lastName": "Test",
        "email": "test@test.com",
        "zipCode": "80401"
        }

        expect(process.validateNoValuesEmpty(sampleJson)).toBe(true);
        expect(process.validateEmailAddress(sampleJson['email'])).toBe(true);
});

test('check validateData fail blank value', () => {
    const sampleJson = {
        "firstName": "Lance",
        "lastName": "",
        "email": "test@test.com",
        "zipCode": "80401"
        }

        expect(process.validateNoValuesEmpty(sampleJson)).toBe("Missing data for lastName");
});

test('check validateData fail invalid email address', () => {
    const sampleJson = {
        "firstName": "Lance",
        "lastName": "Test",
        "email": "testtest.com",
        "zipCode": "80401"
        }

        expect(process.validateEmailAddress(sampleJson['email'])).toBe("email is not a valid email address");
});


