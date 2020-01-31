const shortid = require('shortid');
var db=require('../db');
module.exports.index= function(req,res){
	res.render('index',{
	users: db.get('users').value()
}
);
};

module.exports.search=function(req,res){

    users=db.get('users').value();
	var name=req.query.name;
    var newUsers=users.filter(function(user){
    	return user.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
    });
    console.log('user : '+newUsers);
    res.render('index',{
    	users: newUsers,
    	name:name
    })
}

module.exports.create= function(req,res){
res.render('user/create.pug');
};

module.exports.postCreate =function(req,res){
	req.body.id = shortid.generate();
    var errors=[];
    if(!req.body.name){
        errors.push('Input My Name');
    }
    if(!req.body.phone){
        errors.push('Input my phone');
    }
    if(errors.length){
        res.render('user/create',{
            errors:errors,
            values:req.body
        })
        return;
    }
	db.get('users').push(req.body ).write();
	res.redirect('/');
};
module.exports.routing =function(req,res){
var id=req.params.id;
var user=db.get('users').find({id: id}).value();
res.render('user/view',{
	user: user
})
};