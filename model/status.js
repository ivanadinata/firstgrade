var mysql = require('mysql');
var knex = require('knex')({
	client : 'mysql',
	connection :{
		host : 'localhost',
		user : 'root',
		password :'',
		database :'dbnilai'
	}
});
module.exports = {
	get : function(callback){
		var model = knex.select().table('tbl_status')
		.select('tbl_status.id','status','id_user');
		console.log(model.toString())
		model.then(function(rows){
			callback(null,rows);
		})
		.catch(function (err){
			callback(err);
			console.log(err);
		});
	},
	getid: function(id, callback){
		var model = knex.select().table('tbl_status')
		.whereRaw('tbl_status.id = ?', [id])
		.select(`tbl_status.id`,`status`,`id_user`);
		console.log(model.toString())
		model.then(function (rows){
			callback(null, rows);
		}, function (err){
			callback(err)
		})
		.catch(function (err){
			callback(err)
		});

	},
	post:function(req,callback){
		var id = req.body.id;
		var status = req.body.status;
		var id_user = req.body.id_user
		var model = knex('tbl_status')
		.insert({
			'id': id,
			'status':status,
			'id_user': id_user
		})
		console.log(model.toString())
		model.then(function (rows){
			callback(null, rows);
		})
		.catch(function (err){
			callback(err)
		})
	},
	put: function(req, callback){
		var id = req.body.id;
		var status = req.body.status;
		var id_user = req.body.id_user
		var model = knex('tbl_status')
		.where('id',id)
		.update({
			'status':status,
			'id_user': id_user
		})
		.then(function (rows){
			callback(null, rows);
		})
		.catch(function (err){
			callback(err)
		}); 

	},
	delete: function (id, callback){
		var model = knex('tbl_status')
		.where('id' ,id)
		.del()
		.then(function (rows){
			callback(null, rows);
		})
		.catch(function (err){
			callback(err)
		}); 

	}

}

