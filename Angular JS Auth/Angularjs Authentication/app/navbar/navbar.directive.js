(function(){


    angular.module('app').directive('appNavbar',navbar);

    function navbar(){
        return {
            templateUrl:'app/navbar/navbar.html',
            controller:navbarController,
            controllerAs:'vm'
        }
    }
    function navbarController(authService) {
        var vm = this;

        vm.auth = authService
    }

})();