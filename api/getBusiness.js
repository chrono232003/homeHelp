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
 * Phone
 * Email
 * Password
 */

/**
 * POST REQ BODY
 * email
 */

 const process = require('../process/processData');
 const common = require('./commonProc')
 
 const getBusinessFromDB = (req, res) => {

    //validations
    const validateFieldsNotNull = process.validateNoValuesEmpty(req.body);
    const validateEmail = process.validateEmailAddress(req.email)

    if (validateFieldsNotNull !== true) {
        //A failed validation response was given, throw error and return to client
        return res.status(400).send("Malformed Request: " + validateFieldsNotNull);
    }

    if (validateFieldsNotNull !== true) {
        //A failed validation response was given, throw error and return to client
        return res.status(400).send("Malformed Request: " + validateFieldsNotNull);
    }

    const query = createDBQuery(req.body)
    return common.queryDB(res, query, true)
 }

 const getBusinessesFromDB = (req, res) => {
    const query = createDBQuery("")
    return common.queryDB(res, query, true)
 }
 
 const createDBQuery = (reqBody) => {
     if (reqBody != "" && reqBody.id != "" && reqBody.id != undefined) {
        //To grab business by ID
        console.log("first")
        console.log(reqBody.id)
        return `SELECT * FROM business_info WHERE ID = '${reqBody.id}'`;
     } else if (reqBody != "" && reqBody.email != "" && reqBody.password != "") {
         //to verify user and return their business data
         console.log("second")
        return `SELECT * FROM business_info WHERE Email = '${reqBody.email}' and Password = '${reqBody.password}'`;
     } else {
         //to grab a list of the latest businesses
         console.log("third")
        return `SELECT b.ID, b.BusinessName, b.Description, b.LogoPath, b.WebsiteLink, p.ProductName FROM business_info as b JOIN products as p on b.TypeOfProduct = p.id  order by DateTimeAdded`;
     }
    }
 
 module.exports = {
    getBusiness: getBusinessFromDB,
    getBusinesses: getBusinessesFromDB,
     createDBQuery: createDBQuery //Testing
 }