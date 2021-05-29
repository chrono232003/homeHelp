/**
 * Validate the data that is passed into the api service.
 * Expecting json with 4 pieces of data:
 * firstName
 * lastName
 * email
 * zipCode
**/
const validateNoValuesEmpty = (reqObj) => {

    for (item in reqObj) {
        if (!checkForValue(reqObj[item])) {
            return "Missing data for " + item
        }
    }
    return true
}

const validateEmailAddress = (email) => {

    if (!validEmail(email)) {
        return "email is not a valid email address";
    }
    return true
}



//HELPER FUNCTIONS
const checkForValue = (value) => {
    return value != undefined && value != null && value != "";
} 

const validEmail = (email) => {
    return (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
}


module.exports = {
    validateNoValuesEmpty: validateNoValuesEmpty,
    validateEmailAddress: validateEmailAddress
}