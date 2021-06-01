/**
 * DB NAME
 * deals
 * 
 * DB SCHEMA
 * ID
 * BusinessID
 * Title
 * Description
 */

/**
 * POST REQ BODY
 * zip
 */

 const process = require('../process/processData');
 const common = require('./commonProc')
 
 const getDealsByZipFromDB = (req, res) => {

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
     return `SELECT * FROM deals WHERE Zip = '${reqBody.zip}'`;
 }
 
 
 module.exports = {
     getDealsByZip: getDealsByZipFromDB,
     createDBQuery: createDBQuery
 }