const express 	= require('express');
const userModel 	=require.main.require('./models/userModel');
const router 	= express.Router();

router.get('/', (req, res)=>{
	res.render('login/index');
});

router.post('/', (req, res)=>{


	var user = {
		username: req.body.username,
		password: req.body.password
	};
	userModel.validate(user, function(results){
		if(results.type==0){
			res.cookie('uname', req.body.username);
			res.redirect('/home');
		}
		else if(results.type==1){
			res.cookie('status',1);
			res.redirect('/ehome');
		}
		else{
			res.redirect('/login');
		}
	});


	//console.log(req.body.username);
	//console.log(req.body.password);
		
	/*var sql= "select * from userlist where username='"+req.body.username+"' and password='"+req.body.password+"'";
		 
	db.getResults(sql,function(results){
		if(results.length > 0){
			res.cookie('uname', req.body.username);
			res.redirect('/home');
			 
		  }
		  else{
			  res.redirect('/login');
		  }
	});*/
	
}); 


module.exports = router;



