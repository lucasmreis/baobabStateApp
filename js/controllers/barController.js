angular.module('simpleStateApp').controller('BarCtrl', function(AppState, PointfreeBaobab) {
  var compose = R.compose;
  var get = R.get;
  var not = R.not;
  var contains = R.contains;
  var always = R.always;
  var push = PointfreeBaobab.push;
  var edit = PointfreeBaobab.edit;

  var foosCursor = AppState.select('foos');
  var barsCursor = AppState.select('bars');

  var state = AppState.get();

  var form = {
    newBar: ''
  };

  foosCursor.on('update', 
    function() { state.foos = foosCursor.get(); });

  barsCursor.on('update', 
    function() { state.bars = barsCursor.get(); });

  var addBar = compose(
    push(barsCursor),
    get('newBar'));

  var cannotAddBar = compose(
    not(contains('requiredFoo')),
    get('foos'));

  var clearState = function() {
    compose(
      edit(barsCursor),
      always([]),
      edit(foosCursor)
    )([]);
  };

  var undo = function() { 
    if (AppState.hasHistory()) { 
      AppState.undo(); 
    }
  };

  this.state = state;
  this.form = form;

  this.addBar = addBar;
  this.cannotAddBar = cannotAddBar;
  this.clearState = clearState;
  this.undo = undo;
});