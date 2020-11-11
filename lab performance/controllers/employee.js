const express 	= require('express');
const jobModel 	=require.main.require('./models/jobModel');
const router 	= express.Router();

router.get('/create', (req, res)=>{
	
	if(req.cookies['uname'] != ""){
		res.render('employee/create');
	}else{
		res.redirect('/login');
	}
});

router.post('/create', (req, res)=>{
	
	if(req.cookies['uname'] != ""){
		var job= {
			cname: req.body.cname,
			jobtitle:req.body.jobtitle,
			location: req.body.location,
			salary: req.body.salary
		
		}
		jobModel.insert(job, function(status){
			if(status){
				//res.render('home/userlist');
				jobModel.getAll(function(results){
					res.render('ehome/joblist', {users: results});
				});
			}else{
				console.log('post Erorr');
			}
		});

	}else{
		res.redirect('/login');
	}
});

router.get('/edit', (req, res)=>{
	
	if(req.cookies['uname'] != ""){

		console.log(req.query.jobid)
		var id= {
			id:req.query.jobid
		}
		jobModel.getById(id,function(results){
			var job= {
				cname: results.cname,
				jobtitle:results.jobtitle,
				location: results.location,
				salary: results.salary
			
			};
			res.render('employee/edit',job);
		});
		//res.send(req.query.name);
		//res.render('user/edit');
	}else{
		res.redirect('/login');
	}
});

router.post('/edit', (req, res)=>{
	
	if(req.cookies['uname'] != ""){
		var job= {
			cname: req.body.cname,
			jobtitle:req.body.jobtitle,
			location: req.body.location,
			salary: req.body.salary
		
		}
		jobModel.update(job, function(status){
			if(status){
				//res.render('home/userlist');
				jobModel.getAll(function(results){
					res.render('ehome/joblist', {users: results});
				});
			}else{
				console.log('Erorr');
				res.render('job/create');
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
			id:req.query.jobid
		}
		jobModel.getById(id,function(results){
			var job= {
				cname: results.cname,
				jobtitle:results.jobtitle,
				location: results.location,
				salary: results.salary
			
			};
			res.render('employee/delete',job);
		});
	}else{
		res.redirect('/login');
	}
});

router.post('/delete', (req, res)=>{
	
	if(req.cookies['uname'] != ""){

		var id= {
			username:req.query.jobid
		}
		jobModel.delete(id,function(status){
			if(status){
				jobModel.getAll(function(results){
					res.render('job/joblist', {users: results});
				});
			}
			else{
				console.log('Erorr');
				res.render('job/create');
			}

		});

	}else{
		res.redirect('/login');
	}
});

module.exports = router;

