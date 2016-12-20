import Backbone from 'backbone';

const Board = Backbone.Model.extend({
  defaults: {
    layout: [[" "," "," "], [" "," "," "], [" "," "," "]]
  }
});


export default Board;
