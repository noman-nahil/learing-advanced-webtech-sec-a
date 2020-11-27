const db = require('./db');

module.exports= {
	validate: function(user, callback){
		var sql = "select * from product where username='"+user.username+"' and password='"+user.password+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0]);
			}else{
				callback(false);
			}
		});
	},
	getById: function(id, callback){
		var sql = "select * from product where id='"+id.id+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0]);
			}else{
				callback(false);
			}
		});
	},
	getByIdUser: function(id, callback){
		var sql = "select * from product where id='"+id+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0]);
			}else{
				callback(false);
			}
		});
	},
	getAll: function(callback){
		var sql = "select * from product";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getList: function(callback){
		var sql = "select * from phistory where status='1' ";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getHistory: function(callback){
		var sql = "select * from phistory where status='0' ";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	order: function(id,callback){
		var sql = "select * from phistory where serial='"+id+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0]);
			}else{
				callback(false);
			}
		});
	},

	insert: function(product, callback){
		var sql = "insert into product (title,description,image,size,category,type,price) values('"+product.title+"','"+product.description+"','"+product.image+"','"+product.size+"','"+product.category+"','"+product.type+"','"+product.price+"')";
		db.execute(sql,function(results){
			callback(results);
		});

	},
	update:function(product, callback){
		console.log(product);
		var sql= "update product set title='"+product.title+"',description='"+product.description+"',size='"+product.size+"',category='"+product.category+"' ,type='"+product.type+"'where id='"+product.id+"'";
		db.execute(sql,function(results){
				callback(true);
		});

	},
	orderUp:function(id, callback){
		var sql= "update phistory set status='0' where serial='"+id+"'";
		db.execute(sql,function(results){
				callback(true);
		});

	},
	delete: function(id, callback){
		var sql="delete from product where id='"+id.id+"'";
		db.execute(sql,function(results){
			callback(true);
		});

	}
	
}