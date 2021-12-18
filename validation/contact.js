const validator = require('validator');
const isEmpty = require('is-empty');

module.exports = validateCOntactInput = data => {
    let errors = {};
    //Convert empty fields to an empty string so we can use validator functions
    data.email = !isEmpty(data.email) ? data.email : "";
    data.message = !isEmpty(data.message) ? data.message : "";

    //Email Checks
    if (validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!validator.isEmail(data.email)) {
        errors.email = "Email is Invalid";
    }

    //Message Checks
    if (validator.isEmpty(data.message)) {
        errors.message = "Message field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};