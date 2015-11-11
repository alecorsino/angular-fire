'use strict';

describe('Service: Util', function () {

  // load the service's module
  // beforeEach();

  // instantiate service
  var util, location;
  beforeEach(function(){
      module(function($provide){
        $provide.service('$location', function(){
          this.path = function(){ return '/main'};
        });

      });
      module('App')
  });

  beforeEach(inject(function (Util,$location) {
    // spyOn($location, 'path').and.returnValue('http://localhost:9000/#/main');
    util = Util;
    location = $location;

  }));

  it('Instantiation', function () {
    expect(!!util).toBe(true);
  });

  it('Should return class active if URL location contains path', function () {
    expect(util.isActiveClass('/main')).toBe('active');
  });

});
