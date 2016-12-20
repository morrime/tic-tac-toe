import Backbone from 'backbone';

const Board = Backbone.Model.extend({
  initialize: function(options) {
    this.layout = [[" "," "," "], [" "," "," "], [" "," "," "]];
  },

  placeMarker: function(options) {
    this.layout[options.row][options.column] = options.marker;
    this.trigger("change",{});
  }
});


export default Board;
