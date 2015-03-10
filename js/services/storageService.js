angular.module('simpleStateApp')
  .factory('StorageService', function() {
  
  var save = function(prop, items) {
    window.localStorage.setItem(
      'baobab-app-' + prop, 
      JSON.stringify(items));
    return items;
  };

  var load = function(prop, defaultValue) {
    var items = JSON.parse(
      window.localStorage.getItem(
        'baobab-app-' + prop));
    return items ? items : defaultValue;
  };

  return {
    save: save,
    load: load
  };
});