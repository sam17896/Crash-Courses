(function(window) {

angular.module('app', ['ngSanitize','ui.router'])
.directive('tabset', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        type: '@',
        vertical: '=',
        justified: '=',
        tabs:'=',
        contentUrl:'=contentUrl',
        select:'&'
      },
      templateUrl: 'tabset.html',
      bindToController: true,
      controllerAs: 'tabset',
      controller: function() {
        var self = this
        self.classes = {}
        if(self.type === 'pills') { self.classes['nav-pills'] = true}
        else { self.classes['nav-tabs'] = true }
        if(self.justified) { self.classes['nav-justified'] = true }
        if(self.vertical) { self.classes['nav-stacked'] = true }
      }
    }
})
.controller('appController', function($scope){
    // $scope.tabs = [
    //     {disabled:false,active:true,heading:'tab1',img:"https://image.flaticon.com/icons/svg/927/927549.svg",contentUrl:'tab1.html'},
    //     {active:false,disabled:false,heading:'tab2',img:"https://image.flaticon.com/icons/svg/927/927568.svg",contentUrl:'tab2.html'}
    // ]

    $scope.contentUrl = "tab2.html"

    $scope.tabs = [
        {disabled:false,active:true,heading:'tab1',img:"list",state:"hello",contentUrl:'tab1.html'},
        {active:false,disabled:false,heading:'tab2',img:"list",state:"about",contentUrl:'tab2.html'}
    ]

    $scope.select = function(selectedTab) {
        console.log(selectedTab)
        $scope.contentUrl = selectedTab.contentUrl
        if(selectedTab.disabled) { return }

        angular.forEach($scope.tabs, function(tab) {
        if(tab.active && tab !== selectedTab) {
            tab.active = false;
        }
        })

        selectedTab.active = true;
    }


})
.config(function($stateProvider) {
    var helloState = {
      name: 'hello',
      url: '/hello',
      templateUrl: 'tab1.html'
    }

    var aboutState = {
      name: 'about',
      url: '/about',
      templateUrl: 'tab2.html'
    }

    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
  });
// Define directives here

})(window);