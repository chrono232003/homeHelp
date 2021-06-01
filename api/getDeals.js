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

 const common = require('./commonProc')
 
 const getDealsFromDB = (req, res) => {

    //check API key
    if (!common.validApiKeyProvided(req)) {
        return res.status(401).send("Not Authorized")
    }

    const query = createDBQuery(req.body)
    return common.queryDB(res, query, true)
 }
 
 const createDBQuery = (reqBody) => {
     return `SELECT * FROM deals`;
 }
 
 
 module.exports = {
     getDeals: getDealsFromDB,
     createDBQuery: createDBQuery
 }