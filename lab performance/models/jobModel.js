const db = require('./db');

module.exports= {
	getById: function(id, callback){
		var sql = "select * from jobinfo where id='"+id.id+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0]);
			}else{
				callback(false);
			}
		});
	},
	getAll: function(callback){
		var sql = "select * from jobinfo";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	insert: function(job, callback){
		var sql = "insert into jobinfo (cname,jobtitle,location,salary) values ('"+job.cname+"','"+job.jobtitle+"','"+job.location+"','"+job.salary+"')";
		db.execute(sql,function(results){
			callback(results);
		});

	},
	update:function(job, callback){
		var sql= "update jobinfo set cname='"+user.cname+"',jobtitle='"+user.jobtitle+"',location='"+user.location+"',salary='"+user.salary+"' where id='"+job.id+"'";
		db.execute(sql,function(results){
				callback(true);
		});

	},
	delete: function(id, callback){
		var sql="delete from jobinfo where id='"+id.id+"'";
		db.execute(sql,function(results){
			callback(true);
		});

	}
}