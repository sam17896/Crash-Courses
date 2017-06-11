var myApp = angular.module('myApp',['ngRoute']);


myApp.config(function ($routeProvider) {
	$routeProvider.when('/',{
		controller : 'BooksController',
		templateUrl : 'views/book.html'
	})
	.when('/books',{
		controller : 'BooksController',
		templateUrl : 'views/books.html'
	})
	.when('/books/details/:_id',{
		controller : 'BooksController',
		templateUrl : 'views/bookDetail.html'
	})
	.when('books/add',{
		controller : 'BooksController',
		templateUrl : 'views/addBook.html'
	})
	.when('books/edit/:id',{
		controller : 'BooksController',
		templateUrl : 'views/editBook.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});