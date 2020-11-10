const db = require('./db');

module.exports= {
	validate: function(user, callback){
		var sql = "select * from employeeinfo where username='"+user.username+"' and password='"+user.password+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getById: function(id, callback){

	},
	getAll: function(callback){
		var sql = "select * from employeeinfo";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	insertEmployee: function(user, callback){
		var sql = "insert into employee (ename,cname,contact,username,password,type) values ('"+user.name+"','"+user.cname+"','"+user.contact+"','"+user.username+"','"+user.password+"','"+user.type+"')";
		db.execute(sql,function(results){
			callback(results);
		});

	},
	update:function(user, callback){

	},
	delete: function(id, callback){

	}
}