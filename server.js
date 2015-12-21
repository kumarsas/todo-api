var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
 	id:1,
 	name: 'Ashish',
 	city: 'Salt Lake City'
 },
 {
 	id:2,
 	name: 'Maitreyi',
 	city: 'New York City'
 }];

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