(function(){
    angular.module('app').run(run);

    function run(authService){
        authService.handleAuthentication()
    }
})();