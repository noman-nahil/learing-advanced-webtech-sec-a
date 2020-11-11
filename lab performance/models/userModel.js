const db = require('./db');

module.exports= {
	validate: function(user, callback){
		var sql = "select * from employeeinfo where username='"+user.username+"' and password='"+user.password+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0]);
			}else{
				callback(false);
			}
		});
	},
	getById: function(id, callback){
		var sql = "select * from employeeinfo where username='"+id.username+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0]);
			}else{
				callback(false);
			}
		});
	},
	getAll: function(callback){
		var sql = "select * from employeeinfo where type = 1";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	insert: function(user, callback){
		var sql = "insert into employeeinfo (ename,cname,contact,username,password,type) values ('"+user.ename+"','"+user.cname+"','"+user.contact+"','"+user.username+"','"+user.password+"','"+user.type+"')";
		db.execute(sql,function(results){
			callback(results);
		});

	},
	update:function(user, callback){
		var sql= "update employeeinfo set ename='"+user.ename+"',cname='"+user.cname+"',contact='"+user.contact+"',password='"+user.password+"' where username='"+user.username+"'";
		db.execute(sql,function(results){
				callback(true);
		});

	},
	delete: function(id, callback){
		var sql="delete from employeeinfo where username='"+id.username+"'";
		db.execute(sql,function(results){
			callback(true);
		});

	}
}