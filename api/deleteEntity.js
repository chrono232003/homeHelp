/**
 * Allows for a password update
 * 
 * DB NAME
 * customer_info
 * 
 * 
/**
 * POST REQ BODY
 * entityType
 * email
 */

 const process = require('../process/processData');
 const common = require('./commonProc')
 
 const deleteEntityFromDB = (req, res) => {
     
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
    if (reqBody.entityType == "customer") {
        return `DELETE FROM customer_info WHERE Email = '${reqBody.email}'`
    } else if (reqBody.entityType == "business") {
        return `DELETE FROM business_info WHERE Email = '${reqBody.email}'`
    }

    return "";
 }
 
 
 module.exports = {
    deleteEntity: deleteEntityFromDB,
    createDBQuery: createDBQuery
 }