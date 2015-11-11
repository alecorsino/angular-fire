(function(){
'use strict';

  angular
      .module('App')
      .run(runBlock);

  runBlock.$inject = ['AuthService'];

  function runBlock(AuthService) {
     AuthService.$unauth();
  }


})();
