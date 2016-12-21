import Backbone from 'backbone';
import $ from 'jquery';
import Board from 'app/models/board';
import BoardView from 'app/views/board_view';
import Game from 'app/models/game';
import GameView from 'app/views/game_view';



$(document).ready(function(){

  var game = new Game();
  // game.fetch();

  var gmView = new GameView({
    el: 'main',
    model: game.board,
    game: game
  });

  gmView.render();

});
