

var polyApp = angular.module('polyApp', ['ngRoute']);

polyApp.config(function($routeProvider){
	$routeProvider
		.when('/',
			{
				controller: 'AppController',
				templateUrl: 'partials/about.html'
			})
		.when('/monomino', 
			{
				controller: 'AppController',
				templateUrl: 'partials/monomino.html'		
			})
		.when('/domino',
			{
				controller: 'AppController',
				templateUrl: 'partials/domino.html'
			})
		.when('/tromino',
			{
				controller: 'AppController',
				templateUrl: 'partials/tromino.html'
			})
		.when('/tetromino',
			{
				controller: 'AppController',
				templateUrl: 'partials/tetromino.html'
			})
		.when('/pentomino',
			{
				controller: 'AppController',
				templateUrl: 'partials/pentomino.html'
			})
		.when('/hexomino',
			{
				controller: 'AppController',
				templateUrl: 'partials/hexomino.html'
			})
		.when('/heptomino',
			{
				controller: 'AppController',
				templateUrl: 'partials/heptomino.html'
			})
		.when('/octomino', 
			{
				controller: 'AppController',
				templateUrl: 'partials/octomino.html'
			})
		.when('/sorry',
			{
				controller: 'AppController',
				templateUrl: 'partials/sorry.html'
			})
		.otherwise({redirectTo: '/' });
});

polyApp.controller('AppController', function($scope, $location){
	$scope.selections = [];
	var translation = {"1":"monomino", "2":"domino", "3":"tromino", "4":"tetromino", "5":"pentomino", "6":"hexomino", "7":"heptomino", "8":"octomino"};
	
	$scope.addSelection = function(path){
		var path = $scope.userSelection;
		var direction = null;
		if(translation[path]==undefined){
			direction = "sorry";
		}else{
			direction = translation[path];
		}
		$scope.selections.push(translation[path]);
		$location.path(direction);
	};
});

