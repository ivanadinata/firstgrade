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

		connection.query("SELECT * from tbl_tlp",function(err, rows, fields){
			if(rows.length != 0){
				data["error"] = 0;
				data["dbnilai"] = rows;
				res.json(data);
				console.log(data)
			}else{
				data["tbl_tlp"] = 'No TLP Found..';
				res.json(data);
			}
		});
	},

	post :function(req,res){
		var id = req.body.id;
		var id_user = req.body.id_user;
		var no_tlp = req.body.no_tlp;
		var data = {
			"error":1,
			"tbl_status":""
		};
		if(!!id && !!id_user && !!no_tlp){
			connection.query("INSERT INTO tbl_tlp VALUES(?,?,?)",[id,id_user,no_tlp],function(err, rows, fields){
				if(!!err){
					data["tbl_tlp"] = "Error Adding data";
					console.log(err)
				}else{
					data["error"] = 0;
					data["tbl_tlp"] = "no_tlp Added Successfully";
				}
				res.json(data);
			});
		}else{
			data["tbl_tlp"] = "Please provide all required data (i.e : id,id_user, no_tlp)";
			res.json(data);
		}
	},

	put : function(req,res){
		var id = req.body.id;
		var id_user = req.body.id_user;
		var no_tlp = req.body.no_tlp;
		var data = {
			"error":1,
			"dbnilai":""
		};
		if(!!id && !!id_user && !!no_tlp){
			connection.query("UPDATE tbl_tlp SET no_tlp=?, id_user=? WHERE id=?",[no_tlp,id_user,id],function(err, rows, fields){
				if(!!err){
					data["dbnilai"] = "Error Updating data";
					console.log(err)
				}else{
					data["error"] = 0;
					data["dbnilai"] = "put no_tlp Successfully";
				}
				res.json(data);
			});
		}else{
			data["dbnilai"] = "Please provide all required data (i.e :id,no_tlp,id_user)";
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
			connection.query("DELETE FROM tbl_tlp WHERE id=?",[id],function(err, rows, fields){
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
