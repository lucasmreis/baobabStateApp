angular.module('simpleStateApp').controller('BarCtrl', function(AppState) {
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

  var addBar = function(form) {
    barsCursor.push(form.newBar);
  };

  var cannotAddBar = function(state) {
    return state.foos.indexOf('requiredFoo') === -1;
  };

  var clearState = function() {
    foosCursor.edit([]);
    barsCursor.edit([]);
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