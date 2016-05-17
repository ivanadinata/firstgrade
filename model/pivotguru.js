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
		var model = knex.select().table('tbl_pivotguru')
		.select('tbl_pivotguru.id','id','id_user','id_kelas');
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
		var model = knex.select().table('tbl_pivotguru')
		.whereRaw('tbl_pivotguru.id = ?', [id])
		.select(`tbl_pivotguru.id`,`id`,`id_user`,`id_kelas`);
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
		var id_user = req.body.id_user;
		var id_kelas = req.body.id_kelas;
		var model = knex('tbl_pivotguru')
		.insert({
			'id': id,
			'id_user':id_user,
			'id_kelas': id_kelas
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
		var id_user = req.body.id_user;
		var id_kelas = req.body.id_kelas;
		var model = knex('tbl_pivotguru')
		.where('id',id)
		.update({
			'id_user':id_user,
			'id_kelas': id_kelas
		})
		.then(function (rows){
			callback(null, rows);
		})
		.catch(function (err){
			callback(err)
		}); 

	},
	delete: function (id, callback){
		var model = knex('tbl_pivotguru')
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

