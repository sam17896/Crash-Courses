(function(){
    angular
    .module('app',['auth0.auth0','angular-jwt','ui.router'])
    .config(config);


    config.$inject = [
        '$httpProvider',
        'jwtOptionsProvider',
        '$stateProvider',
        '$locationProvider',
        '$urlRouterProvider',
        'angularAuth0Provider',
    ]
    function config ($httpProvider, jwtOptionsProvider, $stateProvider, $locationProvider, $urlRouterProvider, angularAuth0Provider)
    {
        $stateProvider.state('home',{
            url:'/',
            controller:'HomeController',
            templateUrl:'app/home/home.html',
            controllerAs:'vm'
        })
        .state('callback',{
            url:'/callback',
            controller:'CallbackController',
            templateUrl:'app/callback/callback.html',
            controllerAs:'vm'
        })
        .state('profile',{
            url:'/profile',
            controller:'ProfileController',
            templateUrl:'app/profile/profile.html',
            controllerAs:'vm'
        });

        angularAuth0Provider.init({
            clientID: 'AL6ChsorMibA28gRbyzPflGFeol2j1N8',
            domain: 'creativelair.auth0.com',
            responseType:'token id_token',
            redirectUri: 'http://localhost:3000/callback',
            scope:'openid profile',
            audience:'https://creativelair.com/api'
        })

        jwtOptionsProvider.config({
            tokenGetter: function () {
                return localStorage.getItem('access_token');
            },
            whiteListedDomains: ['localhost']
        })

        $httpProvider.interceptors.push('jwtInterceptor');

        $urlRouterProvider.otherwise('/');

        $locationProvider.hashPrefix('');
        $locationProvider.html5Mode(true);
    }

})();