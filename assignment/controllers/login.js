const express = require('express');
const userModel=require.main.require('./models/userModel');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('login/index');
});

router.post('/', (req, res)=>{


	var user = {
		username: req.body.username,
		password: req.body.password
	};
	userModel.validate(user, function(results){
		if(results.type==0){
			req.session.username=req.body.username;
            //res.cookie('uname', req.body.username);
            console.log('admin');
			res.redirect('/ahome');
		}
		else if(results.type==1){
			req.session.username=req.body.username;
           // res.cookie('uname',req.body.username);
            console.log('user');
			res.redirect('/uhome');
        }
    
		else{
            console.log('error');
			res.redirect('/login');
		}
    });
});

module.exports = router;