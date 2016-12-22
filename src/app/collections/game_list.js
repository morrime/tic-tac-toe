import Backbone from 'backbone';
import Game from 'app/models/game';

var GameList = Backbone.Collection.extend({
  model: Game,
  url: "http://localhost:3000/api/v1/games",
  parse: function(data) {
    return data;
  }
});

export default GameList;
