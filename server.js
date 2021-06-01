const express = require("express");
const app = express();
const port = 3000;

//for use with html forms passing in data.
app.use(express.urlencoded( {extended: true} ))

//for json posts
app.use(express.json())

//customer calls
const createCustomer = require('./api/createCustomer')
app.post('/createCustomer', createCustomer.storeCustomer)

const getCustomer = require('./api/getCustomer')
app.post('/getCustomer', getCustomer.getCustomer)


//business calls
const createBusiness = require('./api/createBusiness')
app.post('/createBusiness', createBusiness.storeBusiness)

const getBusiness = require('./api/getBusiness')
app.post('/getBusiness', getBusiness.getBusiness)


//deal calls
const createDeal = require('./api/createDeal')
app.post('/createDeal', createDeal.createDeal)

const getDeals = require('./api/getDeals')
app.get('/getDeals', getDeals.getDeals)

const getDealsByZip = require('./api/getDealsByZip')
app.post('/getDealsByZip', getDealsByZip.getDealsByZip)


//service calls
const getServices = require('./api/getServices')
app.get('/getServices', getServices.getServices)


//update calls
const updateCustomerPassword = require('./api/updatePassword')
app.post('/updateCustomerPassword', updateCustomerPassword.updateCustomerPassword)

const updateBusiness = require('./api/updateBusiness')
app.post('/updateBusiness', updateBusiness.updateBusiness)

const updateDeal = require('./api/updateDeal')
app.post('/updateDeal', updateDeal.updateDeal)


//Throw and HTTP error on the root url.
app.get('/', (req, res) => {
    res.status(404).send('Not a valid endpoint.');
  });

app.listen(port, (err) => {
    if (err) throw err
    console.log('The mail server is up and running on ', port)
})