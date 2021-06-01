/**
 * DB NAME
 * services
 * 
 * DB SCHEMA
 * ID
 * ServiceName
 */

 const common = require('./commonProc')
 
 const getServicesFromDB = (req, res) => {

    //check API key
    if (!common.validApiKeyProvided(req)) {
        return res.status(401).send("Not Authorized")
    }

    const query = createDBQuery()
    return common.queryDB(res, query, true)
 }
 
 const createDBQuery = () => {
     return `SELECT * FROM services`;
 }
 
 
 module.exports = {
     getServices: getServicesFromDB,
     createDBQuery: createDBQuery
 }