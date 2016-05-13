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

		connection.query("SELECT * from tbl_kkm",function(err, rows, fields){
			if(rows.length != 0){
				data["error"] = 0;
				data["dbnilai"] = rows;
				res.json(data);
				console.log(data)
			}else{
				data["tbl_kkm"] = 'kkm Found..';
				res.json(data);
			}
		});
	},

	post :function(req,res){
		var id = req.body.id;
		var kkm = req.body.kkm;
		var data = {
			"error":1,
			"tbl_kkm":""
		};
		if(!!id && !!kkm ){
			connection.query("INSERT INTO tbl_kkm VALUES(?,?)",[id,kkm],function(err, rows, fields){
				if(!!err){
					data["tbl_kkm"] = "Error Adding data";
					console.log(err)
				}else{
					data["error"] = 0;
					data["tbl_kkm"] = "kkm Added Successfully";
				}
				res.json(data);
			});
		}else{
			data["tbl_kkm"] = "Please provide all required data (i.e : id, kkm)";
			res.json(data);
		}
	},

	put : function(req,res){
		var id = req.body.id;
		var kkm = req.body.kkm;
		var data = {
			"error":1,
			"dbnilai":""
		};
		if(!!id && !!kkm ){
			connection.query("UPDATE tbl_kkm SET kkm=? WHERE id=?",[kkm,id],function(err, rows, fields){
				if(!!err){
					data["dbnilai"] = "Error Updating data";
					console.log(err)
				}else{
					data["error"] = 0;
					data["dbnilai"] = "put kkm Successfully";
				}
				res.json(data);

			});
		}else{
			data["dbnilai"] = "Please provide all required data (i.e :id,kkm)";
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
			connection.query("DELETE FROM tbl_kkm WHERE id=?",[id],function(err, rows, fields){
				if(!!err){
					data["dbnilai"] = "Error deleting data";
					console.log(err)
				}else{
					data["error"] = 0;
					data["dbnilai"] = "Delete kkm Successfully";
				}
				res.json(data)
			});
		}else{
			data["dbnilai"] = "Please provide all required data (i.e : id )";
			res.json(data);
		}
	}

};
