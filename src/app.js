import Backbone from 'backbone';
import $ from 'jquery';
import Board from 'app/models/board';
import BoardView from 'app/views/board_view';
import Game from 'app/models/game';
import GameView from 'app/views/game_view';
import GameList from 'app/collections/game_list';



$(document).ready(function(){

  var game = new Game();
  // game.fetch();

  var gameList = new GameList();
  gameList.fetch();
  debugger;
  var gmView = new GameView({
    el: 'main',
    model: game.board,
    collection: gameList,
    game: game
  });

  gmView.render();

});
