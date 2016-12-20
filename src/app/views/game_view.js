import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import BoardView from 'app/views/board_view';


const GameView = Backbone.View.extend({
  initialize: function(options) {
    this.game = options.game
    this.board = options.model;
    this.boardTemplate = _.template($("#board").html());
  },

  render: function() {
    var board = new BoardView({
      el: '#board-table',
      model: this.board,
      template: this.boardTemplate,
      game: this.game
    });
    board.render();
    return this;
  }
});

export default GameView;
