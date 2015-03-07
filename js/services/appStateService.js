angular.module('simpleStateApp').factory('AppStateService', function(StorageService) {
  var initial = {
    foos: [],
    bars: []
  };

  var state = new Baobab(
    StorageService.load('baobab', initial),
    { 
      asynchronous: false,
      maxHistory: 10
    }
  );

  return state;
});