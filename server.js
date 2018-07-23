const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//Bodyparser middleware
app.use(bodyParser.json());

//db config
const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose
  .connect(db)
  .then(()=>console.log('Mongodb connected...'))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server sarted on port ${port}`));
