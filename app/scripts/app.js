(function(){
'use strict';

/**
 * @ngdoc overview
 * @name angularFireApp
 * @description
 * # angularFireApp
 *
 * Main module of the application.
 */
angular
  .module('App', [
    'app.routes',
    'app.config',

    'firebase',
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

})();
