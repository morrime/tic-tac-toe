import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

const BoardView = Backbone.View.extend({
  initialize: function(options) {
    this.boardTemplate = _.template($("#board").html());
  }

});

export default BoardView;
