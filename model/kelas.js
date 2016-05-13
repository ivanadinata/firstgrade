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
		var model = knex.select().table('tbl_kelas')
		.leftJoin('tbl_pivotguru','tbl_kelas.id','tbl_pivotguru.id_kelas')
		.leftJoin('tbl_folder','tbl_kelas.id','tbl_folder.id_kelas')
		.select('tbl_kelas.id','nama');
		model.then(function(rows){
			callback(null,rows);
		})
		.catch(function (err){
			callback(err)
		});
},
getid: function(id, callback){
	var model = knex.select().table('tbl_kelas')
	.leftJoin('tbl_pivotguru','tbl_kelas.id','tbl_pivotguru.id_kelas')
	.leftJoin('tbl_folder','tbl_kelas.id','tbl_folder.id_kelas')
	.whereRaw('tbl_kelas.id = ?', [id])
	.select('tbl_kelas.id','nama')
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
	var nama =req.body.nama;
	var model = knex('tbl_kelas')
	.insert({
		'id': id,
		'nama':nama
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
	var nama= req.body.nama;
	var model = knex('tbl_kelas')
	.where('id',id)
	.update({
		'nama': nama
	})
	.then(function (rows){
		callback(null, rows);
	})
	.catch(function (err){
		callback(err)
	}); 

},
delete: function (id, callback){
	var model = knex('tbl_kelas')
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

