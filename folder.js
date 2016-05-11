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

		connection.query("SELECT * from tbl_folder",function(err, rows, fields){
			if(rows.length != 0){
				data["error"] = 0;
				data["dbnilai"] = rows;
				res.json(data);
				console.log(data)
			}else{
				data["tbl_folder"] = 'No folder Foundddd..';
				res.json(data);
			}
		});
	},

	post :function(req,res){
		var id = req.body.id;
		var nama_folder = req.body.nama_folder;
		var id_kelas = req.body.id_kelas;
		var id_matpel = req.body.id_matpel;
		var id_kkm = req.body.id_kkm;
		var data = {
			"error":1,
			"tbl_folder":""
		};
		if(!!id && !!nama_folder && !! id_kelas && !!id_matpel && !! id_kkm){
			connection.query("INSERT INTO tbl_folder VALUES(?,?,?,?,?)",[id,nama_folder,id_kelas,id_matpel,id_kkm],function(err, rows, fields){
				if(!!err){
					data["tbl_folder"] = "Error Adding data";
					console.log(err)
				}else{
					data["error"] = 0;
					data["tbl_folder"] = "folder Added Successfully";
				}
				res.json(data);
			});
		}else{
			data["tbl_folder"] = "Please provide all required data (i.e : id,nama_folder,id_kelas,id_matpel,id_kkm)";
			res.json(data);
		}
	},

	put : function(req,res){
		var id = req.body.id;
		var nama_folder = req.body.nama_folder;
		var id_kelas = req.body.id_kelas;
		var id_matpel = req.body.id_matpel;
		var id_kkm = req.body.id_kkm;
		var data = {
			"error":1,
			"dbnilai":""
		};
		if(!!id && !!nama_folder && !!id_kelas && !!id_matpel && !! id_kkm){
			connection.query("UPDATE tbl_folder SET nama_folder=?, id_kelas=? ,id_matpel=?, id_kkm=? WHERE id=?",[nama_folder,id_kelas,id_matpel,id_kkm,id],function(err, rows, fields){
				if(!!err){
					data["dbnilai"] = "Error Updating data";
					console.log(err)
				}else{
					data["error"] = 0;
					data["dbnilai"] = "put folder Successfully";
				}
				res.json(data);
			});
		}else{
			data["dbnilai"] = "Please provide all required data (i.e :id,nama_folder,id_kelas,id_matpel,id_kkm)";
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
			connection.query("DELETE FROM tbl_folder WHERE id=?",[id],function(err, rows, fields){
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
