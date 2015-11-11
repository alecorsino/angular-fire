(function(){
'use strict';

angular.module('app.routes',['ngRoute'])
  .config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        redirectTo:'/home'
      })
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


})();
