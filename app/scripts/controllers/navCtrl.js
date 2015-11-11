(function(){
  'use strict'

  angular.module('App')
    .controller('NavCtrl', NavCtrl);

    NavCtrl.$inject = ['Util'];


    function NavCtrl(Util) {
      var vm = this;
      vm.isActiveClass =  Util.isActiveClass;


    }

})();
