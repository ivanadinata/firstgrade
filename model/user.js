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
		var model = knex.select().table('tbl_user')
		.leftJoin('tbl_nilai','tbl_user.id','tbl_nilai.id_user')
		.leftJoin('tbl_tlp','tbl_user.id','tbl_tlp.id_user')
		.leftJoin('tbl_status','tbl_user.id','tbl_status.id_user')
		.leftJoin('tbl_pivotmatpeluser','tbl_user.id','tbl_pivotmatpeluser.id_user')
		.leftJoin('tbl_pivotguru','tbl_user.id','tbl_pivotguru.id_user')
		.select('tbl_user.id','nama','password','id_type');
		model.then(function(rows){
			callback(null,rows);
		})
		.catch(function (err){
			callback(err)
		});
},
getid: function(id, callback){
	var model = knex.select().table('tbl_user')
		.leftJoin('tbl_nilai','tbl_user.id','tbl_nilai.id_user')
		.leftJoin('tbl_tlp','tbl_user.id','tbl_tlp.id_user')
		.leftJoin('tbl_status','tbl_user.id','tbl_status.id_user')
		.leftJoin('tbl_pivotmatpeluser','tbl_user.id','tbl_pivotmatpeluser.id_user')
		.leftJoin('tbl_pivotguru','tbl_user.id','tbl_pivotguru.id_user')
		.whereRaw('tbl_user.id = ?', [id])
		.select('tbl_user.id','nama','password','id_type');
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
	var password =req.body.password;
	var id_type =req.body.id_type;
	var model = knex('tbl_user')
	.insert({
		'id': id,
		'nama':nama,
		'password':password,
		'id_type':id_type
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
	var nama =req.body.nama;
	var password =req.body.password;
	var id_type =req.body.id_type;
	var model = knex('tbl_user')
	.where('id',id)
	.update({
		'nama': nama,
		'password':password,
		'id_type':id_type
	})
	.then(function (rows){
		callback(null, rows);
	})
	.catch(function (err){
		callback(err)
	}); 

},
delete: function (id, callback){
	var model = knex('tbl_user')
	.where('id' ,id)
	.del()
	.then(function (rows){
		callback(null, rows);
	})
	.catch(function (err){
		callback(err)
		console.log(err)
	}); 

}

}

