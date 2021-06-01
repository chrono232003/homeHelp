/**
 * 
 * DB NAME
 * deals
 * 
 * 
/**
 * POST REQ BODY
 * dealID
 */

 const process = require('../process/processData');
 const common = require('./commonProc')
 
 const deleteDealFromDB = (req, res) => {
     
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
     return common.queryDB(res, query, false)
 }
 
 const createDBQuery = (reqBody) => {
    return `DELETE FROM deals WHERE ID = '${reqBody.dealID}'`
 }
 
 
 module.exports = {
    deleteDeal: deleteDealFromDB,
    createDBQuery: createDBQuery
 }