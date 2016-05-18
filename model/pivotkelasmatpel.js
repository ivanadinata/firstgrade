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
		var model = knex.select().table('tbl_pivotkelasmatpel')
		.select('tbl_pivotkelasmatpel.id','id_kelas','id_matpel');
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
		var model = knex.select().table('tbl_pivotkelasmatpel')
		.whereRaw('tbl_pivotkelasmatpel.id = ?', [id])
		.select(`tbl_pivotkelasmatpel.id`,`id_kelas`,`id_matpel`);
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
		var id_kelas = req.body.id_kelas;
		var id_matpel = req.body.id_matpel
		id_matpel = id_matpel.split(',')
		
		var insert = id_matpel.map(function (rows){
		return {
			'id_kelas' : id_kelas,
			'id_matpel':rows
		} 
		})
		var model = knex('tbl_pivotkelasmatpel')
		.insert(insert)
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
		var id_kelas = req.body.id_kelas;
		var id_matpel = req.body.id_matpel
		var model = knex('tbl_pivotkelasmatpel')
		.where('id',id)
		.update({
			'id_kelas':id_kelas,
			'id_matpel': id_matpel
		})
		.then(function (rows){
			callback(null, rows);
		})
		.catch(function (err){
			callback(err)
		}); 

	},
	delete: function (id, callback){
		var model = knex('tbl_pivotkelasmatpel')
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

