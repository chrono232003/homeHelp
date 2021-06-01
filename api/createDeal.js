/**
 * DB NAME
 * deals
 * 
 * DB SCHEMA
 * ID
 * BusinessID
 * Title
 * Description
 * Zip
 */

/**
 * POST REQ BODY
 * businessID
 * title
 * description
 */

 const process = require('../process/processData');
 const common = require('./commonProc')
 
 const storeDealInDB = (req, res) => {
     
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

     //TODO: Query the zip code of the business from the business ID in the business_info table. Hardcoded for now.
    req.body.zip = getBusinessZip("todo");


     const query = createDBQuery(req.body)
     return common.queryDB(res, query, false)
 }

 const createDBQuery = (reqBody) => {
 
     const queryPrefix = "INSERT INTO deals "
     const colsString = "(BusinessID, Title, Description, Zip) "
     const valsString = `VALUES ('${reqBody.businessID}','${reqBody.title}','${reqBody.description}','${reqBody.zip}')`
     
     return queryPrefix + colsString + valsString;
 }


 /**
  * For easier querying, the zipcode of the business will be stored with the deal.
  * Query the business by ID and get the zipcode and return it.
  * @param {*} BusinessID 
  */
 const getBusinessZip = (BusinessID) => {

    //hardcoded for now.
    return "80401";

 }
 
 
 module.exports = {
     createDeal: storeDealInDB,
     createDBQuery: createDBQuery
 }