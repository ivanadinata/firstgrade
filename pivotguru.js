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

		connection.query("SELECT * from tbl_pivotguru",function(err, rows, fields){
			if(rows.length != 0){
				data["error"] = 0;
				data["dbnilai"] = rows;
				res.json(data);
				console.log(data)
			}else{
				data["tbl_pivotguru"] = 'No ppivotguru Found..';
				res.json(data);
			}
		});
	},

	post :function(req,res){
		var id = req.body.id;
		var id_user = req.body.id_user;
		var id_kelas = req.body.id_kelas;
		var data = {
			"error":1,
			"tbl_pivotguru":""
		};
		if(!!id && !!id_user && !!id_kelas){
			connection.query("INSERT INTO tbl_pivotguru VALUES(?,?,?)",[id,id_user,id_kelas],function(err, rows, fields){
				if(!!err){
					data["tbl_pivotguru"] = "Error Adding data";
					console.log(err)
				}else{
					data["error"] = 0;
					data["tbl_pivotguru"] = "pivotguru Added Successfully";
				}
				res.json(data);
			});
		}else{
			data["tbl_pivotguru"] = "Please provide all required data (i.e : id, id_user, id_kelas)";
			res.json(data);
		}
	},

	put : function(req,res){
		var id = req.body.id;
		var id_user = req.body.id_user;
		var id_kelas = req.body.id_kelas;
		var data = {
			"error":1,
			"dbnilai":""
		};
		if(!!id && !!id_user && !!id_kelas){
			connection.query("UPDATE tbl_pivotguru SET id_kelas=?, id_user=? WHERE id=?",[id_kelas,id_user,id],function(err, rows, fields){
				if(!!err){
					data["dbnilai"] = "Error Updating data";
					console.log(err)
				}else{
					data["error"] = 0;
					data["dbnilai"] = "put pivotguru Successfully";
				}
				res.json(data);
			});
		}else{
			data["dbnilai"] = "Please provide all required data (i.e :id,id_kelas,id_user)";
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
			connection.query("DELETE FROM tbl_pivotguru WHERE id=?",[id],function(err, rows, fields){
				if(!!err){
					data["dbnilai"] = "Error deleting data";
					console.log(err)
				}else{
					data["error"] = 0;
					data["dbnilai"] = "Delete pivotguru Successfully";
				}
				res.json(data)
			});
		}else{
			data["dbnilai"] = "Please provide all required data (i.e : id )";
			res.json(data);
		}
	}

};
