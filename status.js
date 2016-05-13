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

		connection.query("SELECT * from tbl_status",function(err, rows, fields){
			if(rows.length != 0){
				data["error"] = 0;
				data["dbnilai"] = rows;
				res.json(data);
				console.log(data)
			}else{
				data["tbl_status"] = 'No status Found..';
				res.json(data);
			}
		});
	},

	post :function(req,res){
		var id = req.body.id;
		var status = req.body.status;
		var id_user = req.body.id_user;
		var data = {
			"error":1,
			"tbl_status":""
		};
		if(!!id && !!status && !!id_user){
			connection.query("INSERT INTO tbl_status VALUES(?,?,?)",[id,status,id_user],function(err, rows, fields){
				if(!!err){
					data["tbl_status"] = "Error Adding data";
					console.log(err)
				}else{
					data["error"] = 0;
					data["tbl_status"] = "status Added Successfully";
				}
				res.json(data);
			});
		}else{
			data["tbl_status"] = "Please provide all required data (i.e : id, status, id_user)";
			res.json(data);
		}
	},

	put : function(req,res){
		var id = req.body.id;
		var status = req.body.status;
		var id_user = req.body.id_user;
		var data = {
			"error":1,
			"dbnilai":""
		};
		if(!!id && !!status && !!id_user){
			connection.query("UPDATE tbl_status SET status=?, id_user=? WHERE id=?",[status,id_user,id],function(err, rows, fields){
				if(!!err){
					data["dbnilai"] = "Error Updating data";
					console.log(err)
				}else{
					data["error"] = 0;
					data["dbnilai"] = "put status Successfully";
				}
				res.json(data);
			});
		}else{
			data["dbnilai"] = "Please provide all required data (i.e :id,status,id_user)";
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
			connection.query("DELETE FROM tbl_status WHERE id=?",[id],function(err, rows, fields){
				if(!!err){
					data["dbnilai"] = "Error deleting data";
					console.log(err)
				}else{
					data["error"] = 0;
					data["dbnilai"] = "Delete status Successfully";
				}
				res.json(data)
			});
		}else{
			data["dbnilai"] = "Please provide all required data (i.e : id )";
			res.json(data);
		}
	}

};
