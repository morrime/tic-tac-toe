import Backbone from 'backbone';
import $ from 'jquery';
import Board from 'app/models/board';
import BoardView from 'app/views/board_view';
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';


$(document).ready(function(){

  var boardTest = new Application();
  // console.log(boardTest.board.attributes.layout);
  var appView = new ApplicationView({
    el: 'main',
    model: boardTest.board
  });

  appView.render();

});
