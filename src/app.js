import Backbone from 'backbone';
import $ from 'jquery';
import Board from 'app/models/board';
import BoardView from 'app/views/board_view';
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';


$(document).ready(function(){

  var boardTest = new Application();

  var appView = new ApplicationView({
    el: 'html',
    model: boardTest
  });

  appView.render();

});
