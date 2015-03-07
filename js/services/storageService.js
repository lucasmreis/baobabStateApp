angular.module('simpleStateApp').factory('StorageService', function() {
  var curry = R.curry;

  var save = curry(function(prop, items) {
    window.localStorage.setItem('simple-app-' + prop, JSON.stringify(items));
    return items;
  });

  var load = function(prop, defaultValue) {
    var items = JSON.parse(window.localStorage.getItem('simple-app-' + prop));
    return items ? items : defaultValue;
  };

  return {
    save: save,
    load: load
  };
});