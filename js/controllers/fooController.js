angular.module('simpleStateApp').controller('FooCtrl', function(AppState) {
  var foosCursor = AppState.select('foos');

  var state = { 
    foos: foosCursor.get()
  };

  var form = {
    newFoo: ''
  };

  foosCursor.on('update', 
    function() { state.foos = foosCursor.get() });

 var addFoo = function(form) {
    foosCursor.push(form.newFoo);
  };

  this.state = state;
  this.form = form;

  this.addFoo = addFoo;
});