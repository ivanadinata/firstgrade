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
		var model = knex.select().table('tbl_type')
		.leftJoin('tbl_user','tbl_type.id','tbl_user.id_type')
		.select('tbl_type.id','type_user');
		model.then(function(rows){
			callback(null,rows);
		})
		.catch(function (err){
			callback(err)
		});
	},
	getid: function(id, callback){
		var model = knex.select().table('tbl_type')
		.leftJoin('tbl_user', 'tbl_type.id', 'tbl_user.id_type')
		.whereRaw('tbl_type.id = ?', [id])
		.select(`tbl_type.id`,`type_user`)
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
		var type_user =req.body.type_user;
		var model = knex('tbl_type')
		.insert({
			'id': id,
			'type_user':type_user
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
		var id = req.params.id
		var type_user = req.body.type_user;
		var model = knex('tbl_type')
		.where('id',id)
		.update({
			'type_user': type_user
		})
		.then(function (rows){
			callback(null, rows);
		})
		.catch(function (err){
			callback(err)
		}); 

	},
	delete: function (id, callback){
		var model = knex('tbl_type')
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

