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
		var model = knex.select().table('tbl_nilai')
		.select('tbl_nilai.id','nilai','id_user','id_folder');
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
		var model = knex.select().table('tbl_nilai')
		.whereRaw('tbl_nilai.id = ?', [id])
		.select(`tbl_nilai.id`,`nilai`,`id_user`,`id_folder`);
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
		var nilai = req.body.nilai;
		var id_user = req.body.id_user;
		var id_folder = req.body.id_folder;
		var model = knex('tbl_nilai')
		.insert({
			'id': id,
			'nilai': nilai,
			'id_user':id_user,
			'id_folder': id_folder
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
		var nilai = req.body.nilai;
		var id_user = req.body.id_user;
		var id_folder = req.body.id_folder;
		var model = knex('tbl_nilai')
		.where('id',id)
		.update({
			'nilai': nilai,
			'id_user':id_user,
			'id_folder': id_folder
		})
		.then(function (rows){
			callback(null, rows);
		})
		.catch(function (err){
			callback(err)
		}); 

	},
	delete: function (id, callback){
		var model = knex('tbl_nilai')
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

