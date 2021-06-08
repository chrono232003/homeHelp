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
 * user
 * pass
 * email
 * zipCode
 */

const process = require('../process/processData');
const common = require('./commonProc')

const storeCustomerInDB = (req, res) => {
    
    //check API key
    if (!common.validApiKeyProvided(req)) {
        return res.status(401).send("Not Authorized")
    }

    //validations
    console.log(req.body);
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

    const queryPrefix = "INSERT INTO customer_info "
    const colsString = "(User, Password, Email, ZipCode) "
    const valsString = `VALUES ('${reqBody.user}','${reqBody.pass}','${reqBody.email}','${reqBody.zipCode}')`
    
    return queryPrefix + colsString + valsString;
}


module.exports = {
    storeCustomer: storeCustomerInDB,
    createDBQuery: createDBQuery
}