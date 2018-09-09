(function(){
    angular.module('app')
    .controller('HomeController', homeController)


    homeController.$inject = ['$http', 'authService']
    function homeController($http, authService){
        var vm = this;

        vm.auth = authService

        vm.message = "";
        vm.getMessage = function() {
            $http.get('http://localhost:8080/authorized')
                .then((result) => {
                    vm.message = result.data.message
                }).catch((err) => {
                    console.log(err)
                });
        }

    }
})();