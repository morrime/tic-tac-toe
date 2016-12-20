import Backbone from 'backbone';

const Board = Backbone.Model.extend({
  defaults: {
    layout: [[null,null,null], [null,null,null], [null,null,null]]
  }
});


export default Board;
