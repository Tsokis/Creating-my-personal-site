const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const contactJson  = require('./routes/api/contact');

//Init express
const app = express();

//BodyParser
app.use(bodyParser.json());

// config mongo db
const db = require('./config/apikey').mongoURI;

// connect to our database
mongoose.connect(db)
    .then(()=> console.log('db connected!'))
    .catch((err)=>console.log('something went wrong'+err));

app.use(contactJson);

const port = process.env.PORT || 5000;

app.listen(port ,()=>console.log(`Server running on port ${port}`));