import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

const BoardView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
    this.board = options.model;
  },
  render: function(){
    var html = this.template({board: this.board.attributes.layout});
    this.$el.html(html);

    return this;
  },
  events: {
    "click": "clickText"
  },

  clickText: function(event) {
    console.log(event.target.id);
  }

});

export default BoardView;
