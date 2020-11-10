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
	

	/*	
		if(req.body.username != "" || req.body.email !="" || req.body.password !="")//|| req.body.email=req.body.password)
		{
			
			var student = [req.body.username,req.body.email,req.body.password];
			req.session.studentlist.push(student);//.concat(this.student);
			//console.log(req.session.studentlist);
			//res.send('Username Required');
			res.redirect("/home/userlist");
		}
		else{
			res.send('Failed');
		}
		*/
		var user= {
			ename: req.body.name,
			cname: req.body.cname,
			contact: req.body.contact,
			username: req.body.username,
			password: req.body.password,
			type:req.body.type
	
		}
		userModel.insertEmployee(user, function(status){
			if(status){
				
				res.redirect('/home');
			}else{
				res.redirect('/login');
			}
		});

	}else{
		res.redirect('/login');
	}
});

router.get('/edit', (req, res)=>{
	
	if(req.cookies['uname'] != ""){
		var i= req.query.stdno;

		//console.log(req.query.noOfstudent);
		//console.log(req.session.studentlist[i]);
		/*res.render('user/edit',{name:req.session.studentlist[i][0],
								password:req.session.studentlist[i][2],
								email:req.session.studentlist[i][1]});*/
		res.render('user/edit');
	}else{
		res.redirect('/login');
	}
});

router.post('/edit', (req, res)=>{
	
	if(req.cookies['uname'] != ""){
		var i= req.query.stdno;
		req.session.studentlist[i]=[req.body.username,req.body.email,req.body.password];
		//alert('update successfully')
		res.redirect('/home/userlist');
		//res.send('updated');
	}else{
		res.redirect('/login');
	}
});

router.get('/delete', (req, res)=>{
	
	if(req.cookies['uname'] != ""){
		var i = req.query.stdno;
		res.render('user/delete',{name:req.session.studentlist[i][0],
								password:req.session.studentlist[i][2],
								email:req.session.studentlist[i][1]});
	}else{
		res.redirect('/login');
	}
});

router.post('/delete', (req, res)=>{
	
	if(req.cookies['uname'] != ""){
		var i = req.query.stdno;
		req.session.studentlist.splice(i,1);
		res.redirect('/home/userlist');
		//res.send('done!');
	}else{
		res.redirect('/login');
	}
});

module.exports = router;

