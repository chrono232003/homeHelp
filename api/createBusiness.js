/**
 * DB NAME
 * business_info
 * 
 * DB SCHEMA
 * BusinessName
 * TypeOfProduct
 * LogoPath
 * Rating
 * Description
 * Email
 * Password
 */

/**
 * POST REQ BODY
 * businessName
 * typeOfProduct
 * logoPath
 * rating
 * description
 * email
 * password
 */

 const process = require('../process/processData');
 const common = require('./commonProc')

 fs = require('fs');

 const storeBusinessInDB = (req, res) => {
     
     //check API key
     if (!common.validApiKeyProvided(req)) {
         return res.status(401).send("Not Authorized")
     }
 
     //store file
     var imageType = "";
     if (req.body.logoImage.indexOf('jpeg') || req.body.logoImage.indexOf('jpg')) {
      imageType = "jpg"
     } else if (req.body.logoImage.indexOf('png')) {
      imageType = "png"
     } else {
      imageType = "jpg"
     }

     const logoPath = 'images/'+req.body.businessName.replace(/ /g, "")+"."+imageType
     const logoImage = decodeBase64Image(req.body.logoImage);
        fs.writeFile(logoPath, logoImage.data, 'base64', function (err) {
        if (err) return console.log(err);
        console.log("successfully uploaded the image!");
      });
     

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
 
     const query = createDBQuery(req.body, logoPath)
     return common.queryDB(res, query, false)
 }
 
 const createDBQuery = (reqBody, logoPath) => {
 
     const queryPrefix = "INSERT INTO business_info "
     const colsString = "(BusinessName, TypeOfProduct, LogoPath, Rating, Description, Email, Password, WebsiteLink) "
     const valsString = `VALUES ('${reqBody.businessName}','${reqBody.typeOfProduct}','${logoPath}','0.0','${reqBody.description}','${reqBody.email}','${reqBody.password}','${reqBody.websiteLink}')`
     
     return queryPrefix + colsString + valsString;
 }
 

 function decodeBase64Image(dataString) {
    var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
      response = {};
  
    if (matches.length !== 3) {
      return new Error('Invalid input string');
    }
  
    response.type = matches[1];
    response.data = new Buffer(matches[2], 'base64');
  
    return response;
  }
 
 module.exports = {
     storeBusiness: storeBusinessInDB,
     createDBQuery: createDBQuery
 }