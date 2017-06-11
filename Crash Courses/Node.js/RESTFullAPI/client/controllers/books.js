var myApp = angular.module('myApp');

myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('BooksController loaded...');

	$scope.getBooks = function(){
		$http.get('/api/books').then(successCallback, errorCallback);

		function successCallback(response){
    		//success code
    		$scope.books = response.data;
    		console.log($scope.books)
		}
		function errorCallback(error){
		    //error code
		}
	}

	$scope.getBook = function(){
		var id = $routeParams.id;
		$http.get('/api/books/id'+id).then(successCallback, errorCallback);

		function successCallback(response){
    		//success code
    		$scope.book = response.data;
    		console.log($scope.books)
		}
		function errorCallback(error){
		    //error code
		}
	}








}]);