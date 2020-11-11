const express 	= require('express');
const userModel 	=require.main.require('./models/userModel');
const router 	= express.Router();

router.get('/create', (req, res)=>{
	
	if(req.cookies['uname'] != ""){
		res.render('user/create');
	}else{
		res.redirect('/login');
	}
});

router.post('/create', (req, res)=>{
	
	if(req.cookies['uname'] != ""){
	
		var user= {
			ename: req.body.name,
			cname: req.body.cname,
			contact: req.body.contact,
			username: req.body.username,
			password: req.body.password,
			type:1
	
		}
		userModel.insert(user, function(status){
			if(status){
				//res.render('home/userlist');
				userModel.getAll(function(results){
					res.render('home/userlist', {users: results});
				});
			}else{
				console.log('Erorr');
				res.render('user/create');
			}
		});

	}else{
		res.redirect('/login');
	}
});

router.get('/edit', (req, res)=>{
	
	if(req.cookies['uname'] != ""){
		//var ename= req.query.name;
		console.log(req.query.name)
		var id= {
			username:req.query.name
		}
		userModel.getById(id,function(results){
			var employee = {
				name 	: results.ename,
				cname 	:results.cname,
				contact	:results.contact,
				username:results.username,
				password:results.password

			};
			res.render('user/edit',employee);
		});
		//res.send(req.query.name);
		//res.render('user/edit');
	}else{
		res.redirect('/login');
	}
});

router.post('/edit', (req, res)=>{
	
	if(req.cookies['uname'] != ""){
		var user= {
			ename: req.body.name,
			cname: req.body.cname,
			contact: req.body.contact,
			password: req.body.password,
			username:req.query.name,
			type:1
	
		}
		userModel.update(user, function(status){
			if(status){
				//res.render('home/userlist');
				userModel.getAll(function(results){
					res.render('home/userlist', {users: results});
				});
			}else{
				console.log('Erorr');
				res.render('user/create');
			}
		});		
		
	}else{
		res.redirect('/login');
	}
});

router.get('/delete', (req, res)=>{
	
	if(req.cookies['uname'] != ""){
			console.log(req.query.name)
		var id= {
			username:req.query.name
		}
		userModel.getById(id,function(results){
			var employee = {
				name 	: results.ename,
				cname 	:results.cname,
				contact	:results.contact,
				username:results.username,
				password:results.password

			};
			res.render('user/delete',employee);
		});
	}else{
		res.redirect('/login');
	}
});

router.post('/delete', (req, res)=>{
	
	if(req.cookies['uname'] != ""){

		var id= {
			username:req.query.name
		}
		userModel.delete(id,function(status){
			if(status){
				userModel.getAll(function(results){
					res.render('home/userlist', {users: results});
				});
			}
			else{
				console.log('Erorr');
				res.render('user/create');
			}

		});

	}else{
		res.redirect('/login');
	}
});

module.exports = router;

