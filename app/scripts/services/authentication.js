(function(){
'use strict';

angular.module('App')
    .factory('AuthService', FirebaseAuth);

    FirebaseAuth.$inject = ['FIREBASE_URL', '$firebaseAuth'];

    function FirebaseAuth(FIREBASE_URL, $firebaseAuth){
      return $firebaseAuth (new Firebase(FIREBASE_URL));
    }

})();
