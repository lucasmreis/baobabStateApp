angular.module('simpleStateApp').controller('FooCtrl', function(AppState, PointfreeBaobab) {
  var compose = R.compose;
  var prop = R.prop;
  var push = PointfreeBaobab.push;

  var foosCursor = AppState.select('foos');

  var state = { 
    foos: foosCursor.get()
  };

  var form = {
    newFoo: ''
  };

  foosCursor.on('update', 
    function() { state.foos = foosCursor.get() });

  var addFoo = compose(
    push(foosCursor),
    prop('newFoo'));

  this.state = state;
  this.form = form;

  this.addFoo = addFoo;
});