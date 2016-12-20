import Backbone from 'backbone';
import Game from 'app/models/game';
import $ from 'jquery';
import _ from 'underscore';

const BoardView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
    this.board = options.model;
    this.game = options.game;

    this.listenTo(this.model, "update", this.render);
  },

  render: function(){
    var html = this.template({board: this.board.attributes.layout});
    this.$el.html(html);

    return this;
  },

  events: {
    "click": "clickHandler"
  },

  clickHandler: function(event) {
    var htmlId = event.target.id;

    var positionMap = {
      "top-left": [0][0],
      "top-middle": [0][1],
      "top-right": [0][2],
      "middle-left": [1][0],
      "middle-middle": [1][1],
      "middle-right": [1][2],
      "bottom-left": [2][0],
      "bottom-middle": [2][1],
      "bottom-right": [2][2]
    }

    var mappedHtml = positionMap[htmlId];

    this.game.play(mappedHtml)
  }

});

export default BoardView;
