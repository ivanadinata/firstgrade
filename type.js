var mysql = require('mysql');
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'dbnilai',
});

module.exports ={	
	get : function(req,res){
		var data = {
			"error":1,
			"dbnilai":""
		};

		connection.query("SELECT * from tbl_type",function(err, rows, fields){
			if(rows.length != 0){
				data["error"] = 0;
				data["dbnilai"] = rows;
				res.json(data);
				console.log(data)
			}else{
				data["tbl_type"] = 'No type Found..';
				res.json(data);
			}
		});
	},

	post :function(req,res){
		var id = req.body.id;
		var type_user = req.body.type_user;
		var data = {
			"error":1,
			"tbl_user":""
		};
		if(!!id && !!type_user){
			connection.query("INSERT INTO tbl_type VALUES(?,?)",[id,type_user],function(err, rows, fields){
				if(!!err){
					data["tbl_type"] = "Error Adding data";
					console.log(err)
				}else{
					data["error"] = 0;
					data["tbl_type"] = "type Added Successfully";
				}
				res.json(data);
			});
		}else{
			data["tbl_type"] = "Please provide all required data (i.e : id,type_user)";
			res.json(data);
		}
	},

	put : function(req,res){
		var id = req.body.id;
		var type_user = req.body.type_user;
		var data = {
			"error":1,
			"dbnilai":""
		};
		if(!!id && !!type_user){
			connection.query("UPDATE tbl_type SET type_user=? WHERE id=?",[type_user,id],function(err, rows, fields){
				if(!!err){
					data["dbnilai"] = "Error Updating data";
					console.log(err)
				}else{
					data["error"] = 0;
					data["dbnilai"] = "put type Successfully";
				}
				res.json(data);
			});
		}else{
			data["dbnilai"] = "Please provide all required data (i.e :id,type_user)";
			res.json(data);
		}
	},

	delete : function(req,res){
		var id = req.body.id;
		var data = {
			"error":1,
			"dbnilai":""
		};
		if(!!id){
			connection.query("DELETE FROM tbl_type WHERE id=?",[id],function(err, rows, fields){
				if(!!err){
					data["dbnilai"] = "Error deleting data";
					console.log(err)
				}else{
					data["error"] = 0;
					data["dbnilai"] = "Delete type Successfully";
				}
				res.json(data)
			});
		}else{
			data["dbnilai"] = "Please provide all required data (i.e : id )";
			res.json(data);
		}
	}

};
