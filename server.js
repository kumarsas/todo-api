var express = require('express');
var app = express();
var PORT = 3000;

app.get('/', function( req, res ){
	res.send( 'Hello World!!');
});

app.use(express.static( __dirname + '/public'));

app.listen( PORT, function(){
	console.log( 'Server Started on Port : ' + PORT );
})