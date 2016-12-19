import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import BoardView from 'app/views/board_view';


const ApplicationView = Backbone.View.extend({
  initialize: function(options) {

    this.board = options.model;
    console.log(this.board);
    this.boardTemplate = _.template($("#board").html());
  },
  render: function() {
    var board = new BoardView({
      model: this.board,
      template: this.boardTemplate
    });
    board.render();
    console.log(board);
    return this;
  }
});

export default ApplicationView;
