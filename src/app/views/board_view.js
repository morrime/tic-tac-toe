import Backbone from 'backbone';
import Game from 'app/models/game';
import $ from 'jquery';
import _ from 'underscore';

const BoardView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
    this.board = options.model;
    this.game = options.game;

    this.listenTo(this.board, 'change', this.render);
  },

  render: function(){
    var html = this.template({board: this.board.layout});
    this.$el.html(html);

    return this;
  },

  events: {
    "click": "clickHandler"
  },

  clickHandler: function(event) {
    var htmlId = event.target.id;
    var split = htmlId.split("-");
    console.log(split);
    var positionMap = {
      "top": 0,
      "middle": 1,
      "bottom": 2,
      "left": 0,
      "right": 2
    };

    var row = positionMap[split[0]];
    var column = positionMap[split[1]];

    this.game.play({row: row, column: column});
  }

});

export default BoardView;
