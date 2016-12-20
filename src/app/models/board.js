import Backbone from 'backbone';

const Board = Backbone.Model.extend({
  initialize: function(options) {
    this.layout = [[" "," "," "], [" "," "," "], [" "," "," "]];
  }
});


export default Board;
