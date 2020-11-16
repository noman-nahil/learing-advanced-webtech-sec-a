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
	getAll: function(callback){
		var sql = "select * from product";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	insert: function(product, callback){
		var sql = "insert into product (title,description,image,size,category,type) values('"+product.title+"','"+product.description+"','"+product.image+"','"+product.size+"','"+product.category+"','"+product.type+"')";
		db.execute(sql,function(results){
			callback(results);
		});

	},
	update:function(product, callback){
		console.log(product);
		var sql= "update product set title='"+product.title+"',description='"+product.description+"',size='"+product.size+"',category='"+product.category+"' where id='"+product.id+"'";
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