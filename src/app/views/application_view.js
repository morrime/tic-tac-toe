import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import BoardView from 'app/views/board_view';


const ApplicationView = Backbone.View.extend({
  initialize: function(options) {
    this.board = options.model;
    this.applicationTemplate = _.template($("#board").html());
  },
  render: function() {
    var board = new BoardView({
      model: this.board,
      template: this.applicationTemplate
    });
    board.render();
    console.log(board);
    return this;
  }
});

export default ApplicationView;
