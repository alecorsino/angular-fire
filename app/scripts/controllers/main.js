(function(){
'use strict'

    angular.module('App')
      .controller('MainCtrl', MainCtrl);

      MainCtrl.$inject = ['$location'];

      function MainCtrl ($location) {
        var vm = this;
        vm.hola = 'Hola!';
          vm.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
          ];

          vm.isActiveClass =  isActiveClass;//Util.isActiveClass;

          function isActiveClass(path) {
              if ($location.path().substr(0, path.length) === path) {
                console.log("Path:",path);
              return 'active';
              } else {
              return '';
              }
          }
        }


}());
