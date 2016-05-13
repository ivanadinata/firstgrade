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
		var model = knex.select().table('tbl_matpel')
		.leftJoin('tbl_folder','tbl_matpel.id','tbl_folder.id_matpel')
		.leftJoin('tbl_pivotkelasmatpel','tbl_matpel.id','tbl_pivotkelasmatpel.id_matpel')
		.leftJoin('tbl_pivotmatpeluser','tbl_matpel.id','tbl_pivotmatpeluser.id_matpel')
		.select('tbl_matpel.id','nama_matpel');
		model.then(function(rows){
			callback(null,rows);
		})
		.catch(function (err){
			callback(err)
		});
	},
	getid: function(id, callback){
		var model = knex.select().table('tbl_matpel')
		.leftJoin('tbl_folder','tbl_matpel.id','tbl_folder.id_matpel')
		.leftJoin('tbl_pivotkelasmatpel','tbl_matpel.id','tbl_pivotkelasmatpel.id_matpel')
		.leftJoin('tbl_pivotmatpeluser','tbl_matpel.id','tbl_pivotmatpeluser.id_matpel')
		.whereRaw('tbl_matpel.id = ?', [id])
		.select(`tbl_matpel.id`,`nama_matpel`)
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
		var nama_matpel =req.body.nama_matpel;
		var model = knex('tbl_matpel')
		.insert({
			'id': id,
			'nama_matpel':nama_matpel
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
		var nama_matpel = req.body.nama_matpel;
		var model = knex('tbl_matpel')
		.where('id',id)
		.update({
			'nama_matpel': nama_matpel
		})
		.then(function (rows){
			callback(null, rows);
		})
		.catch(function (err){
			callback(err)
		}); 

	},
	delete: function (id, callback){
		var model = knex('tbl_matpel')
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

