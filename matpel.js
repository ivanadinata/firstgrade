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

		connection.query("SELECT * from tbl_matpel",function(err, rows, fields){
			if(rows.length != 0){
				data["error"] = 0;
				data["dbnilai"] = rows;
				res.json(data);
				console.log(data)
			}else{
				data["tbl_matpel"] = 'No matpel found';
				res.json(data);
			}
		});
	},

	post :function(req,res){
		var id = req.body.id;
		var nama_matpel = req.body.nama_matpel;
		var data = {
			"error":1,
			"tbl_matpel":""
		};
		if(!!id && !!nama_matpel){
			connection.query("INSERT INTO tbl_matpel VALUES(?,?)",[id,nama_matpel],function(err, rows, fields){
				if(!!err){
					data["tbl_matpel"] = "Error Adding data";
					console.log(err)
				}else{
					data["error"] = 0;
					data["tbl_matpel"] = "matpel Added Successfully";
				}
				res.json(data);
			});
		}else{
			data["tbl_matpel"] = "Please provide all required data (i.e : id,nama_matpel)";
			res.json(data);
		}
	},

	put : function(req,res){
		var id = req.body.id;
		var nama_matpel = req.body.nama_matpel;
		var data = {
			"error":1,
			"dbnilai":""
		};
		if(!!id && !!nama_matpel){
			connection.query("UPDATE tbl_matpel SET nama_matpel=? WHERE id=?",[nama_matpel,id],function(err, rows, fields){
				if(!!err){
					data["dbnilai"] = "Error Updating data";
					console.log(err)
				}else{
					data["error"] = 0;
					data["dbnilai"] = "put matpel Successfully";
				}
				res.json(data);
			});
		}else{
			data["dbnilai"] = "Please provide all required data (i.e :id,nama_matpel)";
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
			connection.query("DELETE FROM tbl_matpel WHERE id=?",[id],function(err, rows, fields){
				if(!!err){
					data["dbnilai"] = "Error deleting data";
					console.log(err)
				}else{
					data["error"] = 0;
					data["dbnilai"] = "Delete matpel Successfully";
				}
				res.json(data)
			});
		}else{
			data["dbnilai"] = "Please provide all required data (i.e : id )";
			res.json(data);
		}
	}

};
