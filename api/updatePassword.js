/**
 * Allows for a password update
 * 
 * DB NAME
 * customer_info/business_info
 * 
 * 
/**
 * POST REQ BODY
 * entityType
 * password
 * email
 */

 const process = require('../process/processData');
 const common = require('./commonProc')
 
 const updateCustomerPasswordInDB = (req, res) => {
     
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
     return common.queryDB(res, query, false)
 }
 
 const createDBQuery = (reqBody) => {
 
    let queryPrefix ="";

    if (reqBody.entityType == "customer") {
     queryPrefix = "UPDATE customer_info "
    } else if (reqBody.entityType == "business") {
     queryPrefix = "UPDATE business_info "
    }
     const colsString = `SET Password = '${reqBody.password}' `
     const valsString = `WHERE Email = '${reqBody.email}'`
     
     return queryPrefix + colsString + valsString;
 }
 
 
 module.exports = {
    updateCustomerPassword: updateCustomerPasswordInDB,
    createDBQuery: createDBQuery
 }