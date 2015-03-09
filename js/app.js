angular.module('simpleStateApp', []).run(function(StorageService, AppState) {
    AppState.on('update', 
      function() { 
        StorageService.save('baobab', AppState.get()); 
      });
  });
