var app = angular.module('furniture', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when ('/', {
			templateUrl: 'views/homeView.html',
			controller: 'HomeViewController'
		})
		.when ('/views/all',{
			templateUrl: 'views/productView.html',
			controller: 'HomeViewController'
		})
		.when ('/views/:category', {
			templateUrl: 'views/productView.html',
			controller: 'HomeViewController'
		})
		.when ('/views/:category/:id', {
			templateUrl: 'views/specificProductView.html',
			controller: 'HomeViewController'
		})
		.when ('/contact', {
			templateUrl: 'views/formView.html',
			controller: 'FormViewController'
		})

		.otherwise({
			redirectTo: '/'
		})
}]);


app.controller('HomeViewController', ['$scope', "$http", '$routeParams', function($scope, $http, $routeParams){
	$http.get('json/furniture.json').success(function(data){
		$scope.products=data;
		if($routeParams.id){
			$scope.items = [$scope.products[$routeParams.id-1]]
    	};
	})	
}])//crear un controlador con un scope; hay que mentarlo en el html donde quieres que actue
