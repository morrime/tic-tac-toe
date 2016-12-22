import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';


var GameListView = Backbone.Collection.extend({
  initialize: function(options) {
    this.template = options.template;
    this.gameList = [];
    this.model.forEach(function(game) {
      gameList.push(game);
    });

    this.listenTo(this.gameList, 'update', this.render);
  },

  render: function(){
    var html = this.template({gameList: this.gameList});
    console.log("YOLO" + html);
    console.log("####################" + this.gameList.attributes);
    this.$el.html(html);

    return this;
  },

});

export default GameListView;
