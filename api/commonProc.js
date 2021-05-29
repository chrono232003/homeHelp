const config = require('../config.json');
const dbConn = require('../api/dbConnect');

const validApiKeyProvided = (req) => {
    return req.header('api-key') == config.api_key;
}


const queryDB = (res, query) => {
    dbConn.query(query, (err, result, returnResponse) => {
        if (err) {
            console.log("There was an error writing to the db:", err);
            return res.status(500).send("There was an error writing to the db");
        }
        return (returnResponse) ? res.status(200).send(result) : res.status(200).send("Success")
    })
}


module.exports = {
    validApiKeyProvided: validApiKeyProvided,
    queryDB: queryDB
}