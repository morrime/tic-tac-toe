import Board from 'app/models/board';
import Backbone from 'backbone';

var testBoard = [[1,2,3], [4,5,6], [7,8,9]];

const Application = Backbone.Model.extend({
  initialize: function(){
    this.board = new Board( {
      layout: testBoard
    });
  }
});


export default Application;
