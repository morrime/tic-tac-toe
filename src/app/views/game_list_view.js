import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';


var GameListView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
    this.gameList = options.model;
    // this.model.forEach(function(game) {
    //   gameList.push(game);
    // });

    this.listenTo(this.gameList, 'update', this.render);
  },

  render: function(){
    var html = this.template({gameList: this.gameList});
    this.$el.html(html);
    return this;
  },

});

export default GameListView;
