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
		var model = knex.select().table('tbl_folder')
		.leftJoin('tbl_nilai','tbl_folder.id','tbl_nilai.id_folder')
		.select('tbl_folder.id','nama_folder','id_kelas','id_matpel','id_kkm');
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
		var model = knex.select().table('tbl_folder')
		.leftJoin('tbl_nilai','tbl_folder.id','tbl_nilai.id_folder')
		.whereRaw('tbl_folder.id = ?', [id])
		.select(`tbl_folder.id`,`nama_folder`,`id_kelas`,`id_matpel`,`id_kkm`);
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
		var nama_folder =req.body.nama_folder;
		var id_kelas = req.body.id_kelas;
		var id_matpel = req.body.id_matpel
		var id_kkm = req.body.id_kkm;
		var model = knex('tbl_folder')
		.insert({
			'id': id,
			'nama_folder':nama_folder,
			'id_kelas':id_kelas,
			'id_matpel': id_matpel,
			'id_kkm':id_kkm
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
		var nama_folder =req.body.nama_folder;
		var id_kelas = req.body.id_kelas;
		var id_matpel = req.body.id_matpel
		var id_kkm = req.body.id_kkm;
		var model = knex('tbl_folder')
		.where('id',id)
		.update({
			'nama_folder':nama_folder,
			'id_kelas':id_kelas,
			'id_matpel': id_matpel,
			'id_kkm':id_kkm
		})
		.then(function (rows){
			callback(null, rows);
		})
		.catch(function (err){
			callback(err)
		}); 

	},
	delete: function (id, callback){
		var model = knex('tbl_folder')
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

