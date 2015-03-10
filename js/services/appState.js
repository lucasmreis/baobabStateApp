angular.module('simpleStateApp').factory('AppState', function($rootScope, StorageService) {
  var initial = {
    foos: [],
    bars: []
  };

  var state = new Baobab(
    StorageService.load('baobab', initial),
    { 
      maxHistory: 10
    }
  );

  state.on('update', function () {
    setTimeout(function () {
      $rootScope.$apply();
    }, 0);
  });

  return state;
});