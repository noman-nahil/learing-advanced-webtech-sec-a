const db = require('./db');

module.exports= {
	validate: function(user, callback){
		var sql = "select * from userinfo where username='"+user.username+"' and password='"+user.password+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0]);
			}else{
				callback(false);
			}
		});
	},
	getById: function(id, callback){
		var sql = "select * from userinfo where username='"+id.id+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0]);
			}else{
				callback(false);
			}
		});
	},
	getAll: function(callback){
		//var sql = "select * from userinfo where type = 1";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	insert: function(user, callback){
		var sql = "insert into userinfo (name,username,password,contact,type,gender) values('"+user.name+"','"+user.username+"','"+user.password+"','"+user.contact+"','"+user.type+"','"+user.gender+"')";
		db.execute(sql,function(results){
			callback(results);
		});

	},
	insertProduct: function(element, callback){
		var sql = "insert into phistory (username,id,title,category,type,quantity,totalAmount,status) values('"+element.username+"','"+element.id+"','"+element.title+"','"+element.category+"','"+element.type+"','"+element.quantity+"','"+element.amount+"','1')";
		db.execute(sql,function(results){
			callback(results);
		});

	},
	update:function(user, callback){
		var sql= "update userinfo set name='"+user.name+"',password='"+user.password+"',contact='"+user.contact+"' where username='"+user.id+"'";
		db.execute(sql,function(results){
				callback(true);
		});

	},
	delete: function(id, callback){
		//var sql="delete from userinfo where username='"+id.username+"'";
		db.execute(sql,function(results){
			callback(true);
		});

	}
}