const express = require('express');// require 1 function
const app = express();
const bodyParser = require('body-parser');
var db=require('./db');
var userController=require('./controller/user.controller');
var userRoute=require('./routes/user.route');

app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));

const port = 3000;
app.get('/',userController.index);
app.use('/user',userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

