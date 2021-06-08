/**
 * DB NAME
 * services
 * 
 * DB SCHEMA
 * ID
 * ServiceName
 */

 const common = require('./commonProc')
 
 const getProductsFromDB = (req, res) => {

    //check API key
    // if (!common.validApiKeyProvided(req)) {
    //     return res.status(401).send("Not Authorized")
    // }

    const query = createDBQuery()
    return common.queryDB(res, query, true)
 }
 
 const createDBQuery = () => {
     return `SELECT * FROM products`;
 }
 
 
 module.exports = {
     getProducts: getProductsFromDB,
     createDBQuery: createDBQuery
 }