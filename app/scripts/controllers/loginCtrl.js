(function(){
'use strict';

angular.module('App')
  .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['AuthService'];


  function LoginCtrl(AuthService) {
        var vm = this;
        vm.currentUser = null;
        vm.user = newUser();
        vm.isLoggedIn = isLoggedIn;
        vm.logIn = logIn;
        vm.logOut = logOut;
        vm.error = null;


        // Handle Email/Password login
        function logIn() {
          // console.log(vm.user);
          AuthService.$authWithPassword(vm.user)
              .then(function(authData) {
                    console.log("User logged in: " + authData.uid);
              }).catch(function(error) {
                    console.error("Authentication failed:", error);
                    vm.error = error.message;
              });
        }

        function logOut() {
          console.log("Logging out");
          AuthService.$unauth();
        }

        AuthService.$onAuth(function(authData) {
          if (authData){
             console.log("User " + authData.uid + " is logged in with " + authData.provider);
            vm.currentUser = authData;
          }
        });

        function isLoggedIn(){
          return vm.currentUser;
        }

        function resetForm(){
          vm.user = newUser();
          vm.error = null;
        }

        function newUser(){
         return {email:'', password:'' }
        }
 }

})();
