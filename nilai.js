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

		connection.query("SELECT * from tbl_nilai",function(err, rows, fields){
			if(rows.length != 0){
				data["error"] = 0;
				data["dbnilai"] = rows;
				res.json(data);
				console.log(data)
			}else{
				data["tbl_user"] = 'No userrr Found..';
				res.json(data);
			}
		});
	},

	post :function(req,res){
		var id = req.body.id;
		var nilai = req.body.nama;
		var id_user = req.body.password;
		var id_folder = req.body.id_type;
		var data = {
			"error":1,
			"tbl_nilai":""
		};
		if(!!id && !!nilai && !!id_user && !!id_folder){
			connection.query("INSERT INTO tbl_user VALUES(?,?,?,?)",[id,nilai,id_user,id_folder],function(err, rows, fields){
				if(!!err){
					data["tbl_nilai"] = "Error Adding data";
					console.log(err)
				}else{
					data["error"] = 0;
					data["tbl_nilai"] = "user Added Successfully";
				}
				res.json(data);
			});
		}else{
			data["tbl_nilai"] = "Please provide all required data (i.e :id,nilai,id_user,id_folder)";
			res.json(data);
		}
	},

	put : function(req,res){
		var id = req.body.id;
		var nilai = req.body.nama;
		var id_user = req.body.password;
		var id_folder = req.body.id_type;
		var data = {
			"error":1,
			"dbnilai":""
		};
		if(!!id && !!nilai && !!id_user && !!id_folder){
			connection.query("UPDATE tbl_user SET nilai=?, id_user=? ,id_folder=? WHERE id=?",[nilai,id_user,id_folder,id],function(err, rows, fields){
				if(!!err){
					data["dbnilai"] = "Error Updating data";
					console.log(err)
				}else{
					data["error"] = 0;
					data["dbnilai"] = "put  nilai Successfully";
				}
				res.json(data);
			});
		}else{
			data["dbnilai"] = "Please provide all required data (i.e :id,nilai,id_user,id_folder)";
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
			connection.query("DELETE FROM tbl_nilai WHERE id=?",[id],function(err, rows, fields){
				if(!!err){
					data["dbnilai"] = "Error deleting data";
					console.log(err)
				}else{
					data["error"] = 0;
					data["dbnilai"] = "Delete user Successfully";
				}
				res.json(data)
			});
		}else{
			data["dbnilai"] = "Please provide all required data (i.e : id )";
			res.json(data);
		}
	}

};
