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
		var model = knex.select().table('tbl_pivotmatpeluser')
		.select('tbl_pivotmatpeluser.id','id','id_matpel','id_user');
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
		var model = knex.select().table('tbl_pivotmatpeluser')
		.whereRaw('tbl_pivotmatpeluser.id = ?', [id])
		.select(`tbl_pivotmatpeluser.id`,`id`,`id_matpel`,`id_user`);
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
		var id_matpel = req.body.id_matpel;
		var id_user = req.body.id_user;
		id_matpel = id_matpel.split (',')
		var insert = id_matpel.map(function (rows){
		return {
			'id_matpel' : rows,
			'id_user':id_user
		} 
		})
		var model = knex('tbl_pivotmatpeluser')
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
		var id_matpel = req.body.id_matpel;
		var id_user = req.body.id_user;
		var model = knex('tbl_pivotmatpeluser')
		.where('id',id)
		.update({
			'id_matpel':id_matpel,
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
		var model = knex('tbl_pivotmatpeluser')
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

