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
		var model = knex.select().table('tbl_kkm')
		.leftJoin('tbl_folder','tbl_kkm.id','tbl_folder.id_kkm')
		.select('tbl_kkm.id','kkm');
		model.then(function(rows){
			callback(null,rows);
		})
		.catch(function (err){
			callback(err)
		});
	},
	getid: function(id, callback){
		var model = knex.select().table('tbl_kkm')
		.leftJoin('tbl_folder', 'tbl_kkm.id', 'tbl_folder.id_kkm')
		.whereRaw('tbl_kkm.id = ?', [id])
		.select(`tbl_kkm.id`,`kkm`)
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
		var kkm =req.body.kkm;
		var model = knex('tbl_kkm')
		.insert({
			'id': id,
			'kkm':kkm
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
		var kkm = req.body.kkm;
		var model = knex('tbl_kkm')
		.where('id',id)
		.update({
			'kkm': kkm
		})
		.then(function (rows){
			callback(null, rows);
		})
		.catch(function (err){
			callback(err)
		}); 

	},
	delete: function (id, callback){
		var model = knex('tbl_kkm')
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

