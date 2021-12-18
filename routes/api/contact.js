const express = require('express');
const Router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

//Load Input Validation
const validateContactInput = require('../../validation/contact');

// Load User model
const Contact = require('../../models/Contact');

//Post Router api/users/register
Router.post('/contact', (req, res) => {
    //Form Validation
    //Destructuring Values
    const {
        errors,
        isValid
    } = validateContactInput(req.body);

    //Check Validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newContact = new Contact({
        email: req.body.email,
        message: req.body.message
    });

    newContact.save()
        .then(contacts => res.json(contacts)
            // res.redirect('/users/login')
        )
    .catch(err => console.log(err));


});

module.exports = Router;