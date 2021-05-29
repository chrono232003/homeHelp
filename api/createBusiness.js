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
 */

/**
 * POST REQ BODY
 * businessName
 * addressLine1
 * city
 * state
 * zip
 * services
 * logoPath
 * rating
 * description
 * hours
 */

 const process = require('../process/processData');
 const common = require('./commonProc')
 
 const storeBusinessInDB = (req, res) => {
     
     //check API key
     if (!common.validApiKeyProvided(req)) {
         return res.status(401).send("Not Authorized")
     }
 
     //validations
     const validateFieldsNotNull = process.validateNoValuesEmpty(req.body);
     const validateEmail = process.validateEmailAddress(req.body.email);
 
     if (validateFieldsNotNull !== true) {
         //A failed validation response was given, throw error and return to client TODO: update to check if individual fields are empty.
         //return res.status(400).send("Malformed Request: " + validateFieldsNotNull);
     } else if (validateEmail !== true) {
         //A failed validation response was given, throw error and return to client
         return res.status(400).send("Malformed Request: " + validateEmail);
     }
 
     const query = createDBQuery(req.body)
     return common.queryDB(res, query, false)
 }
 
 const createDBQuery = (reqBody) => {
 
     const queryPrefix = "INSERT INTO business_info "
     const colsString = "(BusinessName, AddressLine1, City, State, Zip, Services, LogoPath, Rating, Description, Hours) "
     const valsString = `VALUES ('${reqBody.businessName}','${reqBody.addressLine1}','${reqBody.city}','${reqBody.state}','${reqBody.zip}','${reqBody.services}','${reqBody.logoPath}','${reqBody.rating}','${reqBody.description}','${reqBody.hours}')`
     
     return queryPrefix + colsString + valsString;
 }
 
 
 module.exports = {
     storeBusiness: storeBusinessInDB,
     createDBQuery: createDBQuery
 }