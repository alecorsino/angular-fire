(function(){
'use strict';

angular.module('App')
    .factory('Util', Util);

    Util.$inject = ['$location'];

    function Util($location){
        var service = {
          isActiveClass:isActiveClass
        }
        return service;

        function isActiveClass(path) {
            if ($location.path().substr(0, path.length) === path) {
              return 'active';
            } else {
              return '';
            }
        }
    }


})();
