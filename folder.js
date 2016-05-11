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

		connection.query("SELECT * from tbl_user",function(err, rows, fields){
			if(rows.length != 0){
				data["error"] = 0;
				data["dbnilai"] = rows;
				res.json(data);
				console.log(data)
			}else{
				data["tbl_user"] = 'No user Foundddd..';
				res.json(data);
			}
		});
	},

	post :function(req,res){
		var id = req.body.id;
		var nama = req.body.nama;
		var password = req.body.password;
		var id_type = req.body.id_type;
		var data = {
			"error":1,
			"tbl_user":""
		};
		if(!!id && !!nama && !!password && !!id_type){
			connection.query("INSERT INTO tbl_user VALUES(?,?,?,?)",[id,nama,password,id_type],function(err, rows, fields){
				if(!!err){
					data["tbl_user"] = "Error Adding data";
					console.log(err)
				}else{
					data["error"] = 0;
					data["tbl_user"] = "user Added Successfully";
				}
				res.json(data);
			});
		}else{
			data["tbl_user"] = "Please provide all required data (i.e : id, nama, password , id_type)";
			res.json(data);
		}
	},

	put : function(req,res){
		var id = req.body.id;
		var nama = req.body.nama;
		var password = req.body.password;
		var id_type = req.body.id_type;
		var data = {
			"error":1,
			"dbnilai":""
		};
		if(!!id && !!nama && !!password && !!id_type){
			connection.query("UPDATE tbl_user SET nama=?, password=? ,id_type=? WHERE id=?",[nama,password,id_type,id],function(err, rows, fields){
				if(!!err){
					data["dbnilai"] = "Error Updating data";
					console.log(err)
				}else{
					data["error"] = 0;
					data["dbnilai"] = "put user Successfully";
				}
				res.json(data);
			});
		}else{
			data["dbnilai"] = "Please provide all required data (i.e :id,nama,password,id_type)";
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
			connection.query("DELETE FROM tbl_user WHERE id=?",[id],function(err, rows, fields){
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
