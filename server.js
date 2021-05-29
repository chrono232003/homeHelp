const express = require("express");
const app = express();
const port = 3000;

//for use with html forms passing in data.
app.use(express.urlencoded( {extended: true} ))

//for json posts
app.use(express.json())

const createCustomer = require('./api/createCustomer')
app.post('/createCustomer', createCustomer.storeCustomer)

const getCustomer = require('./api/getCustomer')
app.post('/getCustomer', getCustomer.getCustomer)

const createBusiness = require('./api/createBusiness')
app.post('/createBusiness', createBusiness.storeBusiness)

//Throw and HTTP error on the root url.
app.get('/', (req, res) => {
    res.status(404).send('Not a valid endpoint.');
  });

app.listen(port, (err) => {
    if (err) throw err
    console.log('The mail server is up and running on ', port)
})