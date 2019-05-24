const express = require('express');
const contactRouter = express.Router();

// Contact model
const Contact  = require('../../model/Contact');

// route -> Get api/contact
contactRouter.get('/api/contact',(req, res) => {
    Contact.find()
        .sort({date: -1})
        .then(contacts => res.json(contacts));
});

//route -> Post api/contact
contactRouter.post('/api/contact',(req,res)=>{
    const newContact = new Contact({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        subject: req.body.subject
    });
    newContact.save()
        .then(val => res.json(val))
        .catch(err =>console.log(err));
});

module.exports = contactRouter;