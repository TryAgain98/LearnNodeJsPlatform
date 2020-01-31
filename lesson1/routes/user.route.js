var express = require('express');
var router = express.Router();
const db = require('../db');
const shortid = require('shortid');
var userController=require('../controller/user.controller');


router.get('/search',userController.search);

router.get('/create',userController.create);


router.post('/create',userController.postCreate);
	
router.get('/:id',userController.routing);


module.exports = router;

