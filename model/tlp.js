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
		var model = knex.select().table('tbl_tlp')
		.select('tbl_tlp.id','id_user','no_tlp');
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
		var model = knex.select().table('tbl_tlp')
		.whereRaw('tbl_tlp.id = ?', [id])
		.select(`tbl_tlp.id`,`id_user`,`no_tlp`);
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
		var no_tlp = req.body.no_tlp
		var model = knex('tbl_tlp')
		.insert({
			'id': id,
			'id_user':id_user,
			'no_tlp': no_tlp
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
		var no_tlp = req.body.no_tlp
		var model = knex('tbl_tlp')
		.where('id',id)
		.update({
			'id_user':id_user,
			'no_tlp': no_tlp
		})
		.then(function (rows){
			callback(null, rows);
		})
		.catch(function (err){
			callback(err)
		}); 

	},
	delete: function (id, callback){
		var model = knex('tbl_tlp')
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

