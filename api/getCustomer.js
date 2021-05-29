/**
 * DB NAME
 * customer_info
 * 
 * DB SCHEMA
 * User
 * Password
 * Email
 * ZipCode
 */

/**
 * POST REQ BODY
 * email
 */

 const process = require('../process/processData');
 const common = require('./commonProc')
 
 const getCustomerFromDB = (req, res) => {

    //check API key
    if (!common.validApiKeyProvided(req)) {
        return res.status(401).send("Not Authorized")
    }

    //validations
    const validateFieldsNotNull = process.validateNoValuesEmpty(req.body);
    const validateEmail = process.validateEmailAddress(req.body.email);

    if (validateFieldsNotNull !== true) {
        //A failed validation response was given, throw error and return to client
        return res.status(400).send("Malformed Request: " + validateFieldsNotNull);
    } else if (validateEmail !== true) {
        //A failed validation response was given, throw error and return to client
        return res.status(400).send("Malformed Request: " + validateEmail);
    }

    const query = createDBQuery(req.body)
    return common.queryDB(res, query, true)
 }
 
 const createDBQuery = (reqBody) => {
     return `SELECT * FROM customer_info WHERE Email = '${reqBody.email}'`;
 }
 
 
 module.exports = {
     getCustomer: getCustomerFromDB,
     createDBQuery: createDBQuery
 }