/**
 * DB NAME
 * business_info
 * 
 * DB SCHEMA
 * BusinessName
 * AddressLine1
 * City
 * State
 * Zip
 * Services
 * LogoPath
 * Rating
 * Description
 * Hours
 * Phone
 * Email
 * Password
 */

/**
 * POST REQ BODY
 * email
 */

 const process = require('../process/processData');
 const common = require('./commonProc')
 
 const getBusinessFromDB = (req, res) => {

    //check API key
    if (!common.validApiKeyProvided(req)) {
        return res.status(401).send("Not Authorized")
    }

    //validations
    const validateFieldsNotNull = process.validateNoValuesEmpty(req.body);

    if (validateFieldsNotNull !== true) {
        //A failed validation response was given, throw error and return to client
        return res.status(400).send("Malformed Request: " + validateFieldsNotNull);
    }

    const query = createDBQuery(req.body)
    return common.queryDB(res, query, true)
 }
 
 const createDBQuery = (reqBody) => {
     return `SELECT * FROM business_info WHERE Email = '${reqBody.email}'`;
 }
 
 
 module.exports = {
    getBusiness: getBusinessFromDB,
     createDBQuery: createDBQuery //Testing
 }