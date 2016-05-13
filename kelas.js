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

		connection.query("SELECT * from tbl_kelas",function(err, rows, fields){
			if(rows.length != 0){
				data["error"] = 0;
				data["dbnilai"] = rows;
				res.json(data);
				console.log(data)
			}else{
				data["tbl_kelas"] = 'No kelas Found..';
				res.json(data);
			}
		});
	},

	post :function(req,res){
		var id = req.body.id;
		var nama = req.body.nama;
		var data = {
			"error":1,
			"tbl_kelas":""
		};
		if(!!id && !!nama ){
			connection.query("INSERT INTO tbl_kelas VALUES(?,?)",[id,nama],function(err, rows, fields){
				if(!!err){
					data["tbl_kelas"] = "Error Adding data";
					console.log(err)
				}else{
					data["error"] = 0;
					data["tbl_kelas"] = "kelas Added Successfully";
				}
				res.json(data);
			});
		}else{
			data["tbl_kelas"] = "Please provide all required data (i.e : id, nama)";
			res.json(data);
		}
	},

	put : function(req,res){
		var id = req.body.id;
		var nama = req.body.nama;
		var data = {
			"error":1,
			"dbnilai":""
		};
		if(!!id && !!nama ){
			connection.query("UPDATE tbl_kelas SET nama=?WHERE id=?",[nama,id],function(err, rows, fields){
				if(!!err){
					data["dbnilai"] = "Error Updating data";
					console.log(err)
				}else{
					data["error"] = 0;
					data["dbnilai"] = "put kelas Successfully";
				}
				res.json(data);

			});
		}else{
			data["dbnilai"] = "Please provide all required data (i.e :id,nama)";
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
			connection.query("DELETE FROM tbl_kelas WHERE id=?",[id],function(err, rows, fields){
				if(!!err){
					data["dbnilai"] = "Error deleting data";
					console.log(err)
				}else{
					data["error"] = 0;
					data["dbnilai"] = "Delete kelas Successfully";
				}
				res.json(data)
			});
		}else{
			data["dbnilai"] = "Please provide all required data (i.e : id )";
			res.json(data);
		}
	}

};
