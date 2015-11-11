(function(){
  'use strict'

  angular.module('App')
    .controller('NavCtrl', NavCtrl);

    NavCtrl.$inject = ['Util','$location'];


    function NavCtrl(Util,$location) {
      var vm = this;
      vm.isActiveClass =  Util.isActiveClass;


    }

})();
