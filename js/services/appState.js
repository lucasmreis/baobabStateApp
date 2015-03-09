angular.module('simpleStateApp').factory('AppState', function($rootScope, $timeout, StorageService) {
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

  state.on('update', function() {
    // because of error -> Error: [$rootScope:inprog] $apply already in progress
    $timeout(function() { $rootScope.$apply(); }, 0, false);
  });

  return state;
});