const express 	= require('express');
const userModel 	=require.main.require('./models/userModel');
const router 	= express.Router();

router.get('/', (req, res, next)=>{
	
	/*if(req.session.uname != ""){
		res.render('home/index', {name: 'noman', id:'123'});		
	}else{
		res.redirect('/login');
	}*/

	if(req.cookies['uname'] == null){
		res.redirect('/login');;		
	}else{
		next();
	}
});
router.get('/', (req, res)=>{
		res.render('home/index', {name: 'noman', id:'123'});		

});



router.get('/userlist', (req, res)=>{

	/*var connection = mysql.createConnection({
		host     :'127.0.0.1',
		database :'node',
		user     :'root',
		password : ''
		});
		
		connection.connect(function(err) {
			if (err) {
			  console.error('error connecting: ' + err.stack);
			  return;
			}
		   
			console.log('connected as id ' + connection.threadId);
		  });
		  var sql= "select * from userlist ";
		  connection.query(sql, function(error ,results){
			  //console.log(results[0].username);
			  console.log(results.length);
			  if(results.length > 0){
				res.render('home/userlist', {users:results});
				 
			  }
			  else{
				  res.redirect('/home');
			  }
		  });
		  connection.end(function(err){
				console.log('connection end');
		  })*/

		  userModel.getAll(function(results){
			res.render('home/userlist', {users: results});
		});
			
	
})

module.exports = router;
