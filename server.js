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

var usercontroller = require('./user');
var typecontroller = require('./type');
var kelascontroller = require('./kelas');
var statuscontroller = require('./status');
var kkmcontroller = require('./kkm');
var tlpcontroller = require('./tlp');
<<<<<<< HEAD
var foldercontroller = require('./folder');
=======
var matpelcontroller =require('./matpel');
>>>>>>> f429cffa04395cedd56210215bf17a8429928187


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

	
	//tbl_user
	app.get('/tbl_user',usercontroller.get)
	app.post('/tbl_user',usercontroller.post)
	app.put('/tbl_user/:id',usercontroller.put)
	app.delete('/tbl_user/:id', usercontroller.delete)

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

<<<<<<< HEAD
	//tbl_folder
	app.get('/tbl_folder',foldercontroller.get)
	app.post('/tbl_folder',foldercontroller.post)
	app.put('/tbl_folder/:id',foldercontroller.put)
	app.delete('/tbl_folder/:id',foldercontroller.delete)
=======
	//tbl_matpel
	app.get('/tbl_matpel',matpelcontroller.get)
	app.post('/tbl_matpel',matpelcontroller.post)
	app.put('/tbl_matpel/:id',matpelcontroller.put)
	app.delete('/tbl_matpel/:id',matpelcontroller.delete)
>>>>>>> f429cffa04395cedd56210215bf17a8429928187

http.listen(8080,function(){
	console.log("Connected & Listen to port 8080");
});