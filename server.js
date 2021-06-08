const express = require("express");
var cors = require('cors');
var bodyParser = require('body-parser')

const app = express();
const port = 3001;


//make the post limit 2mb
//express.json({limit:"5mb"})
//express.json.limit = "3mb"

//app.use(express.bodyParser({limit: '50mb'}));

//for use with html forms passing in data.
//app.use(express.urlencoded( {extended: true} ))

//for json posts
//app.use(express.json())

app.use(bodyParser.json({limit: '50mb', type: 'application/json'}));

app.use(cors({origin: 'http://localhost:3000'}));

app.use('/images', express.static('images'));

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
app.get('/getBusinesses', getBusiness.getBusinesses)


//deal calls
const createDeal = require('./api/createDeal')
app.post('/createDeal', createDeal.createDeal)

const getDeals = require('./api/getDeals')
app.get('/getDeals', getDeals.getDeals)

const getDealsByZip = require('./api/getDealsByZip')
app.post('/getDealsByZip', getDealsByZip.getDealsByZip)


//service calls
const getProducts = require('./api/getProducts')
app.get('/getProducts', getProducts.getProducts)


//update calls
const updateCustomerPassword = require('./api/updatePassword')
app.post('/updateCustomerPassword', updateCustomerPassword.updateCustomerPassword)

const updateBusiness = require('./api/updateBusiness')
app.post('/updateBusiness', updateBusiness.updateBusiness)

const updateDeal = require('./api/updateDeal')
app.post('/updateDeal', updateDeal.updateDeal)


//delete calls
const deleteEntity = require('./api/deleteEntity')
app.post('/deleteEntity', deleteEntity.deleteEntity)

const deleteDeal = require('./api/deleteDeal')
app.post('/deleteDeal', deleteDeal.deleteDeal)






//Pages
app.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, './pages', 'index.html'));
    res.sendStatus(400).send("Not Authorized")
  });

app.listen(port, (err) => {
    if (err) throw err
    console.log('The mail server is up and running on ', port)
})