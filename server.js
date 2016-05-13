var app   = require('express')();
var http = require('http').Server(app);
var mysql = require('mysql');
var bodyParser = require("body-parser");
var connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : '',
		database : 'dbnilai',
	});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var usercontroller = require('./user');
var typecontroller = require('./type');
var kelascontroller = require('./kelas');
var statuscontroller = require('./status');
var kkmcontroller = require('./kkm');
var tlpcontroller = require('./tlp');
//<<<<<<< HEAD
//<<<<<<< HEAD
var foldercontroller = require('./folder');
//=======
var pivotgurucontroller = require('./pivotguru');

//>>>>>>> ebe9c5a6bfe5ad34b2191fd8eeb5e59e075dfae0
//=======
var matpelcontroller =require('./matpel');
//>>>>>>> f429cffa04395cedd56210215bf17a8429928187

var nilaicontroller = require('./nilai');

var typecontrollers = require('./controller/typecontroller')
var kelascontrollers = require('./controller/kelascontroller')

	
	//tbl_user
	app.get('/tbl_user',usercontroller.get)
	app.post('/tbl_user',usercontroller.post)
	app.put('/tbl_user/:id',usercontroller.put)
	app.delete('/tbl_user/:id',usercontroller.delete)

	//tbl_type
	app.get('/tbl_type',typecontroller.get)
	app.post('/tbl_type',typecontroller.post)
	app.put('/tbl_type/:id',typecontroller.put)
	app.delete('/tbl_type/:id',typecontroller.delete)

	//tbl_kelas
	app.get('/tbl_kelas',kelascontroller.get)
	app.post('/tbl_kelas',kelascontroller.post)
	app.put('/tbl_kelas/:id',kelascontroller.put)
	app.delete('/tbl_kelas/:id',kelascontroller.delete)

	//tbl_status
	app.get('/tbl_status',statuscontroller.get)
	app.post('/tbl_status',statuscontroller.post)
	app.put('/tbl_status/:id',statuscontroller.put)
	app.delete('/tbl_status/:id',statuscontroller.delete)

	//tbl_kkm
	app.get('/tbl_kkm',kkmcontroller.get)
	app.post('/tbl_kkm',kkmcontroller.post)
	app.put('/tbl_kkm/:id',kkmcontroller.put)
	app.delete('/tbl_kkm/:id',kkmcontroller.delete)

	//tbl_tlp
	app.get('/tbl_tlp',tlpcontroller.get)
	app.post('/tbl_tlp',tlpcontroller.post)
	app.put('/tbl_tlp/:id',tlpcontroller.put)
	app.delete('/tbl_tlp/:id',tlpcontroller.delete)

//<<<<<<< HEAD
//<<<<<<< HEAD
	//tbl_folder
	app.get('/tbl_folder',foldercontroller.get)
	app.post('/tbl_folder',foldercontroller.post)
	app.put('/tbl_folder/:id',foldercontroller.put)
	app.delete('/tbl_folder/:id',foldercontroller.delete)
//=======
	//tbl_pivotguru
	app.get('/tbl_pivotguru',pivotgurucontroller.get)
	app.post('/tbl_pivotguru',pivotgurucontroller.post)
	app.put('/tbl_pivotguru/:id',pivotgurucontroller.put)
	app.delete('/tbl_pivotguru/:id',pivotgurucontroller.delete)

//>>>>>>> ebe9c5a6bfe5ad34b2191fd8eeb5e59e075dfae0
//=======
	//tbl_matpel
	app.get('/tbl_matpel',matpelcontroller.get)
	app.post('/tbl_matpel',matpelcontroller.post)
	app.put('/tbl_matpel/:id',matpelcontroller.put)
	app.delete('/tbl_matpel/:id',matpelcontroller.delete)
//>>>>>>> f429cffa04395cedd56210215bf17a8429928187

	//tbl_nilai
	app.get('/tbl_nilai',nilaicontroller.get)
	app.post('/tbl_nilai',nilaicontroller.post)
	app.put('/tbl_nilai/:id',nilaicontroller.put)
	app.delete('/tbl_nilai/:id',nilaicontroller.delete)

	//type controller
	app.get('/url/tbl_type/:id',typecontrollers.getid)
	app.get('/url/tbl_type',typecontrollers.get)
	app.post('/url/tbl_type',typecontrollers.post)
	app.put('/url/tbl_type/:id',typecontrollers.put)
	app.delete('/url/tbl_type/:id',typecontrollers.delete)

	//kelas controller
	app.get('/url/tbl_kelas/:id',kelascontrollers.getid)
	app.get('/url/tbl_kelas',kelascontrollers.get)
	app.post('/url/tbl_kelas',kelascontrollers.post)
	app.put('/url/tbl_kelas/:id',kelascontrollers.put)
	app.delete('/url/tbl_kelas/:id',kelascontrollers.delete)

http.listen(8080,function(){
	console.log("Connected & Listen to port 8080");
});