var express = require('express');
var bodyParser = require('body-parser');
var todos = [];
var todoIterate = 1;

var app = express();
var PORT = process.env.PORT || 3001;

app.use( bodyParser.json() );

app.post('/todo', function( req, res){
	body = req.body; // req.body has all the information of the post reequest
	body.id = todoIterate++;
	todos.push( body );
    res.json(body);
});

app.get('/', function( req, res ){
	res.send( 'Hello World!!');
});

app.get('/todo', function( req, res ){
	res.json(todos);
});

app.get('/todo/:id', function( req, res){
	var todoId = parseInt(req.params.id, 10);
	var matchedTodo;

	todos.forEach( function(todo){
		if(todo.id === todoId){
			matchedTodo = todo;
		}
	});

	if(matchedTodo){
		res.json(matchedTodo);
	} else{
		res.status(404).send();
	}
})

app.use(express.static( __dirname + '/public'));

app.listen( PORT, function(){
	console.log( 'Server Started on Port : ' + PORT );
})