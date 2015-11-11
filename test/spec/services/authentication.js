'use strict';

describe('Service: authentication', function () {

  // load the service's module
  beforeEach(module('App'));

  // instantiate service
  var authentication;
  beforeEach(inject(function (AuthService) {
    authentication = AuthService;
  }));

  it('should do something', function () {
    expect(!!authentication).toBe(true);
  });

});
