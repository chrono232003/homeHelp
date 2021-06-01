/**
 * Allows for a password update
 * 
 * DB NAME
 * business_info
 * 
 * DB SCHEMA //fields that can be updated and the email address to identify the business account.
 * Email
 * 
 * 
 * AddressLine1
 * City
 * State
 * Zip
 * Services
 * LogoPath
 * Description
 * Hours
 * Phone
 */

/**
 * POST REQ BODY
 * email
 * addressLine1
 * city
 * state
 * zip
 * services
 * logoPath
 * description
 * hours
 * phone
 */

 const process = require('../process/processData');
 const common = require('./commonProc')
 
 const updateBusinessInDB = (req, res) => {
     
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
 
     const queryPrefix = "UPDATE business_info "
     const colsString = `SET AddressLine1 = '${reqBody.addressLine1}', City = '${reqBody.city}', State = '${reqBody.state}', Zip = '${reqBody.zip}', Services = '${reqBody.services}', LogoPath = '${reqBody.logoPath}', Description = '${reqBody.description}', Hours = '${reqBody.hours}', Phone = '${reqBody.phone}'`
     const valsString = ` WHERE Email = '${reqBody.email}'`
     
     return queryPrefix + colsString + valsString;
 }
 
 
 module.exports = {
    updateBusiness: updateBusinessInDB,
    createDBQuery: createDBQuery
 }