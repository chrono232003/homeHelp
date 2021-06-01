/**
 * Allows for a password update
 * 
 * DB NAME
 * deals
 * 
 * 
/**
 * POST REQ BODY
 * businessID
 * title
 * description
 */

 const process = require('../process/processData');
 const common = require('./commonProc')
 
 const updateDeal = (req, res) => {
     
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
 
     const queryPrefix = "UPDATE deals "
     const colsString = `SET Title = '${reqBody.title}', Description = '${reqBody.description}' `
     const valsString = `WHERE BusinessID = '${reqBody.businessID}'`
     
     return queryPrefix + colsString + valsString;
 }
 
 
 module.exports = {
    updateDeal: updateDeal,
    createDBQuery: createDBQuery
 }