import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import BoardView from 'app/views/board_view';
import GameListView from 'app/views/game_list_view';

const GameView = Backbone.View.extend({
  initialize: function(options) {
    this.game = options.game;
    this.board = options.model;
    this.gameList = options.collection;

    // options.collection.forEach(function(jsonGame) {
    //   this.addGame(jsonGame);
    // }, this);

    this.boardTemplate = _.template($("#board").html());
    this.listTemplate = _.template($("#game-list").html());
  },

  render: function() {
    var boardSquare = this.$('#board-table');
    boardSquare.empty();

    var board = new BoardView({
      el: '#board-table',
      model: this.board,
      template: this.boardTemplate,
      game: this.game
    });
    board.render();

    var list = this.$('#game-list');
    list.empty();

    var list = new GameListView({
      el: '#previous-games',
      model: this.gameList,
      template: this.listTemplate
    });
    list.render();

    return this;
  },

  addGame: function(game) {
    // Create a card for the new game
    var game = new Game();



    // Add the card to our card list
    this.gameList.push(game);
  }

});

export default GameView;
