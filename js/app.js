angular.module('simpleStateApp', []).run(function(StorageService, AppStateService) {
    AppStateService.on('update', 
      function() { 
        StorageService.save('baobab', AppStateService.get()); 
      });
  });
