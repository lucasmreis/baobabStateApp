angular.module('simpleStateApp').controller('ReadOnlyCtrl', function(AppState) {
  
  var state = AppState.get();

  var foosCursor = AppState.select('foos');
  var barsCursor = AppState.select('bars');

  foosCursor.on('update', 
    function() { state.foos = foosCursor.get(); console.log('FOOS', state.foos); });

  barsCursor.on('update', 
    function() { state.bars = barsCursor.get(); console.log('BARS', state.bars); });

  this.state = state;
});