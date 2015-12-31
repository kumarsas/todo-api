var todoApp = angular.module( 'todoApp', []);

todoApp.controller('todoCtrl', function( $scope, $http ){

	$scope.formdata = {};
	$http.get('/todo')
		.success(function(data){
			$scope.todos =  data;
			console.log(data);
		})
		.error(function(data){
			console.log('Error'+data)
		});

	$scope.createTodo = function(){
		$http.post('/todo', $scope.formdata)
		.success(function(data){
			$scope.formdata = {};
			$scope.todos =  data;
			console.log(data);
		})
		.error(function(data){
			console.log('Error'+data)
		});
	};
});